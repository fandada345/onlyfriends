import { PLAYERS } from "@/data/players";
import { QUESTIONS } from "@/data/questions";
import { RESULT_PRIORITY } from "@/data/result-map";
import { ArchetypeCode, QuizAnswers, QuizResult } from "@/types/quiz";

export const createEmptyAnswers = (): QuizAnswers =>
  Array.from({ length: QUESTIONS.length }, () => null);

export const isQuizComplete = (answers: QuizAnswers) =>
  answers.length === QUESTIONS.length && answers.every(Boolean);

export const calculateScores = (answers: QuizAnswers) => {
  const scores: Record<ArchetypeCode, number> = {
    P: 0,
    D: 0,
    S: 0,
    O: 0,
    F: 0,
    W: 0,
  };

  answers.forEach((answer) => {
    if (answer) {
      scores[answer] += 1;
    }
  });

  return scores;
};

export const getSortedArchetypes = (scores: Record<ArchetypeCode, number>) =>
  [...RESULT_PRIORITY].sort((left, right) => {
    const scoreDiff = scores[right] - scores[left];
    if (scoreDiff !== 0) {
      return scoreDiff;
    }

    return RESULT_PRIORITY.indexOf(left) - RESULT_PRIORITY.indexOf(right);
  });

export const buildQuizResult = (answers: QuizAnswers): QuizResult => {
  const scores = calculateScores(answers);
  const [primaryCode, secondaryCode] = getSortedArchetypes(scores);
  const primary = PLAYERS[primaryCode];
  const secondary = PLAYERS[secondaryCode];
  const conclusion = `你的主模板是${primary.name}，副模板补充了${secondary.name}的比赛特质。整体来看，你既有${primary.headline.replace("。", "")}的核心气质，也带着${secondary.headline.replace("。", "")}的补充层次。`;
  const tags = Array.from(new Set([...primary.tags, ...secondary.tags])).slice(0, 5);
  const shareText = [
    "球探报告测试结果",
    `主模板：${primary.name}`,
    `副模板：${secondary.name}`,
    `球员模板：${primary.playerName}`,
    "",
    conclusion,
    "",
    `核心评语：${primary.headline}`,
    `标签：${tags.map((tag) => `#${tag}`).join(" ")}`,
  ].join("\n");

  return {
    primary,
    secondary,
    conclusion,
    tags,
    scores,
    shareText,
  };
};
