import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthorizationPage from "../pages/AuthorizationPage/authorizationPage";
import MainPage from "../pages/MainPage/mainPage";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/authorization" element={<AuthorizationPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;