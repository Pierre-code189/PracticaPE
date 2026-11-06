const app = () => document.getElementById("app");
const needAuth = () => { if (!store.token) { location.hash = "#/auth"; return false; } return true; };

function jobCard(j) {
  return `<div class="card" onclick="location.hash='#/job/${j.id}'">
    <h3>${esc(j.title)}</h3>
    <span class="tag">${esc(j.modality)}</span><span class="tag">${esc(j.district)}, ${esc(j.city)}</span>
    <span class="tag">${esc(j.salary || "—")}</span>
    <p class="mut">${j.company ? esc(j.company.name) + " · " : ""}${esc((j.description || "").slice(0, 140))}</p>
    ${j.applied ? '<span class="msg">✓ Postulado</span>' : ""} ${j.saved ? '<span class="msg">★ Guardada</span>' : ""}
  </div>`;
}

async function viewHome() {
  const districts = await api("/jobs/districts").catch(() => []);
  app().innerHTML = `<h1>Prácticas y empleos en Piura</h1>
    <form class="filters" id="f">
      <input name="q" placeholder="Buscar puesto, empresa…">
      <select name="modality"><option value="">Modalidad</option><option>presencial</option><option>remoto</option><option>hibrido</option></select>
      <select name="district"><option value="">Distrito</option>${districts.map(d => `<option>${esc(d)}</option>`).join("")}</select>
      <input name="company" placeholder="Negocio / empresa">
      <button class="btn">Buscar</button>
    </form>
    <div id="results"><p class="mut">Cargando ofertas…</p></div>
    <h2>Mapa de ofertas</h2><div id="map"></div>`;
  async function load() {
    const f = new FormData(document.getElementById("f"));
    const p = new URLSearchParams();
    ["q", "modality", "district"].forEach(k => { if (f.get(k)) p.set(k, f.get(k)); });
    const jobs = await api("/jobs?" + p.toString());
    document.getElementById("results").innerHTML = jobs.length ? jobs.map(jobCard).join("") : "<p class='mut'>Sin resultados.</p>";
    const pts = await api("/jobs/map").catch(() => []);
    initMap("map", pts);
  }
  document.getElementById("f").addEventListener("submit", e => { e.preventDefault(); load(); });
  load();
}

async function viewJob(id) {
  const j = await api("/jobs/" + id);
  const c = j.contact || {};
  app().innerHTML = `<button class="btn ghost" onclick="history.back()">← Volver</button>
    <h1>${esc(j.title)}</h1>
    <span class="tag">${esc(j.modality)}</span><span class="tag">${esc(j.district)}</span><span class="tag">${esc(j.salary || "—")}</span>
    <div class="panel"><h2>Empresa</h2><p>${j.company ? `<a href="#/empresa/${j.company.id}">${esc(j.company.name)}</a>` : "—"}</p>
    <h2>Descripción</h2><p>${esc(j.description)}</p>
    <h2>Contacto</h2>${c.company ? `<p>${esc(c.company)} · ${esc(c.phone)} · ${esc(c.email)}</p>` : "<p class='mut'>El contacto se revela tras postular.</p>"}
    <div id="act">${j.applied ? '<span class="msg">✓ Ya postulaste</span>' :
      `<textarea id="msg" placeholder="Mensaje de postulación (opcional)"></textarea>
       <button class="btn" onclick="applyJob(${j.id})">Postular</button>`}
       <button class="btn ghost" onclick="saveJob(${j.id})">${j.saved ? "★ Guardada" : "☆ Guardar"}</button>
    </div><div id="map"></div><p id="out" class="msg"></p>`;
  initMap("map", [{ lat: j.lat, lng: j.lng, title: j.title, district: j.district }]);
}
async function applyJob(id) {
  try {
    await api(`/jobs/${id}/apply`, { method: "POST", body: JSON.stringify({ message: document.getElementById("msg").value }) });
    document.getElementById("out").textContent = "¡Postulación enviada! Contacto revelado en el detalle.";
    setTimeout(() => viewJob(id), 800);
  } catch (e) { document.getElementById("out").textContent = e.message; }
}
async function saveJob(id) {
  await api(`/jobs/${id}/save`, { method: "POST" }).catch(() => api(`/jobs/${id}/save`, { method: "DELETE" }));
  viewJob(id);
}

