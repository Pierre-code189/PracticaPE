"""Segunda pasada: repara los <a href="#"> que quedaron tras la primera conversión."""
import glob
import re

BASE = "/root/demo-practicape-stitch/repo/frontend-react/src/pages"
RUTA_POR_PATH = {
    "home": "/",
    "ofertas": "/ofertas",
    "mapa": "/mapa",
    "mapa-ofertas": "/mapa",
    "directorio-de-empresas": "/empresas",
    "como-funciona": "/guias",
    "guias": "/guias",
    "contacto": "/contacto",
}
PROHIBIDOS = ("postulaciones", "ingresar", "publicar", "notificaciones", "perfil")

for f in sorted(glob.glob(BASE + "/*Stitch.jsx")):
    s = open(f).read()
    n = 0

    def uno(m):
        global n
        b = m.group(0)
        if 'href="#"' not in b:
            return b
        txt = re.sub(r"<[^>]+>", " ", b)
        txt = re.sub(r"\s+", " ", txt).strip().lower()
        dp = re.search(r'data-path="([^"]+)"', b)
        destino = RUTA_POR_PATH.get(dp.group(1)) if dp else None
        if not destino:
            for clave, ruta in (("prácticape", "/"), ("inicio", "/"), ("ofertas", "/ofertas"),
                                ("mapa", "/mapa"), ("empresas", "/empresas"),
                                ("guía", "/guias"), ("contacto", "/contacto"),
                                ("privacidad", "/privacidad"), ("términos", "/terminos"),
                                ("reclamaciones", "/reclamaciones")):
                if clave in txt:
                    destino = ruta
                    break
        n += 1
        if destino is None or any(p in txt for p in PROHIBIDOS):
            return re.sub(r'\s+href="#"', "", re.sub(r"^<a\b", "<span", b).replace("</a>", "</span>"))
        return b.replace('href="#"', 'href="%s"' % destino, 1)

    s2 = re.sub(r"<a\b[^>]*>.*?</a>", uno, s, flags=re.S)
    open(f, "w").write(s2)
    print("%-24s reparados=%d  quedan=%d" % (f.split("/")[-1], n, s2.count('href="#"')))
