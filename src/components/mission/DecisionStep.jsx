import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { useGame } from '@/context/GameProvider';
import StepFeedback from '@/components/mission/StepFeedback';

export default function DecisionStep({ step, onDone, isLast }) {
  const { t, tx } = useGame();
  const [picked, setPicked] = useState(null);
  const revealed = picked !== null;
  const choice = revealed ? step.options[picked] : null;
  const earned = choice ? (choice.correct ? step.points : 0) : 0;

  return (
    <div>
      <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{tx(step.prompt)}</h3>

      {step.chat && (
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#101026] p-4">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200/70">
            <MessageSquare className="h-3.5 w-3.5" />
            {tx(step.chat.from)}
          </div>
          <p className="mt-2 text-[13.5px] leading-relaxed text-white/80">{tx(step.chat.text)}</p>
        </div>
      )}

      <div className="mt-5 space-y-2.5">
        {step.options.map((option, index) => {
          const isPicked = picked === index;
          const showRight = revealed && option.correct;
          const showWrong = revealed && isPicked && !option.correct;
          return (
            <button
              key={index}
              type="button"
              data-testid={`option-${index}`}
              disabled={revealed}
              onClick={() => setPicked(index)}
              className={[
                'flex w-full items-start gap-3 rounded-2xl border px-4 py-3.5 text-left text-[13.5px] leading-relaxed transition-all duration-300',
                showRight
                  ? 'border-emerald-400/60 bg-emerald-400/12 text-white'
                  : showWrong
                    ? 'border-rose-400/60 bg-rose-400/12 text-white'
                    : 'border-white/10 bg-white/[0.04] text-white/80 hover:border-white/30 hover:bg-white/[0.08]',
              ].join(' ')}
            >
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/20 text-[11px] font-bold text-white/60">
                {index + 1}
              </span>
              <span>{tx(option)}</span>
            </button>
          );
        })}
      </div>

      {revealed && (
        <StepFeedback
          tone={choice.correct ? 'good' : 'bad'}
          title={choice.correct ? t('correct') : t('incorrect')}
          outcome={tx(choice.outcome)}
          explain={choice.explain}
          earned={earned}
          onNext={() => onDone(earned)}
          nextLabel={isLast ? t('finish') : t('next')}
        />
      )}
    </div>
  );
}