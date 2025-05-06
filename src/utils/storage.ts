import type { QuizResult } from '../types/quiz';

const STORAGE_KEY = 'kahai_quiz_results';

export const saveQuizResult = (result: QuizResult): void => {
  const results = getQuizResults();
  results.push(result);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
};

export const getQuizResults = (): QuizResult[] => {
  const results = localStorage.getItem(STORAGE_KEY);
  return results ? JSON.parse(results) : [];
};

export const getRecentQuizResults = (hours: number = 1): QuizResult[] => {
  const results = getQuizResults();
  const oneHourAgo = Date.now() - (hours * 60 * 60 * 1000);
  return results.filter(result => result.timestamp > oneHourAgo);
}; 