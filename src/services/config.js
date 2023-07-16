import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "lookfashion-68d08.firebaseapp.com",
  projectId: "lookfashion-68d08",
  storageBucket: "lookfashion-68d08.appspot.com",
  messagingSenderId: "928572525450",
  appId: "1:928572525450:web:b4c20258d3fff55cde5673"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)