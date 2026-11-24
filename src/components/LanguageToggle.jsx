import React from 'react';
import { LANGS } from '@/lib/i18n';
import { useGame } from '@/context/GameProvider';

export default function LanguageToggle({ size = 'sm' }) {
  const { lang, setLang } = useGame();
  return (
    <div
      className="flex items-center gap-0.5 rounded-full border border-white/10 bg-white/5 p-0.5 backdrop-blur"
      role="group"
      aria-label="Language selector"
    >
      {LANGS.map((option) => {
        const active = option.code === lang;
        return (
          <button
            key={option.code}
            type="button"
            onClick={() => setLang(option.code)}
            aria-pressed={active}
            className={[
              'rounded-full font-semibold tracking-wide transition-all duration-300',
              size === 'sm' ? 'px-2.5 py-1 text-[11px]' : 'px-4 py-1.5 text-sm',
              active
                ? 'bg-gradient-to-r from-cyan-400 to-fuchsia-500 text-[#0a0a1a] shadow-[0_0_18px_-4px_rgba(56,231,224,0.8)]'
                : 'text-white/60 hover:text-white',
            ].join(' ')}
          >
            {option.short}
          </button>
        );
      })}
    </div>
  );
}