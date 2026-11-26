// Migrado desde .stitch/designs/ — componente LibroStitch
export default function LibroStitch(){
  return (
    <div className="stitch-root">


  {/* BARRA SUPERIOR FIJA 64px */}
  <header className="sticky top-0 z-50 h-16 w-full bg-white dark:bg-[#12201B] border-b border-[#E3E0D5] dark:border-[#243833] transition-colors duration-200">
    <div className="max-w-[1200px] mx-auto h-full px-6 flex items-center justify-between">
      {/* Logo PrácticaPE */}
      <span className="flex items-center gap-2.5 text-decoration-none group">
        <div className="w-9 h-9 rounded-xl bg-[#0E7C66] dark:bg-[#4FC3A7] flex items-center justify-center text-white dark:text-[#0B1512] font-display font-extrabold text-lg shadow-sm">
          P
        </div>
        <div className="flex items-center">
          <span className="font-display font-extrabold text-xl tracking-tight text-[#14201B] dark:text-[#EAF4EF]">Práctica</span>
          <span className="font-display font-extrabold text-xl tracking-tight text-[#0E7C66] dark:text-[#4FC3A7]">PE</span>
        </div>
        <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase rounded-full bg-[#D7F0E7] text-[#0A5C4D] dark:bg-[#14382F] dark:text-[#4FC3A7]">
          Región Grau
        </span>
      </span>

      {/* Controles a la derecha: Navegación breve + Modo oscuro */}
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#5A6B63] dark:text-[#9DB3AA]">
          <a href="/ofertas" className="hover:text-[#0E7C66] dark:hover:text-[#4FC3A7] transition-colors">Ofertas</a>
          <a href="/empresas" className="hover:text-[#0E7C66] dark:hover:text-[#4FC3A7] transition-colors">Empresas</a>
          <span className="hover:text-[#0E7C66] dark:hover:text-[#4FC3A7] transition-colors">Convenios</span>
          <span className="text-[#0E7C66] dark:text-[#4FC3A7] font-semibold">Atención al ciudadano</span>
        </nav>

        {/* Conmutador Sol/Luna inline SVG */}
        <span id="themeToggleBtn" aria-label="Cambiar tema visual" className="p-2 rounded-xl text-[#5A6B63] dark:text-[#9DB3AA] hover:bg-[#F1EFE6] dark:hover:bg-[#1A2E27] border border-[#E3E0D5] dark:border-[#243833] transition-all">
          {/* Icono Sol (visible en modo oscuro) */}
          <svg className="hidden dark:block w-5 h-5 text-[#F2B85C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
          </svg>
          {/* Icono Luna (visible en modo claro) */}
          <svg className="block dark:hidden w-5 h-5 text-[#5A6B63]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
          </svg>
        </span>
      </div>
    </div>
  </header>

  {/* CONTENEDOR PRINCIPAL 1200px */}
  <main className="max-w-[1200px] w-full mx-auto px-6 py-8 flex-1">
    
    {/* MIGAS DE PAN */}
    <nav className="flex items-center gap-2 text-xs font-medium text-[#5A6B63] dark:text-[#9DB3AA] mb-6" aria-label="Migas de pan">
      <a href="/" className="hover:text-[#0E7C66] dark:hover:text-[#4FC3A7] transition-colors">Inicio</a>
      <span className="text-[#E3E0D5] dark:text-[#243833]">/</span>
      <span className="hover:text-[#0E7C66] dark:hover:text-[#4FC3A7] transition-colors">Legal</span>
      <span className="text-[#E3E0D5] dark:text-[#243833]">/</span>
      <span className="text-[#14201B] dark:text-[#EAF4EF] font-semibold">Libro de Reclamaciones</span>
    </nav>

    {/* CABECERA */}
    <header className="mb-8">
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D7F0E7] dark:bg-[#14382F] text-[#0A5C4D] dark:text-[#4FC3A7] text-[11px] font-bold tracking-[0.06em] uppercase mb-3">
        <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
        Atención al Ciudadano
      </div>

      <h1 className="font-display font-extrabold text-3xl md:text-[40px] leading-[1.1] text-[#14201B] dark:text-[#EAF4EF] tracking-tight mb-3">
        Libro de Reclamaciones
      </h1>
      
      <p className="text-base text-[#5A6B63] dark:text-[#9DB3AA] max-w-2xl mb-4 leading-relaxed">
        Canal formal y obligatorio para que cualquier postulante, estudiante, egresado o representante de empresa presente un reclamo o queja sobre nuestros servicios formativos.
      </p>

      {/* Fila de chips obligatorios */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white dark:bg-[#12201B] border border-[#E3E0D5] dark:border-[#243833] text-xs font-medium text-[#14201B] dark:text-[#EAF4EF] shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#0E7C66] dark:bg-[#4FC3A7]"></span>
          Virtual
        </span>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F1EFE6] dark:bg-[#1A2E27] text-xs font-medium text-[#5A6B63] dark:text-[#9DB3AA]">
          Candidatos y empleadores
        </span>
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#F1EFE6] dark:bg-[#1A2E27] text-xs font-medium text-[#5A6B63] dark:text-[#9DB3AA]">
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.8" />
            <path d="M3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 0 1 4 9 15.3 15.3 0 0 1-4 9 15.3 15.3 0 0 1-4-9 15.3 15.3 0 0 1 4-9z" fill="none" stroke="currentColor" stroke-width="1.8"/>
          </svg>
          Perú
        </span>
      </div>
    </header>

    {/* AVISO LEGAL EN TARJETA CON BORDE ÁMBAR */}
    <div className="mb-10 p-5 rounded-[16px] bg-[#FAF9F4] dark:bg-[#12201B] border-l-4 border-l-[#E8A13A] dark:border-l-[#F2B85C] border border-[#E3E0D5] dark:border-[#243833] shadow-sm flex items-start gap-4">
      <div className="p-2 rounded-xl bg-[#FBEBCB] dark:bg-[#2e2617] text-[#E8A13A] dark:text-[#F2B85C] flex-shrink-0 mt-0.5">
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
        </svg>
      </div>
      <div>
        <h2 className="font-display font-bold text-sm text-[#14201B] dark:text-[#EAF4EF] mb-1">
          Aviso legal conforme a la normativa de protección al consumidor
        </h2>
        <p className="text-xs md:text-sm text-[#5A6B63] dark:text-[#9DB3AA] leading-relaxed">
          Este libro de reclamaciones virtual atiende reclamos y quejas conforme a la legislación peruana de protección al consumidor. La empresa registrará formalmente el hecho y responderá en el plazo previsto por ley a través del correo electrónico proporcionado.
        </p>
      </div>
    </div>

    {/* ESTRUCTURA PRINCIPAL DE 2 COLUMNAS (Índice a la izquierda, Formulario a la derecha) */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

      {/* COLUMNA IZQUIERDA — ÍNDICE PEGAJOSO (4 columnas) */}
      <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
        
        {/* Elemento 1: Cómo se atiende tu reclamación */}
        <div className="p-6 rounded-[16px] bg-white dark:bg-[#12201B] border border-[#E3E0D5] dark:border-[#243833] shadow-card">
          <h3 className="font-display font-bold text-base text-[#14201B] dark:text-[#EAF4EF] mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#0E7C66] dark:text-[#4FC3A7]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            Cómo se atiende tu reclamación
          </h3>

          <div className="space-y-4">
            {/* Paso 1 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#D7F0E7] dark:bg-[#14382F] text-[#0E7C66] dark:text-[#4FC3A7] font-display font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </div>
              <div>
                <p className="text-xs font-bold text-[#14201B] dark:text-[#EAF4EF]">Registras tu reclamo</p>
                <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA] leading-snug">Ingresas los antecedentes del hecho y recibes tu código de confirmación.</p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#D7F0E7] dark:bg-[#14382F] text-[#0E7C66] dark:text-[#4FC3A7] font-display font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </div>
              <div>
                <p className="text-xs font-bold text-[#14201B] dark:text-[#EAF4EF]">Lo derivamos al área responsable</p>
                <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA] leading-snug">El equipo legal y de soporte revisa los antecedentes detallados.</p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-full bg-[#D7F0E7] dark:bg-[#14382F] text-[#0E7C66] dark:text-[#4FC3A7] font-display font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </div>
              <div>
                <p className="text-xs font-bold text-[#14201B] dark:text-[#EAF4EF]">Te respondemos por correo</p>
                <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA] leading-snug">Notificamos la respuesta formal al correo que consignaste.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Elemento 2: Datos del establecimiento */}
        <div className="p-6 rounded-[16px] bg-white dark:bg-[#12201B] border border-[#E3E0D5] dark:border-[#243833] shadow-card">
          <h3 className="font-display font-bold text-base text-[#14201B] dark:text-[#EAF4EF] mb-3 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#0E7C66] dark:text-[#4FC3A7]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
            </svg>
            Datos del establecimiento
          </h3>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-[#5A6B63] dark:text-[#9DB3AA] block uppercase font-bold tracking-wider text-[10px] mb-0.5">Razón Social</span>
              <span className="font-semibold text-[#14201B] dark:text-[#EAF4EF]">PrácticaPE</span>
            </div>
            <div>
              <span className="text-[#5A6B63] dark:text-[#9DB3AA] block uppercase font-bold tracking-wider text-[10px] mb-0.5">Domicilio Institucional</span>
              <span className="text-[#14201B] dark:text-[#EAF4EF]">Ciudad de Piura, Región Grau, Perú</span>
            </div>
            <div>
              <label htmlFor="sideRucInput" className="text-[#5A6B63] dark:text-[#9DB3AA] block uppercase font-bold tracking-wider text-[10px] mb-1">RUC</label>
              <input id="sideRucInput" type="text" placeholder="Ingresa el número de RUC" className="w-full px-3 py-2 text-xs rounded-input bg-[#FAF9F4] dark:bg-[#1A2E27] border border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] tabular-nums" />
            </div>
          </div>
        </div>

        {/* Elemento 3: ¿Ya enviaste un reclamo? */}
        <div className="p-6 rounded-[16px] bg-white dark:bg-[#12201B] border border-[#E3E0D5] dark:border-[#243833] shadow-card">
          <h3 className="font-display font-bold text-base text-[#14201B] dark:text-[#EAF4EF] mb-2 flex items-center gap-2">
            <svg className="w-5 h-5 text-[#E8A13A] dark:text-[#F2B85C]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            ¿Ya enviaste un reclamo?
          </h3>
          <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA] leading-relaxed mb-4">
            Si ya ingresaste una reclamación, puedes consultar el estado de atención ingresando tu código de trámite.
          </p>
          <button type="button" className="w-full py-2.5 px-4 rounded-input border-[1.5px] border-[#0E7C66] dark:border-[#4FC3A7] text-[#0E7C66] dark:text-[#4FC3A7] font-display font-bold text-xs hover:bg-[#D7F0E7] dark:hover:bg-[#14382F] transition-all flex items-center justify-center gap-2">
            Consultar el estado
            <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </aside>

      {/* COLUMNA PRINCIPAL — FORMULARIO (8 columnas, máx 760px) */}
      <section className="lg:col-span-8 max-w-[760px] w-full space-y-6">

        <form id="reclamacionesForm" className="space-y-6">
          
          {/* BLOQUE 1: DATOS DEL CONSUMIDOR O USUARIO */}
          <div className="p-6 md:p-8 rounded-[16px] bg-white dark:bg-[#12201B] border border-[#E3E0D5] dark:border-[#243833] shadow-card">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E3E0D5] dark:border-[#243833]">
              <div className="w-8 h-8 rounded-xl bg-[#D7F0E7] dark:bg-[#14382F] text-[#0E7C66] dark:text-[#4FC3A7] flex items-center justify-center font-display font-bold text-sm">
                1
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-[#14201B] dark:text-[#EAF4EF]">
                  Datos del consumidor o usuario
                </h2>
                <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA]">Identificación de la persona que presenta el reclamo o queja</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Nombres y apellidos */}
              <div className="md:col-span-2">
                <label htmlFor="nombresInput" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Nombres y apellidos <span className="text-[#C0392B]">*</span>
                </label>
                <input id="nombresInput" type="text" placeholder="Ingresa tus nombres y apellidos" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all" />
              </div>

              {/* Tipo de documento */}
              <div>
                <label htmlFor="tipoDocSelect" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Tipo de documento <span className="text-[#C0392B]">*</span>
                </label>
                <select id="tipoDocSelect" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all cursor-pointer">
                  <option value="" disabled selected>Selecciona tipo</option>
                  <option value="DNI">DNI</option>
                  <option value="CE">Carné de extranjería</option>
                </select>
              </div>

              {/* Número de documento */}
              <div>
                <label htmlFor="numDocInput" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Número de documento <span className="text-[#C0392B]">*</span>
                </label>
                <input id="numDocInput" type="text" placeholder="Ingresa el número de documento" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] tabular-nums transition-all" />
              </div>

              {/* Correo electrónico */}
              <div className="md:col-span-2">
                <label htmlFor="correoInput" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Correo electrónico <span className="text-[#C0392B]">*</span>
                </label>
                <input id="correoInput" type="email" placeholder="Ingresa tu correo electrónico" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all" />
                <p className="text-[11px] text-[#5A6B63] dark:text-[#9DB3AA] mt-1">A esta casilla se enviará la respuesta formal y la constancia de registro.</p>
              </div>

              {/* Distrito o provincia de Piura */}
              <div>
                <label htmlFor="distritoSelect" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Distrito o provincia <span className="text-[#C0392B]">*</span>
                </label>
                <select id="distritoSelect" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all cursor-pointer">
                  <option value="" disabled selected>Selecciona localidad</option>
                  <option value="Piura">Piura</option>
                  <option value="Castilla">Castilla</option>
                  <option value="Catacaos">Catacaos</option>
                  <option value="Veintiséis de Octubre">Veintiséis de Octubre</option>
                  <option value="Sullana">Sullana</option>
                  <option value="Talara">Talara</option>
                  <option value="Paita">Paita</option>
                  <option value="Sechura">Sechura</option>
                  <option value="Máncora">Máncora</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Domicilio (opcional) */}
              <div>
                <label htmlFor="domicilioInput" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Domicilio <span className="text-[11px] text-[#5A6B63] dark:text-[#9DB3AA] font-normal">(Opcional)</span>
                </label>
                <input id="domicilioInput" type="text" placeholder="Ingresa tu domicilio o referencia" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all" />
              </div>
            </div>
          </div>

          {/* BLOQUE 2: DATOS DE LA EMPRESA */}
          <div className="p-6 md:p-8 rounded-[16px] bg-white dark:bg-[#12201B] border border-[#E3E0D5] dark:border-[#243833] shadow-card">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E3E0D5] dark:border-[#243833]">
              <div className="w-8 h-8 rounded-xl bg-[#D7F0E7] dark:bg-[#14382F] text-[#0E7C66] dark:text-[#4FC3A7] flex items-center justify-center font-display font-bold text-sm">
                2
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-[#14201B] dark:text-[#EAF4EF]">
                  Datos de la empresa
                </h2>
                <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA]">Proveedor del servicio formativo y tecnológico</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Razón Social (solo lectura) */}
              <div>
                <label htmlFor="empresaRazonSocial" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Razón social
                </label>
                <div className="relative">
                  <input id="empresaRazonSocial" type="text" value="PrácticaPE" readonly className="w-full px-4 py-2.5 text-sm rounded-input bg-[#F1EFE6] dark:bg-[#1A2E27] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] font-semibold cursor-not-allowed select-none" />
                  <span className="absolute right-3 top-3 text-[#0E7C66] dark:text-[#4FC3A7]">
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                    </svg>
                  </span>
                </div>
                <p className="text-[11px] text-[#5A6B63] dark:text-[#9DB3AA] mt-1">Plataforma digital regional para prácticas en Piura.</p>
              </div>

              {/* RUC */}
              <div>
                <label htmlFor="empresaRucInput" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  RUC
                </label>
                <input id="empresaRucInput" type="text" placeholder="Ingresa el número de RUC" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] tabular-nums transition-all" />
                <p className="text-[11px] text-[#5A6B63] dark:text-[#9DB3AA] mt-1">Solo dígitos</p>
              </div>
            </div>
          </div>

          {/* BLOQUE 3: DETALLE DE LA RECLAMACIÓN */}
          <div className="p-6 md:p-8 rounded-[16px] bg-white dark:bg-[#12201B] border border-[#E3E0D5] dark:border-[#243833] shadow-card">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E3E0D5] dark:border-[#243833]">
              <div className="w-8 h-8 rounded-xl bg-[#D7F0E7] dark:bg-[#14382F] text-[#0E7C66] dark:text-[#4FC3A7] flex items-center justify-center font-display font-bold text-sm">
                3
              </div>
              <div>
                <h2 className="font-display font-bold text-lg text-[#14201B] dark:text-[#EAF4EF]">
                  Detalle de la reclamación
                </h2>
                <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA]">Naturaleza y fundamentos del hecho acontecido</p>
              </div>
            </div>

            {/* Selector Reclamo / Queja (Chips tipo radio mutuamente excluyente) */}
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-2">
                Tipo de reclamación <span className="text-[#C0392B]">*</span>
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="radiogroup" aria-label="Tipo de reclamación">
                
                {/* Opción Reclamo */}
                <label className="relative flex items-start p-3.5 rounded-[12px] border-[1.5px] border-[#0E7C66] dark:border-[#4FC3A7] bg-[#D7F0E7]/20 dark:bg-[#14382F]/30 cursor-pointer transition-all hover:bg-[#D7F0E7]/30">
                  <input type="radio" name="tipoReclamacion" value="reclamo" checked className="mt-0.5 text-[#0E7C66] focus:ring-[#0E7C66]" />
                  <div className="ml-3">
                    <span className="block font-display font-bold text-sm text-[#14201B] dark:text-[#EAF4EF]">Reclamo</span>
                    <span className="block text-[11px] text-[#5A6B63] dark:text-[#9DB3AA] leading-snug">Disconformidad relacionada directamente a los bienes o servicios brindados.</span>
                  </div>
                </label>

                {/* Opción Queja */}
                <label className="relative flex items-start p-3.5 rounded-[12px] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] bg-white dark:bg-[#12201B] cursor-pointer transition-all hover:bg-[#F1EFE6] dark:hover:bg-[#1A2E27]">
                  <input type="radio" name="tipoReclamacion" value="queja" className="mt-0.5 text-[#0E7C66] focus:ring-[#0E7C66]" />
                  <div className="ml-3">
                    <span className="block font-display font-bold text-sm text-[#14201B] dark:text-[#EAF4EF]">Queja</span>
                    <span className="block text-[11px] text-[#5A6B63] dark:text-[#9DB3AA] leading-snug">Disconformidad frente a la atención o trato brindado por el personal.</span>
                  </div>
                </label>

              </div>
            </div>

            {/* Campos: Motivo, Fecha, Monto */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
              
              {/* Motivo */}
              <div className="md:col-span-3">
                <label htmlFor="motivoSelect" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Motivo <span className="text-[#C0392B]">*</span>
                </label>
                <select id="motivoSelect" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all cursor-pointer">
                  <option value="" disabled selected>Selecciona el motivo</option>
                  <option value="oferta">Publicación de una oferta</option>
                  <option value="cobro">Cobro indebido o retractado</option>
                  <option value="trato">Trato inadecuado</option>
                  <option value="datos">Tratamiento de datos personales</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Fecha del hecho */}
              <div className="md:col-span-2">
                <label htmlFor="fechaInput" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Fecha del hecho <span className="text-[#C0392B]">*</span>
                </label>
                <input id="fechaInput" type="date" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all" />
              </div>

              {/* Monto reclamado */}
              <div className="md:col-span-1">
                <label htmlFor="montoInput" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                  Monto reclamado
                </label>
                <input id="montoInput" type="text" placeholder="Ingresa el monto" className="w-full px-4 py-2.5 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] tabular-nums transition-all" />
                <p className="text-[11px] text-[#5A6B63] dark:text-[#9DB3AA] mt-1">Opcional</p>
              </div>

            </div>

            {/* Detalle de lo ocurrido */}
            <div className="mb-5">
              <label htmlFor="detalleTextarea" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                Detalle de lo ocurrido <span className="text-[#C0392B]">*</span>
              </label>
              <textarea id="detalleTextarea" rows="4" placeholder="Describe de forma clara, ordenada y precisa los hechos sucedidos..." className="w-full px-4 py-3 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all resize-y"></textarea>
            </div>

            {/* Pedido o expectativa del usuario */}
            <div>
              <label htmlFor="pedidoTextarea" className="block text-xs font-semibold text-[#14201B] dark:text-[#EAF4EF] mb-1.5">
                Pedido o expectativa del usuario <span className="text-[#C0392B]">*</span>
              </label>
              <textarea id="pedidoTextarea" rows="3" placeholder="Indica concretamente qué solución o respuesta solicitas por parte de la empresa..." className="w-full px-4 py-3 text-sm rounded-input bg-white dark:bg-[#12201B] border-[1.5px] border-[#E3E0D5] dark:border-[#243833] text-[#14201B] dark:text-[#EAF4EF] transition-all resize-y"></textarea>
            </div>

          </div>

          {/* DECLARACIÓN Y TÉRMINOS */}
          <div className="p-5 rounded-[16px] bg-[#FAF9F4] dark:bg-[#1A2E27]/40 border border-[#E3E0D5] dark:border-[#243833]">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input type="checkbox" id="declaracionCheckbox" className="mt-1 w-4 h-4 rounded text-[#0E7C66] focus:ring-[#0E7C66] border-[#E3E0D5] dark:border-[#243833]" />
              <span className="text-xs text-[#14201B] dark:text-[#EAF4EF] leading-relaxed">
                Declaro que la información brindada es verdadera y acepto el tratamiento de mis datos conforme a la 
                <a href="/privacidad" className="text-[#0E7C66] dark:text-[#4FC3A7] font-semibold underline hover:text-[#0A5C4D] dark:hover:text-[#4FC3A7] ml-0.5">Política de Privacidad</a>.
              </span>
            </label>
          </div>

          {/* BOTÓN DE ENVÍO Y NOTA */}
          <div className="pt-2">
            <button id="submitBtn" type="submit" className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#0E7C66] hover:bg-[#0A5C4D] dark:bg-[#4FC3A7] dark:hover:bg-[#3ea98f] text-white dark:text-[#0B1512] font-display font-bold text-sm tracking-wide shadow-md transition-all duration-200 flex items-center justify-center gap-2 group">
              <span id="btnText">Enviar reclamación</span>
              <svg id="btnIcon" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
              </svg>
              {/* Spinner de carga simulado (oculto por defecto) */}
              <svg id="btnSpinner" className="hidden animate-spin w-4 h-4 text-white dark:text-[#0B1512]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>

            {/* Nota debajo del botón */}
            <p className="text-xs text-[#5A6B63] dark:text-[#9DB3AA] mt-3 flex items-center gap-1.5">
              <svg className="w-4 h-4 text-[#0E7C66] dark:text-[#4FC3A7]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Recibirás una constancia en tu correo electrónico
            </p>
          </div>

        </form>

      </section>

    </div>

  </main>

  {/* PIE DE PÁGINA OSCURO CON COLUMNAS */}
  <footer className="mt-20 bg-[#0B1512] text-[#EAF4EF] border-t border-[#243833] pt-14 pb-10">
    <div className="max-w-[1200px] mx-auto px-6">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#243833]">
        
        {/* Columna 1: Marca & Propósito */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#0E7C66] flex items-center justify-center text-white font-display font-extrabold text-base">
              P
            </div>
            <span className="font-display font-extrabold text-lg text-white">Práctica<span className="text-[#4FC3A7]">PE</span></span>
          </div>
          <p className="text-xs text-[#9DB3AA] leading-relaxed">
            Plataforma oficial de articulación para prácticas preprofesionales, convenios formativos y primer empleo en el departamento de Piura.
          </p>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#14382F] text-[#4FC3A7] text-[10px] font-bold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4FC3A7]"></span>
            Región Grau • Perú
          </div>
        </div>

        {/* Columna 2: Legal y Cumplimiento */}
        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
            Legal y Cumplimiento
          </h4>
          <ul className="space-y-2.5 text-xs text-[#9DB3AA]">
            <li><a href="/terminos" className="hover:text-white transition-colors">Términos y Condiciones</a></li>
            <li><a href="/privacidad" className="hover:text-white transition-colors">Política de Privacidad</a></li>
            <li><a href="/reclamaciones" className="text-[#4FC3A7] font-semibold flex items-center gap-1.5">
              <span>Libro de Reclamaciones</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#4FC3A7]"></span>
            </a></li>
            <li><span className="hover:text-white transition-colors">Convenios Formativos</span></li>
          </ul>
        </div>

        {/* Columna 3: Para Candidatos */}
        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
            Para Candidatos
          </h4>
          <ul className="space-y-2.5 text-xs text-[#9DB3AA]">
            <li><span className="hover:text-white transition-colors">Bolsa de Prácticas</span></li>
            <li><span className="hover:text-white transition-colors">Convenios Preprofesionales</span></li>
            <li><span className="hover:text-white transition-colors">Subvención y Seguro FOLA</span></li>
            <li><span className="hover:text-white transition-colors">Preguntas Frecuentes</span></li>
          </ul>
        </div>

        {/* Columna 4: Para Empleadores */}
        <div>
          <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4">
            Para Empleadores
          </h4>
          <ul className="space-y-2.5 text-xs text-[#9DB3AA]">
            <li><span className="hover:text-white transition-colors">Publicar Oportunidad</span></li>
            <li><span className="hover:text-white transition-colors">Validación de Centros de Estudio</span></li>
            <li><span className="hover:text-white transition-colors">Convenios con Universidades</span></li>
            <li><span className="hover:text-white transition-colors">Mesa de Ayuda Regional</span></li>
          </ul>
        </div>

      </div>

      {/* Línea final: Sin año inventado */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9DB3AA]">
        <p>PrácticaPE — Todos los derechos reservados</p>
        <p className="text-[11px] text-[#5A6B63]">Atención al usuario y protección al consumidor en la Región Grau</p>
      </div>

    </div>
  </footer>

  {/* Interacciones: Selector de modo oscuro & estado de envío simulado */}
  

    </div>
  );
}
