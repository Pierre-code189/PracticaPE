// Button — adaptado de shadcn/ui (base/ui/button.tsx: variantes CVA default/outline/secondary/ghost/destructive)
// Tokens PracticaPE Field.io. Un archivo por componente.
const CSS = `
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:800;font-size:14px;padding:11px 22px;border:1px solid transparent;background:linear-gradient(90deg,#0CE0E5,#5B2EFF);color:#fff;cursor:pointer;transition:filter .15s,transform .1s;white-space:nowrap}
.btn:hover{filter:brightness(1.15)}
.btn:active{transform:translateY(1px)}
.btn:focus-visible{outline:2px solid #0CE0E5;outline-offset:2px}
.btn.outline{background:transparent;color:#fff;border-color:rgba(255,255,255,.28)}
.btn.outline:hover{border-color:#0CE0E5;color:#0CE0E5}
.btn.secondary{background:#fff;color:#000}
.btn.ghost{background:transparent;color:#A0A4B0}
.btn.ghost:hover{color:#fff}
.btn.danger{background:transparent;color:#FF5A5A;border-color:rgba(255,90,90,.5)}
.btn.sm{padding:8px 16px;font-size:13px}
.btn.lg{padding:14px 30px;font-size:15px}
.btn[disabled]{opacity:.5;pointer-events:none}`;
const style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);
export function createButton({ variant = '', size = '', label = '', onClick } = {}) {
  const b = document.createElement('button');
  b.className = 'btn' + (variant ? ' ' + variant : '') + (size ? ' ' + size : '');
  b.dataset.slot = 'button'; b.textContent = label;
  if (onClick) b.onclick = onClick;
  return b;
}
