import { Button } from "../ui/button";
import { getRecentQuizResults } from "../../utils/storage";

interface ResultsCardProps {
  score: number;
  totalQuestions: number;
  onReset: () => void;
}

export const ResultsCard = ({ score, totalQuestions, onReset }: ResultsCardProps) => {
  const recentResults = getRecentQuizResults();
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Résultats du Quiz</h2>
      
      <div className="mb-6">
        <p className="text-lg">
          Score: {score}/{totalQuestions} ({percentage}%)
        </p>
      </div>

      {recentResults.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Résultats récents (dernière heure)</h3>
          <div className="space-y-2">
            {recentResults.map((result, index) => (
              <div key={index} className="p-3 bg-gray-50 rounded">
                <p>Quiz: {result.quizId}</p>
                <p>Score: {result.score}/{result.totalQuestions}</p>
                <p className="text-sm text-gray-500">
                  {new Date(result.timestamp).toLocaleTimeString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <Button onClick={onReset} className="w-full">
        Recommencer
      </Button>
    </div>
  );
}; 