import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { t as translate, tx as translateObj } from '@/lib/i18n';
import {
  earnedBadges,
  isMissionUnlocked as checkMission,
  isWorldUnlocked as checkWorld,
  levelInfo,
  loadLang,
  loadProgress,
  saveLang,
  saveProgress,
  starsFor,
  worldDone,
} from '@/lib/game';
import { WORLDS } from '@/data/worlds';

const GameContext = createContext(null);

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
};

export const GameProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => loadLang());
  const [progress, setProgress] = useState(() => loadProgress());

  const setLang = useCallback((next) => {
    setLangState(next);
    saveLang(next);
  }, []);

  const t = useCallback((key) => translate(lang, key), [lang]);
  const tx = useCallback((value) => translateObj(lang, value), [lang]);

  const persist = useCallback((next) => {
    setProgress(next);
    saveProgress(next);
  }, []);

  const setAlias = useCallback((alias) => {
    setProgress((prev) => {
      const next = { ...prev, alias };
      saveProgress(next);
      return next;
    });
  }, []);

  const setAvatar = useCallback((avatar) => {
    setProgress((prev) => {
      const next = { ...prev, avatar };
      saveProgress(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    persist({ ...loadProgress(), alias: progress.alias, avatar: progress.avatar, xp: 0, coins: 0, completed: {}, badges: [], history: [], lastWorld: 'w1', diplomaDate: null });
  }, [persist, progress.alias, progress.avatar]);

  const finishMission = useCallback(
    ({ worldId, missionId, score, max }) => {
      const previous = progress.completed[missionId];
      const best = previous ? Math.max(previous.score, score) : score;
      const xpGain = Math.max(0, score - (previous ? previous.score : 0));
      const coinGain = Math.round(xpGain / 3);

      const next = {
        ...progress,
        xp: progress.xp + xpGain,
        coins: progress.coins + coinGain,
        lastWorld: worldId,
        completed: {
          ...progress.completed,
          [missionId]: {
            score: best,
            max,
            stars: starsFor(best, max),
            plays: (previous?.plays || 0) + 1,
            date: new Date().toISOString(),
          },
        },
        history: [
          { missionId, worldId, score, max, date: new Date().toISOString() },
          ...progress.history,
        ].slice(0, 80),
      };

      const earned = earnedBadges(next, WORLDS);
      const newBadges = earned.filter((id) => !progress.badges.includes(id));
      next.badges = [...progress.badges, ...newBadges];

      const courseComplete = WORLDS.every((world) => worldDone(next, world) === world.missions.length);
      if (courseComplete && !next.diplomaDate) next.diplomaDate = new Date().toISOString();

      persist(next);
      return { xpGain, coinGain, newBadges, best };
    },
    [persist, progress],
  );

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const level = useMemo(() => levelInfo(progress.xp), [progress.xp]);

  const completedCount = useMemo(
    () => WORLDS.reduce((sum, world) => sum + worldDone(progress, world), 0),
    [progress],
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t,
      tx,
      progress,
      level,
      completedCount,
      finishMission,
      resetProgress,
      setAlias,
      setAvatar,
      isWorldUnlocked: (index) => checkWorld(progress, WORLDS, index),
      isMissionUnlocked: (world, missionIndex) => checkMission(progress, world, missionIndex),
      worldProgress: (world) => ({ done: worldDone(progress, world), total: world.missions.length }),
    }),
    [lang, setLang, t, tx, progress, level, completedCount, finishMission, resetProgress, setAlias, setAvatar],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};