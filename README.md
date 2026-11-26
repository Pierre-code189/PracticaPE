# PrácticaPE v2

Plataforma peruana de prácticas preprofesionales y primer empleo en Piura.

> **⚠️ Código dividido en dos repos desde el 2026-11-24.** Este repo queda como *referencia*
> (despliegue en el VPS y vista de conjunto); los cambios nuevos van en:
> - **[PracticaPE-Backend](https://github.com/Pierre-code189/PracticaPE-Backend)** — API FastAPI,
>   recolección y base de datos.
> - **[PracticaPE-Frontend](https://github.com/Pierre-code189/PracticaPE-Frontend)** — React + JSX +
>   Tailwind (`frontend-react/`).

- **v2** (esta rama): reconstrucción desde cero. Diseño 100% Stitch, backend por capas.
- **PruebaPE**: copia del intento anterior (`/root/PruebaPE`), conservada solo como referencia.

## Stack y frontend

- **Frontend:** React + JSX + Tailwind en `frontend-react/`; el build (`npm run build`) se
  genera en `frontend-dist/` y es lo que sirve la API. Rutas sin `#` (`/ofertas`, `/mapa`).
- **Backend:** FastAPI (Python) en `backend/app/` con SQLite; expone la API y los estáticos.
- **Stitch** aporta el design system: `.stitch/designs/*.html` son los diseños fuente y los
  tokens de marca viven en `.stitch/DESIGN.md`.
- Las **10 pantallas del sitio** (7 principales + 3 legales) están migradas a React en
  `frontend-react/src/pages/*Stitch.jsx` y son lo que sirve el dominio principal. El script
  `scripts/convertir_stitch.py` documenta la conversión HTML → JSX. Las pantallas de administración,
  panel, perfiles, postulaciones y publicación se eliminaron del sitio; el backend sigue teniendo
  sus rutas API para la demostración.

## Estado
- Proyecto Stitch `16989794354844657044`, design system `assets/145e3a73db4a45a1906045fca09873b9`.
- Diseño: `.stitch/DESIGN.md` (la sección 6 es el bloque que va en cada prompt de Stitch).

## Verificación por capas
1. **Contrato** de pantallas (RF/RNF) contra los endpoints — `docs/CONTRATO.md`.
2. **API**: pytest + suite de seguridad + E2E de requisitos.
3. **Navegador**: clics reales por página, 0 errores de consola, responsive 360/780/1024.
4. **Consistencia**: todo dato visible sale de la API; nada de contadores ni tarjetas inventadas.
5. **Tests del frontend**: `cd frontend-react && npm test -- --run`.
