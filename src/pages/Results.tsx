import { useEffect, useState } from "react";
import { Sidebar } from "../components/layout/Sidebar";

interface QuizResult {
  id: string;
  theme: string;
  score: number;
  totalQuestions: number;
  date: string;
}

export const Results = () => {
  const [results, setResults] = useState<QuizResult[]>([]);

  useEffect(() => {
    const storedResults = localStorage.getItem("quizResults");
    if (storedResults) {
      const parsedResults = JSON.parse(storedResults);
      setResults(parsedResults);
    }
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(date);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Résultats des Quiz</h1>
        
        {results.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun résultat disponible</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {results.map((result) => (
              <div
                key={result.id}
                className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      Quiz {result.theme}
                    </h2>
                    <p className="text-gray-500">{formatDate(result.date)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-green-600">
                      {result.score}/{result.totalQuestions}
                    </p>
                    <p className="text-sm text-gray-500">
                      {Math.round((result.score / result.totalQuestions) * 100)}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}; 