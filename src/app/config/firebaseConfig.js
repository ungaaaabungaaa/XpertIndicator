// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaSSX84PGfvB_1LsfEE18xrdGvXJ0UT3Q",
  authDomain: "xpertindicator.firebaseapp.com",
  projectId: "xpertindicator",
  storageBucket: "xpertindicator.firebasestorage.app",
  messagingSenderId: "154781203429",
  appId: "1:154781203429:web:eaeb7b83fac89c08548d0c",
  measurementId: "G-XNGM3901WG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth , app };