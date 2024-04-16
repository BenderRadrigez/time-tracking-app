import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthorizationPage from "../pages/AuthorizationPage/authorizationPage";
import MainPage from "../pages/MainPage/mainPage";
import NotFoundPage from "../pages/NotFoundPage/notFoundPage";
import AddInfoAboutUserPage from "../pages/AddInfoAboutUserPage/AddInfoAboutUserPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthorizationPage />} />
        <Route path="/home" element={<MainPage />} />
<<<<<<< HEAD
=======
        <Route path="/info" element={<AddInfoAboutUserPage />} />
>>>>>>> add-db-firebase
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;