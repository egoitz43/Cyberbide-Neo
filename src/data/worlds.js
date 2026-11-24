import { missions as w1 } from './missions/world1';
import { missions as w2 } from './missions/world2';
import { missions as w3 } from './missions/world3';
import { missions as w4 } from './missions/world4';
import { missions as w5 } from './missions/world5';

export const HERO_IMAGE = 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/653fdb1f2_generated_image.png';

export const WORLDS = [
  {
    id: 'w1',
    index: 1,
    accent: '#FF6B9A',
    accent2: '#B56BFF',
    portrait: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/2e07d1754_generated_image.png',
    island: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/e7c9af27c_generated_image.png',
    title: { es: 'Reino del Respeto', eu: 'Errespetuaren Erresuma' },
    theme: { es: 'Convivencia digital y ciberacoso', eu: 'Elkarbizitza digitala eta ziberjazarpena' },
    description: {
      es: 'Un reino de puentes de luz donde cada palabra deja huella. Aquí aprenderás a frenar el acoso en línea y a tender la mano a quien lo sufre.',
      eu: 'Argizko zubien erreinua, non hitz bakoitzak arrastoa uzten duen. Hemen ikasiko duzu lineako jazarpena gelditzen eta pairatzen duenari eskua luzatzen.',
    },
    character: {
      name: 'Nara',
      role: { es: 'Guardiana del Respeto', eu: 'Errespetuaren zaindaria' },
    },
    missions: w1,
  },
  {
    id: 'w2',
    index: 2,
    accent: '#FFB454',
    accent2: '#FF7A59',
    portrait: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/4a6b9330c_generated_image.png',
    island: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/15addab7b_generated_image.png',
    title: { es: 'Río de la Verdad', eu: 'Egiaren Ibaia' },
    theme: { es: 'Noticias falsas y desinformación', eu: 'Albiste faltsuak eta desinformazioa' },
    description: {
      es: 'Sus aguas muestran lo que es real y lo que está inventado. Aprenderás a comprobar fuentes antes de creer o compartir algo.',
      eu: 'Haren urak erakusten du zer den erreala eta zer asmatua. Ikasiko duzu iturriak egiaztatzen zerbait sinetsi edo partekatu aurretik.',
    },
    character: {
      name: 'Kimo',
      role: { es: 'Vigía de la Verdad', eu: 'Egiaren zaintzailea' },
    },
    missions: w2,
  },
  {
    id: 'w3',
    index: 3,
    accent: '#3ED9B0',
    accent2: '#4FB8FF',
    portrait: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/590383deb_generated_image.png',
    island: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/ff2f2cdb9_generated_image.png',
    title: { es: 'Montaña de la Privacidad', eu: 'Pribatutasunaren Mendia' },
    theme: { es: 'Datos personales y huella digital', eu: 'Datu pertsonalak eta aztarna digitala' },
    description: {
      es: 'Cuanto más alto subes, menos se ve de ti desde fuera. Aquí descubrirás qué datos conviene guardar bajo llave.',
      eu: 'Zenbat eta gorago igo, orduan eta gutxiago ikusten da zutaz kanpotik. Hemen deskubrituko duzu zer datu komeni den giltzapean gordetzea.',
    },
    character: {
      name: 'Sira',
      role: { es: 'Guardiana del Secreto', eu: 'Sekretuaren zaindaria' },
    },
    missions: w3,
  },
  {
    id: 'w4',
    index: 4,
    accent: '#9B8CFF',
    accent2: '#FF6BD6',
    portrait: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/d0148ea2b_generated_image.png',
    island: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/5510a1dd8_generated_image.png',
    title: { es: 'Torre de la Seguridad', eu: 'Segurtasunaren Dorrea' },
    theme: { es: 'Contraseñas, phishing y cuentas', eu: 'Pasahitzak, phishinga eta kontuak' },
    description: {
      es: 'La torre tiene muchas puertas y cada una necesita su propia llave. Aprenderás a construir llaves imposibles de adivinar.',
      eu: 'Dorrea hainbat atez osatuta dago eta bakoitzak bere giltza behar du. Asmatzeko ezinezko giltzak eraikitzen ikasiko duzu.',
    },
    character: {
      name: 'Zeto',
      role: { es: 'Herrero de las Llaves', eu: 'Giltzen errementaria' },
    },
    missions: w4,
  },
  {
    id: 'w5',
    index: 5,
    accent: '#5AC8FF',
    accent2: '#A175FF',
    portrait: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/85fadf2b2_generated_image.png',
    island: 'https://media.base44.com/images/public/6af5a710ef1d70f0cdb877ea/28108dd32_generated_image.png',
    title: { es: 'Ciudad de la IA', eu: 'AAaren Hiria' },
    theme: { es: 'Inteligencia artificial y deepfakes', eu: 'Adimen artifiziala eta deepfakeak' },
    description: {
      es: 'Una ciudad que aprende de ti mientras tú aprendes de ella. Descubrirás cómo distinguir lo real de lo fabricado por una máquina.',
      eu: 'Zutaz ikasten duen hiria, zu hartaz ikasten duzun bitartean. Deskubrituko duzu nola bereizi erreala makinak sortutakoa.',
    },
    character: {
      name: 'Aura',
      role: { es: 'Guía de la Ciudad Luminosa', eu: 'Hiri Argitsuaren gida' },
    },
    missions: w5,
  },
];

export function findWorld(worldId) {
  return WORLDS.find((world) => world.id === worldId);
}

export function findMission(missionId) {
  for (const world of WORLDS) {
    const mission = world.missions.find((item) => item.id === missionId);
    if (mission) return { world, mission };
  }
  return null;
}

export function missionMax(mission) {
  return mission.steps.reduce((sum, step) => sum + (step.points || 100), 0);
}
