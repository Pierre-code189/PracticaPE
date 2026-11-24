// PrácticaPE — capa de API. Todas las llamadas pasan por aqui.
// Convenciones: respuesta JSON; token en localStorage('pp_token'); errores como Error con .status.

const API_BASE = (window.PP_API_BASE || '').replace(/\/+$/, '');

async function request(path, opts = {}) {
  const token = localStorage.getItem('pp_token');
  const headers = Object.assign({ 'Content-Type': 'application/json' }, opts.headers || {});
  if (token) headers['Authorization'] = 'Bearer ' + token;

  const res = await fetch(API_BASE + path, Object.assign({}, opts, { headers }));
  const ct = res.headers.get('content-type') || '';
  const body = ct.includes('application/json') ? await res.json().catch(() => ({})) : await res.text();

  if (!res.ok) {
    const err = new Error((body && (body.detail || body.error)) || ('HTTP ' + res.status));
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return body;
}

export const api = {
  base: API_BASE,

  // --- autenticacion (OTP) ---
  requestOtp: (email, role) =>
    request('/auth/request-otp', { method: 'POST', body: JSON.stringify({ email, role }) }),
  verifyOtp: (email, code) =>
    request('/auth/verify-otp', { method: 'POST', body: JSON.stringify({ email, code }) }),
  me: () => request('/me'),

  // --- ofertas ---
  jobs: (params = {}) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== '' && v !== null && v !== undefined)
    ).toString();
    return request('/jobs' + (qs ? '?' + qs : ''));
  },
  job: (id) => request('/jobs/' + id),
  jobMap: (params = {}) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== '' && v !== null && v !== undefined)
    ).toString();
    return request('/jobs/map' + (qs ? '?' + qs : ''));
  },
  districts: () => request('/jobs/districts'),
  jobSources: () => request('/jobs/sources'),
  submitJob: (payload) => request('/jobs/submit', { method: 'POST', body: JSON.stringify(payload) }),
  apply: (id, payload = {}) =>
    request(`/jobs/${id}/apply`, { method: 'POST', body: JSON.stringify(payload) }),
  saveJob: (id, on) =>
    request(`/jobs/${id}/save`, { method: on ? 'POST' : 'DELETE' }),
  savedMine: () => request('/jobs/saved/mine'),
  applicants: (id) => request(`/jobs/${id}/applicants`),
  createJob: (payload) => request('/jobs', { method: 'POST', body: JSON.stringify(payload) }),
  updateJob: (id, payload) =>
    request(`/jobs/${id}`, { method: 'PUT', body: JSON.stringify(payload) }),
  closeJob: (id) => request(`/jobs/${id}/close`, { method: 'POST' }),

  // --- empresas ---
  companies: (params = {}) => {
    const qs = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== '' && v !== null && v !== undefined)
    ).toString();
    return request('/companies' + (qs ? '?' + qs : ''));
  },
  company: (id) => request('/companies/' + id),
  businessProfile: () => request('/business/profile'),
  saveBusinessProfile: (payload) =>
    request('/business/profile', { method: 'PUT', body: JSON.stringify(payload) }),
  businessDashboard: () => request('/business/dashboard'),
  businessJobs: () => request('/business/jobs'),

  // --- perfil de candidato ---
  myProfile: () => request('/me/profile'),
  saveMyProfile: (payload) =>
    request('/me/profile', { method: 'PUT', body: JSON.stringify(payload) }),
  addItem: (payload) => request('/me/profile/items', { method: 'POST', body: JSON.stringify(payload) }),
  deleteItem: (id) => request('/me/profile/items/' + id, { method: 'DELETE' }),
  myApplications: () => request('/me/applications'),
  myNotifications: () => request('/me/notifications'),
  markNotification: (id) => request(`/me/notifications/${id}/read`, { method: 'PATCH' }),
  publicProfile: (id) => request('/profiles/' + id),

  // --- admin ---
  adminDashboard: () => request('/admin/dashboard'),
  adminQueue: () => request('/admin/queue'),
  adminModerate: (id, action) =>
    request(`/admin/queue/${id}?action=${action}`, { method: 'PATCH' }),
  adminLeads: () => request('/admin/leads'),
  adminUsers: () => request('/admin/users'),

  // --- publico ---
  intake: (payload) => request('/intake', { method: 'POST', body: JSON.stringify(payload) }),
};

// --- utilidades de UI compartidas ---
export const ui = {
  $(sel, root = document) { return root.querySelector(sel); },
  $$(sel, root = document) { return Array.from(root.querySelectorAll(sel)); },
  esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  },
  text(el, s) { if (el) el.textContent = s == null ? '' : s; },
  show(el, on = true) { if (el) el.classList.toggle('pp-hidden', !on); },
  toast(msg, kind = '') {
    let t = document.querySelector('.pp-toast');
    if (!t) {
      t = document.createElement('div');
      t.className = 'pp-toast';
      t.setAttribute('role', 'status');
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.dataset.kind = kind;
    requestAnimationFrame(() => t.classList.add('pp-show'));
    clearTimeout(t._t);
    t._t = setTimeout(() => {
      t.classList.remove('pp-show');
      setTimeout(() => { if (!t.classList.contains('pp-show')) t.remove(); }, 400);
    }, 3200);
  },
  money(s) {
    const n = Number(String(s).replace(/[^\d.]/g, ''));
    if (!isFinite(n)) return String(s || '');
    return 'S/ ' + n.toLocaleString('es-PE');
  },
  fecha(s) {
    if (!s) return '';
    const d = new Date(s);
    if (isNaN(d)) return String(s);
    return d.toLocaleDateString('es-PE', { day: 'numeric', month: 'short', year: 'numeric' });
  },
  initials(name) {
    return String(name || '?').trim().split(/\s+/).slice(0, 2).map(w => w[0] || '').join('').toUpperCase() || '?';
  },
  // el salario puede venir como rango ("S/ 1.200 - S/ 1.600") o suelto
  salario(j) {
    if (!j || !j.salary) return '';
    const s = String(j.salary).trim();
    const base = /^S\//i.test(s) ? s : 'S/ ' + s;
    return /\/?\s*m\b/i.test(s) ? base : base + '/m';
  },
};

export function currentUser() {
  try { return JSON.parse(localStorage.getItem('pp_user') || 'null'); } catch { return null; }
}

export function debounce(fn, ms = 300) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), ms); };
}

export async function loadPageInto(slot, name) {
  const res = await fetch(`/static/pages/${name}.html`, { headers: { 'Cache-Control': 'no-cache' } });
  if (!res.ok) throw new Error('No se pudo cargar la página ' + name + ' (HTTP ' + res.status + ')');
  slot.innerHTML = await res.text();
  return slot;
}
