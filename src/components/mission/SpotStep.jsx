import React, { useState } from 'react';
import { Check, Flag } from 'lucide-react';
import { useGame } from '@/context/GameProvider';
import StepFeedback from '@/components/mission/StepFeedback';

export default function SpotStep({ step, onDone, isLast }) {
  const { t, tx } = useGame();
  const [selected, setSelected] = useState([]);
  const [checked, setChecked] = useState(false);

  const badCount = step.items.filter((item) => item.bad).length;
  const toggle = (index) => {
    if (checked) return;
    setSelected((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]));
  };

  const hits = step.items.filter((item, index) => item.bad && selected.includes(index)).length;
  const falsePositives = step.items.filter((item, index) => !item.bad && selected.includes(index)).length;
  const ratio = Math.max(0, (hits - falsePositives) / badCount);
  const earned = Math.round(step.points * ratio);
  const perfect = hits === badCount && falsePositives === 0;

  return (
    <div>
      <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{tx(step.prompt)}</h3>
      <p className="mt-1.5 text-[12px] uppercase tracking-[0.16em] text-white/40">{t('select_suspicious')}</p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {step.items.map((item, index) => {
          const isSelected = selected.includes(index);
          const missed = checked && item.bad && !isSelected;
          const wrongPick = checked && !item.bad && isSelected;
          return (
            <button
              key={index}
              type="button"
              data-testid={`item-${index}`}
              onClick={() => toggle(index)}
              className={[
                'flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-left text-[13px] leading-relaxed transition-all duration-300',
                missed
                  ? 'border-amber-300/60 bg-amber-300/10 text-amber-100'
                  : wrongPick
                    ? 'border-rose-400/60 bg-rose-400/10 text-rose-100'
                    : isSelected
                      ? 'border-cyan-300/60 bg-cyan-300/12 text-white'
                      : 'border-white/10 bg-white/[0.04] text-white/75 hover:border-white/25',
              ].join(' ')}
            >
              <span
                className={`mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded border ${
                  isSelected ? 'border-cyan-300 bg-cyan-300 text-[#0a0a1a]' : 'border-white/25'
                }`}
              >
                {isSelected && <Check className="h-3 w-3" strokeWidth={3} />}
              </span>
              <span>{tx(item.text)}</span>
            </button>
          );
        })}
      </div>

      {!checked && (
        <button
          type="button"
          data-testid="check"
          disabled={selected.length === 0}
          onClick={() => setChecked(true)}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a] transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Flag className="h-4 w-4" />
          {t('check')}
        </button>
      )}

      {checked && (
        <StepFeedback
          tone={perfect ? 'good' : ratio >= 0.6 ? 'partial' : 'bad'}
          title={perfect ? t('correct') : ratio >= 0.6 ? t('partially') : t('incorrect')}
          explain={step.explain}
          earned={earned}
          onNext={() => onDone(earned)}
          nextLabel={isLast ? t('finish') : t('next')}
        />
      )}
    </div>
  );
}