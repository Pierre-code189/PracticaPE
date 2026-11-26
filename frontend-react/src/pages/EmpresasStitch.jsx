// Migrado desde .stitch/designs/ — componente EmpresasStitch
export default function EmpresasStitch(){
  return (
    <div className="stitch-root">
<header className="fixed top-0 left-0 right-0 h-16 w-full z-50 bg-surface-light border-b border-outline-variant/30"><div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg"><a className="flex items-center gap-space-xs text-on-surface select-none group" data-path="ofertas" href="/ofertas"><div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm"><span className="material-symbols-outlined text-[20px]">school</span></div><span className="font-headline-s text-headline-s tracking-tight text-ink-light">Práctica<span className="text-primary">PE</span></span></a><nav className="hidden lg:flex items-center gap-space-lg h-16" data-active-classes="text-primary font-semibold border-b-2 border-primary"><a className="h-full inline-flex items-center text-on-surface-variant hover:text-on-surface transition-colors font-body-m text-body-m" data-path="ofertas" href="/ofertas">Ofertas</a><a aria-current="page" className="h-full inline-flex items-center transition-colors text-primary font-semibold border-b-2 border-primary" data-path="directorio-de-empresas" href="/empresas">Directorio de empresas</a><span className="h-full inline-flex items-center text-on-surface-variant hover:text-on-surface transition-colors font-body-m text-body-m" data-path="instituciones">Instituciones</span><a className="h-full inline-flex items-center text-on-surface-variant hover:text-on-surface transition-colors font-body-m text-body-m" data-path="para-empresas" href="/empresas">Para empresas</a></nav></div><div className="flex items-center gap-space-sm sm:gap-space-md"><span aria-label="Cambiar tema claro u oscuro" className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">light_mode</span></span><span className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded-full border-[1.5px] border-outline-variant/60 font-body-m text-body-m font-semibold text-on-surface hover:bg-surface-container-low transition-colors" data-path="login">Iniciar sesión</span><span className="hidden sm:inline-flex items-center justify-center px-space-lg py-space-xs rounded-full bg-primary text-on-primary font-body-m text-body-m font-semibold shadow-sm hover:bg-primary-container transition-colors" data-path="registro">Registrarme</span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center select-none"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><button aria-label="Abrir menú de navegación" className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors" id="mobile-nav-toggle" type="button"><span className="material-symbols-outlined text-[24px]">menu</span></button></div></div><div className="hidden lg:hidden w-full bg-surface-light border-b border-outline-variant/40 shadow-lg px-margin py-space-lg flex flex-col gap-space-md" id="mobile-menu"><nav className="flex flex-col gap-space-xs" data-active-classes="text-primary font-bold bg-primary-container-light rounded-lg"><a className="px-space-md py-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg font-body-m text-body-m" data-path="ofertas" href="/ofertas">Ofertas</a><a aria-current="page" className="px-space-md py-space-sm text-primary font-bold bg-primary-container-light rounded-lg" data-path="directorio-de-empresas" href="/empresas">Directorio de empresas</a><span className="px-space-md py-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg font-body-m text-body-m" data-path="instituciones">Instituciones</span><a className="px-space-md py-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg font-body-m text-body-m" data-path="para-empresas" href="/empresas">Para empresas</a></nav><div className="flex flex-col gap-space-sm pt-space-sm border-t border-outline-variant/30"><span className="w-full py-space-sm text-center rounded-full border-[1.5px] border-outline-variant/60 font-body-m text-body-m font-semibold text-on-surface hover:bg-surface-container transition-colors" data-path="login">Iniciar sesión</span><span className="w-full py-space-sm text-center rounded-full bg-primary text-on-primary font-body-m text-body-m font-semibold shadow-sm hover:bg-primary-container transition-colors" data-path="registro">Registrarme</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full">
{/* Sub-Hero & Page Title Header Section */}
<section className="w-full bg-surface-container-low/70 py-space-xl border-b border-outline-variant/30">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-lg">
<div className="max-w-[720px] flex flex-col gap-space-xs">
<div className="inline-flex items-center gap-space-xs self-start px-3 py-1 rounded-full bg-primary-container-light text-primary font-label text-label tracking-wider uppercase">
<span className="material-symbols-outlined text-[14px]">explore</span>
<span>Ecosistema Laboral Piurano • Región Grau</span>
</div>
<h1 className="font-headline-l text-headline-l text-ink-light tracking-tight mt-space-xs">
            Directorio de empresas
          </h1>
<p className="font-body-l text-body-l text-on-surface-variant">
            Conoce a las empresas que ofrecen prácticas y primer empleo en Piura y la región Grau.
          </p>
</div>
<div className="flex items-center gap-space-sm bg-surface-light px-space-md py-space-sm rounded-xl shadow-sm border border-outline-variant/40 self-start md:self-auto">
<div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
<div className="flex flex-col">
<span className="font-headline-s text-headline-s text-primary font-bold tabular-nums leading-none">24</span>
<span className="font-body-s text-body-s text-ink-secondary-light">empresas activas</span>
</div>
<span className="material-symbols-outlined text-primary text-[20px] ml-1" title="Verificadas en SUNAT / Región Grau">verified</span>
</div>
</div>
</div>
</section>
{/* Filter & Search Interactive Controller */}
<section className="w-full max-w-[1200px] mx-auto px-margin -mt-6">
<div className="bg-surface-light rounded-2xl shadow-md p-space-md md:p-space-lg flex flex-col gap-space-md">
{/* Search Input & Quick Actions */}
<div className="flex flex-col md:flex-row gap-space-md items-center justify-between">
<div className="relative w-full md:max-w-xl">
<span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full pl-11 pr-space-md py-2.5 rounded-xl border-[1.5px] border-outline-variant/60 focus:border-primary focus:ring-4 focus:ring-primary/10 font-body-m text-body-m text-ink-light placeholder:text-outline outline-none transition-all" id="company-search" placeholder="Buscar por nombre de empresa, rubro o actividad..." type="text"/>
</div>
<div className="flex items-center justify-between w-full md:w-auto gap-space-md">
<span className="font-body-s text-body-s text-ink-secondary-light" id="results-count">Mostrando <strong className="text-ink-light font-semibold tabular-nums">12</strong> empresas</span>
<button className="inline-flex items-center gap-space-xs font-body-s text-body-s font-semibold text-primary hover:text-on-primary-fixed-variant transition-colors" id="reset-filters" type="button">
<span className="material-symbols-outlined text-[16px]">restart_alt</span>
<span>Limpiar filtros</span>
</button>
</div>
</div>
{/* District Filters (Pills) */}
<div className="flex flex-col gap-space-xs pt-space-xs border-t border-outline-variant/20">
<span className="font-label text-label uppercase text-ink-secondary-light">Distrito / Localidad:</span>
<div className="flex flex-wrap items-center gap-space-xs" id="district-chips">
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-primary text-on-primary shadow-sm" data-district="all" type="button">Todos</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="piura" type="button">Piura</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="castilla" type="button">Castilla</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="veintiseis" type="button">Veintiséis de Octubre</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="catacaos" type="button">Catacaos</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="sullana" type="button">Sullana</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="paita" type="button">Paita</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="talara" type="button">Talara</button>
<button className="filter-chip-district px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-district="mancora" type="button">Máncora</button>
</div>
</div>
{/* Sector Filters (Pills) */}
<div className="flex flex-col gap-space-xs">
<span className="font-label text-label uppercase text-ink-secondary-light">Sector Productivo:</span>
<div className="flex flex-wrap items-center gap-space-xs" id="sector-chips">
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-primary text-on-primary shadow-sm" data-sector="all" type="button">Todos los sectores</button>
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-sector="logistica" type="button">Logística y Puertos</button>
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-sector="retail" type="button">Retail y Comercio</button>
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-sector="agroindustria" type="button">Agroindustria</button>
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-sector="banca" type="button">Banca y Finanzas</button>
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-sector="salud" type="button">Salud</button>
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-sector="educacion" type="button">Educación</button>
<button className="filter-chip-sector px-3 py-1.5 rounded-full font-body-s text-body-s font-medium transition-all bg-surface-container text-on-surface-variant hover:bg-surface-container-high" data-sector="turismo" type="button">Turismo y Hotelería</button>
</div>
</div>
</div>
</section>
{/* Companies Grid Container */}
<section className="w-full max-w-[1200px] mx-auto px-margin pt-space-xl pb-space-lg">
{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="companies-grid">
{/* Company 1: Terminal Paita */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="paita" data-name="Terminal Paita S.A." data-sector="logistica">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-container-light text-primary flex items-center justify-center font-headline-s text-headline-s font-bold">
                TP
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Terminal Paita S.A.</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Paita, Piura</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">LOGÍSTICA Y PUERTOS</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label text-label">SECTOR MARÍTIMO</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Operador portuario líder en el norte peruano con convocatorias activas para prácticas de comercio exterior, operaciones y logística marítima.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            5 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 2: Caja Piura */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="piura" data-name="Caja Piura" data-sector="banca">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-accent-container-light text-accent-light flex items-center justify-center font-headline-s text-headline-s font-bold">
                CP
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Caja Piura</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Piura Centro</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">BANCA Y FINANZAS</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label text-label">MICROFINANZAS</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Entidad financiera referente en microfinanzas y servicios bancarios del norte con programas formales de prácticas para analistas de crédito y sistemas.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            8 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 3: Agroindustrias del Alto Piura */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="piura" data-name="Agroindustrias del Alto Piura" data-sector="agroindustria">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-container-light text-primary flex items-center justify-center font-headline-s text-headline-s font-bold">
                AP
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Agroindustrias del Alto Piura</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Chulucanas / Piura</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">AGROINDUSTRIA</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label text-label">AGROEXPORTACIÓN</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Exportación de mango kent, uva de mesa y palta hass con programas de prácticas agrícolas, control de calidad y mantenimiento de planta.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            4 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 4: Wong Piura */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-y border-r border-l border-outline-variant/30 hover:-translate-y-0.5" data-district="piura" data-name="Wong Piura" data-sector="retail">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container text-ink-light flex items-center justify-center font-headline-s text-headline-s font-bold">
                WP
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Wong Piura</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Piura</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">RETAIL Y COMERCIO</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Cadena de retail y supermercados con posiciones formativas en operaciones comerciales, inventario y gestión de experiencia de tienda.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            3 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 5: Clínica de la Costa */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="veintiseis" data-name="Clínica de la Costa" data-sector="salud">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-container-light text-primary flex items-center justify-center font-headline-s text-headline-s font-bold">
                CC
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Clínica de la Costa</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Veintiséis de Octubre</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">SALUD</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label text-label">CLÍNICA PRIVADA</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Centro médico regional de alta complejidad con pasantías para administración hospitalaria, farmacia clínica y laboratorio biológico.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            2 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 6: Universidad Nacional de Piura */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="castilla" data-name="Universidad Nacional de Piura" data-sector="educacion">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-accent-container-light text-accent-light flex items-center justify-center font-headline-s text-headline-s font-bold">
                UNP
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Univ. Nacional de Piura</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Institución Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Castilla</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">EDUCACIÓN</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label text-label">UNIVERSIDAD PÚBLICA</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Principal casa superior de estudios de la región con vacantes en soporte TI, semilleros de investigación científica y gestión pública.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            6 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 7: Transportes Piura Bus */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-y border-r border-l border-outline-variant/30 hover:-translate-y-0.5" data-district="sullana" data-name="Transportes Piura Bus" data-sector="logistica">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container text-ink-light flex items-center justify-center font-headline-s text-headline-s font-bold">
                PB
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Transportes Piura Bus</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Sullana</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">LOGÍSTICA Y TRANSPORTE</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Línea integral de transporte interprovincial y carga pesada en el eje Panamericana Norte; plazas abiertas en monitoreo y despachos.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            3 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 8: Hotel Máncora Village */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="mancora" data-name="Hotel Máncora Village" data-sector="turismo">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-accent-container-light text-accent-light flex items-center justify-center font-headline-s text-headline-s font-bold">
                MV
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Hotel Máncora Village</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Máncora</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">TURISMO Y HOTELERÍA</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Resort ecológico costero enfocado en hospitalidad premium, gastronomía piurana y pasantías en dirección de eventos y atención bilingüe.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            2 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 9: Confecciones Talara */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-y border-r border-l border-outline-variant/30 hover:-translate-y-0.5" data-district="talara" data-name="Confecciones Talara" data-sector="retail">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container text-ink-light flex items-center justify-center font-headline-s text-headline-s font-bold">
                CT
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Confecciones Talara</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Talara</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">RETAIL / TEXTIL</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Fábrica y taller de confección textil con oportunidades activas para egresados de diseño técnico, patronaje y control de aseguramiento de calidad.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            1 oferta activa
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 10: Frutos del Chira */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="sullana" data-name="Frutos del Chira" data-sector="agroindustria">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-container-light text-primary flex items-center justify-center font-headline-s text-headline-s font-bold">
                FC
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Frutos del Chira</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Valle del Chira, Sullana</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">AGROINDUSTRIA</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label text-label">BANANO ORGÁNICO</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Consorcio agroexportador especializado en banano orgánico y limón sutil, con pasantías para ingeniería agronómica y certificaciones internacionales.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            3 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 11: Banco del Norte */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-l-[3px] border-accent-light border-y border-r border-outline-variant/30 hover:-translate-y-0.5" data-district="piura" data-name="Banco del Norte" data-sector="banca">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-container-light text-primary flex items-center justify-center font-headline-s text-headline-s font-bold">
                BN
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Banco del Norte</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Piura</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">BANCA Y FINANZAS</span>
<span className="px-2.5 py-0.5 rounded-full bg-secondary-container/60 text-on-secondary-container font-label text-label">INVERSIÓN</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Servicios financieros para corporaciones agropecuarias y proyectos de infraestructura comercial de la macrorregión norte.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            4 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
{/* Company 12: Ladrillos Castilla */}
<article className="company-card group bg-surface-light rounded-2xl p-space-md flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 border-y border-r border-l border-outline-variant/30 hover:-translate-y-0.5" data-district="castilla" data-name="Ladrillos Castilla" data-sector="retail">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container text-ink-light flex items-center justify-center font-headline-s text-headline-s font-bold">
                LC
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1">
<h3 className="font-headline-s text-headline-s text-ink-light group-hover:text-primary transition-colors">Ladrillos Castilla</h3>
<span className="material-symbols-outlined text-[16px] text-primary" title="Empresa Verificada">verified</span>
</div>
<div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
<span>Castilla</span>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-space-xs mt-1">
<span className="px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label text-label">MANUFACTURA Y CONSTRUCCIÓN</span>
</div>
<p className="font-body-m text-body-m text-on-surface-variant line-clamp-2 leading-relaxed">
            Planta industrial de materiales constructivos sostenibles y proyectos de ingeniería mecánica y seguridad industrial en obra.
          </p>
</div>
<div className="pt-space-md mt-space-md border-t border-outline-variant/20 flex items-center justify-between">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold tabular-nums">
<span className="w-2 h-2 rounded-full bg-primary"></span>
            2 ofertas activas
          </span>
<span className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-full border-[1.5px] border-outline-variant/80 font-body-s text-body-s font-semibold text-ink-light group-hover:bg-primary group-hover:text-on-primary group-hover:border-primary transition-all">
<span>Ver perfil</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</article>
</div>
{/* Empty State (Conditional Display via JS) */}
<div className="hidden w-full py-space-xl flex-col items-center justify-center text-center bg-surface-light rounded-2xl border border-dashed border-outline-variant/80 p-space-xl" id="empty-state">
<div className="w-16 h-16 rounded-full bg-primary-container-light text-primary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[32px]">domain_disabled</span>
</div>
<h3 className="font-headline-s text-headline-s text-ink-light mb-space-xs">No encontramos empresas con esos filtros</h3>
<p className="font-body-m text-body-m text-on-surface-variant max-w-md mb-space-lg">
        Prueba cambiando el distrito o el sector de búsqueda para descubrir más organizaciones en Piura y alrededores.
      </p>
<button className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-semibold shadow-sm hover:bg-primary-container transition-all" id="empty-reset-button" type="button">
<span className="material-symbols-outlined text-[18px]">filter_alt_off</span>
<span>Limpiar filtros de búsqueda</span>
</button>
</div>
{/* Pagination Component */}
<nav aria-label="Paginación de resultados" className="w-full flex flex-col sm:flex-row items-center justify-between gap-space-md mt-space-xl pt-space-lg border-t border-outline-variant/30">
<div className="font-body-s text-body-s text-ink-secondary-light">
        Mostrando <span className="font-semibold text-ink-light tabular-nums">1</span> - <span className="font-semibold text-ink-light tabular-nums">12</span> de <span className="font-semibold text-ink-light tabular-nums">24</span> empresas
      </div>
<div className="flex items-center gap-space-xs">
<button aria-label="Página anterior" className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-outline-variant/40 text-outline-variant opacity-50 cursor-not-allowed" disabled="" type="button">
<span className="material-symbols-outlined text-[20px]">chevron_left</span>
</button>
<button aria-current="page" className="w-9 h-9 rounded-xl bg-primary text-on-primary font-body-m text-body-m font-semibold flex items-center justify-center shadow-sm" type="button">
          1
        </button>
<button className="w-9 h-9 rounded-xl border border-outline-variant/50 hover:bg-surface-container font-body-m text-body-m font-semibold text-ink-light flex items-center justify-center transition-colors" type="button">
          2
        </button>
<button className="w-9 h-9 rounded-xl border border-outline-variant/50 hover:bg-surface-container font-body-m text-body-m font-semibold text-ink-light flex items-center justify-center transition-colors" type="button">
          3
        </button>
<button aria-label="Página siguiente" className="inline-flex items-center justify-center w-9 h-9 rounded-xl border border-outline-variant/50 hover:bg-surface-container text-ink-light transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</nav>
</section>
{/* Employer Call-To-Action Banner */}
<section className="w-full max-w-[1200px] mx-auto px-margin py-space-xl mb-space-lg">
<div className="relative overflow-hidden rounded-3xl bg-surface-elevated-light p-space-lg md:p-space-xl border border-border-light shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-accent-light/10 pointer-events-none blur-2xl"></div>
<div className="flex flex-col gap-space-xs max-w-xl z-10 text-center md:text-left">
<div className="inline-flex items-center gap-space-xs self-center md:self-start px-3 py-1 rounded-full bg-accent-container-light text-on-surface font-label text-label tracking-wide uppercase">
<span className="material-symbols-outlined text-[14px] text-accent-light">corporate_fare</span>
<span>¿Eres un empleador en Piura?</span>
</div>
<h2 className="font-headline-m text-headline-m text-ink-light tracking-tight">
          ¿Tu empresa busca practicantes o recién egresados?
        </h2>
<p className="font-body-m text-body-m text-on-surface-variant leading-relaxed">
          Publica tus ofertas de prácticas pre-profesionales y laborales sin costo. Conecta de forma directa con los mejores talentos de las universidades e institutos de Piura.
        </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-sm z-10 w-full sm:w-auto">
<span className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-full bg-primary text-on-primary font-headline-s text-body-m font-bold shadow-md hover:bg-primary-container transition-all">
<span className="material-symbols-outlined text-[20px]">add_business</span>
<span>Publicar ofertas gratis</span>
</span>
<span className="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-md py-3 rounded-full border-[1.5px] border-outline-variant/80 bg-surface-light text-ink-light font-headline-s text-body-m font-bold hover:bg-surface-container transition-all">
<span>Más información</span>
</span>
</div>
</div>
</section>
{/* Interactive Search & Filter Behavior Script */}

</div></main><footer className="w-full bg-surface-container-low border-t border-outline-variant/20 pt-space-xl pb-space-lg"><div className="max-w-[1200px] mx-auto px-margin"><div className="grid grid-cols-1 md:grid-cols-4 gap-space-xl mb-space-xl"><div className="md:col-span-1 flex flex-col gap-space-sm"><div className="flex items-center gap-space-xs"><div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center text-on-primary"><span className="material-symbols-outlined text-[18px]">school</span></div><span className="font-headline-s text-headline-s text-ink-light">Práctica<span className="text-primary">PE</span></span></div><p className="font-body-s text-body-s text-on-surface-variant leading-relaxed">El punto de encuentro digital para prácticas pre-profesionales y profesionales en Piura y todo el norte peruano.</p><div className="flex items-center gap-space-xs text-ink-secondary-light font-body-s text-body-s mt-space-xs"><span className="material-symbols-outlined text-[16px] text-primary">location_on</span><span>Piura, Perú</span></div></div><div className="flex flex-col gap-space-sm"><span className="font-headline-s text-body-m font-semibold text-on-surface">Plataforma</span><ul className="flex flex-col gap-space-xs font-body-m text-body-m text-on-surface-variant"><li><a className="hover:text-primary transition-colors" data-path="ofertas" href="/ofertas">Ofertas laborales</a></li><li><a className="hover:text-primary transition-colors" data-path="directorio-de-empresas" href="/empresas">Directorio de empresas</a></li><li><span className="hover:text-primary transition-colors" data-path="instituciones">Convenios universitarios</span></li><li><span className="hover:text-primary transition-colors" data-path="para-empresas">Publicar ofertas</span></li></ul></div><div className="flex flex-col gap-space-sm"><span className="font-headline-s text-body-m font-semibold text-on-surface">Legal &amp; Transparencia</span><ul className="flex flex-col gap-space-xs font-body-m text-body-m text-on-surface-variant"><li><a className="hover:text-primary transition-colors" data-path="terminos-y-condiciones" href="/terminos">Términos y Condiciones</a></li><li><a className="hover:text-primary transition-colors" data-path="politica-de-privacidad" href="/privacidad">Política de Privacidad</a></li><li><a className="hover:text-primary transition-colors flex items-center gap-space-xs" data-path="libro-de-reclamaciones" href="/reclamaciones"><span className="material-symbols-outlined text-[16px] text-accent-light">menu_book</span>Libro de Reclamaciones</a></li></ul></div><div className="flex flex-col gap-space-sm"><span className="font-headline-s text-body-m font-semibold text-on-surface">Contacto Corporativo</span><p className="font-body-s text-body-s text-on-surface-variant">Atención prioritaria para empleadores e instituciones educativas de la región.</p><a className="inline-flex items-center gap-space-xs text-primary font-body-m text-body-m font-semibold hover:underline" data-path="contacto-empresas" href="/empresas"><span className="material-symbols-outlined text-[18px]">mail</span>Contacto Empresas</a></div></div><div className="pt-space-md border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-space-sm font-body-s text-body-s text-on-surface-variant"><span>© 2025 PrácticaPE. Todos los derechos reservados.</span><span>Piura, Perú • Hecho con compromiso universitario</span></div></div></footer>
    </div>
  );
}
