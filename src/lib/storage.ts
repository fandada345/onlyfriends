"use client";

import { createEmptyAnswers } from "@/lib/scoring";
import { QuizAnswers } from "@/types/quiz";

const STORAGE_KEY = "scout-report-answers";

export const getStoredAnswers = (): QuizAnswers => {
  if (typeof window === "undefined") {
    return createEmptyAnswers();
  }

  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return createEmptyAnswers();
  }

  try {
    const parsed = JSON.parse(raw) as QuizAnswers;
    return Array.isArray(parsed) ? parsed : createEmptyAnswers();
  } catch {
    return createEmptyAnswers();
  }
};

export const storeAnswers = (answers: QuizAnswers) => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
};

export const clearStoredAnswers = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(STORAGE_KEY);
};
