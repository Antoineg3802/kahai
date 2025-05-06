import { useState } from "react";
import { useQuiz } from "../../hooks/useQuiz";
import { QuestionCard } from "./QuestionCard";
import type { Quiz, QuizTheme } from "../../types/quiz";
import { useNavigate } from "react-router-dom";

interface QuizCardProps {
  quiz: Quiz;
  theme: QuizTheme;
}

export const QuizCard = ({ quiz, theme }: QuizCardProps) => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | undefined>();
  const {
    currentQuestion,
    score,
    showExplanation,
    isFinished,
    handleAnswer,
    nextQuestion,
    totalQuestions
  } = useQuiz(quiz.questions, theme);

  const handleAnswerWithState = (isCorrect: boolean) => {
    setSelectedAnswer(isCorrect);
    handleAnswer(isCorrect);
  };

  const handleNext = () => {
    setSelectedAnswer(undefined);
    nextQuestion();
  };

  if (isFinished) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz terminé !</h2>
        <p className="text-xl mb-6">
          Votre score : {score}/{totalQuestions}
        </p>
        <button
          onClick={() => navigate("/results")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
        >
          Voir les résultats
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold capitalize">{theme}</h2>
        <div className="text-gray-600">
          Question {currentQuestion.index + 1}/{quiz.questions.length}
        </div>
      </div>
      <QuestionCard
        question={currentQuestion}
        onAnswer={handleAnswerWithState}
        showExplanation={showExplanation}
        onNext={handleNext}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}; 