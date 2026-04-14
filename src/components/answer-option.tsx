import { QuestionOption } from "@/types/quiz";

type AnswerOptionProps = {
  option: QuestionOption;
  isSelected: boolean;
  disabled?: boolean;
  onSelect: (archetype: QuestionOption["archetype"]) => void;
};

export function AnswerOption({ option, isSelected, disabled = false, onSelect }: AnswerOptionProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onSelect(option.archetype)}
      className={`tap-highlight court-ring w-full rounded-[24px] px-4 py-4 text-left transition duration-200 ${
        isSelected
          ? "bg-white text-slate-950 shadow-glow"
          : "screen-card text-white active:scale-[0.99]"
      } ${disabled ? "pointer-events-none opacity-80" : ""}`}
      aria-label={`${option.key}. ${option.text}`}
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
            isSelected ? "bg-orange-500 text-white" : "bg-white/10 text-slate-300"
          }`}
        >
          {option.key}
        </span>
        <span className="block text-base font-semibold leading-6">
          {option.text}
        </span>
      </div>
    </button>
  );
}
