import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Coins, GraduationCap, RotateCcw, Star, Zap } from 'lucide-react';
import { useGame } from '@/context/GameProvider';
import { badgeById, starsFor } from '@/lib/game';
import { isCourseComplete } from '@/lib/course';

export default function MissionResult({ world, mission, nextMission, score, max, result, onRestart }) {
  const { t, tx, progress } = useGame();
  const stars = starsFor(score, max);
  const percent = Math.round((score / max) * 100);

  return (
    <div className="animate-rise">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center sm:p-8">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: world.accent }}
        />

        <p className="relative text-[10px] font-bold uppercase tracking-[0.3em]" style={{ color: world.accent }}>
          {t('mission_complete')}
        </p>
        <h2 className="relative mt-3 font-display text-2xl font-extrabold text-white sm:text-3xl">{tx(mission.title)}</h2>

        <div className="relative mt-5 flex items-center justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <Star
              key={index}
              className={`h-8 w-8 ${index < stars ? 'fill-amber-300 text-amber-300' : 'text-white/15'}`}
            />
          ))}
        </div>

        <p className="relative mt-3 font-display text-4xl font-extrabold text-white">
          {score}
          <span className="text-lg font-semibold text-white/35"> / {max}</span>
        </p>
        <p className="relative text-[12px] uppercase tracking-[0.16em] text-white/40">
          {t('score')} · {percent}%
        </p>

        <div className="relative mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-cyan-300/25 bg-cyan-300/10 px-4 py-3">
            <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-cyan-200/70">
              <Zap className="h-3.5 w-3.5" /> {t('earned_xp')}
            </div>
            <p className="mt-1 font-display text-xl font-bold text-cyan-100">+{result.xpGain}</p>
          </div>
          <div className="rounded-2xl border border-amber-300/25 bg-amber-300/10 px-4 py-3">
            <div className="flex items-center justify-center gap-1.5 text-[10px] uppercase tracking-[0.18em] text-amber-200/70">
              <Coins className="h-3.5 w-3.5" /> {t('earned_coins')}
            </div>
            <p className="mt-1 font-display text-xl font-bold text-amber-100">+{result.coinGain}</p>
          </div>
        </div>

        {result.newBadges.length > 0 && (
          <div className="relative mt-5 rounded-2xl border border-amber-300/30 bg-amber-300/[0.08] p-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-200">{t('new_badges')}</p>
            <div className="mt-2 space-y-1.5">
              {result.newBadges.map((id) => {
                const badge = badgeById(id);
                if (!badge) return null;
                return (
                  <p key={id} className="font-display text-sm font-bold text-white">
                    {tx(badge.name)}
                  </p>
                );
              })}
            </div>
          </div>
        )}

        <div className="relative mt-6 rounded-2xl bg-black/25 p-4 text-left">
          <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{t('lesson')}</p>
          <p className="text-[13px] leading-relaxed text-white/70">{tx(mission.lesson)}</p>
        </div>

        {isCourseComplete(progress) && (
          <Link
            to="/diploma"
            className="relative mt-3 inline-flex items-center justify-center gap-2 rounded-2xl border border-amber-300/40 bg-amber-300/10 px-5 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-amber-100"
          >
            <GraduationCap className="h-4 w-4" />
            {t('diploma_view')}
          </Link>
        )}

        <div className="relative mt-6 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          {nextMission ? (
            <Link
              to={`/mission/${world.id}/${nextMission.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a]"
            >
              {t('next')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <Link
              to={`/world/${world.id}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a]"
            >
              {t('continue_world')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          <button
            type="button"
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-display text-[13px] font-semibold uppercase tracking-wider text-white/80 hover:bg-white/10"
          >
            <RotateCcw className="h-4 w-4" />
            {t('play_again')}
          </button>
          <Link
            to={`/world/${world.id}`}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-display text-[12px] font-semibold uppercase tracking-wider text-white/45 hover:text-white"
          >
            {t('back_map')}
          </Link>
        </div>
      </div>
    </div>
  );
}