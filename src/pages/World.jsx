import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Lock, Play, Star } from 'lucide-react';
import TopBar from '@/components/TopBar';
import { Image } from '@/components/ui/image';
import { useGame } from '@/context/GameProvider';
import { findWorld } from '@/data/worlds';

export default function World() {
  const { worldId } = useParams();
  const world = findWorld(worldId);
  const { t, tx, progress, isWorldUnlocked, isMissionUnlocked, worldProgress } = useGame();

  if (!world) {
    return (
      <div className="min-h-screen text-white">
        <TopBar />
        <div className="mx-auto max-w-xl px-5 py-24 text-center">
          <p className="font-display text-lg font-bold">404</p>
          <p className="mt-2 text-sm text-white/50">{t('back_map')}</p>
          <Link
            to="/"
            className="mt-6 inline-flex rounded-xl border border-white/15 px-5 py-2.5 text-sm font-semibold text-white/80"
          >
            {t('nav_map')}
          </Link>
        </div>
      </div>
    );
  }

  const index = world.index - 1;
  const unlocked = isWorldUnlocked(index);
  const { done, total } = worldProgress(world);
  const percent = total ? Math.round((done / total) * 100) : 0;

  return (
    <div className="min-h-screen text-white">
      <TopBar />

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full opacity-25 blur-3xl"
          style={{ background: world.accent }}
        />
        <div className="relative mx-auto max-w-4xl px-5 pb-10 pt-8 sm:px-6">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {t('back_map')}
          </Link>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div
              className="relative h-32 w-32 shrink-0 overflow-hidden rounded-[26px] border"
              style={{ borderColor: `${world.accent}55`, boxShadow: `0 26px 60px -30px ${world.accent}` }}
            >
              <Image
                src={world.portrait}
                alt={world.character.name}
                className={`h-full w-full object-cover ${unlocked ? '' : 'grayscale'}`}
                fittingType="fill"
              />
            </div>

            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: world.accent }}>
                {t('world_label')} {String(world.index).padStart(2, '0')}
              </p>
              <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight sm:text-4xl">{tx(world.title)}</h1>
              <p className="mt-2 text-[13.5px] text-white/55">{tx(world.theme)}</p>
              <p className="mt-3 max-w-xl text-[13px] leading-relaxed text-white/45">{tx(world.description)}</p>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <div className="min-w-[160px] flex-1">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{
                        width: `${Math.max(percent, 3)}%`,
                        background: `linear-gradient(90deg, ${world.accent}, ${world.accent2})`,
                      }}
                    />
                  </div>
                  <p className="mt-1.5 text-[11px] uppercase tracking-widest text-white/35">
                    {done}/{total} {t('missions')}
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
                  <span className="grid h-6 w-6 place-items-center rounded-full text-[11px] font-bold" style={{ background: `${world.accent}25`, color: world.accent }}>
                    {world.character.name.charAt(0)}
                  </span>
                  <span className="text-[12px] text-white/70">{tx(world.character.role)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 pb-24 sm:px-6">
        {!unlocked ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <Lock className="mx-auto h-7 w-7 text-white/30" />
            <p className="mt-3 font-display text-base font-bold text-white">{t('locked')}</p>
            <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-white/50">{t('world_locked_hint')}</p>
          </div>
        ) : (
          <>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-white">{t('world_missions')}</h2>
              {percent === 100 && (
                <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-3 py-1 text-[11px] font-semibold text-amber-200">
                  {t('world_complete')}
                </span>
              )}
            </div>

            <div className="space-y-3">
              {world.missions.map((mission, missionIndex) => {
                const missionUnlocked = isMissionUnlocked(world, missionIndex);
                const record = progress.completed[mission.id];
                const inner = (
                  <>
                    <div
                      className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl font-display text-sm font-extrabold"
                      style={{
                        background: record ? `${world.accent}22` : 'rgba(255,255,255,0.05)',
                        color: record ? world.accent : 'rgba(255,255,255,0.4)',
                      }}
                    >
                      {record ? <Check className="h-5 w-5" /> : missionIndex + 1}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-display text-[14.5px] font-bold text-white">{tx(mission.title)}</p>
                      <p className="mt-0.5 line-clamp-2 text-[12.5px] leading-relaxed text-white/45">{tx(mission.goal)}</p>
                    </div>
                    <div className="flex shrink-0 flex-col items-end gap-1">
                      {record ? (
                        <>
                          <div className="flex gap-0.5">
                            {[0, 1, 2].map((star) => (
                              <Star
                                key={star}
                                className={`h-3.5 w-3.5 ${star < record.stars ? 'fill-amber-300 text-amber-300' : 'text-white/15'}`}
                              />
                            ))}
                          </div>
                          <span className="text-[11px] text-white/35">
                            {record.score}/{record.max}
                          </span>
                        </>
                      ) : missionUnlocked ? (
                        <span className="flex items-center gap-1 text-[11px] font-semibold" style={{ color: world.accent }}>
                          <Play className="h-3 w-3 fill-current" />
                          {t('start_mission')}
                        </span>
                      ) : (
                        <Lock className="h-4 w-4 text-white/25" />
                      )}
                    </div>
                  </>
                );

                const shell =
                  'flex items-center gap-3.5 rounded-2xl border px-4 py-4 transition-all duration-300';
                const styles = missionUnlocked
                  ? 'border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]'
                  : 'border-white/5 bg-white/[0.02] opacity-60';

                return missionUnlocked ? (
                  <Link
                    key={mission.id}
                    to={`/mission/${world.id}/${mission.id}`}
                    className={`${shell} ${styles}`}
                  >
                    {inner}
                  </Link>
                ) : (
                  <div key={mission.id} className={`${shell} ${styles}`} title={t('mission_locked_hint')}>
                    {inner}
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}