/* Practicape — cliente de API y utilidades compartidas. */
"use strict";

const API = "";
const store = {
  get token() { return localStorage.getItem("pp_token") || ""; },
  set token(v) { v ? localStorage.setItem("pp_token", v) : localStorage.removeItem("pp_token"); },
  get user() { try { return JSON.parse(localStorage.getItem("pp_user") || "null"); } catch (e) { return null; } },
  set user(v) { v ? localStorage.setItem("pp_user", JSON.stringify(v)) : localStorage.removeItem("pp_user"); }
};

async function api(path, opts = {}) {
  const headers = Object.assign({ "Content-Type": "application/json" }, opts.headers || {});
  if (store.token) headers.Authorization = "Bearer " + store.token;
  const res = await fetch(API + path, Object.assign({}, opts, { headers }));
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(typeof data.detail === "string" ? data.detail : (data.detail || res.statusText || "Error"));
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
}

function initials(name) {
  const t = String(name || "").trim();
  if (!t) return "·";
  return t.split(/\s+/).slice(0, 2).map(w => w[0].toUpperCase()).join("");
}

function timeAgo(value) {
  if (!value) return "Fecha no indicada";
  const date = new Date(String(value).replace(" ", "T"));
  if (isNaN(date.getTime())) return String(value);
  const sec = Math.max(1, Math.floor((Date.now() - date.getTime()) / 1000));
  if (sec < 60) return "Hace unos segundos";
  const min = Math.floor(sec / 60);
  if (min < 60) return `Hace ${min} min`;
  const h = Math.floor(min / 60);
  if (h < 24) return `Hace ${h} h`;
  const d = Math.floor(h / 24);
  if (d < 30) return `Hace ${d} día${d === 1 ? "" : "s"}`;
  const m = Math.floor(d / 30);
  if (m < 12) return `Hace ${m} mes${m === 1 ? "" : "es"}`;
  return `Hace ${Math.floor(m / 12)} año${Math.floor(m / 12) === 1 ? "" : "s"}`;
}

function dateShort(value) {
  if (!value) return "";
  const d = new Date(String(value).replace(" ", "T"));
  if (isNaN(d.getTime())) return String(value).slice(0, 10);
  return d.toLocaleDateString("es-PE", { day: "numeric", month: "short", year: "numeric" });
}

const MODALITY_LABEL = { presencial: "Presencial", remoto: "Remoto", hibrido: "Híbrido" };
function modalityLabel(m) { return MODALITY_LABEL[String(m || "").toLowerCase()] || String(m || "Presencial"); }

const STATUS_LABEL = {
  draft: "Borrador", published: "Publicada", closed: "Cerrada",
  applied: "Postulado", reviewed: "En revisión", accepted: "Aceptado", rejected: "Rechazado"
};
function statusLabel(s) { return STATUS_LABEL[String(s || "").toLowerCase()] || String(s || ""); }

/* ── Auth ───────────────────────────────────────────────────────── */
async function requestOtp(email, name, role) {
  return api("/auth/request-otp", { method: "POST", body: JSON.stringify({ email, name: name || "", role: role || "candidate" }) });
}
async function verifyOtp(email, code) {
  const d = await api("/auth/verify-otp", { method: "POST", body: JSON.stringify({ email, code }) });
  store.token = d.access_token;
  store.user = d.user;
  return d.user;
}
function logout() {
  store.token = "";
  store.user = null;
  location.hash = "#/";
  location.reload();
}

/* ── Ofertas ────────────────────────────────────────────────────── */
function getJobs(params = {}) {
  const qs = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => { if (v !== "" && v != null) qs.set(k, v); });
  const s = qs.toString();
  return api("/jobs" + (s ? "?" + s : ""));
}
function getJob(id) { return api("/jobs/" + id); }
function getDistricts() { return api("/jobs/districts"); }
function applyToJob(id, message) { return api(`/jobs/${id}/apply`, { method: "POST", body: JSON.stringify({ message: message || "" }) }); }
function saveJob(id) { return api(`/jobs/${id}/save`, { method: "POST", body: "{}" }); }
function unsaveJob(id) { return api(`/jobs/${id}/save`, { method: "DELETE" }); }
function createJob(payload) { return api("/jobs", { method: "POST", body: JSON.stringify(payload) }); }
function setJobStatus(id, status) { return api(`/jobs/${id}/status`, { method: "PATCH", body: JSON.stringify({ status }) }); }
function getApplicants(id) { return api(`/jobs/${id}/applicants`); }
function setApplicationStatus(jobId, appId, status) {
  return api(`/jobs/${jobId}/applicants/${appId}`, { method: "PATCH", body: JSON.stringify({ status }) });
}

