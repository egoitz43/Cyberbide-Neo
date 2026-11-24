import React, { useState } from 'react';
import { Flag, RotateCcw } from 'lucide-react';
import { useGame } from '@/context/GameProvider';
import StepFeedback from '@/components/mission/StepFeedback';

export default function OrderStep({ step, onDone, isLast }) {
  const { t, tx } = useGame();
  const [order, setOrder] = useState([]);
  const [checked, setChecked] = useState(false);

  const total = step.steps.length;
  const correctCount = step.steps.filter((_, index) => order[index] === index).length;
  const ratio = correctCount / total;
  const earned = Math.round(step.points * ratio);

  const pick = (index) => {
    if (checked || order.includes(index)) return;
    setOrder((prev) => [...prev, index]);
  };

  return (
    <div>
      <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{tx(step.prompt)}</h3>
      <p className="mt-1.5 text-[12px] uppercase tracking-[0.16em] text-white/40">{t('select_order')}</p>

      <div className="mt-4 space-y-2">
        {step.steps.map((item, index) => {
          const position = order.indexOf(index);
          const isChosen = position !== -1;
          const isRight = checked && position === index;
          const isWrong = checked && isChosen && position !== index;
          return (
            <button
              key={index}
              type="button"
              data-testid={`order-${index}`}
              disabled={checked || isChosen}
              onClick={() => pick(index)}
              className={[
                'flex w-full items-center gap-3 rounded-xl border px-3.5 py-3 text-left text-[13px] leading-relaxed transition-all duration-300',
                isRight
                  ? 'border-emerald-400/50 bg-emerald-400/10 text-white'
                  : isWrong
                    ? 'border-rose-400/50 bg-rose-400/10 text-white'
                    : isChosen
                      ? 'border-cyan-300/50 bg-cyan-300/10 text-white'
                      : 'border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25',
              ].join(' ')}
            >
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border text-[11px] font-bold ${
                  isChosen ? 'border-transparent bg-cyan-300 text-[#0a0a1a]' : 'border-white/20 text-white/45'
                }`}
              >
                {isChosen ? position + 1 : '·'}
              </span>
              <span>{tx(item)}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        {!checked && (
          <button
            type="button"
            data-testid="check"
            disabled={order.length !== total}
            onClick={() => setChecked(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a] transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Flag className="h-4 w-4" />
            {t('check')}
          </button>
        )}
        {!checked && order.length > 0 && (
          <button
            type="button"
            onClick={() => setOrder([])}
            className="inline-flex items-center gap-1.5 text-[12px] text-white/45 hover:text-white"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            {t('back')}
          </button>
        )}
      </div>

      {checked && (
        <StepFeedback
          tone={correctCount === total ? 'good' : ratio >= 0.6 ? 'partial' : 'bad'}
          title={
            correctCount === total
              ? t('correct')
              : `${correctCount}/${total} · ${ratio >= 0.6 ? t('partially') : t('incorrect')}`
          }
          explain={step.explain}
          earned={earned}
          onNext={() => onDone(earned)}
          nextLabel={isLast ? t('finish') : t('next')}
        />
      )}
    </div>
  );
}