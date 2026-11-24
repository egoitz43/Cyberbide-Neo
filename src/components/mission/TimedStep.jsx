import React, { useEffect, useRef, useState } from 'react';
import { Check, X } from 'lucide-react';
import { useGame } from '@/context/GameProvider';
import StepFeedback from '@/components/mission/StepFeedback';

export default function TimedStep({ step, onDone, isLast }) {
  const { t, tx } = useGame();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(step.seconds || 30);
  const [earned, setEarned] = useState(null);
  const answersRef = useRef([]);
  const finishedRef = useRef(false);

  const total = step.statements.length;

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    const correct = step.statements.filter((st, i) => answersRef.current[i] === st.isTrue).length;
    setEarned(Math.round((correct / total) * step.points));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finish();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const answer = (value) => {
    if (finishedRef.current) return;
    const next = [...answersRef.current];
    next[index] = value;
    answersRef.current = next;
    setAnswers(next);
    if (index + 1 >= total) finish();
    else setIndex(index + 1);
  };

  const current = step.statements[index];
  const correctCount = step.statements.filter((st, i) => answersRef.current[i] === st.isTrue).length;
  const answeredCount = answers.filter((a) => a !== undefined).length;

  if (earned !== null) {
    const ratio = correctCount / total;
    return (
      <div>
        <h3 className="font-display text-lg font-bold text-white">{tx(step.prompt)}</h3>
        <p className="mt-2 text-[13px] text-white/60">
          {correctCount}/{total} · {t('correct')}
        </p>
        <StepFeedback
          tone={ratio >= 0.85 ? 'good' : ratio >= 0.6 ? 'partial' : 'bad'}
          title={ratio >= 0.85 ? t('correct') : ratio >= 0.6 ? t('partially') : t('incorrect')}
          explain={step.explain}
          earned={earned}
          onNext={() => onDone(earned)}
          nextLabel={isLast ? t('finish') : t('next')}
        />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-bold leading-snug text-white">{tx(step.prompt)}</h3>
        <div className="shrink-0 rounded-full border border-white/15 px-3 py-1 font-display text-sm font-bold text-cyan-200">
          {timeLeft}s
        </div>
      </div>

      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 transition-all duration-1000"
          style={{ width: `${(timeLeft / (step.seconds || 30)) * 100}%` }}
        />
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-[10px] uppercase tracking-[0.2em] text-white/35">
          {answeredCount + 1} / {total}
        </p>
        <p className="mt-2 min-h-[52px] font-display text-base font-semibold leading-snug text-white">
          {tx(current.text)}
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button
            type="button"
            data-testid="timed-true"
            onClick={() => answer(true)}
            className="flex items-center justify-center gap-2 rounded-xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 font-display text-[13px] font-bold text-emerald-200 transition-transform hover:-translate-y-0.5"
          >
            <Check className="h-4 w-4" />
            {t('true_label')}
          </button>
          <button
            type="button"
            data-testid="timed-false"
            onClick={() => answer(false)}
            className="flex items-center justify-center gap-2 rounded-xl border border-rose-400/40 bg-rose-400/10 px-4 py-3 font-display text-[13px] font-bold text-rose-200 transition-transform hover:-translate-y-0.5"
          >
            <X className="h-4 w-4" />
            {t('false_label')}
          </button>
        </div>
      </div>
    </div>
  );
}