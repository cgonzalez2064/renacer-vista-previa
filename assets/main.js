(function(){
  "use strict";
  var root = document.documentElement;
  var mqReduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var reduceMotion = mqReduce.matches || root.classList.contains('a11y-motion');

  /* ============================================================
     I18N — Spanish (default) / English dictionary + toggle.
     Every key that appears in cms/content/schema.php is editable in the
     Content Manager (/admin); values edited there are published into
     index.html as an inert JSON block (#siteContent) and merged below.
     tools/extract-defaults.mjs regenerates cms/content/defaults.php from
     this object, so this is the single source of the approved copy.
     ============================================================ */
  var I18N = {
    es: {
      "meta.title": "Hospital Centro Médico Renacer · Maternidad y emergencia 24 h en Mixco",
      "meta.description": "Hospital en Zona 2 de Mixco: maternidad, intensivo de recién nacidos, cirugía, rayos X y emergencia 24 horas. Parqueo gratis y pago directo con aseguradoras.",
      "og.locale": "es_GT",
      "brand.aria": "Hospital Centro Médico Renacer, ir al inicio",
      "lang.toggle_aria": "Cambiar idioma a inglés",
      "lang.switch_to": "English",
      "menu.open_aria": "Abrir menú",
      "menu.close_aria": "Cerrar menú",
      "mobilenav.aria": "Menú principal",
      "skip": "Saltar al contenido",
      "backtotop.aria": "Volver arriba",
      "a11y.new_tab": " (se abre en una pestaña nueva)",
      "a11y.open_aria": "Opciones de accesibilidad",
      "a11y.close": "Listo",
      "a11y.size_small": "Texto normal",
      "a11y.size_medium": "Texto grande",
      "a11y.size_large": "Texto muy grande",
      "actions.call": "Llamar",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Cómo llegar",
      "actions.aria": "Acciones rápidas",
      "whatsapp.aria": "Escríbanos por WhatsApp (se abre en una pestaña nueva)",
      "contact.map_aria": "Abrir la ubicación del hospital en Google Maps (se abre en una pestaña nueva)",

      "nav.services": "Servicios",
      "nav.maternity": "Maternidad",
      "nav.facilities": "Instalaciones",
      "nav.patients": "Pacientes",
      "nav.insurance": "Seguros",
      "nav.contact": "Contacto",
      "nav.emergency": "Emergencia 24 h",

      "hero.eyebrow": "Zona 2 de Mixco · Emergencia 24 horas",
      "hero.title": "Brindamos un verdadero servicio con <em>calor humano</em>",
      "hero.desc": "Para que en todo momento se sienta como en casa.",
      "hero.cta1": "Llamar a emergencia",
      "hero.cta2": "Escribir por WhatsApp",
      "hero.status": "Emergencia 24 horas, los 365 días del año",
      "hero.badge1": "Parqueo gratis",
      "hero.badge2": "Seguridad las 24 horas",
      "hero.badge3": "Pago directo con aseguradoras",
      "quick.emergency": "Emergencia 24 horas",
      "quick.whatsapp": "WhatsApp directo",
      "quick.visits": "Horario de visita",
      "quick.directions": "Cómo llegar",
      "quick.aria": "Información rápida",
      "stat1.value": "15", "stat1.label": "años en el mercado guatemalteco",
      "stat2.value": "24/7", "stat2.label": "emergencia los 365 días del año",
      "stat3.value": "17", "stat3.label": "amplias habitaciones",
      "stat4.value": "3", "stat4.label": "salas de operaciones",

      "services.eyebrow": "Servicios",
      "services.title": "Servicios médicos y hospitalarios",
      "services.desc": "Nos caracterizamos por prestar servicios médicos y hospitalarios eficientes, oportunos y de vanguardia en lo que a tecnología y conocimientos médicos se refiere.",
      "services.cta": "Consultar por WhatsApp",
      "services.more": "Ver más",
      "services.more_aria": "Ver más sobre {name}",
      "services.call": "Llamar",
      "services.close": "Cerrar",
      "service1.title": "Emergencia",
      "service1.desc": "Funciona durante 24 horas los 365 días del año, con el apoyo de laboratorio clínico, asistencia médica y banco de sangre.",
      "service1.more": "El Servicio de Emergencia funciona durante 24 horas los 365 días del año y cuenta con el apoyo de servicios como Laboratorio Clínico, asistencia médica, banco de sangre, etc., lo que permite dar una atención integral y resolutiva a nuestros pacientes en el menor tiempo posible.\n\nUna vez que el paciente es atendido se determina su alta, con indicaciones precisas y, si las condiciones así lo requieren, se hospitaliza en una de las habitaciones del hospital.",
      "service2.title": "Maternidad",
      "service2.desc": "Queremos ser parte de uno de los acontecimientos más grandes de la vida: el embarazo y la llegada de un bebé.",
      "service2.more": "Contamos con todo lo necesario para acompañarle en el momento más importante de su vida: intensivo de neonatos, sala cuna, salas de cirugía y salas de recuperación.\n\nAtendemos cualquier tipo de intervención: parto normal con anestesia, parto natural y parto con cesárea.",
      "service3.title": "Intensivo de neonatos",
      "service3.desc": "Se ofrece un cuidado especial en la llegada de su bebé y la supervisión de nuestro personal 24 horas.",
      "service3.more": "Contamos con intensivo para recién nacidos, con capacidad para atender varios pacientes al mismo tiempo, con los aparatos necesarios y con el personal calificado que cuidará el bienestar de su bebé. Atendemos 24 horas los 365 días del año.\n\nCombinamos profesionales con tecnología para brindar los cuidados necesarios para los más pequeños, con amor y dedicación, como si estuvieran en casa. Ante cualquier emergencia, cuente con nosotros.",
      "service4.title": "Ginecología",
      "service4.desc": "Contamos con especialistas que pueden guiar su camino en esta inolvidable experiencia. Brindamos un servicio personalizado y profesional.",
      "service4.more": "Se cuenta con una clínica de atención primaria y se trabaja con los mejores ginecólogos del país.\n\nBrindamos un servicio integral, desde el diagnóstico y los controles del embarazo, para brindar el mejor servicio prenatal y postnatal.\n\nSin olvidar la detección temprana de cualquier problema ginecológico: su visita regular con el especialista evitará cualquier contratiempo.",
      "service5.title": "Pediatría",
      "service5.desc": "Los más pequeños merecen un lugar adecuado para llevar su seguimiento y control.",
      "service5.more": "Hospital Centro Médico Renacer es el lugar donde se puede llevar el control de desarrollo adecuado de sus hijos.\n\nSi es necesaria una intervención para los más pequeños del hogar, hacemos su estancia placentera y con los cuidados necesarios para su pronta recuperación. Su bienestar es nuestra razón de ser.",
      "service6.title": "Traumatología",
      "service6.desc": "Ponemos a su disposición médicos especialistas para atender lesiones y sus consecuencias.",
      "service6.more": "Contamos con capacidad para atender procedimientos invasivos, como intervenciones quirúrgicas, y no invasivos, como vendajes y yeso.\n\nSe tratan lesiones traumáticas y el estudio de aquellas congénitas o adquiridas, de manera preventiva, terapéutica y de rehabilitación, desde la edad infantil hasta los adultos mayores.\n\nAcuda al traumatólogo en caso de cualquier lesión, trauma o dolor en el aparato locomotor. Nuestros especialistas harán que su recuperación sea indolora y efectiva.",
      "service7.title": "Cirugía general",
      "service7.desc": "La seguridad del paciente es nuestro principal objetivo; estamos equipados con equipo de alta tecnología para atenderle.",
      "service7.more": "Diagnóstico y tratamiento de las patologías que se resuelven mediante procedimientos quirúrgicos o potencialmente quirúrgicos, tanto electivos como de urgencia, de origen benigno, inflamatorio, traumático o neoplásico.\n\nAparato digestivo, pared abdominal, sistema endocrino, mama, piel y partes blandas, y afecciones externas de la cabeza y el cuello.\n\nCuidamos nuestros estándares de calidad: todos los procedimientos son realizados de manera eficiente, con personal calificado.",
      "service8.title": "Videocirugía",
      "service8.desc": "Sistema avanzado de cirugía mínimamente invasiva desarrollado para realizar cirugías de alta complejidad.",
      "service8.more": "Se practica a través de pequeñas incisiones, usando la asistencia de una cámara de video que permite al equipo médico ver el campo quirúrgico dentro del paciente y accionar en el mismo.\n\nEs una técnica mínimamente invasiva: evita los grandes cortes de bisturí requeridos por la cirugía abierta o convencional y posibilita un periodo postoperatorio mucho más rápido y confortable.",
      "service9.title": "Cirugía estética",
      "service9.desc": "Área de la cirugía plástica que usa diferentes técnicas para mejorar la apariencia física de una persona o corregir algún problema físico.",
      "service9.more": "Nuestros especialistas ponen su conocimiento y experiencia a su servicio, para ayudarle a mejorar su aspecto con todas las medidas de seguridad e higiene requeridas, gracias a nuestras instalaciones y equipo médico.",
      "service10.title": "Laboratorio clínico",
      "service10.desc": "Nuestros resultados están respaldados por la más moderna tecnología, para facilitar diagnósticos acertados y confiables.",
      "service10.more": "Nuestros resultados están respaldados por la más moderna tecnología, para otorgar un alto nivel de confiabilidad a los médicos y facilitar diagnósticos acertados y confiables en las evaluaciones clínicas de cada paciente.\n\nSi necesita realizarse exámenes, contamos con laboratorio propio, para que tenga sus resultados lo más pronto posible.",
      "service11.title": "Rayos X",
      "service11.desc": "Contamos con equipo de rayos X a su disposición.",
      "service11.more": "",

      "maternity.eyebrow": "Maternidad",
      "maternity.title": "Le acompañamos en el momento <em>más importante</em> de su vida",
      "maternity.desc": "Queremos ser parte de uno de los acontecimientos más grandes de la vida: el embarazo y la llegada de un bebé. Contamos con todo lo necesario para acompañarle, y su médico de confianza puede atender su parto aquí.",
      "maternity.cta": "Cotizar mi parto",
      "projects.cta": "Descargar guía de maternidad",
      "projects.cta_aria": "Descargar la guía de maternidad en PDF",
      "mfeat1.title": "Parto normal, natural o cesárea",
      "mfeat1.desc": "Atendemos cualquier tipo de intervención: parto normal con anestesia, parto natural y parto con cesárea, con salas de cirugía y de recuperación.",
      "mfeat2.title": "Intensivo de recién nacidos",
      "mfeat2.desc": "Somos de los únicos hospitales en Guatemala que cuentan con intensivo para recién nacidos, con todo el equipo necesario para atender cualquier emergencia.",
      "mfeat3.title": "Sala cuna",
      "mfeat3.desc": "Se encuentra en el primer nivel, cerca de la sala de espera, para que siempre puedan ver a los nuevos miembros de la familia.",
      "mfeat4.title": "Su médico puede atender su parto",
      "mfeat4.desc": "Trabajamos con todos los médicos colegiados autorizados. Déjenos sus datos de contacto y le ayudaremos a hablar con el médico o resolver dudas.",
      "bag.title": "",
      "bag.desc": "",
      "bag1": "",
      "bag2": "",
      "bag3": "",
      "bag4": "",
      "bag5": "",
      "bag6": "",
      "bag7": "",
      "bag8": "",
      "bag9": "",
      "bag10": "",
      "bag.note": "",
      "bag.progress": "{n} de {total} listos",

      "about.eyebrow": "Quiénes somos",
      "about.title": "¿Por qué elegir Hospital Centro Médico Renacer?",
      "about.desc": "Contamos con muchos años de experiencia que nos han permitido grandes logros en el mejoramiento de servicios hospitalarios; esto ha significado la vida para muchos de nuestros pacientes y, para nosotros, innumerables experiencias, aprendizaje y crecimiento. Las nuevas instalaciones de nuestro centro le permitirán disfrutar de nuevo equipo en todas las áreas y, por supuesto, novedosa tecnología para el cuidado de su salud.",
      "about.art_caption": "Ofrecemos atención integral al paciente interno y externo, con equipo de tecnología moderna.",
      "about.mission_title": "Nuestro objetivo",
      "about.mission_desc": "Crear, mantener y marcar la diferencia en servicios de salud integrales, adaptados a las necesidades y exigencias de nuestros pacientes, apoyados en nuestro capital humano, la excelencia médico-asistencial y la búsqueda de vanguardia tecnológica, para contribuir con la calidad de vida de la sociedad.",
      "about.vision_title": "Nuestro compromiso",
      "about.vision_desc": "Nos esforzamos cada día por ser líderes en servicios de salud al cliente, garantizando la seguridad de nuestros pacientes y una calidad de atención que nos convierte en una opción para pacientes a nivel nacional e internacional.",
      "why.title": "",
      "why1": "",
      "why2": "",
      "why3": "",
      "why4": "",
      "why5": "",
      "why6": "",

      "projects.eyebrow": "Instalaciones",
      "projects.title": "Instalaciones a la vanguardia",
      "projects.desc": "Todo lo que necesita en una ubicación accesible, lejos del molesto tráfico. Contamos con 3 salas de operaciones, 17 amplias habitaciones, laboratorio e intensivo de recién nacidos.",
      "projects.view_details": "Ver fotos",
      "proj1.tag": "Hospitalización", "proj1.title": "Habitaciones", "proj1.desc": "Tres tipos según sus necesidades: semiprivadas, privadas y suites con sala familiar para recibir a sus visitas.",
      "proj2.tag": "Neonatología", "proj2.title": "Sala cuna e intensivo", "proj2.desc": "Sala cuna en el primer nivel e intensivo para recién nacidos con todo el equipo necesario.",
      "proj3.tag": "Cirugía", "proj3.title": "Salas de operaciones", "proj3.desc": "Tres salas amplias y con tecnología, con el equipo necesario para los distintos procedimientos.",
      "proj4.tag": "Para su comodidad", "proj4.title": "Recepción y sala de espera", "proj4.desc": "Amplia sala de espera cerca de la sala cuna, con televisión, snacks y wifi.",
      "proj5.tag": "Para la familia", "proj5.title": "Cafetería y área de niños", "proj5.desc": "Cafetería de 7:00 a 19:00 en el tercer nivel y un área de juegos para los más pequeños.",
      "proj6.tag": "Bienestar", "proj6.title": "Capilla", "proj6.desc": "Para un encuentro con Dios o para estar un momento a solas, en el tercer nivel.",
      "amen.title": "Nuestras instalaciones cuentan con",
      "amen1.title": "Parqueo gratis",
      "amen1.desc": "Bajo sótano, con varios estacionamientos, seguridad las 24 horas y totalmente gratis.",
      "amen2.title": "Recepción",
      "amen2.desc": "Personal calificado que le atenderá para resolver cualquier duda o eventualidad.",
      "amen3.title": "Sala de espera",
      "amen3.desc": "Amplia y cerca de la sala cuna, con televisión, snacks, wifi y área de niños.",
      "amen4.title": "Elevador",
      "amen4.desc": "Tres niveles a los que puede subir por gradas o elevador, para su comodidad.",
      "amen5.title": "Laboratorio",
      "amen5.desc": "Laboratorio propio, para que tenga sus resultados lo más pronto posible.",
      "amen6.title": "Rayos X",
      "amen6.desc": "Contamos con equipo de rayos X a su disposición.",
      "amen7.title": "Sala cuna",
      "amen7.desc": "En el primer nivel, cerca de la sala de espera, para ver siempre a los nuevos miembros de la familia.",
      "amen8.title": "Intensivo de recién nacidos",
      "amen8.desc": "Con todo el equipo necesario para atender cualquier emergencia.",
      "amen9.title": "Salas de operaciones",
      "amen9.desc": "Tres salas amplias, con tecnología y el equipo necesario para cada procedimiento.",
      "amen10.title": "Cafetería",
      "amen10.desc": "De 7:00 a 19:00, con excelente comida de forma práctica y a un precio justo.",
      "amen11.title": "Capilla",
      "amen11.desc": "En el tercer nivel, para un encuentro con Dios o un momento a solas.",
      "amen12.title": "Seguridad",
      "amen12.desc": "Seguridad las 24 horas y circuito cerrado de cámaras.",
      "projects.modal_close": "Cerrar",
      "projects.modal_prev": "Foto anterior",
      "projects.modal_next": "Foto siguiente",
      "projects.modal_dots_aria": "Elegir foto",
      "projects.modal_goto_slide": "Ir a la foto {n}",
      "projects.modal_image_of": "Foto {n} de {total}",
      "projects.modal_photo_alt": "Foto {n} de {title}",
      "projects.modal_placeholder_note": "Aún no hay fotografías de esta área.",

      "process.eyebrow": "",
      "process.title": "",
      "process1.title": "",
      "process1.desc": "",
      "process2.title": "",
      "process2.desc": "",
      "process3.title": "",
      "process3.desc": "",
      "process4.title": "",
      "process4.desc": "",

      "patients.eyebrow": "Pacientes y visitas",
      "patients.title": "Todo lo que necesita saber",
      "patients.desc": "Estamos comprometidos con mantener un ambiente que favorezca la comodidad, el reposo y la recuperación de todos nuestros pacientes. Gracias por su colaboración.",
      "patients.tab1": "Guía del paciente",
      "patients.tab2": "Visitas",
      "patients.tab3": "Maternidad",
      "patients.tabs_aria": "Información para pacientes",
      "visits.title": "Horario de visita",
      "visits.hours_text": "11:00 – 13:00 y 17:00 – 19:00",
      "visits.open": "Horario de visita abierto ahora",
      "visits.closed": "Fuera del horario de visita",
      "visits.next": "Próxima visita: {time}",
      "visits.until": "Hasta las {time}",
      "guide1": "La hora de salida del paciente es antes de las 12:00.",
      "guide2": "Por seguridad, no se recomienda el ingreso de niños menores de 12 años a las habitaciones.",
      "guide3": "Le recomendamos no traer joyas ni otros objetos de valor.",
      "guide4": "No está permitido ingresar alimentos a las habitaciones.",
      "guide5": "La cafetería está en el tercer nivel y atiende de 7:00 a 19:00.",
      "guide6": "El hospital es un espacio libre de humo y de bebidas alcohólicas.",
      "guide7": "Las camas son de uso exclusivo de los pacientes.",
      "guide8": "Si tiene seguro médico, informe a Administración lo antes posible para agilizar el trámite y conocer los beneficios de su póliza.",
      "guide9": "Si su cirugía es antes de las 8:00, puede ingresar la noche anterior como cortesía.",
      "guide10": "Aceptamos efectivo, cheques de caja, depósitos directos en bancos seleccionados, cheques personales y de empresa, y tarjeta de crédito o débito, según las políticas vigentes de la administración.",
      "visit1": "Si tiene gripe, catarro u otro proceso infeccioso, por favor evite visitar a los pacientes.",
      "visit2": "Los niños menores de 12 años no ingresan como visita; pueden esperar con un adulto en nuestra área de juego.",
      "visit3": "En habitaciones semiprivadas no se permiten acompañantes después del horario de visita de la noche, ni aparatos de sonido o televisión.",
      "visit4": "En habitaciones privadas, los acompañantes deben ingresar antes de las 19:00.",
      "visit5": "Guarde silencio y evite visitas muy largas, para favorecer el descanso.",
      "visit6": "Siga las indicaciones del personal y cuide las instalaciones.",
      "visit7": "Respete las normas de convivencia y ayúdenos a que prevalezca el derecho al descanso sobre el uso de televisores y radios.",
      "visit8": "No consuma tabaco ni bebidas alcohólicas dentro del hospital.",
      "mat1": "En horario de visita, puede ver a su recién nacido en la sala cuna, donde permanece por su seguridad y para evitar contagios.",
      "mat2": "Presente el DPI de ambos padres en Administración para elaborar el informe de nacimiento lo antes posible.",
      "mat3": "Solo una persona puede ingresar a la sala de operaciones, con autorización del médico tratante.",
      "mat4": "Durante el trabajo de parto o la cirugía, la familia puede esperar en la sala de espera.",
      "mat5": "Fuera del horario de visita, solo una persona puede permanecer en la habitación.",
      "mat6": "",
      "ext.title": "Extensiones internas",
      "ext1.label": "Recepción (horas hábiles)",
      "ext2.label": "Administración (horas hábiles)",
      "ext3.label": "Enfermería y residente",
      "ext4.label": "",

      "insurance.eyebrow": "Planes y seguros",
      "insurance.title": "Precios y planes de pago a su alcance",
      "insurance.desc": "Ofrecemos precios y planes de pago al alcance de su bolsillo para ayudarle a no poner en riesgo una de las cosas más preciadas: la vida. Por ello resulta sencillo mantener y cuidar de una buena salud.",
      "insurance.insurers_title": "Aseguradoras afiliadas",
      "insurance.insurers_desc": "Nuestro hospital tiene entre sus compromisos buscar bienestar y tranquilidad para los pacientes que acuden a él para su atención; por ello se han establecido convenios de pago directo.",
      "insurance.missing": "¿No encuentra su aseguradora? Comuníquese al 2209-4343.",
      "banks.title": "Pago directo: depósitos en bancos",
      "pay.title": "Otras formas de pago",
      "pay1": "Tarjeta de crédito o débito",
      "pay2": "Visa Cuotas",
      "pay3": "Cuotas Credomatic",
      "pay4": "Efectivo",
      "pay5": "Cheque de caja o previsado",
      "pay6": "Cheque personal o de empresa",
      "pay7": "",
      "pay8": "",

      "ctabanner.title": "¿Necesita atención ahora?",
      "ctabanner.desc": "El Servicio de Emergencia funciona durante 24 horas los 365 días del año.",
      "ctabanner.cta": "Llamar ahora",

      "contact.eyebrow": "Ubicación",
      "contact.title": "Contáctenos",
      "contact.desc": "Déjenos sus datos de contacto y le ayudaremos a resolver sus dudas.",
      "contact.label_address": "Dirección", "contact.label_phone": "Teléfonos", "contact.label_email": "Correo",
      "contact.label_hours": "Horario", "contact.label_social": "Redes sociales",
      "contact.hours_value": "Emergencia: 24 horas, los 365 días del año",
      "contact.map_open": "Abrir en Google Maps",
      "contact.vcard": "Guardar contacto",
      "contact.vcard_aria": "Guardar el contacto del hospital en su teléfono (archivo vCard)",
      "contact.waze": "Abrir en Waze",
      "contact.map_load": "Ver mapa aquí",
      "contact.map_note": "Al mostrar el mapa, Google recibe su dirección IP.",
      "contact.map_frame": "Mapa de la ubicación del hospital",
      "contact.phone_main": "Planta", "contact.phone_direct": "Directo",

      "form.title": "Envíenos un mensaje",
      "form.privacy_hint": "Por su privacidad, no incluya diagnósticos, resultados ni otros datos clínicos en este formulario.",
      "form.name_label": "Nombre completo", "form.name_err": "Ingrese su nombre completo.",
      "form.phone_label": "Teléfono", "form.phone_err": "Ingrese un número de teléfono válido.",
      "form.email_label": "Correo electrónico", "form.email_err": "Ingrese un correo electrónico válido.",
      "form.service_label": "¿En qué podemos ayudarle?",
      "form.opt_placeholder": "Seleccione una opción",
      "form.opt_maternity": "Maternidad y parto", "form.opt_surgery": "Cotización de cirugía",
      "form.opt_emergency": "Emergencia", "form.opt_specialist": "Consulta con especialista",
      "form.opt_lab": "Laboratorio clínico", "form.opt_insurance": "Seguros y formas de pago",
      "form.opt_other": "Otro",
      "form.service_err": "Seleccione una opción.",
      "form.message_label": "Su mensaje",
      "form.message_err": "Escriba un poco más (mínimo 10 caracteres).",
      "form.optional": "(opcional)", "form.choose": "Seleccione una opción",
      "form.err_required": "Complete este campo.", "form.err_choose": "Elija una opción.",
      "form.err_number": "Ingrese un número válido.", "form.err_date": "Elija una fecha válida.",
      "form.consent_label": "Acepto que usen mis datos solo para responder a mi solicitud, según el Aviso de Privacidad.",
      "form.consent_err": "Necesitamos su autorización para responderle.",
      "form.hp_label": "No completar este campo",
      "form.submit": "Enviar mensaje",
      "form.note": "Usaremos sus datos únicamente para responder a su solicitud. Consulte nuestro <a href=\"privacy-notice.html\">Aviso de Privacidad</a>.",
      "form.fallback": "¿Prefiere no usar el formulario? Escríbanos por <a href=\"tel:+50222094343\">teléfono</a>, <a href=\"mailto:cmedicorenacer@gmail.com\">correo</a> o <a href=\"https://wa.me/50256302274\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Enviando…",
      "form.status_ok": "¡Gracias! Recibimos su mensaje y le contactaremos pronto.",
      "form.status_invalid": "Revise los campos marcados antes de enviar.",
      "form.status_error": "Hubo un problema al enviar su mensaje. Intente de nuevo o escríbanos por WhatsApp.",
      "form.status_rate_limited": "Ha enviado varias solicitudes en poco tiempo. Espere unos minutos e intente de nuevo.",
      "form.status_offline": "Parece que no tiene conexión a internet. Revise su conexión e intente de nuevo.",
      "form.status_timeout": "El envío tardó demasiado. Revise su conexión e intente de nuevo.",
      "form.status_verifying": "Verificando que no es un robot…",
      "form.status_captcha": "No pudimos completar la verificación anti-spam. Recargue la página e intente de nuevo, o escríbanos por WhatsApp.",
      "form.status_turnstile": "Complete la verificación de seguridad y vuelva a enviar.",
      "form.captcha_idle": "Protegido contra spam con verificación automática.",
      "form.captcha_pending": "Verificación anti-spam en curso…",
      "form.captcha_ok": "Verificación anti-spam completa.",
      "form.captcha_error": "No se pudo cargar la verificación anti-spam. Recargue la página.",

      "faq.eyebrow": "Pacientes",
      "faq.title": "Preguntas frecuentes",
      "faq.q1": "¿Mi médico puede atender mi parto en el hospital?",
      "faq.a1": "Por supuesto. Trabajamos con todos los médicos colegiados autorizados. Déjenos sus datos de contacto y le ayudaremos a hablar con el médico o resolver dudas.",
      "faq.q2": "¿Trabajan con seguros?",
      "faq.a2": "Estamos afiliados a una amplia red de aseguradoras nacionales e internacionales; consulte la sección «Planes y seguros». Si no encuentra la suya, comuníquese al teléfono 2209-4343.",
      "faq.q3": "¿Cuál es el precio de un procedimiento de cirugía?",
      "faq.a3": "Cada caso es personalizado, por lo que necesitamos conocer un poco más de su caso para darle una cotización. Lo que podemos garantizarle es una tarifa justa y competitiva por la calidad de servicio que recibe.",
      "faq.q4": "¿Es difícil llegar a las instalaciones del hospital?",
      "faq.a4": "Para nada. Estamos ubicados estratégicamente muy cerca de la Roosevelt, una de las calzadas principales de la ciudad. Nuestro edificio se ve con facilidad y tiene parqueo gratis en su interior. Vea el mapa en la sección Contacto.",
      "faq.q5": "",
      "faq.a5": "",
      "faq.q6": "",
      "faq.a6": "",
      "faq.q7": "",
      "faq.a7": "",
      "faq.q8": "",
      "faq.a8": "",

      "a11y.title": "Accesibilidad",
      "a11y.desc": "Ajuste el sitio a su comodidad. Sus preferencias se guardan en este dispositivo.",
      "a11y.text_size": "Tamaño del texto",
      "a11y.contrast": "Alto contraste",
      "a11y.motion": "Reducir animaciones",
      "a11y.links": "Subrayar enlaces",
      "a11y.spacing": "Texto más espaciado",
      "a11y.reset": "Restablecer",

      "footer.about_desc": "Brindamos un verdadero servicio con calor humano, para que en todo momento se sienta como en casa.",
      "footer.links_heading": "Navegación", "footer.services_heading": "Servicios", "footer.contact_heading": "Contacto",
      "footer.privacy_link": "Aviso de Privacidad",
      "footer.rights": "Todos los derechos reservados.",
      "footer.made_by": "Sitio administrado por TeraDevs",

      /* Hospital modules (doctors, appointments, packages, exams, reviews, notice) */
      "notice.text": "",
      "notice.close": "Cerrar aviso",
      "notice.label": "Aviso",
      "doctors.eyebrow": "Directorio médico",
      "doctors.title": "Nuestros médicos",
      "doctors.desc": "Busque por nombre o especialidad y solicite su cita con el médico de su preferencia.",
      "doctors.cta": "Pedir cita",
      "doctors.search_label": "Buscar médico",
      "doctors.search_ph": "Nombre o especialidad",
      "doctors.filter_aria": "Filtrar por especialidad",
      "doctors.all": "Todas",
      "doctors.empty": "No encontramos médicos con esa búsqueda.",
      "doctors.license": "Colegiado",
      "doctors.hours": "Horario",
      "doctors.insurers": "Seguros",
      "doctors.request": "Solicitar en línea",
      "doctors.wa_msg": "Hola, quisiera una cita con {name} ({specialty}) en el Hospital Centro Médico Renacer.",
      "doctors.results": "{n} médicos",
      "doctors.result1": "1 médico",
      "appt.eyebrow": "Citas",
      "appt.title": "",
      "appt.desc": "Elija la especialidad y la fecha que prefiere. Le llamaremos para confirmar el horario disponible.",
      "appt.submit": "Solicitar cita",
      "appt.ok": "¡Gracias! Recibimos su solicitud. Le llamaremos para confirmar la fecha y la hora de su cita.",
      "appt.specialty_label": "Especialidad",
      "appt.doctor_label": "Médico",
      "appt.doctor_any": "Cualquier médico disponible",
      "appt.date_label": "Fecha preferida",
      "appt.time_label": "Horario preferido",
      "appt.time_morning": "Mañana",
      "appt.time_afternoon": "Tarde",
      "appt.time_any": "Cualquiera",
      "req.name_label": "Nombre del paciente",
      "req.phone_label": "Teléfono",
      "req.email_label": "Correo electrónico",
      "req.notes_label": "Comentarios",
      "req.health_notice": "Por su privacidad, no incluya diagnósticos, resultados ni otros datos clínicos: solo lo necesario para atender su solicitud.",
      "pkg.eyebrow": "Paquetes",
      "pkg.title": "Paquetes y precios de referencia",
      "pkg.desc": "Conozca de antemano el costo aproximado de los procedimientos más solicitados.",
      "pkg.from": "Desde",
      "pkg.cta": "Solicitar información",
      "pkg.note": "Precios de referencia en quetzales, sujetos a la evaluación médica y a cambios sin previo aviso.",
      "pkg.includes": "Incluye",
      "pkg.pdf": "Descargar precios en PDF",
      "comp.title": "",
      "labprep.eyebrow": "Exámenes",
      "labprep.title": "Cómo prepararse para sus exámenes",
      "labprep.desc": "Siga estas indicaciones para que sus resultados sean confiables. Si tiene dudas, llámenos antes de venir.",
      "labprep.time": "Resultados",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Envíenos los datos de su póliza y el área de admisión le confirmará su cobertura antes de su visita.",
      "insck.submit": "Verificar cobertura",
      "insck.ok": "¡Gracias! Admisión revisará su cobertura y le llamará con la respuesta.",
      "insck.insurer_label": "Aseguradora",
      "insck.other": "Otra aseguradora",
      "insck.policy_label": "Número de póliza o carné",
      "insck.holder_label": "Nombre del asegurado",
      "insck.service_label": "Servicio que necesita",
      "reviews.eyebrow": "Opiniones",
      "reviews.title": "Lo que dicen nuestros pacientes",
      "reviews.based": "Calificación en Google",
      "reviews.cta": "Deje su opinión en Google",
      "reviews.stars_aria": "{n} de 5 estrellas",
      "reviews.count_text": "{n} opiniones",
      "ctabanner.directions": "Cómo llegar a Emergencia",
      "actions.emergency": "Emergencia",
      "svcpage.back": "Volver al inicio",
      "svcpage.doctors": "Médicos de esta especialidad",
      "svcpage.request_title": "¿Necesita una cita?",
      "svcpage.request_desc": "Solicítela en línea, escríbanos por WhatsApp o llámenos.",
      "svcpage.more_services": "Otros servicios",
      "services.page": "Ver página de {name}",
      "nav.doctors": "Médicos",
      "doctor1.specialty": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",

      "whatsapp.message": "Hola, quisiera información sobre los servicios del Hospital Centro Médico Renacer."
    },
    en: {
      "meta.title": "Centro Médico Renacer Hospital · Maternity & 24/7 ER in Mixco",
      "meta.description": "Hospital in Zone 2, Mixco: maternity, newborn intensive care, surgery, X-ray and a 24-hour emergency room. Free parking and direct billing with insurers.",
      "og.locale": "en_US",
      "brand.aria": "Centro Médico Renacer Hospital, go to home",
      "lang.toggle_aria": "Switch language to Spanish",
      "lang.switch_to": "Español",
      "menu.open_aria": "Open menu",
      "menu.close_aria": "Close menu",
      "mobilenav.aria": "Main menu",
      "skip": "Skip to content",
      "backtotop.aria": "Back to top",
      "a11y.new_tab": " (opens in a new tab)",
      "a11y.open_aria": "Accessibility options",
      "a11y.close": "Done",
      "a11y.size_small": "Normal text",
      "a11y.size_medium": "Large text",
      "a11y.size_large": "Extra large text",
      "actions.call": "Call",
      "actions.whatsapp": "WhatsApp",
      "actions.directions": "Directions",
      "actions.aria": "Quick actions",
      "whatsapp.aria": "Message us on WhatsApp (opens in a new tab)",
      "contact.map_aria": "Open the hospital's location in Google Maps (opens in a new tab)",

      "nav.services": "Services",
      "nav.maternity": "Maternity",
      "nav.facilities": "Facilities",
      "nav.patients": "Patients",
      "nav.insurance": "Insurance",
      "nav.contact": "Contact",
      "nav.emergency": "24/7 Emergency",

      "hero.eyebrow": "Zone 2, Mixco · 24-hour emergency room",
      "hero.title": "Genuine care with a <em>human touch</em>",
      "hero.desc": "So that you feel at home at every moment.",
      "hero.cta1": "Call the ER",
      "hero.cta2": "Message us on WhatsApp",
      "hero.status": "Emergency room 24 hours, 365 days a year",
      "hero.badge1": "Free parking",
      "hero.badge2": "24-hour security",
      "hero.badge3": "Direct billing with insurers",
      "quick.emergency": "24-hour emergency",
      "quick.whatsapp": "Direct WhatsApp",
      "quick.visits": "Visiting hours",
      "quick.directions": "Directions",
      "quick.aria": "Quick information",
      "stat1.value": "15", "stat1.label": "years in the Guatemalan market",
      "stat2.value": "24/7", "stat2.label": "emergency care, 365 days a year",
      "stat3.value": "17", "stat3.label": "spacious rooms",
      "stat4.value": "3", "stat4.label": "operating rooms",

      "services.eyebrow": "Services",
      "services.title": "Medical and hospital services",
      "services.desc": "We provide efficient, timely, state-of-the-art medical and hospital services, in both technology and medical knowledge.",
      "services.cta": "Ask on WhatsApp",
      "services.more": "Learn more",
      "services.more_aria": "Learn more about {name}",
      "services.call": "Call",
      "services.close": "Close",
      "service1.title": "Emergency",
      "service1.desc": "Open 24 hours a day, 365 days a year, backed by the clinical laboratory, medical assistance and a blood bank.",
      "service1.more": "Our Emergency Department is open 24 hours a day, 365 days a year, supported by services such as the Clinical Laboratory, medical assistance and a blood bank, so we can give our patients complete, effective care in the shortest possible time.\n\nOnce the patient has been seen, we decide on discharge with clear instructions or, if their condition requires it, admit them to one of the hospital's rooms.",
      "service2.title": "Maternity",
      "service2.desc": "We want to be part of one of life's greatest events: pregnancy and the arrival of a baby.",
      "service2.more": "We have everything needed to be with you at the most important moment of your life: a neonatal ICU, nursery, operating rooms and recovery rooms.\n\nWe handle every kind of delivery: normal birth with anaesthesia, natural birth and caesarean section.",
      "service3.title": "Neonatal ICU",
      "service3.desc": "Special care when your baby arrives, with our staff watching over them 24 hours a day.",
      "service3.more": "Our newborn intensive care unit can look after several patients at once, with the equipment needed and qualified staff caring for your baby's well-being, 24 hours a day, 365 days a year.\n\nWe combine skilled professionals with technology to give the smallest patients the care they need, with love and dedication, just as if they were at home. In any emergency, count on us.",
      "service4.title": "Gynaecology",
      "service4.desc": "Our specialists can guide you through this unforgettable experience, with a personal, professional service.",
      "service4.more": "We have a primary care clinic and work with the best gynaecologists in the country.\n\nWe offer complete care, from diagnosis to pregnancy check-ups, for the best prenatal and postnatal service.\n\nAnd early detection of any gynaecological problem: regular visits to your specialist help prevent setbacks.",
      "service5.title": "Paediatrics",
      "service5.desc": "Little ones deserve the right place for their follow-up and check-ups.",
      "service5.more": "Centro Médico Renacer Hospital is the place to follow your children's development properly.\n\nIf the youngest members of the family need a procedure, we make their stay pleasant, with the care they need for a quick recovery. Their well-being is our reason for being.",
      "service6.title": "Traumatology",
      "service6.desc": "Specialist doctors to treat injuries and their after-effects.",
      "service6.more": "We handle invasive procedures, such as surgery, and non-invasive ones, such as bandaging and casts.\n\nWe treat traumatic injuries and study congenital or acquired conditions, with prevention, treatment and rehabilitation, from childhood to old age.\n\nSee a traumatologist for any injury, trauma or pain in the musculoskeletal system. Our specialists will make your recovery painless and effective.",
      "service7.title": "General surgery",
      "service7.desc": "Patient safety is our main goal, and we have high-tech equipment to care for you.",
      "service7.more": "Diagnosis and treatment of conditions resolved by surgery or potentially by surgery, both planned and urgent, whether benign, inflammatory, traumatic or neoplastic.\n\nDigestive system, abdominal wall, endocrine system, breast, skin and soft tissue, and external conditions of the head and neck.\n\nWe look after our quality standards: every procedure is carried out efficiently by qualified staff.",
      "service8.title": "Video surgery",
      "service8.desc": "An advanced minimally invasive surgery system for highly complex operations.",
      "service8.more": "It is performed through small incisions, with a video camera that lets the medical team see and work inside the surgical field.\n\nBeing minimally invasive, it avoids the large incisions of open surgery and allows a much faster, more comfortable recovery.",
      "service9.title": "Cosmetic surgery",
      "service9.desc": "The area of plastic surgery that uses different techniques to improve a person's appearance or correct a physical problem.",
      "service9.more": "Our specialists put their knowledge and experience at your service to help you improve your appearance, with every safety and hygiene measure required, thanks to our facilities and medical equipment.",
      "service10.title": "Clinical laboratory",
      "service10.desc": "Our results are backed by the most modern technology, for accurate and reliable diagnoses.",
      "service10.more": "Our results are backed by the most modern technology, giving doctors a high level of confidence and supporting accurate, reliable diagnoses in each patient's clinical evaluation.\n\nIf you need tests, we have our own laboratory so you get your results as soon as possible.",
      "service11.title": "X-ray",
      "service11.desc": "X-ray equipment is available to you.",
      "service11.more": "",

      "maternity.eyebrow": "Maternity",
      "maternity.title": "With you at the <em>most important</em> moment of your life",
      "maternity.desc": "We want to be part of one of life's greatest events: pregnancy and the arrival of a baby. We have everything needed to be with you, and your own doctor can deliver your baby here.",
      "maternity.cta": "Get a delivery quote",
      "projects.cta": "Download the maternity guide",
      "projects.cta_aria": "Download the maternity guide (PDF)",
      "mfeat1.title": "Normal, natural or caesarean birth",
      "mfeat1.desc": "We handle every kind of delivery: normal birth with anaesthesia, natural birth and caesarean section, with operating and recovery rooms.",
      "mfeat2.title": "Newborn intensive care",
      "mfeat2.desc": "We are one of the few hospitals in Guatemala with a newborn intensive care unit, equipped to handle any emergency.",
      "mfeat3.title": "Nursery",
      "mfeat3.desc": "On the first floor, next to the waiting room, so the family can always see its newest members.",
      "mfeat4.title": "Your doctor can deliver your baby",
      "mfeat4.desc": "We work with all licensed, registered doctors. Leave us your contact details and we'll help you talk to your doctor or answer your questions.",
      "bag.title": "",
      "bag.desc": "",
      "bag1": "",
      "bag2": "",
      "bag3": "",
      "bag4": "",
      "bag5": "",
      "bag6": "",
      "bag7": "",
      "bag8": "",
      "bag9": "",
      "bag10": "",
      "bag.note": "",
      "bag.progress": "{n} of {total} ready",

      "about.eyebrow": "Who we are",
      "about.title": "Why choose Centro Médico Renacer Hospital?",
      "about.desc": "Our many years of experience have brought great achievements in improving hospital services. For many of our patients this has meant life itself, and for us countless experiences, learning and growth. Our new facilities let you benefit from new equipment in every area and, of course, the latest technology for your health care.",
      "about.art_caption": "Complete care for inpatients and outpatients, with modern equipment.",
      "about.mission_title": "Our goal",
      "about.mission_desc": "To create, sustain and make a difference in comprehensive health services, adapted to our patients' needs and expectations, backed by our people, medical and care excellence and the pursuit of leading technology, to contribute to society's quality of life.",
      "about.vision_title": "Our commitment",
      "about.vision_desc": "Every day we strive to lead in patient-centred health services, guaranteeing our patients' safety and a quality of care that makes us a choice for patients at home and abroad.",
      "why.title": "",
      "why1": "",
      "why2": "",
      "why3": "",
      "why4": "",
      "why5": "",
      "why6": "",

      "projects.eyebrow": "Facilities",
      "projects.title": "State-of-the-art facilities",
      "projects.desc": "Everything you need in an accessible location, away from the traffic. We have 3 operating rooms, 17 spacious rooms, a laboratory and a newborn intensive care unit.",
      "projects.view_details": "See photos",
      "proj1.tag": "Inpatient care", "proj1.title": "Rooms", "proj1.desc": "Three types to suit your needs: semi-private, private and suites with a family lounge for visitors.",
      "proj2.tag": "Neonatology", "proj2.title": "Nursery and newborn ICU", "proj2.desc": "A first-floor nursery and a newborn ICU with all the equipment needed.",
      "proj3.tag": "Surgery", "proj3.title": "Operating rooms", "proj3.desc": "Three spacious, well-equipped rooms for the full range of procedures.",
      "proj4.tag": "For your comfort", "proj4.title": "Reception and waiting room", "proj4.desc": "A spacious waiting room by the nursery, with TV, snacks and Wi-Fi.",
      "proj5.tag": "For the family", "proj5.title": "Cafeteria and children's area", "proj5.desc": "A third-floor cafeteria open 7:00–19:00 and a play area for the little ones.",
      "proj6.tag": "Well-being", "proj6.title": "Chapel", "proj6.desc": "For a moment with God or a moment alone, on the third floor.",
      "amen.title": "Our facilities include",
      "amen1.title": "Free parking",
      "amen1.desc": "Underground, with plenty of spaces, 24-hour security and completely free.",
      "amen2.title": "Reception",
      "amen2.desc": "Qualified staff to help with any question or situation.",
      "amen3.title": "Waiting room",
      "amen3.desc": "Spacious and next to the nursery, with TV, snacks, Wi-Fi and a children's area.",
      "amen4.title": "Elevator",
      "amen4.desc": "Three floors, reachable by stairs or elevator.",
      "amen5.title": "Laboratory",
      "amen5.desc": "Our own laboratory, so you get results as soon as possible.",
      "amen6.title": "X-ray",
      "amen6.desc": "X-ray equipment is available to you.",
      "amen7.title": "Nursery",
      "amen7.desc": "On the first floor by the waiting room, so you can always see the newest family members.",
      "amen8.title": "Newborn ICU",
      "amen8.desc": "With all the equipment needed for any emergency.",
      "amen9.title": "Operating rooms",
      "amen9.desc": "Three spacious rooms with the technology and equipment for each procedure.",
      "amen10.title": "Cafeteria",
      "amen10.desc": "Open 7:00–19:00, with good food that is convenient and fairly priced.",
      "amen11.title": "Chapel",
      "amen11.desc": "On the third floor, for a moment with God or a moment alone.",
      "amen12.title": "Security",
      "amen12.desc": "24-hour security and CCTV.",
      "projects.modal_close": "Close",
      "projects.modal_prev": "Previous photo",
      "projects.modal_next": "Next photo",
      "projects.modal_dots_aria": "Choose photo",
      "projects.modal_goto_slide": "Go to photo {n}",
      "projects.modal_image_of": "Photo {n} of {total}",
      "projects.modal_photo_alt": "Photo {n} of {title}",
      "projects.modal_placeholder_note": "There are no photos of this area yet.",

      "process.eyebrow": "",
      "process.title": "",
      "process1.title": "",
      "process1.desc": "",
      "process2.title": "",
      "process2.desc": "",
      "process3.title": "",
      "process3.desc": "",
      "process4.title": "",
      "process4.desc": "",

      "patients.eyebrow": "Patients and visitors",
      "patients.title": "Everything you need to know",
      "patients.desc": "We are committed to an environment that supports the comfort, rest and recovery of all our patients. Thank you for your cooperation.",
      "patients.tab1": "Patient guide",
      "patients.tab2": "Visits",
      "patients.tab3": "Maternity",
      "patients.tabs_aria": "Patient information",
      "visits.title": "Visiting hours",
      "visits.hours_text": "11:00 AM – 1:00 PM and 5:00 – 7:00 PM",
      "visits.open": "Visiting hours are open now",
      "visits.closed": "Outside visiting hours",
      "visits.next": "Next visit: {time}",
      "visits.until": "Until {time}",
      "guide1": "Patient check-out is before 12:00 noon.",
      "guide2": "For safety, children under 12 are not advised to enter patient rooms.",
      "guide3": "We recommend not bringing jewelry or other valuables.",
      "guide4": "Food may not be brought into patient rooms.",
      "guide5": "The cafeteria is on the third floor and is open from 7:00 AM to 7:00 PM.",
      "guide6": "The hospital is a smoke-free and alcohol-free space.",
      "guide7": "Beds are for patients only.",
      "guide8": "If you have health insurance, let Administration know as soon as possible to speed up the paperwork and learn about your policy's benefits.",
      "guide9": "If your surgery is before 8:00 AM, you can be admitted the night before as a courtesy.",
      "guide10": "We accept cash, cashier's checks, direct deposits at selected banks, personal and company checks, and credit or debit cards, under the administration's current policies.",
      "visit1": "If you have a cold, flu or any other infection, please avoid visiting patients.",
      "visit2": "Children under 12 cannot visit patients; they can wait with an adult in our play area.",
      "visit3": "In semi-private rooms, companions may not stay after the evening visiting hours, and sound devices or TVs are not allowed.",
      "visit4": "In private rooms, companions must arrive before 7:00 PM.",
      "visit5": "Please keep quiet and keep visits short, so patients can rest.",
      "visit6": "Follow staff instructions and help us look after the facilities.",
      "visit7": "Please respect the house rules and help us put patients' rest ahead of TVs and radios.",
      "visit8": "Do not smoke or drink alcohol inside the hospital.",
      "mat1": "During visiting hours you can see your newborn in the nursery, where babies stay for their safety and to prevent infections.",
      "mat2": "Present both parents' ID (DPI) to Administration so the birth report can be prepared as soon as possible.",
      "mat3": "Only one person may enter the operating room, with the attending physician's authorization.",
      "mat4": "During labor or surgery, family members can wait in the waiting room.",
      "mat5": "Outside visiting hours, only one person may stay in the room.",
      "mat6": "",
      "ext.title": "Internal extensions",
      "ext1.label": "Reception (business hours)",
      "ext2.label": "Administration (business hours)",
      "ext3.label": "Nursing and resident doctor",
      "ext4.label": "",

      "insurance.eyebrow": "Plans and insurance",
      "insurance.title": "Prices and payment plans within reach",
      "insurance.desc": "We offer affordable prices and payment plans, so you never have to put one of the most precious things at risk: life. That makes it easy to look after your health.",
      "insurance.insurers_title": "Partner insurers",
      "insurance.insurers_desc": "Among our hospital's commitments is the well-being and peace of mind of the patients who come to us for care, which is why we have direct-billing agreements in place.",
      "insurance.missing": "Can't find your insurer? Call 2209-4343.",
      "banks.title": "Direct payment: bank deposits",
      "pay.title": "Other payment options",
      "pay1": "Credit or debit card",
      "pay2": "Visa Cuotas",
      "pay3": "Credomatic installments",
      "pay4": "Cash",
      "pay5": "Cashier's or certified check",
      "pay6": "Personal or company check",
      "pay7": "",
      "pay8": "",

      "ctabanner.title": "Need care right now?",
      "ctabanner.desc": "The Emergency Service operates 24 hours a day, 365 days a year.",
      "ctabanner.cta": "Call now",

      "contact.eyebrow": "Location",
      "contact.title": "Contact us",
      "contact.desc": "Leave us your contact details and we'll help answer your questions.",
      "contact.label_address": "Address", "contact.label_phone": "Phones", "contact.label_email": "Email",
      "contact.label_hours": "Hours", "contact.label_social": "Social media",
      "contact.hours_value": "Emergency: 24 hours, 365 days a year",
      "contact.map_open": "Open in Google Maps",
      "contact.vcard": "Save contact",
      "contact.vcard_aria": "Save the hospital's contact to your phone (vCard file)",
      "contact.waze": "Open in Waze",
      "contact.map_load": "Show map here",
      "contact.map_note": "Showing the map sends your IP address to Google.",
      "contact.map_frame": "Map of the hospital's location",
      "contact.phone_main": "Main line", "contact.phone_direct": "Direct",

      "form.title": "Send us a message",
      "form.privacy_hint": "For your privacy, please don't include diagnoses, test results or other clinical details in this form.",
      "form.name_label": "Full name", "form.name_err": "Enter your full name.",
      "form.phone_label": "Phone", "form.phone_err": "Enter a valid phone number.",
      "form.email_label": "Email address", "form.email_err": "Enter a valid email address.",
      "form.service_label": "How can we help?",
      "form.opt_placeholder": "Choose an option",
      "form.opt_maternity": "Maternity and delivery", "form.opt_surgery": "Surgery quote",
      "form.opt_emergency": "Emergency", "form.opt_specialist": "Specialist appointment",
      "form.opt_lab": "Clinical laboratory", "form.opt_insurance": "Insurance and payment",
      "form.opt_other": "Other",
      "form.service_err": "Choose an option.",
      "form.message_label": "Your message",
      "form.message_err": "Please write a little more (at least 10 characters).",
      "form.optional": "(optional)", "form.choose": "Choose an option",
      "form.err_required": "Complete this field.", "form.err_choose": "Choose an option.",
      "form.err_number": "Enter a valid number.", "form.err_date": "Choose a valid date.",
      "form.consent_label": "I agree that my details are used only to answer my request, as described in the Privacy Notice.",
      "form.consent_err": "We need your permission to reply.",
      "form.hp_label": "Leave this field empty",
      "form.submit": "Send message",
      "form.note": "We'll only use your details to answer your request. See our <a href=\"privacy-notice.html\">Privacy Notice</a>.",
      "form.fallback": "Prefer not to use the form? Reach us by <a href=\"tel:+50222094343\">phone</a>, <a href=\"mailto:cmedicorenacer@gmail.com\">email</a>, or <a href=\"https://wa.me/50256302274\" target=\"_blank\" rel=\"noopener noreferrer\">WhatsApp</a>.",
      "form.status_sending": "Sending…",
      "form.status_ok": "Thank you! We received your message and will contact you soon.",
      "form.status_invalid": "Please check the highlighted fields before sending.",
      "form.status_error": "There was a problem sending your message. Try again or message us on WhatsApp.",
      "form.status_rate_limited": "You've sent several requests in a short time. Please wait a few minutes and try again.",
      "form.status_offline": "You seem to be offline. Check your connection and try again.",
      "form.status_timeout": "Sending took too long. Check your connection and try again.",
      "form.status_verifying": "Checking that you're not a robot…",
      "form.status_captcha": "We couldn't complete the anti-spam check. Reload the page and try again, or message us on WhatsApp.",
      "form.status_turnstile": "Complete the security check and send again.",
      "form.captcha_idle": "Protected against spam with an automatic check.",
      "form.captcha_pending": "Anti-spam check in progress…",
      "form.captcha_ok": "Anti-spam check complete.",
      "form.captcha_error": "The anti-spam check couldn't load. Reload the page.",

      "faq.eyebrow": "Patients",
      "faq.title": "Frequently asked questions",
      "faq.q1": "Can my own doctor deliver my baby at the hospital?",
      "faq.a1": "Of course. We work with all licensed, registered doctors. Leave us your contact details and we'll help you talk to your doctor or answer your questions.",
      "faq.q2": "Do you work with insurance?",
      "faq.a2": "We are affiliated with a wide network of national and international insurers; see the \"Plans and insurance\" section. If you can't find yours, call 2209-4343.",
      "faq.q3": "What does a surgical procedure cost?",
      "faq.a3": "Every case is individual, so we need to know a little more about yours to give you a quote. What we can guarantee is a fair, competitive rate for the quality of service you receive.",
      "faq.q4": "Is it hard to get to the hospital?",
      "faq.a4": "Not at all. We're strategically located very close to Calzada Roosevelt, one of the city's main roads. Our building is easy to spot and has free parking inside. See the map in the Contact section.",
      "faq.q5": "",
      "faq.a5": "",
      "faq.q6": "",
      "faq.a6": "",
      "faq.q7": "",
      "faq.a7": "",
      "faq.q8": "",
      "faq.a8": "",

      "a11y.title": "Accessibility",
      "a11y.desc": "Adjust the site to suit you. Your preferences are saved on this device.",
      "a11y.text_size": "Text size",
      "a11y.contrast": "High contrast",
      "a11y.motion": "Reduce motion",
      "a11y.links": "Underline links",
      "a11y.spacing": "More text spacing",
      "a11y.reset": "Reset",

      "footer.about_desc": "Genuine care with a human touch, so that you feel at home at every moment.",
      "footer.links_heading": "Navigation", "footer.services_heading": "Services", "footer.contact_heading": "Contact",
      "footer.privacy_link": "Privacy Notice",
      "footer.rights": "All rights reserved.",
      "footer.made_by": "Site managed by TeraDevs",

      /* Hospital modules (doctors, appointments, packages, exams, reviews, notice) */
      "notice.text": "",
      "notice.close": "Close notice",
      "notice.label": "Notice",
      "doctors.eyebrow": "Medical directory",
      "doctors.title": "Our doctors",
      "doctors.desc": "Search by name or specialty and request an appointment with the doctor of your choice.",
      "doctors.cta": "Book appointment",
      "doctors.search_label": "Find a doctor",
      "doctors.search_ph": "Name or specialty",
      "doctors.filter_aria": "Filter by specialty",
      "doctors.all": "All",
      "doctors.empty": "No doctors match your search.",
      "doctors.license": "License no.",
      "doctors.hours": "Hours",
      "doctors.insurers": "Insurance",
      "doctors.request": "Request online",
      "doctors.wa_msg": "Hello, I'd like an appointment with {name} ({specialty}) at Centro Médico Renacer Hospital.",
      "doctors.results": "{n} doctors",
      "doctors.result1": "1 doctor",
      "appt.eyebrow": "Appointments",
      "appt.title": "",
      "appt.desc": "Choose the specialty and your preferred date. We will call you to confirm an available time.",
      "appt.submit": "Request appointment",
      "appt.ok": "Thank you! We received your request. We will call you to confirm the date and time of your appointment.",
      "appt.specialty_label": "Specialty",
      "appt.doctor_label": "Doctor",
      "appt.doctor_any": "Any available doctor",
      "appt.date_label": "Preferred date",
      "appt.time_label": "Preferred time",
      "appt.time_morning": "Morning",
      "appt.time_afternoon": "Afternoon",
      "appt.time_any": "Any",
      "req.name_label": "Patient's name",
      "req.phone_label": "Phone",
      "req.email_label": "Email",
      "req.notes_label": "Comments",
      "req.health_notice": "For your privacy, please don't include diagnoses, test results or other clinical details — only what we need to handle your request.",
      "pkg.eyebrow": "Packages",
      "pkg.title": "Packages and reference prices",
      "pkg.desc": "Know the approximate cost of our most requested procedures in advance.",
      "pkg.from": "From",
      "pkg.cta": "Request information",
      "pkg.note": "Reference prices in quetzales, subject to medical evaluation and change without notice.",
      "pkg.includes": "Includes",
      "pkg.pdf": "Download price list (PDF)",
      "comp.title": "",
      "labprep.eyebrow": "Exams",
      "labprep.title": "How to prepare for your exams",
      "labprep.desc": "Follow these instructions so your results are reliable. If in doubt, call us before you come.",
      "labprep.time": "Results",
      "inshow.title": "",
      "insck.title": "",
      "insck.desc": "Send us your policy details and our admissions team will confirm your coverage before your visit.",
      "insck.submit": "Check coverage",
      "insck.ok": "Thank you! Admissions will review your coverage and call you back with the answer.",
      "insck.insurer_label": "Insurance company",
      "insck.other": "Other insurer",
      "insck.policy_label": "Policy or member number",
      "insck.holder_label": "Policyholder's name",
      "insck.service_label": "Service you need",
      "reviews.eyebrow": "Reviews",
      "reviews.title": "What our patients say",
      "reviews.based": "Google rating",
      "reviews.cta": "Leave a review on Google",
      "reviews.stars_aria": "{n} out of 5 stars",
      "reviews.count_text": "{n} reviews",
      "ctabanner.directions": "Directions to the ER",
      "actions.emergency": "Emergency",
      "svcpage.back": "Back to home",
      "svcpage.doctors": "Doctors in this specialty",
      "svcpage.request_title": "Need an appointment?",
      "svcpage.request_desc": "Request it online, message us on WhatsApp or call us.",
      "svcpage.more_services": "Other services",
      "services.page": "{name} page",
      "nav.doctors": "Doctors",
      "doctor1.specialty": "",
      "doctor1.hours": "",
      "doctor1.bio": "",
      "doctor2.specialty": "",
      "doctor2.hours": "",
      "doctor2.bio": "",
      "doctor3.specialty": "",
      "doctor3.hours": "",
      "doctor3.bio": "",
      "doctor4.specialty": "",
      "doctor4.hours": "",
      "doctor4.bio": "",
      "doctor5.specialty": "",
      "doctor5.hours": "",
      "doctor5.bio": "",
      "doctor6.specialty": "",
      "doctor6.hours": "",
      "doctor6.bio": "",
      "doctor7.specialty": "",
      "doctor7.hours": "",
      "doctor7.bio": "",
      "doctor8.specialty": "",
      "doctor8.hours": "",
      "doctor8.bio": "",
      "doctor9.specialty": "",
      "doctor9.hours": "",
      "doctor9.bio": "",
      "doctor10.specialty": "",
      "doctor10.hours": "",
      "doctor10.bio": "",
      "doctor11.specialty": "",
      "doctor11.hours": "",
      "doctor11.bio": "",
      "doctor12.specialty": "",
      "doctor12.hours": "",
      "doctor12.bio": "",
      "pkg1.name": "",
      "pkg1.badge": "",
      "pkg1.desc": "",
      "pkg1.includes": "",
      "comp1": "",
      "review1.text": "",
      "review1.when": "",
      "pkg2.name": "",
      "pkg2.badge": "",
      "pkg2.desc": "",
      "pkg2.includes": "",
      "comp2": "",
      "review2.text": "",
      "review2.when": "",
      "pkg3.name": "",
      "pkg3.badge": "",
      "pkg3.desc": "",
      "pkg3.includes": "",
      "comp3": "",
      "review3.text": "",
      "review3.when": "",
      "pkg4.name": "",
      "pkg4.badge": "",
      "pkg4.desc": "",
      "pkg4.includes": "",
      "comp4": "",
      "review4.text": "",
      "review4.when": "",
      "pkg5.name": "",
      "pkg5.badge": "",
      "pkg5.desc": "",
      "pkg5.includes": "",
      "comp5": "",
      "review5.text": "",
      "review5.when": "",
      "pkg6.name": "",
      "pkg6.badge": "",
      "pkg6.desc": "",
      "pkg6.includes": "",
      "comp6": "",
      "review6.text": "",
      "review6.when": "",
      "exam1.name": "",
      "exam1.prep": "",
      "exam1.time": "",
      "exam2.name": "",
      "exam2.prep": "",
      "exam2.time": "",
      "exam3.name": "",
      "exam3.prep": "",
      "exam3.time": "",
      "exam4.name": "",
      "exam4.prep": "",
      "exam4.time": "",
      "exam5.name": "",
      "exam5.prep": "",
      "exam5.time": "",
      "exam6.name": "",
      "exam6.prep": "",
      "exam6.time": "",
      "exam7.name": "",
      "exam7.prep": "",
      "exam7.time": "",
      "exam8.name": "",
      "exam8.prep": "",
      "exam8.time": "",
      "exam9.name": "",
      "exam9.prep": "",
      "exam9.time": "",
      "exam10.name": "",
      "exam10.prep": "",
      "exam10.time": "",
      "inshow1": "",
      "inshow2": "",
      "inshow3": "",
      "inshow4": "",
      "inshow5": "",

      "whatsapp.message": "Hello, I'd like information about the services at Centro Médico Renacer Hospital."
    }
  };

  /* ============================================================
     CONTENT MANAGER OVERRIDES — text, contact details and photo alt
     text edited in /admin arrive as an inert JSON block (#siteContent).
     ============================================================ */
  var SITE_CONTENT = (function(){
    var el = document.getElementById('siteContent');
    if (!el) return {};
    try {
      var data = JSON.parse(el.textContent);
      return (data && typeof data === 'object') ? data : {};
    } catch (e) { return {}; }
  })();
  /* Only these keys may carry markup (built and escaped server-side). */
  var HTML_OVERRIDE_KEYS = { 'hero.title': true, 'maternity.title': true, 'form.fallback': true };
  if (SITE_CONTENT.i18n && typeof SITE_CONTENT.i18n === 'object'){
    ['es', 'en'].forEach(function(lang){
      var overrides = SITE_CONTENT.i18n[lang];
      if (!overrides || typeof overrides !== 'object') return;
      Object.keys(overrides).forEach(function(key){
        var val = overrides[key];
        if (typeof val !== 'string') return;
        if (val.indexOf('<') !== -1 && !HTML_OVERRIDE_KEYS[key]) return;
        I18N[lang][key] = val;
      });
    });
  }
  var SITE_IMAGES = (SITE_CONTENT.images && typeof SITE_CONTENT.images === 'object') ? SITE_CONTENT.images : {};

  // Nothing is stored until the visitor actually sets something (empty values remove the key).
  function store(key, val){ try { if (val === undefined) return localStorage.getItem(key); if (val === '{}' || val === '[]') localStorage.removeItem(key); else localStorage.setItem(key, val); } catch (e) { return null; } return null; }

  var LANG_KEY = 'renacer_lang';
  var currentLang = (function(){
    var saved = store(LANG_KEY);
    return (saved === 'es' || saved === 'en') ? saved : 'es';
  })();
  var WHATSAPP_NUMBER = (typeof SITE_CONTENT.whatsapp === 'string' && /^\d{8,15}$/.test(SITE_CONTENT.whatsapp))
    ? SITE_CONTENT.whatsapp : (root.getAttribute('data-wa') || '50256302274');

  function t(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.es[key] || key; }
  function fmt(s, vars){ return String(s).replace(/\{(\w+)\}/g, function(m, k){ return vars[k] !== undefined ? vars[k] : m; }); }
  function waUrl(text){ return 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(text); }

  var langToggle = document.getElementById('langToggle');
  var langListeners = [];

  function applyLang(lang){
    var dict = I18N[lang] || I18N.es;
    currentLang = lang;
    root.lang = (lang === 'es') ? 'es-GT' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n')];
      if (val === undefined) return;
      if (val.indexOf('<') !== -1) el.innerHTML = val; else el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function(el){
      var val = dict[el.getAttribute('data-i18n-html')];
      if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach(function(el){
      el.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var parts = pair.split(':');
        if (parts.length !== 2) return;
        var val = dict[parts[1].trim()];
        if (val !== undefined) el.setAttribute(parts[0].trim(), val);
      });
    });
    /* Service pages keep their own title (the home page's title is for the home page). */
    if (dict['meta.title'] && document.body.getAttribute('data-page') !== 'service') document.title = dict['meta.title'];
    [['metaDescription', 'meta.description'], ['ogTitle', 'meta.title'], ['ogDescription', 'meta.description'], ['twTitle', 'meta.title'], ['twDescription', 'meta.description'], ['ogLocale', 'og.locale']].forEach(function(p){
      var el = document.getElementById(p[0]);
      if (el && dict[p[1]]) el.setAttribute('content', dict[p[1]]);
    });
    if (langToggle){
      langToggle.querySelector('span').textContent = (lang === 'es') ? 'EN' : 'ES';
    }
    /* WhatsApp links: the general message, or one per service. */
    document.querySelectorAll('[data-wa]').forEach(function(a){
      var key = a.getAttribute('data-wa');
      var text = dict['whatsapp.message'];
      if (key){
        var name = dict[key] || '';
        text = (lang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + name.toLowerCase() + (lang === 'es' ? ' en el Hospital Centro Médico Renacer.' : ' at Centro Médico Renacer Hospital.');
      }
      a.setAttribute('href', waUrl(text));
    });
    store(LANG_KEY, lang);
    langListeners.forEach(function(fn){ fn(lang); });
  }

  document.querySelectorAll('[data-lang-toggle]').forEach(function(b){
    b.addEventListener('click', function(){
      var next = currentLang === 'es' ? 'en' : 'es';
      // A soft cross-fade between languages where the browser supports it.
      if (document.startViewTransition && !root.classList.contains('a11y-motion') && !mqReduce.matches) document.startViewTransition(function(){ applyLang(next); });
      else applyLang(next);
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  /* ---------- Header: translucent material once content scrolls under it ---------- */
  var header = document.getElementById('siteHeader');
  var ticking = false;
  function onScroll(){
    ticking = false;
    var sy = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', sy > 8);
    if (backToTop) backToTop.classList.toggle('show', sy > 900);
  }
  window.addEventListener('scroll', function(){ if (!ticking){ ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- Sheets (native <dialog>): menu, accessibility, gallery ----------
     A <dialog> opened with showModal() already traps focus, makes the page
     behind it inert and closes with Escape. Each sheet enters and leaves
     along the same path (spatial consistency); closing waits for the exit
     transition, but a new open interrupts it immediately. */
  function sheet(dialog, opener){
    if (!dialog || typeof dialog.showModal !== 'function') return null;
    var closingTimer = null;
    var returnFocus = null;
    function open(from){
      returnFocus = from || opener || document.activeElement;
      clearTimeout(closingTimer);
      dialog.classList.remove('is-closing');
      if (!dialog.open) dialog.showModal();
      if (opener) opener.setAttribute('aria-expanded', 'true');
      requestAnimationFrame(function(){ dialog.classList.add('is-open'); });
      root.classList.add('has-sheet');
    }
    function close(){
      if (!dialog.open) return;
      dialog.classList.remove('is-open');
      dialog.classList.add('is-closing');
      if (opener) opener.setAttribute('aria-expanded', 'false');
      var done = function(){ dialog.classList.remove('is-closing'); if (dialog.open) dialog.close(); root.classList.remove('has-sheet'); if (returnFocus && returnFocus.focus) returnFocus.focus(); };
      if (reduceMotion) done(); else closingTimer = setTimeout(done, 260);
    }
    dialog.addEventListener('cancel', function(e){ e.preventDefault(); close(); });
    /* A tap on the dimmed backdrop (the <dialog> box itself) closes it. */
    dialog.addEventListener('click', function(e){ if (e.target === dialog) close(); });
    dialog.querySelectorAll('[data-close]').forEach(function(b){ b.addEventListener('click', close); });
    if (opener) opener.addEventListener('click', function(){ dialog.open && !dialog.classList.contains('is-closing') ? close() : open(opener); });
    return { open: open, close: close, el: dialog };
  }

  var menu = sheet(document.getElementById('mobileNav'), document.getElementById('menuToggle'));
  if (menu){
    menu.el.querySelectorAll('a[href^="#"]').forEach(function(a){ a.addEventListener('click', function(){ menu.close(); }); });
    window.matchMedia('(min-width: 1080px)').addEventListener('change', function(e){ if (e.matches) menu.close(); });
  }

  /* ---------- Accessibility preferences ---------- */
  var A11Y_KEY = 'renacer_a11y';
  var a11y = (function(){ try { return JSON.parse(store(A11Y_KEY) || '{}') || {}; } catch (e) { return {}; } })();
  var a11ySheet = sheet(document.getElementById('a11yPanel'), document.getElementById('a11yToggle'));
  function applyA11y(){
    root.setAttribute('data-text', a11y.size || '0');
    ['contrast', 'motion', 'links', 'spacing'].forEach(function(k){ root.classList.toggle('a11y-' + k, !!a11y[k]); });
    reduceMotion = mqReduce.matches || !!a11y.motion;
    root.classList.toggle('js-motion', !reduceMotion);
    document.querySelectorAll('[data-a11y]').forEach(function(sw){ sw.setAttribute('aria-checked', a11y[sw.getAttribute('data-a11y')] ? 'true' : 'false'); });
    document.querySelectorAll('[data-text-size]').forEach(function(b){ b.setAttribute('aria-pressed', String(b.getAttribute('data-text-size') === String(a11y.size || '0'))); });
    store(A11Y_KEY, JSON.stringify(a11y));
  }
  document.querySelectorAll('[data-a11y]').forEach(function(sw){
    sw.addEventListener('click', function(){ var k = sw.getAttribute('data-a11y'); a11y[k] = !a11y[k]; applyA11y(); });
  });
  document.querySelectorAll('[data-text-size]').forEach(function(b){
    b.addEventListener('click', function(){ a11y.size = b.getAttribute('data-text-size'); applyA11y(); });
  });
  var a11yReset = document.getElementById('a11yReset');
  if (a11yReset) a11yReset.addEventListener('click', function(){ a11y = {}; applyA11y(); });
  applyA11y();
  mqReduce.addEventListener && mqReduce.addEventListener('change', applyA11y);

  /* ---------- Reveal on scroll (content is visible without JS) ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduceMotion){
    root.classList.add('js-reveal');
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- Stats: count up once, from 0 to the published number ---------- */
  var statEls = document.querySelectorAll('[data-count]');
  function countUp(el){
    var text = el.textContent;
    var m = text.match(/^(\D*)(\d+)(.*)$/);
    if (!m || reduceMotion || m[2] === '24') return;
    var target = parseInt(m[2], 10), start = null, dur = 900;
    function frame(ts){
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = m[1] + Math.round(target * eased) + m[3];
      if (p < 1) requestAnimationFrame(frame); else el.textContent = text;
    }
    requestAnimationFrame(frame);
  }
  if ('IntersectionObserver' in window && statEls.length){
    var sio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting){ countUp(en.target); sio.unobserve(en.target); } });
    }, { threshold: 0.6 });
    statEls.forEach(function(el){ sio.observe(el); });
  }

  /* ---------- Active section in the desktop navigation ---------- */
  var navLinks = document.querySelectorAll('.nav-desktop a[href^="#"]');
  if ('IntersectionObserver' in window && navLinks.length){
    var byId = {};
    navLinks.forEach(function(a){ byId[a.getAttribute('href').slice(1)] = a; });
    var nio = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (!en.isIntersecting) return;
        navLinks.forEach(function(a){ a.removeAttribute('aria-current'); });
        var a = byId[en.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    Object.keys(byId).forEach(function(id){ var s = document.getElementById(id); if (s) nio.observe(s); });
  }

  /* ---------- Visiting hours: live status in Guatemala time (UTC−6, no DST) ---------- */
  var visitEls = Array.prototype.slice.call(document.querySelectorAll('#visitStatus, [data-visit-status]'));
  function visitStatus(){
    visitEls.forEach(function(visitEl){
      var windows = (visitEl.getAttribute('data-windows') || '').split(',').map(function(w){
        var m = w.trim().match(/^(\d{1,2}):(\d{2})-(\d{1,2}):(\d{2})$/);
        return m ? [(+m[1]) * 60 + (+m[2]), (+m[3]) * 60 + (+m[4]), m[1] + ':' + m[2], m[3] + ':' + m[4]] : null;
      }).filter(Boolean);
      if (!windows.length){ visitEl.hidden = true; return; }
      var now = new Date(Date.now() - 6 * 3600 * 1000);
      var mins = now.getUTCHours() * 60 + now.getUTCMinutes();
      var open = null, next = null;
      windows.forEach(function(w){
        if (mins >= w[0] && mins < w[1]) open = w;
        if (mins < w[0] && (!next || w[0] < next[0])) next = w;
      });
      if (!open && !next) next = windows.slice().sort(function(a, b){ return a[0] - b[0]; })[0];
      visitEl.setAttribute('data-state', open ? 'open' : 'closed');
      var label = visitEl.querySelector('[data-role="label"]');
      var detail = visitEl.querySelector('[data-role="detail"]');
      var detailText = open ? fmt(t('visits.until'), { time: open[3] }) : fmt(t('visits.next'), { time: next[2] });
      if (detail){ label.textContent = t(open ? 'visits.open' : 'visits.closed'); detail.textContent = detailText; }
      else if (label) label.textContent = open ? t('visits.open') : detailText;
    });
  }
  visitStatus();
  setInterval(visitStatus, 60000);
  langListeners.push(visitStatus);

  /* ---------- Patients: tabs (WAI-ARIA pattern) with a sliding indicator ---------- */
  var tablist = document.querySelector('[role="tablist"]');
  if (tablist){
    var tabs = Array.prototype.slice.call(tablist.querySelectorAll('[role="tab"]'));
    var indicator = tablist.querySelector('.tab-indicator');
    var moveIndicator = function(tab){
      if (!indicator) return;
      indicator.style.width = tab.offsetWidth + 'px';
      indicator.style.transform = 'translateX(' + tab.offsetLeft + 'px)';
    };
    var select = function(tab, focus){
      tabs.forEach(function(tb){
        var on = tb === tab;
        tb.setAttribute('aria-selected', String(on));
        tb.tabIndex = on ? 0 : -1;
        document.getElementById(tb.getAttribute('aria-controls')).hidden = !on;
      });
      moveIndicator(tab);
      if (focus) tab.focus();
    };
    tabs.forEach(function(tab, i){
      /* Feedback on press, not on release. */
      tab.addEventListener('pointerdown', function(){ select(tab, false); });
      tab.addEventListener('click', function(){ select(tab, false); });
      tab.addEventListener('keydown', function(e){
        var n = null;
        if (e.key === 'ArrowRight') n = tabs[(i + 1) % tabs.length];
        if (e.key === 'ArrowLeft') n = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') n = tabs[0];
        if (e.key === 'End') n = tabs[tabs.length - 1];
        if (n){ e.preventDefault(); select(n, true); }
      });
    });
    var current = function(){ return tabs.filter(function(tb){ return tb.getAttribute('aria-selected') === 'true'; })[0] || tabs[0]; };
    window.addEventListener('resize', function(){ moveIndicator(current()); });
    langListeners.push(function(){ requestAnimationFrame(function(){ moveIndicator(current()); }); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function(){ moveIndicator(current()); });
    moveIndicator(current());
  }

  /* ---------- Hospital bag checklist, saved only on this device ---------- */
  var BAG_KEY = 'renacer_bag';
  var bag = document.getElementById('bagList');
  if (bag){
    var saved = (function(){ try { return JSON.parse(store(BAG_KEY) || '[]') || []; } catch (e) { return []; } })();
    var boxes = Array.prototype.slice.call(bag.querySelectorAll('input[type="checkbox"]'));
    var progress = document.getElementById('bagProgress');
    var ring = document.getElementById('bagRing');
    var update = function(){
      var done = boxes.filter(function(b){ return b.checked; });
      if (progress) progress.textContent = fmt(t('bag.progress'), { n: done.length, total: boxes.length });
      if (ring){ ring.style.setProperty('--p', boxes.length ? done.length / boxes.length : 0); ring.toggleAttribute('data-empty', done.length === 0); }
      store(BAG_KEY, JSON.stringify(done.map(function(b){ return b.value; })));
    };
    boxes.forEach(function(b){ b.checked = saved.indexOf(b.value) !== -1; b.addEventListener('change', update); });
    update();
    langListeners.push(update);
  }

  /* ---------- "Get a quote" buttons pick the matching form option ---------- */
  document.querySelectorAll('[data-preselect]').forEach(function(a){
    a.addEventListener('click', function(){
      var sel = document.getElementById('service');
      var val = a.getAttribute('data-preselect');
      if (sel && sel.querySelector('option[value="' + val + '"]')) sel.value = val;
    });
  });

  /* ---------- Facilities gallery: native scroll-snap carousel in a sheet ----------
     Native scrolling gives 1:1 tracking, momentum projection and rubber-band
     edges for free; the buttons and dots only ask it to scroll. */
  var gallery = sheet(document.getElementById('galleryModal'));
  if (gallery){
    var slidesEl = document.getElementById('gallerySlides');
    var dotsEl = document.getElementById('galleryDots');
    var titleEl = document.getElementById('galleryTitle');
    var tagEl = document.getElementById('galleryTag');
    var descEl = document.getElementById('galleryDesc');
    var noteEl = document.getElementById('galleryNote');
    var liveEl = document.getElementById('galleryLive');
    var prev = document.getElementById('galleryPrev');
    var next = document.getElementById('galleryNext');
    var index = 0, count = 0;
    var go = function(i){
      i = Math.max(0, Math.min(count - 1, i));
      var w = slidesEl.clientWidth;
      slidesEl.scrollTo({ left: i * w, behavior: reduceMotion ? 'auto' : 'smooth' });
    };
    var sync = function(){
      var i = Math.round(slidesEl.scrollLeft / Math.max(1, slidesEl.clientWidth));
      if (i === index && dotsEl.childNodes.length) return;
      index = i;
      Array.prototype.forEach.call(dotsEl.children, function(d, k){ d.setAttribute('aria-current', k === i ? 'true' : 'false'); });
      prev.disabled = i <= 0;
      next.disabled = i >= count - 1;
      liveEl.textContent = count > 1 ? fmt(t('projects.modal_image_of'), { n: i + 1, total: count }) : '';
    };
    slidesEl.addEventListener('scroll', function(){ requestAnimationFrame(sync); }, { passive: true });
    prev.addEventListener('click', function(){ go(index - 1); });
    next.addEventListener('click', function(){ go(index + 1); });
    slidesEl.addEventListener('keydown', function(e){
      if (e.key === 'ArrowRight'){ e.preventDefault(); go(index + 1); }
      if (e.key === 'ArrowLeft'){ e.preventDefault(); go(index - 1); }
    });
    document.querySelectorAll('.area-card[data-project]').forEach(function(card){
      var btn = card.querySelector('.area-open');
      if (!btn) return;
      btn.addEventListener('click', function(){
        var pid = card.getAttribute('data-project');
        var title = t(pid + '.title');
        var paths = (card.getAttribute('data-images') || '').split(',').map(function(s){ return s.trim(); }).filter(Boolean);
        tagEl.textContent = t(pid + '.tag');
        titleEl.textContent = title;
        descEl.textContent = t(pid + '.desc');
        slidesEl.innerHTML = '';
        dotsEl.innerHTML = '';
        if (!paths.length){
          var ph = document.createElement('div');
          var art = card.querySelector('.area-art');
          ph.className = 'gallery-slide is-placeholder ' + (art ? art.className : '');
          ph.innerHTML = art ? art.innerHTML : '';
          slidesEl.appendChild(ph);
        }
        paths.forEach(function(p, k){
          var meta = SITE_IMAGES[p] || {};
          var alt = (meta.alt && (meta.alt[currentLang] || meta.alt.es)) || fmt(t('projects.modal_photo_alt'), { n: k + 1, title: title });
          var slide = document.createElement('div');
          slide.className = 'gallery-slide';
          var img = document.createElement('img');
          img.src = p;
          if (meta.srcset){ img.srcset = meta.srcset; img.sizes = '(max-width: 760px) 100vw, 760px'; }
          img.alt = alt;
          img.decoding = 'async';
          if (k > 0) img.loading = 'lazy';
          slide.appendChild(img);
          slidesEl.appendChild(slide);
          var dot = document.createElement('button');
          dot.type = 'button';
          dot.setAttribute('aria-label', fmt(t('projects.modal_goto_slide'), { n: k + 1 }));
          dot.addEventListener('click', function(){ go(k); });
          dotsEl.appendChild(dot);
        });
        count = Math.max(1, paths.length);
        noteEl.hidden = paths.length > 0;
        dotsEl.hidden = prev.hidden = next.hidden = paths.length < 2;
        index = -1;
        gallery.open(btn);
        slidesEl.scrollLeft = 0;
        sync();
      });
    });
  }

  /* ---------- Service details: a sheet anchored to the card that opened it ---------- */
  var serviceSheet = sheet(document.getElementById('serviceModal'));
  if (serviceSheet){
    var sHero = document.getElementById('serviceHero');
    var sIcon = document.getElementById('serviceIcon');
    var sTitle = document.getElementById('serviceTitle');
    var sText = document.getElementById('serviceText');
    var sWa = document.getElementById('serviceWa');
    var openService = function(card, btn){
      var key = card.getAttribute('data-service');
      var photo = card.querySelector('.service-photo');
      var icon = card.querySelector('.service-icon');
      sHero.innerHTML = '';
      if (photo){
        var img = photo.cloneNode(false);
        img.removeAttribute('loading');
        img.className = '';
        img.sizes = '(max-width: 760px) 100vw, 640px';
        sHero.appendChild(img);
      }
      sIcon.innerHTML = icon ? icon.innerHTML : '';
      sIcon.className = 'service-icon' + (key === 'service1' ? ' is-emergency' : '');
      sTitle.textContent = t(key + '.title');
      sText.innerHTML = '';
      [t(key + '.desc')].concat(String(t(key + '.more') || '').split(/\n\s*\n/)).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        sText.appendChild(p);
      });
      sWa.setAttribute('data-wa', key + '.title');
      sWa.setAttribute('href', waUrl((currentLang === 'es' ? 'Hola, quisiera información sobre ' : 'Hello, I\'d like information about ') + t(key + '.title').toLowerCase() + (currentLang === 'es' ? ' en el Hospital Centro Médico Renacer.' : ' at Centro Médico Renacer Hospital.')));
      serviceSheet.open(btn);
      sText.scrollTop = 0;
    };
    var labelServices = function(){
      document.querySelectorAll('.service-card[data-service]').forEach(function(card){
        var btn = card.querySelector('.service-open');
        if (btn) btn.setAttribute('aria-label', fmt(t('services.more_aria'), { name: t(card.getAttribute('data-service') + '.title') }));
      });
    };
    document.querySelectorAll('.service-card[data-service]').forEach(function(card){
      var btn = card.querySelector('.service-open');
      if (btn) btn.addEventListener('click', function(){ openService(card, btn); });
    });
    langListeners.push(labelServices);
  }

  /* ---------- Map: loaded only when the visitor asks (no Google request before) ---------- */
  var mapBox = document.getElementById('mapBox');
  var mapLoad = document.getElementById('mapLoad');
  if (mapBox && mapLoad){
    mapLoad.addEventListener('click', function(){
      if (mapBox.querySelector('iframe')) return;
      var f = document.createElement('iframe');
      f.src = mapBox.getAttribute('data-src');
      f.title = t('contact.map_frame');
      f.loading = 'lazy';
      f.referrerPolicy = 'no-referrer-when-downgrade';
      f.setAttribute('allowfullscreen', '');
      f.addEventListener('load', function(){ mapBox.classList.add('is-loaded'); f.focus(); });
      mapBox.appendChild(f);
    });
  }

  /* ---------- Save contact: a correct vCard built on the device ---------- */
  var vcardBtn = document.getElementById('vcardBtn');
  if (vcardBtn){
    vcardBtn.addEventListener('click', function(){
      var d = {};
      try { d = JSON.parse(vcardBtn.getAttribute('data-vcard') || '{}'); } catch (e) { return; }
      var esc = function(v){ return String(v || '').replace(/([\\,;])/g, '\\$1').replace(/\n/g, '\\n'); };
      var lines = ['BEGIN:VCARD', 'VERSION:3.0', 'KIND:org', 'FN:' + esc(d.name), 'ORG:' + esc(d.name)];
      (d.tel || []).forEach(function(n, i){ lines.push('TEL;TYPE=' + (i === 0 ? 'WORK,VOICE' : 'CELL,VOICE') + ':' + n); });
      if (d.email) lines.push('EMAIL;TYPE=WORK:' + d.email);
      lines.push('ADR;TYPE=WORK:;;' + esc(d.street) + ';' + esc(d.city) + ';;;Guatemala');
      if (d.url) lines.push('URL:' + d.url);
      lines.push('END:VCARD');
      var blob = new Blob([lines.join('\r\n') + '\r\n'], { type: 'text/vcard;charset=utf-8' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'Hospital-Centro-Medico-Renacer.vcf';
      document.body.appendChild(a);
      a.click();
      setTimeout(function(){ URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    });
  }

  /* ---------- Photos fade in once loaded (no pop-in on slow connections) ---------- */
  Array.prototype.forEach.call(document.querySelectorAll('.service-photo, .area-photo, .about-photo, .maternity-img, .hero-photo img'), function(img){
    if (img.complete && img.naturalWidth) return;
    img.classList.add('is-loading');
    function done(){ img.classList.remove('is-loading'); }
    img.addEventListener('load', done, { once: true });
    img.addEventListener('error', done, { once: true });
  });

  /* ---------- Gentle parallax on the large photos (transform only, rAF-batched) ---------- */
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  var mqWide = window.matchMedia('(min-width: 900px)');
  var plxTicking = false;
  function parallax(){
    plxTicking = false;
    var vh = window.innerHeight;
    parallaxEls.forEach(function(el){
      if (reduceMotion || !mqWide.matches){ el.style.transform = ''; return; }
      var r = el.getBoundingClientRect();
      if (r.bottom < 0 || r.top > vh) return;
      var offset = (r.top + r.height / 2 - vh / 2) * -0.06;
      el.style.transform = 'translate3d(0,' + offset.toFixed(1) + 'px,0)';
    });
  }
  if (parallaxEls.length){
    window.addEventListener('scroll', function(){ if (!plxTicking){ plxTicking = true; requestAnimationFrame(parallax); } }, { passive: true });
    window.addEventListener('resize', parallax);
    parallax();
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById('backToTop');
  if (backToTop){
    backToTop.addEventListener('click', function(){
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
      var skip = document.getElementById('inicio');
      if (skip) skip.focus({ preventScroll: true });
    });
  }

  applyLang(currentLang);
  onScroll();

  /* ============================================================
     Contact form — client-side validation (a UX convenience only;
     assets/contact-handler.php re-validates everything server-side),
     honeypot + minimum-completion-time anti-spam signals, and a
     defensive fetch() that handles non-JSON responses, HTTP status
     categories, timeouts, duplicate submits, offline errors, and
     field-specific errors returned by the server. Field values are
     preserved on any failure and cleared only after a confirmed
     success.
     ============================================================ */
  var form = document.getElementById('contactForm');
  var status = document.getElementById('formStatus');
  var summary = document.getElementById('formSummary');

  /* Minimum-completion-time signal: stamped once, invisible, never an
     expectation placed on the visitor — purely a server-side anti-spam
     input alongside the honeypot. */
  var loadedAtField = document.getElementById('formLoadedAt');
  if (loadedAtField) loadedAtField.value = String(Date.now());

  /* ------------------------------------------------------------
     Captcha, two layers (verified again in assets/contact-handler.php):
     1. Built-in, always on: the handler issues a signed, single-use
        challenge and the browser finds the matching number with the
        Web Crypto API (SHA-256) in the background while the visitor
        types. Invisible: the visitor never has to do anything.
     2. Optional Cloudflare Turnstile, only when the page carries a
        site key (the owner enables it in the Content Manager). It
        stays hidden unless Cloudflare needs the visitor to click.
     ------------------------------------------------------------ */
  var captchaInput = document.getElementById('formCaptchaAnswer');
  var captchaText = document.getElementById('formCaptchaText');
  var captchaNote = document.getElementById('formCaptcha');
  var captchaJob = null;      /* Promise of the current answer */
  var captchaIssued = 0;      /* when the current challenge was requested */
  var CAPTCHA_FRESH_MS = 25 * 60 * 1000; /* the server accepts 30 min */

  function setCaptchaState(state){
    if (captchaNote) captchaNote.setAttribute('data-state', state);
    if (captchaText){
      captchaText.setAttribute('data-i18n', 'form.captcha_' + state);
      captchaText.textContent = t('form.captcha_' + state);
    }
  }

  function hexToBytes(hex){
    var out = new Uint8Array(hex.length / 2);
    for (var i = 0; i < out.length; i++) out[i] = parseInt(hex.substr(i * 2, 2), 16);
    return out;
  }

  function sameBytes(buf, target){
    var a = new Uint8Array(buf);
    for (var i = 0; i < target.length; i++) if (a[i] !== target[i]) return false;
    return true;
  }

  function solveCaptcha(){
    if (!captchaInput) return Promise.resolve();
    if (!window.crypto || !window.crypto.subtle || typeof TextEncoder === 'undefined' || typeof fetch === 'undefined'){
      setCaptchaState('error');
      return Promise.reject(new Error('captcha_unsupported'));
    }
    captchaInput.value = '';
    captchaIssued = Date.now();
    setCaptchaState('pending');
    return fetch('assets/contact-handler.php?challenge=1', { headers: { 'Accept': 'application/json' }, cache: 'no-store', credentials: 'same-origin' })
      .then(function(res){
        if (!res.ok) throw new Error('captcha_challenge_' + res.status);
        return res.json();
      })
      .then(function(c){
        if (!c || c.algorithm !== 'SHA-256' || typeof c.salt !== 'string' || typeof c.challenge !== 'string') throw new Error('captcha_bad_challenge');
        var enc = new TextEncoder();
        var target = hexToBytes(c.challenge);
        var BATCH = 1000;
        var search = function(start){
          if (start > c.maxnumber) throw new Error('captcha_unsolved');
          var end = Math.min(start + BATCH, c.maxnumber + 1);
          var jobs = [];
          for (var n = start; n < end; n++) jobs.push(window.crypto.subtle.digest('SHA-256', enc.encode(c.salt + n)));
          return Promise.all(jobs).then(function(hashes){
            for (var i = 0; i < hashes.length; i++) if (sameBytes(hashes[i], target)) return start + i;
            return search(end);
          });
        };
        return search(0).then(function(number){
          captchaInput.value = btoa(JSON.stringify({ algorithm: c.algorithm, challenge: c.challenge, number: number, salt: c.salt, signature: c.signature }));
          setCaptchaState('ok');
        });
      })
      .catch(function(err){
        setCaptchaState('error');
        captchaJob = null;
        throw err;
      });
  }

  /* The current answer, or a new one when there is none or it is getting old. */
  function ensureCaptcha(){
    if (!captchaJob || Date.now() - captchaIssued > CAPTCHA_FRESH_MS) captchaJob = solveCaptcha();
    return captchaJob;
  }

  function startCaptcha(){
    ensureCaptcha().catch(function(){ /* shown in the note; retried on submit */ });
    loadTurnstile();
  }

  /* Optional Cloudflare Turnstile. */
  var tsBox = document.getElementById('formTurnstile');
  var tsSiteKey = tsBox ? (tsBox.getAttribute('data-sitekey') || '') : '';
  var tsWidget = null;
  var tsToken = '';
  var tsWaiters = [];
  var tsLoading = false;

  function tsSettle(){
    var w = tsWaiters; tsWaiters = [];
    w.forEach(function(fn){ fn(); });
  }

  function loadTurnstile(){
    if (!tsSiteKey || tsLoading) return;
    tsLoading = true;
    window.renacerTurnstileReady = function(){
      if (!window.turnstile) return;
      tsWidget = window.turnstile.render(tsBox, {
        sitekey: tsSiteKey,
        action: 'contact',
        appearance: 'interaction-only',
        language: currentLang === 'en' ? 'en' : 'es',
        callback: function(token){ tsToken = token; tsSettle(); },
        'expired-callback': function(){ tsToken = ''; },
        'error-callback': function(){ tsToken = ''; tsSettle(); }
      });
    };
    var sc = document.createElement('script');
    sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=renacerTurnstileReady';
    sc.async = true;
    sc.defer = true;
    document.head.appendChild(sc);
  }

  /* Resolves with true when Turnstile is off or has a token; false after waiting. */
  function turnstileReady(){
    if (!tsSiteKey) return Promise.resolve(true);
    loadTurnstile();
    if (tsToken) return Promise.resolve(true);
    return new Promise(function(resolve){
      var timer = setTimeout(function(){ resolve(!!tsToken); }, 20000);
      tsWaiters.push(function(){ clearTimeout(timer); resolve(!!tsToken); });
    });
  }

  function resetTurnstile(){
    tsToken = '';
    if (tsWidget !== null && window.turnstile) {
      try { window.turnstile.reset(tsWidget); } catch (e) { /* widget gone */ }
    }
  }

  /* Start as soon as the visitor shows interest in the form (or it scrolls into view). */
  var contactFormEl = document.getElementById('contactForm');
  if (contactFormEl && captchaInput){
    var started = false;
    var kick = function(){ if (!started){ started = true; startCaptcha(); } };
    contactFormEl.addEventListener('focusin', kick);
    contactFormEl.addEventListener('pointerdown', kick);
    if ('IntersectionObserver' in window){
      var io = new IntersectionObserver(function(entries){
        if (entries.some(function(e){ return e.isIntersecting; })){ io.disconnect(); kick(); }
      }, { rootMargin: '300px' });
      io.observe(contactFormEl);
    }
  }

  if (form){
    /* The questions come from the Content Manager (Sitio web → Formulario de
       contacto): each .field holds one question — an input, select or
       textarea, or a group of radio buttons / checkboxes. */
    var questionFields = function(){
      return Array.prototype.filter.call(form.querySelectorAll('.field'), function(f){
        return !f.classList.contains('hp-field') && f.querySelector('input[name],select[name],textarea[name]');
      });
    };
    var fieldName = function(field){
      return field.querySelector('input[name],select[name],textarea[name]').name.replace(/\[\]$/, '');
    };
    var controlsOf = function(field){ return field.querySelectorAll('input[name],select[name],textarea[name]'); };
    var fieldValid = function(field){
      var controls = controlsOf(field);
      if (controls[0].type === 'checkbox'){
        if (!field.hasAttribute('data-required')) return true;
        return Array.prototype.some.call(controls, function(c){ return c.checked; });
      }
      return controls[0].checkValidity(); /* a radio's validity covers its whole group */
    };
    var markField = function(field, ok){
      field.classList.toggle('invalid', !ok);
      Array.prototype.forEach.call(controlsOf(field), function(c){ c.setAttribute('aria-invalid', ok ? 'false' : 'true'); });
    };
    var fieldByName = function(name){
      var found = null;
      questionFields().forEach(function(f){ if (!found && fieldName(f) === name) found = f; });
      return found;
    };
    /* Dates that must be from today on (the page is static: today is set here). */
    var today = new Date();
    var todayIso = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    Array.prototype.forEach.call(form.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayIso; });

    var submitBtn = form.querySelector('button[type="submit"]');
    var submitting = false;

    var validateAll = function(){
      var valid = true;
      var firstInvalid = null;
      questionFields().forEach(function(field){
        var ok = fieldValid(field);
        markField(field, ok);
        if (!ok){
          valid = false;
          if (!firstInvalid) firstInvalid = controlsOf(field)[0];
        }
      });
      return { valid: valid, firstInvalid: firstInvalid };
    }

    var showSummary = function(message){
      if (!summary) return;
      summary.textContent = message;
      summary.hidden = false;
    }
    var hideSummary = function(){
      if (!summary) return;
      summary.hidden = true;
      summary.textContent = '';
    }

    var setStatus = function(message, kind){
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status show' + (kind ? ' ' + kind : '');
    }

    form.addEventListener('submit', function(e){
      e.preventDefault();
      if (submitting) return; /* duplicate-submission guard */

      hideSummary();

      var result = validateAll();

      /* Honeypot check — if this hidden field has a value, silently drop
         as bot spam without hitting the network or alarming the (bot)
         "user" that anything was detected. */
      var hp = document.getElementById('website');
      if (hp && hp.value){
        setStatus(t('form.status_ok'), 'ok');
        form.reset();
        if (loadedAtField) loadedAtField.value = String(Date.now());
        return;
      }

      if (!result.valid){
        showSummary(t('form.status_invalid'));
        setStatus(t('form.status_invalid'), 'error');
        if (result.firstInvalid) result.firstInvalid.focus();
        return;
      }

      if (typeof navigator !== 'undefined' && navigator.onLine === false){
        setStatus(t('form.status_offline'), 'error');
        return;
      }

      submitting = true;
      if (submitBtn) submitBtn.disabled = true;
      var done = function(){
        submitting = false;
        if (submitBtn) submitBtn.disabled = false;
      };
      if (captchaInput && !captchaInput.value) setStatus(t('form.status_verifying'), '');

      ensureCaptcha()
        .then(function(){ return turnstileReady(); })
        .then(function(ok){
          if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
          send(false);
        }, function(){
          setStatus(t('form.status_captcha'), 'error');
          done();
        });

      function send(retried){
      setStatus(t('form.status_sending'), '');
      var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      var timeoutId = controller ? setTimeout(function(){ controller.abort(); }, 15000) : null;

      var formData = new FormData(form);
      formData.append('lang', currentLang === 'en' ? 'en' : 'es'); /* reply in the visitor's language */
      fetch('assets/contact-handler.php', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formData,
        signal: controller ? controller.signal : undefined
      })
        .then(function(res){
          if (timeoutId) clearTimeout(timeoutId);
          var contentType = res.headers.get('Content-Type') || '';
          var parse = contentType.indexOf('application/json') !== -1
            ? res.json().catch(function(){ return null; })
            : Promise.resolve(null);
          return parse.then(function(data){ return { res: res, data: data }; });
        })
        .then(function(result){
          var res = result.res, data = result.data;

          if (res.ok && data && data.ok){
            setStatus(t('form.status_ok'), 'ok');
            hideSummary();
            form.reset();
            questionFields().forEach(function(f){ markField(f, true); });
            if (loadedAtField) loadedAtField.value = String(Date.now());
            /* Each captcha answer works once: prepare the next one. */
            captchaJob = null;
            resetTurnstile();
            ensureCaptcha().catch(function(){});
            return;
          }

          if (res.status === 400 && data && data.error === 'captcha_failed'){
            /* Expired or already used answer (e.g. the page was open for
               hours): solve a fresh one and try once more on our own. */
            captchaJob = null;
            resetTurnstile();
            if (!retried){
              ensureCaptcha()
                .then(function(){ return turnstileReady(); })
                .then(function(ok){
                  if (!ok){ setStatus(t('form.status_turnstile'), 'error'); done(); return; }
                  send(true);
                }, function(){ setStatus(t('form.status_captcha'), 'error'); done(); });
              return 'pending';
            }
            setStatus(t('form.status_captcha'), 'error');
            return;
          }

          if (res.status === 429){
            setStatus(t('form.status_rate_limited'), 'error');
            return;
          }

          if (res.status === 422 && data && Array.isArray(data.fields) && data.fields.length){
            var firstBad = null;
            data.fields.forEach(function(name){
              var bad = fieldByName(String(name));
              if (!bad) return;
              markField(bad, false);
              if (!firstBad) firstBad = controlsOf(bad)[0];
            });
            showSummary(t('form.status_invalid'));
            setStatus(t('form.status_invalid'), 'error');
            if (firstBad) firstBad.focus();
            return;
          }

          if (res.status >= 500){
            setStatus(t('form.status_error'), 'error');
            return;
          }

          /* Any other non-success status (403 origin check, unexpected
             field rejected, malformed/non-JSON response, etc.) — generic,
             non-revealing error message. Values are preserved either way. */
          setStatus(t('form.status_error'), 'error');
        })
        .catch(function(err){
          if (timeoutId) clearTimeout(timeoutId);
          if (err && err.name === 'AbortError'){
            setStatus(t('form.status_timeout'), 'error');
          } else if (typeof navigator !== 'undefined' && navigator.onLine === false){
            setStatus(t('form.status_offline'), 'error');
          } else {
            setStatus(t('form.status_error'), 'error');
          }
        })
        .then(function(outcome){
          if (outcome !== 'pending') done();
        });
      }
    });

    questionFields().forEach(function(field){
      Array.prototype.forEach.call(controlsOf(field), function(input){
        var check = function(){ markField(field, fieldValid(field)); };
        input.addEventListener('blur', check);
        /* choices: re-check as soon as one is picked */
        if (input.type === 'radio' || input.type === 'checkbox') input.addEventListener('change', check);
      });
    });
  }
  /* ============================================================
     HOSPITAL MODULES (cms/src/HospitalModules.php) — every block is
     optional: each part below does nothing when its markup is absent.
     ============================================================ */
  var todayYmd = (function(){ var d = new Date(); return d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2); })();
  var fold = function(s){
    return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, ' ').trim();
  };

  /* ---------- Featured notice: hidden after its end date; closing hides it for this visit ---------- */
  var notice = document.getElementById('siteNotice');
  if (notice){
    var until = notice.getAttribute('data-until') || '';
    var noticeKey = 'renacer_notice_closed';
    var noticeSig = String((I18N.es['notice.text'] || notice.textContent || '').length) + ':' + until;
    var closed = false;
    try { closed = sessionStorage.getItem(noticeKey) === noticeSig; } catch (e) { /* storage blocked */ }
    if ((until && until < todayYmd) || closed) notice.hidden = true;
    var noticeClose = document.getElementById('noticeClose');
    if (noticeClose) noticeClose.addEventListener('click', function(){
      notice.hidden = true;
      try { sessionStorage.setItem(noticeKey, noticeSig); } catch (e) { /* storage blocked */ }
      var main = document.getElementById('main');
      if (main) main.focus({ preventScroll: true });
    });
  }

  /* ---------- Texts made of several pieces (package lists, service page paragraphs) ---------- */
  var applyPieces = function(){
    document.querySelectorAll('[data-split-i18n]').forEach(function(ul){
      var val = t(ul.getAttribute('data-split-i18n'));
      if (!val || val === ul.getAttribute('data-split-i18n')) return;
      var items = val.split(/[;\n]+/).map(function(s){ return s.trim(); }).filter(Boolean);
      ul.innerHTML = '';
      items.forEach(function(text){
        var li = document.createElement('li');
        li.innerHTML = '<svg aria-hidden="true"><use href="#i-check"/></svg>';
        var span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        ul.appendChild(li);
      });
    });
    document.querySelectorAll('[data-i18n-paras]').forEach(function(box){
      var val = t(box.getAttribute('data-i18n-paras'));
      if (!val || val === box.getAttribute('data-i18n-paras')) return;
      box.innerHTML = '';
      val.split(/\n\s*\n/).forEach(function(par){
        par = par.trim();
        if (!par) return;
        var p = document.createElement('p');
        p.textContent = par;
        box.appendChild(p);
      });
    });
    document.querySelectorAll('[data-stars]').forEach(function(s){ s.setAttribute('aria-label', fmt(t('reviews.stars_aria'), { n: s.getAttribute('data-stars') })); });
    document.querySelectorAll('[data-reviews-count]').forEach(function(s){ s.textContent = fmt(t('reviews.count_text'), { n: s.getAttribute('data-reviews-count') }); });
    /* «Pedir cita» by WhatsApp: a message naming the doctor and the specialty. */
    document.querySelectorAll('[data-wa-doc]').forEach(function(a){
      var k = a.getAttribute('data-wa-doc');
      a.setAttribute('href', waUrl(fmt(t('doctors.wa_msg'), { name: a.getAttribute('data-doc-name') || '', specialty: t(k + '.specialty') === k + '.specialty' ? '' : t(k + '.specialty') })));
    });
  };
  langListeners.push(applyPieces);
  if (currentLang !== 'es') applyPieces();

  /* ---------- Doctors: search by name or specialty, filter by specialty ---------- */
  var docGrid = document.getElementById('doctorsGrid');
  if (docGrid){
    var docSearch = document.getElementById('docSearch');
    var docFilter = document.getElementById('docFilter');
    var docEmpty = document.getElementById('docEmpty');
    var docCount = document.getElementById('docCount');
    var activeSpec = '';
    var docTimer = null;
    var filterDoctors = function(announce){
      var q = fold(docSearch ? docSearch.value : '');
      var shown = 0;
      Array.prototype.forEach.call(docGrid.children, function(card){
        var okSpec = !activeSpec || card.getAttribute('data-spec') === activeSpec;
        var okText = !q || q.split(' ').every(function(w){ return (card.getAttribute('data-search') || '').indexOf(w) !== -1; });
        card.hidden = !(okSpec && okText);
        if (!card.hidden){ shown++; card.classList.add('in'); }
      });
      if (docEmpty) docEmpty.hidden = shown !== 0;
      if (docCount && announce) docCount.textContent = shown === 1 ? t('doctors.result1') : fmt(t('doctors.results'), { n: shown });
    };
    if (docSearch) docSearch.addEventListener('input', function(){
      clearTimeout(docTimer);
      docTimer = setTimeout(function(){ filterDoctors(true); }, 180);
    });
    if (docFilter) docFilter.addEventListener('click', function(e){
      var b = e.target.closest ? e.target.closest('.chip-btn') : null;
      if (!b) return;
      activeSpec = b.getAttribute('data-filter') || '';
      Array.prototype.forEach.call(docFilter.querySelectorAll('.chip-btn'), function(x){ x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
      filterDoctors(true);
    });
  }

  /* ---------- Appointment: preselect specialty / doctor (cards, service pages, ?medico= / ?especialidad=) ---------- */
  var apptForm = document.getElementById('appointmentForm');
  var apptSpec = document.getElementById('apptSpecialty');
  var apptDoc = document.getElementById('apptDoctor');
  var preselectAppointment = function(doctor, spec){
    if (!apptForm) return false;
    if (apptDoc && doctor && apptDoc.querySelector('option[value="' + doctor + '"]')){
      apptDoc.value = doctor;
      spec = spec || apptDoc.options[apptDoc.selectedIndex].getAttribute('data-spec');
    }
    if (apptSpec && spec && apptSpec.querySelector('option[value="' + spec + '"]')) apptSpec.value = spec;
    return true;
  };
  if (apptForm){
    document.querySelectorAll('[data-appt-doctor],[data-appt-spec]').forEach(function(a){
      a.addEventListener('click', function(e){
        if (!preselectAppointment(a.getAttribute('data-appt-doctor'), a.getAttribute('data-appt-spec'))) return;
        e.preventDefault();
        var target = document.getElementById('citas');
        if (target) target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        setTimeout(function(){ var f = document.getElementById('apptDate'); if (f) f.focus({ preventScroll: true }); }, reduceMotion ? 0 : 450);
      });
    });
    /* Picking a doctor also picks the specialty. */
    if (apptDoc) apptDoc.addEventListener('change', function(){
      var o = apptDoc.options[apptDoc.selectedIndex];
      var s = o ? o.getAttribute('data-spec') : '';
      if (s && apptSpec && apptSpec.querySelector('option[value="' + s + '"]')) apptSpec.value = s;
    });
    try {
      var params = new URLSearchParams(window.location.search);
      if (params.get('medico') || params.get('especialidad')) preselectAppointment(params.get('medico'), params.get('especialidad'));
    } catch (e) { /* old browser */ }
  }

  /* ---------- Request forms (appointment, insurance check) ----------
     Same handler, anti-spam and captcha as the contact form; stored in
     «Prospectos» with their kind. */
  Array.prototype.forEach.call(document.querySelectorAll('form.lead-form'), function(lf){
    var stamp = lf.querySelector('[data-loaded-at]');
    if (stamp) stamp.value = String(Date.now());
    var statusEl = lf.querySelector('[data-form-status]');
    var btn = lf.querySelector('button[type="submit"]');
    var busy = false;
    var kicked = false;
    var kickOff = function(){ if (!kicked){ kicked = true; startCaptcha(); } };
    lf.addEventListener('focusin', kickOff);
    lf.addEventListener('pointerdown', kickOff);
    Array.prototype.forEach.call(lf.querySelectorAll('input[type="date"][data-future]'), function(d){ d.min = todayYmd; });
    var fields = function(){ return Array.prototype.filter.call(lf.querySelectorAll('.field'), function(f){ return f.querySelector('input[name],select[name],textarea[name]'); }); };
    var ctl = function(f){ return f.querySelector('input[name],select[name],textarea[name]'); };
    var valid = function(f){ return ctl(f).checkValidity(); };
    var mark = function(f, ok){ f.classList.toggle('invalid', !ok); ctl(f).setAttribute('aria-invalid', ok ? 'false' : 'true'); };
    var say = function(msg, kind){ if (!statusEl) return; statusEl.textContent = msg; statusEl.className = 'form-status show' + (kind ? ' ' + kind : ''); };
    fields().forEach(function(f){ ctl(f).addEventListener('blur', function(){ mark(f, valid(f)); }); ctl(f).addEventListener('change', function(){ if (f.classList.contains('invalid')) mark(f, valid(f)); }); });
    var finish = function(){ busy = false; if (btn) btn.disabled = false; };
    var post = function(retried){
      say(t('form.status_sending'), '');
      var fd = new FormData(lf);
      fd.set('captcha', captchaInput ? captchaInput.value : '');
      if (tsToken) fd.set('cf-turnstile-response', tsToken);
      fd.append('lang', currentLang === 'en' ? 'en' : 'es');
      fetch('assets/contact-handler.php', { method: 'POST', headers: { 'Accept': 'application/json' }, body: fd })
        .then(function(res){ return res.json().catch(function(){ return null; }).then(function(data){ return { res: res, data: data }; }); })
        .then(function(r){
          if (r.res.ok && r.data && r.data.ok){
            say(t(lf.getAttribute('data-ok') || 'form.status_ok'), 'ok');
            lf.reset();
            fields().forEach(function(f){ mark(f, true); });
            if (stamp) stamp.value = String(Date.now());
            captchaJob = null; resetTurnstile(); ensureCaptcha().catch(function(){});
            finish();
            return;
          }
          if (r.res.status === 400 && r.data && r.data.error === 'captcha_failed' && !retried){
            captchaJob = null; resetTurnstile();
            ensureCaptcha().then(turnstileReady).then(function(ok){ if (ok) post(true); else { say(t('form.status_turnstile'), 'error'); finish(); } }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
            return;
          }
          if (r.res.status === 422 && r.data && Array.isArray(r.data.fields)){
            var first = null;
            r.data.fields.forEach(function(name){
              var c = lf.querySelector('[name="' + String(name).replace(/[^a-z_]/g, '') + '"]');
              var f = c && c.closest('.field');
              if (f){ mark(f, false); if (!first) first = c; }
            });
            say(t('form.status_invalid'), 'error');
            if (first) first.focus();
          } else if (r.res.status === 429){
            say(t('form.status_rate_limited'), 'error');
          } else {
            say(t('form.status_error'), 'error');
          }
          finish();
        })
        .catch(function(){ say(t(navigator.onLine === false ? 'form.status_offline' : 'form.status_error'), 'error'); finish(); });
    };
    lf.addEventListener('submit', function(e){
      e.preventDefault();
      if (busy) return;
      var hp = lf.querySelector('input[name="website"]');
      if (hp && hp.value){ say(t(lf.getAttribute('data-ok') || 'form.status_ok'), 'ok'); lf.reset(); return; }
      var first = null;
      fields().forEach(function(f){ var ok = valid(f); mark(f, ok); if (!ok && !first) first = ctl(f); });
      if (first){ say(t('form.status_invalid'), 'error'); first.focus(); return; }
      busy = true;
      if (btn) btn.disabled = true;
      kickOff();
      if (captchaInput && !captchaInput.value) say(t('form.status_verifying'), '');
      ensureCaptcha().then(turnstileReady).then(function(ok){
        if (!ok){ say(t('form.status_turnstile'), 'error'); finish(); return; }
        post(false);
      }, function(){ say(t('form.status_captcha'), 'error'); finish(); });
    });
  });
})();
