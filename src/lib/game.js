export const STORAGE_KEY = 'cyberland.progress.v1';
export const LANG_KEY = 'cyberland.lang.v1';
export const XP_PER_LEVEL = 300;

export const DEFAULT_PROGRESS = {
  alias: '',
  avatar: 'nara',
  xp: 0,
  coins: 0,
  completed: {},
  badges: [],
  history: [],
  lastWorld: 'w1',
  diplomaDate: null,
};

export const AVATARS = [
  { id: 'nara', color: '#FF6B9A' },
  { id: 'kimo', color: '#FFB454' },
  { id: 'sira', color: '#3ED9B0' },
  { id: 'zeto', color: '#9B8CFF' },
  { id: 'aura', color: '#5AC8FF' },
];

export const BADGES = [
  {
    id: 'first-steps',
    icon: 'Footprints',
    color: '#3ED9B0',
    name: { es: 'Primer paso', eu: 'Lehen urratsa' },
    desc: { es: 'Completa tu primera misión', eu: 'Osatu zure lehen misioa' },
  },
  {
    id: 'flawless',
    icon: 'Sparkles',
    color: '#FFC85C',
    name: { es: 'Sin un fallo', eu: 'Akatsik gabe' },
    desc: { es: 'Consigue una puntuación perfecta en una misión', eu: 'Lortu puntuazio bikaina misio batean' },
  },
  {
    id: 'medal-w1',
    icon: 'HeartHandshake',
    color: '#FF6B9A',
    name: { es: 'Medalla del Respeto', eu: 'Errespetuaren domina' },
    desc: { es: 'Completa todas las misiones del Reino del Respeto', eu: 'Osatu Errespetuaren Erresumako misio guztiak' },
  },
  {
    id: 'medal-w2',
    icon: 'Compass',
    color: '#FFB454',
    name: { es: 'Medalla de la Verdad', eu: 'Egiaren domina' },
    desc: { es: 'Completa todas las misiones del Río de la Verdad', eu: 'Osatu Egiaren Ibaiko misio guztiak' },
  },
  {
    id: 'medal-w3',
    icon: 'Lock',
    color: '#3ED9B0',
    name: { es: 'Medalla de la Privacidad', eu: 'Pribatutasunaren domina' },
    desc: { es: 'Completa todas las misiones de la Montaña de la Privacidad', eu: 'Osatu Pribatutasunaren Mendiko misio guztiak' },
  },
  {
    id: 'medal-w4',
    icon: 'KeyRound',
    color: '#9B8CFF',
    name: { es: 'Medalla de la Seguridad', eu: 'Segurtasunaren domina' },
    desc: { es: 'Completa todas las misiones de la Torre de la Seguridad', eu: 'Osatu Segurtasunaren Dorreko misio guztiak' },
  },
  {
    id: 'medal-w5',
    icon: 'BrainCircuit',
    color: '#5AC8FF',
    name: { es: 'Medalla de la IA', eu: 'AAaren domina' },
    desc: { es: 'Completa todas las misiones de la Ciudad de la IA', eu: 'Osatu AAaren Hiriko misio guztiak' },
  },
  {
    id: 'ten-missions',
    icon: 'ShieldCheck',
    color: '#8FE3FF',
    name: { es: 'Explorador experto', eu: 'Esploratzaile aditua' },
    desc: { es: 'Completa 10 misiones en total', eu: 'Osatu 10 misio guztira' },
  },
  {
    id: 'all-worlds',
    icon: 'Crown',
    color: '#FFD166',
    name: { es: 'Guardián de Cyberbide', eu: 'Cyberbideko zaindaria' },
    desc: { es: 'Completa los cinco mundos', eu: 'Osatu bost munduak' },
  },
  {
    id: 'rich',
    icon: 'Coins',
    color: '#FFC85C',
    name: { es: 'Alforja llena', eu: 'Zorrotada betea' },
    desc: { es: 'Reúne 1000 monedas', eu: 'Bildu 1000 txanpon' },
  },
];

export function badgeById(id) {
  return BADGES.find((b) => b.id === id);
}

export function loadLang() {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    return saved === 'eu' ? 'eu' : 'es';
  } catch {
    return 'es';
  }
}

export function saveLang(lang) {
  try {
    localStorage.setItem(LANG_KEY, lang);
  } catch {
    /* storage not available */
  }
}

export function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...DEFAULT_PROGRESS };
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      completed: parsed.completed || {},
      badges: parsed.badges || [],
      history: parsed.history || [],
    };
  } catch {
    return { ...DEFAULT_PROGRESS };
  }
}

export function saveProgress(progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch {
    /* storage not available */
  }
}

export function levelInfo(xp) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const current = xp % XP_PER_LEVEL;
  return { level, current, needed: XP_PER_LEVEL, percent: Math.round((current / XP_PER_LEVEL) * 100) };
}

export function starsFor(score, max) {
  if (!max) return 1;
  const ratio = score / max;
  if (ratio >= 0.9) return 3;
  if (ratio >= 0.7) return 2;
  return 1;
}

export function worldDone(progress, world) {
  if (!world || !world.missions) return 0;
  return world.missions.filter((m) => progress.completed[m.id]).length;
}

export function isWorldUnlocked(progress, worlds, index) {
  if (index === 0) return true;
  const previous = worlds[index - 1];
  return worldDone(progress, previous) >= 2;
}

export function isMissionUnlocked(progress, world, missionIndex) {
  if (missionIndex === 0) return true;
  const previous = world.missions[missionIndex - 1];
  return Boolean(progress.completed[previous.id]);
}

export function earnedBadges(progress, worlds) {
  const ids = [];
  const completedIds = Object.keys(progress.completed);
  if (completedIds.length >= 1) ids.push('first-steps');
  if (completedIds.some((id) => {
    const record = progress.completed[id];
    return record && record.score >= record.max;
  })) ids.push('flawless');
  if (completedIds.length >= 10) ids.push('ten-missions');
  worlds.forEach((world) => {
    const total = world.missions.length;
    if (total > 0 && worldDone(progress, world) === total) ids.push(`medal-${world.id}`);
  });
  if (ids.filter((id) => id.startsWith('medal-')).length === 5) ids.push('all-worlds');
  if (progress.coins >= 1000) ids.push('rich');
  return ids;
}