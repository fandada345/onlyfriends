import { PageShell } from "@/components/page-shell";
import { StartQuizButton } from "@/components/start-quiz-button";

export default function HomePage() {
  return (
    <PageShell
      accent={
        <div className="mb-4 flex items-center justify-between px-1">
          <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-300 ring-1 ring-white/10">
            球探报告
          </span>
          <span className="text-xs font-medium text-slate-400">15 题完成评估</span>
        </div>
      }
    >
      <section className="court-card court-ring page-rise relative overflow-hidden rounded-[32px] px-5 py-7">
        <div className="absolute right-0 top-0 h-28 w-28 translate-x-6 -translate-y-6 rounded-full bg-orange-500/25 blur-2xl" />
        <div className="absolute bottom-0 left-0 h-32 w-32 -translate-x-8 translate-y-8 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="relative space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.24em] text-orange-300">
              球探评估
            </p>
            <h1 className="display-font text-balance text-[3.3rem] leading-[0.9] text-white">
              测出你的
              <span className="block text-orange-400">球员模板</span>
            </h1>
            <p className="text-balance text-sm leading-6 text-slate-300">
              15 道快问，评估你的比赛气质、回合选择和战术定位。完成后立即生成专属球探报告，看看你更接近哪位球员模板。
            </p>
          </div>

          <div className="grid gap-3 rounded-[28px] bg-white/6 px-4 py-4 text-white ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-[0.2em] text-orange-200">模板匹配测试</span>
              <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">约 2 分钟</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="rounded-2xl bg-black/15 px-2 py-3">
                <p className="text-lg font-bold text-white">15</p>
                <p className="text-[11px] text-slate-300">道题</p>
              </div>
              <div className="rounded-2xl bg-black/15 px-2 py-3">
                <p className="text-lg font-bold text-white">6</p>
                <p className="text-[11px] text-slate-300">种模板</p>
              </div>
              <div className="rounded-2xl bg-black/15 px-2 py-3">
                <p className="text-lg font-bold text-white">1</p>
                <p className="text-[11px] text-slate-300">份报告</p>
              </div>
            </div>
          </div>

          <StartQuizButton />
        </div>
      </section>
    </PageShell>
  );
}
