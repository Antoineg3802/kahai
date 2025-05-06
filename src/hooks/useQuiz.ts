import { useState, useCallback, useMemo } from 'react';
import type { Question } from '../types/quiz';

const shuffleArray = <T,>(array: T[]): T[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

export const useQuiz = (questions: Question[], theme: string) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const shuffledQuestions = useMemo(() => {
    return questions.map(q => ({
      ...q,
      answers: shuffleArray(q.answers)
    }));
  }, [questions]);

  const currentQuestion = useMemo(() => ({
    ...shuffledQuestions[currentIndex],
    index: currentIndex
  }), [shuffledQuestions, currentIndex]);

  const handleAnswer = useCallback((isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    setShowExplanation(true);
  }, []);

  const nextQuestion = useCallback(() => {
    if (currentIndex === questions.length - 1) {
      setIsFinished(true);
      // Stocker le résultat
      const result = {
        id: Date.now().toString(),
        theme,
        score,
        totalQuestions: questions.length,
        date: new Date().toISOString()
      };

      const storedResults = localStorage.getItem("quizResults");
      const results = storedResults ? JSON.parse(storedResults) : [];
      results.unshift(result); // Ajouter au début du tableau
      localStorage.setItem("quizResults", JSON.stringify(results));
    } else {
      setCurrentIndex(prev => prev + 1);
      setShowExplanation(false);
    }
  }, [currentIndex, questions.length, theme, score]);

  const resetQuiz = useCallback(() => {
    setCurrentIndex(0);
    setScore(0);
    setShowExplanation(false);
    setIsFinished(false);
  }, []);

  return {
    currentQuestion,
    score,
    showExplanation,
    isFinished,
    handleAnswer,
    nextQuestion,
    resetQuiz,
    totalQuestions: questions.length
  };
}; 