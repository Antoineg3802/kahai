import { Button } from "../ui/button";
import type { Question } from "../../types/quiz";

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  showExplanation: boolean;
  onNext: () => void;
  selectedAnswer?: boolean;
}

export const QuestionCard = ({
  question,
  onAnswer,
  showExplanation,
  onNext,
  selectedAnswer,
}: QuestionCardProps) => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">{question.question}</h2>
      
      <div className="space-y-3">
        {question.answers.map((answer, index) => {
          const isSelected = showExplanation && selectedAnswer === answer.correct;
          const isCorrect = showExplanation && answer.correct;
          
          return (
            <Button
              key={index}
              variant={showExplanation ? (isCorrect ? "default" : "outline") : "outline"}
              className={`w-full justify-start cursor-pointer ${
                showExplanation
                  ? isCorrect
                    ? "bg-green-500 hover:bg-green-600"
                    : isSelected
                    ? "bg-red-500 hover:bg-red-600 text-white"
                    : ""
                  : ""
              }`}
              onClick={() => onAnswer(answer.correct)}
              disabled={showExplanation}
            >
              {answer.text}
              {showExplanation && isCorrect && (
                <span className="ml-2">✓</span>
              )}
            </Button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="mb-4">
            <p className="font-semibold text-blue-800">
              {selectedAnswer ? "Bonne réponse !" : "Mauvaise réponse"}
            </p>
            <p className="text-blue-800 mt-2">{question.explain}</p>
          </div>
          <Button
            className="mt-4"
            onClick={onNext}
          >
            Question suivante
          </Button>
        </div>
      )}
    </div>
  );
}; 