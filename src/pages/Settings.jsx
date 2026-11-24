import React, { useState } from 'react';
import { Check, Languages, Trash2 } from 'lucide-react';
import TopBar from '@/components/TopBar';
import { useGame } from '@/context/GameProvider';
import { LANGS } from '@/lib/i18n';

export default function Settings() {
  const { t, lang, setLang, resetProgress } = useGame();
  const [confirming, setConfirming] = useState(false);

  return (
    <div className="min-h-screen text-white">
      <TopBar />
      <div className="mx-auto max-w-2xl px-5 py-10 sm:px-6">
        <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{t('settings_title')}</h1>

        <section className="mt-6 rounded-[26px] border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-cyan-300" />
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white/70">{t('language')}</h2>
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-white/40">{t('language_desc')}</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {LANGS.map((option) => {
              const active = option.code === lang;
              return (
                <button
                  key={option.code}
                  type="button"
                  onClick={() => setLang(option.code)}
                  className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition-all ${
                    active
                      ? 'border-cyan-300/50 bg-cyan-300/10'
                      : 'border-white/10 bg-white/[0.03] hover:border-white/25'
                  }`}
                >
                  <div>
                    <p className="font-display text-sm font-bold text-white">{option.label}</p>
                    <p className="text-[11px] uppercase tracking-[0.18em] text-white/35">{option.short}</p>
                  </div>
                  {active && <Check className="h-4 w-4 text-cyan-300" />}
                </button>
              );
            })}
          </div>
        </section>

        <section className="mt-4 rounded-[26px] border border-rose-400/20 bg-rose-400/[0.05] p-5">
          <div className="flex items-center gap-2">
            <Trash2 className="h-4 w-4 text-rose-300" />
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-rose-200/80">
              {t('reset_progress')}
            </h2>
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-white/40">{t('reset_warning')}</p>
          {!confirming ? (
            <button
              type="button"
              data-testid="reset-open"
              onClick={() => setConfirming(true)}
              className="mt-4 rounded-xl border border-rose-400/40 px-4 py-2.5 font-display text-[12px] font-bold uppercase tracking-wider text-rose-200 transition-colors hover:bg-rose-400/10"
            >
              {t('reset_progress')}
            </button>
          ) : (
            <div className="mt-4 flex flex-wrap gap-2">
              <button
                type="button"
                data-testid="reset-confirm"
                onClick={() => {
                  resetProgress();
                  setConfirming(false);
                }}
                className="rounded-xl bg-rose-500 px-4 py-2.5 font-display text-[12px] font-bold uppercase tracking-wider text-white"
              >
                {t('confirm')}
              </button>
              <button
                type="button"
                onClick={() => setConfirming(false)}
                className="rounded-xl border border-white/15 px-4 py-2.5 font-display text-[12px] font-semibold uppercase tracking-wider text-white/60"
              >
                {t('cancel')}
              </button>
            </div>
          )}
        </section>

        <p className="mt-6 text-center text-[11.5px] text-white/25">{t('progress_note')}</p>
      </div>
    </div>
  );
}