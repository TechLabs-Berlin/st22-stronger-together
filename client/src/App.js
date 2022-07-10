import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import FeedPage from "./pages/FeedPage";
// TODO: Reimport once Material UI imports are updated
// import ProfilePage from "./pages/ProfilePage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/feedpage" element={<FeedPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
