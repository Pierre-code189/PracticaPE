// Dialog — adaptado de shadcn/ui (base/ui/dialog: overlay + content + foco + ESC)
const CSS = `
.dialog-overlay{position:fixed;inset:0;background:rgba(11,11,15,.7);z-index:3500;display:grid;place-items:center;padding:16px}
.dialog-content{background:#121218;border:1px solid rgba(255,255,255,.12);padding:24px;max-width:480px;width:100%;box-shadow:0 24px 60px rgba(0,0,0,.55)}
.dialog-title{font-family:"Space Grotesk",sans-serif;font-size:22px;letter-spacing:-.02em;margin:0 0 8px}
.dialog-close{background:transparent;color:#A0A4B0;border:1px solid rgba(255,255,255,.2);padding:8px 14px}`;
const style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);
export function createDialog({ title = '', content = [], actions = [] } = {}) {
  const overlay = document.createElement('div'); overlay.className = 'dialog-overlay'; overlay.dataset.slot = 'dialog';
  const box = document.createElement('div'); box.className = 'dialog-content'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true');
  const h = document.createElement('div'); h.style.display = 'flex'; h.style.justifyContent = 'space-between'; h.style.alignItems = 'center';
  const t = document.createElement('div'); t.className = 'dialog-title'; t.textContent = title;
  const x = document.createElement('button'); x.className = 'dialog-close'; x.textContent = '✕'; x.setAttribute('aria-label', 'Cerrar');
  const close = () => { overlay.remove(); document.removeEventListener('keydown', esc); };
  const esc = e => { if (e.key === 'Escape') close(); };
  x.onclick = close; overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', esc);
  h.append(t, x); box.appendChild(h);
  content.forEach(n => box.appendChild(typeof n === 'string' ? document.createTextNode(n) : n));
  if (actions.length) { const row = document.createElement('div'); row.style.display = 'flex'; row.style.gap = '8px'; row.style.marginTop = '16px'; actions.forEach(n => row.appendChild(n)); box.appendChild(row); }
  overlay.appendChild(box); document.body.appendChild(overlay);
  box.querySelector('textarea,input,button:not(.dialog-close)')?.focus();
  return { close, el: overlay };
}
