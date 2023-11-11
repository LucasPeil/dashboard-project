import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import SaudeDashboard from "./components/SaudeDashboard";
import CasaDashboard from "./components/CasaDashboardPanels/CasaDashboard";
import EducacaoDashboard from "./components/EducacaoDashboard";
import FinanceiroDashboard from "./components/FinanceiroDashboard";
import LazerDashboard from "./components/LazerDashboard";
import VerticalMenu from "./components/VerticalMenu";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(true);
  return (
    <>
      <BrowserRouter>
        <VerticalMenu open={open} setOpen={setOpen} />
        <Routes>
          <Route path="/saude" element={<SaudeDashboard />} />
          <Route
            path="/casa"
            element={<CasaDashboard open={open} setOpen={setOpen} />}
          />
          <Route path="/educacao" element={<EducacaoDashboard />} />
          <Route path="/financeiro" element={<FinanceiroDashboard />} />
          <Route path="/lazer" element={<LazerDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