async function viewAuth() {
  app().innerHTML = `<h1>Ingresar</h1><div class="panel">
    <p class="mut">Acceso con código OTP a tu correo (sin contraseña).</p>
    <form id="otp"><input name="email" type="email" required placeholder="tu@correo.pe">
    <input name="name" placeholder="Nombre (opcional)">
    <select name="role"><option value="candidate">Candidato</option><option value="business">Negocio</option><option value="admin">Admin</option></select>
    <input name="code" placeholder="Código de 6 dígitos" style="display:none">
    <button class="btn">Enviar código</button></form><p id="out" class="msg"></p></div>`;
  let step = 0;
  document.getElementById("otp").addEventListener("submit", async e => {
    e.preventDefault();
    const f = new FormData(e.target);
    try {
      if (step === 0) {
        const d = await requestOtp(f.get("email"), f.get("name"), f.get("role"));
        step = 1;
        f.get("code") !== "" && null;
        e.target.querySelector('[name=code]').style.display = "block";
        document.getElementById("out").textContent = d.dev_code ? "Código (dev): " + d.dev_code : "Revisa tu correo.";
      } else {
        await verifyOtp(f.get("email"), f.get("code"));
        location.hash = "#/panel"; location.reload();
      }
    } catch (err) { document.getElementById("out").textContent = err.message; }
  });
}

async function viewPanel() {
  if (!needAuth()) return;
  const u = store.user || {};
  if (u.role === "business") return viewBusiness();
  if (u.role === "admin") return viewAdmin();
  const p = await api("/me/profile");
  const apps = await api("/me/applications");
  app().innerHTML = `<h1>Panel candidato</h1>
    <div class="panel"><h2>Perfil estilo LinkedIn</h2>
      ${p.avatar_url ? `<img src="${esc(p.avatar_url)}" width="90">` : ""}
      <form id="pf"><input name="headline" value="${esc(p.headline)}" placeholder="Titular profesional">
      <input name="skills" value="${esc(p.skills)}" placeholder="Habilidades (coma)">
      <input name="city" value="${esc(p.city)}"><input name="district" value="${esc(p.district)}">
      <input name="phone" value="${esc(p.phone)}"><input name="avatar_url" value="${esc(p.avatar_url)}" placeholder="URL foto">
      <textarea name="summary" placeholder="Resumen">${esc(p.summary)}</textarea>
      <button class="btn">Guardar perfil</button></form></div>
    <div class="panel"><h2>Experiencia / Educación / Certificaciones…</h2>
      ${p.items.map(i => `<p>${esc(i.kind)}: <b>${esc(i.title)}</b> @ ${esc(i.org)} (${esc(i.start)}–${esc(i.end)})
        <button class="btn danger" onclick="delItem(${i.id})">Eliminar</button></p>`).join("")}
      <form id="item"><select name="kind"><option>experience</option><option>education</option><option>certification</option><option>language</option><option>project</option></select>
      <input name="title" placeholder="Título" required><input name="org" placeholder="Organización">
      <input name="start" placeholder="Inicio"><input name="end" placeholder="Fin">
      <button class="btn">Agregar</button></form></div>
    <div class="panel"><h2>Fotos</h2>${p.photos.map(ph => `<img src="${esc(ph.url)}" width="80"> <button class="btn danger" onclick="delPhoto(${ph.id})">X</button>`).join("")}
      <form id="ph"><input name="url" placeholder="URL de foto" required><input name="caption" placeholder="Pie"><button class="btn">Agregar foto</button></form></div>
    <div class="panel"><h2>Mis postulaciones</h2>${apps.map(a => `<p>${esc(a.job_title)} — <b>${esc(a.status)}</b></p>`).join("") || "<p class='mut'>Aún no postulas.</p>"}
      <button class="btn" onclick="downloadCV()">Descargar CV</button></div>`;
  document.getElementById("pf").addEventListener("submit", async e => { e.preventDefault(); await api("/me/profile", { method: "PUT", body: JSON.stringify(Object.fromEntries(new FormData(e.target))) }); viewPanel(); });
  document.getElementById("item").addEventListener("submit", async e => { e.preventDefault(); await api("/me/profile/items", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(e.target))) }); viewPanel(); });
  document.getElementById("ph").addEventListener("submit", async e => { e.preventDefault(); await api("/me/profile/photos", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(e.target))) }); viewPanel(); });
}
async function delItem(id) { await api(`/me/profile/items/${id}`, { method: "DELETE" }); viewPanel(); }
async function delPhoto(id) { await api(`/me/profile/photos/${id}`, { method: "DELETE" }); viewPanel(); }
async function downloadCV() {
  const r = await fetch("/me/cv", { headers: { Authorization: "Bearer " + store.token } });
  const t = await r.text();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([t], { type: "text/plain" }));
  a.download = "cv-practicape.txt"; a.click();
}

