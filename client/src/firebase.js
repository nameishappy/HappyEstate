// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "happyestate-2ff92.firebaseapp.com",
  projectId: "happyestate-2ff92",
  storageBucket: "happyestate-2ff92.appspot.com",
  messagingSenderId: "215574308008",
  appId: "1:215574308008:web:3a8090c3028a52fb630e9d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
