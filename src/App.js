import { BrowserRouter, Route, Routes } from "react-router-dom";

import Banner from "./components/Banner";
import MoviesPage from "./pages/MoviesPage";
import SeatsPage from "./pages/SeatsPage";
import ShowtimesPage from "./pages/ShowtimesPage";
import SuccessPage from "./pages/SuccessPage";

export default function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/showtimes/:idMovie" element={<ShowtimesPage />} />
        <Route path="/seats/:idShowtime" element={<SeatsPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
