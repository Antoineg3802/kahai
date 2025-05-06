export interface Answer {
  text: string;
  isCorrect: boolean;
}

export interface Question {
  question: string;
  answers: Answer[];
  explain: string;
}

export interface Quiz {
  theme: string;
  questions: Question[];
}

export interface QuizResult {
  quizId: string;
  score: number;
  totalQuestions: number;
  timestamp: number;
}

export type QuizTheme = "eco-design" | "green-hosting" | "digital-sobriety"; 