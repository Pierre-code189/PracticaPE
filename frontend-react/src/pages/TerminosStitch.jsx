// Migrado desde .stitch/designs/ — componente TerminosStitch
export default function TerminosStitch(){
  return (
    <div className="stitch-root">
<header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-container-lowest shadow-[0_1px_8px_rgba(20,32,27,0.06)]"><div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between"><div className="flex items-center gap-space-lg"><a className="flex items-center gap-space-xs" data-path="ofertas" href="/ofertas"><span className="font-headline-m text-headline-m text-primary tracking-tight">Práctica<span className="text-accent-light">PE</span></span></a><nav className="hidden md:flex items-center gap-space-lg ml-space-md" data-active-classes="text-primary font-headline-s font-bold"><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface transition-colors" data-path="ofertas" href="/ofertas">Ofertas</a><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface transition-colors" data-path="empresas" href="/empresas">Empresas</a><span className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface transition-colors" data-path="convenios">Convenios</span><span aria-current="page" className="transition-colors text-primary font-headline-s font-bold" data-path="legal">Legal</span></nav></div><div className="flex items-center gap-space-md"><button aria-label="Cambiar tema" className="p-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full transition-colors flex items-center justify-center" type="button"><svg className="w-5 h-5 block dark:hidden" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg><svg className="w-5 h-5 hidden dark:block" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg></button><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-16 bg-background min-h-screen"><div className="flex flex-col w-full">
{/* Top Breadcrumb & Institutional Header Container */}
<section className="w-full bg-surface-container-low/70 py-space-xl">
<div className="max-w-[1200px] mx-auto px-margin">
{/* Migas de pan */}
<nav aria-label="Migas de pan" className="mb-space-md">
<ol className="flex items-center gap-space-xs font-body-s text-body-s text-on-surface-variant">
<li>
<a className="hover:text-primary transition-colors flex items-center gap-1" href="/">
<span className="material-symbols-outlined text-[16px]">home</span>
<span>Inicio</span>
</a>
</li>
<li>
<span className="text-outline-variant">/</span>
</li>
<li>
<span className="text-on-surface-variant font-medium">Legal</span>
</li>
<li>
<span className="text-outline-variant">/</span>
</li>
<li aria-current="page">
<span className="text-primary font-semibold">Términos y Condiciones</span>
</li>
</ol>
</nav>
{/* Cabecera Institucional */}
<div className="space-y-space-sm max-w-4xl">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center font-label text-label uppercase text-primary tracking-widest bg-primary-container-light text-primary px-2.5 py-1 rounded-full">
            LEGAL
          </span>
<span className="h-1 w-1 rounded-full bg-outline-variant"></span>
<span className="font-label text-label uppercase text-on-surface-variant tracking-wider">
            MARCO REGULATORIO
          </span>
</div>
<h1 className="font-display text-display text-on-surface tracking-tight">
          Términos y Condiciones de Uso
        </h1>
<p className="font-body-l text-body-l text-on-surface-variant leading-relaxed">
          Bases y directrices jurídicas que rigen el acceso, registro y utilización del ecosistema digital de inserción formativa en Piura.
        </p>
{/* Chips de Metadatos */}
<div className="flex flex-wrap items-center gap-space-xs pt-space-xs">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest text-primary font-body-s text-body-s shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary-dark"></span>
            Vigente
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">groups</span>
            Candidatos y empleadores
          </span>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-body-s text-body-s">
<span className="material-symbols-outlined text-[14px]">location_on</span>
            Perú
          </span>
</div>
</div>
</div>
</section>
{/* Main Content Layout (1200px max, split columns) */}
<div className="max-w-[1200px] w-full mx-auto px-margin py-space-xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
{/* COLUMNA IZQUIERDA: Índice Pegajoso / Sticky Sidebar (4 cols) */}
<aside className="lg:col-span-4 sticky top-24 z-10">
<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">menu_book</span>
<span className="font-label text-label uppercase text-on-surface tracking-wider font-bold">
                CONTENIDO DEL DOCUMENTO
              </span>
</div>
<span className="font-label text-label text-primary bg-primary-container-light px-2 py-0.5 rounded-full">10 SECCIONES</span>
</div>
{/* Interactive Nav List */}
<nav aria-label="Secciones del documento" className="space-y-1" id="legal-index-nav">
<a className="group flex items-center justify-between px-3 py-2 rounded-lg bg-primary-container-light text-primary font-headline-s text-body-m font-semibold transition-all" data-section="1" href="/terminos">
<span className="truncate">1. Aceptación de los términos</span>
<span className="material-symbols-outlined text-[18px] text-primary">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="2" href="#seccion-2">
<span className="truncate">2. Naturaleza del servicio</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="3" href="#seccion-3">
<span className="truncate">3. Registro y cuenta de usuario</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="4" href="#seccion-4">
<span className="truncate">4. Obligaciones del candidato</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="5" href="#seccion-5">
<span className="truncate">5. Obligaciones del empleador</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="6" href="#seccion-6">
<span className="truncate">6. Propiedad intelectual</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="7" href="#seccion-7">
<span className="truncate">7. Planes y condiciones</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="8" href="#seccion-8">
<span className="truncate">8. Suspensión o cancelación</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="9" href="#seccion-9">
<span className="truncate">9. Limitación de responsabilidad</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
<a className="group flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-m text-body-m transition-all" data-section="10" href="#seccion-10">
<span className="truncate">10. Ley aplicable y fuero</span>
<span className="material-symbols-outlined text-[18px] opacity-0 group-hover:opacity-100 text-on-surface-variant">arrow_right</span>
</a>
</nav>
{/* Ámbito territorial badge en la base */}
<div className="pt-space-sm bg-surface-container-low rounded-lg p-3">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary text-[18px]">verified</span>
<span className="font-label text-label uppercase text-on-surface font-semibold tracking-wide">Ámbito territorial</span>
</div>
<p className="font-body-s text-body-s text-on-surface-variant mt-1 leading-snug">
              Región Grau / Piura — Validez jurídica y alcance formativo en todo el departamento y sedes vinculadas.
            </p>
</div>
</div>
</aside>
{/* COLUMNA DERECHA: Lectura Central (8 cols, max-w-[720px]) */}
<main className="lg:col-span-8 max-w-[720px] space-y-space-xl">
{/* SECCIÓN 1 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-1">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 01</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            1. Aceptación de los términos
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              El acceso, navegación, registro e interacción dentro del portal web PrácticaPE atribuye inmediatamente la condición formal de usuario, conllevando la aceptación plena, consciente e irrevocable de todas y cada una de las cláusulas, deberes y directrices incorporadas en el presente documento de Términos y Condiciones de Uso.
            </p>
<p>
              Cualquier persona natural o jurídica que no esté enteramente conforme con estas disposiciones o con las políticas complementarias del servicio deberá abstenerse categóricamente de registrarse, cargar credenciales, remitir candidaturas o publicar oportunidades a través de esta plataforma digital. La continuidad en la navegación constituye ratificación incondicional de los acuerdos normativos vigentes.
            </p>
</div>
</article>
{/* SECCIÓN 2 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-2">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 02</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            2. Naturaleza del servicio
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              PrácticaPE funciona de forma exclusiva como un canal digital regionalizado de intermediación, enlace, publicación y visibilización de convocatorias formativas. El propósito central consiste en articular eficientemente el talento universitario y técnico emergente con empresas, consultorías y organizaciones de la Región Piura que requieran integrar practicantes en estricta conformidad con los esquemas de aprendizaje productivo.
            </p>
<p>
              El servicio prioriza y promueve el cumplimiento de los convenios formativos reglamentados en el país, fomentando la igualdad de oportunidades, la transparencia en los procesos de postulación, la meritocracia académica y la erradicación de prácticas laborales desnaturalizadas o no remuneradas que contravengan la dignidad de los jóvenes talentos.
            </p>
</div>
</article>
{/* SECCIÓN 3 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-3">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 03</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            3. Registro y cuenta de usuario
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              Para acceder a las utilidades completas de postulación o difusión de vacantes es mandatorio completar el formulario de registro correspondiente. Toda la información suministrada al darse de alta debe ser auténtica, completa, fidedigna y periódicamente actualizada por el titular.
            </p>
<p>
              Las credenciales de acceso, contraseñas y factores de autenticación son de carácter estrictamente personal e intransferible. Queda prohibida la cesión, préstamo, venta o uso compartido de cuentas con terceros. Toda acción, postulación, mensaje o publicación efectuada desde un perfil activo se presumirá legítimamente realizada por el usuario registrado titular.
            </p>
</div>
</article>
{/* SECCIÓN 4 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-4">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 04</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            4. Obligaciones del candidato
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              Los postulantes tienen la responsabilidad primordial de registrar información fidedigna e inalterada respecto a su formación profesional, centro universitario o técnico de procedencia, ciclo académico actual, tercio o décimo superior acreditado y disponibilidad real para jornadas de aprendizaje formativo.
            </p>
</div>
{/* TARJETA DESTACADA: Lista de verificación candidato */}
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]">fact_check</span>
<h3 className="font-headline-s text-headline-s text-on-surface">
                Compromisos ineludibles del postulante
              </h3>
</div>
<ul className="space-y-3 pt-1">
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Acreditar filiación académica auténtica con universidad o instituto de procedencia.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Proporcionar información fidedigna sobre el avance curricular y ciclo formativo.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Asistir puntualmente a las evaluaciones, entrevistas y convocatorias confirmadas.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Respetar la confidencialidad de la información operativa brindada por las empresas convocantes.
                </span>
</li>
</ul>
</div>
</article>
{/* SECCIÓN 5 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-5">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 05</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            5. Obligaciones del empleador
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              Toda organización, estudio, empresa o gremio corporativo que cree una cuenta empleadora asume el compromiso ético y normativo de difundir únicamente vacantes fidedignas con directrices formativas explícitas, alineadas a la legislación de prácticas del Perú, respetando los topes de horas semanales y garantizando un ambiente seguro de aprendizaje técnico supervisado.
            </p>
</div>
{/* TARJETA DESTACADA: Lista de verificación empleador */}
<div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-sm">
<div className="flex items-center gap-2 text-on-surface">
<span className="material-symbols-outlined text-primary text-[20px]">domain_verification</span>
<h3 className="font-headline-s text-headline-s text-on-surface">
                Buenas prácticas requeridas al empleador
              </h3>
</div>
<ul className="space-y-3 pt-1">
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Garantizar que las convocatorias correspondan a puestos formativos reales y supervisados.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Establecer jornadas compatibles con la carga académica y formativa de los postulantes.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Otorgar la subvención económica y cobertura de salud requerida por el marco formativo.
                </span>
</li>
<li className="flex items-start gap-3">
<span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-container-light text-primary flex items-center justify-center mt-0.5">
<span className="material-symbols-outlined text-[14px] font-bold">check</span>
</span>
<span className="font-body-m text-body-m text-on-surface">
                  Abstenerse de cualquier cobro, arancel o retención económica hacia los postulantes en cualquier etapa.
                </span>
</li>
</ul>
</div>
</article>
{/* SECCIÓN 6 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-6">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 06</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            6. Contenido publicado y propiedad intelectual
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              Todos los elementos estructurales de la plataforma, incluyendo el software, código fuente, logotipos distintivos, arquitectura gráfica, marcas registradas y recursos visuales de PrácticaPE son titularidad exclusiva de los gestores del proyecto o de sus respectivos licenciantes, encontrándose protegidos por las leyes de propiedad intelectual y derechos de autor del ordenamiento jurídico nacional.
            </p>
<p>
              Las instituciones educativas y empresas convocantes retienen la plena titularidad sobre sus respectivos nombres comerciales, marcas y emblemas institucionales. Al publicar anuncios, conceden a PrácticaPE una autorización no exclusiva, limitada y revocable con el único propósito de indexar, exhibir y promover sus convocatorias formativas dentro del portal y sus canales digitales de articulación regional.
            </p>
</div>
</article>
{/* SECCIÓN 7 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-7">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 07</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            7. Planes y condiciones de publicación
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              PrácticaPE implementa modalidades de difusión estructuradas para responder a las diferentes capacidades operativas de las entidades participantes:
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-2">
<div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs shadow-sm">
<span className="font-label text-label text-primary font-bold uppercase tracking-wider">Esquema 01</span>
<h4 className="font-headline-s text-headline-s text-on-surface">Modalidad Estándar</h4>
<p className="font-body-s text-body-s text-on-surface-variant leading-relaxed">
                  Diseñada para difusión básica de vacantes formativas con alcance en la región y filtrado inicial de candidatos locales.
                </p>
</div>
<div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs shadow-sm">
<span className="font-label text-label text-primary font-bold uppercase tracking-wider">Esquema 02</span>
<h4 className="font-headline-s text-headline-s text-on-surface">Modalidad Corporativa</h4>
<p className="font-body-s text-body-s text-on-surface-variant leading-relaxed">
                  Orientada a convocatorias con requerimientos de selección masiva, paneles analíticos y validación documental prioritaria.
                </p>
</div>
<div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs shadow-sm">
<span className="font-label text-label text-primary font-bold uppercase tracking-wider">Esquema 03</span>
<h4 className="font-headline-s text-headline-s text-on-surface">Convenio Institucional</h4>
<p className="font-body-s text-body-s text-on-surface-variant leading-relaxed">
                  Mecanismo de articulación directa con facultades universitarias, institutos de educación superior y bolsas de prácticas aliadas.
                </p>
</div>
</div>
<p className="pt-2">
              La asignación y vigencia de cada modalidad se regula mediante los protocolos operativos acordados entre la entidad solicitante y el equipo de gestión técnica del portal.
            </p>
</div>
</article>
{/* SECCIÓN 8 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-8">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 08</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            8. Suspensión o cancelación de la cuenta
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              PrácticaPE se reserva la facultad de aplicar suspensiones preventivas o la baja definitiva e inapelable de cualquier perfil registrado cuando se comprueben transgresiones a las presentes normas o se reciban reportes fundados de la comunidad.
            </p>
<p>
              Constituyen causales directas de revocatoria: la publicación de anuncios formativos engañosos o inexistentes; la solicitud de desembolsos o aranceles económicos a los estudiantes postulantes; la adulteración deliberada de títulos, constancias o historiales curriculares; el hostigamiento comunicativo; y el quebrantamiento de la buena fe que debe imperar en todo proceso de vinculación preprofesional.
            </p>
</div>
</article>
{/* SECCIÓN 9 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-9">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 09</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            9. Limitación de responsabilidad
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              La plataforma ofrece un entorno de infraestructura digital tecnológica destinado exclusivamente a posibilitar la publicación y el contacto inicial entre candidatos y empleadores. En consecuencia, PrácticaPE no forma parte contractual en la selección final individualizada, en las entrevistas presenciales, ni en la suscripción material de convenios formativos que se acuerden de forma autónoma entre las partes.
            </p>
<p>
              PrácticaPE no asume responsabilidad patrimonial, civil o laboral respecto al cumplimiento efectivo de las estipulaciones pactadas fuera del software, la exactitud de acuerdos privados suscritos extramuros, o el desempeño individual demostrado durante la ejecución del periodo formativo en las instalaciones corporativas.
            </p>
</div>
</article>
{/* SECCIÓN 10 */}
<article className="scroll-mt-24 space-y-space-sm" id="seccion-10">
<div className="flex items-center gap-space-xs text-primary">
<span className="font-label text-label uppercase tracking-wider bg-surface-container px-2 py-0.5 rounded text-primary">SECCIÓN 10</span>
</div>
<h2 className="font-headline-m text-headline-m text-on-surface">
            10. Ley aplicable y jurisdicción
          </h2>
<div className="space-y-space-sm text-on-surface-variant font-body-l text-body-l leading-relaxed">
<p>
              Las presentes condiciones generales se rigen, interpretan y ejecutan en todos sus aspectos de conformidad estricta con el marco legal de la República del Perú.
            </p>
<p>
              En caso de surgir controversias, desavenencias o reclamaciones derivadas de la validez, interpretación o cumplimiento de estos términos que no puedan ser resueltas mediante conciliación directa de buena fe entre los involucrados, las partes renuncian expresamente al fuero de sus domicilios actuales o futuros y se someten a la competencia improrrogable de los jueces y tribunales del Distrito Judicial de Piura.
            </p>
</div>
</article>
{/* TARJETA DESTACADA FINAL: Aceptación de términos */}
<div className="bg-primary-container-light rounded-xl p-space-lg shadow-sm space-y-space-md">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">assignment_turned_in</span>
</div>
<div className="space-y-1">
<h3 className="font-headline-m text-headline-m text-on-surface">
                ¿Aceptas estos términos?
              </h3>
<p className="font-body-m text-body-m text-on-surface-variant">
                Al continuar confirmas que has leído, comprendido y aceptado el marco normativo y operativo de PrácticaPE.
              </p>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-2">
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-s text-body-m font-semibold shadow-sm hover:shadow transition-all duration-200" id="btn-accept-terms" type="button">
<span className="material-symbols-outlined text-[20px]">check_circle</span>
<span id="btn-text">Aceptar y continuar</span>
</button>
<a className="inline-flex items-center gap-1.5 font-headline-s text-body-m font-semibold text-primary hover:text-primary-container transition-colors" href="/privacidad">
<span>Leer la Política de Privacidad</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</main>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-dark text-ink-dark pt-space-xl pb-space-lg"><div className="max-w-[1200px] mx-auto px-margin"><div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg mb-space-xl"><div className="space-y-space-sm"><div className="font-headline-s text-headline-s text-primary-fixed">PrácticaPE</div><p className="font-body-s text-body-s text-ink-secondary-dark leading-relaxed">Plataforma de articulación para prácticas preprofesionales y convenios laborales formalizados en el norte peruano.</p></div><div className="space-y-space-sm"><div className="font-label text-label uppercase text-accent-dark">Legal y Cumplimiento</div><ul className="space-y-space-xs font-body-s text-body-s"><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Ley de Modalidades Formativas (Ley N° 28518)</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Términos y Condiciones</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Política de Privacidad y Datos</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Libro de Reclamaciones</li></ul></div><div className="space-y-space-sm"><div className="font-label text-label uppercase text-accent-dark">Para Candidatos</div><ul className="space-y-space-xs font-body-s text-body-s"><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Bolsa de Prácticas</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Modelo de Convenio Preprofesional</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Derechos y Subvención Económica</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Preguntas Frecuentes</li></ul></div><div className="space-y-space-sm"><div className="font-label text-label uppercase text-accent-dark">Para Empleadores</div><ul className="space-y-space-xs font-body-s text-body-s"><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Publicar Oportunidad</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Validación de Centros Universitarios</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Marco Normativo y Topes de Jornada</li><li className="text-ink-secondary-dark hover:text-ink-dark transition-colors">Contacto Corporativo</li></ul></div></div><div className="pt-space-lg text-center font-body-s text-body-s text-ink-secondary-dark">PrácticaPE — Todos los derechos reservados</div></div></footer>
    </div>
  );
}
