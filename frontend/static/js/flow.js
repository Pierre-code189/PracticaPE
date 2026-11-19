/* Practicape — hidratación de las pantallas de Stitch con la API real. */
"use strict";

const PPF = (() => {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));

  function setText(el, v) { if (el) el.textContent = v; }
  function setHTML(el, v) { if (el) el.innerHTML = v; }
  function show(el) { if (el) el.style.display = ""; }
  function hide(el) { if (el) el.style.display = "none"; }

  function toast(msg, type) {
    let box = $(".pp-toasts");
    if (!box) { box = document.createElement("div"); box.className = "pp-toasts"; document.body.appendChild(box); }
    const t = document.createElement("div");
    t.className = "pp-toast " + (type || "success");
    t.innerHTML = `<span class="material-symbols-outlined">${type === "error" ? "error" : "check_circle"}</span><span>${esc(msg)}</span>`;
    box.appendChild(t);
    setTimeout(() => { t.style.opacity = "0"; setTimeout(() => t.remove(), 250); }, 3200);
  }

  function setTitle(t) { document.title = t ? t + " | Practicape" : "Practicape — Empleo y prácticas en Piura"; }

  function salaryLabel(v) {
    const s = String(v || "").trim();
    if (!s) return "No indicado";
    return /^\s*S\/\s*/i.test(s) ? s.replace(/\s+/g, " ") : "S/ " + s;
  }

  /* ── Tarjetas de oferta ─────────────────────────────────────────── */
  function metaRows(job) {
    const rows = [
      ["location_on", (job.district || "Piura") + (job.city && job.city !== job.district ? " · " + job.city : "")],
      ["group", `${job.positions || 1} vacante${(job.positions || 1) === 1 ? "" : "s"}`],
      ["work", modalityLabel(job.modality)]
    ];
    return rows.map(([icon, txt]) =>
      `<div class="flex items-center gap-2 font-body-s text-body-s text-ink-secondary">` +
      `<span class="material-symbols-outlined text-[16px] text-outline">${icon}</span>${esc(txt)}</div>`).join("");
  }

  function fillJobCard(tpl, job) {
    const q = s => tpl.querySelector(s);
    const company = job.company || {};
    setText(q('[data-job="logo"]'), initials(company.name || job.title));
    setText(q('[data-job="company"]'), company.name || "Empresa");
    const ver = q('[data-job="verified"]');
    if (ver) ver.style.display = company.is_verified ? "" : "none";
    setText(q('[data-job="district"]'), job.district || "Piura");
    const mod = q('[data-job="modality"]');
    if (mod) {
      const remoto = String(job.modality).toLowerCase() === "remoto";
      mod.textContent = modalityLabel(job.modality);
      mod.classList.toggle("bg-accent-container", remoto);
      mod.classList.toggle("text-secondary", remoto);
      mod.classList.toggle("bg-primary-container", !remoto);
      mod.classList.toggle("text-primary", !remoto);
    }
    setText(q('[data-job="title"]'), job.title);
    setHTML(q('[data-job="meta"]'), metaRows(job));
    const sal = q('[data-job="salary"]');
    if (sal) sal.textContent = salaryLabel(job.salary);
    setText(q('[data-job="time"]'), timeAgo(job.created_at));
    setText(q('[data-job="hours"]'), `${job.positions || 1} vacante${(job.positions || 1) === 1 ? "" : "s"}`);
    const link = q('[data-job="link"]');
    if (link) {
      const href = "#/oferta/" + job.id;
      link.setAttribute("href", href);
      link.setAttribute("data-href", href);
      if (link.tagName === "BUTTON") link.setAttribute("type", "button");
    }
    const sub = tpl.querySelector("span.font-label");
    if (sub && sub.textContent.includes("SUBVENCIÓN")) sub.textContent = "SALARIO";
    return tpl;
  }

  function renderJobs(grid, tpl, jobs) {
    grid.innerHTML = "";
    if (!jobs.length) return 0;
    const frag = document.createDocumentFragment();
    jobs.forEach(job => frag.appendChild(fillJobCard(tpl.cloneNode(true), job)));
    grid.appendChild(frag);
    return jobs.length;
  }

  function jobTemplate(root) {
    const tpl = root.querySelector('[data-job="template"]');
    if (!tpl) return { tpl: null, grid: null };
    return { tpl, grid: tpl.parentElement };
  }

  /* ── Home ───────────────────────────────────────────────────────── */
  async function hydrateHome(root) {
    const { tpl, grid } = jobTemplate(root);
    if (tpl && grid) {
      try {
        const jobs = await getJobs({ limit: 3 });
        renderJobs(grid, tpl, jobs.slice(0, 3));
      } catch (e) { console.warn("home jobs", e); }
    }
    const role = $("#search-role", root), dist = $("#search-district", root), mod = $("#search-modality", root);
    try {
      const districts = await getDistricts();
      if (Array.isArray(districts) && dist) {
        const cur = dist.value;
        dist.innerHTML = '<option value="">Todos los distritos</option>' +
          districts.map(d => `<option value="${esc(d)}">${esc(d)}</option>`).join("");
        dist.value = cur;
      }
    } catch (e) { /* opciones estáticas */ }
    const go = () => {
      const qs = new URLSearchParams();
      if (role && role.value.trim()) qs.set("q", role.value.trim());
      if (dist && dist.value && dist.value !== "all") qs.set("district", dist.value);
      if (mod && mod.value && mod.value !== "all") qs.set("modality", mod.value);
      const s = qs.toString();
      location.hash = "#/ofertas" + (s ? "?" + s : "");
    };
    const btn = $("#home-search-btn", root);
    if (btn) btn.addEventListener("click", go);
    [role, dist, mod].forEach(el => el && el.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); go(); } }));

    // Chips de distrito: llevan al listado filtrado.
    const DISTRICTS = ["Piura Centro", "Castilla", "Catacaos", "Veintiséis de Octubre", "Sullana", "Paita", "Talara"];
    $$("button", root).forEach(b => {
      const t = (b.innerText || "").replace(/\s+/g, " ").trim();
      const d = DISTRICTS.find(x => t === x || t.includes(x));
      if (d && !b.dataset.href) b.dataset.href = "#/ofertas?district=" + encodeURIComponent(d);
    });

    // Enlaces del diseno con data-path: destino real.
    $$("a[data-path]", root).forEach(a => {
      const p = a.getAttribute("data-path");
      const href = p === "ofertas" ? "#/ofertas" : p === "para-empleadores" ? "#/panel-empresa" : "";
      if (href) { a.setAttribute("href", href); a.setAttribute("data-href", href); }
    });

    // Contador real de ofertas en "Ver todas las ofertas".
    const all = await getJobs({ status: "published", limit: 500 }).catch(() => []);
    const total = Array.isArray(all) ? all.length : 0;
    $$("a", root).forEach(a => {
      a.childNodes.forEach(n => {
        if (n.nodeType === 3 && /Ver todas las ofertas/i.test(n.nodeValue || "")) {
          a.setAttribute("href", "#/ofertas");
          a.setAttribute("data-href", "#/ofertas");
          n.nodeValue = total ? " Ver todas las ofertas (" + total + ")" : " Ver todas las ofertas";
        }
      });
    });
  }

  /* ── Ofertas ────────────────────────────────────────────────────── */
  async function hydrateOfertas(root, params = {}) {
    const { tpl, grid } = jobTemplate(root);
    if (!tpl || !grid) return;
    const form = $("#filterForm", root), kw = $("#keywordInput", root);
    const modSel = $("#modalitySelect", root), distSel = $("#districtSelect", root);
    const empty = $("#emptyState", root), pagination = $("#paginationBlock", root);
    const loadMore = $("#loadMoreBtn", root), limpiar = $("#of-limpiar-filtros", root);
    const PAGE = 6;
    let all = [], page = 1;
    const totalPages = () => Math.max(1, Math.ceil(all.length / PAGE));

    try {
      const districts = await getDistricts();
      if (Array.isArray(districts) && distSel) {
        const cur = distSel.value;
        distSel.innerHTML = '<option value="">Todos los distritos</option>' +
          districts.map(d => `<option value="${esc(d)}">${esc(d)}</option>`).join("");
        distSel.value = cur;
      }
    } catch (e) { /* opciones estáticas */ }

    if (params.q && kw) kw.value = params.q;
    if (params.modality && modSel) modSel.value = params.modality;
    if (params.district && distSel) distSel.value = params.district;

    function render() {
      const slice = all.slice((page - 1) * PAGE, page * PAGE);
      renderJobs(grid, tpl, slice);
      if (empty) empty.style.display = all.length ? "none" : "";
      if (pagination) pagination.style.display = all.length ? "" : "none";
      if (loadMore) {
        loadMore.style.display = (page * PAGE) < all.length ? "" : "none";
        const lm = loadMore.querySelector("span:last-child") || loadMore;
        setText(lm, `Cargar más ofertas (mostrando ${Math.min(page * PAGE, all.length)} de ${all.length})`);
      }
      // Paginacion por numero y flechas.
      $$("#paginationBlock button", root).forEach(b => {
        const n = (b.innerText || "").trim();
        if (/^\d+$/.test(n)) {
          const p = parseInt(n, 10);
          const on = p === page;
          b.disabled = on || p > totalPages();
          b.setAttribute("aria-current", on ? "page" : "false");
          b.onclick = e => { e.preventDefault(); if (p >= 1 && p <= totalPages()) { page = p; render(); } };
        } else if (/anterior|siguiente/i.test(b.getAttribute("title") || "")) {
          const delta = /siguiente/i.test(b.getAttribute("title") || "") ? 1 : -1;
          b.disabled = (page + delta) < 1 || (page + delta) > totalPages();
          b.onclick = e => { e.preventDefault(); page = Math.min(totalPages(), Math.max(1, page + delta)); render(); };
        }
      });
      $$("#paginationBlock span", root).forEach(s => {
        if (/Página \d+ de \d+/.test(s.textContent || "")) setText(s, `Página ${page} de ${totalPages()}`);
      });
      $$("span", root).forEach(s => {
        const t = s.textContent || "";
        if (/ofertas activas/i.test(t) && all.length) setText(s, all.length + " ofertas activas");
        if (/^Nuevas hoy/i.test(t) && all.length) setText(s, "Nuevas hoy");
        if (/^Convenios/i.test(t)) setText(s, "Convenios vigentes");
        if (/^\+\d+ ofertas/i.test(t)) setText(s, "");
        if (/^\d+%$/.test(t.trim())) setText(s, "");
      });
      $$("span", root).forEach(s => {
        const t = s.textContent || "";
        if (/^Mostrando \d+ (ofertas|de )/i.test(t) || /^Mostrando \d+ ofertas$/i.test(t)) {
          setText(s, `Mostrando ${slice.length} de ${all.length}`);
        }
      });
      const cont = $("#of-contador", root);
      if (cont) setText(cont, `Mostrando ${slice.length} de ${all.length}`);
    }

    async function load() {
      grid.innerHTML = '<div class="pp-loading col-span-full"><span class="pp-spin"></span>Buscando ofertas…</div>';
      try {
        all = await getJobs({
          status: "published",
          q: kw ? kw.value.trim() : "",
          modality: modSel && modSel.value !== "all" ? modSel.value : "",
          district: distSel && distSel.value !== "all" ? distSel.value : "",
          limit: 200
        });
      } catch (e) { all = []; }
      page = 1;
      render();
    }

    if (form) form.addEventListener("submit", e => { e.preventDefault(); load(); });
    if (loadMore) loadMore.addEventListener("click", () => { if (page < totalPages()) { page += 1; render(); } });
    if (limpiar) limpiar.addEventListener("click", () => { if (kw) kw.value = ""; if (modSel) modSel.value = ""; if (distSel) distSel.value = ""; load(); });

    // Chips de tipo de oferta: busqueda por texto.
    const CHIP_Q = [
      [/prácticas preprofesionales|prácticas pre/i, "prácticas preprofesionales"],
      [/part[\s-]?time/i, "part-time"],
      [/recién egresados|recien egresados/i, "recién egresados"],
      [/prácticas profesionales/i, "prácticas profesionales"]
    ];
    $$("button.tag-chip", root).forEach(b => {
      const t = (b.innerText || "").replace(/\s+/g, " ").trim();
      const hit = CHIP_Q.find(([re]) => re.test(t));
      if (hit && !b.dataset.href) {
        b.dataset.href = "#/ofertas?q=" + encodeURIComponent(hit[1]);
        b.setAttribute("type", "button");
      }
    });

    // Botones del estado vacio.
    if (empty) $$("button, a", empty).forEach(b => { b.dataset.href = "#/ofertas"; });

    load();
  }

  /* ── Detalle de oferta ──────────────────────────────────────────── */
  async function hydrateDetalle(root, params = {}) {
    const id = params.id;
    if (!id) { setTitle("Oferta no encontrada"); setHTML($("[data-field='main']", root) || root, '<div class="pp-empty"><span class="material-symbols-outlined">search_off</span><h3>No se encontró la oferta</h3><p class="pp-muted">Revisa el enlace o vuelve al listado.</p></div>'); return; }
    let job;
    try { job = await getJob(id); }
    catch (e) {
      setTitle("Oferta no encontrada");
      const main = $("[data-field='main']", root);
      if (main) setHTML(main, '<div class="pp-empty"><span class="material-symbols-outlined">search_off</span><h3>No se encontró la oferta</h3><p class="pp-muted">Revisa el enlace o vuelve al listado.</p></div>');
      return;
    }
    const company = job.company || {};
    setTitle(job.title);

    setText($('[data-field="logo"]', root), initials(company.name || job.title));
    setText($('[data-field="company"]', root), company.name || "Empresa");
    const ver = $('[data-field="verified"]', root);
    if (ver) ver.style.display = company.is_verified ? "" : "none";
    setText($('[data-field="sector"]', root), company.sector || "Sector no indicado");
    setText($('[data-field="time"]', root), timeAgo(job.created_at));
    setText($('[data-field="title"]', root), job.title);
    const intro = (job.description || "").replace(/\s+/g, " ").trim();
    setText($('[data-field="intro"]', root), intro ? intro.slice(0, 220) + (intro.length > 220 ? "…" : "") : "La empresa aún no ha publicado una descripción detallada.");
    setText($('[data-field="chip-1"]', root), modalityLabel(job.modality));
    setText($('[data-field="chip-2"]', root), (job.district || "Piura") + (job.city && job.city !== job.district ? " · " + job.city : ""));
    setText($('[data-field="chip-3"]', root), `${job.positions || 1} vacante${(job.positions || 1) === 1 ? "" : "s"}`);
    setText($('[data-field="salary"]', root), salaryLabel(job.salary) + (job.salary ? " / mes" : ""));
    const note = $('[data-field="salary-note"]', root);
    if (note) note.style.display = "none";

    setText($('[data-field="fact-1"]', root), modalityLabel(job.modality));
    setText($('[data-field="fact-2"]', root), `${job.positions || 1} vacante${(job.positions || 1) === 1 ? "" : "s"}`);
    setText($('[data-field="fact-3"]', root), job.district || "Piura");
    setText($('[data-field="fact-4"]', root), dateShort(job.created_at));

    setText($('[data-field="side-logo"]', root), initials(company.name || job.title));
    setText($('[data-field="side-company"]', root), company.name || "Empresa");
    const ruc = $('[data-field="side-ruc"]', root); if (ruc) ruc.style.display = "none";
    setText($('[data-field="side-sector"]', root), company.sector || "Sector no indicado");
    const size = $('[data-field="side-size"]', root); if (size) size.style.display = "none";
    setText($('[data-field="side-address"]', root), job.district || "Piura");
    setText($('[data-field="side-desc"]', root), company.sector ? `Empresa de ${company.sector.toLowerCase()} con presencia en ${company.district || job.district || "Piura"}.` : `Empresa con presence en ${job.district || "Piura"}.`);
    const applicants = $('[data-field="applicants"]', root);
    if (applicants) setText(applicants, `${job.applications_count || 0} postulante${(job.applications_count || 0) === 1 ? "" : "s"}`);
    const modalText = $('[data-field="modal-text"]', root);
    if (modalText) setText(modalText, job.title);
    const modalCompany = $('[data-field="modal-company"]', root);
    if (modalCompany) setText(modalCompany, company.name || "la empresa");

    renderDescription(root, job);
    wireDetail(root, job);
  }

  function renderDescription(root, job) {
    const main = $('[data-field="main"]', root);
    if (!main) return;
    const desc = (job.description || "").trim();
    const paras = desc ? desc.split(/\n+/).map(t => t.trim()).filter(Boolean) : [];
    const details = [
      ["Modalidad", modalityLabel(job.modality)],
      ["Distrito", job.district || "Piura"],
      ["Ciudad", job.city || "—"],
      ["Vacantes", String(job.positions || 1)],
      ["Publicada", dateShort(job.created_at)],
      ["Visitas", String(job.views || 0)],
      ["Postulaciones", String(job.applications_count || 0)],
      ["Estado", statusLabel(job.status)]
    ];
    main.innerHTML =
      '<article class="bg-surface rounded-2xl p-space-lg sm:p-space-xl shadow-[0_1px_2px_rgba(20,32,27,0.03)] space-y-space-md">' +
      '<div class="flex items-center gap-space-xs"><span class="material-symbols-outlined text-primary text-[22px]">description</span>' +
      '<h2 class="font-headline-s text-headline-s text-ink-primary font-bold">Acerca del rol</h2></div>' +
      '<div class="font-body-l text-body-l text-ink-secondary space-y-space-sm leading-relaxed">' +
      (paras.length ? paras.map(p => `<p>${esc(p)}</p>`).join("") : '<p>No se ha publicado una descripción para esta oferta. Puedes contactar a la empresa para más detalles.</p>') +
      '</div></article>' +
      '<article class="bg-surface rounded-2xl p-space-lg sm:p-space-xl shadow-[0_1px_2px_rgba(20,32,27,0.03)] space-y-space-md">' +
      '<div class="flex items-center gap-space-xs"><span class="material-symbols-outlined text-primary text-[22px]">info</span>' +
      '<h2 class="font-headline-s text-headline-s text-ink-primary font-bold">Detalles de la oferta</h2></div>' +
      '<dl class="grid grid-cols-1 sm:grid-cols-2 gap-space-md">' +
      details.map(([k, v]) =>
        `<div class="bg-surface-container-low rounded-xl p-space-md">` +
        `<dt class="font-label text-label text-ink-secondary">${esc(k).toUpperCase()}</dt>` +
        `<dd class="font-body-m text-body-m text-ink-primary font-semibold mt-1 pp-num">${esc(v)}</dd></div>`).join("") +
      '</dl></article>';
  }

  function wireDetail(root, job) {
    const applyMain = $("#btn-apply-main", root), applyMobile = $("#btn-apply-mobile", root);
    const saveBtn = $("#btn-save-job", root), saveBtnMobile = $("#btn-save-mobile", root);
    const modal = $("#modal-application", root), close = $("#btn-close-modal", root);
    const form = $("#quick-apply-form", root);
    const saveText = $("#save-text", root), saveIcon = $("#save-icon", root);
    const saveIconMobile = $("#save-icon-mobile", root);
    const share = $("#btn-share-job", root);

    const setApplied = () => {
      [applyMain, applyMobile].forEach(b => { if (!b) return; b.disabled = true; b.style.opacity = ".6"; b.style.pointerEvents = "none"; });
      if (applyMain) setText(applyMain, "Ya postulaste");
      if (applyMobile) setText(applyMobile, "Postulación enviada");
    };
    if (job.applied) setApplied();

    const setSaved = saved => {
      if (saveText) setText(saveText, saved ? "Guardada" : "Guardar");
      [saveIcon, saveIconMobile].forEach(ic => {
        if (!ic) return;
        ic.textContent = saved ? "bookmark" : "bookmark_border";
        ic.style.fontVariationSettings = saved ? "'FILL' 1" : "";
      });
      [saveBtn, saveBtnMobile].forEach(b => { if (b) b.setAttribute("aria-pressed", saved ? "true" : "false"); });
    };
    setSaved(!!job.saved);

    const openModal = () => {
      if (!store.token) { toast("Inicia sesión para postular", "error"); location.hash = "#/auth"; return; }
      if (job.applied) { toast("Ya postulaste a esta oferta"); return; }
      if (modal) { modal.style.display = "grid"; document.body.style.overflow = "hidden"; }
    };
    const closeModal = () => { if (modal) modal.style.display = "none"; document.body.style.overflow = ""; };

    [applyMain, applyMobile].forEach(b => b && b.addEventListener("click", openModal));
    if (close) close.addEventListener("click", closeModal);
    if (modal) modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

    const toggleSave = async () => {
      if (!store.token) { toast("Inicia sesión para guardar ofertas", "error"); location.hash = "#/auth"; return; }
      try {
        if (job.saved) { await unsaveJob(job.id); job.saved = false; setSaved(false); toast("Oferta quitada de guardadas"); }
        else { await saveJob(job.id); job.saved = true; setSaved(true); toast("Oferta guardada"); }
      } catch (e) { toast(e.message || "No se pudo guardar", "error"); }
    };
    [saveBtn, saveBtnMobile].forEach(b => b && b.addEventListener("click", toggleSave));

    if (share) {
      const url = location.origin + "/#/oferta/" + job.id;
      const wa = "https://wa.me/?text=" + encodeURIComponent(job.title + " — " + url);
      share.setAttribute("href", wa);
      share.setAttribute("aria-label", "Compartir por WhatsApp");
      share.addEventListener("click", e => {
        e.preventDefault();
        window.open(wa, "_blank", "noopener");
      });
    }

    if (form) form.addEventListener("submit", async e => {
      e.preventDefault();
      const name = $("input[type=text]", form), uni = $("select", form), port = $("input[type=url]", form), msg = $("textarea", form);
      const parts = [];
      if (name && name.value.trim()) parts.push("Nombre: " + name.value.trim());
      if (uni && uni.value) parts.push("Institución: " + uni.options[uni.selectedIndex].text);
      if (port && port.value.trim()) parts.push("Portafolio: " + port.value.trim());
      if (msg && msg.value.trim()) parts.push("Mensaje: " + msg.value.trim());
      const btn = $("#btn-submit-form", form);
      if (btn) { btn.disabled = true; btn.style.opacity = ".6"; }
      try {
        await applyToJob(job.id, parts.join("\n"));
        closeModal();
        job.applied = true;
        setApplied();
        toast("Postulación enviada");
      } catch (err) {
        if (err.status === 401) { location.hash = "#/auth"; return; }
        toast(err.message || "No se pudo enviar la postulación", "error");
      } finally {
        if (btn) { btn.disabled = false; btn.style.opacity = ""; }
      }
    });
  }

  /* ── Auth ───────────────────────────────────────────────────────── */
  async function hydrateAuth(root) {
    const roleA = $("#roleApplicantBtn", root), roleB = $("#roleEmployerBtn", root);
    const emailForm = $("#emailForm", root), emailInput = $("#emailInput", root), sendBtn = $("#sendCodeBtn", root);
    const step1 = $("#step1Container", root), step2 = $("#step2Container", root);
    const otpForm = $("#otpForm", root), otpGroup = $("#otpGroup", root), verifyBtn = $("#verifyBtn", root);
    const displayEmail = $("#displayUserEmail", root);
    let role = "candidate";

    const paintRole = () => {
      [roleA, roleB].forEach(b => {
        if (!b) return;
        const on = (b === roleA ? role === "candidate" : role === "business");
        b.setAttribute("data-role-selected", on ? "true" : "false");
        b.setAttribute("aria-pressed", on ? "true" : "false");
      });
    };
    paintRole();
    if (roleA) roleA.addEventListener("click", () => { role = "candidate"; paintRole(); });
    if (roleB) roleB.addEventListener("click", () => { role = "business"; paintRole(); });

    const inputs = otpGroup ? $$("input", otpGroup) : [];
    inputs.forEach((inp, i) => {
      inp.addEventListener("input", () => {
        inp.value = inp.value.replace(/\D/g, "").slice(0, 1);
        if (inp.value && inputs[i + 1]) inputs[i + 1].focus();
      });
      inp.addEventListener("keydown", e => {
        if (e.key === "Backspace" && !inp.value && inputs[i - 1]) inputs[i - 1].focus();
      });
      inp.addEventListener("paste", e => {
        e.preventDefault();
        const text = (e.clipboardData.getData("text") || "").replace(/\D/g, "").slice(0, inputs.length);
        text.split("").forEach((ch, k) => { if (inputs[k]) inputs[k].value = ch; });
        if (inputs[text.length - 1]) inputs[text.length - 1].focus();
      });
    });

    const send = async () => {
      const email = (emailInput && emailInput.value || "").trim();
      if (!email) { toast("Escribe tu correo", "error"); return; }
      if (sendBtn) { sendBtn.disabled = true; sendBtn.style.opacity = ".7"; }
      try {
        const d = await requestOtp(email, "", role);
        if (step1) { step1.classList.add("hidden"); step1.style.display = "none"; }
        if (step2) { step2.classList.remove("hidden"); step2.style.display = ""; }
        if (displayEmail) setText(displayEmail, email);
        if (inputs[0]) inputs[0].focus();
        if (d && d.channel === "none") toast("El servidor no pudo enviar el código. Escríbenos si persiste.", "error");
        else if (d && d.dev_code) toast("Código de desarrollo: " + d.dev_code);
      } catch (e) {
        toast(e.message || "No se pudo enviar el código", "error");
      } finally {
        if (sendBtn) { sendBtn.disabled = false; sendBtn.style.opacity = ""; }
      }
    };
    if (emailForm) emailForm.addEventListener("submit", e => { e.preventDefault(); send(); });

    $$("button", root).forEach(b => {
      if (b.textContent.trim().toLowerCase().includes("reenviar")) b.addEventListener("click", e => { e.preventDefault(); send(); });
    });

    if (otpForm) otpForm.addEventListener("submit", async e => {
      e.preventDefault();
      const code = inputs.map(i => i.value).join("");
      const email = (displayEmail && displayEmail.textContent || (emailInput && emailInput.value) || "").trim();
      if (code.length < 6) { toast("Ingresa el código de 6 dígitos", "error"); return; }
      if (verifyBtn) { verifyBtn.disabled = true; verifyBtn.style.opacity = ".7"; }
      try {
        const user = await verifyOtp(email, code);
        toast("Bienvenido, " + (user.name || user.email || "listo"));
        window.dispatchEvent(new CustomEvent("pp:user"));
        location.hash = user.role === "business" ? "#/panel-empresa" : "#/";
      } catch (err) {
        toast(err.message || "Código inválido", "error");
      } finally {
        if (verifyBtn) { verifyBtn.disabled = false; verifyBtn.style.opacity = ""; }
      }
    });
  }

  /* ── Utilidades de las pantallas internas ────────────────────────── */
  const KIND_LABEL = { experience: "Experiencia", education: "Educación", certification: "Certificado", language: "Idioma", project: "Proyecto" };

  function chip(status) {
    const map = {
      published: ["bg-primary-container text-primary", "Publicada"],
      draft: ["bg-surface-container text-ink-secondary", "Borrador"],
      closed: ["bg-error-container text-error", "Cerrada"],
      applied: ["bg-surface-container text-ink-secondary", "Postulado"],
      reviewed: ["bg-accent-container text-secondary", "En revisión"],
      accepted: ["bg-primary-container text-primary", "Aceptado"],
      rejected: ["bg-error-container text-error", "Rechazado"],
      new: ["bg-surface-container text-ink-secondary", "Nuevo"],
      contacted: ["bg-accent-container text-secondary", "Contactado"],
      closed_lead: ["bg-primary-container text-primary", "Cerrado"]
    };
    const key = String(status || "").toLowerCase();
    const [cls, label] = map[key] || ["bg-surface-container text-ink-secondary", statusLabel(status)];
    return '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full ' + cls + ' font-label text-label">' + esc(label) + "</span>";
  }

  function paintImg(img, fallback, url) {
    if (url) { img.src = url; img.style.display = ""; if (fallback) fallback.style.display = "none"; }
    else { img.style.display = "none"; if (fallback) fallback.style.display = ""; }
  }

  function setAvatar(img, fallback, url, name) {
    if (fallback) fallback.textContent = initials(name);
    paintImg(img, fallback, url);
  }

  function failBox(box, msg, retry) {
    if (!box) return;
    box.style.display = "";
    box.innerHTML = '<div class="pp-empty"><span class="material-symbols-outlined">error</span>' +
      "<h3>No se pudo cargar</h3><p class=\"pp-muted\">" + esc(msg || "Error de red o del servidor") + "</p>" +
      (retry ? '<button class="pp-btn mt-4" type="button" data-retry>Reintentar</button>' : "") + "</div>";
    if (retry) { const b = box.querySelector("[data-retry]"); if (b) b.addEventListener("click", retry); }
  }

  function emptyBox(box, msg) {
    if (!box) return;
    box.innerHTML = '<div class="pp-empty"><span class="material-symbols-outlined">inbox</span>' +
      "<h3>Sin datos por ahora</h3><p class=\"pp-muted\">" + esc(msg || "Todavía no hay información.") + "</p></div>";
  }

  function needLogin(box) {
    if (!box) return;
    box.innerHTML = '<div class="pp-empty"><span class="material-symbols-outlined">lock</span>' +
      "<h3>Inicia sesión</h3><p class=\"pp-muted\">Necesitas una cuenta para ver esta sección.</p>" +
      '<a class="pp-btn mt-4" href="#/auth" data-href="#/auth">Ir a ingresar</a></div>';
  }

  function openModal(el) { if (el) { el.style.display = "grid"; document.body.style.overflow = "hidden"; } }
  function closeModal(el) { if (el) { el.style.display = "none"; document.body.style.overflow = ""; } }

  function wireModals(root) {
    $$("[data-cerrar]", root).forEach(b => once(b, "click", () => {
      const m = document.getElementById(b.dataset.cerrar); closeModal(m);
    }));
    $$(".pp-modal", root).forEach(m => once(m, "click", e => { if (e.target === m) closeModal(m); }));
  }

  function barRow(label, value, max, cls) {
    const pct = max > 0 ? Math.max(4, Math.round((value / max) * 100)) : 0;
    return '<div class="flex flex-col gap-1">' +
      '<div class="flex items-center justify-between font-body-s text-body-s">' +
      '<span class="text-ink-secondary">' + esc(label) + '</span>' +
      '<span class="font-bold text-ink-primary pp-num">' + value + "</span></div>" +
      '<div class="w-full h-2 rounded-full bg-surface-container overflow-hidden">' +
      '<div class="h-full rounded-full ' + cls + '" style="width:' + pct + '%"></div></div></div>';
  }

  /* Enlaza un evento solo una vez por elemento: las pantallas re-renderizan
     contenido sin recrear los contenedores, y sin esto los listeners se acumulan. */
  function once(el, ev, fn) {
    if (!el) return;
    const key = "ppBound" + ev;
    if (el.dataset[key]) return;
    el.dataset[key] = "1";
    el.addEventListener(ev, fn);
  }

  /* ── Perfil de candidato ─────────────────────────────────────────── */
  function itemCard(it, showDelete) {
    const dates = [it.start, it.end].filter(Boolean).join(" · ");
    return '<div class="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1.5">' +
      '<div class="flex items-start justify-between gap-3"><div class="min-w-0">' +
      '<h3 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(it.title) + "</h3>" +
      (it.org ? '<p class="font-body-s text-body-s text-ink-secondary">' + esc(it.org) + "</p>" : "") +
      '</div>' + (showDelete ? '<button class="pp-icon-btn shrink-0" style="width:32px;height:32px" type="button" data-del-item="' + it.id + '" title="Eliminar">' +
        '<span class="material-symbols-outlined text-[18px]">delete</span></button>' : "") + "</div>" +
      (dates ? '<p class="font-label text-label text-ink-secondary">' + esc(dates) + "</p>" : "") +
      (it.location ? '<p class="font-body-s text-body-s text-ink-secondary flex items-center gap-1">' +
        '<span class="material-symbols-outlined text-[16px]">location_on</span>' + esc(it.location) + "</p>" : "") +
      (it.description ? '<p class="font-body-s text-body-s text-ink-secondary leading-relaxed">' + esc(it.description) + "</p>" : "") +
      "</div>";
  }

  function photoCard(ph) {
    return '<div class="relative group rounded-xl overflow-hidden bg-surface-container aspect-[4/3]">' +
      '<img src="' + esc(ph.url) + '" alt="' + esc(ph.caption || "Evidencia") + '" class="w-full h-full object-cover"/>' +
      '<button class="absolute top-2 right-2 w-8 h-8 rounded-lg bg-surface/90 text-error flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" type="button" data-del-photo="' + ph.id + '">' +
      '<span class="material-symbols-outlined text-[18px]">delete</span></button>' +
      (ph.caption ? '<div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-3 pt-6 pb-2 text-on-primary font-body-s text-body-s">' + esc(ph.caption) + "</div>" : "") +
      "</div>";
  }

  function appCard(a) {
    return '<div class="p-space-md rounded-xl bg-surface-container-low flex flex-col sm:flex-row sm:items-center justify-between gap-3">' +
      '<div class="min-w-0"><h3 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(a.job_title || "Oferta") + "</h3>" +
      '<p class="font-body-s text-body-s text-ink-secondary">' + esc(a.company || "Empresa") + " · " + dateShort(a.created_at) + "</p></div>" +
      chip(a.status) + "</div>";
  }

  function notifCard(n) {
    const unread = !n.is_read;
    const icon = n.type === "application_status" ? "work" : n.type === "application" ? "mail" : "notifications";
    const statusEs = { applied: "Postulado", reviewed: "En revisión", accepted: "Aceptado", rejected: "Rechazado" };
    const body = (n.body || "").replace(/pasó a:\s*([a-z_]+)/i, (m, k) => "pasó a: " + (statusEs[k] || k));
    return '<div class="p-space-md rounded-xl ' + (unread ? "bg-primary-container/40" : "bg-surface-container-low") + ' flex items-start gap-3">' +
      '<span class="material-symbols-outlined ' + (unread ? "text-primary" : "text-ink-secondary") + ' text-[20px] mt-0.5">' + icon + "</span>" +
      '<div class="flex-1 min-w-0"><h3 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(n.title) + "</h3>" +
      '<p class="font-body-s text-body-s text-ink-secondary">' + esc(body) + "</p>" +
      '<p class="font-label text-label text-ink-secondary mt-1">' + timeAgo(n.created_at) + "</p></div>" +
      (unread ? '<button class="pp-icon-btn shrink-0" style="width:32px;height:32px" type="button" data-read="' + n.id + '" title="Marcar leída">' +
        '<span class="material-symbols-outlined text-[18px]">done</span></button>' : "") +
      "</div>";
  }

  function renderPerfil(root, st, reload) {
    const me = st.me, p = st.p;
    const name = me.name || (me.email || "").split("@")[0] || "Mi perfil";
    setText($("#pf-nombre", root), name);
    setText($("#pf-headline", root), p.headline || "Añade un titular que te describa");
    setText($("#pf-resumen", root), p.summary || "Aún no has escrito tu resumen profesional.");
    setText($("#pf-ubicacion", root), [p.city, p.district].filter(Boolean).join(" · ") || "Piura");
    setText($("#pf-telefono", root), p.phone || "Sin teléfono");
    setText($("#pf-email", root), me.email || "");
    setAvatar($("#pf-avatar", root), $("#pf-avatar-iniciales", root), p.avatar_url, name);
    paintImg($("#pf-cover-img", root), null, p.cover_url);

    const skills = (p.skills || "").split(",").map(s => s.trim()).filter(Boolean);
    setHTML($("#pf-skills", root), skills.length
      ? skills.map(s => '<span class="px-2.5 py-1 rounded-full bg-surface-container text-ink-secondary font-body-s text-body-s">' + esc(s) + "</span>").join("")
      : '<span class="font-body-s text-body-s text-ink-secondary">Sin habilidades registradas</span>');

    // Pestanas
    $$("#pf-tabs .pp-tab", root).forEach(b => {
      once(b, "click", () => {
        $$("[data-panel]", root).forEach(s => { s.style.display = s.dataset.panel === b.dataset.tab ? "" : "none"; });
        $$("#pf-tabs .pp-tab", root).forEach(x => x.classList.toggle("active", x === b));
      });
    });
    $$("[data-panel]", root).forEach(s => { s.style.display = s.dataset.panel === "resumen" ? "" : "none"; });
    $$("#pf-tabs .pp-tab", root).forEach(x => x.classList.toggle("active", x.dataset.tab === "resumen"));

    // Resumen
    setText($("#pf-resumen-largo", root), p.summary || "Completa tu perfil para mostrar tu resumen a las empresas de Piura.");
    setText($("#pf-resumen-formacion", root), p.items.filter(i => i.kind === "education").length + " registro(s)");
    setText($("#pf-resumen-experiencia", root), p.items.filter(i => i.kind === "experience").length + " registro(s)");
    setText($("#pf-resumen-evidencias", root), p.photos.length + " foto(s)");

    // Elementos por tipo
    ["experience", "education", "certification", "language", "project"].forEach(kind => {
      const box = $("#pf-items-" + kind, root);
      if (!box) return;
      const items = p.items.filter(i => i.kind === kind);
      box.innerHTML = items.length ? items.map(i => itemCard(i, true)).join("")
        : '<p class="font-body-s text-body-s text-ink-secondary">Aún no has añadido ' + esc(KIND_LABEL[kind].toLowerCase()) + ".</p>";
    });

    // Galería
    const fotos = $("#pf-fotos", root);
    fotos.innerHTML = p.photos.length ? p.photos.map(photoCard).join("")
      : '<p class="font-body-s text-body-s text-ink-secondary col-span-full">No hay evidencias todavía.</p>';

    // Postulaciones
    setText($("#pf-count-postulaciones", root), st.apps.length || "");
    const appsBox = $("#pf-postulaciones", root);
    appsBox.innerHTML = st.apps.length ? st.apps.map(appCard).join("")
      : '<p class="font-body-s text-body-s text-ink-secondary">Todavía no te has postulado a ninguna oferta.</p>';

    // Notificaciones
    const unread = st.notifs.filter(n => !n.is_read).length;
    setText($("#pf-count-avisos", root), unread || "");
    const notifBox = $("#pf-notificaciones", root);
    notifBox.innerHTML = st.notifs.length ? st.notifs.map(notifCard).join("")
      : '<p class="font-body-s text-body-s text-ink-secondary">No tienes avisos.</p>';

    // Completitud
    const checks = [
      ["Foto de perfil", !!p.avatar_url],
      ["Titular profesional", !!(p.headline || "").trim()],
      ["Resumen", !!(p.summary || "").trim()],
      ["Teléfono", !!(p.phone || "").trim()],
      ["Habilidades", skills.length >= 3],
      ["Experiencia o educación", p.items.some(i => i.kind === "experience" || i.kind === "education")],
      ["Certificados o idiomas", p.items.some(i => i.kind === "certification" || i.kind === "language")],
      ["Fotos o evidencias", p.photos.length > 0]
    ];
    const done = checks.filter(c => c[1]).length;
    const pct = Math.round((done / checks.length) * 100);
    setText($("#pf-completitud", root), pct + "%");
    const bar = $("#pf-completitud-bar", root); if (bar) bar.style.width = pct + "%";
    setText($("#pf-completitud-msg", root), pct >= 80 ? "Tu perfil se ve completo." : "Completa tu perfil para mejorar tu visibilidad.");
    setHTML($("#pf-checklist", root), checks.map(([label, ok]) =>
      '<div class="flex items-center gap-2 ' + (ok ? "text-primary" : "text-ink-secondary") + '">' +
      '<span class="material-symbols-outlined text-[18px]">' + (ok ? "check_circle" : "radio_button_unchecked") + "</span>" +
      '<span class="' + (ok ? "" : "text-ink-secondary") + '">' + esc(label) + "</span></div>").join(""));

    // Enlace público
    setText($("#pf-enlace-publico", root), "");
    const enlace = $("#pf-enlace-publico", root);
    enlace.value = location.origin + "/#/perfil/" + me.id;

    /* ── Acciones ── */
    once($("#pfbtn-editar", root), "click", () => {
      $("#pf-f-headline", root).value = p.headline || "";
      $("#pf-f-resumen", root).value = p.summary || "";
      $("#pf-f-ciudad", root).value = p.city || "";
      $("#pf-f-distrito", root).value = p.district || "";
      $("#pf-f-telefono", root).value = p.phone || "";
      $("#pf-f-skills", root).value = p.skills || "";
      openModal($("#pf-modal-editar", root));
    });

    $$("[data-add]", root).forEach(b => once(b, "click", () => {
      $("#pf-item-kind", root).value = b.dataset.add;
      setText($("#pf-item-titulo", root), "Añadir " + (KIND_LABEL[b.dataset.add] || "elemento"));
      ["pf-item-title", "pf-item-org", "pf-item-location", "pf-item-start", "pf-item-end", "pf-item-desc"].forEach(id => { $("#" + id, root).value = ""; });
      openModal($("#pf-modal-item", root));
    }));

    once($("#pfbtn-add-foto", root), "click", () => {
      $("#pf-foto-url", root).value = ""; $("#pf-foto-caption", root).value = "";
      openModal($("#pf-modal-foto", root));
    });

    once($("#pfbtn-avatar", root), "click", () => $("#pf-file-avatar", root).click());
    once($("#pfbtn-cover", root), "click", () => $("#pf-file-cover", root).click());
    once($("#pf-file-avatar", root), "change", async e => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      try { const r = await uploadAvatar(f); p.avatar_url = r.avatar_url; setAvatar($("#pf-avatar", root), $("#pf-avatar-iniciales", root), p.avatar_url, name); toast("Foto actualizada"); }
      catch (err) { toast(err.message || "No se pudo subir la foto", "error"); }
      e.target.value = "";
    });
    once($("#pf-file-cover", root), "change", async e => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      try { const r = await uploadCover(f); p.cover_url = r.cover_url; paintImg($("#pf-cover-img", root), null, p.cover_url); toast("Portada actualizada"); }
      catch (err) { toast(err.message || "No se pudo subir la portada", "error"); }
      e.target.value = "";
    });

    once($("#pfbtn-cv", root), "click", async () => {
      try {
        const text = await getMyCv();
        const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "CV-" + (name || "candidato").replace(/\s+/g, "_") + ".txt";
        a.click();
        URL.revokeObjectURL(a.href);
      } catch (err) { toast(err.message || "No se pudo generar el CV", "error"); }
    });

    once($("#pfbtn-copiar", root), "click", async () => {
      try { await navigator.clipboard.writeText(enlace.value); toast("Enlace copiado"); }
      catch (e) { enlace.select(); document.execCommand("copy"); toast("Enlace copiado"); }
    });

    once($("#pfbtn-eliminar", root), "click", () => openModal($("#pf-modal-eliminar", root)));
    once($("#pfbtn-confirmar-eliminar", root), "click", async () => {
      try { await deleteMyAccount(); toast("Cuenta desactivada"); logout(); }
      catch (err) { toast(err.message || "No se pudo desactivar la cuenta", "error"); }
    });

    once($("#pfbtn-leer-todas", root), "click", async () => {
      try { await markAllNotificationsRead(); toast("Avisos marcados como leídos"); reload(); }
      catch (err) { toast(err.message || "No se pudieron marcar", "error"); }
    });

    once(notifBox, "click", async e => {
      const b = e.target.closest("[data-read]"); if (!b) return;
      try { await markNotificationRead(b.dataset.read); toast("Aviso marcado como leído"); reload(); }
      catch (err) { toast(err.message || "No se pudo marcar", "error"); }
    });

    ["pf-items-experience", "pf-items-education", "pf-items-certification", "pf-items-language", "pf-items-project"].forEach(id => {
      const box = $("#" + id, root); if (!box) return;
      once(box, "click", async e => {
        const b = e.target.closest("[data-del-item]"); if (!b) return;
        if (!confirm("¿Eliminar este elemento?")) return;
        try { await deleteProfileItem(b.dataset.delItem); toast("Elemento eliminado"); reload(); }
        catch (err) { toast(err.message || "No se pudo eliminar", "error"); }
      });
    });

    once(fotos, "click", async e => {
      const b = e.target.closest("[data-del-photo]"); if (!b) return;
      if (!confirm("¿Eliminar esta foto?")) return;
      try { await deleteProfilePhoto(b.dataset.delPhoto); toast("Foto eliminada"); reload(); }
      catch (err) { toast(err.message || "No se pudo eliminar", "error"); }
    });

    once($("#pf-form-perfil", root), "submit", async e => {
      e.preventDefault();
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        await updateProfile({
          headline: $("#pf-f-headline", root).value.trim(),
          summary: $("#pf-f-resumen", root).value.trim(),
          city: $("#pf-f-ciudad", root).value.trim(),
          district: $("#pf-f-distrito", root).value.trim(),
          phone: $("#pf-f-telefono", root).value.trim(),
          skills: $("#pf-f-skills", root).value.trim()
        });
        closeModal($("#pf-modal-editar", root));
        toast("Perfil actualizado");
        reload();
      } catch (err) { toast(err.message || "No se pudo guardar", "error"); }
      finally { btn.disabled = false; }
    });

    once($("#pf-form-item", root), "submit", async e => {
      e.preventDefault();
      const title = $("#pf-item-title", root).value.trim();
      if (!title) { toast("El título es obligatorio", "error"); return; }
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        await addProfileItem({
          kind: $("#pf-item-kind", root).value, title,
          org: $("#pf-item-org", root).value.trim(),
          start: $("#pf-item-start", root).value.trim(),
          end: $("#pf-item-end", root).value.trim(),
          description: $("#pf-item-desc", root).value.trim(),
          location: $("#pf-item-location", root).value.trim()
        });
        closeModal($("#pf-modal-item", root));
        toast("Elemento añadido");
        reload();
      } catch (err) { toast(err.message || "No se pudo guardar", "error"); }
      finally { btn.disabled = false; }
    });

    once($("#pf-form-foto", root), "submit", async e => {
      e.preventDefault();
      const url = $("#pf-foto-url", root).value.trim();
      if (!url) { toast("La URL es obligatoria", "error"); return; }
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        await addProfilePhoto({ url, caption: $("#pf-foto-caption", root).value.trim(), kind: "gallery" });
        closeModal($("#pf-modal-foto", root));
        toast("Foto añadida");
        reload();
      } catch (err) { toast(err.message || "No se pudo añadir", "error"); }
      finally { btn.disabled = false; }
    });
  }

  async function hydratePerfil(root) {
    setTitle("Mi perfil");
    const loading = $("#pf-cargando", root), err = $("#pf-error", root), content = $("#pf-contenido", root);
    if (!store.token) { hide(loading); needLogin(err); return; }
    let state = null;
    async function load() {
      hide(err); show(loading); content.style.display = "none";
      const [meR, profR, appsR, notifR] = await Promise.allSettled([getMe(), getProfile(), getMyApplications(), getMyNotifications()]);
      hide(loading);
      if (meR.status === "rejected" || profR.status === "rejected") {
        failBox(err, ((meR.reason || profR.reason) || {}).message, load);
        return;
      }
      state = {
        me: meR.value, p: profR.value,
        apps: appsR.status === "fulfilled" ? appsR.value : [],
        notifs: notifR.status === "fulfilled" ? notifR.value : []
      };
      wireModals(root);
      renderPerfil(root, state, load);
      content.style.display = "";
    }
    await load();
  }

  /* ── Perfil público ──────────────────────────────────────────────── */
  async function hydratePublico(root, params) {
    const id = params.id;
    setTitle("Perfil de candidato");
    const loading = $("#pub-cargando", root), err = $("#pub-error", root), content = $("#pub-contenido", root);
    if (!id) { hide(loading); failBox(err, "Perfil no indicado"); return; }
    const load = async () => {
      hide(err); show(loading); content.style.display = "none";
      try {
        const p = await getPublicProfile(id);
        hide(loading);
        setText($("#pub-nombre", root), p.name || "Candidato");
        setText($("#pub-headline", root), p.headline || "Sin titular");
        setText($("#pub-resumen", root), p.summary || "Este perfil aún no tiene un resumen.");
        setText($("#pub-ubicacion", root), [p.city, p.district].filter(Boolean).join(" · ") || "Piura");
        setAvatar($("#pub-avatar", root), $("#pub-iniciales", root), p.avatar_url, p.name);
        const skills = (p.skills || "").split(",").map(s => s.trim()).filter(Boolean);
        setHTML($("#pub-skills", root), skills.length
          ? skills.map(s => '<span class="px-2.5 py-1 rounded-full bg-surface-container text-ink-secondary font-body-s text-body-s">' + esc(s) + "</span>").join("")
          : "");
        const items = (p.items || []).filter(i => i.kind !== "project");
        setHTML($("#pub-items", root), items.length ? items.map(i => itemCard(i, false)).join("")
          : '<p class="font-body-s text-body-s text-ink-secondary">Este perfil aún no tiene formación ni experiencia registrada.</p>');
        content.style.display = "";
      } catch (e) {
        hide(loading);
        failBox(err, e.message, load);
      }
    };
    await load();
  }

  /* ── Panel de empresa ────────────────────────────────────────────── */
  function jobCardEmp(job) {
    const c = job.company || {};
    const meta = [
      ["location_on", job.district || "Piura"],
      ["work", modalityLabel(job.modality)],
      ["group", (job.positions || 1) + " vacante(s)"]
    ].map(([i, t]) => '<span class="flex items-center gap-1 font-body-s text-body-s text-ink-secondary">' +
      '<span class="material-symbols-outlined text-[16px]">' + i + "</span>" + esc(t) + "</span>").join("");
    return '<div class="p-space-md rounded-xl bg-surface-container-low flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">' +
      '<div class="flex items-start gap-space-md min-w-0">' +
      '<div class="w-12 h-12 rounded-xl bg-surface text-ink-primary font-headline-s text-sm font-bold flex items-center justify-center shrink-0">' + esc(initials(c.name || job.title)) + "</div>" +
      '<div class="min-w-0"><div class="flex flex-wrap items-center gap-2">' +
      '<h3 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(job.title) + "</h3>" + chip(job.status) + "</div>" +
      '<p class="font-body-s text-body-s text-ink-secondary mt-0.5">' + esc(c.name || "Mi empresa") + " · " + esc(salaryLabel(job.salary)) + "</p>" +
      '<div class="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">' + meta + "</div>" +
      '<p class="font-body-s text-body-s text-ink-secondary mt-1.5 flex items-center gap-1">' +
      '<span class="material-symbols-outlined text-[16px]">how_to_reg</span>' + (job.applications_count || 0) + " postulante(s) · " + timeAgo(job.created_at) + "</p></div></div>" +
      '<div class="flex flex-wrap items-center gap-2 shrink-0">' +
      '<button class="pp-btn text-sm" style="padding:8px 16px" type="button" data-ver="' + job.id + '">Postulantes</button>' +
      '<button class="pp-icon-btn" style="width:36px;height:36px" type="button" data-edit="' + job.id + '" title="Editar"><span class="material-symbols-outlined text-[18px]">edit</span></button>' +
      '<button class="pp-icon-btn" style="width:36px;height:36px" type="button" data-cerrar-oferta="' + job.id + '" title="Cerrar"><span class="material-symbols-outlined text-[18px]">lock</span></button>' +
      '<button class="pp-icon-btn" style="width:36px;height:36px" type="button" data-del-oferta="' + job.id + '" title="Eliminar"><span class="material-symbols-outlined text-[18px] text-error">delete</span></button>' +
      "</div></div>";
  }

  function applicantCard(a) {
    const c = a.candidate || {};
    return '<div class="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-3">' +
      '<div class="flex items-start justify-between gap-3">' +
      '<div class="flex items-start gap-3 min-w-0">' +
      '<div class="w-10 h-10 rounded-full bg-primary-container text-primary-deep font-bold flex items-center justify-center text-sm shrink-0">' + esc(initials(c.name || "?")) + "</div>" +
      '<div class="min-w-0"><h3 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(c.name || "Candidato") + "</h3>" +
      (c.headline ? '<p class="font-body-s text-body-s text-ink-secondary">' + esc(c.headline) + "</p>" : "") +
      '<p class="font-body-s text-body-s text-ink-secondary">' + esc(c.email || "") + "</p>" +
      (c.skills ? '<p class="font-body-s text-body-s text-ink-secondary">Habilidades: ' + esc(c.skills) + "</p>" : "") +
      "</div></div>" + chip(a.status) + "</div>" +
      (a.message ? '<p class="font-body-s text-body-s text-ink-secondary bg-surface rounded-lg p-3">' + esc(a.message) + "</p>" : "") +
      '<div class="flex flex-wrap items-center gap-2"><span class="font-label text-label text-ink-secondary">Estado:</span>' +
      '<select class="px-3 py-1.5 rounded-lg bg-surface text-ink-primary font-body-s text-body-s focus:outline-none" data-app-status="' + a.id + '">' +
      ["applied", "reviewed", "accepted", "rejected"].map(s => '<option value="' + s + '"' + (a.status === s ? " selected" : "") + ">" + statusLabel(s) + "</option>").join("") +
      "</select></div></div>";
  }

  async function hydratePanelEmpresa(root) {
    setTitle("Panel de empresa");
    const loading = $("#pe-cargando", root), err = $("#pe-error", root), content = $("#pe-contenido", root);
    if (!store.token) { hide(loading); needLogin(err); return; }
    let company = null, dash = {}, jobs = [], selectedId = null, filtro = "todas";

    function renderEmpresa() {
      setText($("#pe-nombre", root), company.name || "Mi empresa");
      const ver = $("#pe-verificada", root); ver.style.display = company.is_verified ? "" : "none";
      setText($("#pe-ruc", root), company.ruc || "Sin RUC");
      setText($("#pe-sector", root), company.sector || "Sector no indicado");
      setText($("#pe-distrito", root), company.district || "Piura");
      setAvatar($("#pe-logo", root), $("#pe-logo-iniciales", root), company.logo_url, company.name);

      setText($("#pe-kpi-jobs", root), dash.jobs || 0);
      const drafts = jobs.filter(j => j.status === "draft").length;
      const closedJobs = jobs.filter(j => j.status === "closed").length;
      setText($("#pe-kpi-detalle", root), drafts + " borrador(es) · " + closedJobs + " cerrada(s)");
      setText($("#pe-kpi-publicadas", root), dash.published || 0);
      const distritos = Array.from(new Set(jobs.map(j => j.district).filter(Boolean)));
      setText($("#pe-kpi-sedes", root), distritos.length + " distrito(s) con plazas");
      setText($("#pe-kpi-postulaciones", root), dash.applications || 0);
      setText($("#pe-kpi-postulaciones-detalle", root), "en " + jobs.length + " convocatorias publicadas");
      setText($("#pe-kpi-visitas", root), dash.views || 0);
      setText($("#pe-kpi-visitas-detalle", root), "lecturas acumuladas");

      const sel = $("#pe-select-oferta", root);
      sel.innerHTML = jobs.length
        ? jobs.map(j => '<option value="' + j.id + '">' + esc(j.title) + "</option>").join("")
        : '<option value="">Sin convocatorias</option>';
      selectedId = jobs.length ? jobs[0].id : null;
      if (selectedId) sel.value = selectedId;
      renderList();
      loadCandidates(selectedId);
    }

    function renderList() {
      const box = $("#pe-lista", root);
      const conPostulantes = jobs.filter(j => (j.applications_count || 0) > 0);
      const visible = filtro === "activas" ? conPostulantes : jobs;
      setText($("#pe-count-todas", root), jobs.length);
      setText($("#pe-count-activas", root), conPostulantes.length);
      box.innerHTML = visible.length ? visible.map(jobCardEmp).join("")
        : '<div class="pp-empty"><span class="material-symbols-outlined">inbox</span><h3>Sin convocatorias publicadas</h3><p class="pp-muted">Crea tu primera convocatoria o importa una oferta.</p></div>';

      $$("[data-ver]", box).forEach(b => b.addEventListener("click", () => {
        const sel = $("#pe-select-oferta", root);
        sel.value = b.dataset.ver; selectedId = b.dataset.ver; loadCandidates(selectedId);
        const target = $("#pe-candidatos", root);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      }));
      $$("[data-edit]", box).forEach(b => b.addEventListener("click", () => openJobModal(b.dataset.edit)));
      $$("[data-cerrar-oferta]", box).forEach(b => b.addEventListener("click", async () => {
        try { await setJobStatus(b.dataset.cerrarOferta, "closed"); toast("Convocatoria cerrada"); await load(); }
        catch (e) { toast(e.message || "No se pudo cerrar", "error"); }
      }));
      $$("[data-del-oferta]", box).forEach(b => b.addEventListener("click", () => {
        const job = jobs.find(j => String(j.id) === String(b.dataset.delOferta));
        setText($("#pe-eliminar-texto", root), '¿Eliminar la convocatoria "' + (job ? job.title : "") + '"? Esta acción no se puede deshacer.');
        $("#pebtn-confirmar-eliminar", root).dataset.job = b.dataset.delOferta;
        openModal($("#pe-modal-eliminar", root));
      }));
    }

    function openJobModal(id) {
      const job = id ? jobs.find(j => String(j.id) === String(id)) : null;
      setText($("#pe-oferta-modal-titulo", root), job ? "Editar convocatoria" : "Nueva convocatoria");
      $("#pe-oferta-id", root).value = job ? job.id : "";
      $("#pe-f-titulo", root).value = job ? job.title : "";
      $("#pe-f-modalidad", root).value = job ? job.modality : "presencial";
      $("#pe-f-distrito-oferta", root).value = job ? (job.district || "") : (company.district || "");
      $("#pe-f-salario", root).value = job ? (job.salary || "") : "";
      $("#pe-f-vacantes", root).value = job ? (job.positions || 1) : 1;
      $("#pe-f-estado", root).value = job ? job.status : "published";
      $("#pe-f-descripcion-oferta", root).value = job ? (job.description || "") : "";
      openModal($("#pe-modal-oferta", root));
    }

    async function loadCandidates(jobId) {
      const box = $("#pe-candidatos", root);
      if (!jobId) {
        setText($("#pe-oferta-titulo", root), "Selecciona una convocatoria");
        box.innerHTML = '<p class="font-body-s text-body-s text-ink-secondary">Selecciona una convocatoria para ver sus postulantes.</p>';
        return;
      }
      box.innerHTML = '<div class="pp-loading"><span class="pp-spin"></span>Cargando postulantes…</div>';
      try {
        const apps = await getApplicants(jobId);
        const job = jobs.find(j => String(j.id) === String(jobId));
        setText($("#pe-oferta-titulo", root), job ? job.title : "Convocatoria");
        box.innerHTML = apps.length ? apps.map(applicantCard).join("")
          : '<p class="font-body-s text-body-s text-ink-secondary">Esta convocatoria aún no tiene postulantes.</p>';
        $$("[data-app-status]", box).forEach(s => s.addEventListener("change", async () => {
          try { await setApplicationStatus(jobId, s.dataset.appStatus, s.value); toast("Estado actualizado"); loadCandidates(jobId); }
          catch (e) { toast(e.message || "No se pudo actualizar", "error"); }
        }));
      } catch (e) {
        box.innerHTML = '<div class="pp-empty"><span class="material-symbols-outlined">error</span><h3>No se pudieron cargar los postulantes</h3><p class="pp-muted">' + esc(e.message || "Error de red") + "</p></div>";
      }
    }

    function setFiltro(f) {
      filtro = f;
      const on = "px-3.5 py-1.5 rounded-lg bg-surface font-headline-s text-body-s font-bold text-ink-primary shadow-xs";
      const off = "px-3.5 py-1.5 rounded-lg text-ink-secondary hover:text-ink-primary font-headline-s text-body-s font-semibold";
      $("#pe-filtro-todas", root).className = f === "todas" ? on : off;
      $("#pe-filtro-activas", root).className = f === "activas" ? on : off;
      renderList();
    }

    async function load() {
      hide(err); show(loading); content.style.display = "none";
      const [profR, dashR, jobsR] = await Promise.allSettled([getBusinessProfile(), getBusinessDashboard(), getBusinessJobs()]);
      hide(loading);
      if (profR.status === "rejected") { failBox(err, profR.reason.message, load); return; }
      company = profR.value;
      dash = dashR.status === "fulfilled" ? dashR.value : { jobs: 0, published: 0, applications: 0, views: 0 };
      jobs = jobsR.status === "fulfilled" ? jobsR.value : [];
      renderEmpresa();
      content.style.display = "";
    }

    /* ── Acciones ── */
    wireModals(root);
    $("#pebtn-editar", root).addEventListener("click", () => {
      $("#pe-f-nombre", root).value = company.name || "";
      $("#pe-f-ruc", root).value = company.ruc || "";
      $("#pe-f-sector", root).value = company.sector || "";
      $("#pe-f-distrito", root).value = company.district || "";
      $("#pe-f-ciudad", root).value = company.city || "";
      $("#pe-f-telefono", root).value = company.phone || "";
      $("#pe-f-email", root).value = company.email || "";
      $("#pe-f-web", root).value = company.website || "";
      $("#pe-f-direccion", root).value = company.address || "";
      $("#pe-f-descripcion", root).value = company.description || "";
      openModal($("#pe-modal-perfil", root));
    });
    $("#pebtn-logo", root).addEventListener("click", () => $("#pe-file-logo", root).click());
    $("#pe-file-logo", root).addEventListener("change", async e => {
      const f = e.target.files && e.target.files[0]; if (!f) return;
      try { const r = await uploadBusinessLogo(f); company.logo_url = r.logo_url; setAvatar($("#pe-logo", root), $("#pe-logo-iniciales", root), company.logo_url, company.name); toast("Logo actualizado"); }
      catch (err) { toast(err.message || "No se pudo subir el logo", "error"); }
      e.target.value = "";
    });
    $("#pebtn-nueva", root).addEventListener("click", () => openJobModal(null));
    $("#pebtn-importar", root).addEventListener("click", () => {
      $("#pe-imp-url", root).value = ""; $("#pe-imp-texto", root).value = ""; setHTML($("#pe-import-preview", root), "");
      openModal($("#pe-modal-importar", root));
    });
    $("#pe-filtro-todas", root).addEventListener("click", () => setFiltro("todas"));
    $("#pe-filtro-activas", root).addEventListener("click", () => setFiltro("activas"));
    $("#pe-select-oferta", root).addEventListener("change", e => { selectedId = e.target.value; loadCandidates(selectedId); });

    $("#pe-form-perfil", root).addEventListener("submit", async e => {
      e.preventDefault();
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        company = await updateBusinessProfile({
          name: $("#pe-f-nombre", root).value.trim(), ruc: $("#pe-f-ruc", root).value.trim(),
          sector: $("#pe-f-sector", root).value.trim(), district: $("#pe-f-distrito", root).value.trim(),
          city: $("#pe-f-ciudad", root).value.trim(), phone: $("#pe-f-telefono", root).value.trim(),
          email: $("#pe-f-email", root).value.trim(), website: $("#pe-f-web", root).value.trim(),
          address: $("#pe-f-direccion", root).value.trim(), description: $("#pe-f-descripcion", root).value.trim(),
          is_public: company.is_public
        });
        closeModal($("#pe-modal-perfil", root));
        toast("Perfil de empresa actualizado");
        renderEmpresa();
      } catch (err) { toast(err.message || "No se pudo guardar", "error"); }
      finally { btn.disabled = false; }
    });

    $("#pe-form-oferta", root).addEventListener("submit", async e => {
      e.preventDefault();
      const title = $("#pe-f-titulo", root).value.trim();
      if (!title) { toast("El título es obligatorio", "error"); return; }
      const id = $("#pe-oferta-id", root).value;
      const payload = {
        title,
        description: $("#pe-f-descripcion-oferta", root).value.trim(),
        modality: $("#pe-f-modalidad", root).value,
        district: $("#pe-f-distrito-oferta", root).value.trim() || company.district || "Piura",
        city: company.city || "Piura",
        salary: $("#pe-f-salario", root).value.trim(),
        positions: parseInt($("#pe-f-vacantes", root).value, 10) || 1,
        status: $("#pe-f-estado", root).value
      };
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        if (id) await updateJob(id, payload);
        else await createJob(payload);
        closeModal($("#pe-modal-oferta", root));
        toast(payload.status === "draft" ? "Borrador guardado; un administrador lo revisará" : "Convocatoria guardada");
        await load();
      } catch (err) { toast(err.message || "No se pudo guardar", "error"); }
      finally { btn.disabled = false; }
    });

    $("#pe-form-importar", root).addEventListener("submit", async e => {
      e.preventDefault();
      const url = $("#pe-imp-url", root).value.trim(), text = $("#pe-imp-texto", root).value.trim();
      if (!url && !text) { toast("Pega una URL o el texto del post", "error"); return; }
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        const d = await socialPreview({ url, text });
        openJobModal(null);
        $("#pe-f-titulo", root).value = d.title || "";
        $("#pe-f-descripcion-oferta", root).value = d.description || "";
        $("#pe-f-modalidad", root).value = d.modality || "presencial";
        $("#pe-f-distrito-oferta", root).value = d.district || company.district || "";
        $("#pe-f-salario", root).value = d.salary || "";
        $("#pe-f-estado", root).value = "draft";
        closeModal($("#pe-modal-importar", root));
        toast("Formulario completado; revisa y guarda");
      } catch (err) { toast(err.message || "No se pudo leer la oferta", "error"); }
      finally { btn.disabled = false; }
    });

    $("#pebtn-previsualizar", root).addEventListener("click", async () => {
      const url = $("#pe-imp-url", root).value.trim(), text = $("#pe-imp-texto", root).value.trim();
      if (!url && !text) { toast("Pega una URL o el texto del post", "error"); return; }
      const box = $("#pe-import-preview", root);
      box.innerHTML = '<div class="pp-loading"><span class="pp-spin"></span>Analizando…</div>';
      try {
        const d = await socialPreview({ url, text });
        box.innerHTML = '<div class="p-space-md rounded-xl bg-surface-container-low">' +
          '<h4 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(d.title || "Sin título") + "</h4>" +
          '<p class="font-body-s text-body-s text-ink-secondary mt-1">' + esc(modalityLabel(d.modality)) + " · " + esc(d.district || "") + " · " + esc(salaryLabel(d.salary)) + "</p>" +
          '<p class="font-body-s text-body-s text-ink-secondary mt-2 line-clamp-3">' + esc((d.description || "").slice(0, 400)) + "</p></div>";
      } catch (err) { box.innerHTML = '<p class="font-body-s text-body-s text-error">' + esc(err.message || "No se pudo leer la oferta") + "</p>"; }
    });

    $("#pebtn-confirmar-eliminar", root).addEventListener("click", async () => {
      const id = $("#pebtn-confirmar-eliminar", root).dataset.job;
      if (!id) return;
      try { await deleteJob(id); closeModal($("#pe-modal-eliminar", root)); toast("Convocatoria eliminada"); await load(); }
      catch (e) { toast(e.message || "No se pudo eliminar", "error"); }
    });

    await load();
  }

  /* ── Panel de administración ────────────────────────────────────── */
  async function hydratePanelAdmin(root) {
    setTitle("Panel de administración");
    const loading = $("#pa-cargando", root), err = $("#pa-error", root), content = $("#pa-contenido", root);
    if (!store.token) { hide(loading); needLogin(err); return; }
    let dash = null, users = [], companies = [], queue = [], leads = [], otps = [];

    function kpiCard(label, value, icon, cls) {
      return '<div class="bg-surface rounded-xl p-space-md shadow-sm flex flex-col justify-between">' +
        '<span class="font-label text-label uppercase tracking-widest text-ink-secondary">' + esc(label) + "</span>" +
        '<div class="mt-space-md flex items-center gap-2"><span class="material-symbols-outlined ' + cls + ' text-[26px]">' + icon + "</span>" +
        '<span class="font-display text-display text-ink-primary pp-num font-extrabold">' + value + "</span></div></div>";
    }

    function renderDash() {
      const k = dash.kpis || {};
      const cards = [
        ["Usuarios", k.users, "group", "text-primary"],
        ["Ofertas", k.jobs, "work", "text-ink-primary"],
        ["Publicadas", k.published, "check_circle", "text-primary"],
        ["Postulaciones", k.applications, "how_to_reg", "text-secondary"],
        ["Empresas", k.companies, "corporate_fare", "text-ink-primary"],
        ["Visitas", k.views, "visibility", "text-primary"]
      ];
      setHTML($("#pa-kpis", root), cards.map(c => kpiCard(c[0], c[1], c[2], c[3])).join(""));

      const ch = dash.charts || {};
      const mod = Object.entries(ch.by_modality || {});
      const modTotal = mod.reduce((a, x) => a + x[1], 0);
      setText($("#pa-modalidad-total", root), modTotal + " ofertas por modalidad");
      setHTML($("#pa-grafico-modalidad", root), mod.length
        ? mod.map(([m, v]) => barRow(modalityLabel(m), v, modTotal, "bg-primary")).join("")
        : '<p class="font-body-s text-body-s text-ink-secondary">Sin datos.</p>');

      const dis = Object.entries(ch.by_district || {}).sort((a, b) => b[1] - a[1]).slice(0, 8);
      const disMax = dis.length ? dis[0][1] : 0;
      setHTML($("#pa-grafico-distrito", root), dis.length
        ? dis.map(([d, v]) => barRow(d || "Piura", v, disMax, "bg-secondary")).join("")
        : '<p class="font-body-s text-body-s text-ink-secondary">Sin datos.</p>');

      const st = ch.by_status || {};
      const stTotal = Object.values(st).reduce((a, v) => a + v, 0);
      setText($("#pa-estado-total", root), stTotal + " ofertas registradas");
      const stCards = [["published", "Publicadas", "bg-primary-container text-primary"],
        ["draft", "Borradores", "bg-surface-container text-ink-secondary"],
        ["closed", "Cerradas", "bg-error-container text-error"]];
      setHTML($("#pa-estado-cards", root), stCards.map(c =>
        '<div class="rounded-xl p-space-md ' + c[2] + '"><p class="font-label text-label uppercase">' + c[1] + '</p>' +
        '<p class="font-headline-s text-headline-s pp-num font-extrabold">' + (st[c[0]] || 0) + "</p></div>").join(""));
      setHTML($("#pa-estado-barra", root), stCards.map(c =>
        '<div class="' + c[2].split(" ")[0] + '" style="width:' + (stTotal ? Math.round(((st[c[0]] || 0) / stTotal) * 100) : 0) + '%"></div>').join(""));

      const days = (ch.apps_by_day || []).slice(-14);
      const dayTotal = days.reduce((a, x) => a + x[1], 0);
      const dayMax = days.length ? Math.max.apply(null, days.map(d => d[1])) : 0;
      setText($("#pa-postulaciones-dias-total", root), dayTotal + " postulaciones en " + days.length + " día(s) con actividad");
      setHTML($("#pa-grafico-postulaciones", root), days.length
        ? days.map(d => '<div class="flex-1 flex flex-col items-center gap-1">' +
          '<span class="font-label text-label text-ink-secondary pp-num">' + d[1] + "</span>" +
          '<div class="w-full rounded-t-md bg-primary/80" style="height:' + (dayMax ? Math.max(4, Math.round((d[1] / dayMax) * 120)) : 4) + 'px"></div>' +
          '<span class="font-label text-label text-ink-secondary">' + String(d[0]).slice(5) + "</span></div>").join("")
        : '<p class="font-body-s text-body-s text-ink-secondary">Sin postulaciones.</p>');
      setText($("#pa-postulaciones-promedio", root), days.length ? (dayTotal / days.length).toFixed(1) : "0");
    }

    function renderUsers() {
      const q = ($("#pa-user-search", root).value || "").toLowerCase();
      const role = $("#pa-user-rol", root).value;
      const rows = users.filter(u => (!role || u.role === role) &&
        (!q || (u.name || "").toLowerCase().includes(q) || (u.email || "").toLowerCase().includes(q)));
      setText($("#pa-usuarios-resumen", root), rows.length + " de " + users.length + " usuarios");
      const box = $("#pa-tabla-usuarios", root);
      box.innerHTML = rows.length ? rows.map(u =>
        '<tr class="hover:bg-surface-container-low/40 transition-colors">' +
        '<td class="py-space-md px-space-md"><div class="flex items-center gap-3">' +
        '<div class="w-10 h-10 rounded-full bg-primary-container text-primary-deep font-bold flex items-center justify-center text-sm shrink-0">' + esc(initials(u.name || "?")) + "</div>" +
        '<div class="min-w-0"><div class="font-semibold text-ink-primary truncate">' + esc(u.name || "Sin nombre") + "</div>" +
        '<div class="text-body-s text-body-s text-ink-secondary truncate">' + esc(u.email || "") + "</div>" +
        (u.company ? '<div class="text-body-s text-body-s text-ink-secondary">' + esc(u.company) + "</div>" : "") +
        "</div></div></td>" +
        '<td class="py-space-md px-space-md"><select class="px-2 py-1 rounded-lg bg-surface-container text-ink-primary font-body-s text-body-s" data-user-role="' + u.id + '">' +
        ["candidate", "business", "admin"].map(r => '<option value="' + r + '"' + (u.role === r ? " selected" : "") + ">" +
          (r === "candidate" ? "Candidato" : r === "business" ? "Empresa" : "Administrador") + "</option>").join("") + "</select></td>" +
        '<td class="py-space-md px-space-md">' + (u.is_active
          ? '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-container text-primary font-label text-label font-bold">Activo</span>'
          : '<span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error-container text-error font-label text-label font-bold">Inactivo</span>') + "</td>" +
        '<td class="py-space-md px-space-md text-ink-secondary font-body-s">' + dateShort(u.created_at) + "</td>" +
        '<td class="py-space-md px-space-md text-right"><button class="px-3 py-1.5 rounded-lg ' +
        (u.is_active ? "bg-surface-container text-error hover:bg-error-container" : "bg-primary-container text-primary hover:bg-primary hover:text-on-primary") +
        ' font-label text-label" type="button" data-toggle-user="' + u.id + '">' + (u.is_active ? "Suspender" : "Activar") + "</button></td></tr>").join("")
        : '<tr><td colspan="5" class="py-space-md px-space-md text-center font-body-s text-body-s text-ink-secondary">Sin usuarios que coincidan.</td></tr>';

      $$("[data-user-role]", box).forEach(s => s.addEventListener("change", async () => {
        try { await patchAdminUser(s.dataset.userRole, { role: s.value }); toast("Rol actualizado"); await load(); }
        catch (e) { toast(e.message || "No se pudo actualizar", "error"); }
      }));
      $$("[data-toggle-user]", box).forEach(b => b.addEventListener("click", async () => {
        const u = users.find(x => String(x.id) === String(b.dataset.toggleUser));
        try { await patchAdminUser(b.dataset.toggleUser, { is_active: !(u && u.is_active) }); toast("Usuario actualizado"); await load(); }
        catch (e) { toast(e.message || "No se pudo actualizar", "error"); }
      }));
    }

    function renderCompanies() {
      setText($("#pa-empresas-resumen", root), companies.length + " empresas registradas");
      const box = $("#pa-tabla-empresas", root);
      box.innerHTML = companies.length ? companies.map(c =>
        '<tr class="hover:bg-surface-container-low/40 transition-colors">' +
        '<td class="py-space-md px-space-md"><div class="font-semibold text-ink-primary">' + esc(c.name) + "</div></td>" +
        '<td class="py-space-md px-space-md text-ink-secondary">' + esc(c.sector || "—") + "</td>" +
        '<td class="py-space-md px-space-md">' + esc(c.district || "—") + "</td>" +
        '<td class="py-space-md px-space-md"><button class="px-2.5 py-1 rounded-lg ' +
        (c.is_public ? "bg-primary-container text-primary" : "bg-surface-container text-ink-secondary") +
        ' font-label text-label" type="button" data-toggle-public="' + c.id + '">' + (c.is_public ? "Pública" : "Oculta") + "</button></td>" +
        '<td class="py-space-md px-space-md"><button class="px-2.5 py-1 rounded-lg ' +
        (c.is_verified ? "bg-primary-container text-primary" : "bg-accent-container text-secondary") +
        ' font-label text-label" type="button" data-toggle-verified="' + c.id + '">' + (c.is_verified ? "Verificada" : "Pendiente") + "</button></td>" +
        '<td class="py-space-md px-space-md font-bold text-primary pp-num">' + (c.jobs || 0) + "</td></tr>").join("")
        : '<tr><td colspan="6" class="py-space-md px-space-md text-center font-body-s text-body-s text-ink-secondary">Sin empresas.</td></tr>';

      $$("[data-toggle-public]", box).forEach(b => b.addEventListener("click", async () => {
        const c = companies.find(x => String(x.id) === String(b.dataset.togglePublic));
        try { await patchAdminCompany(b.dataset.togglePublic, { is_public: !(c && c.is_public) }); toast("Visibilidad actualizada"); await load(); }
        catch (e) { toast(e.message || "No se pudo actualizar", "error"); }
      }));
      $$("[data-toggle-verified]", box).forEach(b => b.addEventListener("click", async () => {
        const c = companies.find(x => String(x.id) === String(b.dataset.toggleVerified));
        try { await patchAdminCompany(b.dataset.toggleVerified, { is_verified: !(c && c.is_verified) }); toast("Verificación actualizada"); await load(); }
        catch (e) { toast(e.message || "No se pudo actualizar", "error"); }
      }));
    }

    function renderQueue() {
      setText($("#pa-cola-resumen", root), queue.length + " convocatoria(s) pendientes de moderación");
      const box = $("#pa-cola", root);
      box.innerHTML = queue.length ? queue.map(j => {
        const c = j.company || {};
        return '<div class="p-space-md rounded-xl bg-surface-container-low flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">' +
          '<div class="min-w-0"><div class="flex flex-wrap items-center gap-2 mb-1">' + chip("draft") +
          '<span class="font-body-s text-body-s text-ink-secondary">' + esc(c.name || "Empresa") + " · " + esc(j.district || "Piura") + " · " + modalityLabel(j.modality) + "</span></div>" +
          '<h3 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(j.title) + "</h3>" +
          '<p class="font-body-s text-body-s text-ink-secondary">' + esc(salaryLabel(j.salary)) + " · " + (j.positions || 1) + " vacante(s) · enviada " + timeAgo(j.created_at) + "</p></div>" +
          '<div class="flex flex-wrap gap-2 shrink-0">' +
          '<button class="pp-btn text-sm" style="padding:8px 16px" type="button" data-approve="' + j.id + '">Aprobar</button>' +
          '<button class="px-4 py-2 rounded-full bg-error-container text-error font-body-m text-body-m font-semibold" type="button" data-reject="' + j.id + '">Rechazar</button>' +
          "</div></div>";
      }).join("") : '<div class="pp-empty"><span class="material-symbols-outlined">check_circle</span><h3>Cola vacía</h3><p class="pp-muted">No hay convocatorias pendientes de moderación.</p></div>';

      $$("[data-approve]", box).forEach(b => b.addEventListener("click", () => review(b.dataset.approve, "approve")));
      $$("[data-reject]", box).forEach(b => b.addEventListener("click", () => review(b.dataset.reject, "reject")));
    }

    async function review(id, action) {
      try {
        await reviewAdminQueue(id, action);
        toast(action === "approve" ? "Convocatoria aprobada" : "Convocatoria rechazada");
        await load();
      } catch (e) { toast(e.message || "No se pudo moderar", "error"); }
    }

    function renderLeads() {
      setText($("#pa-leads-resumen", root), leads.length + " leads registrados");
      const box = $("#pa-tabla-leads", root);
      box.innerHTML = leads.length ? leads.map(l =>
        '<tr class="hover:bg-surface-container-low/40 transition-colors">' +
        '<td class="py-space-md px-space-md"><div class="font-semibold text-ink-primary">' + esc(l.name) + "</div></td>" +
        '<td class="py-space-md px-space-md text-body-s font-body-s"><div class="text-ink-primary">' + esc(l.email || "—") + '</div><div class="text-ink-secondary">' + esc(l.phone || "—") + "</div></td>" +
        '<td class="py-space-md px-space-md">' + esc(l.type || "contact") + "</td>" +
        '<td class="py-space-md px-space-md">' + chip(l.status) + "</td>" +
        '<td class="py-space-md px-space-md text-body-s font-body-s text-ink-secondary max-w-xs truncate">' + esc(l.message || "—") + "</td>" +
        '<td class="py-space-md px-space-md text-right"><select class="px-2 py-1 rounded-lg bg-surface-container text-ink-primary font-body-s text-body-s" data-lead-status="' + l.id + '">' +
        ["new", "contacted", "closed"].map(s => '<option value="' + s + '"' + (l.status === s ? " selected" : "") + ">" +
          (s === "new" ? "Nuevo" : s === "contacted" ? "Contactado" : "Cerrado") + "</option>").join("") + "</select></td></tr>").join("")
        : '<tr><td colspan="6" class="py-space-md px-space-md text-center font-body-s text-body-s text-ink-secondary">Sin leads.</td></tr>';

      $$("[data-lead-status]", box).forEach(s => s.addEventListener("change", async () => {
        try { await patchAdminLead(s.dataset.leadStatus, s.value); toast("Lead actualizado"); await load(); }
        catch (e) { toast(e.message || "No se pudo actualizar", "error"); }
      }));
    }

    function renderOtps() {
      const box = $("#pa-tabla-otps", root);
      box.innerHTML = otps.length ? otps.map(o =>
        '<tr class="hover:bg-surface-container-low/40 transition-colors">' +
        '<td class="py-space-md px-space-md">' + esc(o.email || "—") + "</td>" +
        '<td class="py-space-md px-space-md text-ink-secondary font-body-s">' + dateShort(o.created_at) + "</td>" +
        '<td class="py-space-md px-space-md text-ink-secondary font-body-s">' + dateShort(o.expires_at) + "</td>" +
        '<td class="py-space-md px-space-md pp-num">' + (o.attempts || 0) + "</td>" +
        '<td class="py-space-md px-space-md">' + (o.used ? '<span class="text-primary font-semibold">Sí</span>' : '<span class="text-ink-secondary">No</span>') + "</td></tr>").join("")
        : '<tr><td colspan="5" class="py-space-md px-space-md text-center font-body-s text-body-s text-ink-secondary">Sin códigos emitidos.</td></tr>';
    }

    function downloadReport() {
      const k = (dash && dash.kpis) || {};
      const ch = (dash && dash.charts) || {};
      const rows = [["Métrica", "Valor"]];
      [["Usuarios", k.users], ["Ofertas", k.jobs], ["Publicadas", k.published], ["Borradores", k.drafts],
       ["Postulaciones", k.applications], ["Empresas", k.companies], ["Leads", k.leads], ["Visitas", k.views]].forEach(r => rows.push(r));
      rows.push([], ["Modalidad", "Ofertas"]);
      Object.entries(ch.by_modality || {}).forEach(r => rows.push(r));
      rows.push([], ["Distrito", "Ofertas"]);
      Object.entries(ch.by_district || {}).forEach(r => rows.push(r));
      const csv = rows.map(r => r.map(v => '"' + String(v == null ? "" : v).replace(/"/g, '""') + '"').join(",")).join("\n");
      const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "reporte-practicape.csv";
      a.click();
      URL.revokeObjectURL(a.href);
      toast("Reporte descargado");
    }

    async function load() {
      hide(err); show(loading); content.style.display = "none";
      const [dR, uR, cR, qR, lR, oR] = await Promise.allSettled([
        getAdminDashboard(), getAdminUsers(), getAdminCompanies(), getAdminQueue(), getAdminLeads(), getAdminOtps()
      ]);
      hide(loading);
      if (dR.status === "rejected") { failBox(err, dR.reason.message, load); return; }
      dash = dR.value;
      users = uR.status === "fulfilled" ? uR.value : [];
      companies = cR.status === "fulfilled" ? cR.value : [];
      queue = qR.status === "fulfilled" ? qR.value : [];
      leads = lR.status === "fulfilled" ? lR.value : [];
      otps = oR.status === "fulfilled" ? oR.value : [];
      renderDash(); renderUsers(); renderCompanies(); renderQueue(); renderLeads(); renderOtps();
      setText($("#pa-actualizado", root), "Actualizado " + new Date().toLocaleTimeString("es-PE"));
      content.style.display = "";
    }

    /* ── Acciones ── */
    $("#pa-user-search", root).addEventListener("input", renderUsers);
    $("#pa-user-rol", root).addEventListener("change", renderUsers);
    $("#pabtn-reporte", root).addEventListener("click", downloadReport);
    $("#pabtn-recargar", root).addEventListener("click", load);
    $$("[data-section]", root).forEach(a => a.addEventListener("click", e => {
      e.preventDefault();
      const t = document.getElementById(a.dataset.section);
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    }));

    await load();
  }

  /* ── Directorio de empresas ──────────────────────────────────────── */
  function empresaCard(c) {
    return '<button class="w-full text-left p-space-md rounded-xl bg-surface hover:bg-surface-container-low transition-colors flex items-start gap-space-md" type="button" data-empresa="' + c.id + '">' +
      '<div class="w-12 h-12 rounded-xl bg-primary-container text-primary-deep font-headline-s font-bold flex items-center justify-center shrink-0">' + esc(initials(c.name || "?")) + "</div>" +
      '<div class="flex-1 min-w-0"><div class="flex flex-wrap items-center gap-2">' +
      '<h3 class="font-headline-s text-body-m text-ink-primary font-semibold">' + esc(c.name) + "</h3>" +
      (c.is_verified ? '<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container text-primary font-body-s text-body-s font-semibold"><span class="material-symbols-outlined text-[14px]">verified</span>Verificada</span>' : "") +
      "</div>" +
      '<p class="font-body-s text-body-s text-ink-secondary mt-0.5">' + esc(c.sector || "Sector no indicado") + "</p>" +
      '<p class="font-body-s text-body-s text-ink-secondary flex items-center gap-1 mt-1"><span class="material-symbols-outlined text-[16px]">location_on</span>' + esc(c.district || "Piura") + "</p>" +
      '<p class="font-body-s text-body-s text-primary font-semibold mt-1">' + (c.jobs || 0) + " convocatoria(s) abierta(s)</p></div></button>";
  }

  async function hydrateEmpresas(root, params) {
    setTitle("Empresas");
    const loading = $("#em-cargando", root), err = $("#em-error", root), content = $("#em-contenido", root);
    let all = [], selectedId = params && params.id ? params.id : null;
    let fDistrito = "", fSector = "", fSoloOfertas = false;

    function kpiPill(label, value, icon) {
      return '<div class="bg-surface rounded-xl p-space-md shadow-sm flex items-center gap-space-md">' +
        '<span class="w-10 h-10 rounded-lg bg-primary-container text-primary flex items-center justify-center"><span class="material-symbols-outlined text-[22px]">' + icon + "</span></span>" +
        '<div><div class="font-headline-s text-headline-s text-ink-primary pp-num font-extrabold">' + value + "</div>" +
        '<div class="font-body-s text-body-s text-ink-secondary">' + esc(label) + "</div></div></div>";
    }

    function renderKpis() {
      const verificadas = all.filter(c => c.is_verified).length;
      const ofertas = all.reduce((a, c) => a + (c.jobs || 0), 0);
      const distritos = new Set(all.map(c => c.district).filter(Boolean)).size;
      setHTML($("#em-kpis", root), [
        kpiPill("Empresas registradas", all.length, "corporate_fare"),
        kpiPill("Convocatorias abiertas", ofertas, "work"),
        kpiPill("Empresas verificadas", verificadas, "verified"),
        kpiPill("Distritos con empleo", distritos, "location_on")
      ].join(""));
      setText($("#em-verificadas", root), verificadas);
    }

    function renderChips() {
      const distritos = Array.from(new Set(all.map(c => c.district).filter(Boolean))).slice(0, 8);
      const sectores = Array.from(new Set(all.map(c => c.sector).filter(Boolean))).slice(0, 8);
      setHTML($("#em-chips-distrito", root), '<button class="px-3 py-1.5 rounded-full ' + (fDistrito === "" ? "bg-primary text-on-primary" : "bg-surface-container text-ink-secondary hover:bg-surface-container-high") + ' font-body-s text-body-s font-semibold" type="button" data-chip-distrito="">Todos</button>' +
        distritos.map(d => '<button class="px-3 py-1.5 rounded-full ' + (fDistrito === d ? "bg-primary text-on-primary" : "bg-surface-container text-ink-secondary hover:bg-surface-container-high") + ' font-body-s text-body-s font-semibold" type="button" data-chip-distrito="' + esc(d) + '">' + esc(d) + "</button>").join(""));
      setHTML($("#em-chips-sector", root), '<button class="px-3 py-1.5 rounded-full ' + (fSector === "" ? "bg-primary text-on-primary" : "bg-surface-container text-ink-secondary hover:bg-surface-container-high") + ' font-body-s text-body-s font-semibold" type="button" data-chip-sector="">Todos</button>' +
        sectores.map(s => '<button class="px-3 py-1.5 rounded-full ' + (fSector === s ? "bg-primary text-on-primary" : "bg-surface-container text-ink-secondary hover:bg-surface-container-high") + ' font-body-s text-body-s font-semibold" type="button" data-chip-sector="' + esc(s) + '">' + esc(s) + "</button>").join(""));
      $$("[data-chip-distrito]", root).forEach(b => b.addEventListener("click", () => { fDistrito = b.dataset.chipDistrito; renderChips(); renderList(); }));
      $$("[data-chip-sector]", root).forEach(b => b.addEventListener("click", () => { fSector = b.dataset.chipSector; renderChips(); renderList(); }));
    }

    function filtradas() {
      const q = ($("#em-search", root).value || "").toLowerCase();
      return all.filter(c => {
        if (fDistrito && c.district !== fDistrito) return false;
        if (fSector && c.sector !== fSector) return false;
        if (fSoloOfertas && !(c.jobs > 0)) return false;
        if (q && !((c.name || "").toLowerCase().includes(q) || (c.sector || "").toLowerCase().includes(q) || (c.district || "").toLowerCase().includes(q))) return false;
        return true;
      }).sort((a, b) => {
        const sort = $("#em-sort", root).value;
        if (sort === "name") return (a.name || "").localeCompare(b.name || "");
        if (sort === "recent") return (b.id || 0) - (a.id || 0);
        return (b.jobs || 0) - (a.jobs || 0);
      });
    }

    function renderList() {
      const rows = filtradas();
      setText($("#em-resumen", root), rows.length + " de " + all.length + " empresas");
      const box = $("#em-lista", root);
      box.innerHTML = rows.length ? rows.map(empresaCard).join("") : "";
      $("#em-vacio", root).style.display = rows.length ? "none" : "";
      $$("[data-empresa]", box).forEach(b => b.addEventListener("click", () => select(b.dataset.empresa)));
      if (!rows.some(c => String(c.id) === String(selectedId))) selectedId = rows.length ? rows[0].id : null;
      if (selectedId) select(selectedId, true);
    }

    async function select(id, silent) {
      selectedId = id;
      const box = $("#em-detalle", root);
      if (!id) {
        setText($("#em-d-nombre", root), "Selecciona una empresa");
        setText($("#em-d-meta", root), "Elige una tarjeta de la lista para ver su ficha.");
        setHTML($("#em-d-descripcion", root), ""); setHTML($("#em-d-datos", root), ""); setHTML($("#em-d-ofertas", root), "");
        setText($("#em-d-count", root), "0");
        return;
      }
      if (!silent) box.style.opacity = ".6";
      try {
        const c = await getCompany(id);
        if (!silent) box.style.opacity = "";
        setText($("#em-d-nombre", root), c.name);
        const ver = $("#em-d-verificada", root); ver.style.display = c.is_verified ? "" : "none";
        setText($("#em-d-sede", root), c.district || "Piura");
        setText($("#em-d-meta", root), (c.sector || "Sector no indicado") + " · " + (c.district || "Piura"));
        setText($("#em-d-iniciales", root), initials(c.name));
        setHTML($("#em-d-descripcion", root), c.description ? esc(c.description) : "Esta empresa aún no ha publicado una descripción.");
        const datos = [
          ["corporate_fare", c.ruc || "Sin RUC"],
          ["location_on", [c.city, c.district].filter(Boolean).join(" · ") || "Piura"],
          ["call", c.phone || "Sin teléfono"],
          ["language", c.website || "Sin sitio web"]
        ].map(([i, t]) => '<div class="flex items-center gap-2 min-w-0"><span class="material-symbols-outlined text-primary text-[18px] shrink-0">' + i + '</span><span class="truncate">' + esc(t) + "</span></div>").join("");
        setHTML($("#em-d-datos", root), datos);
        const jobs = c.jobs || [];
        setText($("#em-d-count", root), jobs.length);
        setHTML($("#em-d-ofertas", root), jobs.length ? jobs.map(j =>
          '<div class="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-2">' +
          '<div class="min-w-0"><p class="font-body-s text-body-s text-ink-primary font-semibold truncate">' + esc(j.title) + "</p>" +
          '<p class="font-label text-label text-ink-secondary">' + esc(modalityLabel(j.modality)) + " · " + esc(j.district || "Piura") + " · " + esc(salaryLabel(j.salary)) + "</p></div>" +
          '<a class="pp-icon-btn shrink-0" style="width:32px;height:32px" href="#/oferta/' + j.id + '" data-href="#/oferta/' + j.id + '" title="Ver oferta"><span class="material-symbols-outlined text-[18px]">visibility</span></a></div>').join("")
          : '<p class="font-body-s text-body-s text-ink-secondary">Esta empresa no tiene convocatorias abiertas.</p>');
      } catch (e) {
        if (!silent) box.style.opacity = "";
        toast(e.message || "No se pudo cargar la empresa", "error");
      }
    }

    wireModals(root);
    $("#em-search", root).addEventListener("input", renderList);
    $("#em-sort", root).addEventListener("change", renderList);
    $("#em-solo-ofertas", root).addEventListener("change", e => { fSoloOfertas = e.target.checked; renderList(); });
    $("#em-limpiar", root).addEventListener("click", () => {
      $("#em-search", root).value = ""; fDistrito = ""; fSector = ""; fSoloOfertas = false;
      $("#em-solo-ofertas", root).checked = false;
      renderChips(); renderList();
    });
    $("#em-form-contacto", root).addEventListener("submit", async e => {
      e.preventDefault();
      const btn = e.target.querySelector('button[type="submit"]');
      btn.disabled = true;
      try {
        await sendIntake({
          name: $("#em-c-nombre", root).value.trim(),
          email: $("#em-c-email", root).value.trim(),
          phone: $("#em-c-telefono", root).value.trim(),
          type: $("#em-c-tipo", root).value,
          message: $("#em-c-mensaje", root).value.trim()
        });
        closeModal($("#em-modal-contacto", root));
        e.target.reset();
        toast("Mensaje enviado; te contactaremos pronto");
      } catch (err) { toast(err.message || "No se pudo enviar", "error"); }
      finally { btn.disabled = false; }
    });
    $("#embtn-contacto", root).addEventListener("click", () => openModal($("#em-modal-contacto", root)));

    show(loading);
    try {
      all = await getCompanies();
      hide(loading);
      renderKpis(); renderChips(); renderList();
      content.style.display = "";
    } catch (e) {
      hide(loading);
      failBox(err, e.message, null);
    }
  }

  /* ── Mapa de empleo ──────────────────────────────────────────────── */
  function mapPinColor(m) {
    const k = String(m || "").toLowerCase();
    return k === "remoto" ? "#894032" : k === "hibrido" ? "#845400" : "#00614f";
  }

  async function hydrateMapa(root) {
    setTitle("Mapa de empleo");
    const loading = $("#mp-cargando", root), err = $("#mp-error", root), content = $("#mp-contenido", root);
    let map = [], total = 0, fDistrito = "", fModalidad = "", selectedId = null;

    function kpiPill(label, value, icon) {
      return '<div class="bg-surface rounded-xl p-space-md shadow-sm flex items-center gap-space-md">' +
        '<span class="w-10 h-10 rounded-lg bg-accent-container text-secondary flex items-center justify-center"><span class="material-symbols-outlined text-[22px]">' + icon + "</span></span>" +
        '<div><div class="font-headline-s text-headline-s text-ink-primary pp-num font-extrabold">' + value + "</div>" +
        '<div class="font-body-s text-body-s text-ink-secondary">' + esc(label) + "</div></div></div>";
    }

    function renderKpis() {
      const distritos = new Set(map.map(j => j.district).filter(Boolean)).size;
      const modalidades = new Set(map.map(j => j.modality)).size;
      setHTML($("#mp-kpis", root), [
        kpiPill("Plazas publicadas", total, "work"),
        kpiPill("Con ubicación", map.length, "place"),
        kpiPill("Distritos con plazas", distritos, "location_on"),
        kpiPill("Modalidades activas", modalidades, "category")
      ].join(""));
      setText($("#mp-sin-coordenadas", root), (total - map.length) + " plazas sin coordenadas");
      $("#mp-sin-coordenadas", root).style.display = (total - map.length) > 0 ? "" : "none";
    }

    function distritosDisponibles() {
      return Array.from(new Set(map.map(j => j.district).filter(Boolean))).sort();
    }

    function filtradas() {
      const q = ($("#mp-fsearch", root).value || "").toLowerCase();
      return map.filter(j => {
        if (fDistrito && j.district !== fDistrito) return false;
        if (fModalidad && String(j.modality) !== fModalidad) return false;
        if (q && !((j.title || "").toLowerCase().includes(q) || (j.district || "").toLowerCase().includes(q))) return false;
        return true;
      }).sort((a, b) => {
        const sort = $("#mp-fsort", root).value;
        if (sort === "name") return (a.title || "").localeCompare(b.title || "");
        if (sort === "recent") return (b.id || 0) - (a.id || 0);
        return (b.district || "").localeCompare(a.district || "");
      });
    }

    function renderPins(rows) {
      const svg = $("#mp-svg", root);
      if (!svg) return;
      if (!rows.length) { svg.innerHTML = ""; return; }
      const W = 800, H = 520, pad = 60;
      const lats = rows.map(j => j.lat), lngs = rows.map(j => j.lng);
      const minLat = Math.min.apply(null, lats), maxLat = Math.max.apply(null, lats);
      const minLng = Math.min.apply(null, lngs), maxLng = Math.max.apply(null, lngs);
      const spanLat = (maxLat - minLat) || 0.05, spanLng = (maxLng - minLng) || 0.05;
      const px = lng => pad + ((lng - minLng) / spanLng) * (W - pad * 2);
      const py = lat => pad + ((maxLat - lat) / spanLat) * (H - pad * 2);
      let g = "";
      for (let i = 1; i < 6; i++) { const yy = (H / 6) * i; g += '<line x1="0" y1="' + yy + '" x2="' + W + '" y2="' + yy + '" stroke="#E3E0D5" stroke-width="1" stroke-dasharray="3 5"/>'; }
      for (let i = 1; i < 8; i++) { const xx = (W / 8) * i; g += '<line x1="' + xx + '" y1="0" x2="' + xx + '" y2="' + H + '" stroke="#E3E0D5" stroke-width="1" stroke-dasharray="3 5"/>'; }
      svg.innerHTML = g + rows.map(j => {
        const cx = Math.max(20, Math.min(W - 20, px(j.lng)));
        const cy = Math.max(20, Math.min(H - 20, py(j.lat)));
        const sel = String(j.id) === String(selectedId);
        return '<g class="cursor-pointer" data-pin="' + j.id + '">' +
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + (sel ? 12 : 8) + '" fill="' + mapPinColor(j.modality) + '" fill-opacity="0.25"/>' +
          '<circle cx="' + cx + '" cy="' + cy + '" r="' + (sel ? 6 : 4) + '" fill="' + mapPinColor(j.modality) + '" stroke="#fff" stroke-width="2"/>' +
          "<title>" + esc(j.title) + "</title></g>";
      }).join("");
    }

    function renderList(rows) {
      setText($("#mp-resumen", root), rows.length + " de " + map.length + " plazas con ubicación");
      const box = $("#mp-lista", root);
      box.innerHTML = rows.length ? rows.map(j =>
        '<button class="w-full text-left p-space-md rounded-xl bg-surface hover:bg-surface-container-low transition-colors flex items-start gap-space-md ' + (String(j.id) === String(selectedId) ? "ring-2 ring-primary" : "") + '" type="button" data-mapa="' + j.id + '">' +
        '<span class="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style="background:' + mapPinColor(j.modality) + '22;color:' + mapPinColor(j.modality) + '"><span class="material-symbols-outlined text-[20px]">place</span></span>' +
        '<span class="flex-1 min-w-0"><span class="block font-headline-s text-body-m text-ink-primary font-semibold truncate">' + esc(j.title) + "</span>" +
        '<span class="block font-body-s text-body-s text-ink-secondary">' + esc(j.district || "Piura") + " · " + esc(modalityLabel(j.modality)) + "</span></span></button>").join("")
        : "";
      $("#mp-vacio", root).style.display = rows.length ? "none" : "";
      $$("[data-mapa]", box).forEach(b => b.addEventListener("click", () => select(b.dataset.mapa)));
    }

    function select(id) {
      selectedId = id;
      const job = map.find(j => String(j.id) === String(id));
      setText($("#mp-s-titulo", root), job ? job.title : "Selecciona un punto del mapa");
      setText($("#mp-s-meta", root), job ? ((job.district || "Piura") + " · " + modalityLabel(job.modality)) : "Haz clic en un marcador para ver la ficha de la plaza.");
      const link = $("#mp-s-enlace", root);
      link.style.display = job ? "" : "none";
      if (job) { link.setAttribute("href", "#/oferta/" + job.id); link.setAttribute("data-href", "#/oferta/" + job.id); }
      renderPins(filtradas());
      renderList(filtradas());
    }

    function renderAll() { renderPins(filtradas()); renderList(filtradas()); }

    wireModals(root);
    $("#mp-fsearch", root).addEventListener("input", renderAll);
    $("#mp-fdistrito", root).addEventListener("change", e => { fDistrito = e.target.value; renderAll(); });
    $("#mp-fsort", root).addEventListener("change", renderAll);
    $$("#mp-fmodalidad button", root).forEach(b => b.addEventListener("click", () => {
      fModalidad = b.dataset.modalidad;
      $$("#mp-fmodalidad button", root).forEach(x => {
        const on = x === b;
        x.className = "px-3.5 py-1.5 rounded-lg font-body-s text-body-s font-bold " + (on ? "bg-primary text-on-primary" : "bg-surface-container text-ink-secondary hover:bg-surface-container-high font-semibold");
      });
      renderAll();
    }));
    const svg = $("#mp-svg", root);
    if (svg) svg.addEventListener("click", e => {
      const g = e.target.closest("[data-pin]");
      if (g) select(g.dataset.pin);
    });

    show(loading);
    try {
      const [mapR, jobsR] = await Promise.allSettled([getJobsMap(), getJobs({ status: "published", limit: 200 })]);
      hide(loading);
      if (mapR.status === "rejected") { failBox(err, mapR.reason.message, null); return; }
      map = mapR.value || [];
      total = jobsR.status === "fulfilled" ? (jobsR.value || []).length : map.length;
      const selDist = $("#mp-fdistrito", root);
      const cur = selDist.value;
      selDist.innerHTML = '<option value="">Todos los distritos</option>' + distritosDisponibles().map(d => '<option value="' + esc(d) + '">' + esc(d) + "</option>").join("");
      selDist.value = cur;
      renderKpis();
      renderAll();
      if (map.length) select(map[0].id);
      content.style.display = "";
    } catch (e) {
      hide(loading);
      failBox(err, e.message, null);
    }
  }

  /* ── Resto: estáticas ───────────────────────────────────────────── */
  function hydrateStatic(root, slug) {
    const names = {
      "panel-empresa": "Panel de empresa",
      "panel-admin": "Panel de administración", "empresas": "Empresas", "mapa": "Mapa de empleo"
    };
    if (names[slug]) setTitle(names[slug]);
  }

  async function hydrate(slug, params, root) {
    try {
      if (slug === "home" || slug === "home-mobile") await hydrateHome(root);
      else if (slug === "ofertas" || slug === "ofertas-mobile") await hydrateOfertas(root, params);
      else if (slug === "oferta-detalle") await hydrateDetalle(root, params);
      else if (slug === "auth") await hydrateAuth(root);
      else if (slug === "perfil-candidato") await hydratePerfil(root);
      else if (slug === "perfil-publico") await hydratePublico(root, params);
      else if (slug === "panel-empresa") await hydratePanelEmpresa(root);
      else if (slug === "panel-admin") await hydratePanelAdmin(root);
      else if (slug === "empresas") await hydrateEmpresas(root, params);
      else if (slug === "mapa") await hydrateMapa(root);
      else hydrateStatic(root, slug);
    } catch (e) {
      console.warn("[flow] " + slug, e);
      toast(e.message || "No se pudo cargar la página", "error");
    }
  }

  return { hydrate, toast, setTitle };
})();
