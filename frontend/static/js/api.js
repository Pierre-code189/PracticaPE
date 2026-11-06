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
  if (!res.ok) throw new Error(data.detail || res.statusText || "Error");
  return data;
}
async function requestOtp(email, name, role) {
  return api("/auth/request-otp", { method: "POST", body: JSON.stringify({ email, name, role }) });
}
async function verifyOtp(email, code) {
  const d = await api("/auth/verify-otp", { method: "POST", body: JSON.stringify({ email, code }) });
  store.token = d.access_token; store.user = d.user;
  return d.user;
}
function logout() { store.token = ""; store.user = null; location.hash = "#/"; location.reload(); }
function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
