// PrácticaPE — cromo compartido: cabecera, menú móvil y modo claro/oscuro.
// v2 — bugs corregidos:
//   · Toggle tema: usa data-theme en <html> + classList.toggle('dark'), nunca depende solo de clase 'dark'
//   · Menú móvil: backdrop opaco real (rgba 0,0,0,0.6), z-index 9999, bloquea body scroll
//   · Menú cierra con scroll, ESC, click en link, resize a desktop
//   · Hamburguesa: borde visible en modo claro, icono cambia a X al abrir
//   · Nav desktop: inline-flex en lg+, oculto en móvil
(function () {

  // ── Tema: solo modo claro ─────────────────────────────────────────────
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', 'light');
    document.documentElement.classList.remove('dark');
    document.documentElement.classList.add('light');
    try { localStorage.setItem('pp-theme', 'light'); } catch {}
  }
  function initTheme() {
    applyTheme();
    // Limpiar cualquier preferencia oscura antigua
    try { localStorage.removeItem('practicape-theme'); } catch {}
  }

  // ── Datos nav ────────────────────────────────────────────────────────
  var NAV_BASE = [
    { href: '#/ofertas',  label: 'Ofertas',          key: 'ofertas' },
    { href: '#/mapa',     label: 'Mapa',              key: 'mapa' },
    { href: '#/empresas', label: 'Empresas',          key: 'empresas' },
    { href: '#/guias',    label: 'Guía',              key: 'guias' },
    { href: '#/enviar',   label: 'Publica tu chamba', key: 'enviar' },
  ];
  function user() { try { return JSON.parse(localStorage.getItem('pp_user') || 'null'); } catch { return null; } }
  function navItems() {
    var u = user(), extra = [];
    if (u) extra.push({ href: '#/notificaciones', label: 'Notificaciones',    key: 'notificaciones' });
    if (u) extra.push({ href: '#/postulaciones',  label: 'Mis postulaciones', key: 'postulaciones' });
    return NAV_BASE.concat(extra);
  }

  // ── HTML ─────────────────────────────────────────────────────────────
  function headerHTML() {
    var u = user();
    var cta = u
      ? '<a href="#/perfil" style="display:none;align-items:center;gap:8px;padding:6px 14px;border-radius:999px;text-decoration:none;font-size:0.875rem;font-weight:600;color:#0E7C66;transition:background 0.15s" class="sm-flex" onmouseover="this.style.background=\'#ECFDF5\'" onmouseout="this.style.background=\'\'">'
        + '<span style="width:28px;height:28px;border-radius:50%;background:#0E7C66;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700">' + (u.name||u.email||'U')[0].toUpperCase() + '</span>'
        + '<span style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + (u.name||u.email||'Mi perfil').split('@')[0] + '</span></a>'
      : '<a href="#/auth" style="display:none;align-items:center;justify-content:center;padding:8px 16px;border-radius:999px;border:1.5px solid #D1D5DB;font-size:0.875rem;font-weight:600;color:#374151;text-decoration:none;transition:background 0.15s;white-space:nowrap" class="sm-flex" onmouseover="this.style.background=\'#F9FAFB\'" onmouseout="this.style.background=\'\'">'
        + 'Ingresar</a>'
        + '<a href="#/panel-empresa" style="display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:8px 14px;border-radius:999px;background:#0E7C66;color:white;font-size:0.875rem;font-weight:700;text-decoration:none;white-space:nowrap;transition:opacity 0.15s" onmouseover="this.style.opacity=\'0.9\'" onmouseout="this.style.opacity=\'1\'">'
        + '<span class="material-symbols-outlined" style="font-size:18px;line-height:1">add_circle</span>'
        + '<span class="pp-cta-label" style="display:none">Publicar oferta</span>'
        + '</a>'
        + '<style>@media(min-width:640px){.pp-cta-label{display:inline!important}}</style>';

    return '<header id="pp-header" style="position:fixed;top:0;left:0;right:0;z-index:1000;background:rgba(255,255,255,0.97);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(0,0,0,0.08)">'
      + '<div style="max-width:1200px;margin:0 auto;padding:0 1rem;height:64px;display:flex;align-items:center;justify-content:space-between;gap:12px">'
        // Logo + nav
        + '<div style="display:flex;align-items:center;gap:24px;min-width:0;flex:1">'
          + '<a href="#/" style="display:flex;align-items:center;gap:8px;text-decoration:none;flex-shrink:0">'
            + '<div style="width:36px;height:36px;border-radius:10px;background:#0E7C66;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(14,124,102,0.3)">'
              + '<span style="width:14px;height:14px;border:2.5px solid white;border-radius:3px;transform:rotate(45deg);display:block"></span>'
            + '</div>'
            + '<span style="font-weight:700;font-size:1rem;color:#111827;letter-spacing:-0.02em;white-space:nowrap">Práctica<span style="color:#0E7C66">PE</span></span>'
          + '</a>'
          + '<nav id="pp-nav" style="display:none;align-items:center;gap:4px" aria-label="Navegación principal"></nav>'
        + '</div>'
        // Acciones
        + '<div style="display:flex;align-items:center;gap:10px;flex-shrink:0">'
          + cta
          + '<button id="pp-burger" aria-label="Abrir menú" aria-expanded="false" type="button" style="width:40px;height:40px;border-radius:10px;border:1.5px solid #E5E7EB;background:white;cursor:pointer;display:flex;align-items:center;justify-content:center;color:#111827;transition:all 0.15s;flex-shrink:0" onmouseover="this.style.background=\'#F3F4F6\'" onmouseout="this.style.background=\'white\'">'
            + '<span class="material-symbols-outlined" style="font-size:22px;line-height:1">menu</span>'
          + '</button>'
        + '</div>'
      + '</div>'
    + '</header>'
    // Overlay del menú móvil
    + '<div id="pp-mobile" style="display:none;position:fixed;inset:0;z-index:9999" aria-hidden="true">'
      + '<div id="pp-mobile-backdrop" style="position:absolute;inset:0;background:rgba(0,0,0,0.6)"></div>'
      + '<div style="position:absolute;top:72px;left:12px;right:12px;background:white;border-radius:16px;box-shadow:0 20px 60px rgba(0,0,0,0.3);padding:12px;display:flex;flex-direction:column;gap:4px;max-height:calc(100vh - 90px);overflow-y:auto">'
        + '<div id="pp-mobile-nav" style="display:flex;flex-direction:column;gap:4px"></div>'
        + '<div style="height:1px;background:#E5E7EB;margin:8px 0"></div>'
        + '<div id="pp-mobile-user" style="padding:8px 12px;font-size:0.875rem;color:#6B7280"></div>'
      + '</div>'
    + '</div>';
  }

  // ── Renderizar nav ───────────────────────────────────────────────────
  function renderNav() {
    var here = (location.hash || '#/').replace(/^#\//, '').split('/')[0].split('?')[0];
    var nav  = document.getElementById('pp-nav');
    var mnav = document.getElementById('pp-mobile-nav');
    if (!nav) return;

    // Desktop nav: visible en >= 1024px
    nav.style.display = window.innerWidth >= 1024 ? 'flex' : 'none';

    nav.innerHTML = navItems().map(function(n) {
      var active = here === n.key;
      return '<a href="' + n.href + '" style="padding:6px 14px;border-radius:999px;font-size:0.875rem;font-weight:' + (active?'700':'500') + ';text-decoration:none;color:' + (active?'#0E7C66':'#4B5563') + ';background:' + (active?'#ECFDF5':'transparent') + ';transition:all 0.15s;white-space:nowrap" onmouseover="if(!this.classList.contains(\'pp-active\'))this.style.background=\'#F3F4F6\'" onmouseout="this.style.background=\'' + (active?'#ECFDF5':'transparent') + '\'">' + n.label + '</a>';
    }).join('');

    if (mnav) {
      mnav.innerHTML = navItems().map(function(n) {
        var active = here === n.key;
        return '<a href="' + n.href + '" onclick="window.PPChrome&&window.PPChrome.closeMobile()" style="display:block;padding:12px 14px;border-radius:12px;font-size:0.95rem;font-weight:' + (active?'700':'500') + ';text-decoration:none;color:' + (active?'#0E7C66':'#111827') + ';background:' + (active?'#ECFDF5':'transparent') + ';transition:background 0.15s" onmouseover="this.style.background=\'#F3F4F6\'" onmouseout="this.style.background=\'' + (active?'#ECFDF5':'transparent') + '\'">' + n.label + '</a>';
      }).join('');
    }

    var u = user();
    var box = document.getElementById('pp-mobile-user');
    if (box) {
      if (u) {
        box.innerHTML = '<a href="#/perfil" onclick="window.PPChrome&&window.PPChrome.closeMobile()" style="display:flex;align-items:center;gap:8px;color:#111827;font-weight:600;text-decoration:none;padding:4px 0">'
          + '<span style="width:28px;height:28px;border-radius:50%;background:#0E7C66;color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700">' + (u.name||u.email||'U')[0].toUpperCase() + '</span>Mi perfil</a>'
          + '<button id="pp-logout" style="margin-top:6px;background:none;border:none;cursor:pointer;color:#DC2626;font-weight:600;font-size:0.875rem;padding:4px 0;text-align:left;display:block">Cerrar sesión</button>';
        var lo = document.getElementById('pp-logout');
        if (lo) lo.addEventListener('click', function() {
          try { localStorage.removeItem('pp_token'); localStorage.removeItem('pp_user'); } catch {}
          closeMobile(); location.hash = '#/';
        });
      } else {
        box.innerHTML = '<a href="#/auth" onclick="window.PPChrome&&window.PPChrome.closeMobile()" style="color:#0E7C66;font-weight:600;text-decoration:none">Ingresar con mi correo</a>';
      }
    }

    // Panel del menú móvil — siempre claro
    var panel = document.querySelector('#pp-mobile > div:last-child');
    if (panel) panel.style.background = 'white';
    document.querySelectorAll('#pp-mobile-nav a').forEach(function(a) {
      if (a.style.color !== '#0E7C66') a.style.color = '#111827';
    });
  }

  // ── Menú móvil ───────────────────────────────────────────────────────
  var _scrollHandler = null;
  function openMobile() {
    var m = document.getElementById('pp-mobile');
    if (!m) return;
    m.style.display = 'block';
    m.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'relative';
    var b = document.getElementById('pp-burger');
    if (b) {
      b.setAttribute('aria-expanded', 'true');
      var icon = b.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = 'close';
    }
    renderNav();
    // Cerrar al hacer scroll (una vez)
    if (_scrollHandler) window.removeEventListener('scroll', _scrollHandler);
    _scrollHandler = function() { closeMobile(); };
    window.addEventListener('scroll', _scrollHandler, { passive: true, once: true });
  }
  function closeMobile() {
    var m = document.getElementById('pp-mobile');
    if (!m) return;
    m.style.display = 'none';
    m.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.body.style.position = '';
    var b = document.getElementById('pp-burger');
    if (b) {
      b.setAttribute('aria-expanded', 'false');
      var icon = b.querySelector('.material-symbols-outlined');
      if (icon) icon.textContent = 'menu';
    }
    if (_scrollHandler) {
      window.removeEventListener('scroll', _scrollHandler);
      _scrollHandler = null;
    }
  }

  // ── Responsive resize ────────────────────────────────────────────────
  var _resizeTimer;
  window.addEventListener('resize', function() {
    clearTimeout(_resizeTimer);
    _resizeTimer = setTimeout(function() {
      renderNav();
      if (window.innerWidth >= 1024) closeMobile();
    }, 100);
  });

  // ── Ajustar sm-flex (simular sm:flex de Tailwind) ────────────────────
  function applySMFlex() {
    var els = document.querySelectorAll('.sm-flex');
    var sm = window.innerWidth >= 640;
    els.forEach(function(el) { el.style.display = sm ? 'flex' : 'none'; });
  }
  window.addEventListener('resize', applySMFlex);

  // ── Mount ────────────────────────────────────────────────────────────
  function mount() {
    var host = document.getElementById('pp-header-host');
    if (!host) return;
    host.innerHTML = headerHTML();

    initTheme();
    renderNav();
    applySMFlex();

    // Burger
    var burger = document.getElementById('pp-burger');
    if (burger) burger.addEventListener('click', function() {
      var m = document.getElementById('pp-mobile');
      m && m.style.display !== 'none' ? closeMobile() : openMobile();
    });

    // Backdrop
    var bd = document.getElementById('pp-mobile-backdrop');
    if (bd) bd.addEventListener('click', closeMobile);

    // Toggle tema — eliminado (solo modo claro)
    var themeBtn = document.getElementById('pp-theme');
    if (themeBtn) themeBtn.addEventListener('click', function() { applyTheme(); });

    // Toggle tema — menú móvil — eliminado (solo modo claro)
    var mTheme = document.getElementById('pp-mobile-theme');
    if (mTheme) mTheme.addEventListener('click', function() { applyTheme(); });

    // Cambio de ruta
    window.addEventListener('hashchange', function() { closeMobile(); renderNav(); });

    // ESC
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') closeMobile(); });
  }

  window.PPChrome = { mount: mount, renderNav: renderNav, applyTheme: applyTheme, closeMobile: closeMobile };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mount);
  } else {
    mount();
  }
})();
