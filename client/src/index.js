import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { FirebaseAppProvider } from "reactfire";

const firebaseConfig = {
  apiKey: "AIzaSyBe_zF67rLABXq3BfukHqvv6Y8ENZter2k",
  authDomain: "stronger-together-a4a98.firebaseapp.com",
  projectId: "stronger-together-a4a98",
  storageBucket: "stronger-together-a4a98.appspot.com",
  messagingSenderId: "757270099444",
  appId: "1:757270099444:web:b517641111f996bf88b5a1",
  measurementId: "G-Q37HPSBEPR",
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById("root")
);

reportWebVitals();
