import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import GameRegister from "./pages/GameRegister";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Performance from "./pages/Performance";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Univ from "./pages/Univ";
import GameResult from "./pages/GameResult";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/univ" element={<Univ />} />
          <Route path="/performance" element={<Performance />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gameregister" element={<GameRegister />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game-result" element={<GameResult />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
