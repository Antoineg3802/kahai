import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Button } from "./components/ui/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <p className="text-2xl font-bold text-red-500">KAHAI</p>
    <Button>Click Me !!!</Button>
  </StrictMode>
);
