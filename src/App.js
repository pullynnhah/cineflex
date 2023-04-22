import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Banner from "./components/Banner";
import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import SessionsPage from "./pages/SessionsPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  const [buyers, setBuyers] = useState([]);

  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessions/:idMovie" element={<SessionsPage />} />
        <Route
          path="/seats/:idSession"
          element={<SeatsPage buyers={buyers} setBuyers={setBuyers} />}
        />
        <Route path="/success" element={<SuccessPage buyers={buyers} />} />
      </Routes>
    </BrowserRouter>
  );
}
