import { useState } from "react";
import { QuizCard } from "../components/quiz/QuizCard";
import { Sidebar } from "../components/layout/Sidebar";
import type { QuizTheme } from "../types/quiz";
import ecologyQuiz from "../data/quizzes/ecology.json";
import educationQuiz from "../data/quizzes/education.json";
import computingQuiz from "../data/quizzes/computing.json";

const quizzes = {
  ecology: ecologyQuiz,
  education: educationQuiz,
  computing: computingQuiz,
};

export const Home = () => {
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        {!selectedTheme ? (
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">KAHAI Quiz</h1>
            <p className="text-center text-gray-600 mb-8">
              Testez vos connaissances sur l'éducation et l'écologie dans le domaine informatique
            </p>
            <div className="grid gap-4">
              {Object.keys(quizzes).map((theme) => (
                <button
                  key={theme}
                  onClick={() => setSelectedTheme(theme as QuizTheme)}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-semibold capitalize">{theme}</h2>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={() => setSelectedTheme(null)}
              className="mb-6 text-blue-600 hover:text-blue-800"
            >
              ← Retour aux thèmes
            </button>
            <QuizCard quiz={quizzes[selectedTheme]} theme={selectedTheme} />
          </div>
        )}
      </main>
    </div>
  );
}; 