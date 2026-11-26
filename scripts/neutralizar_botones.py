"""Neutraliza botones del diseño Stitch que no tienen acción en el sitio público.

- Botón de cambio de tema: se eliminó el modo oscuro.
- Botones "Postular": no hay flujo de postulación en la web pública.
- Se conservan clases y aria-label para no alterar el diseño.
"""
import glob
import re

BASE = "/root/demo-practicape-stitch/repo/frontend-react/src/pages"
PATRON = re.compile(r"<button\b([^>]*)>(.*?)</button>", re.S)

for f in sorted(glob.glob(BASE + "/*Stitch.jsx")):
    s = open(f).read()
    n = 0

    def uno(m):
        global n
        attrs, inner = m.group(1), m.group(2)
        plano = re.sub(r"<[^>]+>", " ", inner)
        plano = re.sub(r"\s+", " ", plano).strip().lower()
        if re.search(r'aria-label="[^"]*(cambiar|modo|tema|claro|oscuro)', attrs, re.I):
            n += 1
            return "<span" + attrs + ">" + inner + "</span>"
        if re.search(r'aria-label="[^"]*postular', attrs, re.I) or "postular" in plano:
            n += 1
            return "<span" + attrs + ">" + inner + "</span>"
        return m.group(0)

    s2 = PATRON.sub(uno, s)
    if n:
        open(f, "w").write(s2)
    print("%-24s neutralizados=%d" % (f.split("/")[-1], n))
