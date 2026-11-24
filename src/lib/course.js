import { WORLDS } from '@/data/worlds';
import { worldDone } from '@/lib/game';

export const COURSE_TOTALS = {
  worlds: WORLDS.length,
  missions: WORLDS.reduce((sum, world) => sum + world.missions.length, 0),
};

export const isCourseComplete = (progress) =>
  WORLDS.every((world) => worldDone(progress, world) === world.missions.length);