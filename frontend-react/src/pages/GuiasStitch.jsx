// Migrado desde .stitch/designs/ — componente GuiasStitch
export default function GuiasStitch(){
  return (
    <div className="stitch-root">
<header className="fixed top-0 left-0 w-full z-50 bg-surface-light border-b border-border-light shadow-[0_1px_8px_rgba(20,32,27,0.04)]"><div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between"><div className="flex items-center gap-space-xl"><a className="flex items-center gap-space-sm group" data-path="ofertas" href="/ofertas"><div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm group-hover:bg-primary-container transition-colors"><span className="material-symbols-outlined text-[22px]">work</span></div><span className="font-headline-s text-headline-s text-ink-light tracking-tight">Práctica<span className="text-primary font-extrabold">PE</span></span></a><nav className="hidden md:flex items-center gap-space-lg h-16" data-active-classes="text-primary font-bold border-b-2 border-primary"><a className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors font-body-m text-body-m" data-path="ofertas" href="/ofertas">Ofertas</a><a className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors font-body-m text-body-m" data-path="empresas" href="/empresas">Empresas</a><a className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors font-body-m text-body-m" data-path="guias" href="/guias">Guías</a><a className="h-full flex items-center text-on-surface-variant hover:text-primary transition-colors font-body-m text-body-m" data-path="contacto" href="/contacto">Contacto</a></nav></div><div className="flex items-center gap-space-md"><span aria-label="Cambiar tema" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button"><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0s-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0z"></path></svg></span><span className="hidden sm:inline-flex items-center justify-center font-headline-s text-body-m font-semibold text-primary hover:text-on-primary-container px-space-md py-space-sm rounded-full transition-colors" data-path="login">Ingresar</span><span className="inline-flex items-center justify-center font-headline-s text-body-m font-bold bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary px-space-lg py-space-sm rounded-full shadow-[0_2px_8px_rgba(0,97,79,0.25)] transition-all" data-path="registro">Registrarme</span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-space-xs"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-16 bg-background flex-1"><div className="flex flex-col w-full">
{/* Cabecera de Página & Breadcrumb */}
<section className="w-full relative overflow-hidden bg-surface-container-low py-space-xl">
<div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-primary-container-light opacity-50 blur-3xl pointer-events-none"></div>
<div className="absolute -left-20 bottom-0 w-80 h-80 rounded-full bg-accent-container-light opacity-40 blur-3xl pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-margin relative z-10">
{/* Breadcrumb */}
<nav aria-label="Migas de pan" className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s mb-space-md">
<a className="hover:text-primary transition-colors flex items-center gap-1" data-path="ofertas" href="/">
<span className="material-symbols-outlined text-[16px]">home</span>
<span>Inicio</span>
</a>
<span className="text-outline-variant">/</span>
<a className="hover:text-primary transition-colors" data-path="guias" href="/guias">Guías</a>
<span className="text-outline-variant">/</span>
<span aria-current="page" className="text-ink-light font-semibold">Cómo funciona</span>
</nav>
{/* Badge de Estado */}
<div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-primary-container-light text-primary font-label text-label tracking-wider uppercase mb-space-sm shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        GUÍA DEL CANDIDATO
      </div>
{/* Título & Subtítulo */}
<div className="max-w-3xl space-y-space-sm">
<h1 className="font-display text-display text-ink-light tracking-tight">
          Cómo funciona <span className="text-primary">PrácticaPE</span>
</h1>
<p className="font-body-l text-body-l text-ink-secondary-light leading-relaxed">
          Conoce los pasos esenciales para encontrar y postular a tu próxima práctica formativa en Piura.
        </p>
</div>
{/* Fila de Chips Contextuales */}
<div className="flex flex-wrap items-center gap-space-xs mt-space-lg pt-space-xs">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light text-on-surface-variant font-body-s text-body-s shadow-sm">
<span className="material-symbols-outlined text-[16px] text-primary">school</span>
          Candidatos
        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light text-on-surface-variant font-body-s text-body-s shadow-sm">
<span className="material-symbols-outlined text-[16px] text-accent-light">linear_scale</span>
          Paso a paso
        </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light text-on-surface-variant font-body-s text-body-s shadow-sm">
<span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
          Perú
        </span>
</div>
</div>
</section>
{/* SECCIÓN 1: Tu recorrido en seis pasos */}
<section className="w-full py-space-xl">
<div className="max-w-[1200px] mx-auto px-margin">
{/* Encabezado de Sección */}
<div className="mb-space-xl text-left max-w-2xl">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="w-6 h-1 bg-primary rounded-full"></span>
<span className="font-label text-label uppercase tracking-widest text-primary">Ruta de aprendizaje y postulación</span>
</div>
<h2 className="font-headline-l text-headline-l text-ink-light tracking-tight">
          Tu recorrido en seis pasos
        </h2>
<p className="font-body-m text-body-m text-ink-secondary-light mt-space-xs">
          Un proceso ágil, estructurado y sin barreras burocráticas para acceder a vacantes formativas con respaldo normativo.
        </p>
</div>
{/* Rejilla de 6 Pasos (3 columnas x 2 filas) */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
{/* Paso 1 */}
<div className="group relative bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">person_add</span>
</div>
<span className="font-display text-headline-l text-outline-variant group-hover:text-primary transition-colors select-none">1</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-xs">Crea tu cuenta</h3>
<p className="font-body-m text-body-m text-ink-secondary-light">
              Regístrate con tu correo y define tu perfil de candidato para comenzar tu postulación.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label text-label text-primary">
<span>PASO INICIAL</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</div>
</div>
{/* Paso 2 */}
<div className="group relative bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">badge</span>
</div>
<span className="font-display text-headline-l text-outline-variant group-hover:text-primary transition-colors select-none">2</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-xs">Completa tu perfil</h3>
<p className="font-body-m text-body-m text-ink-secondary-light">
              Añade tu carrera, ciclo, distrito, disponibilidad y tu hoja de vida actualizada.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label text-label text-ink-secondary-light group-hover:text-primary transition-colors">
<span>INFORMACIÓN CLAVE</span>
<span className="material-symbols-outlined text-[14px]">edit_note</span>
</div>
</div>
{/* Paso 3 */}
<div className="group relative bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary-container-light group-hover:bg-accent-light transition-colors"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">manage_search</span>
</div>
<span className="font-display text-headline-l text-outline-variant group-hover:text-primary transition-colors select-none">3</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-xs">Encuentra tu práctica</h3>
<p className="font-body-m text-body-m text-ink-secondary-light">
              Filtra por distrito, modalidad y tipo de oportunidad formativa según tus intereses.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label text-label text-ink-secondary-light group-hover:text-primary transition-colors">
<span>EXPLORACIÓN DIRIGIDA</span>
<span className="material-symbols-outlined text-[14px]">filter_alt</span>
</div>
</div>
{/* Paso 4 */}
<div className="group relative bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">send</span>
</div>
<span className="font-display text-headline-l text-outline-variant group-hover:text-primary transition-colors select-none">4</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-xs">Postula en un clic</h3>
<p className="font-body-m text-body-m text-ink-secondary-light">
              Adjunta tus documentos solicitados y envía tu postulación de forma directa y ordenada.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label text-label text-ink-secondary-light group-hover:text-primary transition-colors">
<span>ENVÍO INMEDIATO</span>
<span className="material-symbols-outlined text-[14px]">touch_app</span>
</div>
</div>
{/* Paso 5 */}
<div className="group relative bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
<span className="material-symbols-outlined text-[24px]">monitoring</span>
</div>
<span className="font-display text-headline-l text-outline-variant group-hover:text-primary transition-colors select-none">5</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-xs">Haz seguimiento</h3>
<p className="font-body-m text-body-m text-ink-secondary-light">
              Consulta el estado de cada postulación y recibe avisos oportunos desde tu panel.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label text-label text-ink-secondary-light group-hover:text-primary transition-colors">
<span>TRAZABILIDAD TOTAL</span>
<span className="material-symbols-outlined text-[14px]">notifications_active</span>
</div>
</div>
{/* Paso 6 */}
<div className="group relative bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden">
<div className="absolute top-0 left-0 w-1.5 h-full bg-accent-light"></div>
<div>
<div className="flex items-center justify-between mb-space-md">
<div className="w-12 h-12 rounded-[12px] bg-accent-container-light flex items-center justify-center text-accent-light group-hover:bg-accent-light group-hover:text-surface-light transition-colors">
<span className="material-symbols-outlined text-[24px]">workspace_premium</span>
</div>
<span className="font-display text-headline-l text-accent-light select-none">6</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-xs">Empieza tu práctica</h3>
<p className="font-body-m text-body-m text-ink-secondary-light">
              Coordina la entrevista final y el inicio formal de actividades con la empresa elegida.
            </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center gap-1 font-label text-label text-accent-light">
<span>CONVENIO ACTIVO</span>
<span className="material-symbols-outlined text-[14px]">done_all</span>
</div>
</div>
</div>
{/* Tarjeta destacada inferior */}
<div className="mt-space-xl bg-primary-container-light rounded-[16px] p-space-lg md:p-space-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">pin_drop</span>
</div>
<div>
<h4 className="font-headline-s text-headline-s text-ink-light">Tu próxima práctica está en Piura</h4>
<p className="font-body-m text-body-m text-ink-secondary-light">Explora las convocatorias vigentes de empresas formales e instituciones de la región.</p>
</div>
</div>
<a className="shrink-0 inline-flex items-center justify-center font-headline-s text-body-m font-bold bg-primary text-on-primary hover:bg-primary-container px-space-xl py-space-sm rounded-full shadow-[0_2px_8px_rgba(0,97,79,0.25)] transition-all" data-path="ofertas" href="/ofertas">
          Explorar ofertas
        </a>
</div>
</div>
</section>
{/* SECCIÓN 2: ¿Qué necesitas? */}
<section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="mb-space-xl max-w-2xl">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="w-6 h-1 bg-primary rounded-full"></span>
<span className="font-label text-label uppercase tracking-widest text-primary">Requisitos previos</span>
</div>
<h2 className="font-headline-l text-headline-l text-ink-light tracking-tight">
          ¿Qué necesitas?
        </h2>
<p className="font-body-m text-body-m text-ink-secondary-light mt-space-xs">
          Verifica que cuentas con estos elementos indispensables antes de remitir tus postulaciones.
        </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* Checklist 2 Columnas */}
<div className="lg:col-span-7 bg-surface-light p-space-xl rounded-[16px] shadow-sm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-lg">
{/* Columna 1 */}
<div className="space-y-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary-container-light flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<p className="font-body-m text-body-m text-ink-light">
                  Ser estudiante o egresado de una institución de la región.
                </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary-container-light flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<p className="font-body-m text-body-m text-ink-light">
                  Contar con documento de identidad vigente.
                </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary-container-light flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<p className="font-body-m text-body-m text-ink-light">
                  Tener un correo electrónico activo.
                </p>
</div>
</div>
{/* Columna 2 */}
<div className="space-y-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary-container-light flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<p className="font-body-m text-body-m text-ink-light">
                  Disponer de una hoja de vida actualizada.
                </p>
</div>
<div className="flex items-start gap-space-sm">
<div className="w-7 h-7 rounded-full bg-primary-container-light flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[18px]">check</span>
</div>
<p className="font-body-m text-body-m text-ink-light">
                  Según la oferta, convenio o autorización de tu institución de estudios.
                </p>
</div>
</div>
</div>
<div className="mt-space-lg pt-space-md border-t border-surface-container flex items-center gap-space-sm text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[18px] text-accent-light">lightbulb</span>
<span>Tip: Mantén tus documentos en formato PDF para asegurar una lectura óptima por los evaluadores.</span>
</div>
</div>
{/* Banner de Gratuidad & Aviso Destacado */}
<div className="lg:col-span-5 bg-surface-light rounded-[16px] p-space-xl shadow-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-accent-container-light rounded-bl-full opacity-60"></div>
<div className="relative z-10 space-y-space-md">
<div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-on-primary shadow-sm">
<span className="material-symbols-outlined text-[24px]">verified_user</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light">Compromiso de Gratuidad</h3>
<p className="font-body-m text-body-m text-ink-secondary-light leading-relaxed">
<strong className="text-primary font-semibold">Importante:</strong> La plataforma y el proceso de postulación son completamente gratuitos para los estudiantes y egresados. No se realiza ningún cobro al postulante.
            </p>
<div className="p-space-sm rounded-lg bg-surface-container-low text-ink-secondary-light font-body-s text-body-s flex items-center gap-space-xs">
<span className="material-symbols-outlined text-[16px] text-primary">policy</span>
<span>Protección activa contra cobros indebidos</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECCIÓN 3: Preguntas frecuentes */}
<section className="w-full py-space-xl">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="mb-space-xl max-w-2xl">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="w-6 h-1 bg-primary rounded-full"></span>
<span className="font-label text-label uppercase tracking-widest text-primary">Dudas resueltas</span>
</div>
<h2 className="font-headline-l text-headline-l text-ink-light tracking-tight">
          Preguntas frecuentes
        </h2>
<p className="font-body-m text-body-m text-ink-secondary-light mt-space-xs">
          Respuestas concretas para orientarte en cada etapa del proceso formativo laboral.
        </p>
</div>
{/* Acordeón nativo estilizado */}
<div className="max-w-3xl space-y-space-md">
{/* FAQ 1 */}
<details className="group bg-surface-light rounded-[16px] shadow-sm open:shadow-md transition-all duration-200">
<summary className="list-none flex items-center justify-between p-space-lg cursor-pointer select-none">
<div className="flex items-center gap-space-md pr-space-md">
<span className="w-7 h-7 rounded-full bg-primary-container-light text-primary flex items-center justify-center text-body-s font-bold shrink-0">1</span>
<span className="font-headline-s text-body-l font-semibold text-ink-light">¿La plataforma tiene costo para los candidatos?</span>
</div>
<span className="material-symbols-outlined text-ink-secondary-light group-open:rotate-180 transition-transform shrink-0">expand_more</span>
</summary>
<div className="px-space-lg pb-space-lg pt-0 text-ink-secondary-light font-body-m text-body-m leading-relaxed border-t border-surface-container">
<p className="pt-space-md">
              No, el acceso a la plataforma y todas las postulaciones son totalmente gratuitas. PrácticaPE busca fomentar oportunidades transparentes sin intermediación con costo para los postulantes.
            </p>
</div>
</details>
{/* FAQ 2 */}
<details className="group bg-surface-light rounded-[16px] shadow-sm open:shadow-md transition-all duration-200">
<summary className="list-none flex items-center justify-between p-space-lg cursor-pointer select-none">
<div className="flex items-center gap-space-md pr-space-md">
<span className="w-7 h-7 rounded-full bg-primary-container-light text-primary flex items-center justify-center text-body-s font-bold shrink-0">2</span>
<span className="font-headline-s text-body-l font-semibold text-ink-light">¿Las prácticas siempre tienen subvención?</span>
</div>
<span className="material-symbols-outlined text-ink-secondary-light group-open:rotate-180 transition-transform shrink-0">expand_more</span>
</summary>
<div className="px-space-lg pb-space-lg pt-0 text-ink-secondary-light font-body-m text-body-m leading-relaxed border-t border-surface-container">
<p className="pt-space-md">
              Las oportunidades formativas publicadas en el marco formal peruano contemplan una subvención económica para el practicante, además de las coberturas de salud estipuladas. Cada convocatoria detalla las condiciones de la vacante.
            </p>
</div>
</details>
{/* FAQ 3 */}
<details className="group bg-surface-light rounded-[16px] shadow-sm open:shadow-md transition-all duration-200">
<summary className="list-none flex items-center justify-between p-space-lg cursor-pointer select-none">
<div className="flex items-center gap-space-md pr-space-md">
<span className="w-7 h-7 rounded-full bg-primary-container-light text-primary flex items-center justify-center text-body-s font-bold shrink-0">3</span>
<span className="font-headline-s text-body-l font-semibold text-ink-light">¿Cómo valido mi condición de estudiante o egresado?</span>
</div>
<span className="material-symbols-outlined text-ink-secondary-light group-open:rotate-180 transition-transform shrink-0">expand_more</span>
</summary>
<div className="px-space-lg pb-space-lg pt-0 text-ink-secondary-light font-body-m text-body-m leading-relaxed border-t border-surface-container">
<p className="pt-space-md">
              Al completar tu perfil puedes registrar tu institución de procedencia y adjuntar tu constancia de estudios o de matrícula. Esto permite a las empresas cotejar tu ciclo de estudios.
            </p>
</div>
</details>
{/* FAQ 4 */}
<details className="group bg-surface-light rounded-[16px] shadow-sm open:shadow-md transition-all duration-200">
<summary className="list-none flex items-center justify-between p-space-lg cursor-pointer select-none">
<div className="flex items-center gap-space-md pr-space-md">
<span className="w-7 h-7 rounded-full bg-primary-container-light text-primary flex items-center justify-center text-body-s font-bold shrink-0">4</span>
<span className="font-headline-s text-body-l font-semibold text-ink-light">¿Cuánto tarda el proceso de selección?</span>
</div>
<span className="material-symbols-outlined text-ink-secondary-light group-open:rotate-180 transition-transform shrink-0">expand_more</span>
</summary>
<div className="px-space-lg pb-space-lg pt-0 text-ink-secondary-light font-body-m text-body-m leading-relaxed border-t border-surface-container">
<p className="pt-space-md">
              El tiempo de revisión depende de cada organización convocante y del cronograma de cada vacante. A través de tu panel podrás revisar las actualizaciones de cada postulación.
            </p>
</div>
</details>
{/* FAQ 5 */}
<details className="group bg-surface-light rounded-[16px] shadow-sm open:shadow-md transition-all duration-200">
<summary className="list-none flex items-center justify-between p-space-lg cursor-pointer select-none">
<div className="flex items-center gap-space-md pr-space-md">
<span className="w-7 h-7 rounded-full bg-primary-container-light text-primary flex items-center justify-center text-body-s font-bold shrink-0">5</span>
<span className="font-headline-s text-body-l font-semibold text-ink-light">¿Puedo postular a varias ofertas a la vez?</span>
</div>
<span className="material-symbols-outlined text-ink-secondary-light group-open:rotate-180 transition-transform shrink-0">expand_more</span>
</summary>
<div className="px-space-lg pb-space-lg pt-0 text-ink-secondary-light font-body-m text-body-m leading-relaxed border-t border-surface-container">
<p className="pt-space-md">
              Sí, puedes postular a distintas convocatorias que sean afines a tu especialidad y horarios disponibles. Te recomendamos seleccionar aquellas que se ajusten mejor a tu plan formativo.
            </p>
</div>
</details>
</div>
</div>
</section>
{/* SECCIÓN 4: El marco de las prácticas en el Perú */}
<section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="mb-space-xl max-w-2xl">
<div className="flex items-center gap-space-xs mb-space-xs">
<span className="w-6 h-1 bg-primary rounded-full"></span>
<span className="font-label text-label uppercase tracking-widest text-primary">Contexto Legal Formativo</span>
</div>
<h2 className="font-headline-l text-headline-l text-ink-light tracking-tight">
          El marco de las prácticas en el Perú
        </h2>
<p className="font-body-m text-body-m text-ink-secondary-light mt-space-xs">
          Directrices y bases formativas que garantizan una experiencia formativa transparente y respetuosa.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/* Tarjeta 1 */}
