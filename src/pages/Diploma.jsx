import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, GraduationCap, Printer } from 'lucide-react';
import TopBar from '@/components/TopBar';
import DiplomaCard from '@/components/DiplomaCard';
import { useGame } from '@/context/GameProvider';
import { COURSE_TOTALS, isCourseComplete } from '@/lib/course';

export default function Diploma() {
  const { t, progress, completedCount } = useGame();
  const captureRef = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const complete = isCourseComplete(progress);
  const alias = progress.alias?.trim() || t('guest');
  const issuedAt = progress.diplomaDate || progress.history[0]?.date || new Date().toISOString();

  const download = async () => {
    setBusy(true);
    setError('');
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import('html2canvas'),
        import('jspdf'),
      ]);
      const canvas = await html2canvas(captureRef.current, {
        scale: 2,
        backgroundColor: '#070716',
        useCORS: true,
        logging: false,
      });
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const pageW = pdf.internal.pageSize.getWidth();
      const pageH = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const ratio = Math.min((pageW - margin * 2) / canvas.width, (pageH - margin * 2) / canvas.height);
      const width = canvas.width * ratio;
      const height = canvas.height * ratio;
      pdf.setFillColor(7, 7, 22);
      pdf.rect(0, 0, pageW, pageH, 'F');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', (pageW - width) / 2, (pageH - height) / 2, width, height);
      const slug =
        alias
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '') || 'cyberbide';
      pdf.save(`diploma-cyberbide-${slug}.pdf`);
    } catch (e) {
      setError(t('diploma_error'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="diploma-shell min-h-screen text-white print:bg-white">
      <div className="no-print">
        <TopBar />
      </div>

      <div className="mx-auto max-w-3xl px-4 pb-20 pt-8 sm:px-6">
        <Link
          to="/"
          className="no-print inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 transition-colors hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t('back_map')}
        </Link>

        {!complete ? (
          <div className="mt-8 rounded-[26px] border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
            <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5">
              <GraduationCap className="h-6 w-6 text-white/30" />
            </span>
            <h1 className="mt-4 font-display text-xl font-bold text-white">{t('diploma_locked_title')}</h1>
            <p className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-white/50">
              {t('diploma_locked_hint')}
            </p>
            <div className="mx-auto mt-5 max-w-xs">
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 transition-all duration-700"
                  style={{ width: `${Math.max((completedCount / COURSE_TOTALS.missions) * 100, 3)}%` }}
                />
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-widest text-white/35">
                {completedCount}/{COURSE_TOTALS.missions} {t('diploma_missions')}
              </p>
            </div>
            <Link
              to="/"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a]"
            >
              {t('nav_map')}
            </Link>
          </div>
        ) : (
          <>
            <div className="no-print mt-5 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="font-display text-2xl font-extrabold text-white sm:text-3xl">{t('diploma_title')}</h1>
                <p className="mt-1 text-[13px] text-white/50">{t('diploma_unlocked_desc')}</p>
              </div>
            </div>

            <div ref={captureRef} className="mt-6">
              <DiplomaCard alias={alias} issuedAt={issuedAt} missions={COURSE_TOTALS.missions} />
            </div>

            <div className="no-print mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={download}
                disabled={busy}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-6 py-3.5 font-display text-[13px] font-bold uppercase tracking-wider text-[#0a0a1a] transition-opacity disabled:opacity-60"
              >
                <Download className="h-4 w-4" />
                {busy ? t('diploma_preparing') : t('diploma_download')}
              </button>
              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-display text-[13px] font-semibold uppercase tracking-wider text-white/85 transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <Printer className="h-4 w-4" />
                {t('diploma_print')}
              </button>
            </div>

            {error && <p className="no-print mt-3 text-[12.5px] text-rose-300">{error}</p>}
          </>
        )}
      </div>
    </div>
  );
}