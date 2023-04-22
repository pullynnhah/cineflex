import { BrowserRouter, Route, Routes } from "react-router-dom";

import Banner from "./components/Banner";
import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import SessionsPage from "./pages/SessionsPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/sessions/:idMovie" element={<SessionsPage />} />
        <Route path="/seats/:idSession" element={<SeatsPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
