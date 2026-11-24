import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/context/SoundProvider';
import { useGame } from '@/context/GameProvider';

export default function MusicToggle() {
  const { t } = useGame();
  const { soundOn, toggleSound } = useSound();
  const label = soundOn ? t('sound_mute') : t('sound_enable');

  return (
    <button
      type="button"
      onClick={toggleSound}
      aria-pressed={soundOn}
      aria-label={label}
      title={label}
      className={`relative grid h-9 w-9 place-items-center rounded-xl border transition-all duration-300 ${
        soundOn
          ? 'border-cyan-300/40 bg-cyan-300/15 text-cyan-200 shadow-[0_0_18px_-8px_rgba(103,232,249,0.9)]'
          : 'border-white/10 bg-white/5 text-white/45 hover:border-white/25 hover:text-white'
      }`}
    >
      {soundOn ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      {soundOn && (
        <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
      )}
    </button>
  );
}