import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Trophy } from 'lucide-react';
import TopBar from '@/components/TopBar';
import { useGame } from '@/context/GameProvider';
import { WORLDS } from '@/data/worlds';

export default function Ranking() {
  const { t, tx, progress } = useGame();

  const rows = WORLDS.flatMap((world) =>
    world.missions
      .filter((mission) => progress.completed[mission.id])
      .map((mission) => ({
        world,
        mission,
        record: progress.completed[mission.id],
      })),
  ).sort((a, b) => b.record.score / b.record.max - a.record.score / a.record.max);

  return (
    <div className="min-h-screen text-white">
      <TopBar />
      <div className="mx-auto max-w-3xl px-5 py-10 sm:px-6">
        <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{t('ranking_title')}</h1>
        <p className="mt-2 text-[13px] leading-relaxed text-white/45">{t('ranking_desc')}</p>

        {rows.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <Trophy className="mx-auto h-8 w-8 text-white/25" />
            <p className="mt-3 text-[13px] text-white/45">{t('no_scores')}</p>
            <Link
              to="/world/w1"
              className="mt-5 inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-2.5 font-display text-[12px] font-bold uppercase tracking-wider text-[#0a0a1a]"
            >
              {t('play')}
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-2">
            {rows.map(({ world, mission, record }, index) => (
              <div
                key={mission.id}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3"
              >
                <span className="w-6 shrink-0 font-display text-sm font-bold text-white/30">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span
                  className="h-9 w-1 shrink-0 rounded-full"
                  style={{ background: `linear-gradient(180deg, ${world.accent}, ${world.accent2})` }}
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-[13.5px] font-bold text-white">{tx(mission.title)}</p>
                  <p className="truncate text-[11px] text-white/35">{tx(world.title)}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-display text-[13px] font-bold text-cyan-300">
                    {record.score}/{record.max}
                  </p>
                  <p className="text-[10.5px] uppercase tracking-[0.14em] text-white/30">
                    {Math.round((record.score / record.max) * 100)}%
                  </p>
                </div>
                {record.stars === 3 && <Award className="h-4 w-4 shrink-0 text-amber-300" />}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}