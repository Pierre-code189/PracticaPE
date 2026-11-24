// PrácticaPE — router por hash y cableado de pantallas.
// Flujo: hash -> cargar fragmento -> montar en #pp-main -> ejecutar scripts -> hydrate().
import { api, ui, loadPageInto, currentUser } from './api.js';
import './chrome.js';
import './flow.js';

// Web pública: solo las pantallas de consulta y contacto.
// Las pantallas de administración, panel de empresa, perfiles, postulaciones,
// notificaciones, envío de ofertas y libro de reclamaciones quedan fuera del
// sitio (sus archivos y sus hidratadores siguen en el repo, pero ninguna ruta
// los carga: cualquier URL antigua cae al inicio).
const ROUTES = {
  '': 'home',
  'home': 'home',
  'inicio': 'home',
  'ofertas': 'ofertas',
  'oferta-detalle': 'oferta-detalle',
  'oferta': 'oferta-detalle',
  'auth': 'auth',
  'login': 'auth',
  'empresas': 'empresas',
  'directorio-empresas': 'empresas',
  'mapa': 'mapa',
  'contacto': 'contacto',
  'privacidad': 'privacidad',
  'terminos': 'terminos',
  'guias': 'guias',
};

const state = { page: null, params: [], loaded: {}, handlers: {} };

function parseHash() {
  const raw = (location.hash || '#/').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean);
  return { name: parts[0] || 'home', params: parts.slice(1) };
}

async function render() {
  // los toasts son por pantalla: no sobreviven a un cambio de ruta
  document.querySelectorAll('.pp-toast').forEach(t => t.remove());
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
    try { (0, eval)(s.textContent); } catch (e) { /* prototipo: no rompe la app */ }
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
