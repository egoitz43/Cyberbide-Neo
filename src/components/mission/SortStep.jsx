import React, { useState } from 'react';
import { Flag } from 'lucide-react';
import { useGame } from '@/context/GameProvider';
import StepFeedback from '@/components/mission/StepFeedback';

export default function SortStep({ step, onDone, isLast }) {
  const { t, tx } = useGame();
  const [assignments, setAssignments] = useState({});
  const [checked, setChecked] = useState(false);

  const total = step.items.length;
  const correctCount = step.items.filter((item, index) => assignments[index] === item.bucket).length;
  const ratio = correctCount / total;
  const earned = Math.round(step.points * ratio);
  const allAssigned = Object.keys(assignments).length === total;

  const assign = (index, bucketId) => {
    if (checked) return;
    setAssignments((prev) => ({ ...prev, [index]: bucketId }));
  };

  return (
    <div>
      <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{tx(step.prompt)}</h3>

      <div className="mt-5 space-y-2">
        {step.items.map((item, index) => {
          const chosen = assignments[index];
          const isRight = checked && chosen === item.bucket;
          const isWrong = checked && chosen && chosen !== item.bucket;
          return (
            <div
              key={index}
              data-testid={`sort-item-${index}`}
              className={[
                'flex flex-col gap-2.5 rounded-xl border px-3.5 py-3 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between',
                isRight
                  ? 'border-emerald-400/50 bg-emerald-400/10'
                  : isWrong
                    ? 'border-rose-400/50 bg-rose-400/10'
                    : 'border-white/10 bg-white/[0.04]',
              ].join(' ')}
            >
              <span className="flex-1 text-[13px] leading-relaxed text-white/80">{tx(item.text)}</span>
              <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex sm:gap-1.5">
                {step.buckets.map((bucket) => {
                  const active = chosen === bucket.id;
                  return (
                    <button
                      key={bucket.id}
                      type="button"
                      disabled={checked}
                      data-testid={`bucket-${bucket.id}-${index}`}
                      onClick={() => assign(index, bucket.id)}
                      className={[
                        'min-h-[40px] rounded-lg border px-2.5 py-2 text-[12px] font-semibold transition-all duration-200',
                        active
                          ? 'border-cyan-300/70 bg-cyan-300/20 text-cyan-100'
                          : 'border-white/15 text-white/55 hover:border-white/35 hover:text-white',
                      ].join(' ')}
                    >
                      {tx(bucket.label)}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {!checked && (
        <button
          type="button"
          data-testid="check"
          disabled={!allAssigned}
          onClick={() => setChecked(true)}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a] transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Flag className="h-4 w-4" />
          {t('check')}
        </button>
      )}

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