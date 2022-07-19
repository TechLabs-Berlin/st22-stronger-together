import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import FeedPage from "./pages/FeedPage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { FirestoreProvider, AuthProvider, useFirebaseApp } from "reactfire";
import "./App.css";

function App() {
  const app = useFirebaseApp();

  const firestoreInstance = getFirestore(app);
  const authInstance = getAuth(app);

  return (
    <div className="App">
      <AuthProvider sdk={authInstance}>
        <FirestoreProvider sdk={firestoreInstance}>
          <BrowserRouter>
            <Routes>
              <Route index element={<LandingPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/feedpage" element={<FeedPage />} />
            </Routes>
          </BrowserRouter>
        </FirestoreProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
