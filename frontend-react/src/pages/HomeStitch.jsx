// Migrado desde .stitch/designs/home.html
export default function HomeStitch(){
  return (
    <div className="stitch-root">
<header className="fixed top-0 left-0 right-0 z-50 bg-surface-light/95 backdrop-blur-md shadow-[0_1px_8px_rgba(20,32,27,0.06)]"><div className="max-w-[1200px] mx-auto px-margin h-16 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-xl"><a className="flex items-center gap-2 group" data-path="ofertas" href="/ofertas"><div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(0,97,79,0.24)] group-hover:scale-105 transition-transform"><span className="w-4 h-4 rounded-sm border-2 border-on-primary rotate-45 flex items-center justify-center"><span className="w-1.5 h-1.5 bg-accent-light rounded-full"></span></span></div><div className="flex flex-col"><span className="font-headline-s text-headline-s tracking-tight text-ink-light flex items-center">Práctica<span className="text-primary">PE</span></span><span className="font-label text-label uppercase tracking-wider text-ink-secondary-light -mt-1">Piura</span></div></a><nav className="hidden lg:flex items-center gap-space-sm" data-active-classes="bg-primary-container-light text-primary font-bold rounded-full px-space-md py-1.5"><a aria-current="page" className="transition-colors bg-primary-container-light text-primary font-bold rounded-full px-space-md py-1.5" data-path="ofertas" href="/ofertas">Ofertas</a><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-1.5 rounded-full transition-colors" data-path="mapa" href="/mapa">Mapa</a><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-1.5 rounded-full transition-colors" data-path="empresas" href="/empresas">Empresas</a><span className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-1.5 rounded-full transition-colors" data-path="mis-postulaciones">Mis postulaciones</span></nav></div><div className="flex items-center gap-space-sm"><span aria-label="Cambiar modo claro y oscuro" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">light_mode</span></span><span className="hidden sm:inline-flex items-center justify-center font-body-m text-body-m font-semibold text-secondary px-space-lg py-2 rounded-full hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="login">Ingresar</span><span className="inline-flex items-center justify-center font-body-m text-body-m font-bold bg-primary text-on-primary px-space-lg py-2 rounded-full shadow-[0_2px_12px_rgba(0,97,79,0.25)] hover:bg-primary-container transition-all hover:scale-[1.02]" data-path="publicar-oferta">Publicar oferta</span><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-64px)]"><div className="flex flex-col w-full">
{/* SECCIÓN HERO DE IMPACTO REGIONAL */}
<section className="relative w-full overflow-hidden bg-gradient-to-b from-primary-container-light/35 via-surface to-surface pb-16 pt-8">
{/* Fondos decorativos cálidos y sutiles propios de la costa norte */}
<div className="pointer-events-none absolute -top-24 right-1/2 translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-accent-container-light/50 to-primary-fixed/30 blur-3xl rounded-full opacity-60"></div>
<div className="pointer-events-none absolute top-40 -left-20 w-80 h-80 bg-accent-light/10 blur-2xl rounded-full"></div>
<div className="relative max-w-[1200px] mx-auto px-margin">
<div className="flex flex-col items-center text-center max-w-3xl mx-auto">
{/* Badge Pill Regional */}
<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-container-light text-ink-light shadow-sm mb-5 transition-transform hover:scale-105">
<span className="material-symbols-outlined text-[17px] text-accent-light" style={{fontVariationSettings: '\'FILL\' 1'}}>wb_sunny</span>
<span className="font-label text-label tracking-widest uppercase font-bold text-ink-light">Piura · Región Grau</span>
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span className="font-body-s text-body-s font-semibold text-primary">Plataforma Oficial</span>
</div>
{/* Titular Principal */}
<h1 className="font-display text-display text-ink-light tracking-tight text-balance leading-tight">
          Tu primer empleo o práctica empieza en <span className="text-primary underline decoration-accent-light decoration-4 underline-offset-4">Piura</span>
