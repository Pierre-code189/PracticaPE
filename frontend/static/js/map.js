let _map = null;
function initMap(elId, markers, center) {
  const el = document.getElementById(elId);
  if (!el || typeof L === "undefined") return null;
  if (_map) { _map.remove(); _map = null; }
  _map = L.map(elId).setView(center || [-5.1948, -80.6308], 12);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
  }).addTo(_map);
  (markers || []).forEach(m => {
    if (m.lat == null || m.lng == null) return;
    L.marker([m.lat, m.lng]).addTo(_map)
      .bindPopup("<b>" + esc(m.title || "Oferta") + "</b><br>" + esc(m.district || ""));
  });
  return _map;
}
