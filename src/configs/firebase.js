import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_PUBLIC_APIKEY,
  authDomain: process.env.REACT_APP_PUBLIC_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_PUBLIC_DATABASEURL,
  projectId: process.env.REACT_APP_PUBLIC_PROJECTID,
  storageBucket: process.env.REACT_APP_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_PUBLIC_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_PUBLIC_APPID,
  measurementId: process.env.REACT_APP_PUBLIC_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const database = getFirestore();
export const db = getDatabase(app); // Initialize the Realtime Database
export const storage = getStorage(app); // Initialize Firebase Storage
