export const LANGS = [
  { code: 'es', short: 'ES', label: 'Castellano' },
  { code: 'eu', short: 'EU', label: 'Euskara' },
];

const strings = {
  // Navegación
  nav_map: { es: 'Mapa', eu: 'Mapa' },
  nav_profile: { es: 'Perfil', eu: 'Profila' },
  nav_medals: { es: 'Medallas', eu: 'Dominak' },
  nav_ranking: { es: 'Marcas', eu: 'Markak' },
  nav_settings: { es: 'Ajustes', eu: 'Ezarpenak' },

  // Inicio
  play: { es: 'Jugar', eu: 'Jolastu' },
  continue: { es: 'Continuar aventura', eu: 'Jarraitu abentura' },
  hero_badge: { es: 'Aventura educativa · 5 mundos', eu: 'Abentura hezigarria · 5 mundu' },
  hero_sub: { es: 'La aventura digital', eu: 'Abentura digitala' },
  hero_desc: {
    es: 'Explora islas flotantes, resuelve misiones y aprende a moverte por Internet con seguridad. Cada mundo te enseña algo nuevo sobre cómo protegerte y cuidar de los demás.',
    eu: 'Arakatu uharte flotatzaileak, ebatzi misioak eta ikasi Interneten seguru ibiltzen. Mundu bakoitzak zerbait berria erakusten dizu zeure burua babesteari eta besteak zaintzeari buruz.',
  },
  map_title: { es: 'Mapa de los cinco mundos', eu: 'Bost munduen mapa' },
  map_desc: {
    es: 'Cada isla esconde un reto distinto. Elige un mundo desbloqueado y comienza la misión.',
    eu: 'Uharteen bakoitzak erronka ezberdina gordetzen du. Aukeratu desblokeatutako mundu bat eta hasi misioa.',
  },
  quick_links: { es: 'Tu espacio', eu: 'Zure txokoa' },

  // Mundos y misiones
  world_label: { es: 'Mundo', eu: 'Mundua' },
  worlds: { es: 'mundos', eu: 'mundu' },
  mission: { es: 'misión', eu: 'misioa' },
  missions: { es: 'misiones', eu: 'misioak' },
  locked: { es: 'Bloqueado', eu: 'Blokeatuta' },
  available: { es: 'Disponible', eu: 'Erabilgarri' },
  completed: { es: 'Completado', eu: 'Osatuta' },
  world_locked_hint: {
    es: 'Completa 2 misiones del mundo anterior para abrir este mundo.',
    eu: 'Osatu aurreko munduko 2 misio mundu hau irekitzeko.',
  },
  mission_locked_hint: {
    es: 'Termina la misión anterior para desbloquear esta.',
    eu: 'Amaitu aurreko misioa hau desblokeatzeko.',
  },
  start_mission: { es: 'Empezar misión', eu: 'Hasi misioa' },
  replay: { es: 'Repetir misión', eu: 'Errepikatu misioa' },
  missions_done: { es: 'misiones completadas', eu: 'misio osatuta' },
  guide: { es: 'Guía del mundo', eu: 'Munduaren gida' },
  world_missions: { es: 'Misiones del mundo', eu: 'Munduko misioak' },
  back_map: { es: 'Volver al mapa', eu: 'Itzuli mapara' },
  world_complete: { es: '¡Mundo completado!', eu: 'Mundua osatuta!' },

  // Juego
  mission_intro: { es: 'Introducción', eu: 'Sarrera' },
  begin: { es: 'Comenzar', eu: 'Hasi' },
  next: { es: 'Siguiente', eu: 'Hurrengoa' },
  back: { es: 'Atrás', eu: 'Atzera' },
  finish: { es: 'Terminar', eu: 'Amaitu' },
  check: { es: 'Comprobar', eu: 'Egiaztatu' },
  correct: { es: 'Decisión segura', eu: 'Erabaki segurua' },
  incorrect: { es: 'Decisión arriesgada', eu: 'Erabaki arriskutsua' },
  partially: { es: 'Casi lo tienes', eu: 'Ia lortu duzu' },
  explanation: { es: 'Por qué', eu: 'Zergatik' },
  points: { es: 'puntos', eu: 'puntu' },
  score: { es: 'Puntuación', eu: 'Puntuazioa' },
  time_left: { es: 'Tiempo', eu: 'Denbora' },
  time_up: { es: '¡Se acabó el tiempo!', eu: 'Denbora amaitu da!' },
  true_label: { es: 'Verdadero', eu: 'Egia' },
  false_label: { es: 'Falso', eu: 'Gezurra' },
  share_label: { es: 'Compartir', eu: 'Partekatu' },
  dont_share_label: { es: 'No compartir', eu: 'Ez partekatu' },
  select_suspicious: { es: 'Marca todo lo que sea sospechoso', eu: 'Markatu susmagarria den guztia' },
  select_order: { es: 'Pulsa los pasos en el orden correcto', eu: 'Sakatu urratsak ordena zuzenan' },
  type_password: { es: 'Escribe una contraseña segura', eu: 'Idatzi pasahitz segurua' },
  mission_complete: { es: 'Misión completada', eu: 'Misioa osatuta' },
  lesson: { es: 'Lo que has aprendido', eu: 'Ikasi duzuna' },
  earned_xp: { es: 'XP ganada', eu: 'Irabazitako XP' },
  earned_coins: { es: 'Monedas', eu: 'Txanponak' },
  new_badges: { es: 'Nuevas insignias', eu: 'Txapa berriak' },
  perfect: { es: 'Puntuación perfecta', eu: 'Puntuazio bikaina' },
  play_again: { es: 'Jugar otra vez', eu: 'Jolastu berriro' },
  continue_world: { es: 'Seguir en este mundo', eu: 'Jarraitu mundu honetan' },
  exit: { es: 'Salir de la misión', eu: 'Irten misiotik' },

  // Perfil
  profile_title: { es: 'Tu perfil', eu: 'Zure profila' },
  alias: { es: 'Alias', eu: 'Ezizena' },
  alias_hint: {
    es: 'Usa un apodo, nunca tu nombre completo ni datos personales.',
    eu: 'Erabili ezizen bat, inoiz ez zure izen osoa edo datu pertsonalak.',
  },
  avatar: { es: 'Avatar', eu: 'Avatarra' },
  save: { es: 'Guardar', eu: 'Gorde' },
  saved: { es: 'Guardado', eu: 'Gordeta' },
  level: { es: 'Nivel', eu: 'Maila' },
  xp: { es: 'XP', eu: 'XP' },
  coins: { es: 'Monedas', eu: 'Txanponak' },
  worlds_unlocked: { es: 'Mundos abiertos', eu: 'Mundu irekiak' },
  history: { es: 'Historial de partidas', eu: 'Partiden historia' },
  no_history: { es: 'Todavía no has jugado ninguna misión.', eu: 'Oraindik ez duzu misiorik jokatu.' },
  guest: { es: 'Jugador', eu: 'Jokalaria' },
  progress: { es: 'Progreso', eu: 'Aurrerapena' },

  // Medallas
  medals_title: { es: 'Colección de insignias', eu: 'Txapen bilduma' },
  medals_desc: {
    es: 'Supera misiones y completa mundos para desbloquear cada insignia.',
    eu: 'Gainditu misioak eta osatu munduak txapa bakoitza desblokeatzeko.',
  },
  medals_earned: { es: 'conseguidas', eu: 'lortuta' },
  no_badges: { es: 'Todavía no has conseguido insignias', eu: 'Oraindik ez duzu txaparik lortu' },

  // Ranking
  ranking_title: { es: 'Tus mejores marcas', eu: 'Zure marka onenak' },
  ranking_desc: {
    es: 'Estas son tus puntuaciones más altas en cada misión, guardadas en este dispositivo.',
    eu: 'Hauek dira misio bakoitzean lortu dituzun puntuazio altuenak, gailu honetan gordeta.',
  },
  no_scores: { es: 'Aún no hay marcas. ¡Empieza una misión!', eu: 'Oraindik ez dago markarik. Hasi misio bat!' },
  best_score: { es: 'Mejor marca', eu: 'Marka onena' },

  // Ajustes
  settings_title: { es: 'Ajustes', eu: 'Ezarpenak' },
  language: { es: 'Idioma', eu: 'Hizkuntza' },
  language_desc: {
    es: 'El idioma cambia toda la aplicación y se recuerda en tu próxima visita.',
    eu: 'Hizkuntzak aplikazio osoa aldatzen du eta zure hurrengo bisitan gogoratuko da.',
  },
  progress_note: {
    es: 'Tu progreso se guarda automáticamente en este dispositivo.',
    eu: 'Zure aurrerapena automatikoki gordetzen da gailu honetan.',
  },
  reset_progress: { es: 'Borrar todo el progreso', eu: 'Ezabatu aurrerapen osoa' },
  reset_warning: {
    es: 'Se borrarán el nivel, las monedas, las insignias y el historial. Esta acción no se puede deshacer.',
    eu: 'Maila, txanponak, txapak eta historia ezabatuko dira. Ekintza hau ezin da desegin.',
  },
  cancel: { es: 'Cancelar', eu: 'Utzi' },
  confirm: { es: 'Sí, borrar', eu: 'Bai, ezabatu' },

  // Sonido
  sound_mute: { es: 'Silenciar música', eu: 'Isildu musika' },
  sound_enable: { es: 'Activar música', eu: 'Aktibatu musika' },

  // Diploma
  diploma_title: { es: 'Diploma', eu: 'Diploma' },
  diploma_eyebrow: { es: 'Certificado de finalización', eu: 'Amaitzeko ziurtagiria' },
  diploma_intro: { es: 'Se otorga a', eu: 'Honi ematen zaio' },
  diploma_body: {
    es: 'por haber completado las {missions} misiones de CYBERBIDE y demostrar sus conocimientos de ciberseguridad, privacidad e inteligencia artificial.',
    eu: 'CYBERBIDEko {missions} misioak osatu eta zibersegurtasunari, pribatutasunari eta adimen artifizialari buruzko ezagutzak erakutsi dituelako.',
  },
  diploma_locked_title: { es: 'Tu diploma te espera', eu: 'Zure diploma zain duzu' },
  diploma_locked_hint: {
    es: 'Completa todas las misiones del curso para conseguir tu diploma, listo para descargar o imprimir.',
    eu: 'Osatu ikastaroko misio guztiak zure diploma lortzeko, deskargatzeko edo inprimatzeko prest.',
  },
  diploma_unlocked: { es: '¡Curso completado!', eu: 'Ikastaroa osatuta!' },
  diploma_unlocked_desc: {
    es: 'Tu diploma ya está listo: descárgalo en PDF o imprímelo.',
    eu: 'Zure diploma prest dago: deskargatu PDFan edo inprimatu.',
  },
  diploma_view: { es: 'Ver mi diploma', eu: 'Ikusi nire diploma' },
  diploma_download: { es: 'Descargar PDF', eu: 'Deskargatu PDFa' },
  diploma_print: { es: 'Imprimir', eu: 'Inprimatu' },
  diploma_preparing: { es: 'Preparando…', eu: 'Prestatzen…' },
  diploma_error: {
    es: 'No se ha podido generar el PDF. Inténtalo de nuevo.',
    eu: 'Ezin izan da PDFa sortu. Saiatu berriro.',
  },
  diploma_date: { es: 'Fecha', eu: 'Data' },
  diploma_awarded_by: { es: 'Equipo CYBERBIDE', eu: 'CYBERBIDE taldea' },
  diploma_seal: { es: 'Curso completado', eu: 'Ikastaroa osatuta' },
  diploma_xp: { es: 'XP total', eu: 'XP guztira' },
  diploma_badges: { es: 'Insignias', eu: 'Txapak' },
  diploma_level: { es: 'Nivel', eu: 'Maila' },
  diploma_missions: { es: 'misiones', eu: 'misio' },
};

export function t(lang, key) {
  const entry = strings[key];
  if (!entry) return key;
  return entry[lang] || entry.es;
}

export function tx(lang, value) {
  if (value == null) return '';
  if (typeof value === 'string') return value;
  return value[lang] || value.es || '';
}