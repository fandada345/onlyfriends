"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnswerOption } from "@/components/answer-option";
import { PageShell } from "@/components/page-shell";
import { ProgressBar } from "@/components/progress-bar";
import { QUESTIONS } from "@/data/questions";
import { createEmptyAnswers, isQuizComplete } from "@/lib/scoring";
import { getStoredAnswers, storeAnswers } from "@/lib/storage";
import { ArchetypeCode, QuizAnswers } from "@/types/quiz";

export default function QuizPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState<QuizAnswers>(createEmptyAnswers);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const stored = getStoredAnswers();
    setAnswers(stored);

    const firstUnanswered = stored.findIndex((item) => item === null);
    setCurrentIndex(firstUnanswered === -1 ? QUESTIONS.length - 1 : firstUnanswered);
    setIsReady(true);
  }, []);

  const currentQuestion = QUESTIONS[currentIndex];
  const currentAnswer = answers[currentIndex];

  const answeredCount = useMemo(
    () => answers.filter(Boolean).length,
    [answers]
  );

  const handleSelect = (archetype: ArchetypeCode) => {
    if (isTransitioning) {
      return;
    }

    setIsTransitioning(true);
    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = archetype;
    setAnswers(nextAnswers);
    storeAnswers(nextAnswers);

    if (currentIndex < QUESTIONS.length - 1) {
      window.setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setIsTransitioning(false);
      }, 170);
      return;
    }

    if (isQuizComplete(nextAnswers)) {
      window.setTimeout(() => {
        router.push("/result");
      }, 180);
      return;
    }

    setIsTransitioning(false);
  };

  const goPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goNextIncomplete = () => {
    const firstUnanswered = answers.findIndex((item) => item === null);
    if (firstUnanswered >= 0) {
      setCurrentIndex(firstUnanswered);
      return;
    }

    router.push("/result");
  };

  if (!isReady) {
    return null;
  }

  return (
    <PageShell>
      <section className="space-y-4">
        <div className="court-card page-rise rounded-[28px] p-4">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="text-[11px] font-semibold tracking-[0.22em] text-slate-400">
                当前进度
              </p>
              <p className="mt-1 text-xl font-semibold text-white">
                {currentQuestion.id} <span className="text-sm font-medium text-slate-400">/ {QUESTIONS.length}</span>
              </p>
            </div>
            <div className="rounded-full bg-white/8 px-3 py-1.5 text-xs font-medium text-slate-300 ring-1 ring-white/10">
              已完成 {answeredCount} 题
            </div>
          </div>
          <ProgressBar current={answeredCount} total={QUESTIONS.length} />
        </div>

        <div key={currentQuestion.id} className="court-card court-ring float-in rounded-[32px] p-5">
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm font-medium text-slate-400">
                <span className="rounded-full bg-orange-500/12 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-orange-300">
                  当前题目
                </span>
                <span>{currentQuestion.id} / {QUESTIONS.length}</span>
              </div>
              <h1 className="text-balance text-2xl font-semibold leading-9 text-white">
                {currentQuestion.title}
              </h1>
            </div>

            <div className="space-y-3">
              {currentQuestion.options.map((option) => (
                <AnswerOption
                  key={`${currentQuestion.id}-${option.key}`}
                  option={option}
                  isSelected={currentAnswer === option.archetype}
                  disabled={isTransitioning}
                  onSelect={handleSelect}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={goPrevious}
            disabled={currentIndex === 0}
            className="tap-highlight flex min-h-12 flex-1 items-center justify-center rounded-full bg-white/8 px-4 text-sm font-semibold text-slate-200 shadow-card ring-1 ring-white/10 disabled:cursor-not-allowed disabled:opacity-45"
          >
            上一题
          </button>
          <button
            type="button"
            onClick={goNextIncomplete}
            className="tap-highlight flex min-h-12 flex-1 items-center justify-center rounded-full bg-white px-4 text-sm font-semibold text-slate-950 shadow-card"
          >
            {isQuizComplete(answers) ? "查看结果" : "继续作答"}
          </button>
        </div>
      </section>
    </PageShell>
  );
}
