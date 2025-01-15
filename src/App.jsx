import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./components/NotFound";
import Beerdetail from "./components/Beerdetail";

export default function App() {
  return (
    <BrowserRouter basename='/beer-list'>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="beer/:beerId" element={<Beerdetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
