function renderUserMenu() {
  const u = store.user;
  const btn = document.getElementById("user-btn");
  const dd = document.getElementById("user-dropdown");
  if (!u) { btn.textContent = "Ingresar"; dd.classList.add("hidden"); return; }
  btn.textContent = (u.name || u.email) + " (" + u.role + ")";
  document.getElementById("dd-head").textContent = u.email;
  api("/me/notifications").then(ns => {
    const unread = ns.filter(n => !n.is_read).length;
    document.getElementById("notif-badge").textContent = unread ? "(" + unread + ")" : "";
  }).catch(() => {});
}
document.getElementById("user-btn").addEventListener("click", () => {
  if (!store.user) { location.hash = "#/auth"; return; }
  document.getElementById("user-dropdown").classList.toggle("hidden");
});
document.getElementById("logout-btn").addEventListener("click", logout);

async function route() {
  const h = location.hash || "#/";
  const parts = h.replace("#/", "").split("/");
  try {
    if (parts[0] === "job" && parts[1]) return viewJob(parts[1]);
    if (parts[0] === "empresa" && parts[1]) return viewCompany(parts[1]);
    if (parts[0] === "auth") return viewAuth();
    if (parts[0] === "panel") return viewPanel();
    if (parts[0] === "mapa") return viewMap();
    if (parts[0] === "empresas") return viewCompanies();
    if (parts[0] === "contacto") return viewContact();
    if (parts[0] === "guardadas") return viewSaved();
    if (parts[0] === "notificaciones") return viewNotifications();
    if (parts[0] === "cv") return downloadCV();
    return viewHome();
  } catch (e) {
    app().innerHTML = `<p class="msg">Error: ${esc(e.message)}</p><p><a href="#/">Volver</a></p>`;
  }
  renderUserMenu();
}
addEventListener("hashchange", route);
route();
