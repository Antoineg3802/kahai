import { Link, useLocation } from "react-router-dom";
import { Logo } from "../ui/logo";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <Logo />
          <span className="text-2xl font-bold text-green-600">KAHAI</span>
        </div>
        
        <nav className="space-y-2">
          <Link
            to="/"
            className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
              isActive("/")
                ? "bg-green-50 text-green-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <span>Quiz</span>
          </Link>

          <Link
            to="/results"
            className={`flex items-center space-x-2 p-3 rounded-lg transition-colors ${
              isActive("/results")
                ? "bg-green-50 text-green-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <span>Résultats</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}; 