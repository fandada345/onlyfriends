import { ArchetypeCode } from "@/types/quiz";

export const RESULT_PRIORITY: ArchetypeCode[] = ["P", "D", "S", "O", "F", "W"];

export const RESULT_SECTION_LABELS = {
  primary: "主模板",
  secondary: "副模板",
  conclusion: "综合结论",
  scouting: "球探观察",
  style: "比赛风格",
  advice: "发展建议"
} as const;