async function viewBusiness() {
  const prof = await api("/business/profile");
  const dash = await api("/business/dashboard");
  const jobs = await api("/jobs?status=&company_id=" + prof.id).catch(() => []);
  app().innerHTML = `<h1>Panel negocio</h1>
    <div class="kpis"><div class="kpi">Ofertas<b>${dash.jobs}</b></div><div class="kpi">Publicadas<b>${dash.published || 0}</b></div>
    <div class="kpi">Postulaciones<b>${dash.applications}</b></div><div class="kpi">Visitas<b>${dash.views}</b></div></div>
    <div class="panel"><h2>Ficha del negocio</h2><form id="bf">
      <input name="name" value="${esc(prof.name)}"><input name="sector" value="${esc(prof.sector)}">
      <input name="district" value="${esc(prof.district)}"><input name="phone" value="${esc(prof.phone)}">
      <input name="email" value="${esc(prof.email)}"><input name="website" value="${esc(prof.website)}">
      <textarea name="description">${esc(prof.description)}</textarea><button class="btn">Guardar ficha</button></form>
      <div id="map"></div></div>
    <div class="panel"><h2>Nueva oferta</h2><form id="nj"><input name="title" required placeholder="Título">
      <select name="modality"><option>presencial</option><option>remoto</option><option>hibrido</option></select>
      <input name="district" value="Piura"><input name="salary" placeholder="Sueldo">
      <textarea name="description" placeholder="Descripción"></textarea><button class="btn">Crear borrador</button></form></div>
    <div class="panel"><h2>Importar de red social → borrador</h2><form id="si">
      <input name="url" placeholder="URL del post"><textarea name="text" placeholder="O pegar el texto del post"></textarea>
      <button class="btn">Importar</button></form></div>
    <div class="panel"><h2>Mis ofertas y postulantes</h2>${jobs.map(j => `<div class="card"><b>${esc(j.title)}</b> [${esc(j.status)}]
      <button class="btn ghost" onclick="viewApps(${j.id})">Postulantes (${j.applications_count})</button>
      <button class="btn ghost" onclick="publishJob(${j.id})">Publicar</button></div><div id="apps-${j.id}"></div>`).join("")}</div>`;
  initMap("map", [{ lat: prof.lat, lng: prof.lng, title: prof.name }]);
  document.getElementById("bf").addEventListener("submit", async e => { e.preventDefault(); await api("/business/profile", { method: "PUT", body: JSON.stringify(Object.fromEntries(new FormData(e.target))) }); viewBusiness(); });
  document.getElementById("nj").addEventListener("submit", async e => { e.preventDefault(); const d = Object.fromEntries(new FormData(e.target)); d.status = "draft"; await api("/jobs", { method: "POST", body: JSON.stringify(d) }); viewBusiness(); });
  document.getElementById("si").addEventListener("submit", async e => { e.preventDefault(); await api("/social/import", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(e.target))) }); viewBusiness(); });
}
async function viewApps(jobId) {
  const apps = await api(`/jobs/${jobId}/applicants`);
  document.getElementById("apps-" + jobId).innerHTML = apps.map(a =>
    `<p>${esc(a.candidate.name)} (${esc(a.candidate.email)}) — ${esc(a.candidate.headline)} [${esc(a.status)}]
     ${["reviewed", "accepted", "rejected"].map(s => `<button class="btn ghost" onclick="setStatus(${jobId},${a.id},'${s}')">${s}</button>`).join("")}</p>`).join("");
}
async function setStatus(jobId, appId, status) {
  await api(`/jobs/${jobId}/applicants/${appId}`, { method: "PATCH", body: JSON.stringify({ status }) });
  viewBusiness();
}
async function publishJob(id) {
  const j = await api("/jobs/" + id);
  await api(`/jobs/${id}`, { method: "PUT", body: JSON.stringify({ title: j.title, description: j.description, modality: j.modality, district: j.district, city: j.city, salary: j.salary, status: "published" }) });
  viewBusiness();
}

