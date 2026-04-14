"use client";

import { useRouter } from "next/navigation";
import { clearStoredAnswers } from "@/lib/storage";

export function StartQuizButton() {
  const router = useRouter();

  const handleStart = () => {
    clearStoredAnswers();
    router.push("/quiz");
  };

  return (
    <button
      type="button"
      onClick={handleStart}
      className="tap-highlight inline-flex min-h-16 w-full items-center justify-center rounded-full bg-orange-500 px-6 text-base font-semibold text-white shadow-glow transition hover:bg-orange-600"
    >
      开始测试
    </button>
  );
}
