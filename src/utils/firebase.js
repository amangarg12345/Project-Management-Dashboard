// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANzzn7ykF6bKynOtRB1KepSYM6Fx1-tqU",
  authDomain: "project-management-dashb-3af0b.firebaseapp.com",
  projectId: "project-management-dashb-3af0b",
  storageBucket: "project-management-dashb-3af0b.firebasestorage.app",
  messagingSenderId: "210329632660",
  appId: "1:210329632660:web:63303c1987997cd15f5981",
  measurementId: "G-5HM223FEN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
export default auth;