// Migrado desde .stitch/designs/ — componente OfertasStitch
export default function OfertasStitch(){
  return (
    <div className="stitch-root">
<header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-light shadow-[0_1px_8px_rgba(20,32,27,0.05)]"><div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg"><a className="flex items-center gap-space-sm group" data-path="ofertas" href="/ofertas"><div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-[0_1px_2px_rgba(20,32,27,0.05)]"><span className="material-symbols-outlined text-on-primary text-[22px]">work</span></div><div className="flex items-center gap-space-xs"><span className="font-headline-s text-headline-s text-ink-light tracking-tight">Práctica<span className="text-primary">PE</span></span><span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-accent-container-light text-accent-light font-label text-label uppercase ml-space-xs">Piura</span></div></a><nav className="hidden md:flex items-center gap-space-xs p-1 rounded-full bg-surface-container-low" data-active-classes="bg-primary-container-light text-primary font-bold"><a aria-current="page" className="px-space-md py-1.5 rounded-full transition-colors bg-primary-container-light text-primary font-bold" data-path="ofertas" href="/ofertas">Ofertas</a><a className="px-space-md py-1.5 rounded-full text-on-surface-variant font-body-m text-body-m transition-colors hover:bg-surface-container hover:text-on-surface" data-path="mapa" href="/mapa">Mapa</a><a className="px-space-md py-1.5 rounded-full text-on-surface-variant font-body-m text-body-m transition-colors hover:bg-surface-container hover:text-on-surface" data-path="empresas" href="/empresas">Empresas</a><span className="px-space-md py-1.5 rounded-full text-on-surface-variant font-body-m text-body-m transition-colors hover:bg-surface-container hover:text-on-surface" data-path="mis-postulaciones">Mis postulaciones</span></nav></div><div className="flex items-center gap-space-sm"><span aria-label="Cambiar tema" className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">light_mode</span></span><span className="hidden sm:inline-flex items-center justify-center px-space-md py-2 font-body-m text-body-m font-medium text-on-surface-variant hover:text-primary transition-colors" data-path="login">Ingresar</span><span className="inline-flex items-center gap-space-xs px-space-lg py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-semibold shadow-[0_1px_2px_rgba(20,32,27,0.05)] transition-all" data-path="publicar-oferta"><span className="material-symbols-outlined text-[18px]">add_circle</span><span className="hidden lg:inline">Publicar oferta</span></span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0 ml-space-xs"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-16 bg-background"><div className="max-w-[1200px] mx-auto px-margin py-space-xl min-h-[calc(100vh-4rem-20rem)]"><div className="flex flex-col w-full">
{/* ENCABEZADO DE PÁGINA (HERO COMPACTO) */}
<section className="relative bg-surface-light rounded-3xl p-6 md:p-10 mb-8 shadow-sm overflow-hidden">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="absolute right-32 bottom-0 w-48 h-48 rounded-full bg-accent-light/10 blur-2xl pointer-events-none"></div>
<div className="relative z-10 max-w-4xl">
{/* Badge superior */}
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container-light text-primary font-label text-label uppercase tracking-wider mb-4 shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span>Encuentra tu práctica • Región Piura</span>
</div>
{/* Titular H1 */}
<h1 className="font-display text-display text-ink-light tracking-tight mb-3">
        Ofertas de prácticas y empleo en Piura
      </h1>
{/* Subtítulo */}
<p className="font-body-l text-body-l text-ink-secondary-light max-w-2xl mb-8 leading-relaxed">
        Conéctate con más de 120 empresas e instituciones locales formalizadas ante SUNEDU y el Ministerio de Trabajo y Promoción del Empleo.
      </p>
{/* Barra de métricas y controles rápidos */}
<div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-0">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary-container-light text-primary">
<span className="material-symbols-outlined text-[20px]">bolt</span>
</div>
<div>
<span className="font-headline-m text-headline-m text-ink-light tabular-nums">48</span>
<span className="font-body-m text-body-m text-ink-secondary-light ml-1.5 font-medium">ofertas activas en Piura</span>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-secondary-container text-ink-light font-body-m text-body-m font-semibold transition-all hover:shadow-sm" data-path="mapa" href="/mapa">
<span className="material-symbols-outlined text-primary text-[20px]">map</span>
<span>Ver en el mapa</span>
</a>
<div className="relative flex items-center bg-surface-container rounded-full px-3 py-1.5">
<span className="font-body-s text-body-s text-ink-secondary-light mr-2 hidden sm:inline">Ordenar por:</span>
<select aria-label="Ordenar ofertas de prácticas" className="bg-transparent text-ink-light font-body-m text-body-m font-medium focus:outline-none cursor-pointer pr-4 appearance-none">
<option selected="" value="recientes">Más recientes</option>
<option value="remuneracion">Mayor remuneración</option>
<option value="cercania">Más cercanas</option>
</select>
<span className="material-symbols-outlined text-[18px] text-ink-secondary-light pointer-events-none -ml-4">expand_more</span>
</div>
</div>
</div>
</div>
</section>
{/* LAYOUT PRINCIPAL (RETÍCULA 12 COLUMNAS) */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
{/* COLUMNA IZQUIERDA: FILTROS (4 de 12 col) */}
<aside className="lg:col-span-4 sticky top-20 bg-surface-light rounded-2xl p-6 shadow-sm flex flex-col gap-6">
{/* Encabezado de filtros */}
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[22px]">tune</span>
<h2 className="font-headline-s text-headline-s text-ink-light">Filtros de búsqueda</h2>
</div>
<button className="font-body-s text-body-s font-semibold text-primary hover:text-primary-container transition-colors" id="btn-reset-filters" type="button">
          Limpiar todo
        </button>
</div>
{/* Buscador */}
<div className="relative">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-secondary-light text-[20px]">search</span>
<input className="w-full bg-surface-container-low text-ink-light placeholder:text-outline text-body-m font-body-m pl-10 pr-4 py-2.5 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" placeholder="Buscar por cargo, palabra clave..." type="text"/>
</div>
{/* Categoría / Área profesional */}
<div className="flex flex-col gap-3">
<span className="font-label text-label uppercase text-ink-secondary-light tracking-wider">Área profesional</span>
<div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input checked="" className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Administración y Negocios</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">12</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Contabilidad y Finanzas</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">9</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input checked="" className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Ingeniería (Ind., Civil, Sist.)</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">15</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Tecnología y Software</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">8</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Salud y Farmacia</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">4</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Educación y Formación</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">3</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Derecho y Asesoría Legal</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">5</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors group">
<div className="flex items-center gap-2.5">
<input className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
<span className="font-body-m text-body-m text-ink-light group-hover:text-primary transition-colors">Logística, Comercio y Puertos</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light px-2 py-0.5 rounded-full bg-surface-container">7</span>
</label>
</div>
</div>
{/* Modalidad de trabajo */}
<div className="flex flex-col gap-2.5">
<span className="font-label text-label uppercase text-ink-secondary-light tracking-wider">Modalidad</span>
<div className="flex flex-wrap gap-2">
<button className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-semibold shadow-sm" type="button">
            Presencial
          </button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container text-ink-light font-body-m text-body-m hover:bg-surface-container-high transition-colors" type="button">
            Híbrido
          </button>
<button className="px-3.5 py-1.5 rounded-full bg-surface-container text-ink-light font-body-m text-body-m hover:bg-surface-container-high transition-colors" type="button">
            Remoto
          </button>
</div>
</div>
{/* Nivel de experiencia */}
<div className="flex flex-col gap-2.5">
<span className="font-label text-label uppercase text-ink-secondary-light tracking-wider">Experiencia requerida</span>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1 rounded-full bg-primary text-on-primary font-body-s text-body-s font-semibold" type="button">
            Sin experiencia
          </button>
<button className="px-3 py-1 rounded-full bg-surface-container text-ink-light font-body-s text-body-s hover:bg-surface-container-high transition-colors" type="button">
            0 a 1 año
          </button>
<button className="px-3 py-1 rounded-full bg-surface-container text-ink-light font-body-s text-body-s hover:bg-surface-container-high transition-colors" type="button">
            1 a 2 años
          </button>
<button className="px-3 py-1 rounded-full bg-surface-container text-ink-light font-body-s text-body-s hover:bg-surface-container-high transition-colors" type="button">
            Más de 2 años
          </button>
</div>
</div>
{/* Salario Mínimo */}
<div className="flex flex-col gap-2">
<span className="font-label text-label uppercase text-ink-secondary-light tracking-wider">Remuneración mínima</span>
<div className="relative">
<select aria-label="Remuneración mínima mensual" className="w-full bg-surface-container-low text-ink-light font-body-m text-body-m px-3.5 py-2.5 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer">
<option value="500">Desde S/ 500 al mes</option>
<option value="800">Desde S/ 800 al mes</option>
<option selected="" value="1000">Desde S/ 1,000 (Mínimo legal)</option>
<option value="1200">Desde S/ 1,200 al mes</option>
</select>
<span className="material-symbols-outlined absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-secondary-light text-[18px] pointer-events-none">unfold_more</span>
</div>
</div>
{/* Ubicación en Piura (Chips de distrito) */}
<div className="flex flex-col gap-2.5">
<span className="font-label text-label uppercase text-ink-secondary-light tracking-wider">Distrito / Localidad</span>
<div className="flex flex-wrap gap-1.5">
<span className="px-2.5 py-1 rounded-lg bg-primary-container-light text-primary font-body-s text-body-s font-semibold cursor-pointer">Piura (Centro)</span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-ink-secondary-light font-body-s text-body-s hover:bg-surface-container-high cursor-pointer transition-colors">Castilla</span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-ink-secondary-light font-body-s text-body-s hover:bg-surface-container-high cursor-pointer transition-colors">Veintiséis de Octubre</span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-ink-secondary-light font-body-s text-body-s hover:bg-surface-container-high cursor-pointer transition-colors">Catacaos</span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-ink-secondary-light font-body-s text-body-s hover:bg-surface-container-high cursor-pointer transition-colors">Sullana</span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-ink-secondary-light font-body-s text-body-s hover:bg-surface-container-high cursor-pointer transition-colors">Paita</span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-ink-secondary-light font-body-s text-body-s hover:bg-surface-container-high cursor-pointer transition-colors">Talara</span>
<span className="px-2.5 py-1 rounded-lg bg-surface-container text-ink-secondary-light font-body-s text-body-s hover:bg-surface-container-high cursor-pointer transition-colors">Máncora</span>
</div>
</div>
{/* Botones de Acción */}
<div className="flex flex-col sm:flex-row gap-2 pt-2">
<button className="flex-1 py-2.5 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-bold text-center transition-all shadow-sm" type="button">
          Aplicar filtros
        </button>
<button className="py-2.5 px-4 rounded-full bg-surface-container text-ink-secondary-light hover:text-ink-light font-body-m text-body-m font-semibold text-center transition-all" type="button">
          Restablecer
        </button>
</div>
</aside>
{/* COLUMNA DERECHA: RESULTADOS (8 de 12 col) */}
<main className="lg:col-span-8 flex flex-col gap-6">
{/* Barra de chips activos */}
<div className="flex flex-wrap items-center gap-2 pb-1">
<span className="font-body-s text-body-s text-ink-secondary-light font-medium mr-1">Filtros aplicados:</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light text-ink-light font-body-s text-body-s shadow-sm">
<span>Sin experiencia</span>
<button aria-label="Eliminar filtro Sin experiencia" className="text-ink-secondary-light hover:text-error transition-colors flex items-center" type="button">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light text-ink-light font-body-s text-body-s shadow-sm">
<span className="tabular-nums">S/ 1,000+</span>
<button aria-label="Eliminar filtro Salario mínimo" className="text-ink-secondary-light hover:text-error transition-colors flex items-center" type="button">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-light text-ink-light font-body-s text-body-s shadow-sm">
<span>Presencial</span>
<button aria-label="Eliminar filtro Presencial" className="text-ink-secondary-light hover:text-error transition-colors flex items-center" type="button">
<span className="material-symbols-outlined text-[14px]">close</span>
</button>
</span>
<button className="text-primary hover:text-primary-container font-body-s text-body-s font-semibold underline underline-offset-4 ml-2" type="button">
          Limpiar filtros
        </button>
</div>
{/* RETÍCULA DE OFERTAS (6 TARJETAS) */}
<div className="flex flex-col gap-4">
{/* TARJETA 1: Terminal Portuario Paita */}
<article className="group relative bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border-l-[3px] border-l-accent-light">
<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
{/* Monograma TP */}
<div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-display font-bold text-headline-s shrink-0 shadow-sm">
                TP
              </div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-body-s text-body-s font-semibold text-ink-light truncate">Terminal Portuario Paita S.A.</span>
<span className="material-symbols-outlined text-primary text-[16px] shrink-0" title="Empresa Verificada">verified</span>
<span className="text-outline text-body-s">•</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Hace 2 horas</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors leading-snug">
                  Practicante Preprofesional de Operaciones Portuarias
                </h3>
{/* Metadatos de la oferta */}
<div className="flex flex-wrap items-center gap-y-2 gap-x-3 mt-3">
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                    Paita (Puerto)
                  </span>
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">business_center</span>
                    Presencial
                  </span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container text-ink-light font-body-s text-body-s font-medium">
                    Convenio UDEP / UNP
                  </span>
</div>
</div>
</div>
{/* Acciones y Remuneración */}
<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 pt-3 sm:pt-0 border-t-0 sm:border-0">
<span className="px-3 py-1 rounded-full bg-accent-container-light text-ink-light font-label text-body-m font-bold tabular-nums">
                S/ 1,300 <span className="text-label font-normal text-ink-secondary-light">/mes</span>
</span>
<div className="flex items-center gap-2">
<button aria-label="Guardada" className="w-9 h-9 rounded-full bg-primary-container-light text-primary flex items-center justify-center transition-colors" title="Oferta guardada" type="button">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>bookmark</span>
</button>
<span className="px-4 py-1.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-bold transition-all shadow-sm" type="button">
                  Postular
                </span>
</div>
</div>
</div>
</article>
{/* TARJETA 2: Caja Municipal de Piura */}
<article className="group relative bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border-l-[3px] border-l-accent-light">
<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
{/* Monograma CP */}
<div className="w-12 h-12 rounded-xl bg-accent-container-light text-tertiary-container flex items-center justify-center font-display font-bold text-headline-s shrink-0 shadow-sm">
                CP
              </div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-body-s text-body-s font-semibold text-ink-light truncate">Caja Municipal de Piura</span>
<span className="material-symbols-outlined text-primary text-[16px] shrink-0" title="Empresa Verificada">verified</span>
<span className="text-outline text-body-s">•</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Hace 4 horas</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors leading-snug">
                  Asistente Junior de Facturación y Finanzas
                </h3>
<div className="flex flex-wrap items-center gap-y-2 gap-x-3 mt-3">
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                    Piura (Centro)
                  </span>
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">devices</span>
                    Híbrido
                  </span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-ink-secondary-light font-body-s text-body-s">
                    Egresado / Bachiller
                  </span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 pt-3 sm:pt-0">
<span className="px-3 py-1 rounded-full bg-accent-container-light text-ink-light font-label text-body-m font-bold tabular-nums">
                S/ 1,450 <span className="text-label font-normal text-ink-secondary-light">/mes</span>
</span>
<div className="flex items-center gap-2">
<button aria-label="Guardar oferta" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-ink-secondary-light hover:text-ink-light flex items-center justify-center transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<span className="px-4 py-1.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-bold transition-all shadow-sm" type="button">
                  Postular
                </span>
</div>
</div>
</div>
</article>
{/* TARJETA 3: Grupo H&M Piura (ESTADO ESPECIAL: Ya postulaste) */}
<article className="group relative bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border-l-[3px] border-l-accent-light">
{/* Banner sutil de estado "Ya postulaste" */}
<div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-primary-container-light text-primary font-body-s text-body-s font-semibold mb-3">
<span className="material-symbols-outlined text-[16px]" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
<span>Postulación enviada con éxito el 18 de Febrero</span>
<span className="ml-auto font-label text-label uppercase tracking-wider text-primary/80">En revisión</span>
</div>
<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
{/* Monograma HM */}
<div className="w-12 h-12 rounded-xl bg-primary-container-dark text-on-primary-container flex items-center justify-center font-display font-bold text-headline-s shrink-0 shadow-sm">
                HM
              </div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-body-s text-body-s font-semibold text-ink-light truncate">Grupo H&amp;M Piura</span>
<span className="text-outline text-body-s">•</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Hace 1 día</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors leading-snug">
                  Practicante de Sistemas y Soporte Cloud
                </h3>
<div className="flex flex-wrap items-center gap-y-2 gap-x-3 mt-3">
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                    Castilla
                  </span>
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">home_work</span>
                    Remoto
                  </span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-ink-secondary-light font-body-s text-body-s">
                    Ingeniería de Sistemas
                  </span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 pt-3 sm:pt-0">
<span className="px-3 py-1 rounded-full bg-accent-container-light text-ink-light font-label text-body-m font-bold tabular-nums">
                S/ 1,200 <span className="text-label font-normal text-ink-secondary-light">/mes</span>
</span>
<div className="flex items-center gap-2">
<span className="px-4 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-body-m text-body-m font-bold transition-all text-center" data-path="mis-postulaciones">
                  Ver mi postulación
                </span>
</div>
</div>
</div>
</article>
{/* TARJETA 4: Agroindustrias del Alto Piura */}
<article className="group relative bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border-l-[3px] border-l-accent-light">
<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
{/* Monograma AP */}
<div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center font-display font-bold text-headline-s shrink-0 shadow-sm">
                AP
              </div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-body-s text-body-s font-semibold text-ink-light truncate">Agroindustrias del Alto Piura</span>
<span className="material-symbols-outlined text-primary text-[16px] shrink-0" title="Empresa Verificada">verified</span>
<span className="text-outline text-body-s">•</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Hace 1 día</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors leading-snug">
                  Practicante de Mantenimiento Electromecánico
                </h3>
<div className="flex flex-wrap items-center gap-y-2 gap-x-3 mt-3">
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                    Chulucanas / Piura
                  </span>
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">precision_manufacturing</span>
                    Presencial
                  </span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-ink-secondary-light font-body-s text-body-s">
                    Movilidad cubierta
                  </span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 pt-3 sm:pt-0">
<span className="px-3 py-1 rounded-full bg-accent-container-light text-ink-light font-label text-body-m font-bold tabular-nums">
                S/ 1,150 <span className="text-label font-normal text-ink-secondary-light">/mes</span>
</span>
<div className="flex items-center gap-2">
<button aria-label="Guardar oferta" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-ink-secondary-light hover:text-ink-light flex items-center justify-center transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<span className="px-4 py-1.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-bold transition-all shadow-sm" type="button">
                  Postular
                </span>
</div>
</div>
</div>
</article>
{/* TARJETA 5: Tesis SAC & Asociados */}
<article className="group relative bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border-l-[3px] border-l-accent-light">
<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
{/* Monograma TS */}
<div className="w-12 h-12 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center font-display font-bold text-headline-s shrink-0 shadow-sm">
                TS
              </div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-body-s text-body-s font-semibold text-ink-light truncate">Tesis SAC &amp; Asociados</span>
<span className="text-outline text-body-s">•</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Hace 2 días</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors leading-snug">
                  Asistente Legal de Convenios y Prácticas
                </h3>
<div className="flex flex-wrap items-center gap-y-2 gap-x-3 mt-3">
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                    Veintiséis de Octubre
                  </span>
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">gavel</span>
                    Presencial
                  </span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-ink-secondary-light font-body-s text-body-s">
                    Horario flexible
                  </span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 pt-3 sm:pt-0">
<span className="px-3 py-1 rounded-full bg-accent-container-light text-ink-light font-label text-body-m font-bold tabular-nums">
                S/ 1,025 <span className="text-label font-normal text-ink-secondary-light">/mes</span>
</span>
<div className="flex items-center gap-2">
<button aria-label="Guardar oferta" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-ink-secondary-light hover:text-ink-light flex items-center justify-center transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<span className="px-4 py-1.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-bold transition-all shadow-sm" type="button">
                  Postular
                </span>
</div>
</div>
</div>
</article>
{/* TARJETA 6: MARCO Corporación */}
<article className="group relative bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 border-l-[3px] border-l-accent-light">
<div className="flex flex-col sm:flex-row items-start justify-between gap-4">
<div className="flex items-start gap-3.5 min-w-0">
{/* Monograma MC */}
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center font-display font-bold text-headline-s shrink-0 shadow-sm">
                MC
              </div>
<div className="min-w-0">
<div className="flex items-center gap-1.5 mb-1">
<span className="font-body-s text-body-s font-semibold text-ink-light truncate">MARCO Corporación</span>
<span className="material-symbols-outlined text-primary text-[16px] shrink-0" title="Empresa Verificada">verified</span>
<span className="text-outline text-body-s">•</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Hace 3 días</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors leading-snug">
                  Practicante de Gestión del Talento Humano
                </h3>
<div className="flex flex-wrap items-center gap-y-2 gap-x-3 mt-3">
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">location_on</span>
                    Paita / Zona Industrial
                  </span>
<span className="inline-flex items-center gap-1 font-body-s text-body-s text-ink-secondary-light">
<span className="material-symbols-outlined text-[16px]">groups</span>
                    Híbrido
                  </span>
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-ink-secondary-light font-body-s text-body-s">
                    Psicología / Admin.
                  </span>
</div>
</div>
</div>
<div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto shrink-0 gap-3 pt-3 sm:pt-0">
<span className="px-3 py-1 rounded-full bg-accent-container-light text-ink-light font-label text-body-m font-bold tabular-nums">
                S/ 1,100 <span className="text-label font-normal text-ink-secondary-light">/mes</span>
</span>
<div className="flex items-center gap-2">
<button aria-label="Guardar oferta" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-ink-secondary-light hover:text-ink-light flex items-center justify-center transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">bookmark</span>
</button>
<span className="px-4 py-1.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-bold transition-all shadow-sm" type="button">
                  Postular
                </span>
</div>
</div>
</div>
</article>
</div>
{/* PAGINACIÓN ACCESIBLE */}
<nav aria-label="Navegación de ofertas" className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-4">
<p className="font-body-s text-body-s text-ink-secondary-light">
          Mostrando <span className="font-semibold text-ink-light">1 - 6</span> de <span className="font-semibold text-ink-light">48</span> ofertas de prácticas
        </p>
<div className="flex items-center gap-1">
<button className="px-3 py-1.5 rounded-full bg-surface-container-low text-outline font-body-m text-body-m font-medium cursor-not-allowed flex items-center gap-1" disabled="" type="button">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
<span className="hidden sm:inline">Anterior</span>
</button>
<button aria-current="page" className="w-8 h-8 rounded-full bg-primary text-on-primary font-body-m text-body-m font-bold flex items-center justify-center shadow-sm" type="button">
            1
          </button>
<button className="w-8 h-8 rounded-full hover:bg-surface-container text-ink-light font-body-m text-body-m font-medium flex items-center justify-center transition-colors" type="button">
            2
          </button>
<button className="w-8 h-8 rounded-full hover:bg-surface-container text-ink-light font-body-m text-body-m font-medium flex items-center justify-center transition-colors" type="button">
            3
          </button>
<span className="text-outline px-1">...</span>
<button className="w-8 h-8 rounded-full hover:bg-surface-container text-ink-light font-body-m text-body-m font-medium flex items-center justify-center transition-colors" type="button">
            8
          </button>
<button className="px-3 py-1.5 rounded-full bg-surface-light hover:bg-surface-container text-ink-light font-body-m text-body-m font-medium shadow-sm flex items-center gap-1 transition-colors" type="button">
<span className="hidden sm:inline">Siguiente</span>
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</nav>
</main>
</div>
{/* ESTADO VACÍO PREVIEW / BLOQUE DE AYUDA AL POSTULANTE */}
<section className="bg-surface-elevated-light rounded-3xl p-8 md:p-12 mb-8 relative overflow-hidden shadow-sm">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
{/* Ilustración SVG sobria y costera */}
<div className="md:col-span-4 flex justify-center">
<div className="relative w-44 h-44 rounded-2xl bg-surface-light flex items-center justify-center shadow-sm p-4">
<svg className="w-28 h-28 text-primary" fill="none" viewbox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-30" cx="56" cy="56" r="38" stroke="currentColor" stroke-dasharray="6 4" stroke-width="7"></circle>
<circle cx="56" cy="56" fill="currentColor" fill-opacity="0.08" r="28"></circle>
<path d="M78 78L104 104" stroke="currentColor" stroke-linecap="round" stroke-width="8"></path>
<circle cx="56" cy="56" fill="#E8A13A" r="6"></circle>
<path d="M46 56H42M66 56H70M56 46V42M56 66V70" stroke="#E8A13A" stroke-linecap="round" stroke-width="3"></path>
</svg>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-light text-on-primary flex items-center justify-center font-display font-black text-body-s shadow">
            !
          </div>
</div>
</div>
{/* Texto descriptivo y llamada de acción */}
<div className="md:col-span-8 flex flex-col items-start gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-light font-label text-label uppercase text-ink-secondary-light tracking-wide">
<span className="material-symbols-outlined text-[16px] text-accent-light">filter_alt_off</span>
          Asistente de búsqueda
        </div>
<h2 className="font-headline-l text-headline-l text-ink-light">
          ¿Filtros demasiado estrictos?
        </h2>
<p className="font-body-l text-body-l text-ink-secondary-light max-w-xl leading-relaxed">
          Si ajustas demasiado tu rango salarial o combinas varios distritos periféricos, podrías perder oportunidades emergentes en Paita, Castilla o Talara. Te sugerimos ampliar tu radio de búsqueda o activar avisos directos a tu WhatsApp o correo institucional.
        </p>
<div className="flex flex-wrap items-center gap-3 pt-2">
<button className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-body-m text-body-m font-bold transition-all shadow-sm" type="button">
            Limpiar filtros y ver todas
          </button>
<button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-light hover:bg-surface-container text-ink-light font-body-m text-body-m font-semibold shadow-sm transition-colors" type="button">
<span className="material-symbols-outlined text-primary text-[18px]">notifications_active</span>
            Activar alertas de empleo
          </button>
</div>
</div>
</div>
</section>
</div>
</div></main><footer className="w-full bg-surface-light border-t-0 shadow-[0_-1px_8px_rgba(20,32,27,0.03)]"><div className="max-w-[1200px] mx-auto px-margin py-space-xl"><div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl"><div className="space-y-space-sm md:col-span-1"><div className="flex items-center gap-space-xs"><div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[16px]">work</span></div><span className="font-headline-s text-headline-s text-ink-light tracking-tight">Práctica<span className="text-primary">PE</span></span></div><p className="font-body-s text-body-s text-on-surface-variant">La plataforma de empleo universitario y prácticas profesionales líder en la región Piura.</p></div><div><p className="font-headline-s text-body-m text-ink-light mb-space-sm">Oportunidades</p><ul className="space-y-space-xs"><li data-path="ofertas"><a className="font-body-s text-body-s text-on-surface-variant hover:text-primary transition-colors" data-path="ofertas" href="/ofertas">Ofertas laborales</a></li><li data-path="directorio-de-empresas"><a className="font-body-s text-body-s text-on-surface-variant hover:text-primary transition-colors" data-path="directorio-de-empresas" href="/empresas">Directorio de empresas</a></li><li data-path="mapa"><a className="font-body-s text-body-s text-on-surface-variant hover:text-primary transition-colors" data-path="mapa" href="/mapa">Mapa de vacantes</a></li></ul></div><div><p className="font-headline-s text-body-m text-ink-light mb-space-sm">Academia y Alianzas</p><ul className="space-y-space-xs"><li data-path="convenios-universitarios"><span className="font-body-s text-body-s text-on-surface-variant hover:text-primary transition-colors" data-path="convenios-universitarios">Convenios universitarios</span></li><li data-path="publicar-oferta"><span className="font-body-s text-body-s text-on-surface-variant hover:text-primary transition-colors" data-path="publicar-oferta">Para empleadores</span></li></ul></div><div><p className="font-headline-s text-body-m text-ink-light mb-space-sm">Legal y Soporte</p><ul className="space-y-space-xs"><li data-path="terminos-y-condiciones"><a className="font-body-s text-body-s text-on-surface-variant hover:text-primary transition-colors" data-path="terminos-y-condiciones" href="/terminos">Términos y Condiciones</a></li><li data-path="libro-de-reclamaciones"><a className="font-body-s text-body-s text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1.5" data-path="libro-de-reclamaciones" href="/reclamaciones"><span className="material-symbols-outlined text-[16px] text-tertiary">menu_book</span>Libro de Reclamaciones</a></li></ul></div></div><div className="mt-space-xl pt-space-lg flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-s text-body-s text-outline"><p>© 2025 PrácticaPE Piura. Todos los derechos reservados.</p><p className="text-body-s">Conectando el talento piurano con el mercado laboral.</p></div></div></footer>
    </div>
  );
}
