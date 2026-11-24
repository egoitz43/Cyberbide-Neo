import React from 'react';
import {
  BrainCircuit,
  Coins,
  Compass,
  Crown,
  Footprints,
  HeartHandshake,
  KeyRound,
  Lock,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import TopBar from '@/components/TopBar';
import { useGame } from '@/context/GameProvider';
import { BADGES } from '@/lib/game';

const ICONS = { Footprints, Sparkles, HeartHandshake, Compass, Lock, KeyRound, BrainCircuit, ShieldCheck, Crown, Coins };

export default function Medals() {
  const { t, tx, progress } = useGame();

  return (
    <div className="min-h-screen text-white">
      <TopBar />
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{t('medals_title')}</h1>
            <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-white/45">{t('medals_desc')}</p>
          </div>
          <p className="font-display text-sm text-white/50">
            <span className="text-xl font-extrabold text-white">{progress.badges.length}</span> / {BADGES.length}{' '}
            {t('medals_earned')}
          </p>
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {BADGES.map((badge) => {
            const owned = progress.badges.includes(badge.id);
            const Icon = ICONS[badge.icon] || Sparkles;
            return (
              <div
                key={badge.id}
                className={`relative overflow-hidden rounded-2xl border p-4 transition-all duration-300 ${
                  owned ? 'border-white/15 bg-white/[0.06]' : 'border-white/5 bg-white/[0.02]'
                }`}
              >
                {owned && (
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-30 blur-2xl"
                    style={{ background: badge.color }}
                  />
                )}
                <div
                  className="relative grid h-12 w-12 place-items-center rounded-2xl border"
                  style={{
                    borderColor: owned ? `${badge.color}66` : 'rgba(255,255,255,0.08)',
                    background: owned ? `${badge.color}1f` : 'rgba(255,255,255,0.03)',
                    color: owned ? badge.color : 'rgba(255,255,255,0.2)',
                  }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <p className={`relative mt-3 font-display text-[13px] font-bold ${owned ? 'text-white' : 'text-white/35'}`}>
                  {tx(badge.name)}
                </p>
                <p className={`relative mt-1 text-[11.5px] leading-relaxed ${owned ? 'text-white/45' : 'text-white/20'}`}>
                  {tx(badge.desc)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}