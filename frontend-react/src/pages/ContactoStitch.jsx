// Migrado desde .stitch/designs/ — componente ContactoStitch
export default function ContactoStitch(){
  return (
    <div className="stitch-root">
<header className="fixed top-0 left-0 right-0 w-full z-50 bg-surface-light border-b border-border-light"><div className="h-16 max-w-[1200px] mx-auto px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg"><span className="flex items-center gap-space-xs" data-path="inicio"><span className="font-headline-m text-headline-m text-primary tracking-tight">Práctica<span className="text-accent-light">PE</span></span><span className="px-space-xs py-0.5 bg-primary-container-light text-primary font-label text-label uppercase rounded">PIURA</span></span><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="text-primary font-bold"><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface transition-colors" data-path="ofertas" href="/ofertas">Ofertas</a><a className="font-body-m text-body-m text-on-surface-variant hover:text-on-surface transition-colors" data-path="empresas" href="/empresas">Empresas</a><a aria-current="page" className="transition-colors text-primary font-bold" data-path="contacto" href="/contacto">Contacto</a></nav></div><div className="flex items-center gap-space-md"><span className="hidden sm:inline-flex items-center justify-center px-space-md py-space-xs rounded-full bg-primary text-on-primary font-headline-s text-body-m hover:bg-primary-container transition-colors shadow-sm" data-path="publicar-oferta">Publicar oferta</span><button aria-label="Cambiar tema" className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">light_mode</span></button><span aria-label="Acceso de usuario" className="flex items-center gap-space-xs pl-space-xs pr-space-sm py-space-xs rounded-full bg-surface-container-low hover:bg-secondary-container transition-colors" data-path="login"><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div><span className="hidden lg:inline font-body-s text-body-s text-on-surface font-semibold">Ingresar</span></span></div></div></header><main className="w-full pt-16 min-h-screen bg-background-light"><div className="flex flex-col w-full">
{/* Decorative Ambient Underlay */}
<div className="relative w-full max-w-[1200px] mx-auto px-margin">
<div className="absolute -top-12 right-10 w-96 h-96 bg-primary-container-light/35 rounded-full blur-3xl pointer-events-none -z-10"></div>
<div className="absolute top-80 -left-20 w-80 h-80 bg-accent-container-light/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
{/* 1. ENCABEZADO DE SECCIÓN */}
<section className="pt-8 pb-10">
{/* Breadcrumb */}
<nav aria-label="Ruta de navegación" className="flex items-center gap-space-xs text-body-s font-body-s text-on-surface-variant mb-space-sm">
<a className="hover:text-primary transition-colors" data-path="inicio" href="/">Inicio</a>
<span className="text-outline-variant">/</span>
<span className="text-on-surface font-semibold">Contacto y Soporte</span>
</nav>
{/* Pill Badge */}
<div className="inline-flex items-center gap-space-xs px-3 py-1 bg-primary-container-light text-primary rounded-full font-label text-label tracking-wide mb-space-sm shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
        ATENCIÓN AL USUARIO Y SOPORTE REGIONAL
      </div>
{/* Main Heading + Subtitle */}
<div className="max-w-3xl">
<h1 className="font-display text-display text-on-surface tracking-tight mb-space-sm">
          Hablemos
        </h1>
<p className="font-body-l text-body-l text-on-surface-variant">
          ¿Tienes dudas sobre convenios de prácticas, validación de perfil o publicación de vacantes en Piura? Nuestro equipo regional te responde en menos de 24 horas hábiles.
        </p>
</div>
</section>
{/* 2. LAYOUT PRINCIPAL (7 cols formulario / 5 cols canales y mapa) */}
<section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start pb-space-xl">
{/* COLUMNA IZQUIERDA: Formulario de contacto (7 columnas) */}
<div className="lg:col-span-7 bg-surface-light rounded-xl p-6 sm:p-8 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] relative overflow-hidden">
{/* Accent top stripe indicator */}
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-accent-light"></div>
{/* Form Header */}
<div className="flex items-start gap-space-sm pb-space-md">
<div className="w-10 h-10 rounded-full bg-primary-container-light flex items-center justify-center text-primary shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[22px]">mark_chat_unread</span>
</div>
<div>
<h2 className="font-headline-s text-headline-s text-on-surface">Envíanos tu consulta</h2>
<p className="font-body-m text-body-m text-on-surface-variant">Completa el formulario y te asignaremos un especialista de la sede Piura.</p>
</div>
</div>
<form className="flex flex-col gap-space-md" id="contact-form">
{/* Selector: Tipo de consulta (Chips interactivos) */}
<div>
<label className="block font-headline-s text-body-s text-on-surface font-semibold mb-space-xs">
              Tipo de consulta <span className="text-error">*</span>
</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs" id="query-type-group" role="radiogroup">
<button className="chip-option active flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full font-body-s text-body-s font-semibold bg-primary text-on-primary transition-all text-center" data-chip="candidato" type="button">
<span className="material-symbols-outlined text-[16px] chip-icon">check</span>
<span>Soy Candidato</span>
</button>
<button className="chip-option flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full font-body-s text-body-s font-semibold bg-surface-container-low text-on-surface hover:bg-secondary-container transition-all text-center" data-chip="empresa" type="button">
<span className="material-symbols-outlined text-[16px] chip-icon hidden">check</span>
<span>Soy Empresa</span>
</button>
<button className="chip-option flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-full font-body-s text-body-s font-semibold bg-surface-container-low text-on-surface hover:bg-secondary-container transition-all text-center" data-chip="soporte" type="button">
<span className="material-symbols-outlined text-[16px] chip-icon hidden">check</span>
<span>Soporte Técnico</span>
</button>
</div>
<input id="query_type" name="query_type" type="hidden" value="candidato"/>
</div>
{/* Nombre Completo */}
<div>
<label className="block font-body-s text-body-s font-semibold text-on-surface mb-1" htmlFor="fullname">
              Nombre completo <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 px-3.5 pl-10 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-m text-body-m shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="fullname" name="fullname" placeholder="Ej. Tu nombre y apellidos" required="" type="text"/>
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">person</span>
</div>
</div>
{/* Correo institucional o personal */}
<div>
<label className="block font-body-s text-body-s font-semibold text-on-surface mb-1" htmlFor="email">
              Correo institucional o personal <span className="text-error">*</span>
</label>
<div className="relative">
<input className="w-full h-11 px-3.5 pl-10 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-m text-body-m shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="email" name="email" placeholder="tu correo electrónico" required="" type="email"/>
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">mail</span>
</div>
<p className="font-body-s text-[11px] text-on-surface-variant mt-1">Si eres estudiante de UNP, UDEP, UCV o IESTP, utiliza de preferencia tu correo institucional.</p>
</div>
{/* Teléfono o WhatsApp */}
<div>
<label className="block font-body-s text-body-s font-semibold text-on-surface mb-1" htmlFor="phone">
              Teléfono o WhatsApp de contacto <span className="text-on-surface-variant font-normal">(Opcional)</span>
</label>
<div className="flex gap-2">
<span className="inline-flex items-center px-3 rounded-lg bg-surface-container font-body-m text-body-m font-medium text-on-surface-variant select-none">
                +51
              </span>
<div className="relative flex-1">
<input className="w-full h-11 px-3.5 pl-10 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-m text-body-m shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="phone" name="phone" placeholder="[número de WhatsApp]" type="tel"/>
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">call</span>
</div>
</div>
</div>
{/* Asunto de la consulta */}
<div>
<label className="block font-body-s text-body-s font-semibold text-on-surface mb-1" htmlFor="subject">
              Asunto de la consulta <span className="text-error">*</span>
</label>
<div className="relative">
<select className="w-full h-11 px-3.5 pl-10 pr-9 rounded-lg bg-surface-container-lowest text-on-surface font-body-m text-body-m shadow-sm appearance-none focus:outline-none focus:ring-2 focus:ring-primary transition-all" id="subject" name="subject" required="">
<option disabled="" selected="" value="">Selecciona el motivo de tu consulta...</option>
<option value="convenio">Dudas sobre validación de convenio Ley 28518</option>
<option value="oferta">Problemas al publicar oferta formativa</option>
<option value="postulacion">Soporte en postulación y carga de CV</option>
<option value="alianzas">Alianzas universitarias e institucionales</option>
<option value="verificacion">Validación de Perfil Verificado regional</option>
<option value="otro">Otro motivo específico</option>
</select>
<span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">assignment</span>
<span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">arrow_drop_down</span>
</div>
</div>
{/* Mensaje Detallado */}
<div>
<div className="flex items-center justify-between mb-1">
<label className="block font-body-s text-body-s font-semibold text-on-surface" htmlFor="message">
                Mensaje detallado <span className="text-error">*</span>
</label>
<span className="font-body-s text-[11px] text-on-surface-variant tabular-nums" id="char-counter">0 / 1000</span>
</div>
<textarea className="w-full p-3.5 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-m text-body-m shadow-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-y min-h-[110px]" id="message" maxLength="1000" name="message" placeholder="Describe detalladamente tu consulta, duda o requerimiento técnico..." required="" rows="4"></textarea>
</div>
{/* Botón primario de envío */}
<div className="pt-2">
<button className="w-full sm:w-auto min-w-[220px] inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-headline-s text-body-m shadow-md hover:shadow-lg transition-all active:scale-[0.99] cursor-pointer" id="submit-btn" type="submit">
<span className="material-symbols-outlined text-[20px]" id="btn-icon">send</span>
<span id="btn-text">Enviar mensaje</span>
</button>
</div>
{/* Feedback message container (hidden by default) */}
<div className="hidden p-3.5 rounded-lg bg-primary-container-light text-primary font-body-m text-body-m items-center gap-2" id="form-feedback">
<span className="material-symbols-outlined text-primary">check_circle</span>
<span>¡Tu mensaje ha sido enviado! Te responderemos en un plazo máximo de 24 horas hábiles.</span>
</div>
{/* Legal & Privacy Note */}
<p className="font-body-s text-[11px] leading-relaxed text-on-surface-variant pt-2">
            Tus datos están protegidos conforme a la <span className="font-medium text-on-surface">Ley N° 29733</span> de Protección de Datos Personales de Perú. Al enviar aceptas nuestras
            <a className="text-primary hover:underline font-medium" data-path="politica-privacidad" href="/privacidad">Políticas de Privacidad</a> y el uso para fines exclusivos de soporte regional.
          </p>
</form>
</div>
{/* COLUMNA DERECHA: Canales directos, Horarios y Ubicación (5 columnas) */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
{/* Tarjeta 1: Canales directos de contacto */}
<div className="bg-surface-light rounded-xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] flex flex-col gap-4">
<div className="flex items-center justify-between">
<h3 className="font-headline-s text-headline-s text-on-surface">Canales directos</h3>
<span className="px-2 py-0.5 rounded bg-surface-container font-label text-[10px] text-on-surface-variant font-semibold uppercase">Piura Regional</span>
</div>
{/* Canal 1: Correo */}
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low transition-colors hover:bg-secondary-container/40">
<div className="w-10 h-10 rounded-full bg-primary-container-light text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">alternate_email</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-headline-s text-body-s font-semibold text-on-surface leading-tight">Mesa de Ayuda Regional</p>
<span className="font-body-m text-body-m text-primary hover:underline font-semibold block truncate">
                [correo institucional]
              </span>
<div className="flex items-center gap-1.5 mt-1 text-[11px] font-body-s text-on-surface-variant">
<span className="material-symbols-outlined text-[14px] text-accent-light">schedule</span>
<span>Respuesta promedio: 2 horas</span>
</div>
</div>
</div>
{/* Canal 2: WhatsApp Oficial */}
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low transition-colors hover:bg-secondary-container/40">
<div className="w-10 h-10 rounded-full bg-primary-container-light text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">chat</span>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between gap-1">
<p className="font-headline-s text-body-s font-semibold text-on-surface leading-tight">Atención Rápida WhatsApp</p>
<span className="text-[10px] bg-primary text-on-primary font-label px-1.5 py-0.5 rounded-full">Activo</span>
</div>
<p className="font-body-m text-body-m font-semibold text-on-surface mt-0.5">[número de WhatsApp]</p>
<p className="text-[11px] font-body-s text-on-surface-variant mt-0.5">Lunes a viernes de 8:30 am a 6:00 pm</p>
<span className="inline-flex items-center gap-1 text-[12px] font-body-s font-semibold text-primary hover:text-primary-container mt-2" rel="noopener noreferrer" target="_blank">
<span>Abrir chat de WhatsApp</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</span>
</div>
</div>
{/* Canal 3: Oficina Regional */}
<div className="flex items-start gap-3 p-3 rounded-lg bg-surface-container-low transition-colors hover:bg-secondary-container/40">
<div className="w-10 h-10 rounded-full bg-accent-container-light text-accent-light flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">apartment</span>
</div>
<div className="flex-1 min-w-0">
<p className="font-headline-s text-body-s font-semibold text-on-surface leading-tight">Oficina de Enlace Piura</p>
<p className="font-body-s text-body-s text-on-surface-variant mt-0.5">
                [Dirección de la oficina en Piura]
              </p>
<p className="text-[11px] font-body-s text-on-surface-variant italic mt-0.5">
                Ref. Frente al Colegio de Ingenieros del Perú - CD Piura
              </p>
<span className="inline-block mt-1 text-[10px] font-label text-primary font-bold uppercase tracking-wider">
                Atención presencial previa cita
              </span>
</div>
</div>
</div>
{/* Tarjeta 2: Horarios y Estado en Vivo */}
<div className="bg-surface-light rounded-xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)]">
<div className="flex items-center justify-between mb-3">
<h4 className="font-headline-s text-body-s font-bold text-on-surface uppercase tracking-wide">Horarios de Atención</h4>
{/* Live Status Pulse */}
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-container-light text-primary font-label text-[11px]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
<span>Atención activa hoy</span>
</div>
</div>
<ul className="flex flex-col gap-2 font-body-s text-body-s">
<li className="flex items-center justify-between py-1.5 border-b border-surface-container">
<span className="text-on-surface-variant font-medium">Lunes a Viernes</span>
<span className="font-semibold text-on-surface tabular-nums">08:00 - 18:00 hrs</span>
</li>
<li className="flex items-center justify-between py-1.5 border-b border-surface-container">
<span className="text-on-surface-variant font-medium">Sábados</span>
<span className="font-semibold text-on-surface tabular-nums">09:00 - 13:00 hrs</span>
</li>
<li className="flex items-center justify-between py-1.5">
<span className="text-on-surface-variant font-medium">Domingos y Feriados</span>
<span className="text-on-surface-variant text-[11px] font-semibold text-right">Guardia vía correo</span>
</li>
</ul>
</div>
{/* Tarjeta 3: Mapa interactivo / visual de Piura */}
<div className="bg-surface-light rounded-xl p-5 shadow-[0_1px_2px_rgba(20,32,27,0.05),0_8px_24px_rgba(20,32,27,0.06)] overflow-hidden">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[18px]">location_on</span>
<h4 className="font-headline-s text-body-s font-bold text-on-surface uppercase tracking-wide">Ubicación en Piura</h4>
</div>
<span className="font-body-s text-[11px] text-primary hover:underline font-semibold flex items-center gap-0.5" target="_blank">
<span>Cómo llegar</span>
<span className="material-symbols-outlined text-[13px]">open_in_new</span>
</span>
</div>
{/* Data Location Element with Visual Pin styling overlay */}
<div className="relative w-full h-48 rounded-lg overflow-hidden shadow-inner group">
<div className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="A clean, desaturated aerial-styled map view of Piura Peru showing the Piura River, San Eduardo district, and surrounding green avenues under warm coastal daylight." data-location="Av. Ramon Mujica, San Eduardo, Piura, Peru" style={{backgroundImage: 'url(\'https://lh3.googleusercontent.com/aida-public/AB6AXuDnBaznNcp8EXa2yMQd-3EJnA1ni7TicjSzUiaXcYBXd6Ev1B47SooIKe0iWs1V-8Jr2mjKrrnOZBgf-JHSFi6x-Acs8aAUyiFOAciJdwEE-mH2KqvjeYcS2ELVtLLBSRoNImntzdgqilxHndx9cEapbYvpuyCchlvBjWM3Vd4RvTIcM6S_oK8XctA3gcsKpTCDKcZGCVr-wqkM7AAm_D1VrNtJJatC1uDBuuZWzigk7vRss6Bi9-lifJdGDx1-RvuspVkHRmxYrZjT\')'}}>
</div>
{/* Map overlay pin marker */}
<div className="absolute inset-0 bg-surface-dark/10 pointer-events-none flex items-center justify-center">
<div className="relative flex items-center justify-center">
{/* Radar ripple */}
<span className="absolute w-8 h-8 rounded-full bg-primary/30 animate-ping"></span>
{/* Pin marker */}
<div className="w-9 h-9 rounded-full bg-primary shadow-lg border-2 border-surface-light flex items-center justify-center z-10 text-on-primary">
<span className="material-symbols-outlined text-[20px]">domain</span>
</div>
</div>
</div>
{/* Floating Label bottom left */}
<div className="absolute bottom-2 left-2 right-2 bg-surface-light/95 backdrop-blur-sm px-2.5 py-1.5 rounded shadow-sm text-[11px] font-body-s text-on-surface flex items-center justify-between">
<span className="font-semibold truncate">Sede San Eduardo • Piura</span>
<span className="text-on-surface-variant text-[10px]">Cerca de UDEP</span>
</div>
</div>
</div>
</div>
</section>
{/* 3. SECCIÓN DE PREGUNTAS FRECUENTES (FAQ) */}
<section className="py-space-xl border-t border-border-light">
<div className="text-center max-w-2xl mx-auto mb-10">
<span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-label text-label uppercase tracking-wider inline-block mb-2">
          RESOLUCIÓN DIRECTA
        </span>
<h2 className="font-headline-l text-headline-l text-on-surface tracking-tight mb-2">
          ¿Tienes preguntas rápidas?
        </h2>
<p className="font-body-m text-body-m text-on-surface-variant">
          Encuentra respuestas inmediatas a las inquietudes más habituales de estudiantes y empleadores en la Región Grau.
        </p>
</div>
{/* FAQ Accordion (5 items) */}
<div className="max-w-3xl mx-auto flex flex-col gap-3" id="faq-accordion">
{/* FAQ Item 1 */}
<div className="faq-item rounded-xl bg-surface-light shadow-sm overflow-hidden transition-all duration-200">
<button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-headline-s text-body-l text-on-surface font-semibold hover:text-primary transition-colors focus:outline-none" type="button">
<span>¿Tiene algún costo postular a las ofertas de prácticas en PrácticaPE?</span>
<span className="material-symbols-outlined text-on-surface-variant transition-transform duration-200 faq-icon shrink-0">expand_more</span>
</button>
<div className="faq-content hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-m text-body-m leading-relaxed border-t border-surface-container">
            No, en absoluto. PrácticaPE es 100% gratuito para estudiantes y recién egresados de universidades e institutos de Piura y todo el Perú. Nunca te cobraremos por postular, registrarte ni por validar tus documentos académicos.
          </div>
</div>
{/* FAQ Item 2 */}
<div className="faq-item rounded-xl bg-surface-light shadow-sm overflow-hidden transition-all duration-200">
<button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-headline-s text-body-l text-on-surface font-semibold hover:text-primary transition-colors focus:outline-none" type="button">
<span>¿Cómo se formaliza un convenio de prácticas preprofesionales bajo la Ley N° 28518?</span>
<span className="material-symbols-outlined text-on-surface-variant transition-transform duration-200 faq-icon shrink-0">expand_more</span>
</button>
<div className="faq-content hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-m text-body-m leading-relaxed border-t border-surface-container">
            El convenio lo suscriben tres partes: el estudiante, la empresa y tu centro de estudios (universidad o instituto acreditado). PrácticaPE facilita la generación automática de la ficha técnica y la carta de presentación requerida por SUNEDU y el Ministerio de Trabajo y Promoción del Empleo (MTPE).
          </div>
</div>
{/* FAQ Item 3 */}
<div className="faq-item rounded-xl bg-surface-light shadow-sm overflow-hidden transition-all duration-200">
<button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-headline-s text-body-l text-on-surface font-semibold hover:text-primary transition-colors focus:outline-none" type="button">
<span>¿Qué requisitos debe cumplir una empresa de Piura para publicar vacantes?</span>
<span className="material-symbols-outlined text-on-surface-variant transition-transform duration-200 faq-icon shrink-0">expand_more</span>
</button>
<div className="faq-content hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-m text-body-m leading-relaxed border-t border-surface-container">
            Las empresas deben contar con RUC activo y habido ante la SUNAT, ofrecer una subvención económica acorde a ley (mínimo S/ 1,025 con seguro FOLA obligatorio para jornadas completas de 30 o 48 horas según modalidad) y no registrar antecedentes por desnaturalización de modalidades formativas laborales.
          </div>
</div>
{/* FAQ Item 4 */}
<div className="faq-item rounded-xl bg-surface-light shadow-sm overflow-hidden transition-all duration-200">
<button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-headline-s text-body-l text-on-surface font-semibold hover:text-primary transition-colors focus:outline-none" type="button">
<span>¿Cuánto tiempo tarda la validación de mi constancia de tercio superior o matrícula?</span>
<span className="material-symbols-outlined text-on-surface-variant transition-transform duration-200 faq-icon shrink-0">expand_more</span>
</button>
<div className="faq-content hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-m text-body-m leading-relaxed border-t border-surface-container">
            Nuestro equipo regional y el sistema de cotejo institucional validan tus credenciales académicas en un plazo máximo de 24 horas hábiles. Una vez aprobadas, tu perfil lucirá el distintivo de Perfil Verificado, el cual triplica las invitaciones a entrevistas.
          </div>
</div>
{/* FAQ Item 5 */}
<div className="faq-item rounded-xl bg-surface-light shadow-sm overflow-hidden transition-all duration-200">
<button aria-expanded="false" className="faq-toggle w-full p-5 text-left flex items-center justify-between gap-4 font-headline-s text-body-l text-on-surface font-semibold hover:text-primary transition-colors focus:outline-none" type="button">
<span>¿Qué hago si una empresa me solicita pagos o cobros durante el proceso de selección?</span>
<span className="material-symbols-outlined text-on-surface-variant transition-transform duration-200 faq-icon shrink-0">expand_more</span>
</button>
<div className="faq-content hidden px-5 pb-5 pt-1 text-on-surface-variant font-body-m text-body-m leading-relaxed border-t border-surface-container">
            Denúncialo inmediatamente desde el botón de reporte en la vacante o escribe a nuestra Mesa de Ayuda con el asunto "Alerta de Irregularidad". En el Perú, todo cobro a postulantes en modalidades formativas es estrictamente ilegal y es sancionado con multas muy graves por SUNAFIL.
          </div>
</div>
</div>
</section>
{/* 4. BANNER DE CIERRE / ALTERNATIVA DE ATENCIÓN */}
<section className="pb-16 pt-4">
<div className="w-full bg-primary text-on-primary rounded-xl p-8 sm:p-12 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
{/* Subtle decorative warm wave background graphic */}
<div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-primary-dark/20 pointer-events-none"></div>
<div className="absolute left-1/3 -top-12 w-64 h-64 rounded-full bg-accent-light/10 pointer-events-none blur-2xl"></div>
<div className="relative z-10 max-w-2xl flex flex-col gap-2 text-center md:text-left">
<div className="inline-flex items-center justify-center md:justify-start gap-1.5 text-accent-light font-label text-label uppercase tracking-widest">
<span className="material-symbols-outlined text-[16px]">handshake</span>
<span>ALIANZAS PARA EL DESARROLLO NORTEÑO</span>
</div>
<h3 className="font-headline-l text-headline-l font-bold tracking-tight text-on-primary">
            ¿Representas a una universidad, instituto o cámara gremial?
          </h3>
<p className="font-body-m text-body-m text-surface-container font-light">
            Impulsemos juntos la empleabilidad juvenil en Sullana, Talara, Paita, Sechura y todo el departamento de Piura.
          </p>
</div>
<div className="relative z-10 shrink-0">
<span className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-surface-light text-primary font-headline-s text-body-m hover:bg-surface-elevated-light transition-all shadow-md active:scale-95 text-center" data-path="alianzas-institucionales">
<span>Agendar reunión de convenio</span>
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</span>
</div>
</div>
</section>
</div>
{/* Interactive script for Chips, FAQ, and Form Simulation */}

</div></main><footer className="w-full bg-surface-light border-t border-border-light mt-space-xl"><div className="max-w-[1200px] mx-auto px-margin py-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl"><div className="lg:col-span-2 flex flex-col gap-space-sm"><div className="flex items-center gap-space-xs"><span className="font-headline-s text-headline-s text-primary tracking-tight">Práctica<span className="text-accent-light">PE</span></span><span className="px-space-xs py-0.5 bg-primary-container-light text-primary font-label text-label uppercase rounded">PIURA</span></div><p className="font-body-m text-body-m text-on-surface-variant max-w-sm">Plataforma regional que conecta a estudiantes y egresados de universidades e institutos de Piura con las mejores oportunidades laborales y formativas del norte del país.</p><div className="flex items-center gap-space-xs text-on-surface-variant font-body-s text-body-s"><span className="material-symbols-outlined text-[16px] text-primary">location_on</span><span>Piura, Perú — Región Grau</span></div></div><div><h4 className="font-headline-s text-headline-s text-on-surface mb-space-sm">Para Candidatos</h4><ul className="flex flex-col gap-space-xs font-body-m text-body-m text-on-surface-variant"><li><a className="hover:text-primary transition-colors" data-path="ofertas" href="/ofertas">Prácticas Preprofesionales</a></li><li><span className="hover:text-primary transition-colors" data-path="ofertas-pro">Prácticas Profesionales</span></li><li><a className="hover:text-primary transition-colors" data-path="empresas" href="/empresas">Directorio de Empresas</a></li><li><span className="hover:text-primary transition-colors" data-path="guia-cv">Consejos de Postulación</span></li></ul></div><div><h4 className="font-headline-s text-headline-s text-on-surface mb-space-sm">Para Empleadores</h4><ul className="flex flex-col gap-space-xs font-body-m text-body-m text-on-surface-variant"><li><span className="hover:text-primary transition-colors" data-path="publicar-oferta">Publicar Oportunidad</span></li><li><span className="hover:text-primary transition-colors" data-path="planes">Convenios Universitarios</span></li><li><span className="hover:text-primary transition-colors" data-path="portal-empresas">Panel de Reclutamiento</span></li><li><a className="hover:text-primary transition-colors" data-path="contacto" href="/contacto">Soporte Institucional</a></li></ul></div><div><h4 className="font-headline-s text-headline-s text-on-surface mb-space-sm">Legal y Cumplimiento</h4><ul className="flex flex-col gap-space-xs font-body-m text-body-m text-on-surface-variant"><li><a className="hover:text-primary transition-colors" data-path="terminos-condiciones" href="/terminos">Términos y Condiciones</a></li><li><a className="hover:text-primary transition-colors" data-path="politica-privacidad" href="/privacidad">Política de Privacidad</a></li><li><a className="hover:text-primary transition-colors flex items-center gap-space-xs" data-path="libro-reclamaciones" href="/reclamaciones"><span className="material-symbols-outlined text-[16px] text-accent-light">menu_book</span>Libro de Reclamaciones</a></li><li><span className="hover:text-primary transition-colors" data-path="ley-modalidades">Ley N° 28518 (Perú)</span></li></ul></div></div><div className="border-t border-border-light mt-space-xl pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-on-surface-variant font-body-s text-body-s"><div>© 2025 PrácticaPE. Plataforma de Empleabilidad Juvenil Regional.</div><div>Diseñado con calidez costeña para el talento de Piura.</div></div></div></footer>
    </div>
  );
}