/* ── Perfil / empresa ───────────────────────────────────────────── */
function getMe() { return api("/me"); }
function getProfile() { return api("/me/profile"); }
function updateProfile(payload) { return api("/me/profile", { method: "PUT", body: JSON.stringify(payload) }); }
function getMyApplications() { return api("/me/applications"); }
function getBusinessProfile() { return api("/business/profile"); }
function updateBusinessProfile(payload) { return api("/business/profile", { method: "PUT", body: JSON.stringify(payload) }); }
function getBusinessDashboard() { return api("/business/dashboard"); }
function getBusinessJobs() { return api("/business/jobs"); }
function getCompanies() { return api("/companies"); }
function getCompany(id) { return api("/companies/" + id); }
function getPublicProfile(userId) { return api("/profile/" + userId); }

/* ── Notificaciones y cuenta ────────────────────────────────────── */
function getMyNotifications() { return api("/me/notifications"); }
function markNotificationRead(nid) { return api(`/me/notifications/${nid}/read`, { method: "PATCH" }); }
function markAllNotificationsRead() { return api("/me/notifications/read-all", { method: "POST" }); }
function deleteMyAccount() { return api("/me", { method: "DELETE" }); }

/* ── Items y fotos del perfil ──────────────────────────────────── */
function addProfileItem(payload) { return api("/me/profile/items", { method: "POST", body: JSON.stringify(payload) }); }
function deleteProfileItem(id) { return api(`/me/profile/items/${id}`, { method: "DELETE" }); }
function addProfilePhoto(payload) { return api("/me/profile/photos", { method: "POST", body: JSON.stringify(payload) }); }
function deleteProfilePhoto(id) { return api(`/me/profile/photos/${id}`, { method: "DELETE" }); }

/* ── Subidas de archivos (FormData, sin Content-Type) ───────────── */
async function apiUpload(path, file, field = "file") {
  const fd = new FormData();
  fd.append(field, file);
  const headers = {};
  if (store.token) headers.Authorization = "Bearer " + store.token;
  const res = await fetch(API + path, { method: "POST", headers, body: fd });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(typeof data.detail === "string" ? data.detail : (data.detail || res.statusText || "Error"));
    err.status = res.status;
    throw err;
  }
  return data;
}
function uploadAvatar(file) { return apiUpload("/me/profile/avatar", file); }
function uploadCover(file) { return apiUpload("/me/profile/cover", file); }
function uploadBusinessLogo(file) { return apiUpload("/business/logo", file); }

/* ── CV en texto plano ─────────────────────────────────────────── */
async function getMyCv() {
  const headers = {};
  if (store.token) headers.Authorization = "Bearer " + store.token;
  const res = await fetch(API + "/me/cv", { headers });
  if (!res.ok) {
    let detail = res.statusText;
    try { const d = await res.json(); detail = typeof d.detail === "string" ? d.detail : detail; } catch (e) { /* texto plano */ }
    const err = new Error(detail || "No se pudo obtener el CV");
    err.status = res.status;
    throw err;
  }
  return res.text();
}

/* ── Mapa y guardadas ──────────────────────────────────────────── */
function getJobsMap() { return api("/jobs/map"); }
function getSavedJobs() { return api("/jobs/saved/mine"); }

/* ── Gestión de ofertas (empresa) ──────────────────────────────── */
function updateJob(id, payload) { return api(`/jobs/${id}`, { method: "PUT", body: JSON.stringify(payload) }); }
function deleteJob(id) { return api(`/jobs/${id}`, { method: "DELETE" }); }

/* ── Admin ──────────────────────────────────────────────────────── */
function getAdminDashboard() { return api("/admin/dashboard"); }
function getAdminUsers() { return api("/admin/users"); }
function patchAdminUser(id, payload) { return api(`/admin/users/${id}`, { method: "PATCH", body: JSON.stringify(payload) }); }
function getAdminCompanies() { return api("/admin/companies"); }
function patchAdminCompany(id, payload) { return api(`/admin/companies/${id}`, { method: "PATCH", body: JSON.stringify(payload) }); }
function getAdminQueue() { return api("/admin/queue"); }
function reviewAdminQueue(id, action) { return api(`/admin/queue/${id}?action=${action}`, { method: "PATCH" }); }
function getAdminOtps() { return api("/admin/otps"); }
function getAdminLeads() { return api("/admin/leads"); }
function patchAdminLead(id, status) { return api(`/admin/leads/${id}`, { method: "PATCH", body: JSON.stringify({ status }) }); }

/* ── Social / leads ─────────────────────────────────────────────── */
function socialPreview(payload) { return api("/social/preview", { method: "POST", body: JSON.stringify(payload) }); }
function socialImport(payload) { return api("/social/import", { method: "POST", body: JSON.stringify(payload) }); }
function sendIntake(payload) { return api("/intake", { method: "POST", body: JSON.stringify(payload) }); }
