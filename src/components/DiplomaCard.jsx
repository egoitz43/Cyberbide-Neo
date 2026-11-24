import React from 'react';
import { useGame } from '@/context/GameProvider';

const CORNER = 'pointer-events-none absolute h-7 w-7 border-cyan-300/40 sm:h-10 sm:w-10';

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-lg font-extrabold text-cyan-200 sm:text-2xl">{value}</p>
      <p className="mt-0.5 text-[8.5px] uppercase tracking-[0.2em] text-white/40 sm:text-[9.5px]">{label}</p>
    </div>
  );
}

export default function DiplomaCard({ alias, issuedAt, missions }) {
  const { t, lang, level, progress } = useGame();
  const locale = lang === 'eu' ? 'eu-ES' : 'es-ES';
  const date = new Date(issuedAt).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className="diploma-print relative overflow-hidden rounded-[26px] border border-cyan-300/25 px-6 py-8 sm:px-12 sm:py-12"
      style={{ backgroundImage: 'linear-gradient(140deg, #12122c 0%, #0b0b1e 48%, #1a1033 100%)' }}
    >
      <span className={`${CORNER} left-3 top-3 rounded-tl-xl border-l-2 border-t-2`} />
      <span className={`${CORNER} right-3 top-3 rounded-tr-xl border-r-2 border-t-2`} />
      <span className={`${CORNER} bottom-3 left-3 rounded-bl-xl border-b-2 border-l-2`} />
      <span className={`${CORNER} bottom-3 right-3 rounded-br-xl border-b-2 border-r-2`} />

      <div className="relative flex flex-col items-center text-center">
        <p className="font-display text-[11px] font-extrabold uppercase tracking-[0.48em] text-white/70">CYBERBIDE</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-amber-200 sm:text-6xl">
          {t('diploma_title').toUpperCase()}
        </h2>
        <p className="mt-2 text-[9.5px] uppercase tracking-[0.32em] text-cyan-200/70 sm:text-[11px]">
          {t('diploma_eyebrow')}
        </p>

        <p className="mt-7 text-[9.5px] uppercase tracking-[0.3em] text-white/40 sm:text-[10.5px]">
          {t('diploma_intro')}
        </p>
        <p className="mt-2 max-w-full truncate font-display text-2xl font-extrabold text-white sm:text-4xl">{alias}</p>
        <p className="mt-4 max-w-xl text-[12px] leading-relaxed text-white/60 sm:text-[13.5px]">
          {t('diploma_body').replace('{missions}', String(missions))}
        </p>

        <div className="mt-7 grid w-full max-w-lg grid-cols-3 gap-2 border-y border-white/10 py-3 sm:gap-4 sm:py-4">
          <Stat value={progress.xp} label={t('diploma_xp')} />
          <Stat value={progress.badges.length} label={t('diploma_badges')} />
          <Stat value={level.level} label={t('diploma_level')} />
        </div>

        <div className="mt-6 flex w-full items-end justify-between gap-4">
          <div className="text-left">
            <p className="text-[9px] uppercase tracking-[0.24em] text-white/35">{t('diploma_date')}</p>
            <p className="mt-1 text-[11.5px] font-semibold capitalize text-white/75">{date}</p>
          </div>

          <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-amber-300/50 bg-amber-300/10 sm:h-20 sm:w-20">
            <span className="px-1 font-display text-[7px] font-bold uppercase leading-tight tracking-[0.14em] text-amber-200 sm:text-[8px]">
              {t('diploma_seal')}
            </span>
          </div>

          <div className="text-right">
            <p className="border-b border-white/25 pb-1 font-display text-[12px] font-bold text-white/85">
              {t('diploma_awarded_by')}
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.24em] text-white/35">CYBERBIDE</p>
          </div>
        </div>
      </div>
    </div>
  );
}