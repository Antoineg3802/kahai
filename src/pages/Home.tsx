import { useState } from "react";
import { QuizCard } from "../components/quiz/QuizCard";
import { Sidebar } from "../components/layout/Sidebar";
import type { QuizTheme } from "../types/quiz";
import ecologyQuiz from "../data/quizzes/ecology.json";
import educationQuiz from "../data/quizzes/education.json";
import computingQuiz from "../data/quizzes/computing.json";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

const quizzes = {
  "eco-design": ecologyQuiz,
  "green-hosting": computingQuiz,
  "digital-sobriety": educationQuiz,
};

const themes = [
  {
    key: "eco-design",
    label: "Écoconception web",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description: "Découvrez comment concevoir des sites et applications web plus sobres et respectueux de l'environnement.",
  },
  {
    key: "green-hosting",
    label: "Hébergement vert",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80",
    description: "Testez vos connaissances sur les solutions d'hébergement écoresponsables et leur impact.",
  },
  {
    key: "digital-sobriety",
    label: "Sobriété numérique",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    description: "Apprenez à limiter l'empreinte environnementale du numérique au quotidien.",
  },
];

function normalizeQuiz(quiz: any, theme: QuizTheme) {
  return {
    theme,
    questions: quiz.questions.map((q: any) => ({
      ...q,
      answers: q.answers.map((a: any) => ({
        ...a,
        isCorrect: a.isCorrect ?? a.correct
      }))
    }))
  };
}

export const Home = () => {
  const [selectedTheme, setSelectedTheme] = useState<QuizTheme | null>(null);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-100">
      <Sidebar />
      <main className="flex-1 ml-64 p-8 flex items-center justify-center">
        {!selectedTheme ? (
          <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-center mb-8 text-green-700">Choisissez un thème de quiz</h1>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch w-full">
              {themes.map((theme) => (
                <Card
                  key={theme.key}
                  className="relative flex-1 min-w-[260px] max-w-xs cursor-pointer group overflow-hidden border-2 border-green-200 hover:border-green-500 transition-all shadow-2xl bg-white"
                  onClick={() => setSelectedTheme(theme.key as QuizTheme)}
                >
                  <CardHeader className="relative z-10 flex flex-col items-center justify-center pt-8 pb-4">
                    <CardTitle className="text-2xl font-bold text-green-900 drop-shadow-lg">{theme.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10 flex flex-col items-center pb-8">
                    <CardDescription className="text-green-800 text-center font-medium drop-shadow">
                      {theme.description}
                    </CardDescription>
                  </CardContent>
                </Card>
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
            <QuizCard quiz={normalizeQuiz(quizzes[selectedTheme], selectedTheme)} theme={selectedTheme} />
          </div>
        )}
      </main>
    </div>
  );
}; 