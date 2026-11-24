import React, { useState } from 'react';
import { useGame } from '@/context/GameProvider';
import StepFeedback from '@/components/mission/StepFeedback';

export default function QuizStep({ step, onDone, isLast }) {
  const { t, tx } = useGame();
  const [picked, setPicked] = useState(null);
  const revealed = picked !== null;
  const correct = revealed && picked === step.correct;
  const earned = correct ? step.points : 0;

  return (
    <div>
      <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{tx(step.prompt)}</h3>
      <div className="mt-5 space-y-2.5">
        {step.options.map((option, index) => {
          const isPicked = picked === index;
          const isRight = revealed && index === step.correct;
          const isWrong = revealed && isPicked && index !== step.correct;
          return (
            <button
              key={index}
              type="button"
              data-testid={`option-${index}`}
              disabled={revealed}
              onClick={() => setPicked(index)}
              className={[
                'flex w-full items-center gap-3 rounded-2xl border px-4 py-3.5 text-left text-[13.5px] leading-relaxed transition-all duration-300',
                isRight
                  ? 'border-emerald-400/60 bg-emerald-400/12 text-white'
                  : isWrong
                    ? 'border-rose-400/60 bg-rose-400/12 text-white'
                    : 'border-white/10 bg-white/[0.04] text-white/80 hover:border-white/30 hover:bg-white/[0.08]',
              ].join(' ')}
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/20 text-[11px] font-bold text-white/60">
                {String.fromCharCode(65 + index)}
              </span>
              <span>{tx(option)}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <StepFeedback
          tone={correct ? 'good' : 'bad'}
          title={correct ? t('correct') : t('incorrect')}
          explain={step.explain}
          earned={earned}
          onNext={() => onDone(earned)}
          nextLabel={isLast ? t('finish') : t('next')}
        />
      )}
    </div>
  );
}