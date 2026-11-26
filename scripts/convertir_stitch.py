"""Convierte un HTML de .stitch/designs/ a un componente React funcional.

Uso: python3 convertir.py <archivo.html> <NombreComponente>
El HTML de Stitch ya usa clases utilitarias de Tailwind; solo se traducen los
atributos HTML a JSX y se retiran los <script> de demostración.
"""
import re
import sys

HTML, COMPONENTE = sys.argv[1], sys.argv[2]
s = open(HTML, encoding="utf-8").read()
b = re.search(r"<body[^>]*>(.*?)</body>", s, re.S).group(1)
b = re.sub(r"<script\b[^>]*>.*?</script>", "", b, flags=re.S | re.I)
b = re.sub(r"<style\b[^>]*>.*?</style>", "", b, flags=re.S | re.I)
b = re.sub(r"\son(?:click|change|submit|input|keydown|keyup|load|mouseover|focus|blur|scroll)=\"[^\"]*\"", "", b, flags=re.I)
b = re.sub(r"\sclass=\"", ' className="', b)
b = re.sub(r"\sfor=\"", ' htmlFor="', b)
for a, d in [("tabindex", "tabIndex"), ("maxlength", "maxLength"), ("readonly", "readOnly"),
             ("autocomplete", "autoComplete"), ("colspan", "colSpan"), ("rowspan", "rowSpan")]:
    b = re.sub(r"\s" + a + '="', " " + d + '="', b)


def style_to_jsx(m):
    out = []
    for p in m.group(1).split(";"):
        if ":" not in p:
            continue
        k, v = p.split(":", 1)
        k = re.sub(r"-([a-z])", lambda x: x.group(1).upper(), k.strip())
        out.append("%s: '%s'" % (k, v.strip().replace("'", "\\'")))
    return " style={{" + ", ".join(out) + "}}" if out else ""


b = re.sub(r'\sstyle="([^"]*)"', style_to_jsx, b)
b = b.replace("<!--", "{/*").replace("-->", "*/}")
jsx = ("// Migrado desde .stitch/designs/ — componente " + COMPONENTE + "\n"
       "export default function " + COMPONENTE + "(){\n"
       "  return (\n    <div className=\"stitch-root\">\n" + b +
       "\n    </div>\n  );\n}\n")
out = "src/pages/" + COMPONENTE + ".jsx"
open(out, "w").write(jsx)
print(out, len(jsx), "bytes")
