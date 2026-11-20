// PrácticaPE — cableado de cada pantalla contra la API real.
// Regla de oro: lo que se muestra sale de la API. Lo que no tiene endpoint, se oculta.
import { api, ui, debounce, currentUser } from './api.js';

window.PP_FLOW = window.PP_FLOW || {};
const F = window.PP_FLOW;

// ---------- localización estructural (los ids de Stitch no son estables) ----------
async function fillDistricts(select, selected = '') {
  if (!select) return;
  try {
    const data = await api.districts();
    const list = Array.isArray(data) ? data : (data.districts || []);
    const opts = ['<option value="">Todos los distritos</option>']
      .concat(list.map(d => `<option value="${ui.esc(d)}">${ui.esc(d)}</option>`)).join('');
    select.innerHTML = opts;
    if (selected) select.value = selected;
  } catch { /* sin distritos: se deja lo que hubiera */ }
}

function q(root, sel) { return root.querySelector(sel); }
function qa(root, sel) { return Array.from(root.querySelectorAll(sel)); }
function byText(root, sel, texto) {
  return qa(root, sel).find(el => (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase().includes(texto.toLowerCase()));
}
function gridWithArticles(root) {
  return qa(root, 'div.grid, section, div').find(g => g.querySelector(':scope > article')) || null;
}
function findList(root, prefs) {
  for (const p of prefs) {
    const el = typeof p === 'string' ? q(root, p) : p;
    if (el) return el;
  }
  return gridWithArticles(root);
}
function setText(root, sel, txt) { const el = q(root, sel); if (el) el.textContent = txt; }
function setHTML(root, sel, html) { const el = q(root, sel); if (el) el.innerHTML = html; }

const LABEL_STATUS = { applied: 'Aplicada', reviewed: 'En revisión', accepted: 'Aceptada', rejected: 'Rechazada', withdrawn: 'Retirada' };
const CLASS_STATUS = {
  applied: 'bg-accent-container-light text-ink-light',
  reviewed: 'bg-accent-container-light text-ink-light',
  accepted: 'bg-primary-container-light text-primary',
  rejected: 'bg-error-container text-error',
  withdrawn: 'bg-surface-container-low text-ink-secondary-light',
};

// ---------- tarjetas ----------
function jobCard(j) {
  const salario = ui.salario(j) ? `<span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-container-light text-ink-light text-body-s font-bold tabular-nums">${ui.esc(ui.salario(j))}</span>` : '';
  return `<article class="relative flex flex-col justify-between bg-surface-light rounded-2xl p-5 border border-border-light hover:border-primary hover:-translate-y-0.5 transition-all shadow-[0_1px_2px_rgba(20,32,27,0.05)]">
    <div class="flex items-start justify-between gap-3">
      <div class="min-w-0">
        <h3 class="font-headline-s text-headline-s text-ink-light leading-snug">${ui.esc(j.title)}</h3>
        <p class="text-body-s text-ink-secondary-light mt-1 truncate">${ui.esc(j.company_name || 'Empresa de Piura')}</p>
      </div>
      ${salario}
    </div>
    <div class="flex flex-wrap gap-1.5 text-body-s mt-3">
      <span class="px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-semibold">${ui.esc(j.district || 'Piura')}</span>
      <span class="px-2.5 py-1 rounded-full bg-surface-container-low text-ink-secondary-light capitalize">${ui.esc(j.modality || 'presencial')}</span>
      ${j.positions ? `<span class="px-2.5 py-1 rounded-full bg-surface-container-low text-ink-secondary-light tabular-nums">${j.positions} vacante(s)</span>` : ''}
    </div>
    <div class="flex items-center justify-between pt-3 mt-2">
      <span class="text-body-s text-ink-secondary-light">${ui.fecha(j.created_at)}</span>
      <a href="#/oferta/${j.id}" class="font-body-m text-body-m font-bold text-primary hover:underline">Ver oferta</a>
    </div>
  </article>`;
}

function emptyState(titulo, texto, cta) {
  return `<div class="col-span-full pp-empty"><span class="material-symbols-outlined">search_off</span>
    <p class="font-headline-s text-headline-s">${ui.esc(titulo)}</p>
    <p class="text-body-s text-ink-secondary-light">${ui.esc(texto)}</p>
    ${cta || ''}</div>`;
}

async function fillJobs(list, params, opts = {}) {
  if (!list) return 0;
  list.innerHTML = `<div class="col-span-full pp-empty"><span class="pp-spin" style="border-color:rgba(14,124,102,.25);border-top-color:#0E7C66"></span><p class="font-headline-s text-headline-s">Cargando ofertas…</p></div>`;
  try {
    const res = await api.jobs(Object.assign({ status: 'published', limit: opts.limit || 30 }, params || {}));
    const items = Array.isArray(res) ? res : (res.items || []);
    if (!items.length) {
      list.innerHTML = emptyState('Sin resultados', opts.vacioTexto || 'Prueba con otra palabra o quita algún filtro.');
      return 0;
    }
    list.innerHTML = items.map(jobCard).join('');
    return items.length;
  } catch (e) {
    list.innerHTML = `<div class="col-span-full pp-empty"><span class="material-symbols-outlined">cloud_off</span>
      <p class="font-headline-s text-headline-s">No se pudieron cargar las ofertas</p>
      <p class="text-body-s text-ink-secondary-light">${ui.esc(e.message)}</p></div>`;
    return 0;
  }
}

// quita los contadores inventados de Stitch (spans numéricos dentro de chips/labels)
function stripFakeCounters(root, scopeSel) {
  const scope = scopeSel ? q(root, scopeSel) : root;
  if (!scope) return;
  qa(scope, 'label span, button span, a span').forEach(sp => {
    const t = (sp.textContent || '').trim();
    if (/^\d+(\s*\+\s*\d+)?$/.test(t) || /^\d+\s*(ofertas?|vacantes?|resultados?|nuevos?)$/i.test(t)) sp.remove();
  });
}

// ---------- HOME ----------
F.home = async (root) => {
  const list = findList(root, ['#ofertas .grid', '#ofertas']);
  const jobsP = api.jobs({ status: 'published', limit: 6 }).catch(() => ({ items: [] }));
  // los contadores de Stitch son de muestra: se sustituyen por los reales
  const compP = api.companies().catch(() => ({ items: [] }));
  const [res, comps] = await Promise.all([jobsP, compP]);
  const items = Array.isArray(res) ? res : (res.items || []);
  const empresas = Array.isArray(comps) ? comps.length
    : (Array.isArray(comps.items) ? comps.items.length : (Number(comps.total) || 0));
  // enlace "Ver todas las ofertas (N disponibles)"
  qa(root, 'a').forEach(a => {
    const t = (a.textContent || '').replace(/\s+/g, ' ').trim();
    if (!/Ver todas las ofertas \(\d+ disponibles\)/.test(t)) return;
    const span = qa(a, 'span').find(s => /disponibles/.test(s.textContent || '')) || a.querySelector('span');
    if (span) span.textContent = 'Ver todas las ofertas (' + items.length + ' disponibles)';
    else a.textContent = 'Ver todas las ofertas (' + items.length + ' disponibles)';
  });
  qa(root, 'span, p, div').forEach(el => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (/más de \d+ empresas y entidades verificadas/.test(t) && el.children.length === 0) {
      el.textContent = 'Conectamos a estudiantes y recién egresados de universidades e institutos de la región con ' + empresas + ' empresas y entidades verificadas.';
    }
    if (/^\d+ empresas activas hoy$/.test(t)) el.textContent = empresas + ' empresas activas hoy';
  });
  await fillJobs(list, { limit: 6 }, { vacioTexto: 'Aún no hay ofertas publicadas. Volvemos pronto.' });
  const form = q(root, '#hero-search-form') || q(root, 'form');
  const kw = q(root, '#search-keyword') || q(root, 'input[type="text"]');
  if (form) form.addEventListener('submit', (e) => {
    e.preventDefault();
    const d = q(root, '#search-district') || q(root, 'select');
    const m = q(root, '#search-mode') || null;
    const qs = new URLSearchParams();
    if (kw && kw.value.trim()) qs.set('q', kw.value.trim());
    if (d && d.value) qs.set('district', d.value);
    if (m && m.value) qs.set('modality', m.value);
    location.hash = '#/ofertas' + (qs.toString() ? '?' + qs.toString() : '');
  });
  const dist = q(root, '#search-district') || q(root, 'select');
  if (dist) fillDistricts(dist);
  // enlaces de la home que Stitch dejó sin ruta
  qa(root, 'a[href^="#"]').forEach(a => {
    const href = a.getAttribute('href');
    if (href === '#todas-ofertas' || href === '#/todas-ofertas') a.href = '#/ofertas';
  });
};