</h1>
{/* Subtítulo */}
<p className="font-headline-s text-headline-s font-normal text-ink-secondary-light mt-4 max-w-2xl leading-relaxed text-balance">
          Conectamos a estudiantes y recién egresados de universidades e institutos de la región con más de 120 empresas y entidades verificadas.
        </p>
{/* BUSCADOR RÁPIDO INTEGRADO */}
<div className="w-full mt-9 bg-surface-light rounded-2xl p-3 md:p-4 shadow-[0_2px_4px_rgba(20,32,27,0.04),0_12px_32px_rgba(20,32,27,0.08)] text-left transition-all">
<form className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center" id="hero-search-form">
{/* Campo 1: Palabra Clave */}
<div className="md:col-span-5 relative flex items-center bg-surface-container-low rounded-xl px-3.5 py-2.5 transition-colors focus-within:bg-surface-light focus-within:shadow-[0_0_0_2px_#00614f]">
<span className="material-symbols-outlined text-ink-secondary-light mr-2 text-[20px]">search</span>
<div className="flex flex-col w-full min-w-0">
<label className="font-label text-label uppercase text-ink-secondary-light font-bold" htmlFor="search-keyword">Cargo o especialidad</label>
<input className="bg-transparent border-0 p-0 text-ink-light font-body-m text-body-m placeholder:text-outline focus:outline-none w-full" id="search-keyword" name="q" placeholder="P. ej. Logística, Sistemas, Contabilidad..." type="text"/>
</div>
</div>
{/* Campo 2: Distrito */}
<div className="md:col-span-3 relative flex items-center bg-surface-container-low rounded-xl px-3.5 py-2.5 transition-colors focus-within:bg-surface-light focus-within:shadow-[0_0_0_2px_#00614f]">
<span className="material-symbols-outlined text-ink-secondary-light mr-2 text-[20px]">location_on</span>
<div className="flex flex-col w-full min-w-0">
<label className="font-label text-label uppercase text-ink-secondary-light font-bold" htmlFor="search-district">Distrito</label>
<select className="bg-transparent border-0 p-0 text-ink-light font-body-m text-body-m focus:outline-none w-full cursor-pointer appearance-none pr-4" id="search-district" name="distrito">
<option value="">Todos los distritos</option>
<option value="piura">Piura Centro</option>
<option value="castilla">Castilla</option>
<option value="veintiseis">Veintiséis de Octubre</option>
<option value="catacaos">Catacaos</option>
<option value="sullana">Sullana</option>
<option value="paita">Paita</option>
<option value="talara">Talara</option>
<option value="mancora">Máncora</option>
</select>
</div>
<span className="material-symbols-outlined pointer-events-none absolute right-3 text-ink-secondary-light text-[18px]">expand_more</span>
</div>
{/* Campo 3: Modalidad */}
<div className="md:col-span-2 relative flex items-center bg-surface-container-low rounded-xl px-3.5 py-2.5 transition-colors focus-within:bg-surface-light focus-within:shadow-[0_0_0_2px_#00614f]">
<span className="material-symbols-outlined text-ink-secondary-light mr-2 text-[20px]">business_center</span>
<div className="flex flex-col w-full min-w-0">
<label className="font-label text-label uppercase text-ink-secondary-light font-bold text-[10px] tracking-normal" htmlFor="search-mode">Modalidad</label>
<select className="bg-transparent border-0 p-0 text-ink-light font-body-m text-body-m focus:outline-none w-full cursor-pointer appearance-none pr-4" id="search-mode" name="modalidad">
<option value="">Todas</option>
<option value="presencial">Presencial</option>
<option value="hibrido">Híbrido</option>
<option value="remoto">Remoto</option>
</select>
</div>
<span className="material-symbols-outlined pointer-events-none absolute right-3 text-ink-secondary-light text-[18px]">expand_more</span>
</div>
{/* Botón Primario Píldora Esmeralda */}
<div className="md:col-span-2 flex items-stretch">
<button className="w-full h-full min-h-[50px] inline-flex items-center justify-center gap-1.5 font-headline-s text-headline-s font-bold bg-primary text-on-primary rounded-xl px-4 py-3 shadow-[0_4px_14px_rgba(0,97,79,0.3)] hover:bg-primary-container transition-all hover:scale-[1.02] active:scale-[0.98]" id="btn-search-main" type="submit">
<span>Buscar</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</form>
</div>
{/* Métricas Rápidas y Enlace Secundario */}
<div className="flex flex-wrap items-center justify-between w-full mt-4 gap-3 px-2">
<a className="group inline-flex items-center gap-1.5 font-body-m text-body-m font-semibold text-primary hover:text-primary-container transition-colors" href="/ofertas">
<span>Ver todas las ofertas (48 disponibles)</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container font-body-s text-body-s font-medium text-ink-secondary-light">
<span className="w-2 h-2 rounded-full bg-primary"></span>
              24 empresas activas hoy
            </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container font-body-s text-body-s font-medium text-ink-secondary-light">
