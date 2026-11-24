import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Lock } from 'lucide-react';
import TopBar from '@/components/TopBar';
import { useGame } from '@/context/GameProvider';
import { findWorld } from '@/data/worlds';
import MissionPlayer from '@/components/mission/MissionPlayer';

export default function Mission() {
  const { worldId, missionId } = useParams();
  const world = findWorld(worldId);
  const mission = world ? world.missions.find((item) => item.id === missionId) : null;
  const missionIndex = world && mission ? world.missions.findIndex((item) => item.id === mission.id) : -1;
  const { t, isMissionUnlocked } = useGame();
  const missing = !world || !mission;

  useEffect(() => {
    if (!missing) return undefined;
    const meta = document.createElement('meta');
    meta.name = 'prerender-status-code';
    meta.content = '404';
    document.head.appendChild(meta);
    return () => document.head.removeChild(meta);
  }, [missing]);

  if (missing) {
    return (
      <div className="min-h-screen text-white">
        <TopBar />
        <div className="mx-auto max-w-xl px-5 py-24 text-center">
          <p className="font-display text-2xl font-extrabold">404</p>
          <Link
            to="/"
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('nav_map')}
          </Link>
        </div>
      </div>
    );
  }

  if (!isMissionUnlocked(world, missionIndex)) {
    return (
      <div className="min-h-screen text-white">
        <TopBar />
        <div className="mx-auto max-w-xl px-5 py-24 text-center">
          <Lock className="mx-auto h-8 w-8 text-white/30" />
          <p className="mt-4 font-display text-lg font-bold">{t('locked')}</p>
          <p className="mt-2 text-[13px] leading-relaxed text-white/50">{t('mission_locked_hint')}</p>
          <Link
            to={`/world/${world.id}`}
            className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80"
          >
            <ArrowLeft className="h-4 w-4" />
            {t('back_map')}
          </Link>
        </div>
      </div>
    );
  }

  const nextMission = world.missions[missionIndex + 1] || null;

  return <MissionPlayer world={world} mission={mission} nextMission={nextMission} />;
}