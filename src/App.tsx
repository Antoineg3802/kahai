import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Results } from "./pages/Results";
import { GoodPractices } from "./pages/GoodPractices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/bonnes-pratiques" element={<GoodPractices />} />
      </Routes>
    </Router>
  );
}

export default App; 