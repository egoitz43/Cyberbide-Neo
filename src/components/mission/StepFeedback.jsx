import React from 'react';
import { ArrowRight, Check, Lightbulb, X } from 'lucide-react';
import { useGame } from '@/context/GameProvider';

const tones = {
  good: {
    wrap: 'border-emerald-400/35 bg-emerald-400/10',
    title: 'text-emerald-300',
    icon: <Check className="h-4 w-4" />,
  },
  bad: {
    wrap: 'border-rose-400/35 bg-rose-400/10',
    title: 'text-rose-300',
    icon: <X className="h-4 w-4" />,
  },
  partial: {
    wrap: 'border-amber-300/35 bg-amber-300/10',
    title: 'text-amber-200',
    icon: <Lightbulb className="h-4 w-4" />,
  },
};

export default function StepFeedback({ tone = 'good', title, explain, outcome, earned, onNext, nextLabel }) {
  const { t, tx } = useGame();
  const style = tones[tone] || tones.good;

  return (
    <div className={`animate-rise mt-6 rounded-2xl border p-4 sm:p-5 ${style.wrap}`}>
      <div className={`flex items-center gap-2 font-display text-sm font-bold ${style.title}`}>
        {style.icon}
        <span>{title}</span>
        <span className="ml-auto rounded-full bg-black/25 px-2.5 py-1 text-[11px] font-semibold text-white/70">
          +{earned} {t('points')}
        </span>
      </div>
      {outcome && <p className="mt-3 text-[13px] leading-relaxed text-white/80">{outcome}</p>}
      <div className="mt-3 rounded-xl bg-black/20 p-3">
        <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{t('explanation')}</p>
        <p className="text-[13px] leading-relaxed text-white/70">{tx(explain)}</p>
      </div>
      <button
        type="button"
        data-testid="next"
        onClick={onNext}
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/90 px-5 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a] transition-transform hover:-translate-y-0.5 sm:w-auto"
      >
        {nextLabel || t('next')}
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}