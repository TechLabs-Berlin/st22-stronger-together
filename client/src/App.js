import { BrowserRouter, Routes, Route } from "react-router-dom";
//import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
//import RegisterPage from "./pages/RegisterPage";
// TODO: Reimport once Material UI imports are updated
// import ProfilePage from "./pages/ProfilePage";


// <Route index element={<LandingPage />} />
//<Route path="/login" element={<LoginPage />} />
//<Route path="/register" element={<RegisterPage />} />
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
