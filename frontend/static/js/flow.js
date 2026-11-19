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
  }

  /* ── Ofertas ────────────────────────────────────────────────────── */
  async function hydrateOfertas(root, params = {}) {
    const { tpl, grid } = jobTemplate(root);
    if (!tpl || !grid) return;
    const form = $("#filterForm", root), kw = $("#keywordInput", root);
    const modSel = $("#modalitySelect", root), distSel = $("#districtSelect", root);
    const empty = $("#emptyState", root), pagination = $("#paginationBlock", root);
    const loadMore = $("#loadMoreBtn", root), demo = $("#demoStateText", root);
    const PAGE = 6;
    let all = [], shown = PAGE;

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
      const slice = all.slice(0, shown);
      renderJobs(grid, tpl, slice);
      if (empty) empty.style.display = all.length ? "none" : "";
      if (pagination) pagination.style.display = all.length ? "" : "none";
      if (loadMore) {
        loadMore.style.display = shown < all.length ? "" : "none";
        setText(loadMore, `Cargar más ofertas (mostrando ${slice.length} de ${all.length})`);
      }
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
      shown = PAGE;
      render();
    }

    if (form) form.addEventListener("submit", e => { e.preventDefault(); load(); });
    if (loadMore) loadMore.addEventListener("click", () => { shown += PAGE; render(); });
    if (demo) { setText(demo, "Limpiar filtros"); demo.addEventListener("click", () => { if (kw) kw.value = ""; if (modSel) modSel.value = ""; if (distSel) distSel.value = ""; load(); }); }
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
    const saveJob = $("#btn-save-job", root), saveMobile = $("#btn-save-mobile", root);
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
      [saveJob, saveMobile].forEach(b => { if (b) b.setAttribute("aria-pressed", saved ? "true" : "false"); });
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
    [saveJob, saveMobile].forEach(b => b && b.addEventListener("click", toggleSave));

    if (share) {
      const url = location.origin + "/#/oferta/" + job.id;
      share.setAttribute("href", "https://wa.me/?text=" + encodeURIComponent(job.title + " — " + url));
      share.setAttribute("target", "_blank");
      share.setAttribute("rel", "noopener");
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
        if (step1) step1.style.display = "none";
        if (step2) step2.style.display = "";
        if (displayEmail) setText(displayEmail, email);
        if (inputs[0]) inputs[0].focus();
        if (d && d.dev_code) toast("Código de desarrollo: " + d.dev_code);
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

  /* ── Resto: estáticas ───────────────────────────────────────────── */
  function hydrateStatic(root, slug) {
    const names = {
      "perfil-candidato": "Mi perfil", "panel-empresa": "Panel de empresa",
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
      else hydrateStatic(root, slug);
    } catch (e) {
      console.error("[flow] " + slug, e);
      toast(e.message || "No se pudo cargar la página", "error");
    }
  }

  return { hydrate, toast, setTitle };
})();
