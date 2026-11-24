import React from 'react';
import { ArrowRight, Play, Target } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useGame } from '@/context/GameProvider';

export default function MissionIntro({ world, mission, onStart }) {
  const { t, tx } = useGame();

  return (
    <div className="animate-rise">
      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <div
          className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: world.accent }}
        />

        <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center">
          <div
            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-3xl border"
            style={{ borderColor: `${world.accent}66`, boxShadow: `0 20px 50px -24px ${world.accent}` }}
          >
            <Image src={world.portrait} alt={world.character.name} className="h-full w-full object-cover" fittingType="fill" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.26em]" style={{ color: world.accent }}>
              {tx(world.title)} · {world.character.name}
            </p>
            <h1 className="mt-2 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
              {tx(mission.title)}
            </h1>
            <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-white/35">{tx(world.character.role)}</p>
          </div>
        </div>

        <p className="relative mt-6 text-[14px] leading-relaxed text-white/70">{tx(mission.intro)}</p>

        <div className="relative mt-5 rounded-2xl border-l-2 py-3 pl-4 pr-3" style={{ borderColor: world.accent, background: `${world.accent}12` }}>
          <p className="text-[13.5px] italic leading-relaxed text-white/85">{tx(mission.dialogue)}</p>
        </div>

        <div className="relative mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-2 text-[12.5px] leading-relaxed text-white/50">
            <Target className="mt-0.5 h-4 w-4 shrink-0" style={{ color: world.accent }} />
            {tx(mission.goal)}
          </div>
          <button
            type="button"
            data-testid="mission-start"
            onClick={onStart}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a] transition-transform hover:-translate-y-0.5"
          >
            <Play className="h-4 w-4 fill-current" />
            {t('begin')}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}