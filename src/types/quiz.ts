export type ArchetypeCode = "P" | "D" | "S" | "O" | "F" | "W";

export type QuestionOption = {
  key: string;
  text: string;
  archetype: ArchetypeCode;
};

export type Question = {
  id: number;
  title: string;
  options: QuestionOption[];
};

export type ArchetypeProfile = {
  code: ArchetypeCode;
  name: string;
  playerName: string;
  image: string;
  headline: string;
  tags: string[];
  scoutingReport: string;
  playerStyle: string;
  advice: string;
  accent: string;
  softAccent: string;
};

export type QuizAnswers = Array<ArchetypeCode | null>;

export type QuizResult = {
  primary: ArchetypeProfile;
  secondary: ArchetypeProfile;
  conclusion: string;
  tags: string[];
  scores: Record<ArchetypeCode, number>;
  shareText: string;
};
