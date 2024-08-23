import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import GameRegister from "./pages/GameRegister";
import Main from "./pages/main";
import Game from "./pages/game";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/team" element={<Team />} />
          <Route path="/gameregister" element={<GameRegister />} />
          <Route path="/game" element={<Game />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
