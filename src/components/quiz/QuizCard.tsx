import { useState } from "react";
import { useQuiz } from "../../hooks/useQuiz";
import { QuestionCard } from "./QuestionCard";
import type { Quiz, QuizTheme } from "../../types/quiz";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

interface QuizCardProps {
  quiz: Quiz;
  theme: QuizTheme;
}

export const QuizCard = ({ quiz, theme }: QuizCardProps) => {
  const navigate = useNavigate();
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | undefined>();
  const [userAnswers, setUserAnswers] = useState<{ question: string; answer: string; isCorrect: boolean }[]>([]);
  const {
    currentQuestion,
    score,
    showExplanation,
    isFinished,
    handleAnswer,
    nextQuestion,
    totalQuestions
  } = useQuiz(quiz.questions, theme);

  const handleAnswerWithState = (isCorrect: boolean, answerText: string) => {
    setSelectedAnswer(isCorrect);
    handleAnswer(isCorrect);
    setUserAnswers(prev => [...prev, {
      question: currentQuestion.question,
      answer: answerText,
      isCorrect
    }]);
  };

  const handleNext = () => {
    setSelectedAnswer(undefined);
    nextQuestion();
  };

  if (isFinished) {
    const handleDownload = () => {
      const doc = new jsPDF();
      
      // En-tête
      doc.setFontSize(24);
      doc.setTextColor(34, 197, 94); // Vert
      doc.text("KahAI", 105, 20, { align: "center" });
      
      // Sous-titre
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0);
      doc.text("Résultat de votre quiz", 105, 30, { align: "center" });
      
      // Informations du quiz
      doc.setFontSize(14);
      doc.text(`Thème : ${theme}`, 20, 45);
      doc.text(`Score : ${score}/${totalQuestions}`, 20, 55);
      
      // Tableau des résultats
      autoTable(doc, {
        startY: 65,
        head: [["Question", "Votre réponse", "Statut"]],
        body: userAnswers.map((answer) => [
          answer.question,
          answer.answer,
          answer.isCorrect ? "Correct" : "Incorrect"
        ]),
        theme: "grid",
        headStyles: { fillColor: [34, 197, 94] },
        styles: { fontSize: 10 }
      });
      
      // Pied de page
      const pageCount = doc.getNumberOfPages();
      for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.setTextColor(128, 128, 128);
        doc.text(
          `Page ${i} sur ${pageCount}`,
          doc.internal.pageSize.width / 2,
          doc.internal.pageSize.height - 10,
          { align: "center" }
        );
      }
      
      // Téléchargement
      doc.save(`kahai-resultat-${theme}.pdf`);
    };

    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz terminé !</h2>
        <p className="text-xl mb-6">
          Votre score : {score}/{totalQuestions}
        </p>
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Télécharger le PDF
          </button>
          <button
            onClick={() => navigate("/results")}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Voir les résultats
          </button>
        </div>
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
        onAnswer={(isCorrect, answerText) => handleAnswerWithState(isCorrect, answerText)}
        showExplanation={showExplanation}
        onNext={handleNext}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}; 