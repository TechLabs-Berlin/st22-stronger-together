import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import FeedPage from "./pages/FeedPage";
// imported from ReactFire
import { doc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  FirestoreProvider,
  AuthProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
} from "reactfire";

//Added a function component

function BurritoTaste() {
  // easily access the Firestore library
  const burritoRef = doc(useFirestore(), "tryreactfire", "burrito");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The burrito is {data.yummy ? "good" : "bad"}!</p>;
}

function App() {
  const app = useFirebaseApp();

  const firestoreInstance = getFirestore(app);
  const authInstance = getAuth(app);

  return (
    <AuthProvider sdk={authInstance}>
      <FirestoreProvider sdk={firestoreInstance}>
        {/* <h1>🌯</h1>
      <BurritoTaste /> */}
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
  );
}

export default App;
