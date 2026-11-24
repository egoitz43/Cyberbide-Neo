import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, GraduationCap, Play, Sparkles } from 'lucide-react';
import TopBar from '@/components/TopBar';
import WorldMap from '@/components/WorldMap';
import { Image } from '@/components/ui/image';
import { HERO_IMAGE, WORLDS } from '@/data/worlds';
import { isCourseComplete } from '@/lib/course';
import { useGame } from '@/context/GameProvider';

export default function Home() {
  const { t, tx, progress, level, completedCount, isWorldUnlocked } = useGame();

  const resumeWorld = progress.lastWorld || 'w1';
  const continueTarget = progress.history.length ? `/world/${resumeWorld}` : '/world/w1';
  const totalMissions = WORLDS.reduce((sum, world) => sum + world.missions.length, 0);
  const complete = isCourseComplete(progress);

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute inset-0">
        <Image src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-55" fittingType="fill" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_-10%,rgba(56,231,224,0.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#070716]/35 via-[#070716]/80 to-[#070716]/70" />
        <div className="starfield absolute inset-0" />
      </div>

      <div className="relative z-10">
        <TopBar />

        <section className="mx-auto max-w-6xl px-5 pb-14 pt-12 sm:px-6 sm:pt-16 lg:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3.5 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
              <Sparkles className="h-3 w-3" />
              {t('hero_badge')}
            </span>

            <h1 className="mt-6 font-display text-[46px] font-extrabold leading-[0.92] tracking-tight sm:text-7xl lg:text-[86px]">
              <span className="text-gradient">CYBER</span>
              <span className="text-white">BIDE</span>
            </h1>
            <p className="mt-3 font-display text-sm font-medium uppercase tracking-[0.42em] text-white/45 sm:text-base">
              {t('hero_sub')}
            </p>
            <p className="mt-6 max-w-xl text-[14.5px] leading-relaxed text-white/60 sm:text-base">
              {t('hero_desc')}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/world/w1"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-fuchsia-500 px-7 py-3.5 font-display text-sm font-bold uppercase tracking-wider text-[#08081a] shadow-[0_18px_50px_-18px_rgba(56,231,224,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Play className="h-4 w-4 fill-current" />
                {t('play')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to={continueTarget}
                className="inline-flex items-center justify-center gap-2.5 rounded-2xl border border-white/15 bg-white/5 px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-wider text-white/85 backdrop-blur transition-all duration-300 hover:border-white/30 hover:bg-white/10"
              >
                <Compass className="h-4 w-4" />
                {t('continue')}
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <div className="min-w-[170px]">
                <div className="flex items-baseline justify-between text-[11px] uppercase tracking-widest text-white/40">
                  <span>{t('level')} {level.level}</span>
                  <span>{level.current}/{level.needed} XP</span>
                </div>
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_14px_rgba(120,220,255,0.8)] transition-all duration-700"
                    style={{ width: `${Math.max(level.percent, 3)}%` }}
                  />
                </div>
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/40">
                <span className="font-display text-base font-bold text-white">{completedCount}</span>
                <span className="ml-1">/ {totalMissions} {t('missions')}</span>
              </div>
            </div>
          </motion.div>
        </section>

        {complete && (
          <section className="mx-auto max-w-6xl px-5 pb-10 sm:px-6">
            <div className="flex flex-col gap-5 rounded-[26px] border border-amber-300/30 bg-amber-300/[0.07] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-amber-300/30 bg-amber-300/10">
                  <GraduationCap className="h-5 w-5 text-amber-200" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-amber-200">{t('diploma_unlocked')}</p>
                  <h2 className="mt-1.5 font-display text-lg font-bold text-white">{t('diploma_title')}</h2>
                  <p className="mt-1 max-w-md text-[13px] leading-relaxed text-white/50">{t('diploma_unlocked_desc')}</p>
                </div>
              </div>
              <Link
                to="/diploma"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-300 to-amber-400 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a]"
              >
                <GraduationCap className="h-4 w-4" />
                {t('diploma_view')}
              </Link>
            </div>
          </section>
        )}

        <section id="mapa" className="relative mx-auto max-w-6xl px-5 pb-24 sm:px-6">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">{t('map_title')}</h2>
              <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-white/50">{t('map_desc')}</p>
            </div>
            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
              {WORLDS.filter((_, i) => isWorldUnlocked(i)).length} / {WORLDS.length} {t('worlds')}
            </div>
          </div>

          <WorldMap />
        </section>
      </div>
    </div>
  );
}