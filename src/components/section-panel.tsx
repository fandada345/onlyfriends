type SectionPanelProps = {
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export function SectionPanel({ eyebrow, title, children, className = "" }: SectionPanelProps) {
  return (
    <div className={`court-card rounded-[28px] p-5 ${className}`.trim()}>
      <div className="space-y-3">
        <p className="text-xs font-semibold tracking-[0.22em] text-slate-400">
          {eyebrow}
        </p>
        {title ? <h2 className="text-2xl font-semibold text-white">{title}</h2> : null}
        {children}
      </div>
    </div>
  );
}
