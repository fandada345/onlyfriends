type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = Math.max(0, Math.min(100, (current / total) * 100));

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[11px] font-semibold tracking-[0.22em] text-slate-400">
        <span>完成度</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="h-3.5 overflow-hidden rounded-full bg-white/10 ring-1 ring-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-orange-400 via-amber-300 to-sky-400 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
