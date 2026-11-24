import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Coins, Medal, Settings, Trophy, User, Zap } from 'lucide-react';
import LanguageToggle from '@/components/LanguageToggle';
import MusicToggle from '@/components/MusicToggle';
import { useGame } from '@/context/GameProvider';

const links = [
  { to: '/profile', icon: User, key: 'nav_profile' },
  { to: '/medals', icon: Medal, key: 'nav_medals' },
  { to: '/ranking', icon: Trophy, key: 'nav_ranking' },
  { to: '/settings', icon: Settings, key: 'nav_settings' },
];

export default function TopBar() {
  const { t, lang, level, progress } = useGame();
  const location = useLocation();

  return (
    <header className="pt-safe sticky top-0 z-40 border-b border-white/5 bg-[#070716]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_22px_-6px_rgba(120,80,255,0.9)]">
            <span className="absolute inset-[2px] rounded-[10px] bg-[#0b0b1e]/85" />
            <Zap className="relative h-4 w-4 text-cyan-300" strokeWidth={2.4} />
          </span>
          <span className="hidden font-display text-[13px] font-extrabold uppercase tracking-[0.34em] text-white/90 sm:block">
            Cyberbide
          </span>
        </Link>

        <div className="ml-1 flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
          <span className="text-[10px] uppercase tracking-widest text-white/45">{t('level')}</span>
          <span className="font-display text-xs font-bold text-cyan-300">{level.level}</span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1">
          <Coins className="h-3.5 w-3.5 text-amber-300" />
          <span className="font-display text-xs font-bold text-amber-200">{progress.coins}</span>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <MusicToggle />
          <LanguageToggle />
          <nav className="hidden items-center gap-1 sm:flex">
            {links.map(({ to, icon: Icon, key }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  title={t(key)}
                  aria-label={t(key)}
                  className={`grid h-9 w-9 place-items-center rounded-xl border transition-all duration-300 ${
                    active
                      ? 'border-cyan-300/40 bg-cyan-300/15 text-cyan-200'
                      : 'border-white/10 bg-white/5 text-white/60 hover:border-white/25 hover:text-white'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <nav className="flex items-center justify-around border-t border-white/5 px-1 py-1 sm:hidden">
        {links.map(({ to, icon: Icon, key }) => {
          const active = location.pathname === to;
          return (
            <Link
              key={to}
              to={to}
              aria-label={t(key)}
              className={`flex min-h-[44px] flex-1 flex-col items-center justify-center gap-1 rounded-xl py-1.5 text-[10.5px] tracking-wide transition-colors ${
                active ? 'bg-cyan-300/10 text-cyan-200' : 'text-white/50'
              }`}
            >
              <Icon className="h-[18px] w-[18px]" />
              {t(key)}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}