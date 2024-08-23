import { BrowserRouter, Routes, Route } from "react-router-dom";
import Univ from "./pages/Univ";
import Main from "./pages/Main";
import Game from "./pages/Game";
import Performance from "./pages/Performance";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/univ" element={<Univ />} />
          <Route path="/performance" element={<Performance />} />
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