async function viewAdmin() {
  const d = await api("/admin/dashboard");
  const queue = await api("/admin/queue");
  const otps = await api("/admin/otps");
  const bar = (obj) => Object.entries(obj || {}).map(([k, v]) => `<p>${esc(k)}: ${v}</p><div class="bar"><i style="width:${Math.min(100, v * 10)}%"></i></div>`).join("");
  app().innerHTML = `<h1>Panel admin</h1>
    <div class="kpis">${Object.entries(d.kpis).map(([k, v]) => `<div class="kpi">${k}<b>${v}</b></div>`).join("")}</div>
    <div class="grid"><div class="panel"><h2>Por modalidad</h2>${bar(d.charts.by_modality)}</div>
    <div class="panel"><h2>Por distrito</h2>${bar(d.charts.by_district)}</div>
    <div class="panel"><h2>Postulaciones / día</h2>${(d.charts.apps_by_day || []).map(([day, c]) => `<p>${esc(day)}: ${c}</p>`).join("") || "<p class='mut'>—</p>"}</div>
    <div class="panel"><h2>Usuarios por rol</h2>${bar(d.charts.by_role)}</div></div>
    <div class="panel"><h2>Cola de revisión (borradores)</h2>${queue.map(j => `<p>${esc(j.title)} [${esc(j.source)}]
      <button class="btn" onclick="review(${j.id},'approve')">Aprobar</button>
      <button class="btn danger" onclick="review(${j.id},'reject')">Rechazar</button></p>`).join("") || "<p class='mut'>Cola vacía</p>"}</div>
    <div class="panel"><h2>Recolector Bing → borrador (filtro Piura)</h2>
      <form id="col"><input name="query" value="empleos Piura"><button class="btn">Ejecutar</button></form><p id="colout" class="msg"></p></div>
    <div class="panel"><h2>OTPs recientes</h2><table><tr><th>Email</th><th>Intentos</th><th>Usado</th><th>Creado</th></tr>
      ${otps.map(o => `<tr><td>${esc(o.email)}</td><td>${o.attempts}</td><td>${o.used}</td><td>${esc(o.created_at)}</td></tr>`).join("")}</table></div>`;
  document.getElementById("col").addEventListener("submit", async e => {
    e.preventDefault();
    const q = new FormData(e.target).get("query");
    const r = await api("/collect/run", { method: "POST", body: JSON.stringify({ query: q }) });
    document.getElementById("colout").textContent = `Encontradas: ${r.found} · Borradores creados: ${r.created}`;
  });
}
async function review(id, action) {
  await api(`/admin/queue/${id}?action=${action}`, { method: "PATCH" });
  viewAdmin();
}

async function viewCompanies() {
  const list = await api("/companies");
  app().innerHTML = `<h1>Empresas</h1>` + list.map(c =>
    `<div class="card" onclick="location.hash='#/empresa/${c.id}'"><h3>${esc(c.name)}</h3><p class="mut">${esc(c.sector)} · ${esc(c.district)}</p><p>${esc(c.description)}</p></div>`).join("");
}
async function viewCompany(id) {
  const c = await api("/companies/" + id);
  app().innerHTML = `<h1>${esc(c.name)}</h1><p class="mut">${esc(c.sector)} · ${esc(c.district)}, ${esc(c.city)} · RUC ${esc(c.ruc)}</p>
    <p>${esc(c.description)}</p><h2>Ofertas activas</h2>${(c.jobs || []).map(j => `<div class="card" onclick="location.hash='#/job/${j.id}'"><b>${esc(j.title)}</b> <span class="tag">${esc(j.modality)}</span></div>`).join("")}
    <div id="map"></div>`;
  initMap("map", [{ lat: c.lat, lng: c.lng, title: c.name }]);
}
async function viewSaved() {
  if (!needAuth()) return;
  const jobs = await api("/jobs/saved/mine");
  app().innerHTML = `<h1>Guardadas</h1>` + (jobs.map(jobCard).join("") || "<p class='mut'>Nada guardado.</p>");
}
async function viewNotifications() {
  if (!needAuth()) return;
  const ns = await api("/me/notifications");
  app().innerHTML = `<h1>Notificaciones</h1>` + ns.map(n =>
    `<div class="card" onclick="readNotif(${n.id})"><b>${esc(n.title)}</b><p>${esc(n.body)}</p><p class="mut">${esc(n.created_at)} ${n.is_read ? "" : "· nueva"}</p></div>`).join("");
}
async function readNotif(id) { await api(`/me/notifications/${id}/read`, { method: "PATCH" }); viewNotifications(); }
async function viewContact() {
  app().innerHTML = `<h1>Contacto</h1><div class="panel"><form id="ct"><input name="name" required placeholder="Nombre">
    <input name="email" type="email" required placeholder="Email"><textarea name="message" required placeholder="Mensaje"></textarea>
    <button class="btn">Enviar</button></form><p id="out" class="msg"></p></div>`;
  document.getElementById("ct").addEventListener("submit", async e => {
    e.preventDefault();
    await api("/intake", { method: "POST", body: JSON.stringify(Object.fromEntries(new FormData(e.target))) });
    document.getElementById("out").textContent = "Mensaje enviado (lead registrado).";
  });
}
async function viewMap() {
  app().innerHTML = `<h1>Mapa de negocios y ofertas</h1><div id="map"></div>`;
  const pts = await api("/jobs/map");
  initMap("map", pts);
}