<span className="material-symbols-outlined text-accent-light text-[14px]">verified</span>
              100% regulado Ley 28518
            </span>
</div>
</div>
</div>
</div>
</section>
{/* SECCIÓN OFERTAS RECIENTES */}
<section className="w-full py-12 bg-surface" id="ofertas">
<div className="max-w-[1200px] mx-auto px-margin">
{/* Encabezado de Sección */}
<div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
<div>
<div className="inline-flex items-center gap-2 text-primary font-label text-label uppercase tracking-widest mb-1.5">
<span className="w-2 h-2 rounded-full bg-accent-light"></span>
            Oportunidades del día
          </div>
<h2 className="font-headline-l text-headline-l font-bold text-ink-light tracking-tight">
            Ofertas recientes en Piura
          </h2>
<p className="font-body-m text-body-m text-ink-secondary-light mt-1">
            Convocatorias preprofesionales y laborales actualizadas hace pocas horas en la Región Grau.
          </p>
</div>
<a className="inline-flex items-center gap-1 font-body-m text-body-m font-bold text-primary hover:text-primary-container group whitespace-nowrap self-start sm:self-auto" href="/ofertas">
<span>Ver todas las ofertas</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</a>
</div>
{/* Retícula 2x3 de Tarjetas de Oferta */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
{/* TARJETA 1 */}
<article className="relative flex flex-col justify-between bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(20,32,27,0.06),0_12px_28px_rgba(20,32,27,0.09)] transition-all overflow-hidden group">
{/* Borde izquierdo ámbar de compensación formal */}
<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent-light"></div>
<div>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary-container-light text-primary font-headline-s text-headline-s flex items-center justify-center font-bold shadow-sm">
                  TP
                </div>
<div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light group-hover:text-primary transition-colors leading-snug">
                    Practicante Preprofesional de Operaciones Portuarias
                  </h3>
<p className="font-body-s text-body-s font-medium text-ink-secondary-light">
                    Terminal Portuario Paita S.A.
                  </p>
</div>
</div>
</div>
{/* Chips de Ubicación y Modalidad */}
<div className="flex flex-wrap items-center gap-1.5 mt-3 mb-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[13px]">location_on</span>
                Paita
              </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-body-s text-body-s text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[13px]">work</span>
                Presencial
              </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-container-light text-on-tertiary-fixed font-body-s text-body-s font-bold tabular-nums">
                S/ 1,300 al mes
              </span>
</div>
</div>
<div className="flex items-center justify-between pt-3 mt-2 bg-surface-container-lowest">
<span className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">schedule</span>
              Hace 2 horas
            </span>
<span className="btn-postular inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-bold hover:bg-primary-container transition-colors shadow-sm" type="button">
              Postular
            </span>
</div>
</article>
{/* TARJETA 2 */}
<article className="relative flex flex-col justify-between bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(20,32,27,0.06),0_12px_28px_rgba(20,32,27,0.09)] transition-all overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent-light"></div>
<div>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary-container-light text-primary font-headline-s text-headline-s flex items-center justify-center font-bold shadow-sm">
                  CP
                </div>
<div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light group-hover:text-primary transition-colors leading-snug">
                    Asistente Junior de Facturación y Finanzas
                  </h3>
<p className="font-body-s text-body-s font-medium text-ink-secondary-light">
                    Caja Municipal de Piura
                  </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 mt-3 mb-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[13px]">location_on</span>
                Piura (Centro)
              </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-body-s text-body-s text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[13px]">tune</span>
                Híbrido
              </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-container-light text-on-tertiary-fixed font-body-s text-body-s font-bold tabular-nums">
                S/ 1,450 al mes
              </span>
</div>
</div>
<div className="flex items-center justify-between pt-3 mt-2 bg-surface-container-lowest">
<span className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">schedule</span>
              Hace 5 horas
            </span>
<span className="btn-postular inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-bold hover:bg-primary-container transition-colors shadow-sm" type="button">
              Postular
            </span>
</div>
</article>
{/* TARJETA 3 */}
<article className="relative flex flex-col justify-between bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(20,32,27,0.06),0_12px_28px_rgba(20,32,27,0.09)] transition-all overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent-light"></div>
<div>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary-container-light text-primary font-headline-s text-headline-s flex items-center justify-center font-bold shadow-sm">
                  HM
                </div>
<div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light group-hover:text-primary transition-colors leading-snug">
                    Practicante de Sistemas y Soporte Cloud
                  </h3>
<p className="font-body-s text-body-s font-medium text-ink-secondary-light">
                    Grupo H&amp;M Piura
                  </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 mt-3 mb-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[13px]">location_on</span>
                Castilla
              </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-container-light text-accent-light font-body-s text-body-s font-bold">
<span className="material-symbols-outlined text-[13px]">desktop_mac</span>
                Remoto
              </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-container-light text-on-tertiary-fixed font-body-s text-body-s font-bold tabular-nums">
                S/ 1,200 al mes
              </span>
</div>
</div>
<div className="flex items-center justify-between pt-3 mt-2 bg-surface-container-lowest">
<span className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">schedule</span>
              Hace 1 día
            </span>
<span className="btn-postular inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-bold hover:bg-primary-container transition-colors shadow-sm" type="button">
              Postular
            </span>
</div>
</article>
{/* TARJETA 4 */}
<article className="relative flex flex-col justify-between bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(20,32,27,0.06),0_12px_28px_rgba(20,32,27,0.09)] transition-all overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent-light"></div>
<div>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary-container-light text-primary font-headline-s text-headline-s flex items-center justify-center font-bold shadow-sm">
                  AP
                </div>
<div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light group-hover:text-primary transition-colors leading-snug">
                    Practicante de Mantenimiento Electromecánico
                  </h3>
<p className="font-body-s text-body-s font-medium text-ink-secondary-light">
                    Agroindustrias del Alto Piura
                  </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 mt-3 mb-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[13px]">location_on</span>
                Sullana
              </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-body-s text-body-s text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[13px]">precision_manufacturing</span>
                Presencial
              </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-container-light text-on-tertiary-fixed font-body-s text-body-s font-bold tabular-nums">
                S/ 1,150 al mes
              </span>
</div>
</div>
<div className="flex items-center justify-between pt-3 mt-2 bg-surface-container-lowest">
<span className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">schedule</span>
              Hace 1 día
            </span>
<span className="btn-postular inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-bold hover:bg-primary-container transition-colors shadow-sm" type="button">
              Postular
            </span>
</div>
</article>
{/* TARJETA 5 */}
<article className="relative flex flex-col justify-between bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(20,32,27,0.06),0_12px_28px_rgba(20,32,27,0.09)] transition-all overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent-light"></div>
<div>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary-container-light text-primary font-headline-s text-headline-s flex items-center justify-center font-bold shadow-sm">
                  MC
                </div>
<div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light group-hover:text-primary transition-colors leading-snug">
                    Practicante de Gestión del Talento Humano
                  </h3>
<p className="font-body-s text-body-s font-medium text-ink-secondary-light">
                    MARCO Corporación
                  </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 mt-3 mb-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[13px]">location_on</span>
                Veintiséis de Octubre
              </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-body-s text-body-s text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[13px]">group</span>
                Híbrido
              </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-container-light text-on-tertiary-fixed font-body-s text-body-s font-bold tabular-nums">
                S/ 1,100 al mes
              </span>
</div>
</div>
<div className="flex items-center justify-between pt-3 mt-2 bg-surface-container-lowest">
<span className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">schedule</span>
              Hace 2 días
            </span>
<span className="btn-postular inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-bold hover:bg-primary-container transition-colors shadow-sm" type="button">
              Postular
            </span>
</div>
</article>
{/* TARJETA 6 */}
<article className="relative flex flex-col justify-between bg-surface-light rounded-2xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] hover:-translate-y-0.5 hover:shadow-[0_4px_6px_rgba(20,32,27,0.06),0_12px_28px_rgba(20,32,27,0.09)] transition-all overflow-hidden group">
<div className="absolute left-0 top-0 bottom-0 w-[4px] bg-accent-light"></div>
<div>
<div className="flex items-start justify-between gap-3 mb-3">
<div className="flex items-center gap-3">
<div className="w-11 h-11 rounded-xl bg-primary-container-light text-primary font-headline-s text-headline-s flex items-center justify-center font-bold shadow-sm">
                  TS
                </div>
<div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light group-hover:text-primary transition-colors leading-snug">
                    Asistente Legal de Convenios y Prácticas
                  </h3>
<p className="font-body-s text-body-s font-medium text-ink-secondary-light">
                    Tesis SAC &amp; Asociados
                  </p>
</div>
</div>
</div>
<div className="flex flex-wrap items-center gap-1.5 mt-3 mb-4">
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[13px]">location_on</span>
                Catacaos
              </span>
<span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container font-body-s text-body-s text-on-surface-variant font-medium">
<span className="material-symbols-outlined text-[13px]">gavel</span>
                Presencial
              </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-full bg-accent-container-light text-on-tertiary-fixed font-body-s text-body-s font-bold tabular-nums">
                S/ 1,025 al mes
              </span>
</div>
</div>
<div className="flex items-center justify-between pt-3 mt-2 bg-surface-container-lowest">
<span className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1">
<span className="material-symbols-outlined text-[15px]">schedule</span>
              Hace 3 días
            </span>
<span className="btn-postular inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-primary text-on-primary font-body-m text-body-m font-bold hover:bg-primary-container transition-colors shadow-sm" type="button">
              Postular
            </span>
</div>
</article>
</div>
</div>
</section>
{/* SECCIÓN CÓMO FUNCIONA */}
<section className="w-full py-16 bg-surface-container-low">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label text-label uppercase tracking-widest text-primary font-bold">Proceso transparente</span>
<h2 className="font-headline-l text-headline-l font-bold text-ink-light tracking-tight mt-1">
          Tu camino a la práctica profesional en 3 pasos simples
        </h2>
<p className="font-body-m text-body-m text-ink-secondary-light mt-2">
          Diseñado para cumplir con los estándares universitarios de la Región Grau y la legislación peruana.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
{/* Paso 1 */}
<div className="relative bg-surface-light rounded-2xl p-7 shadow-[0_2px_12px_rgba(20,32,27,0.04)] flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="font-display text-[32px] font-extrabold text-primary/30 leading-none">01</span>
<div className="w-12 h-12 rounded-xl bg-primary-container-light flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">school</span>
</div>
</div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light mb-2">
            Crea tu perfil
          </h3>
<p className="font-body-m text-body-m text-ink-secondary-light leading-relaxed">
            Registra tu universidad o instituto (<span className="font-semibold text-ink-light">UNP, UDEP, UTP, Zegel, SENATI</span>), tus intereses académicos y disponibilidad horaria.
          </p>
<div className="mt-auto pt-6 flex items-center gap-1.5 text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
            Validación de ciclo académico
          </div>
</div>
{/* Paso 2 */}
<div className="relative bg-surface-light rounded-2xl p-7 shadow-[0_2px_12px_rgba(20,32,27,0.04)] flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="font-display text-[32px] font-extrabold text-primary/30 leading-none">02</span>
<div className="w-12 h-12 rounded-xl bg-primary-container-light flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[24px]">touch_app</span>
</div>
</div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light mb-2">
            Postula con un clic
          </h3>
<p className="font-body-m text-body-m text-ink-secondary-light leading-relaxed">
            Envía tu postulación directa a las empresas formales sin intermediarios ni trámites burocráticos engorrosos.
          </p>
<div className="mt-auto pt-6 flex items-center gap-1.5 text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
            Convenio marco directo
          </div>
</div>
{/* Paso 3 */}
<div className="relative bg-surface-light rounded-2xl p-7 shadow-[0_2px_12px_rgba(20,32,27,0.04)] flex flex-col">
<div className="flex items-center justify-between mb-6">
<span className="font-display text-[32px] font-extrabold text-primary/30 leading-none">03</span>
<div className="w-12 h-12 rounded-xl bg-accent-container-light flex items-center justify-center text-accent-light">
<span className="material-symbols-outlined text-[24px]" style={{fontVariationSettings: '\'FILL\' 1'}}>insights</span>
</div>
</div>
<h3 className="font-headline-s text-headline-s font-bold text-ink-light mb-2">
            Haz seguimiento en tiempo real
          </h3>
<p className="font-body-m text-body-m text-ink-secondary-light leading-relaxed">
            Visualiza el avance de tu candidatura de forma nítida: <span className="text-primary font-semibold">Aplicada</span>, <span className="text-accent-light font-semibold">Revisada</span> o <span className="text-primary-container font-semibold">Aceptada</span> con avisos directos.
          </p>
<div className="mt-auto pt-6 flex items-center gap-1.5 text-primary font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
            Alertas de confirmación
          </div>
</div>
</div>
</div>
</section>
{/* SECCIÓN EMPRESAS QUE CONFÍAN */}
<section className="w-full py-16 bg-surface">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
<div>
<span className="font-label text-label uppercase tracking-widest text-primary font-bold">Red empresarial local</span>
<h2 className="font-headline-l text-headline-l font-bold text-ink-light tracking-tight mt-1">
            Empresas e instituciones líderes en la región
          </h2>
<p className="font-body-m text-body-m text-ink-secondary-light mt-1">
            Convenios activos para prácticas pre y profesionales verificadas por SUNEDU y la Ley de Modalidades Formativas.
          </p>
</div>
<div className="flex items-center gap-2 text-ink-secondary-light font-body-s text-body-s bg-surface-container px-3.5 py-1.5 rounded-full w-fit">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span>120+ empresas registradas</span>
</div>
</div>
{/* Tarjetas Institucionales */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
{/* Empresa 1 */}
<div className="flex flex-col items-center text-center p-5 bg-surface-light rounded-2xl shadow-[0_1px_4px_rgba(20,32,27,0.03)] hover:shadow-[0_4px_16px_rgba(20,32,27,0.08)] transition-all">
<div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary mb-3 shadow-inner">
<span className="material-symbols-outlined text-[28px]">account_balance</span>
</div>
<h4 className="font-headline-s text-[15px] font-bold text-ink-light line-clamp-1">Gobierno Regional Piura</h4>
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light font-semibold mt-1">Sector Público</span>
<span className="font-body-s text-body-s text-primary font-medium mt-1">Piura Centro</span>
</div>
{/* Empresa 2 */}
<div className="flex flex-col items-center text-center p-5 bg-surface-light rounded-2xl shadow-[0_1px_4px_rgba(20,32,27,0.03)] hover:shadow-[0_4px_16px_rgba(20,32,27,0.08)] transition-all">
<div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary mb-3 shadow-inner">
<span className="material-symbols-outlined text-[28px]">payments</span>
</div>
<h4 className="font-headline-s text-[15px] font-bold text-ink-light line-clamp-1">Caja Municipal Piura</h4>
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light font-semibold mt-1">Microfinanzas</span>
<span className="font-body-s text-primary font-medium mt-1">Piura Centro</span>
</div>
{/* Empresa 3 */}
<div className="flex flex-col items-center text-center p-5 bg-surface-light rounded-2xl shadow-[0_1px_4px_rgba(20,32,27,0.03)] hover:shadow-[0_4px_16px_rgba(20,32,27,0.08)] transition-all">
<div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary mb-3 shadow-inner">
<span className="material-symbols-outlined text-[28px]">storefront</span>
</div>
<h4 className="font-headline-s text-[15px] font-bold text-ink-light line-clamp-1">Grupo H&amp;M Piura</h4>
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light font-semibold mt-1">Retail &amp; Distribución</span>
<span className="font-body-s text-primary font-medium mt-1">Castilla</span>
</div>
{/* Empresa 4 */}
<div className="flex flex-col items-center text-center p-5 bg-surface-light rounded-2xl shadow-[0_1px_4px_rgba(20,32,27,0.03)] hover:shadow-[0_4px_16px_rgba(20,32,27,0.08)] transition-all">
<div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary mb-3 shadow-inner">
<span className="material-symbols-outlined text-[28px]">analytics</span>
</div>
<h4 className="font-headline-s text-[15px] font-bold text-ink-light line-clamp-1">Tesis SAC</h4>
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light font-semibold mt-1">Consultoría</span>
<span className="font-body-s text-primary font-medium mt-1">Veintiséis de Octubre</span>
</div>
{/* Empresa 5 */}
<div className="flex flex-col items-center text-center p-5 bg-surface-light rounded-2xl shadow-[0_1px_4px_rgba(20,32,27,0.03)] hover:shadow-[0_4px_16px_rgba(20,32,27,0.08)] transition-all col-span-2 md:col-span-1">
<div className="w-14 h-14 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary mb-3 shadow-inner">
<span className="material-symbols-outlined text-[28px]">engineering</span>
</div>
<h4 className="font-headline-s text-[15px] font-bold text-ink-light line-clamp-1">MARCO Corporación</h4>
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light font-semibold mt-1">Ingeniería &amp; Mar</span>
<span className="font-body-s text-primary font-medium mt-1">Paita</span>
</div>
</div>
</div>
</section>
{/* PANEL CTA PARA EMPRESAS Y EMPLEADORES */}
<section className="w-full pb-16 pt-6">
<div className="max-w-[1200px] mx-auto px-margin">
<div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-container to-primary text-on-primary p-8 md:p-12 shadow-[0_12px_36px_rgba(0,97,79,0.22)]">
{/* Elementos decorativos circulares de fondo */}
<div className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-accent-light/20 blur-2xl"></div>
<div className="pointer-events-none absolute -top-16 -left-16 w-60 h-60 rounded-full bg-white/10 blur-xl"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 flex flex-col gap-3">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 w-fit text-[12px] font-label tracking-wider uppercase font-bold text-accent-container-light">
<span className="material-symbols-outlined text-[16px] text-accent-dark">rocket_launch</span>
              Zona Empleadores Piuranos
            </div>
<h2 className="font-headline-l text-headline-l md:text-[34px] font-bold tracking-tight text-white leading-tight">
              ¿Buscas talento joven y comprometido en Piura?
            </h2>
<p className="font-body-l text-body-l text-primary-container-light max-w-2xl leading-relaxed">
              Publica tus convocatorias de prácticas preprofesionales y laborales sin costo. Conecta directamente con los perfiles mejor calificados de las facultades e institutos de la Región Grau.
            </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 items-stretch lg:items-end justify-center">
<span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-accent-light hover:bg-accent-dark text-ink-light font-headline-s text-headline-s font-bold shadow-[0_4px_16px_rgba(232,161,58,0.35)] transition-all hover:scale-105 active:scale-95 text-center">
<span>Publicar tu oferta gratis</span>
<span className="material-symbols-outlined text-[18px]">add_circle</span>
</span>
<span className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-body-m text-body-m font-semibold transition-colors text-center">
<span>Cómo funciona para empresas</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</span>
</div>
</div>
</div>
</div>
</section>
</div>
{/* SCRIPT DE MICROINTERACCIONES Y TEMA */}
</main><footer className="w-full bg-surface-container-low mt-space-xl pt-space-xl pb-space-lg shadow-[0_-1px_6px_rgba(20,32,27,0.03)]"><div className="max-w-[1200px] mx-auto px-margin"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl"><div className="flex flex-col gap-space-sm"><div className="flex items-center gap-2 mb-space-xs"><div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center"><span className="w-3 h-3 rounded-xs border border-on-primary rotate-45"></span></div><span className="font-headline-s text-headline-s text-ink-light tracking-tight">Práctica<span className="text-primary">PE</span></span></div><p className="font-body-s text-body-s text-ink-secondary-light leading-relaxed">El punto de encuentro lúmino y confiable para las prácticas preprofesionales y profesionales en la Región Grau, Piura.</p><div className="flex items-center gap-2 mt-2"><span className="w-2.5 h-2.5 rounded-full bg-accent-light"></span><span className="font-body-s text-body-s text-ink-secondary-light font-medium">Plataforma regional activa</span></div></div><div className="flex flex-col gap-space-xs"><h4 className="font-headline-s text-[15px] font-bold text-ink-light mb-1">Ofertas por distrito</h4><ul className="flex flex-col gap-1.5"><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Piura Centro</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Castilla</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Veintiséis de Octubre</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Catacaos &amp; Bajo Piura</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Paita &amp; Talara</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Sullana &amp; Chulucanas</li></ul></div><div className="flex flex-col gap-space-xs"><h4 className="font-headline-s text-[15px] font-bold text-ink-light mb-1">Zonas del portal</h4><div className="flex flex-col gap-space-sm"><div className="flex flex-col gap-1"><span className="font-label text-label uppercase tracking-wider text-primary font-bold">Candidatos</span><ul className="flex flex-col gap-1"><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Guía de prácticas universitarias</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Validación de convenios</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Simulador de postulaciones</li></ul></div><div className="flex flex-col gap-1 mt-1"><span className="font-label text-label uppercase tracking-wider text-accent-light font-bold">Empresas</span><ul className="flex flex-col gap-1"><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Publicación rápida de convocatorias</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Alianzas con universidades de Piura</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Planes institucionales</li></ul></div></div></div><div className="flex flex-col gap-space-xs"><h4 className="font-headline-s text-[15px] font-bold text-ink-light mb-1">Contacto &amp; Legal</h4><ul className="flex flex-col gap-1.5 mb-space-sm"><li className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">mail</span>contacto@practicape.pe</li><li className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">location_on</span>Piura, Perú — Región Grau</li></ul><div className="flex flex-col gap-1.5"><a className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors" data-path="aviso-privacidad" href="/privacidad">Aviso de Privacidad y Datos</a><a className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors" data-path="terminos-condiciones" href="/terminos">Términos de Servicio</a><a className="inline-flex items-center gap-2 px-space-sm py-1 rounded bg-surface-light text-ink-secondary-light hover:text-on-surface shadow-[0_1px_4px_rgba(20,32,27,0.04)] font-body-s text-[12px] w-fit" data-path="libro-reclamaciones" href="/reclamaciones"><span className="material-symbols-outlined text-[16px] text-accent-light">menu_book</span>Libro de Reclamaciones</a></div></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm"><span className="font-body-s text-body-s text-ink-secondary-light">© 2026 PrácticaPE. Hecho con orgullo en Piura, Región Grau, Perú.</span><div className="flex items-center gap-space-md text-ink-secondary-light font-body-s text-body-s"><span>Convenios MINEDU &amp; SUNEDU</span><span>RUC 20609823411</span></div></div></div></footer>
    </div>
  );
}