<div className="bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[24px]">account_balance</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-sm">Modalidades formativas</h3>
<p className="font-body-m text-body-m text-ink-secondary-light leading-relaxed">
              Distinción formal entre prácticas preprofesionales (para estudiantes durante su ciclo regular de formación) y prácticas profesionales (orientadas a egresados recientes para su inserción técnica).
            </p>
</div>
<div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center gap-1.5 text-primary font-label text-label uppercase">
<span className="material-symbols-outlined text-[16px]">menu_book</span>
<span>Normativa vigente</span>
</div>
</div>
{/* Tarjeta 2 */}
<div className="bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[24px]">draw</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-sm">Convenio institucional</h3>
<p className="font-body-m text-body-m text-ink-secondary-light leading-relaxed">
              Respaldo del acuerdo tripartito formalizado entre la institución educativa de procedencia, el centro laboral receptor y el propio estudiante practicante.
            </p>
</div>
<div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center gap-1.5 text-primary font-label text-label uppercase">
<span className="material-symbols-outlined text-[16px]">handshake</span>
<span>Acuerdo tripartito</span>
</div>
</div>
{/* Tarjeta 3 */}
<div className="bg-surface-light rounded-[16px] p-space-lg shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-[12px] bg-primary-container-light flex items-center justify-center text-primary mb-space-md">
<span className="material-symbols-outlined text-[24px]">schedule</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-sm">Jornada y condiciones</h3>
<p className="font-body-m text-body-m text-ink-secondary-light leading-relaxed">
              Cumplimiento estricto de las jornadas formativas acordes con los periodos académicos, goce de descanso semanal y la entrega puntual de la subvención económica estipulada.
            </p>
