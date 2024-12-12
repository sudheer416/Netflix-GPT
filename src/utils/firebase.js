// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUEqyPSlSNlaFJhFVkhMGZE8bRTG5X_SA",
  authDomain: "netflix-efe2c.firebaseapp.com",
  projectId: "netflix-efe2c",
  storageBucket: "netflix-efe2c.firebasestorage.app",
  messagingSenderId: "103175156557",
  appId: "1:103175156557:web:b4681e04666bd2faed3d04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)