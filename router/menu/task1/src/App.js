import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu";
import HomePage from "./Components/HomePage";
import DriftPage from "./Components/DriftPage";
import TimeAttackPage from "./Components/TimeAttackPage";
import ForzaPage from "./Components/ForzaPage";

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}