</div>
<div className="mt-space-lg pt-space-sm border-t border-surface-container flex items-center gap-1.5 text-primary font-label text-label uppercase">
<span className="material-symbols-outlined text-[16px]">verified</span>
<span>Derechos formativos</span>
</div>
</div>
</div>
</div>
</section>
{/* CTA FINAL: ¿Listo para empezar? */}
<section className="w-full py-space-xl">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="relative bg-gradient-to-r from-primary-container-light via-surface-light to-accent-container-light rounded-[16px] p-space-xl md:p-space-xl shadow-md overflow-hidden">
<div className="max-w-2xl space-y-space-md relative z-10">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light text-primary font-label text-label uppercase shadow-sm">
<span className="material-symbols-outlined text-[16px]">rocket_launch</span>
            Tu primer paso
          </div>
<h2 className="font-headline-l text-headline-l text-ink-light tracking-tight">
            ¿Listo para empezar?
          </h2>
<p className="font-body-l text-body-l text-ink-secondary-light">
            Crea tu perfil en minutos y descubre las vacantes formativas disponibles en Piura.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-md pt-space-xs">
{/* Botón interactivo de registro con estado de carga */}
<button className="inline-flex items-center justify-center font-headline-s text-body-m font-bold bg-primary text-on-primary hover:bg-primary-container px-space-xl py-space-sm rounded-full shadow-[0_2px_8px_rgba(0,97,79,0.25)] transition-all gap-space-xs" id="cta-register-btn" type="button">
<span id="cta-btn-text">Crear mi cuenta</span>
<span className="hidden animate-spin material-symbols-outlined text-[18px]" id="cta-btn-spinner">progress_activity</span>
</button>
<a className="inline-flex items-center justify-center font-headline-s text-body-m font-semibold text-primary hover:text-on-primary-container px-space-lg py-space-sm rounded-full bg-surface-light shadow-sm transition-colors" data-path="ofertas" href="/ofertas">
              Ver ofertas disponibles
            </a>
