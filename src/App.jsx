import { BrowserRouter, Routes, Route } from "react-router-dom";
import Univ from "./pages/univ";
import Main from "./pages/main";
import Game from "./pages/game";
import Performance from "./pages/Performance";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/univ" element={<Univ />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/game" element={<Game />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
