// PrácticaPE — router por hash y cableado de pantallas.
// Flujo: hash -> cargar fragmento -> montar en #pp-main -> ejecutar scripts -> hydrate().
import { api, ui, loadPageInto, currentUser, clearSession } from './api.js';
import './chrome.js';
import './flow.js';

const ROUTES = {
  '': 'home',
  'home': 'home',
  'ofertas': 'ofertas',
  'oferta-detalle': 'oferta-detalle',
  'oferta': 'oferta-detalle',
  'auth': 'auth',
  'login': 'auth',
  'perfil-candidato': 'perfil-candidato',
  'perfil': 'perfil-candidato',
  'panel-empresa': 'panel-empresa',
  'empresas': 'empresas',
  'directorio-empresas': 'empresas',
  'mapa': 'mapa',
  'postulaciones': 'postulaciones',
  'mis-postulaciones': 'postulaciones',
  'panel-admin': 'panel-admin',
  'panel-administracion': 'panel-admin',
};

const state = { page: null, params: [], loaded: {}, handlers: {} };

function parseHash() {
  const raw = (location.hash || '#/').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean);
  return { name: parts[0] || 'home', params: parts.slice(1) };
}

async function render() {
  const { name, params } = parseHash();
  const slug = ROUTES[name] || 'home';
  const main = document.getElementById('pp-main');
  if (!main) return;

  const screen = document.createElement('div');
  screen.className = 'pp-screen-host';
  main.innerHTML = '';
  main.appendChild(screen);

  try {
    await loadPageInto(screen, slug);
  } catch (e) {
    screen.innerHTML = `<div class="pp-empty"><span class="material-symbols-outlined">error_outline</span>
      <p class="font-headline-s text-headline-s">No se pudo cargar la página</p>
      <p class="text-body-s text-ink-secondary-light">${ui.esc(e.message)}</p>
      <a href="#/" class="inline-flex items-center justify-center font-body-m text-body-m font-bold bg-primary text-on-primary px-space-lg py-2 rounded-full">Volver al inicio</a></div>`;
    return;
  }

  const root = screen.querySelector('.pp-screen');
  state.page = slug;
  state.params = params;

  // Marcar navegación activa
  if (window.PPChrome) window.PPChrome.renderNav();

  // Ejecutar los <script> que traía la pantalla (prototipos de Stitch): se neutralizan
  // en flow.js si compiten con los datos reales.
  const scripts = Array.from(root.querySelectorAll('script'));
  for (const s of scripts) {
    try { (new Function(s.textContent)).call(window); } catch (e) { /* prototipo: no rompe la app */ }
  }
  scripts.forEach(s => s.remove());

  const hydrate = window.PP_FLOW && window.PP_FLOW[slug];
  if (hydrate) {
    try {
      await hydrate(root, { params, api, ui, user: currentUser() });
    } catch (e) {
      console.error('[pp] hydrate ' + slug, e);
      ui.toast('No se pudieron cargar los datos de esta página', 'error');
    }
  }
  window.scrollTo(0, 0);
}

function guardRequireLogin() {
  if (!currentUser()) {
    ui.toast('Ingresa con tu correo para continuar', 'error');
    location.hash = '#/auth';
    return false;
  }
  return true;
}

window.addEventListener('hashchange', render);
window.PP = { render, guardRequireLogin, state };

document.addEventListener('DOMContentLoaded', () => {
  if (window.PPChrome) window.PPChrome.mount();
  render();
});