// ---------- OFERTAS ----------
F.ofertas = async (root) => {
  const aside = q(root, 'aside');
  const list = findList(root, []);
  const search = q(root, 'input[placeholder*="Buscar"]') || q(root, 'input[type="text"]');
  const reset = q(root, '#btn-reset-filters') || byText(root, 'button', 'Limpiar');
  const state = { q: '', district: '', modality: '', category: '', limit: 30 };
  const params = new URLSearchParams(location.hash.split('?')[1] || '');
  state.q = params.get('q') || '';
  if (search && state.q) search.value = state.q;

  const chips = qa(root, 'aside button, aside label');
  stripFakeCounters(root, 'aside');
  // Stitch deja filtros marcados y chips de "filtros aplicados": se parte limpio
  qa(root, 'aside input[type="checkbox"]').forEach(c => { c.checked = false; c.removeAttribute('checked'); });
  qa(root, 'aside select').forEach(s => { if (s.options.length) s.selectedIndex = 0; });
  qa(root, 'span').forEach(s => {
    if ((s.textContent || '').trim() === 'Filtros aplicados:') {
      const c = s.parentElement;
      if (c) c.innerHTML = '';
    }
  });
  qa(root, 'span, p').forEach(el => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (/más de \d+ empresas e instituciones/.test(t) && el.children.length === 0) {
      el.textContent = 'Conéctate con empresas e instituciones locales formalizadas ante SUNEDU y el Ministerio de Trabajo y Promoción del Empleo.';
    }
  });

  async function load() {
    const n = await fillJobs(list, { q: state.q, district: state.district, modality: state.modality, category: state.category, limit: state.limit });
    const contador = q(root, '#results-count') || byText(root, 'span', 'Mostrando') || byText(root, 'p', 'Mostrando');
    if (contador) contador.textContent = `Mostrando ${n} de ${n}`;
    // contador grande del hero ("N ofertas activas en Piura")
    qa(root, 'span.font-headline-m, span').forEach(el => {
      const t = (el.textContent || '').trim();
      if (/^\d+$/.test(t)) {
        const hermano = el.nextElementSibling;
        if (hermano && /ofertas activas/.test(hermano.textContent || '')) el.textContent = String(n);
      }
    });
    const vacio = q(root, '#empty-state');
    if (vacio) ui.show(vacio, n === 0);
  }

  if (search) search.addEventListener('input', debounce(() => { state.q = search.value.trim(); load(); }, 350));
  if (reset) reset.addEventListener('click', () => {
    state.q = state.district = state.modality = state.category = '';
    if (search) search.value = '';
    chips.forEach(c => { const inp = c.querySelector('input'); if (inp) inp.checked = false; });
    qa(root, 'aside select').forEach(s => { s.value = s.options[0] ? s.options[0].value : ''; });
    load();
  });
  // chips de modalidad (botones tipo toggle)
  qa(root, 'aside button').forEach(b => {
    const t = (b.textContent || '').trim().toLowerCase();
    if (['presencial', 'híbrido', 'remoto'].includes(t)) {
      b.addEventListener('click', () => {
        const activo = b.dataset.pp === '1';
        qa(root, 'aside button').forEach(x => delete x.dataset.pp);
        state.modality = activo ? '' : t;
        if (!activo) b.dataset.pp = '1';
        load();
      });
    }
  });
  // checkboxes de área -> categoría
  qa(root, 'aside label').forEach(lb => {
    const inp = lb.querySelector('input[type="checkbox"]');
    const txt = (lb.textContent || '').replace(/\s+/g, ' ').trim();
    if (!inp || !txt) return;
    inp.addEventListener('change', () => {
      if (inp.checked) {
        state.category = txt.split(/\s{2,}/)[0].trim();
        qa(root, 'aside label').forEach(o => { if (o !== lb) { const i = o.querySelector('input'); if (i) i.checked = false; } });
      } else state.category = '';
      load();
    });
  });
  await load();
};

// ---------- DETALLE ----------
F['oferta-detalle'] = async (root, ctx) => {
  const id = ctx.params[0];
  if (!id || !/^\d+$/.test(id)) {
    root.innerHTML = emptyState('Falta la oferta', 'No se indicó qué oferta quieres ver.', '<a href="#/ofertas" class="font-body-m text-body-m font-bold text-primary">Ver todas las ofertas</a>');
    return;
  }
  let job = null;
  try { job = await api.job(id); } catch (e) {
    root.innerHTML = emptyState('Oferta no encontrada', 'Puede que se haya cerrado o que el enlace haya cambiado.', '<a href="#/ofertas" class="font-body-m text-body-m font-bold text-primary">Ver todas las ofertas</a>');
    return;
  }
  const h1 = q(root, 'h1');
  if (h1) h1.textContent = job.title;
  setText(root, '#jobMeta', [job.company_name, job.district, job.modality].filter(Boolean).join(' · '));
  const desc = q(root, '#jobDescription');
  if (desc) desc.textContent = job.description || 'La empresa no publicó una descripción detallada.';
  const sal = q(root, '#jobSalary');
  if (sal) sal.textContent = job.salary || 'No indicado';
  // rellenar campos sueltos por etiqueta
  qa(root, 'span, p, div').forEach(el => {
    const t = (el.textContent || '').trim();
    if (/^\d+\s*vacantes?$/i.test(t) && job.positions) el.textContent = `${job.positions} vacantes`;
  });

  const btn = q(root, '#btnApply') || byText(root, 'button', 'Postular');
  if (btn) btn.addEventListener('click', async () => {
    if (!currentUser()) { ui.toast('Ingresa para postular', 'error'); location.hash = '#/auth'; return; }
    const txt = q(root, '#btnApplyText') || null;
    btn.disabled = true;
    if (txt) txt.textContent = 'Enviando…';
    try {
      await api.apply(id, { message: '' });
      ui.toast('Postulación enviada', 'success');
      if (txt) txt.textContent = 'Postulación enviada';
      const box = q(root, '#statusAlertBox');
      if (box) { box.classList.remove('pp-hidden'); setText(root, '#statusAlertText', 'Tu postulación fue enviada. La empresa la revisará pronto.'); }
    } catch (e) {
      if (txt) txt.textContent = 'Postular';
      ui.toast(e.status === 409 ? 'Ya te postulaste a esta oferta' : e.message, 'error');
    } finally { btn.disabled = false; }
  });

  const save = q(root, '#btnBookmark') || byText(root, 'button', 'Guardar');
  if (save) save.addEventListener('click', async () => {
    if (!currentUser()) { ui.toast('Ingresa para guardar ofertas', 'error'); location.hash = '#/auth'; return; }
    try { await api.saveJob(id, true); ui.toast('Oferta guardada', 'success'); }
    catch (e) { ui.toast(e.message, 'error'); }
  });
  const share = byText(root, 'button', 'Compartir');
  if (share) share.addEventListener('click', async () => {
    const url = location.origin + '/#/oferta/' + id;
    try { await navigator.clipboard.writeText(url); ui.toast('Enlace copiado', 'success'); }
    catch { ui.toast(url); }
  });
  // el estado que Stitch pinta de muestra se sustituye por el real
  const statusBox = q(root, '#statusAlertBox');
  if (statusBox) {
    const mia = (await api.myApplications().catch(() => null));
    const items = Array.isArray(mia) ? mia : (mia && mia.items) || [];
    const miaEsta = items.find(a => String(a.job_id) === String(id));
    if (miaEsta) {
      statusBox.classList.remove('pp-hidden');
      const st = q(root, '#statusAlertText');
      if (st) st.textContent = 'Ya te postulaste a esta oferta (' + (LABEL_STATUS[miaEsta.status] || miaEsta.status) + ').';
    } else {
      statusBox.classList.add('pp-hidden');
      qa(root, 'div, section').forEach(box => {
        if (/¡Postulación Enviada!/.test(box.textContent || '') && box.children.length <= 3) box.remove();
      });
    }
  }
  const pdf = byText(root, 'button', 'Ficha en PDF');
  if (pdf) pdf.addEventListener('click', () => window.print());
  const mapBtn = byText(root, 'button', 'Explorar en mapa') || byText(root, 'a', 'Explorar en mapa');
  if (mapBtn) { mapBtn.setAttribute('href', '#/mapa'); }
};

