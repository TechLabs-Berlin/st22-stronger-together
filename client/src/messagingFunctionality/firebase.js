import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBN8dLXDXFgO8EKvOAWRStpkagnPg_ErH4",
    authDomain: "tech-labs-test-project.firebaseapp.com",
    projectId: "tech-labs-test-project",
    storageBucket: "tech-labs-test-project.appspot.com",
    messagingSenderId: "1033826365945",
    appId: "1:1033826365945:web:3f949d14dc7d53ee02cd28",
    measurementId: "G-R0WN4J4D9G"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth}
