/* Practicape — enrutador, tema y área de usuario. */
"use strict";

const NAV = [
  { path: "/", label: "Ofertas", href: "#/" },
  { path: "/empresas", label: "Empresas", href: "#/empresas" },
  { path: "/mapa", label: "Mapa", href: "#/mapa" },
  { path: "/panel-empresa", label: "Para empleadores", href: "#/panel-empresa" }
];

const app = () => document.getElementById("app");

function parseHash() {
  const raw = (location.hash || "#/").replace(/^#/, "");
  const [pathPart, queryPart] = raw.split("?");
  const path = pathPart || "/";
  const query = {};
  new URLSearchParams(queryPart || "").forEach((v, k) => { query[k] = v; });
  return { path, parts: path.split("/").filter(Boolean), query };
}

/* ── Tema ────────────────────────────────────────────────────────── */
function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  document.documentElement.classList.toggle("dark", t === "dark");
  localStorage.setItem("pp_theme", t);
  const label = document.getElementById("theme-label");
  if (label) label.textContent = t === "dark" ? "Modo oscuro" : "Modo claro";
}
function toggleTheme() {
  applyTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark");
}

/* ── Usuario ─────────────────────────────────────────────────────── */
function renderUser() {
  const box = document.getElementById("user-area");
  if (!box) return;
  const u = store.user;
  if (!u) {
    box.innerHTML = '<a href="#/auth" class="pp-user-link">Ingresar</a>';
    return;
  }
  const name = u.name || u.email || "Mi cuenta";
  const initial = esc(initials(name));
  box.innerHTML =
    `<div class="relative">` +
    `<button id="user-menu-btn" class="pp-user-btn" aria-haspopup="true" aria-expanded="false">` +
    `<span class="pp-avatar">${initial}</span><span class="pp-user-name">${esc(name)}</span>` +
    `<span class="material-symbols-outlined text-[18px] text-ink-secondary">expand_more</span></button>` +
    `<div id="user-menu" class="pp-user-menu" hidden></div></div>`;
  const btn = document.getElementById("user-menu-btn");
  const menu = document.getElementById("user-menu");
  const links = [];
  if (u.role === "candidate") links.push({ href: "#/perfil", label: "Mi perfil" });
  if (u.role === "business") links.push({ href: "#/panel-empresa", label: "Panel de empresa" });
  if (u.role === "admin") links.push({ href: "#/panel-admin", label: "Panel de administración" });
  links.push({ href: "#/auth", label: "Cerrar sesión", action: "logout" });
  menu.innerHTML = links.map(l => `<a href="${l.href}" data-action="${l.action || ""}">${esc(l.label)}</a>`).join("");
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const open = !menu.hidden;
    menu.hidden = open;
    btn.setAttribute("aria-expanded", open ? "false" : "true");
  });
  document.addEventListener("click", () => { menu.hidden = true; btn.setAttribute("aria-expanded", "false"); });
  menu.addEventListener("click", e => {
    const a = e.target.closest("a");
    if (a && a.dataset.action === "logout") { e.preventDefault(); logout(); }
  });
}

/* ── Menú móvil ──────────────────────────────────────────────────── */
function toggleMenu(open) {
  let menu = document.getElementById("pp-menu");
  if (open === false) { if (menu) menu.remove(); return; }
  if (menu) { menu.remove(); return; }
  menu = document.createElement("div");
  menu.className = "pp-menu";
  menu.id = "pp-menu";
  const { path } = parseHash();
  menu.innerHTML =
    `<div class="flex items-center justify-between mb-4">` +
    `<a href="#/" class="font-headline-m text-headline-m text-ink-primary font-bold">Practicape</a>` +
    `<button id="pp-menu-close" class="pp-icon-btn" aria-label="Cerrar menú"><span class="material-symbols-outlined">close</span></button></div>` +
    NAV.map(n => `<a href="${n.href}" class="${path === n.path ? "active" : ""}">${esc(n.label)}</a>`).join("") +
    `<a href="#/auth">Ingresar</a>`;
  document.body.appendChild(menu);
  document.getElementById("pp-menu-close").addEventListener("click", () => toggleMenu(false));
  menu.addEventListener("click", e => { if (e.target.closest("a")) toggleMenu(false); });
}

/* ── Rutas ───────────────────────────────────────────────────────── */
function resolveSlug(path, parts) {
  if (path === "/" || path === "") return { slug: "home" };
  if (path === "/ofertas") return { slug: "ofertas" };
  if (path.startsWith("/oferta/")) return { slug: "oferta-detalle", id: parts[1] };
  if (path === "/auth") return { slug: "auth" };
  if (path === "/perfil") return { slug: "perfil-candidato" };
  if (path === "/panel-empresa") return { slug: "panel-empresa" };
  if (path === "/panel-admin") return { slug: "panel-admin" };
  if (path === "/empresas" || path.startsWith("/empresa/")) return { slug: "empresas", id: parts[1] };
  if (path === "/mapa") return { slug: "mapa" };
  return { slug: "home" };
}

function setActive(path) {
  document.querySelectorAll("[data-nav]").forEach(a => {
    const href = a.getAttribute("href");
    const active = href === "#/" ? path === "/" : href === "#" + path;
    a.classList.toggle("text-primary", active);
    a.classList.toggle("font-semibold", active);
    a.setAttribute("aria-current", active ? "page" : "false");
  });
}

async function loadPage(file, slug, params) {
  const box = app();
  box.innerHTML = '<div class="pp-loading" style="min-height:60vh"><span class="pp-spin"></span>Cargando…</div>';
  try {
    const res = await fetch("/static/pages/" + file + ".html", { cache: "no-store" });
    if (!res.ok) throw new Error("Página no disponible");
    box.innerHTML = await res.text();
    const root = box.querySelector(".pp-screen");
    const { path } = parseHash();
    setActive(path);
    renderUser();
    window.scrollTo(0, 0);
    await PPF.hydrate(slug, params, root);
  } catch (e) {
    console.error("[router]", e);
    box.innerHTML = '<div class="pp-empty" style="min-height:60vh"><span class="material-symbols-outlined">error</span>' +
      '<h3>No se pudo cargar la página</h3><p class="pp-muted">' + esc(e.message || "") + '</p>' +
      '<a href="#/" class="pp-btn mt-4">Volver al inicio</a></div>';
  }
}

async function route() {
  const { path, parts, query } = parseHash();
  const { slug, id } = resolveSlug(path, parts);
  const params = Object.assign({}, query, id ? { id } : {});
  const isMobile = /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent || "");
  let file = slug;
  if (isMobile && (slug === "home" || slug === "ofertas")) file = slug + "-mobile";
  await loadPage(file, slug, params);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(localStorage.getItem("pp_theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));
  document.querySelectorAll("[data-theme-toggle]").forEach(b => b.addEventListener("click", toggleTheme));
  document.querySelectorAll("[data-menu-toggle]").forEach(b => b.addEventListener("click", () => toggleMenu()));
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-href]");
    if (el) { e.preventDefault(); location.hash = el.getAttribute("data-href"); }
  });
  window.addEventListener("hashchange", route);
  window.addEventListener("pp:user", renderUser);
  renderUser();
  route();
});