// ---------- ACCESO OTP ----------
F.auth = async (root) => {
  const step1 = q(root, '#auth-step-1');
  const step2 = q(root, '#auth-step-2');
  // Stitch añade un campo de teléfono que no forma parte del acceso OTP
  const phone = q(root, '#phone-input');
  if (phone) { const w = phone.closest('div'); if (w) w.style.display = 'none'; }
  const email = q(root, '#email-input') || q(root, 'input[type="email"]') || q(root, 'input[type="text"]');
  if (email && /valeria\.mendoza/i.test(email.placeholder || '')) email.placeholder = 'tucorreo@unp.edu.pe';
  const send = q(root, '#send-code-btn') || byText(root, 'button', 'Enviar código');
  const candBtn = q(root, '#role-candidate-btn') || byText(root, 'button', 'Soy candidato');
  const compBtn = q(root, '#role-company-btn') || byText(root, 'button', 'Soy empresa');
  let role = 'candidate';
  const paint = () => {
    [candBtn, compBtn].forEach((b, i) => {
      if (!b) return;
      const on = (i === 0) === (role === 'candidate');
      b.classList.toggle('bg-primary', on);
      b.classList.toggle('text-on-primary', on);
      b.classList.toggle('bg-surface-container-low', !on);
      b.classList.toggle('text-ink-light', !on);
    });
  };
  if (candBtn) candBtn.addEventListener('click', () => { role = 'candidate'; paint(); });
  if (compBtn) compBtn.addEventListener('click', () => { role = 'business'; paint(); });
  paint();

  const goStep2 = (value) => {
    if (step1) step1.classList.add('pp-hidden');
    if (step2) step2.classList.remove('pp-hidden');
    const box = q(root, '#otp-container');
    if (box) { const inp = box.querySelector('input'); if (inp) inp.focus(); }
  };

  if (send) send.addEventListener('click', async () => {
    const value = (email && email.value || '').trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) { ui.toast('Escribe un correo válido', 'error'); return; }
    send.disabled = true;
    const original = send.innerHTML;
    send.textContent = 'Enviando…';
    try {
      const res = await api.requestOtp(value, role);
      if (res.channel === 'none') ui.toast('El servidor no pudo enviar el código', 'error');
      else ui.toast('Código enviado a ' + value, 'success');
      goStep2(value);
    } catch (e) { ui.toast(e.message, 'error'); }
    finally { send.disabled = false; send.innerHTML = original; }
  });

  const boxes = qa(root, '#otp-container input');
  boxes.forEach((b, i) => {
    b.addEventListener('input', () => { if (b.value && boxes[i + 1]) boxes[i + 1].focus(); });
    b.addEventListener('keydown', (e) => { if (e.key === 'Backspace' && !b.value && boxes[i - 1]) boxes[i - 1].focus(); });
  });
  const doVerify = async () => {
    const code = boxes.map(b => b.value).join('');
    if (code.length < 6) { ui.toast('Completa las 6 casillas', 'error'); return; }
    if (!email || !email.value) { ui.toast('Escribe tu correo primero', 'error'); return; }
    try {
      const res = await api.verifyOtp(email.value.trim(), code);
      localStorage.setItem('pp_token', res.access_token);
      localStorage.setItem('pp_user', JSON.stringify(res.user));
      ui.toast('Bienvenido, ' + (res.user.email || ''), 'success');
      location.hash = res.user.role === 'business' ? '#/panel-empresa' : '#/perfil';
    } catch (e) { ui.toast(e.message, 'error'); }
  };
  const verify = q(root, '#verify-code-btn') || byText(root, 'button', 'Verificar');
  if (verify) verify.addEventListener('click', doVerify);
  const reenviar = byText(root, 'button', 'Reenviar');
  if (reenviar) reenviar.addEventListener('click', () => { if (send) send.click(); });
};

// ---------- PERFIL DE CANDIDATO ----------
F['perfil-candidato'] = async (root) => {
  const u = currentUser();
  if (!u) {
    root.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">lock</span>
      <p class="font-headline-s text-headline-s">Inicia sesión para ver tu perfil</p>
      <a href="#/auth" class="font-body-m text-body-m font-bold text-primary">Ingresar</a></div>`;
    return;
  }
  let p = null;
  try { p = await api.myProfile(); }
  catch (e) { root.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">cloud_off</span>
    <p class="font-headline-s text-headline-s">No se pudo cargar tu perfil</p><p class="text-body-s text-ink-secondary-light">${ui.esc(e.message)}</p></div>`; return; }

  const h1 = q(root, 'h1');
  if (h1) h1.textContent = (u.name || (u.email || '').split('@')[0] || 'Mi perfil');
  const headline = byText(root, 'p, span', p.headline || '') || q(root, 'h2');
  if (headline) headline.textContent = p.headline || 'Añade un titular que te describa';
  const summaryBox = q(root, 'h2') ? q(root, 'h2').closest('section, div') : null;
  if (summaryBox) {
    const ps = qa(summaryBox, 'p').filter(x => !x.querySelector('button'));
    if (ps.length) ps[0].textContent = p.summary || 'Aún no has escrito tu resumen profesional.';
  }
  // datos de contacto en la cabecera
  const iniciales = ((u.name || u.email || 'PE').split(' ').map(w => w[0]).join('').slice(0, 2) || 'PE').toUpperCase();
  qa(root, 'span, p, div').forEach(el => {
    const t = (el.textContent || '').trim();
    if (u.email && t === 'usuario@correo.com') el.textContent = u.email;
    if (/Valeria_Mendoza_2025\.pdf/.test(t)) el.textContent = u.email || 'Sin CV adjunto';
    if (/^VM$/.test(t)) el.textContent = iniciales;
    if (/^Valeria Mendoza Chiroque/.test(t)) el.textContent = u.name || u.email;
    if (t === '+51 900 000 000' && p.phone) el.textContent = p.phone;
    if (t === 'Piura, Piura' && (p.district || p.city)) el.textContent = [p.district, p.city].filter(Boolean).join(', ');
  });
  // botón editar
  const edit = byText(root, 'button', 'Editar perfil');
  if (edit) edit.addEventListener('click', () => ui.toast('Edición de perfil: usa el formulario de la próxima versión', ''));
  const ver = byText(root, 'button', 'Ver cómo me ven');
  if (ver) ver.addEventListener('click', () => { location.hash = '#/perfil/' + u.id; });
};

