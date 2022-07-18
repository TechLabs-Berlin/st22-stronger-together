import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getFirestore } from "firebase/firestore";

// TODO: Move these to env vars

// FIREBASE Configuration with
const firebaseConfig = {
  apiKey: "AIzaSyBN8dLXDXFgO8EKvOAWRStpkagnPg_ErH4",
  authDomain: "tech-labs-test-project.firebaseapp.com",
  projectId: "tech-labs-test-project",
  storageBucket: "tech-labs-test-project.appspot.com",
  messagingSenderId: "1033826365945",
  appId: "1:1033826365945:web:3f949d14dc7d53ee02cd28",
  measurementId: "G-R0WN4J4D9G",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

reportWebVitals();
