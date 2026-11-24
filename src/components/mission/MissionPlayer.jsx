import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { useGame } from '@/context/GameProvider';
import { missionMax } from '@/data/worlds';
import StepRenderer from '@/components/mission/StepRenderer';
import MissionIntro from '@/components/mission/MissionIntro';
import MissionResult from '@/components/mission/MissionResult';

export default function MissionPlayer({ world, mission, nextMission }) {
  const { t, tx, finishMission } = useGame();
  const [phase, setPhase] = useState('intro');
  const [stepIndex, setStepIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(null);

  const max = missionMax(mission);
  const step = mission.steps[stepIndex];
  const totalSteps = mission.steps.length;
  const progressPercent = phase === 'intro' ? 0 : phase === 'result' ? 100 : (stepIndex / totalSteps) * 100;

  const handleDone = (earned) => {
    const nextScore = score + earned;
    setScore(nextScore);
    if (stepIndex + 1 < totalSteps) {
      setStepIndex(stepIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const outcome = finishMission({ worldId: world.id, missionId: mission.id, score: nextScore, max });
    setResult(outcome);
    setPhase('result');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setPhase('intro');
    setStepIndex(0);
    setScore(0);
    setResult(null);
  };

  return (
    <div className="min-h-screen text-white">
      <div className="pt-safe sticky top-0 z-30 border-b border-white/5 bg-[#070716]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Link
            to={`/world/${world.id}`}
            aria-label={t('exit')}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <div className="min-w-0 flex-1">
            <p className="truncate text-[10px] uppercase tracking-[0.2em] text-white/35">{tx(world.title)}</p>
            <p className="truncate font-display text-[13px] font-bold text-white">{tx(mission.title)}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">{t('points')}</p>
            <p className="font-display text-sm font-bold text-cyan-300">{score}</p>
          </div>
        </div>
        <div className="h-1 w-full bg-white/5">
          <div
            className="h-full transition-all duration-500"
            style={{
              width: `${Math.max(progressPercent, 2)}%`,
              background: `linear-gradient(90deg, ${world.accent}, ${world.accent2})`,
            }}
          />
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-7 sm:px-6">
        {phase === 'intro' && <MissionIntro world={world} mission={mission} onStart={() => setPhase('playing')} />}

        {phase === 'playing' && (
          <div className="animate-rise">
            <div className="mb-4 flex items-center gap-3">
              <div
                className="h-9 w-9 shrink-0 overflow-hidden rounded-full border"
                style={{ borderColor: `${world.accent}66` }}
              >
                <Image
                  src={world.portrait}
                  alt={world.character.name}
                  className="h-full w-full object-cover"
                  fittingType="fill"
                />
              </div>
              <div className="flex flex-1 gap-1">
                {mission.steps.map((item, index) => (
                  <span
                    key={item.type + index}
                    className="h-1.5 flex-1 rounded-full transition-colors duration-300"
                    style={{
                      background: index < stepIndex ? world.accent : index === stepIndex ? `${world.accent}99` : 'rgba(255,255,255,0.1)',
                    }}
                  />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-white/40">
                {Math.min(stepIndex + 1, totalSteps)}/{totalSteps}
              </span>
            </div>

            <div className="rounded-[26px] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
              <StepRenderer
                key={`${mission.id}-${stepIndex}`}
                step={step}
                isLast={stepIndex + 1 === totalSteps}
                onDone={handleDone}
              />
            </div>
          </div>
        )}

        {phase === 'result' && result && (
          <MissionResult
            world={world}
            mission={mission}
            nextMission={nextMission}
            score={score}
            max={max}
            result={result}
            onRestart={restart}
          />
        )}
      </div>
    </div>
  );
}