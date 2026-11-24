import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Lock, Sparkles } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useGame } from '@/context/GameProvider';

export default function WorldCard({ world, index }) {
  const { t, tx, isWorldUnlocked, worldProgress } = useGame();
  const unlocked = isWorldUnlocked(index);
  const { done, total } = worldProgress(world);
  const complete = total > 0 && done === total;
  const percent = total ? Math.round((done / total) * 100) : 0;

  const inner = (
    <>
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-40 blur-3xl transition-opacity duration-500 group-hover:opacity-70"
        style={{ background: world.accent }}
      />
      <div className="relative flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
            {t('world_label')} {String(world.index).padStart(2, '0')}
            {!unlocked && <Lock className="h-3 w-3" />}
            {complete && <Sparkles className="h-3 w-3 text-amber-300" />}
          </div>
          <h3 className="mt-2 font-display text-[19px] font-bold leading-tight text-white">
            {tx(world.title)}
          </h3>
          <p className="mt-1.5 max-w-[15rem] text-[12.5px] leading-relaxed text-white/55">{tx(world.theme)}</p>
        </div>
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={world.portrait}
            alt={world.character.name}
            className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 ${unlocked ? '' : 'grayscale'}`}
            fittingType="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b1e]/70 to-transparent" />
        </div>
      </div>

      <div className="relative mt-5">
        <div className="flex items-center justify-between text-[11px] text-white/45">
          <span>
            {done}/{total} {t('missions')}
          </span>
          {unlocked ? (
            <span className="flex items-center gap-1 font-semibold" style={{ color: world.accent }}>
              {complete ? t('completed') : t('available')}
              <ChevronRight className="h-3 w-3" />
            </span>
          ) : (
            <span className="text-white/35">{t('locked')}</span>
          )}
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${Math.max(percent, unlocked ? 4 : 0)}%`,
              background: `linear-gradient(90deg, ${world.accent}, ${world.accent2})`,
              boxShadow: `0 0 12px ${world.accent}`,
            }}
          />
        </div>
      </div>
    </>
  );

  const shell = [
    'group relative block overflow-hidden rounded-[26px] border p-5 transition-all duration-500',
    unlocked
      ? 'border-white/10 bg-white/[0.045] hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07]'
      : 'cursor-not-allowed border-white/5 bg-white/[0.02] opacity-70',
  ].join(' ');

  const glow = unlocked ? { boxShadow: `0 18px 50px -30px ${world.accent}` } : undefined;

  if (!unlocked) {
    return (
      <div className={shell} style={glow} title={t('world_locked_hint')}>
        {inner}
      </div>
    );
  }

  return (
    <Link to={`/world/${world.id}`} className={shell} style={glow} aria-label={tx(world.title)}>
      {inner}
    </Link>
  );
}