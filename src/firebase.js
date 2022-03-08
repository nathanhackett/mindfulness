// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDt0NgxbXfF6Mt0pi0Z9P87YqWZtpo9f8A",
  authDomain: "mindfulness-42773.firebaseapp.com",
  projectId: "mindfulness-42773",
  storageBucket: "mindfulness-42773.appspot.com",
  messagingSenderId: "155379427820",
  appId: "1:155379427820:web:e4313ef8b53df2a61bf8c9",
  measurementId: "G-S5H9ZFTCEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
