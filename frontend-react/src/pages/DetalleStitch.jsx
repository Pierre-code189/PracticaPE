// Migrado desde .stitch/designs/ — componente DetalleStitch
export default function DetalleStitch(){
  return (
    <div className="stitch-root">
<header className="fixed top-0 left-0 right-0 z-50 bg-surface-light/95 backdrop-blur-md shadow-[0_1px_8px_rgba(20,32,27,0.06)]"><div className="max-w-[1200px] mx-auto px-margin h-16 flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-xl"><a className="flex items-center gap-2 group" data-path="ofertas" href="#"><div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-[0_2px_8px_rgba(0,97,79,0.24)] group-hover:scale-105 transition-transform"><span className="w-4 h-4 rounded-sm border-2 border-on-primary rotate-45 flex items-center justify-center"><span className="w-1.5 h-1.5 bg-accent-light rounded-full"></span></span></div><div className="flex flex-col"><span className="font-headline-s text-headline-s tracking-tight text-ink-light flex items-center">Práctica<span className="text-primary">PE</span></span><span className="font-label text-label uppercase tracking-wider text-ink-secondary-light -mt-1">Piura</span></div></a><nav className="hidden lg:flex items-center gap-space-sm" data-active-classes="bg-primary-container-light text-primary font-bold rounded-full px-space-md py-1.5"><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-1.5 rounded-full transition-colors" data-path="ofertas" href="#">Ofertas</a><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-1.5 rounded-full transition-colors" data-path="mapa" href="#">Mapa</a><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-1.5 rounded-full transition-colors" data-path="empresas" href="#">Empresas</a><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low px-space-md py-1.5 rounded-full transition-colors" data-path="mis-postulaciones" href="#">Mis postulaciones</a></nav></div><div className="flex items-center gap-space-sm"><button aria-label="Cambiar modo claro y oscuro" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">light_mode</span></button><a className="hidden sm:inline-flex items-center justify-center font-body-m text-body-m font-semibold text-secondary px-space-lg py-2 rounded-full hover:bg-surface-container-low hover:text-on-surface transition-colors" data-path="login" href="#">Ingresar</a><a className="inline-flex items-center justify-center font-body-m text-body-m font-bold bg-primary text-on-primary px-space-lg py-2 rounded-full shadow-[0_2px_12px_rgba(0,97,79,0.25)] hover:bg-primary-container transition-all hover:scale-[1.02]" data-path="publicar-oferta" href="#">Publicar oferta</a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-16 bg-surface min-h-[calc(100vh-64px)]"><div className="flex flex-col w-full">
{/* Toast Notification Container */}
<div className="fixed bottom-6 right-6 z-50 transform translate-y-32 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-space-sm bg-primary text-on-primary px-space-lg py-space-md rounded-xl shadow-xl" id="toastNotification">
<span className="material-symbols-outlined text-[24px]">verified</span>
<div className="flex flex-col">
<span className="font-headline-s text-headline-s leading-tight">¡Postulación Enviada!</span>
<span className="font-body-s text-body-s opacity-90">Tu CV y ficha técnica fueron remitidos a Grupo H&amp;M Piura.</span>
</div>
</div>
{/* Breadcrumb Bar */}
<section className="w-full bg-surface-light border-b border-border-light/40 py-3">
<div className="max-w-[1200px] mx-auto px-margin">
<nav aria-label="Miga de pan" className="flex items-center flex-wrap gap-2 text-ink-secondary-light font-body-s text-body-s">
<a className="hover:text-primary transition-colors flex items-center gap-1" href="#">
<span className="material-symbols-outlined text-[16px]">home</span>
          Inicio
        </a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Ofertas</a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Castilla, Piura</a>
<span className="material-symbols-outlined text-[14px] text-outline-variant">chevron_right</span>
<span className="text-ink-light font-semibold truncate max-w-[280px] sm:max-w-none">Practicante de Sistemas y Soporte Cloud</span>
</nav>
</div>
</section>
{/* Main View Container */}
<div className="max-w-[1200px] mx-auto px-margin py-space-xl w-full">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* ========================================== */}
{/* COLUMNA PRINCIPAL (8/12) */}
{/* ========================================== */}
<div className="lg:col-span-8 flex flex-col gap-space-xl">
{/* Header de la Oferta */}
<div className="bg-surface-light rounded-xl p-space-lg sm:p-space-xl shadow-sm relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1.5 bg-accent-light"></div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-center gap-space-md">
<div className="w-14 h-14 rounded-xl bg-primary-container-light flex items-center justify-center font-headline-m text-headline-m text-primary font-extrabold shadow-inner">
                GHM
              </div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-headline-s text-headline-s text-ink-light font-bold">Grupo H&amp;M Piura S.A.C.</span>
<span className="material-symbols-outlined text-primary text-[18px]" style={{fontVariationSettings: '\'FILL\' 1'}} title="Empresa verificada por PrácticaPE">verified</span>
</div>
<span className="font-body-s text-body-s text-ink-secondary-light">RUC: 20482910481 • Sector Retail &amp; Logística Regional</span>
</div>
</div>
<div className="flex items-center gap-1.5 self-start sm:self-auto bg-surface-container-low px-3 py-1.5 rounded-full">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-body-s text-[12px] font-semibold text-primary">Convocatoria Activa 2026-I</span>
</div>
</div>
<h1 className="font-headline-l text-headline-l text-ink-light mb-space-md tracking-tight">
            Practicante de Sistemas y Soporte Cloud
          </h1>
{/* Badges / Chips de Metadata */}
<div className="flex flex-wrap items-center gap-2 mb-space-lg">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-ink-light font-body-s text-body-s font-medium">
<span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
              Castilla, Piura
            </div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-container-light text-on-tertiary-fixed-variant font-body-s text-body-s font-semibold">
<span className="material-symbols-outlined text-[16px]">laptop_mac</span>
              Modalidad Remoto
            </div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-ink-light font-body-s text-body-s font-medium">
<span className="material-symbols-outlined text-[16px] text-primary">school</span>
              Práctica Preprofesional
            </div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-ink-light font-body-s text-body-s font-medium">
<span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
              30h / semana (Ley 28518)
            </div>
</div>
{/* Insignia Salarial & Metadata Temporal */}
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-space-md border-t border-border-light/60">
<div className="flex items-baseline gap-2">
<span className="font-label text-label uppercase text-ink-secondary-light">Subvención mensual:</span>
<span className="font-headline-m text-headline-m font-extrabold text-primary">S/ 1,200</span>
<span className="font-body-s text-body-s text-ink-secondary-light font-medium">(Neta bancarizada)</span>
</div>
<div className="flex items-center gap-2 text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-[16px]">history</span>
<span>Publicada hace 1 día • Vence en 12 días</span>
</div>
</div>
</div>
{/* Sección 'Sobre la práctica' */}
<section className="bg-surface-light rounded-xl p-space-lg sm:p-space-xl shadow-sm">
<div className="flex items-center gap-2 mb-space-md">
<span className="material-symbols-outlined text-primary text-[22px]">info</span>
<h2 className="font-headline-s text-headline-s text-ink-light">Sobre la vacante</h2>
</div>
<div className="flex flex-col gap-space-md font-body-m text-body-m text-on-surface-variant leading-relaxed">
<p>
              En <strong className="text-ink-light">Grupo H&amp;M Piura</strong>, empresa líder en distribución de consumo masivo en el norte del Perú, estamos en la búsqueda de un talento universitario para sumarse a nuestro equipo de Tecnología e Infraestructura. Formarás parte de la transformación digital de nuestros centros de distribución ubicados en Piura, Sullana y Paita.
            </p>
<p>
              El practicante brindará asistencia en la operación de nuestra nube corporativa, soportando la continuidad de más de 20 puntos de venta regionales y garantizando la correcta conectividad con Microsoft Azure y Google Workspace. Es un entorno de aprendizaje acelerado con acompañamiento de mentores senior e ingenieros certificados.
            </p>
</div>
</section>
{/* Sección 'Funciones principales' */}
<section className="bg-surface-light rounded-xl p-space-lg sm:p-space-xl shadow-sm">
<div className="flex items-center gap-2 mb-space-md">
<span className="material-symbols-outlined text-primary text-[22px]">checklist</span>
<h2 className="font-headline-s text-headline-s text-ink-light">Funciones principales</h2>
</div>
<ul className="flex flex-col gap-space-sm font-body-m text-body-m text-on-surface-variant">
<li className="flex items-start gap-3 bg-surface-container-low/60 p-3 rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
<span>Monitoreo y soporte de conectividad de servidores locales e infraestructura cloud AWS/Azure en tiendas de Piura y Castilla.</span>
</li>
<li className="flex items-start gap-3 bg-surface-container-low/60 p-3 rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
<span>Atención oportuna de tickets e incidentes de soporte técnico de nivel 1 y 2 para usuarios administrativos y operativos.</span>
</li>
<li className="flex items-start gap-3 bg-surface-container-low/60 p-3 rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
<span>Apoyo en la automatización de respaldos diarios y pruebas de planes de continuidad operativa y contingencia en nube.</span>
</li>
<li className="flex items-start gap-3 bg-surface-container-low/60 p-3 rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
<span>Configuración y despliegue de perfiles de usuario corporativo, seguridad perimetral básica y control de credenciales.</span>
</li>
<li className="flex items-start gap-3 bg-surface-container-low/60 p-3 rounded-lg">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5 shrink-0" style={{fontVariationSettings: '\'FILL\' 1'}}>check_circle</span>
<span>Documentación de manuales operativos y protocolos técnicos bajo la normativa de ciberseguridad corporativa.</span>
</li>
</ul>
</section>
{/* Sección 'Requisitos' */}
<section className="bg-surface-light rounded-xl p-space-lg sm:p-space-xl shadow-sm">
<div className="flex items-center gap-2 mb-space-md">
<span className="material-symbols-outlined text-primary text-[22px]">workspace_premium</span>
<h2 className="font-headline-s text-headline-s text-ink-light">Requisitos del candidato</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary font-headline-s text-[16px]">
<span className="material-symbols-outlined text-[20px]">school</span>
<span>Formación Académica</span>
</div>
<p className="font-body-s text-body-s text-ink-secondary-light">
                Estudiante de 8vo a 10mo ciclo o egresado reciente de <strong className="text-ink-light">Ingeniería de Sistemas, Informática o Telecomunicaciones</strong> de universidades e institutos de la región (UNP, UDEP, UTP, Zegel Ipae, Senati).
              </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary font-headline-s text-[16px]">
<span className="material-symbols-outlined text-[20px]">terminal</span>
<span>Conocimientos Técnicos</span>
</div>
<p className="font-body-s text-body-s text-ink-secondary-light">
                Fundamentos sólidos de administración Windows/Linux Server, nociones de redes TCP/IP y familiaridad con servicios Cloud (AWS, Microsoft Azure o Google Cloud Platform).
              </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary font-headline-s text-[16px]">
<span className="material-symbols-outlined text-[20px]">handshake</span>
<span>Convenio Universitario</span>
</div>
<p className="font-body-s text-body-s text-ink-secondary-light">
                Disponibilidad para suscribir Convenio de Prácticas Preprofesionales conforme a la <strong className="text-ink-light">Ley N° 28518</strong> con carta de presentación de la facultad.
              </p>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center gap-2 text-primary font-headline-s text-[16px]">
<span className="material-symbols-outlined text-[20px]">psychology</span>
<span>Competencias Blandas</span>
</div>
<p className="font-body-s text-body-s text-ink-secondary-light">
                Proactividad, pensamiento analítico frente a contingencias y excelente capacidad para comunicarse con usuarios no técnicos.
              </p>
</div>
</div>
</section>
{/* Sección 'Horario y duración' */}
<section className="bg-surface-light rounded-xl p-space-lg sm:p-space-xl shadow-sm">
<div className="flex items-center gap-2 mb-space-md">
<span className="material-symbols-outlined text-primary text-[22px]">date_range</span>
<h2 className="font-headline-s text-headline-s text-ink-light">Horario, duración y condiciones</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md">
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-1 border-l-4 border-primary">
<span className="font-label text-label uppercase text-ink-secondary-light">Jornada semanal</span>
<span className="font-headline-s text-headline-s text-ink-light font-bold">30 Horas</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Lunes a Viernes de 8:00 am a 2:30 pm (Compatible con clases)</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-1 border-l-4 border-accent-light">
<span className="font-label text-label uppercase text-ink-secondary-light">Periodo inicial</span>
<span className="font-headline-s text-headline-s text-ink-light font-bold">6 Meses</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Renovable según desempeño académico y evaluación semestral</span>
</div>
<div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-1 border-l-4 border-primary-dark">
<span className="font-label text-label uppercase text-ink-secondary-light">Fecha de incorporación</span>
<span className="font-headline-s text-headline-s text-ink-light font-bold">01 Mar 2026</span>
<span className="font-body-s text-body-s text-ink-secondary-light">Inicio alineado al ciclo académico 2026-I</span>
</div>
</div>
</section>
{/* Sección 'La empresa' */}
<section className="bg-surface-light rounded-xl p-space-lg sm:p-space-xl shadow-sm">
<div className="flex items-start justify-between gap-space-md mb-space-md">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary font-headline-s font-bold">
                GHM
              </div>
<div className="flex flex-col">
<h3 className="font-headline-s text-headline-s text-ink-light">Grupo H&amp;M Piura</h3>
<span className="font-body-s text-body-s text-ink-secondary-light">Comercio Mayorista, Logística y Retail Regional</span>
</div>
</div>
<a className="font-body-s text-body-s font-bold text-primary hover:underline flex items-center gap-1" href="#">
              Ver perfil corporativo
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
</a>
</div>
<p className="font-body-m text-body-m text-on-surface-variant leading-relaxed mb-space-md">
            Con más de 18 años de trayectoria en el nororiente peruano, Grupo H&amp;M Piura es una corporación regional que gestiona 4 marcas de retail comercial, centros de almacenaje en Castilla y una flota de distribución que conecta Piura, Tumbes y Lambayeque. Cuenta con un equipo multidisciplinario de más de 200 colaboradores.
          </p>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-md border-t border-border-light/60">
<div className="flex flex-col">
<span className="font-label text-label uppercase text-ink-secondary-light">Sede Principal</span>
<span className="font-body-s text-body-s font-semibold text-ink-light">Av. Progreso 1420, Castilla</span>
</div>
<div className="flex flex-col">
<span className="font-label text-label uppercase text-ink-secondary-light">Tamaño</span>
<span className="font-body-s text-body-s font-semibold text-ink-light">150 - 250 personas</span>
</div>
<div className="flex flex-col">
<span className="font-label text-label uppercase text-ink-secondary-light">Practicantes actuales</span>
<span className="font-body-s text-body-s font-semibold text-ink-light">8 estudiantes activos</span>
</div>
<div className="flex flex-col">
<span className="font-label text-label uppercase text-ink-secondary-light">Tasa de contratación</span>
<span className="font-body-s text-body-s font-semibold text-primary">74% tras prácticas</span>
</div>
</div>
</section>
{/* Sección 'Ubicación y distancia' */}
<section className="bg-surface-light rounded-xl p-space-lg sm:p-space-xl shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div>
<h2 className="font-headline-s text-headline-s text-ink-light">Ubicación y Centro de Operaciones</h2>
<p className="font-body-s text-body-s text-ink-secondary-light">Oficina Administrativa Castilla • Piura</p>
</div>
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container-light text-primary font-body-s text-body-s font-bold">
<span className="material-symbols-outlined text-[16px]">navigation</span>
              A 2.4 km de tu ubicación (Piura Centro)
            </div>
</div>
{/* Mapa Desaturado Estilizado con Pin Esmeralda */}
<div className="relative w-full h-64 rounded-xl overflow-hidden bg-surface-container-high" data-location="Av. Progreso 1420, Castilla, Piura, Peru">
{/* Representación vectorial estilizada del mapa urbano de Piura-Castilla y Río Piura */}
<svg className="absolute inset-0 w-full h-full object-cover opacity-75" fill="none" viewbox="0 0 800 320" xmlns="http://www.w3.org/2000/svg">
<rect fill="#EBF2ED" height="320" width="800"></rect>
{/* Trazo curvo del Río Piura */}
<path d="M 320,0 C 340,90 290,160 360,240 C 390,270 410,320 410,320" stroke="#BDD6CD" stroke-linecap="round" stroke-width="42"></path>
<path d="M 320,0 C 340,90 290,160 360,240 C 390,270 410,320 410,320" stroke="#CCE0D9" stroke-linecap="round" stroke-width="26"></path>
{/* Vías urbanas Castilla / Piura */}
<line stroke="#DFE7E2" stroke-width="8" x1="0" x2="800" y1="140" y2="150"></line>
<line stroke="#DFE7E2" stroke-width="6" x1="120" x2="200" y1="0" y2="320"></line>
<line stroke="#DFE7E2" stroke-width="7" x1="450" x2="520" y1="0" y2="320"></line>
<line stroke="#D1DDD6" stroke-width="9" x1="330" x2="780" y1="145" y2="110"></line> {/* Av. Progreso */}
{/* Manzanas / Bloques urbanos */}
<rect fill="#FFFFFF" height="50" opacity="0.8" rx="4" width="70" x="470" y="40"></rect>
<rect fill="#FFFFFF" height="60" opacity="0.8" rx="4" width="80" x="560" y="35"></rect>
<rect fill="#FFFFFF" height="70" opacity="0.8" rx="4" width="90" x="460" y="170"></rect>
<rect fill="#FFFFFF" height="80" opacity="0.8" rx="4" width="110" x="570" y="160"></rect>
<rect fill="#FFFFFF" height="50" opacity="0.8" rx="4" width="80" x="180" y="70"></rect>
<rect fill="#FFFFFF" height="65" opacity="0.8" rx="4" width="90" x="190" y="170"></rect>
{/* Etiquetas textuales geográficas */}
<text fill="#6E7A75" font-family="Inter" font-size="12" font-weight="700" letter-spacing="1" x="180" y="45">PIURA CENTRO</text>
<text fill="#6E7A75" font-family="Inter" font-size="12" font-weight="700" letter-spacing="1" x="500" y="30">DISTRITO DE CASTILLA</text>
<text fill="#51625A" font-family="Inter" font-size="11" font-weight="600" x="310" y="295">Río Piura (Puente Bolognesi)</text>
<text fill="#00614F" font-family="Inter" font-size="11" font-weight="600" x="560" y="125">Av. Progreso (Cdra. 14)</text>
</svg>
{/* Pin interactivo flotante en Sede Castilla */}
<div className="absolute left-[62%] top-[42%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
<span className="absolute -top-1 w-8 h-8 rounded-full bg-primary/20 animate-ping"></span>
<div className="relative bg-primary text-on-primary w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-surface-light group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[20px]" style={{fontVariationSettings: '\'FILL\' 1'}}>business</span>
</div>
<div className="bg-surface-light text-ink-light px-3 py-1 rounded-md text-[11px] font-bold shadow-md mt-1 whitespace-nowrap border border-border-light flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-accent-light"></span>
                Sede Central Castilla
              </div>
</div>
{/* Botón flotante para ver mapa exterior */}
<div className="absolute bottom-3 right-3">
<button className="bg-surface-light/95 hover:bg-surface-light text-ink-light font-body-s text-body-s font-semibold px-space-md py-1.5 rounded-lg shadow-md flex items-center gap-1.5 backdrop-blur-sm transition-all hover:scale-105">
<span className="material-symbols-outlined text-[16px] text-primary">map</span>
                Explorar en mapa completo
              </button>
</div>
</div>
<div className="p-3 bg-surface-container-low rounded-lg flex items-start gap-2.5 text-ink-secondary-light font-body-s text-body-s">
<span className="material-symbols-outlined text-primary text-[18px] shrink-0 mt-0.5">info</span>
<span><strong>Nota de presencialidad:</strong> Aunque el puesto es predominantemente remoto, se programan inducciones iniciales de seguridad y sesiones quincenales de planificación en la sede Castilla.</span>
</div>
</section>
{/* Sección 'Ofertas similares' */}
<section className="flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<h2 className="font-headline-s text-headline-s text-ink-light">Convocatorias similares en la Región Grau</h2>
<a className="font-body-s text-body-s font-bold text-primary hover:underline" href="#">Ver todas (48)</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
{/* Oferta similar 1 */}
<div className="bg-surface-light rounded-xl p-space-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between border-l-4 border-accent-light group cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light">Logística y Puertos</span>
<span className="font-body-s text-primary font-bold">S/ 1,300</span>
</div>
<h4 className="font-headline-s text-[15px] text-ink-light font-bold group-hover:text-primary transition-colors leading-snug">
                  Practicante Preprofesional de Operaciones Portuarias
                </h4>
<p className="font-body-s text-[12px] text-ink-secondary-light">Terminal Portuario Euroandino • Paita</p>
</div>
<div className="flex items-center justify-between pt-space-sm mt-space-sm border-t border-border-light/50 font-body-s text-[11px] text-ink-secondary-light">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">location_on</span> Paita</span>
<span>Híbrido</span>
</div>
</div>
{/* Oferta similar 2 */}
<div className="bg-surface-light rounded-xl p-space-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between border-l-4 border-accent-light group cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light">Finanzas y Banca</span>
<span className="font-body-s text-primary font-bold">S/ 1,450</span>
</div>
<h4 className="font-headline-s text-[15px] text-ink-light font-bold group-hover:text-primary transition-colors leading-snug">
                  Asistente Junior de Facturación y Finanzas
                </h4>
<p className="font-body-s text-[12px] text-ink-secondary-light">Caja Municipal de Piura • Piura Centro</p>
</div>
<div className="flex items-center justify-between pt-space-sm mt-space-sm border-t border-border-light/50 font-body-s text-[11px] text-ink-secondary-light">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">location_on</span> Piura</span>
<span>Presencial</span>
</div>
</div>
{/* Oferta similar 3 */}
<div className="bg-surface-light rounded-xl p-space-md shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col justify-between border-l-4 border-accent-light group cursor-pointer">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label text-[10px] uppercase tracking-wider text-ink-secondary-light">Agroindustria</span>
<span className="font-body-s text-primary font-bold">S/ 1,150</span>
</div>
<h4 className="font-headline-s text-[15px] text-ink-light font-bold group-hover:text-primary transition-colors leading-snug">
                  Practicante de Mantenimiento Electromecánico
                </h4>
<p className="font-body-s text-[12px] text-ink-secondary-light">Agroindustrias del Alto Piura • Chulucanas</p>
</div>
<div className="flex items-center justify-between pt-space-sm mt-space-sm border-t border-border-light/50 font-body-s text-[11px] text-ink-secondary-light">
<span className="flex items-center gap-1"><span className="material-symbols-outlined text-[13px]">location_on</span> Chulucanas</span>
<span>Planta</span>
</div>
</div>
</div>
</section>
</div>
{/* ========================================== */}
{/* BARRA LATERAL / SIDEBAR STICKY (4/12) */}
{/* ========================================== */}
<aside className="lg:col-span-4 flex flex-col gap-space-lg lg:sticky lg:top-20">
{/* Tarjeta de Postulación Principal */}
<div className="bg-surface-light rounded-xl p-space-lg shadow-md border-t-4 border-primary">
<div className="flex flex-col gap-1 mb-space-md">
<span className="font-label text-label uppercase tracking-wider text-ink-secondary-light">Subvención mensual</span>
<div className="flex items-baseline gap-1.5">
<span className="font-display text-[32px] font-extrabold text-primary">S/ 1,200</span>
<span className="font-body-s text-body-s text-ink-secondary-light">/ mes</span>
</div>
<div className="flex items-center gap-1.5 text-primary text-[12px] font-semibold">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
<span>100% formal Ley N° 28518 + FOLA cubierto</span>
</div>
</div>
{/* Alerta de vacantes */}
<div className="bg-surface-container-low p-space-sm rounded-lg mb-space-md flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-accent-light text-[20px]">group</span>
<span className="font-body-s text-body-s text-ink-light font-medium">Vacantes disponibles:</span>
</div>
<span className="font-body-s text-body-s font-bold text-accent-dark">2 de 3</span>
</div>
<p className="font-body-s text-[12px] text-ink-secondary-light mb-space-md">
            18 estudiantes han enviado su CV. El comité de TI de Grupo H&amp;M revisa perfiles diariamente.
          </p>
{/* Botones de Acción Primaria */}
<div className="flex flex-col gap-space-sm mb-space-md">
<button className="w-full bg-primary hover:bg-primary-container text-on-primary font-headline-s text-[15px] font-bold py-3.5 px-space-md rounded-full shadow-[0_4px_14px_rgba(0,97,79,0.25)] transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2" id="btnApply">
<span className="material-symbols-outlined text-[20px]" id="btnApplyIcon">send</span>
<span id="btnApplyText">Postular ahora con mi CV</span>
</button>
<button className="w-full bg-surface-container-low hover:bg-surface-container text-secondary font-headline-s text-[14px] font-semibold py-2.5 px-space-md rounded-full transition-colors flex items-center justify-center gap-2" id="btnBookmark">
<span className="material-symbols-outlined text-[18px]" id="bookmarkIcon">bookmark_border</span>
<span id="bookmarkText">Guardar en mis favoritas</span>
</button>
</div>
{/* Acciones secundarias */}
<div className="flex items-center justify-around pt-space-sm border-t border-border-light/60 text-ink-secondary-light font-body-s text-[12px]">
<button className="hover:text-primary transition-colors flex items-center gap-1 py-1">
<span className="material-symbols-outlined text-[16px]">share</span>
              Compartir oferta
            </button>
<span className="text-outline-variant">•</span>
<button className="hover:text-primary transition-colors flex items-center gap-1 py-1">
<span className="material-symbols-outlined text-[16px]">download</span>
              Ficha en PDF
            </button>
</div>
</div>
{/* Tarjeta de Estado del Proceso de Selección */}
<div className="bg-surface-light rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-md">
<h3 className="font-headline-s text-[15px] text-ink-light font-bold">Fases de la convocatoria</h3>
<span className="font-label text-[10px] uppercase text-primary font-bold">Piura 2026-I</span>
</div>
{/* Stepper vertical con 4 etapas */}
<div className="flex flex-col gap-space-sm relative">
<div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-surface-container-high"></div>
{/* Paso 1 */}
<div className="flex items-start gap-3 relative z-10">
<div className="w-7 h-7 rounded-full bg-primary-container-light text-primary flex items-center justify-center text-xs font-bold ring-4 ring-surface-light" id="step1Indicator">
                1
              </div>
<div className="flex flex-col">
<span className="font-body-s text-[13px] font-bold text-ink-light">Recepción de CV</span>
<span className="font-body-s text-[11px] text-ink-secondary-light">Cierre de postulaciones: 25 Febrero</span>
</div>
</div>
{/* Paso 2 */}
<div className="flex items-start gap-3 relative z-10">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-secondary flex items-center justify-center text-xs font-bold ring-4 ring-surface-light">
                2
              </div>
<div className="flex flex-col">
<span className="font-body-s text-[13px] font-semibold text-secondary">Evaluación técnica virtual</span>
<span className="font-body-s text-[11px] text-ink-secondary-light">Preguntas sobre redes y cloud</span>
</div>
</div>
{/* Paso 3 */}
<div className="flex items-start gap-3 relative z-10">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-secondary flex items-center justify-center text-xs font-bold ring-4 ring-surface-light">
                3
              </div>
<div className="flex flex-col">
<span className="font-body-s text-[13px] font-semibold text-secondary">Entrevista con Jefatura TI</span>
<span className="font-body-s text-[11px] text-ink-secondary-light">Virtual vía Meet / Teams</span>
</div>
</div>
{/* Paso 4 */}
<div className="flex items-start gap-3 relative z-10">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-secondary flex items-center justify-center text-xs font-bold ring-4 ring-surface-light">
                4
              </div>
<div className="flex flex-col">
<span className="font-body-s text-[13px] font-semibold text-secondary">Firma de Convenio y Alta FOLA</span>
<span className="font-body-s text-[11px] text-ink-secondary-light">Validación universitaria y seguro médico</span>
</div>
</div>
</div>
<div className="mt-space-md p-2.5 rounded-lg bg-surface-container-low text-ink-secondary-light font-body-s text-[11px] flex items-center gap-2" id="statusAlertBox">
<span className="material-symbols-outlined text-[16px] text-primary">touch_app</span>
<span id="statusAlertText">Aún no has postulado. Hazlo antes del cierre de vacantes.</span>
</div>
</div>
{/* Tarjeta de Confianza y Garantía Laboral */}
<div className="bg-surface-light rounded-xl p-space-lg shadow-sm border border-border-light/50">
<div className="flex items-center gap-2 mb-2 text-primary">
<span className="material-symbols-outlined text-[22px]" style={{fontVariationSettings: '\'FILL\' 1'}}>shield</span>
<h4 className="font-headline-s text-[14px] text-ink-light font-bold">Garantía PrácticaPE Piura</h4>
</div>
<p className="font-body-s text-[12px] text-ink-secondary-light leading-relaxed mb-space-sm">
            Esta convocatoria ha sido validada administrativamente. Grupo H&amp;M mantiene convenios activos con las principales universidades e institutos de la Región Grau.
          </p>
<div className="p-2.5 bg-accent-container-light/50 rounded-lg flex items-start gap-2 text-[11px] text-on-tertiary-fixed-variant leading-tight">
<span className="material-symbols-outlined text-[16px] text-accent-light shrink-0">policy</span>
<span>Ninguna empresa formal en el Perú cobra por participar en procesos de selección o evaluación.</span>
</div>
<a className="inline-flex items-center gap-1 text-[11px] text-secondary hover:text-error transition-colors mt-space-sm underline decoration-dotted" href="#">
<span className="material-symbols-outlined text-[13px]">flag</span>
            Reportar esta vacante si presenta irregularidades
          </a>
</div>
</aside>
</div>
</div>
{/* Barra Sticky Flotante en Móviles para Postulación */}
<div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface-light/95 backdrop-blur-md border-t border-border-light p-3 shadow-2xl flex items-center justify-between gap-space-md">
<div className="flex flex-col">
<span className="font-label text-[10px] uppercase text-ink-secondary-light">Subvención mensual</span>
<span className="font-headline-s text-headline-s font-extrabold text-primary leading-tight">S/ 1,200</span>
</div>
<div className="flex items-center gap-2">
<button className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">bookmark_border</span>
</button>
<button className="bg-primary text-on-primary font-headline-s text-[14px] font-bold px-space-lg py-2.5 rounded-full shadow-md">
        Postular
      </button>
</div>
</div>
{/* Microinteractividad Funcional en JavaScript */}

</div></main><footer className="w-full bg-surface-container-low mt-space-xl pt-space-xl pb-space-lg shadow-[0_-1px_6px_rgba(20,32,27,0.03)]"><div className="max-w-[1200px] mx-auto px-margin"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl"><div className="flex flex-col gap-space-sm"><div className="flex items-center gap-2 mb-space-xs"><div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center"><span className="w-3 h-3 rounded-xs border border-on-primary rotate-45"></span></div><span className="font-headline-s text-headline-s text-ink-light tracking-tight">Práctica<span className="text-primary">PE</span></span></div><p className="font-body-s text-body-s text-ink-secondary-light leading-relaxed">El punto de encuentro lúmino y confiable para las prácticas preprofesionales y profesionales en la Región Grau, Piura.</p><div className="flex items-center gap-2 mt-2"><span className="w-2.5 h-2.5 rounded-full bg-accent-light"></span><span className="font-body-s text-body-s text-ink-secondary-light font-medium">Plataforma regional activa</span></div></div><div className="flex flex-col gap-space-xs"><h4 className="font-headline-s text-[15px] font-bold text-ink-light mb-1">Ofertas por distrito</h4><ul className="flex flex-col gap-1.5"><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Piura Centro</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Castilla</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Veintiséis de Octubre</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Catacaos &amp; Bajo Piura</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Paita &amp; Talara</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Sullana &amp; Chulucanas</li></ul></div><div className="flex flex-col gap-space-xs"><h4 className="font-headline-s text-[15px] font-bold text-ink-light mb-1">Zonas del portal</h4><div className="flex flex-col gap-space-sm"><div className="flex flex-col gap-1"><span className="font-label text-label uppercase tracking-wider text-primary font-bold">Candidatos</span><ul className="flex flex-col gap-1"><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Guía de prácticas universitarias</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Validación de convenios</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Simulador de postulaciones</li></ul></div><div className="flex flex-col gap-1 mt-1"><span className="font-label text-label uppercase tracking-wider text-accent-light font-bold">Empresas</span><ul className="flex flex-col gap-1"><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Publicación rápida de convocatorias</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Alianzas con universidades de Piura</li><li className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors cursor-pointer">Planes institucionales</li></ul></div></div></div><div className="flex flex-col gap-space-xs"><h4 className="font-headline-s text-[15px] font-bold text-ink-light mb-1">Contacto &amp; Legal</h4><ul className="flex flex-col gap-1.5 mb-space-sm"><li className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">mail</span>contacto@practicape.pe</li><li className="font-body-s text-body-s text-ink-secondary-light flex items-center gap-1.5"><span className="material-symbols-outlined text-[16px] text-primary">location_on</span>Piura, Perú — Región Grau</li></ul><div className="flex flex-col gap-1.5"><a className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors" data-path="aviso-privacidad" href="#">Aviso de Privacidad y Datos</a><a className="font-body-s text-body-s text-ink-secondary-light hover:text-primary transition-colors" data-path="terminos-condiciones" href="#">Términos de Servicio</a><a className="inline-flex items-center gap-2 px-space-sm py-1 rounded bg-surface-light text-ink-secondary-light hover:text-on-surface shadow-[0_1px_4px_rgba(20,32,27,0.04)] font-body-s text-[12px] w-fit" data-path="libro-reclamaciones" href="#"><span className="material-symbols-outlined text-[16px] text-accent-light">menu_book</span>Libro de Reclamaciones</a></div></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm"><span className="font-body-s text-body-s text-ink-secondary-light">© 2026 PrácticaPE. Hecho con orgullo en Piura, Región Grau, Perú.</span><div className="flex items-center gap-space-md text-ink-secondary-light font-body-s text-body-s"><span>Convenios MINEDU &amp; SUNEDU</span><span>RUC 20609823411</span></div></div></div></footer>
    </div>
  );
}
