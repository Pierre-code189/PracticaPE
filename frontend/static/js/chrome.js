// PrácticaPE — cromo compartido: cabecera, menú móvil y modo claro/oscuro.
// Monta el header una sola vez; las pantallas de Stitch no lo traen.
(function () {
  const NAV = [
    { href: '#/ofertas', label: 'Ofertas', key: 'ofertas' },
    { href: '#/mapa', label: 'Mapa', key: 'mapa' },
    { href: '#/empresas', label: 'Empresas', key: 'empresas' },
    { href: '#/postulaciones', label: 'Mis postulaciones', key: 'postulaciones' },
  ];

  function user() {
    try { return JSON.parse(localStorage.getItem('pp_user') || 'null'); } catch { return null; }
  }

  function headerHTML() {
    const u = user();
    const cta = u
      ? `<a class="hidden sm:inline-flex items-center gap-2 font-body-m text-body-m font-semibold text-primary px-space-lg py-2 rounded-full hover:bg-primary-container-light transition-colors" href="#/perfil">
           <span class="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center text-body-s font-bold">${(u.name || u.email || 'U')[0].toUpperCase()}</span>
           <span class="max-w-[140px] truncate">${(u.name || u.email || 'Mi perfil').split('@')[0]}</span>
         </a>`
      : `<a class="hidden sm:inline-flex items-center justify-center font-body-m text-body-m font-semibold text-secondary px-space-lg py-2 rounded-full hover:bg-surface-container-low transition-colors" href="#/auth">Ingresar</a>
         <a class="inline-flex items-center justify-center font-body-m text-body-m font-bold bg-primary text-on-primary px-space-lg py-2 rounded-full hover:bg-primary-deep transition-colors" href="#/panel-empresa">Publicar oferta</a>`;

    return `
<header id="pp-header" class="fixed top-0 left-0 right-0 z-50 bg-surface-light/95 backdrop-blur-md border-b border-border-light">
  <div class="max-w-[1200px] mx-auto px-margin h-16 flex items-center justify-between gap-space-md">
    <div class="flex items-center gap-space-lg min-w-0">
      <a class="flex items-center gap-2 group shrink-0" href="#/">
        <div class="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(14,124,102,0.25)] group-hover:scale-105 transition-transform">
          <span class="w-4 h-4 rounded-sm border-2 border-on-primary rotate-45 flex items-center justify-center"><span class="w-1.5 h-1.5 bg-accent-light rounded-full"></span></span>
        </div>
        <span class="font-headline-s text-headline-s tracking-tight text-ink-light">Práctica<span class="text-primary">PE</span></span>
      </a>
      <nav id="pp-nav" class="hidden lg:flex items-center gap-space-xs" aria-label="Navegación principal"></nav>
    </div>
    <div class="flex items-center gap-space-sm">
      <button id="pp-theme" aria-label="Cambiar modo claro y oscuro" class="w-10 h-10 rounded-full flex items-center justify-center text-ink-secondary-light hover:bg-surface-container-low hover:text-ink-light transition-colors" type="button">
        <span class="material-symbols-outlined text-[20px]">light_mode</span>
      </button>
      ${cta}
      <button id="pp-burger" aria-label="Abrir menú" aria-expanded="false" class="lg:hidden w-10 h-10 rounded-full flex items-center justify-center text-ink-light hover:bg-surface-container-low transition-colors" type="button">
        <span class="material-symbols-outlined text-[22px]">menu</span>
      </button>
    </div>
  </div>
</header>
<div id="pp-mobile" class="pp-hidden fixed inset-0 z-40 lg:hidden" aria-hidden="true">
  <div id="pp-mobile-backdrop" class="absolute inset-0 bg-ink-light/40"></div>
  <div class="absolute top-16 right-3 left-3 bg-surface-light rounded-2xl shadow-[0_12px_40px_rgba(20,32,27,0.25)] p-3 flex flex-col gap-1">
    <div id="pp-mobile-nav" class="flex flex-col"></div>
    <div class="h-px bg-border-light my-2"></div>
    <button id="pp-mobile-theme" class="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-m text-body-m text-ink-light hover:bg-surface-container-low transition-colors" type="button">
      <span class="material-symbols-outlined text-[20px] text-ink-secondary-light" id="pp-mobile-theme-icon">light_mode</span>
      <span id="pp-mobile-theme-label">Modo claro</span>
    </button>
    <div id="pp-mobile-user" class="px-3 py-2 text-body-s text-ink-secondary-light"></div>
  </div>
</div>`;
  }

  function renderNav() {
    const here = (location.hash || '#/').replace(/^#\//, '').split('/')[0].split('?')[0];
    const nav = document.getElementById('pp-nav');
    const mnav = document.getElementById('pp-mobile-nav');
    if (!nav) return;
    const links = NAV.map(n => {
      const active = here === n.key;
      return `<a href="${n.href}" class="${active ? 'bg-primary-container-light text-primary font-bold' : 'text-on-surface-variant hover:text-ink-light hover:bg-surface-container-low'} px-space-md py-1.5 rounded-full transition-colors font-body-m text-body-m">${n.label}</a>`;
    }).join('');
    nav.innerHTML = links;
    if (mnav) {
      mnav.innerHTML = NAV.map(n =>
        `<a href="${n.href}" class="px-3 py-2.5 rounded-xl font-body-m text-body-m ${here === n.key ? 'bg-primary-container-light text-primary font-bold' : 'text-ink-light'}">${n.label}</a>`
      ).join('');
    }
    const u = user();
    const box = document.getElementById('pp-mobile-user');
    if (box) {
      box.innerHTML = u
        ? `<a href="#/perfil" class="flex items-center gap-2 text-ink-light font-semibold"><span class="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center text-body-s font-bold">${(u.name || u.email || 'U')[0].toUpperCase()}</span> Mi perfil</a>
           <button id="pp-logout" class="text-left text-error font-semibold">Cerrar sesión</button>`
        : `<a href="#/auth" class="text-primary font-semibold">Ingresar con mi correo</a>`;
      const lo = document.getElementById('pp-logout');
      if (lo) lo.addEventListener('click', () => {
        localStorage.removeItem('pp_token');
        localStorage.removeItem('pp_user');
        closeMobile();
        location.hash = '#/';
      });
    }
  }

  function paintTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    const icon = document.querySelector('#pp-theme .material-symbols-outlined');
    if (icon) icon.textContent = dark ? 'dark_mode' : 'light_mode';
    const mi = document.getElementById('pp-mobile-theme-icon');
    const ml = document.getElementById('pp-mobile-theme-label');
    if (mi) mi.textContent = dark ? 'dark_mode' : 'light_mode';
    if (ml) ml.textContent = dark ? 'Modo oscuro' : 'Modo claro';
  }

  function initTheme() {
    const saved = localStorage.getItem('pp-theme');
    const dark = saved ? saved === 'dark' : (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
    paintTheme(dark);
    const t = document.getElementById('pp-theme');
    if (t) t.addEventListener('click', () => {
      const now = !document.documentElement.classList.contains('dark');
      localStorage.setItem('pp-theme', now ? 'dark' : 'light');
      paintTheme(now);
    });
    const mt = document.getElementById('pp-mobile-theme');
    if (mt) mt.addEventListener('click', () => {
      const now = !document.documentElement.classList.contains('dark');
      localStorage.setItem('pp-theme', now ? 'dark' : 'light');
      paintTheme(now);
    });
  }

  function openMobile() {
    const m = document.getElementById('pp-mobile');
    if (!m) return;
    m.classList.remove('pp-hidden');
    const b = document.getElementById('pp-burger');
    if (b) b.setAttribute('aria-expanded', 'true');
    renderNav();
  }
  function closeMobile() {
    const m = document.getElementById('pp-mobile');
    if (!m) return;
    m.classList.add('pp-hidden');
    const b = document.getElementById('pp-burger');
    if (b) b.setAttribute('aria-expanded', 'false');
  }

  function mount() {
    const host = document.getElementById('pp-header-host');
    if (!host) return;
    host.innerHTML = headerHTML();
    initTheme();
    renderNav();
    const b = document.getElementById('pp-burger');
    if (b) b.addEventListener('click', () => {
      const open = !document.getElementById('pp-mobile').classList.contains('pp-hidden');
      open ? closeMobile() : openMobile();
    });
    const bd = document.getElementById('pp-mobile-backdrop');
    if (bd) bd.addEventListener('click', closeMobile);
    window.addEventListener('hashchange', () => { closeMobile(); renderNav(); });
    document.addEventListener('click', (e) => {
      if (e.target && e.target.closest('a[href^="#/"]')) closeMobile();
    });
  }

  window.PPChrome = { mount, renderNav, paintTheme, closeMobile };
  document.addEventListener('DOMContentLoaded', mount);
})();