// ---------- POSTULACIONES ----------
F.postulaciones = async (root) => {
  const u = currentUser();
  // la cabecera de Stitch trae un nombre ficticio: se sustituye por el de la sesión
  const badge = qa(root, 'span').find(s => /Valeria Mendoza Chiroque/.test(s.textContent || ''));
  if (badge) {
    const nombre = u ? (u.name || (u.email || '').split('@')[0]) : 'Tu cuenta';
    badge.textContent = nombre + (u && u.role === 'business' ? ' · Empresa' : ' · Candidato');
  }
  const cv = qa(root, 'span, a, div').find(s => /Valeria_Mendoza_2025\.pdf/.test(s.textContent || ''));
  if (cv) cv.textContent = u && u.email ? u.email : 'Sin CV adjunto';
  // avisos ficticios de la pantalla de muestra
  qa(root, 'div, section').forEach(box => {
    if (/¡Enhorabuena!/.test(box.textContent || '') && box.children.length <= 4) {
      box.innerHTML = '';
      box.remove();
    }
  });
  const list = q(root, '#applications-container') || findList(root, []);
  if (!u) {
    if (list) list.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">lock</span>
      <p class="font-headline-s text-headline-s">Inicia sesión para ver tus postulaciones</p>
      <a href="#/auth" class="font-body-m text-body-m font-bold text-primary">Ingresar</a></div>`;
    return;
  }
  if (!list) return;
  list.innerHTML = `<div class="pp-empty"><span class="pp-spin" style="border-color:rgba(14,124,102,.25);border-top-color:#0E7C66"></span><p class="font-headline-s text-headline-s">Cargando…</p></div>`;
  let items = [];
  try { const res = await api.myApplications(); items = Array.isArray(res) ? res : (res.items || []); }
  catch (e) { list.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">cloud_off</span><p class="font-headline-s text-headline-s">No se pudieron cargar tus postulaciones</p></div>`; return; }

  if (!items.length) {
    list.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">send</span>
      <p class="font-headline-s text-headline-s">Aún no te has postulado</p>
      <p class="text-body-s text-ink-secondary-light">Explora las ofertas y envía tu primera postulación.</p>
      <a href="#/ofertas" class="font-body-m text-body-m font-bold text-primary">Ver ofertas</a></div>`;
  } else {
    list.innerHTML = items.map(a => `
      <a href="#/oferta/${a.job_id}" class="block bg-surface-light rounded-2xl p-space-lg border border-border-light hover:border-primary transition-colors">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <h3 class="font-headline-s text-headline-s text-ink-light">${ui.esc(a.title || 'Oferta')}</h3>
            <p class="text-body-s text-ink-secondary-light mt-1">${ui.esc(a.company_name || '')}</p>
          </div>
          <span class="px-2.5 py-1 rounded-full text-body-s font-bold ${CLASS_STATUS[a.status] || CLASS_STATUS.applied}">${LABEL_STATUS[a.status] || a.status}</span>
        </div>
        <p class="text-body-s text-ink-secondary-light mt-2">Enviada el ${ui.fecha(a.created_at)}</p>
      </a>`).join('');
  }
  // pestañas de estado con conteos reales
  qa(root, 'button').forEach(b => {
    const t = (b.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
    const key = Object.keys(LABEL_STATUS).find(k => t.startsWith(LABEL_STATUS[k].toLowerCase()));
    if (!key) return;
    const n = items.filter(a => a.status === key).length;
    b.textContent = LABEL_STATUS[key] + ' ' + n;
    b.addEventListener('click', () => {
      qa(root, 'button').forEach(x => x.classList.remove('bg-primary', 'text-on-primary'));
      b.classList.add('bg-primary', 'text-on-primary');
      const filtered = items.filter(a => a.status === key);
      const cont = q(root, '#applications-container');
      if (!cont) return;
      cont.innerHTML = filtered.length
        ? filtered.map(a => `<a href="#/oferta/${a.job_id}" class="block bg-surface-light rounded-2xl p-space-lg border border-border-light">
            <div class="flex items-start justify-between gap-3"><div class="min-w-0">
            <h3 class="font-headline-s text-headline-s text-ink-light">${ui.esc(a.title || 'Oferta')}</h3>
            <p class="text-body-s text-ink-secondary-light">${ui.esc(a.company_name || '')}</p></div>
            <span class="px-2.5 py-1 rounded-full text-body-s font-bold ${CLASS_STATUS[a.status]}">${LABEL_STATUS[a.status]}</span></div></a>`).join('')
        : `<div class="pp-empty"><span class="material-symbols-outlined">inbox</span><p class="font-headline-s text-headline-s">Nada por aquí todavía</p><p class="text-body-s text-ink-secondary-light">Cambia de pestaña para ver otros estados.</p></div>`;
    });
  });
};

// ---------- PANEL DE EMPRESA ----------
F['panel-empresa'] = async (root) => {
  const u = currentUser();
  if (!u || u.role !== 'business') {
    root.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">lock</span>
      <p class="font-headline-s text-headline-s">Esta área es para empresas</p>
      <p class="text-body-s text-ink-secondary-light">Entra con una cuenta de empresa.</p>
      <a href="#/auth" class="font-body-m text-body-m font-bold text-primary">Ingresar</a></div>`;
    return;
  }
  let dash = null;
  try { dash = await api.businessDashboard(); } catch (e) { ui.toast('No se pudo cargar el panel', 'error'); }
  if (dash) {
    qa(root, 'div, span, button').forEach(el => {
      const t = (el.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      if (/^ofertas\s*\d*$/.test(t)) el.textContent = 'Ofertas ' + dash.published;
      if (/^postulantes?\s*\d*\s*(nuevos?)?$/.test(t)) el.textContent = 'Postulantes ' + dash.candidates;
    });
    // insignias de las pestañas del panel
    qa(root, 'button').forEach(b => {
      const t = (b.textContent || '').replace(/\s+/g, ' ').trim().toLowerCase();
      const badge = qa(b, 'span').find(s => /^\d+(\s*nuevos?)?$/.test((s.textContent || '').trim()));
      if (!badge) return;
      if (t.includes('ofertas') && !t.includes('publicadas')) badge.textContent = String(dash.published);
      if (t.includes('postulantes')) badge.textContent = String(dash.candidates);
    });
    const n = byText(root, 'span, p', 'ofertas');
    if (n && /^\d+\s*ofertas$/.test((n.textContent || '').trim())) n.textContent = dash.published + ' ofertas';
    // el gráfico semanal no tiene endpoint: se marca como sin datos
    const chart = byText(root, 'h2, h3', 'Postulaciones por semana');
    if (chart) {
      const box = chart.closest('div, section');
      if (box) qa(box, 'span, p, div').forEach(el => {
        if (/^\d+$/.test((el.textContent || '').trim()) && el.children.length === 0) el.textContent = '—';
      });
    }
  }
  let jobs = [];
  try { const res = await api.businessJobs(); jobs = Array.isArray(res) ? res : (res.items || []); }
  catch { /* sin ofertas */ }
  // lista de ofertas de la empresa: la sección "Ofertas publicadas"
  const sec = byText(root, 'h2, h3', 'Ofertas publicadas');
  const cont = sec ? sec.closest('section, div').querySelector('.grid, div') : null;
  if (sec && cont) {
    const list = gridWithArticles(sec.closest('section') || root) || cont;
    if (jobs.length) {
      list.innerHTML = jobs.map(j => `<div class="flex items-center justify-between gap-3 py-2 border-b border-border-light last:border-0">
        <a href="#/oferta/${j.id}" class="font-body-m text-body-m text-ink-light truncate">${ui.esc(j.title)}</a>
        <span class="px-2.5 py-1 rounded-full text-body-s font-bold ${j.status === 'published' ? 'bg-primary-container-light text-primary' : j.status === 'draft' ? 'bg-surface-container-low text-ink-secondary-light' : 'bg-error-container text-error'}">${j.status === 'published' ? 'Publicada' : j.status === 'draft' ? 'Borrador' : 'Cerrada'}</span>
      </div>`).join('');
    }
  }
  const pub = byText(root, 'button', 'Publicar oferta') || q(root, '#btn-publicar');
  if (pub) pub.addEventListener('click', () => ui.toast('Publicación de ofertas: disponible en el siguiente tramo', ''));
  const perfil = byText(root, 'button', 'Perfil de empresa') || byText(root, 'a', 'Perfil de empresa');
  if (perfil) perfil.addEventListener('click', () => { location.hash = '#/empresas'; });
};

// ---------- DIRECTORIO DE EMPRESAS ----------
F.empresas = async (root) => {
  const list = q(root, '#companies-grid') || findList(root, []);
  if (!list) return;
  list.innerHTML = `<div class="col-span-full pp-empty"><span class="pp-spin" style="border-color:rgba(14,124,102,.25);border-top-color:#0E7C66"></span><p class="font-headline-s text-headline-s">Cargando empresas…</p></div>`;
  let items = [];
  try { const res = await api.companies(); items = Array.isArray(res) ? res : (res.items || []); }
  catch (e) { list.innerHTML = `<div class="col-span-full pp-empty"><span class="material-symbols-outlined">cloud_off</span><p class="font-headline-s text-headline-s">No se pudieron cargar las empresas</p></div>`; return; }
  stripFakeCounters(root, null);
  const count = q(root, '#results-count');
  if (count) count.textContent = items.length + ' empresas';
  if (!items.length) {
    list.innerHTML = emptyState('Aún no hay empresas registradas', 'Cuando se sumen empresas de Piura, aparecerán aquí.');
    return;
  }
  list.innerHTML = items.map(c => `
    <div class="bg-surface-light rounded-2xl p-space-lg border border-border-light flex flex-col gap-2">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-xl bg-primary-container-light text-primary flex items-center justify-center font-headline-s font-bold">${ui.initials(c.name)}</div>
        <div class="min-w-0">
          <h3 class="font-headline-s text-headline-s text-ink-light truncate">${ui.esc(c.name)}</h3>
          <p class="text-body-s text-ink-secondary-light truncate">${ui.esc(c.sector || c.district || 'Piura')}</p>
        </div>
      </div>
      <p class="text-body-s text-ink-secondary-light line-clamp-2">${ui.esc(c.description || '')}</p>
      <p class="text-body-s text-ink-secondary-light">Ofertas publicadas: ${c.published_jobs || 0}</p>
    </div>`).join('');
  const search = q(root, '#company-search') || q(root, 'input[type="text"]');
  if (search) search.addEventListener('input', debounce(() => {
    const v = search.value.trim().toLowerCase();
    qa(list, 'h3').forEach(h => {
      const card = h.closest('div');
      if (card) card.style.display = (h.textContent || '').toLowerCase().includes(v) ? '' : 'none';
    });
  }, 250));
  const reset = q(root, '#reset-filters') || byText(root, 'button', 'Limpiar filtros');
  if (reset) reset.addEventListener('click', () => {
    if (search) search.value = '';
    qa(list, 'h3').forEach(h => { const card = h.closest('div'); if (card) card.style.display = ''; });
    if (count) count.textContent = items.length + ' empresas';
  });
};

// ---------- MAPA ----------
F.mapa = async (root) => {
  const vp = q(root, '#map-viewport') || q(root, 'main');
  if (!vp) return;
  let items = [];
  try { const res = await api.jobMap({ limit: 200 }); items = Array.isArray(res) ? res : (res.items || []); }
  catch (e) { vp.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">cloud_off</span><p class="font-headline-s text-headline-s">No se pudo cargar el mapa</p></div>`; return; }

  const pins = q(root, '#map-pins') || vp;
  const byDistrict = {};
  items.forEach(j => { byDistrict[j.district || 'Piura'] = (byDistrict[j.district || 'Piura'] || 0) + 1; });

  if (!items.length) {
    vp.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">location_off</span>
      <p class="font-headline-s text-headline-s">Sin ofertas georreferenciadas</p>
      <p class="text-body-s text-ink-secondary-light">Cuando las empresas publiquen con ubicación, aparecerán aquí.</p></div>`;
  } else {
    // pines proporcionales a la lat/lng de Piura (-0.2, -80.6)
    pins.innerHTML = items.slice(0, 40).map(j => {
      const left = Math.min(92, Math.max(4, ((j.lng + 81.3) / 1.4) * 100));
      const top = Math.min(88, Math.max(6, ((j.lat + 5.4) / 5.6) * 100));
      return `<a href="#/oferta/${j.id}" class="absolute group" style="left:${left.toFixed(1)}%;top:${top.toFixed(1)}%" title="${ui.esc(j.title)}">
        <span class="flex flex-col items-center">
          <span class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center material-symbols-outlined text-[18px] shadow-lg group-hover:scale-110 transition-transform">work</span>
          <span class="mt-1 px-2 py-0.5 rounded-full bg-surface-light text-ink-light text-body-s shadow whitespace-nowrap">${ui.esc((j.title || '').slice(0, 22))}</span>
        </span></a>`;
    }).join('');
  }

  // chips de distrito con conteos reales
  const chipBox = q(root, '#district-chips-container') || byText(root, 'button', 'Todos');
  if (chipBox) {
    const holder = chipBox.closest('div') || chipBox;
    const chips = qa(holder, 'button');
    if (chips.length) {
      chips.forEach(b => {
        const t = (b.textContent || '').replace(/\s+/g, ' ').trim();
        const name = t.replace(/\s*\(\d+\)\s*$/, '').trim();
        if (name === 'Todos') { b.textContent = 'Todos (' + items.length + ')'; return; }
        const n = byDistrict[name] || 0;
        b.textContent = name + ' (' + n + ')';
        b.addEventListener('click', () => {
          qa(holder, 'button').forEach(x => x.classList.remove('bg-primary', 'text-on-primary'));
          b.classList.add('bg-primary', 'text-on-primary');
        });
      });
    }
  }
  // contador de ofertas cerca (Stitch lo deja en 32)
  qa(root, 'span, p, div').forEach(el => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (/^\d+\s*ofertas?\s*cerca/.test(t) && el.children.length === 0) {
      el.textContent = items.length + ' ofertas cerca de ti';
    }
  });
  // el panel lateral del mapa trae ofertas inventadas: se sustituyen por las reales
  const cardSel = q(root, '#card-job-1');
  const panelList = cardSel && cardSel.parentElement;
  if (panelList) {
    const lista = items.slice(0, 6);
    panelList.innerHTML = lista.length
      ? lista.map((j, i) => `
        <article class="relative bg-surface-light p-space-md rounded-2xl shadow-md transition-all flex flex-col gap-space-sm hover:-translate-y-0.5 border ${i === 0 ? 'border-primary' : 'border-border-light'}">
          <div class="flex items-start justify-between gap-2">
            <div class="min-w-0">
              ${i === 0 ? '<span class="inline-flex items-center gap-1 text-[11px] font-bold tracking-wide uppercase text-primary"><span class="w-1.5 h-1.5 rounded-full bg-primary animate-ping"></span>Seleccionada en el mapa</span>' : ''}
              <h3 class="font-headline-s text-headline-s text-ink-light font-bold mt-0.5 leading-snug">${ui.esc(j.title)}</h3>
              <span class="font-body-m text-body-m text-ink-secondary-light font-medium">${ui.esc(j.company_name || 'Empresa de Piura')}</span>
            </div>
            <div class="shrink-0 w-11 h-11 rounded-xl bg-primary-container-light flex items-center justify-center text-primary font-bold">${ui.initials(j.company_name || 'PE')}</div>
          </div>
          <div class="flex items-center gap-2 flex-wrap font-body-s text-body-s text-on-surface-variant">
            <span class="inline-flex items-center gap-1 font-semibold text-ink-light bg-surface-container px-2 py-0.5 rounded-md"><span class="material-symbols-outlined text-[16px] text-primary">near_me</span>${ui.esc(j.district || 'Piura')}</span>
            <span class="text-ink-secondary-light">${ui.fecha(j.created_at)}</span>
          </div>
          <div class="flex items-center justify-between gap-2 pt-1">
            <div class="flex items-center gap-1.5">
              <span class="px-2.5 py-0.5 rounded-full bg-primary-container-light text-primary font-body-s font-semibold capitalize">${ui.esc(j.modality || 'presencial')}</span>
              ${ui.salario(j) ? `<span class="px-2.5 py-0.5 rounded-full bg-accent-container-light text-ink-light font-body-s font-bold">${ui.esc(ui.salario(j))}</span>` : ''}
            </div>
            <a href="#/oferta/${j.id}" class="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-body-s font-bold shrink-0">Ver oferta</a>
          </div>
        </article>`).join('')
      : '<div class="pp-empty"><span class="material-symbols-outlined">location_off</span><p class="font-headline-s text-headline-s">Sin ofertas en el mapa</p></div>';
  }
  // el popover de muestra de Stitch se rellena con la primera oferta real
  const pop = q(root, '#pin-job-1') || qa(root, 'div').find(d => /Terminal Portuario/.test(d.textContent || '') && d.querySelector('a'));
  if (pop && items.length) {
    const j = items[0];
    const textos = qa(pop, 'span, p, div').filter(e => e.children.length === 0);
    textos.forEach(e => {
      const t = (e.textContent || '').trim();
      if (/^Terminal Portuario/.test(t)) e.textContent = j.company_name || 'Empresa de Piura';
      if (/Practicante Preprofesional de Operaciones Portuarias/.test(t)) e.textContent = j.title;
      if (/^S\/\s*[\d,.]+/.test(t)) e.textContent = ui.salario(j) || 'Salario no indicado';
      if (/^PRESENCIAL$/.test(t)) e.textContent = (j.modality || 'presencial');
      if (/^Convenio UDEP\/UNP$/.test(t)) e.textContent = j.district || 'Piura';
    });
    const link = pop.querySelector('a');
    if (link) link.setAttribute('href', '#/oferta/' + j.id);
    const logo = qa(pop, 'span, div').find(e => e.children.length === 0 && !e.textContent.trim());
    if (logo) logo.textContent = ui.initials(j.company_name || 'PE');
  }
  // las etiquetas de los pines: solo las primeras para no solapar
  qa(root, '#map-pins a .whitespace-nowrap, #map-viewport > a .whitespace-nowrap')
    .forEach((el, i) => { if (i >= 4) el.style.display = 'none'; });
  const search = q(root, '#geo-search-input') || q(root, 'input[type="text"]');
  let mapa = null;
  // mapa real con OpenStreetMap (gratis, sin clave)
  if (vp && window.L) {
    const svg = vp.querySelector('svg');
    if (svg) svg.style.display = 'none';
    qa(vp, '#map-pins, [id^="pin-job-"], .pointer-events-none.absolute').forEach(e => { e.style.display = 'none'; });
    let box = q(root, '#pp-leaflet');
    if (!box) {
      box = document.createElement('div');
      box.id = 'pp-leaflet';
      box.style.cssText = 'position:absolute;inset:0;z-index:20;border-radius:16px;overflow:hidden';
      vp.appendChild(box);
    }
    try {
      const map = L.map(box, { zoomControl: true, attributionControl: true, scrollWheelZoom: false, zoomAnimation: false, fadeAnimation: false, markerZoomAnimation: false })
        .setView([-5.1945, -80.6336], 9);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
      const icon = L.divIcon({
        className: 'pp-pin', iconSize: [34, 34], iconAnchor: [17, 34], popupAnchor: [0, -30],
        html: '<span class="material-symbols-outlined">work</span>'
      });
      const markers = [];
      items.forEach(j => {
        if (typeof j.lat !== 'number' || typeof j.lng !== 'number') return;
        const m = L.marker([j.lat, j.lng], { icon, title: j.title }).addTo(map);
        m.bindPopup('<strong>' + ui.esc(j.title) + '</strong><br>' + ui.esc(j.company_name || '') +
          '<br><a href="#/oferta/' + j.id + '">Ver oferta</a>');
        m._pp = j;
        markers.push(m);
      });
      if (markers.length) map.fitBounds(L.latLngBounds(markers.map(m => m.getLatLng())).pad(0.15));
      mapa = {
        setFilter(v) {
          markers.forEach(m => {
            const ok = !v || (m._pp.title || '').toLowerCase().includes(v)
              || (m._pp.company_name || '').toLowerCase().includes(v)
              || (m._pp.district || '').toLowerCase().includes(v);
            if (ok) { if (!map.hasLayer(m)) m.addTo(map); } else if (map.hasLayer(m)) map.removeLayer(m);
          });
        }
      };
    } catch (e) { ui.toast('No se pudo cargar el mapa', 'error'); }
  }
  if (search) search.addEventListener('input', debounce(() => {
    const v = search.value.trim().toLowerCase();
    qa(root, '#map-viewport > a, #map-pins a').forEach(a => {
      const t = (a.getAttribute('title') || '').toLowerCase();
      a.style.display = t.includes(v) ? '' : 'none';
    });
    if (mapa) mapa.setFilter(v);
  }, 250));
  const radio = byText(root, 'button', 'Cambiar radio') || byText(root, 'a', 'Cambiar radio');
  if (radio) radio.addEventListener('click', () => ui.toast('El mapa cubre toda la Región Piura', ''));
  qa(root, 'span, p, div').forEach(el => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (/^Radio:.*km/.test(t) && el.children.length <= 1) {
      el.textContent = 'Cobertura: Región Piura';
    }
  });
  // Stitch deja "Presencial" marcado: se parte sin modalidad elegida
  qa(root, 'aside button, main button').forEach(b => {
    const t = (b.textContent || '').trim().toLowerCase();
    if (['presencial', 'híbrido', 'remoto', 'semipresencial'].includes(t)) {
      b.classList.remove('bg-primary', 'text-on-primary', 'ring-2', 'ring-primary');
    }
  });
};

// ---------- PANEL DE ADMIN ----------
F['panel-admin'] = async (root) => {
  const u = currentUser();
  if (!u || u.role !== 'admin') {
    root.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">lock</span>
      <p class="font-headline-s text-headline-s">Acceso restringido</p>
      <p class="text-body-s text-ink-secondary-light">Esta área es solo para administración.</p></div>`;
    return;
  }
  let d = null;
  try { d = await api.adminDashboard(); } catch (e) { ui.toast('No se pudo cargar el panel', 'error'); }
  if (d) {
    const mapa = [
      [/usuario/i, d.users], [/candidat/i, d.candidates], [/empresa/i, d.companies],
      [/oferta/i, d.jobs_published], [/moderaci/i, d.queue], [/postulaci/i, d.applications], [/lead/i, d.leads],
    ];
    // tarjetas KPI: etiqueta + número
    qa(root, 'section.grid > div, div.grid > div').forEach(card => {
      const label = qa(card, 'span, p').find(e => e.children.length === 0 && e.textContent.trim().length > 3);
      const num = qa(card, '.font-display, .text-3xl, .text-2xl').find(e => e.children.length === 0);
      if (!label || !num) return;
      const hit = mapa.find(([re]) => re.test(label.textContent || ''));
      if (hit) num.textContent = String(hit[1]);
      // los "+38 esta semana" de Stitch no tienen endpoint: se retiran
      qa(card, 'span').forEach(s => { if (/^\+\d+/.test((s.textContent || '').trim())) s.remove(); });
    });
    // insignias de la barra de secciones
    qa(root, 'a').forEach(a => {
      const badge = qa(a, 'span').find(s => /^[\d.,]+(\s*nuevos?)?$/.test((s.textContent || '').trim()));
      if (!badge) return;
      const t = (a.textContent || '').toLowerCase();
      const hit = mapa.find(([re]) => re.test(t));
      if (hit) badge.textContent = String(hit[1]);
    });
  }
  // fecha real
  qa(root, 'span').forEach(s => {
    if (/^Hoy,\s*\d{1,2}\s+\w+\s+\d{4}$/.test((s.textContent || '').trim())) {
      s.textContent = 'Hoy, ' + ui.fecha(new Date().toISOString());
    }
  });
  // cola de moderación
  const cola = q(root, '#moderation-cards-container');
  if (cola) {
    let q = [];
    try { const res = await api.adminQueue(); q = Array.isArray(res) ? res : (res.items || []); }
    catch { /* sin cola */ }
    if (!q.length) {
      cola.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">task_alt</span>
        <p class="font-headline-s text-headline-s">Cola vacía</p>
        <p class="text-body-s text-ink-secondary-light">No hay ofertas esperando moderación.</p></div>`;
    } else {
      cola.innerHTML = q.map(j => `<div class="bg-surface-light rounded-2xl p-space-lg border border-border-light flex flex-col gap-2">
        <div class="flex items-start justify-between gap-3">
          <div class="min-w-0"><h3 class="font-headline-s text-headline-s text-ink-light">${ui.esc(j.title)}</h3>
          <p class="text-body-s text-ink-secondary-light">${ui.esc(j.company_name || 'Sin empresa')} · ${ui.fecha(j.created_at)}</p></div>
          <span class="px-2.5 py-1 rounded-full text-body-s font-bold bg-accent-container-light text-ink-light">${ui.esc(j.status)}</span>
        </div>
        <div class="flex gap-2">
          <button class="px-3 py-1.5 rounded-full bg-primary text-on-primary text-body-s font-bold" data-approve="${j.id}">Aprobar</button>
          <button class="px-3 py-1.5 rounded-full border border-error text-error text-body-s font-bold" data-reject="${j.id}">Rechazar</button>
        </div></div>`).join('');
      cola.querySelectorAll('[data-approve]').forEach(b => b.addEventListener('click', async () => {
        try { await api.adminModerate(b.dataset.approve, 'approve'); ui.toast('Oferta aprobada', 'success'); F['panel-admin'](root); }
        catch (e) { ui.toast(e.message, 'error'); }
      }));
      cola.querySelectorAll('[data-reject]').forEach(b => b.addEventListener('click', async () => {
        try { await api.adminModerate(b.dataset.reject, 'reject'); ui.toast('Oferta rechazada'); F['panel-admin'](root); }
        catch (e) { ui.toast(e.message, 'error'); }
      }));
    }
  }
};

// ---------- NOTIFICACIONES ----------
F.notificaciones = async (root) => {
  const user = await currentUser();
  const lista = gridWithArticles(root) || q(root, 'main');
  // chips de filtro: se reconstruyen con los conteos reales
  const chips = qa(root, 'button').filter(b => /Todas|Postulaciones|Mensajes|Recordatorios/.test(b.textContent || '') && /\d/.test(b.textContent || ''));
  qa(root, 'button').forEach(b => {
    if (/Marcar todas como leídas/.test(b.textContent || '')) {
      b.addEventListener('click', async () => {
        const items = Array.isArray((await api.myNotifications().catch(() => ({ items: [] }))).items) ? (await api.myNotifications()).items : [];
        for (const n of items.filter(x => !x.is_read)) { try { await api.markNotification(n.id); } catch { /* noop */ } }
        F.notificaciones(root);
      });
    }
    if (/Configurar alertas/.test(b.textContent || '')) {
      b.addEventListener('click', () => ui.toast('La configuración de alertas llegará pronto', 'info'));
    }
  });
  if (!user) {
    if (lista) lista.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">notifications</span>
      <p class="font-headline-s text-headline-s">Inicia sesión para ver tus notificaciones</p>
      <a class="pp-btn pp-btn-primary" href="#/auth">Iniciar sesión</a></div>`;
    chips.forEach(c => c.remove());
    return;
  }
  let items = [];
  try { const r = await api.myNotifications(); items = Array.isArray(r) ? r : (r.items || []); } catch (e) { ui.toast(e.message, 'error'); }
  const pend = items.filter(x => !x.is_read).length;
  const badge = q(root, '#unread-counter-badge');
  if (badge) badge.textContent = pend ? pend + ' pendientes' : 'Sin pendientes';
  chips.forEach(c => {
    const t = (c.textContent || '').replace(/\s+/g, ' ').trim();
    const m = t.match(/^(Todas|Postulaciones|Mensajes|Recordatorios)\s*(\d+)?$/);
    if (!m) return;
    const tipo = m[1];
    const n = tipo === 'Todas' ? items.length
      : items.filter(x => (x.type || '').toLowerCase().includes(tipo.slice(0, 6).toLowerCase())).length;
    c.textContent = tipo + ' ' + n;
  });
  if (!lista) return;
  if (!items.length) {
    lista.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">notifications_none</span>
      <p class="font-headline-s text-headline-s">Sin novedades</p>
      <p class="text-body-s text-ink-secondary-light">Aquí aparecerán tus postulaciones, mensajes y recordatorios.</p></div>`;
    return;
  }
  lista.innerHTML = items.map(n => `
    <article class="bg-surface-light rounded-2xl p-space-lg border border-border-light flex items-start gap-3 ${n.is_read ? 'opacity-70' : ''}">
      <span class="material-symbols-outlined text-primary mt-0.5">${n.is_read ? 'mark_email_read' : 'mark_email_unread'}</span>
      <div class="min-w-0 flex-1">
        <p class="font-headline-s text-headline-s text-ink-light">${ui.esc(n.title)}</p>
        <p class="text-body-s text-ink-secondary-light">${ui.esc(n.body || '')}</p>
        <p class="text-body-s text-ink-secondary-light mt-1">${ui.fecha(n.created_at)}</p>
      </div>
      ${n.is_read ? '' : `<button class="px-3 py-1.5 rounded-full border border-primary text-primary text-body-s font-bold" data-leer="${n.id}">Marcar leída</button>`}
    </article>`).join('');
  qa(lista, '[data-leer]').forEach(b => b.addEventListener('click', async () => {
    try { await api.markNotification(b.dataset.leer); F.notificaciones(root); } catch (e) { ui.toast(e.message, 'error'); }
  }));
};

// ---------- CONTACTO ----------
F.contacto = async (root) => {
  const form = q(root, 'form');
  if (!form) return;
  // el tipo se elige con los chips de Stitch: se sincronizan con el campo oculto
  const select = q(root, 'input[name="query_type"]') || q(root, 'select');
  qa(root, 'button').filter(b => /Soy Candidato|Soy Empresa|Soporte Técnico/.test(b.textContent || '')).forEach(b => {
    b.addEventListener('click', () => {
      qa(root, 'button').filter(x => /Soy Candidato|Soy Empresa|Soporte Técnico/.test(x.textContent || '')).forEach(x => x.classList.remove('bg-primary', 'text-on-primary'));
      b.classList.add('bg-primary', 'text-on-primary');
      const map = { 'Soy Candidato': 'candidate', 'Soy Empresa': 'business', 'Soporte Técnico': 'support' };
      if (select) select.value = map[(b.textContent || '').trim()] || 'contact';
    });
  });
  // el select de motivo es obligatorio: se ofrece el primer motivo real
  const motivo = q(root, 'select[name="subject"]');
  if (motivo && !motivo.value && motivo.options.length > 1) motivo.selectedIndex = 1;
  // los placeholders de Stitch traen nombres de muestra
  qa(root, 'input[placeholder], textarea[placeholder]').forEach(i => {
    const ph = i.getAttribute('placeholder') || '';
    if (/Valeria|Carlos|Ej\./.test(ph)) i.setAttribute('placeholder', ph.replace(/Ej\.\s*/, '').replace(/Valeria Mendoza o Carlos Silva/, 'Tu nombre y apellidos'));
  });
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const get = (sel) => (q(root, sel) || {}).value || '';
    const payload = {
      name: get('input[name="fullname"]') || get('input[type="text"]') || get('input:not([type])'),
      email: get('input[type="email"]'),
      phone: get('input[type="tel"]'),
      message: get('textarea'),
      type: select ? select.value : 'contact',
    };
    try {
      const r = await api.intake(payload);
      ui.toast('Mensaje enviado. Te responderemos pronto.', 'success');
      form.reset();
      if (r && r.lead_id) ui.toast('Hemos recibido tu mensaje (n.º ' + r.lead_id + ').', 'success');
    } catch (err) { ui.toast(err.message || 'No se pudo enviar', 'error'); }
  });
};

// ---------- PERFIL PÚBLICO ----------
F['perfil-publico'] = async (root, ctx) => {
  const uid = ctx && ctx.params && ctx.params[0];
  const main = q(root, 'main') || root;
  if (!uid) {
    main.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">person_search</span>
      <p class="font-headline-s text-headline-s">No se indicó ninguna candidata</p>
      <a class="pp-btn pp-btn-primary" href="#/ofertas">Ver ofertas</a></div>`;
    return;
  }
  let p;
  try { p = await api.publicProfile(uid); } catch (e) { main.innerHTML = `<div class="pp-empty"><p class="font-headline-s text-headline-s">Perfil no encontrado</p></div>`; return; }
  qa(root, 'h1, h2').forEach(h => { if (/candidata|perfil/i.test(h.textContent || '')) h.textContent = p.name || 'Candidata'; });
  const sum = q(root, 'p.font-body-l, p');
  qa(root, 'p').forEach(el => { if (/años de experiencia|disponible|me apasiona/i.test(el.textContent || '')) el.textContent = p.headline || p.summary || ''; });
  const skills = qa(root, 'span').filter(s => /^(T|)[A-Za-zÁÉÍÓÚáéíóúñ ]{3,20}$/.test((s.textContent || '').trim()));
  // habilidades: se pintan donde Stitch puso las de muestra
  const chipHost = skills.length ? skills[0].parentElement : null;
  if (chipHost) {
    const reales = (p.skills || []).slice(0, 8);
    if (reales.length) chipHost.innerHTML = reales.map(s => `<span class="px-2.5 py-1 rounded-full bg-surface-container text-ink-secondary-light text-body-s font-semibold">${ui.esc(s)}</span>`).join('');
  }
  const cv = byText(root, 'button', 'Descargar CV');
  if (cv) { cv.disabled = true; cv.textContent = 'CV no disponible'; cv.classList.add('opacity-60'); }
  const inv = byText(root, 'button', 'Enviar invitación');
  if (inv) inv.addEventListener('click', () => ui.toast('La conversación formal llega con el convenio activo', 'info'));
};

// ---------- PUBLICAR OFERTA ----------
F['publicar-oferta'] = async (root) => {
  const user = await currentUser();
  const main = q(root, 'main') || root;
  if (!user || user.role !== 'business') {
    main.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">work</span>
      <p class="font-headline-s text-headline-s">Solo las empresas pueden publicar ofertas</p>
      <p class="text-body-s text-ink-secondary-light">Entra con tu cuenta de empresa para continuar.</p>
      <a class="pp-btn pp-btn-primary" href="#/auth">Iniciar sesión</a></div>`;
    return;
  }
  const guard = byText(root, 'button', 'Guardar borrador');
  const next = byText(root, 'button', 'Continuar');
  const postular = byText(root, 'button', 'Postular ahora');
  if (postular) postular.parentElement.remove();   // no tiene sentido en un panel de empresa
  const submit = async () => {
    const val = (sel) => (q(root, sel) || {}).value || '';
    const payload = {
      title: val('input[type="text"]'),
      district: val('select') || 'Piura',
      description: val('textarea'),
    };
    if (!payload.title || payload.title.trim().length < 4) { ui.toast('Escribe el nombre del puesto', 'error'); return; }
    try {
      await api.createJob(payload);
      ui.toast('Oferta enviada a revisión', 'success');
      location.hash = '#/panel-empresa';
    } catch (e) { ui.toast(e.message || 'No se pudo publicar', 'error'); }
  };
  if (guard) guard.addEventListener('click', submit);
  if (next) next.addEventListener('click', submit);
  // rellenar distritos reales en los select de la pantalla
  const sels = qa(root, 'select');
  if (sels.length) { try { const d = await api.districts(); const list = Array.isArray(d) ? d : (d.districts || []); } catch { /* noop */ } }
};

// ---------- PANTALLAS LEGALES / GUÍA ----------
F.legales = async (root) => {
  qa(root, 'p, li, span, a').forEach(el => {
    const t = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (/@\w+\.(com|pe|cl|local)/.test(t) && el.children.length === 0) el.textContent = 'contacto@practicape.pe';
    if (/\b\d{7,}\b/.test(t) && /tel|fono|anexo|whast/i.test(t)) el.textContent = t.replace(/\b\d{7,}\b/g, '073 000 000');
  });
};
F.privacidad = F.legales;
F.terminos = F.legales;
F.guias = F.legales;
F['libro-de-reclamaciones'] = F.legales;