</div>
</div>
<div className="absolute -right-10 -bottom-10 opacity-15 pointer-events-none hidden md:block">
<span className="material-symbols-outlined text-[240px] text-primary">school</span>
</div>
</div>
</div>
</section>
{/* Script interactivo seguro y liviano para simular estado de envío */}

</div></main><footer className="w-full bg-surface-dark text-ink-dark"><div className="max-w-[1200px] mx-auto px-margin pt-space-xl pb-space-lg"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl mb-space-xl"><div className="lg:col-span-2 space-y-space-md pr-space-md"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary"><span className="material-symbols-outlined text-[20px]">work</span></div><span className="font-headline-s text-headline-s text-white tracking-tight">Práctica<span className="text-primary-dark font-extrabold">PE</span></span></div><p className="font-body-m text-body-m text-ink-secondary-dark max-w-sm leading-relaxed">El punto de encuentro digital para prácticas preprofesionales y profesionales en el norte peruano. Conectando talento universitario emergente con empresas formales de Piura y todo el país.</p></div><div><h3 className="font-headline-s text-headline-s text-white mb-space-md">Candidatos</h3><ul className="space-y-space-sm font-body-m text-body-m text-ink-secondary-dark"><li><a className="hover:text-primary-dark transition-colors" data-path="ofertas" href="/ofertas">Ver Ofertas Laborales</a></li><li><a className="hover:text-primary-dark transition-colors" data-path="guias" href="/guias">Guías y Consejos</a></li><li><span className="hover:text-primary-dark transition-colors">Preguntas Frecuentes</span></li><li><span className="hover:text-primary-dark transition-colors">Modelo de CV Estudiantil</span></li></ul></div><div><h3 className="font-headline-s text-headline-s text-white mb-space-md">Empleadores</h3><ul className="space-y-space-sm font-body-m text-body-m text-ink-secondary-dark"><li><a className="hover:text-primary-dark transition-colors" data-path="empresas" href="/empresas">Directorio Empresarial</a></li><li><span className="hover:text-primary-dark transition-colors">Publicar Convocatoria</span></li><li><span className="hover:text-primary-dark transition-colors">Convenios Universitarios</span></li><li><span className="hover:text-primary-dark transition-colors">Planes y Verificación</span></li></ul></div><div><h3 className="font-headline-s text-headline-s text-white mb-space-md">Legal</h3><ul className="space-y-space-sm font-body-m text-body-m text-ink-secondary-dark"><li><a className="hover:text-primary-dark transition-colors" href="/terminos">Términos del Servicio</a></li><li><a className="hover:text-primary-dark transition-colors" href="/privacidad">Política de Privacidad</a></li><li><span className="hover:text-primary-dark transition-colors">Ley de Modalidades Formativas</span></li><li><a className="hover:text-primary-dark transition-colors" href="/reclamaciones">Libro de Reclamaciones</a></li></ul></div></div><div className="border-t border-border-dark pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-s text-body-s text-ink-secondary-dark">PrácticaPE — Todos los derechos reservados</p><div className="flex items-center gap-space-md font-body-s text-body-s text-ink-secondary-dark"><span>Piura, Perú</span><span>•</span><span>Modalidades Formativas Laborales</span></div></div></div></footer>
    </div>
  );
}
