"""Repara la navegación de los componentes *Stitch.jsx.

Los HTML de Stitch traen <a href="#"> y anclas (#ofertas, #todas-ofertas).
Al convertir solo el <body>, los <script> que las cableaban desaparecieron.
Este script asigna rutas reales de BrowserRouter según el texto del enlace y
neutraliza los enlaces a functions eliminadas del sitio.
"""
import glob
import re

BASE = "/root/demo-practicape-stitch/repo/frontend-react/src/pages"

# Orden importa: primero lo que debe desaparecer del sitio público.
NEUTRALIZAR = (
    "mis postulaciones", "ingresar", "iniciar sesión", "publicar oferta",
    "publicar tu oferta", "cómo funciona para empresas", "postular",
)
RUTAS = (
    ("prácticape", "/"),
    ("practica pe", "/"),
    ("inicio", "/"),
    ("ofertas", "/ofertas"),
    ("empleos", "/ofertas"),
    ("mapa", "/mapa"),
    ("empresas", "/empresas"),
    ("directorio", "/empresas"),
    ("guía", "/guias"),
    ("guias", "/guias"),
    ("cómo funciona", "/guias"),
    ("como funciona", "/guias"),
    ("contacto", "/contacto"),
    ("hablemos", "/contacto"),
    ("privacidad", "/privacidad"),
    ("términos", "/terminos"),
    ("terminos", "/terminos"),
    ("reclamaciones", "/reclamaciones"),
)


def destino(texto):
    t = re.sub(r"\s+", " ", texto.lower()).strip()
    if any(x in t for x in NEUTRALIZAR):
        return None
    for clave, ruta in RUTAS:
        if clave in t:
            return ruta
    return "#"  # sin cambio


def reparar(ruta):
    s = open(ruta).read()
    total_neut = total_ruta = 0

    def uno(m):
        nonlocal total_neut, total_ruta
        bloque = m.group(0)
        texto = re.sub(r"<[^>]+>", " ", bloque)
        texto = re.sub(r"\s+", " ", texto).strip()
        d = destino(texto)
        if d is None:
            # Conserva el estilo, quita la acción: deja de ser clicable.
            total_neut += 1
            bloque = re.sub(r"^<a\b", "<span", bloque)
            bloque = bloque.replace("</a>", "</span>")
            bloque = re.sub(r'\s+href="[^"]*"', "", bloque)
        elif d != "#":
            total_ruta += 1
            bloque = re.sub(r'href="[^"]*"', 'href="%s"' % d, bloque, count=1)
        return bloque

    s2 = re.sub(r"<a\b[^>]*>.*?</a>", uno, s, flags=re.S)
    open(ruta, "w").write(s2)
    return total_ruta, total_neut


for f in sorted(glob.glob(BASE + "/*Stitch.jsx")):
    r, n = reparar(f)
    print("%-24s rutas=%-3d neutralizados=%-3d" % (f.split("/")[-1], r, n))
