"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ResultCard } from "@/components/result-card";
import { SectionPanel } from "@/components/section-panel";
import { RESULT_SECTION_LABELS } from "@/data/result-map";
import { createEmptyAnswers, buildQuizResult, isQuizComplete } from "@/lib/scoring";
import { clearStoredAnswers, getStoredAnswers } from "@/lib/storage";
import { QuizAnswers } from "@/types/quiz";

export default function ResultPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswers>(createEmptyAnswers);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const stored = getStoredAnswers();
    if (!isQuizComplete(stored)) {
      router.replace("/quiz");
      return;
    }

    setAnswers(stored);
    setReady(true);
  }, [router]);

  const result = useMemo(() => buildQuizResult(answers), [answers]);

  const handleReset = () => {
    clearStoredAnswers();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(result.shareText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  if (!ready) {
    return null;
  }

  return (
    <PageShell>
      <section className="space-y-4">
        <ResultCard result={result} />

        <SectionPanel
          eyebrow={RESULT_SECTION_LABELS.primary}
          title={`${result.primary.name} · ${result.primary.playerName}`}
          className="page-rise"
        >
          <p className="text-sm leading-6 text-slate-300">
            {result.primary.headline}
          </p>
        </SectionPanel>

        <SectionPanel
          eyebrow={RESULT_SECTION_LABELS.secondary}
          title={`${result.secondary.name} · ${result.secondary.playerName}`}
        >
          <p className="text-sm leading-6 text-slate-300">
            {result.secondary.headline}
          </p>
        </SectionPanel>

        <SectionPanel eyebrow={RESULT_SECTION_LABELS.conclusion}>
          <p className="text-lg font-semibold leading-8 text-white">
            {result.conclusion}
          </p>
          <div className="flex flex-wrap gap-2">
            {result.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-full border border-white/8 px-3 py-1.5 text-xs font-semibold shadow-sm ${result.primary.softAccent}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </SectionPanel>

        <SectionPanel eyebrow={RESULT_SECTION_LABELS.scouting}>
          <p className="text-sm leading-7 text-slate-300">
            {result.primary.scoutingReport}
          </p>
        </SectionPanel>

        <SectionPanel eyebrow={RESULT_SECTION_LABELS.style}>
          <p className="text-sm leading-7 text-slate-300">
            {result.primary.playerStyle}
          </p>
        </SectionPanel>

        <SectionPanel eyebrow={RESULT_SECTION_LABELS.advice}>
          <p className="text-sm leading-7 text-slate-300">
            {result.primary.advice}
          </p>
        </SectionPanel>

        <div className="grid gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="tap-highlight flex min-h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-slate-950 shadow-card"
          >
            {copied ? "结果文案已复制" : "复制结果文案"}
          </button>
          <Link
            href="/quiz"
            onClick={handleReset}
            className="tap-highlight flex min-h-14 items-center justify-center rounded-full bg-orange-500 px-6 text-base font-semibold text-white shadow-glow"
          >
            再测一次
          </Link>
          <Link
            href="/"
            className="tap-highlight flex min-h-12 items-center justify-center rounded-full bg-white/8 px-6 text-sm font-semibold text-slate-200 shadow-card ring-1 ring-white/10"
          >
            返回首页
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
