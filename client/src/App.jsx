import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import VisaoGeralDashboard from "./components/VisaoGeralPanels/VisaoGeralDashboard";
import LazerDashboard from "./components/LazerPanels/LazerDashboard";
import EducacaoDashboard from "./components/EducacaoPanels/EducacaoDashboard";
import VerticalMenu from "./components/VerticalMenu";
import { useState } from "react";
import CasaDashboard from "./components/CasaPanels/CasaDashboard";

function App() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <BrowserRouter basename="/">
        <VerticalMenu open={open} setOpen={setOpen} />
        <Routes>
          <Route
            path="/visao-geral"
            element={<VisaoGeralDashboard open={open} setOpen={setOpen} />}
          />
          <Route path="/educacao" element={<EducacaoDashboard open={open} />} />
          <Route path="/casa" element={<CasaDashboard open={open} />} />
          <Route path="/lazer" element={<LazerDashboard open={open} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
