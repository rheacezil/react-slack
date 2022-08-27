import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6SAc1qphStQ3bFtLEBaYHP8F_Z9Ki9eQ",
  authDomain: "react-slack-6aba4.firebaseapp.com",
  projectId: "react-slack-6aba4",
  storageBucket: "react-slack-6aba4.appspot.com",
  messagingSenderId: "329661341137",
  appId: "1:329661341137:web:ed37249e340d13f0d214f0",
};

// Use this to initialize the firebase App
const firebaseapp = firebase.initializeApp(firebaseConfig);

// Use these for db, auth & provider
const db = firebaseapp.firestore();

export { db };
