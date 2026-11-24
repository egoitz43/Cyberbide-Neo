import React, { useState } from 'react';
import { Check, Flag, ShieldCheck } from 'lucide-react';
import { useGame } from '@/context/GameProvider';
import StepFeedback from '@/components/mission/StepFeedback';

const rules = [
  { id: 'length', test: (v) => v.length >= 12 },
  { id: 'upper', test: (v) => /[A-Z]/.test(v) },
  { id: 'lower', test: (v) => /[a-z]/.test(v) },
  { id: 'number', test: (v) => /[0-9]/.test(v) },
  { id: 'symbol', test: (v) => /[^A-Za-z0-9]/.test(v) },
];

const ruleLabels = {
  length: { es: '12 caracteres o más', eu: '12 karaktere edo gehiago' },
  upper: { es: 'Al menos una mayúscula', eu: 'Gutxienez maiuskula bat' },
  lower: { es: 'Al menos una minúscula', eu: 'Gutxienez minuskula bat' },
  number: { es: 'Al menos un número', eu: 'Gutxienez zenbaki bat' },
  symbol: { es: 'Al menos un símbolo (!, #, -…)', eu: 'Gutxienez sinbolo bat (!, #, -…)' },
};

export default function PasswordStep({ step, onDone, isLast }) {
  const { t, tx, lang } = useGame();
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);

  const passed = rules.filter((rule) => rule.test(value));
  const allPassed = passed.length === rules.length;
  const earned = checked ? Math.round((passed.length / rules.length) * step.points) : 0;

  return (
    <div>
      <h3 className="font-display text-lg font-bold leading-snug text-white sm:text-xl">{tx(step.prompt)}</h3>

      <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40" htmlFor="pass">
          {t('type_password')}
        </label>
        <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c0c20] px-3">
          <ShieldCheck className="h-4 w-4 shrink-0 text-cyan-300/70" />
          <input
            id="pass"
            data-testid="password-input"
            type="text"
            value={value}
            disabled={checked}
            onChange={(event) => setValue(event.target.value)}
            autoComplete="off"
            spellCheck={false}
            placeholder="Ej: Rio-Azul-Cobalto-9!"
            className="w-full bg-transparent py-3 font-mono text-sm text-white placeholder:text-white/25 focus:outline-none"
          />
        </div>

        <ul className="mt-4 grid gap-1.5 sm:grid-cols-2">
          {rules.map((rule) => {
            const ok = rule.test(value);
            return (
              <li
                key={rule.id}
                className={`flex items-center gap-2 text-[12px] ${ok ? 'text-emerald-300' : 'text-white/40'}`}
              >
                <span
                  className={`grid h-4 w-4 place-items-center rounded-full border ${
                    ok ? 'border-emerald-400 bg-emerald-400/20' : 'border-white/20'
                  }`}
                >
                  {ok && <Check className="h-3 w-3" strokeWidth={3} />}
                </span>
                {lang === 'eu' ? ruleLabels[rule.id].eu : ruleLabels[rule.id].es}
              </li>
            );
          })}
        </ul>
      </div>

      {!checked && (
        <button
          type="button"
          data-testid="check"
          disabled={!allPassed}
          onClick={() => setChecked(true)}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a] transition-opacity disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Flag className="h-4 w-4" />
          {t('check')}
        </button>
      )}

      {checked && (
        <StepFeedback
          tone="good"
          title={t('correct')}
          explain={step.explain}
          earned={earned}
          onNext={() => onDone(earned)}
          nextLabel={isLast ? t('finish') : t('next')}
        />
      )}
    </div>
  );
}