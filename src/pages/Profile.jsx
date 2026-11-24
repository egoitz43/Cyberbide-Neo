import React, { useState } from 'react';
import { Coins, Save, Sparkles, Trophy, Zap } from 'lucide-react';
import TopBar from '@/components/TopBar';
import { Image } from '@/components/ui/image';
import { useGame } from '@/context/GameProvider';
import { AVATARS, badgeById } from '@/lib/game';
import { WORLDS, findMission } from '@/data/worlds';

export default function Profile() {
  const { t, tx, progress, level, completedCount, setAlias, setAvatar, isWorldUnlocked } = useGame();
  const [name, setName] = useState(progress.alias);
  const [saved, setSaved] = useState(false);

  const portraits = WORLDS.reduce((acc, world) => {
    acc[world.character.name.toLowerCase()] = world.portrait;
    return acc;
  }, {});

  const saveName = () => {
    setAlias(name.trim().slice(0, 24));
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const stats = [
    { label: t('level'), value: level.level, icon: Zap, color: '#67E8F9' },
    { label: t('xp'), value: progress.xp, icon: Sparkles, color: '#A78BFA' },
    { label: t('coins'), value: progress.coins, icon: Coins, color: '#FFC85C' },
    { label: t('missions'), value: completedCount, icon: Trophy, color: '#4ADE80' },
  ];

  return (
    <div className="min-h-screen text-white">
      <TopBar />
      <div className="mx-auto max-w-4xl px-5 py-10 sm:px-6">
        <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{t('profile_title')}</h1>

        <div className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.04] p-5 sm:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <div
              className="relative h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-white/15"
              style={{ boxShadow: '0 20px 50px -28px rgba(120,220,255,0.9)' }}
            >
              <Image
                src={portraits[progress.avatar] || portraits.nara}
                alt={progress.avatar}
                className="h-full w-full object-cover"
                fittingType="fill"
              />
            </div>
            <div className="flex-1">
              <p className="font-display text-xl font-bold">{progress.alias || t('guest')}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.16em] text-white/35">
                {t('level')} {level.level} · {level.current}/{level.needed} XP
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400"
                  style={{ width: `${Math.max(level.percent, 3)}%` }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-4">
            {stats.map(({ label, value, icon: Icon, color }) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-3.5">
                <Icon className="h-4 w-4" style={{ color }} />
                <p className="mt-2 font-display text-lg font-bold text-white">{value}</p>
                <p className="text-[10.5px] uppercase tracking-[0.16em] text-white/35">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
            <label htmlFor="alias" className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
              {t('alias')}
            </label>
            <div className="mt-2 flex gap-2">
              <input
                id="alias"
                value={name}
                maxLength={24}
                onChange={(event) => setName(event.target.value)}
                placeholder={t('guest')}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2.5 text-sm text-white placeholder:text-white/25 focus:border-cyan-300/50 focus:outline-none"
              />
              <button
                type="button"
                onClick={saveName}
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white/90 px-4 py-2.5 font-display text-[12px] font-bold text-[#0a0a1a]"
              >
                <Save className="h-3.5 w-3.5" />
                {saved ? t('saved') : t('save')}
              </button>
            </div>
            <p className="mt-2 text-[11.5px] leading-relaxed text-white/35">{t('alias_hint')}</p>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">{t('avatar')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {AVATARS.map((avatar) => (
                <button
                  key={avatar.id}
                  type="button"
                  onClick={() => setAvatar(avatar.id)}
                  aria-label={avatar.id}
                  className={`h-12 w-12 overflow-hidden rounded-2xl border transition-all ${
                    progress.avatar === avatar.id
                      ? 'border-cyan-300 ring-2 ring-cyan-300/30'
                      : 'border-white/10 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={portraits[avatar.id]}
                    alt={avatar.id}
                    className="h-full w-full object-cover"
                    fittingType="fill"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">{t('worlds_unlocked')}</p>
            <p className="mt-2 font-display text-2xl font-extrabold text-white">
              {WORLDS.filter((_, index) => isWorldUnlocked(index)).length}
              <span className="text-base font-semibold text-white/30"> / {WORLDS.length}</span>
            </p>
            <div className="mt-3 space-y-1.5">
              {WORLDS.map((world, index) => (
                <div key={world.id} className="flex items-center gap-2 text-[12px]">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: isWorldUnlocked(index) ? world.accent : 'rgba(255,255,255,0.15)' }}
                  />
                  <span className={isWorldUnlocked(index) ? 'text-white/70' : 'text-white/30'}>{tx(world.title)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">{t('nav_medals')}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {progress.badges.length === 0 && <p className="text-[12.5px] text-white/35">{t('no_badges')}</p>}
              {progress.badges.slice(-10).map((id) => {
                const badge = badgeById(id);
                if (!badge) return null;
                return (
                  <span
                    key={id}
                    title={tx(badge.name)}
                    className="rounded-xl border px-2.5 py-1 text-[11px] font-semibold"
                    style={{ borderColor: `${badge.color}55`, color: badge.color, background: `${badge.color}14` }}
                  >
                    {tx(badge.name)}
                  </span>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">{t('history')}</p>
          {progress.history.length === 0 ? (
            <p className="mt-3 text-[13px] text-white/40">{t('no_history')}</p>
          ) : (
            <div className="mt-3 divide-y divide-white/5">
              {progress.history.slice(0, 8).map((entry, index) => {
                const found = findMission(entry.missionId);
                return (
                  <div key={`${entry.missionId}-${entry.date}-${index}`} className="flex items-center justify-between py-2.5">
                    <div className="min-w-0 pr-3">
                      <p className="truncate text-[13px] text-white/80">
                        {found ? tx(found.mission.title) : entry.missionId}
                      </p>
                      <p className="text-[11px] text-white/30">
                        {new Date(entry.date).toLocaleDateString()} · {progress.completed[entry.missionId]?.plays || 1}×
                      </p>
                    </div>
                    <span className="shrink-0 font-display text-[13px] font-bold text-cyan-300">
                      {entry.score}/{entry.max}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}