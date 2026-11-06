import os, sys, tempfile
os.environ["PRACTICAPE_DB"] = "sqlite:///" + tempfile.mktemp(suffix=".db")
os.environ["OTP_DEV_CODE"] = "1"
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import pytest
from fastapi.testclient import TestClient
from app.main import app
from app.core.database import SessionLocal
from app import models

client = TestClient(app)

def auth(email, name="", role="candidate"):
    r = client.post("/auth/request-otp", json={"email": email, "name": name, "role": role})
    assert r.status_code == 200, r.text
    code = r.json()["dev_code"]
    r = client.post("/auth/verify-otp", json={"email": email, "code": code})
    assert r.status_code == 200, r.text
    return {"Authorization": f"Bearer {r.json()['access_token']}"}

@pytest.fixture(scope="module")
def users():
    return {
        "biz": auth("biz@test.pe", "Biz", "business"),
        "cand": auth("cand@test.pe", "Cand", "candidate"),
        "admin": auth("admin@test.pe", "Admin", "admin"),
    }

def make_job(users, title="Cajero Piura", modality="presencial", district="Castilla"):
    r = client.post("/jobs", headers=users["biz"], json={
        "title": title, "description": "Atención al cliente", "modality": modality,
        "district": district, "city": "Piura", "lat": -5.19, "lng": -80.63,
        "salary": "S/ 700", "status": "published"})
    assert r.status_code == 200, r.text
    return r.json()

def test_auth_otp_flow():
    r = client.post("/auth/request-otp", json={"email": "x@test.pe"})
    assert r.status_code == 200 and "dev_code" in r.json()
    code = r.json()["dev_code"]
    r = client.post("/auth/verify-otp", json={"email": "x@test.pe", "code": "000000"})
    assert r.status_code == 400
    r = client.post("/auth/verify-otp", json={"email": "x@test.pe", "code": code})
    assert r.status_code == 200 and r.json()["access_token"]

def test_jobs_search_and_hidden_contact(users):
    job = make_job(users)
    # candidate lists with filters
    r = client.get("/jobs", headers=users["cand"], params={"modality": "presencial", "district": "Castilla", "q": "Cajero"})
    assert r.status_code == 200 and any(j["id"] == job["id"] for j in r.json())
    # detail: contact hidden before applying
    r = client.get(f"/jobs/{job['id']}", headers=users["cand"])
    assert r.json()["contact"] == {}
    # map includes it
    r = client.get("/jobs/map")
    assert any(m["id"] == job["id"] for m in r.json())
    return job["id"]

def test_apply_unique_and_contact_reveal(users):
    job = make_job(users, "Vendedor Unico")
    h = users["cand"]
    r = client.post(f"/jobs/{job['id']}/apply", headers=h, json={"message": "Me interesa"})
    assert r.status_code == 200, r.text
    r = client.post(f"/jobs/{job['id']}/apply", headers=h, json={})
    assert r.status_code == 400  # unique
    r = client.get(f"/jobs/{job['id']}", headers=h)
    assert r.json()["applied"] and r.json()["contact"].get("company")
    # business gets notification + sees applicant
    r = client.get("/me/notifications", headers=users["biz"])
    assert any(n["type"] == "application" for n in r.json())
    r = client.get(f"/jobs/{job['id']}/applicants", headers=users["biz"])
    assert r.status_code == 200 and len(r.json()) == 1
    app_id = r.json()[0]["id"]
    r = client.patch(f"/jobs/{job['id']}/applicants/{app_id}", headers=users["biz"], json={"status": "reviewed"})
    assert r.status_code == 200
    r = client.get("/me/notifications", headers=h)
    assert any(n["type"] == "application_status" for n in r.json())

def test_save_and_profile_cv(users):
    job = make_job(users, "Para Guardar")
    h = users["cand"]
    assert client.post(f"/jobs/{job['id']}/save", headers=h).status_code == 200
    r = client.get("/jobs/saved/mine", headers=h)
    assert any(j["id"] == job["id"] for j in r.json())
    assert client.delete(f"/jobs/{job['id']}/save", headers=h).status_code == 200
    client.put("/me/profile", headers=h, json={"headline": "Estudiante", "skills": "Python,Excel"})
    r = client.post("/me/profile/items", headers=h, json={"kind": "experience", "title": "Practica", "org": "Demo"})
    assert r.status_code == 200
    r = client.post("/me/profile/photos", headers=h, json={"url": "https://x/y.jpg", "kind": "avatar"})
    assert r.status_code == 200
    r = client.get("/me/cv", headers=h)
    assert r.status_code == 200 and "Estudiante" in r.text

def test_social_import_and_collect(users):
    r = client.post("/social/import", headers=users["biz"],
                    json={"text": "Se necesita cajero en Castilla Piura, remoto S/ 800"})
    assert r.status_code == 200, r.text
    assert r.json()["source"] == "social" and r.json()["status"] == "draft"
    assert r.json()["district"] == "Castilla"
    r = client.get("/collect/status", headers=users["admin"])
    assert r.status_code == 200
    # candidate cannot run collector
    assert client.post("/collect/run", headers=users["cand"], json={}).status_code == 403

def test_business_admin_companies_intake(users):
    client.put("/business/profile", headers=users["biz"], json={"name": "Mi Empresa", "sector": "Comercial", "phone": "999111222"})
    r = client.get("/business/dashboard", headers=users["biz"])
    assert r.status_code == 200 and "jobs" in r.json()
    r = client.get("/companies")
    assert r.status_code == 200
    r = client.post("/intake", json={"name": "Lead", "email": "l@test.pe", "message": "Hola", "type": "business"})
    assert r.status_code == 200
    r = client.get("/admin/dashboard", headers=users["admin"])
    assert r.status_code == 200 and "kpis" in r.json() and "charts" in r.json()
    r = client.get("/admin/queue", headers=users["admin"])
    assert r.status_code == 200
    if r.json():
        jid = r.json()[0]["id"]
        assert client.patch(f"/admin/queue/{jid}", headers=users["admin"], params={"action": "approve"}).status_code == 200
    assert client.get("/admin/otps", headers=users["admin"]).status_code == 200
    assert client.get("/admin/leads", headers=users["admin"]).status_code == 200
    # non-admin forbidden
    assert client.get("/admin/dashboard", headers=users["cand"]).status_code == 403

def test_health():
    assert client.get("/health").json()["ok"] is True
