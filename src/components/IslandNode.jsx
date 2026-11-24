import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Sparkles } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useGame } from '@/context/GameProvider';

const MASK = 'radial-gradient(circle at 50% 46%, #000 54%, transparent 76%)';

export default function IslandNode({ world, index, position, unlocked, active, onHover }) {
  const { t, tx, worldProgress } = useGame();
  const { done, total } = worldProgress(world);
  const complete = total > 0 && done === total;
  const size = index === 0 ? 'h-[116px] w-[116px] sm:h-40 sm:w-40' : 'h-[100px] w-[100px] sm:h-36 sm:w-36';

  const content = (
    <div className="flex flex-col items-center">
      <div className={`relative ${size}`}>
        <span
          className="pointer-events-none absolute left-1/2 top-1/2 h-[135%] w-[135%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
          style={{ background: world.accent, opacity: unlocked ? (active ? 0.7 : 0.42) : 0.14 }}
        />

        {unlocked && (
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-[-4%] rounded-full border"
            style={{ borderColor: `${world.accent}66` }}
            animate={{ opacity: [0.25, 0.8, 0.25], scale: [0.94, 1.05, 0.94] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        <Image
          src={world.island}
          alt={tx(world.title)}
          fittingType="fit"
          className={`relative h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.06] ${
            unlocked ? '' : 'opacity-70 grayscale'
          }`}
          style={{ WebkitMaskImage: MASK, maskImage: MASK }}
        />

        {complete && (
          <span className="absolute right-0 top-0 grid h-7 w-7 place-items-center rounded-full border border-amber-300/50 bg-[#100c22]/90">
            <Sparkles className="h-3.5 w-3.5 text-amber-300" />
          </span>
        )}

        {!unlocked && (
          <span className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[#0b0b1e]/80 backdrop-blur">
            <Lock className="h-4 w-4 text-white/70" />
          </span>
        )}
      </div>

      <div className={`mt-1 flex flex-col items-center ${unlocked ? '' : 'opacity-70'}`}>
        <span className="rounded-full border border-white/10 bg-[#0b0b1e]/85 px-2.5 py-0.5 text-center font-display text-[10px] font-bold leading-tight text-white/90 sm:text-[11px]">
          {tx(world.title)}
        </span>
        <span className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/45">
          {unlocked ? `${done}/${total} ${t('missions')}` : t('locked')}
        </span>
      </div>
    </div>
  );

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-[60%]"
      style={{ left: `${position.x}%`, top: `${position.y}%` }}
      onMouseEnter={() => onHover?.(index)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(index)}
      onBlur={() => onHover?.(null)}
    >
      <motion.div
        animate={{ y: [0, -9, 0], scale: active ? 1.07 : 1 }}
        transition={{
          y: { duration: 6 + index * 0.7, repeat: Infinity, ease: 'easeInOut' },
          scale: { duration: 0.35, ease: 'easeOut' },
        }}
      >
        {unlocked ? (
          <Link to={`/world/${world.id}`} aria-label={tx(world.title)} className="group block">
            {content}
          </Link>
        ) : (
          <div title={t('world_locked_hint')} className="group cursor-not-allowed">
            {content}
          </div>
        )}
      </motion.div>
    </div>
  );
}