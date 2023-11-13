import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import SaudeDashboard from "./components/SaudeDashboard";
import VisaoGeralDashboard from "./components/VisaoGeralPanels/VisaoGeralDashboard";
import EducacaoDashboard from "./components/EducacaoDashboard";
import FinanceiroDashboard from "./components/FinanceiroDashboard";
import LazerDashboard from "./components/LazerPanels/LazerDashboard";
import VerticalMenu from "./components/VerticalMenu";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <BrowserRouter basename="/">
        <VerticalMenu open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/saude" element={<SaudeDashboard />} />
          <Route
            path="/visao-geral"
            element={<VisaoGeralDashboard open={open} setOpen={setOpen} />}
          />
          <Route path="/educacao" element={<EducacaoDashboard />} />
          <Route path="/financeiro" element={<FinanceiroDashboard />} />
          <Route
            path="/lazer"
            element={<LazerDashboard open={open} setOpen={setOpen} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
