// Card — adaptado de shadcn/ui (base/ui/card.tsx: Card/Header/Title/Description/Content/Footer slots)
const CSS = `
.card{background:#121218;border:1px solid rgba(255,255,255,.12);padding:24px}
.card-header{display:grid;gap:4px;margin-bottom:12px}
.card-title{font-family:"Space Grotesk",sans-serif;font-size:20px;letter-spacing:-.02em;margin:0}
.card-description{color:#A0A4B0;font-size:14px;margin:0}
.card-content{}
.card-footer{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px;padding-top:16px;border-top:1px solid rgba(255,255,255,.12)}`;
const style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);
export function createCard({ title = '', description = '', children = [], footer = [] } = {}) {
  const card = document.createElement('div'); card.className = 'card'; card.dataset.slot = 'card';
  if (title || description) {
    const h = document.createElement('div'); h.className = 'card-header'; h.dataset.slot = 'card-header';
    if (title) { const t = document.createElement('div'); t.className = 'card-title'; t.dataset.slot = 'card-title'; t.textContent = title; h.appendChild(t); }
    if (description) { const d = document.createElement('div'); d.className = 'card-description'; d.dataset.slot = 'card-description'; d.textContent = description; h.appendChild(d); }
    card.appendChild(h);
  }
  const c = document.createElement('div'); c.className = 'card-content'; c.dataset.slot = 'card-content';
  children.forEach(n => c.appendChild(typeof n === 'string' ? document.createTextNode(n) : n));
  card.appendChild(c);
  if (footer.length) { const f = document.createElement('div'); f.className = 'card-footer'; f.dataset.slot = 'card-footer'; footer.forEach(n => f.appendChild(n)); card.appendChild(f); }
  return card;
}
