// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const FirebaseConfig = {
  apiKey: "AIzaSyD8zaTyd6Jh4DhpX_lrpSSvNYf9z6Gt1dE",
  authDomain: "react-fernando-curso-24c4a.firebaseapp.com",
  projectId: "react-fernando-curso-24c4a",
  storageBucket: "react-fernando-curso-24c4a.appspot.com",
  messagingSenderId: "496005394943",
  appId: "1:496005394943:web:71afdb03b5843f627a77ca",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(FirebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
