// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUPwDHsLrHnmn-oiZ8qsa0tI5__Y_8D8k",
  authDomain: "homedashboard-c6d49.firebaseapp.com",
  projectId: "homedashboard-c6d49",
  storageBucket: "homedashboard-c6d49.appspot.com",
  messagingSenderId: "196572604307",
  appId: "1:196572604307:web:0f2cf03c91c63d4351aa66",
  measurementId: "G-7JE7F4NV63"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
