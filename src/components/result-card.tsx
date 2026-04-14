"use client";

import Image from "next/image";
import { useState } from "react";
import { QuizResult } from "@/types/quiz";

type ResultCardProps = {
  result: QuizResult;
};

export function ResultCard({ result }: ResultCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <section className="share-frame relative overflow-hidden rounded-[24px] p-6 text-white [box-shadow:0_22px_52px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.15)]">
      <div className="absolute -right-8 top-8 h-28 w-28 rounded-full border border-white/20" />
      <div className="absolute bottom-4 left-4 h-16 w-16 rounded-full border border-white/10" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute right-[-18px] top-[74px] h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      <div className="relative space-y-5">
        <div className="grid grid-cols-[1fr_138px] items-start gap-5">
          <div className="space-y-2 pb-1">
            <p className="text-xs font-semibold tracking-[0.24em] text-white/70">
              球探报告
            </p>
            <h1 className="display-font text-[3.45rem] font-extrabold leading-[0.88] tracking-[0.02em] sm:text-[3.7rem]">
              {result.primary.name}
            </h1>
            <p className="max-w-[14rem] text-sm font-medium leading-6 text-orange-100/90">
              主模板球员：{result.primary.playerName}
            </p>
            <p className="text-[13px] font-medium text-white/68">
              副模板补充：{result.secondary.name}
            </p>
          </div>

          <div className="relative mt-3 w-full max-w-[138px] justify-self-end self-start">
            <div className="absolute inset-x-3 bottom-1 h-6 rounded-full bg-black/35 blur-xl" />
            <div className="relative overflow-hidden rounded-[22px] border border-white/12 bg-black/12 [box-shadow:0_14px_28px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-[12px]">
              {!imageFailed ? (
                <div className="relative flex aspect-[4/5.15] items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_50%)]">
                  <Image
                    src={result.primary.image}
                    alt={`${result.primary.playerName} 球员模板图片`}
                    fill
                    sizes="138px"
                    className="object-contain object-center p-1.5 scale-[1.26]"
                    onError={() => setImageFailed(true)}
                    priority
                  />
                </div>
              ) : (
                <div className="flex aspect-[4/5.25] flex-col items-center justify-center gap-2 bg-white/8 p-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white">
                    {result.primary.code}
                  </div>
                  <p className="text-sm font-semibold text-white">{result.primary.playerName}</p>
                  <p className="text-xs text-white/70">图片资源缺失时会显示这个占位状态</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="rounded-[22px] border border-white/15 bg-white/10 p-4 backdrop-blur-[12px]">
          <p className="text-base font-semibold leading-7 text-white/95">{result.primary.headline}</p>
        </div>

        <p className="text-sm leading-6 text-white/85">{result.conclusion}</p>

        <div className="grid grid-cols-2 gap-3 rounded-[22px] border border-white/15 bg-white/10 p-4 backdrop-blur-[12px]">
          <div>
            <p className="text-xs tracking-[0.18em] text-white/60">主模板</p>
            <p className="mt-1 text-lg font-semibold">{result.primary.name}</p>
            <p className="mt-1 text-xs text-white/70">{result.primary.playerName}</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.18em] text-white/60">副模板</p>
            <p className="mt-1 text-lg font-semibold">{result.secondary.name}</p>
            <p className="mt-1 text-xs text-white/70">{result.secondary.playerName}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5">
          {result.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/92 backdrop-blur-[10px]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
