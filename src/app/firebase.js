import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDUecFy57MgUGst27p-EzJkl082ARJINhg",
  authDomain: "time-tracker-app-3b85f.firebaseapp.com",
  databaseURL: "https://time-tracker-app-3b85f-default-rtdb.firebaseio.com",
  projectId: "time-tracker-app-3b85f",
  storageBucket: "time-tracker-app-3b85f.appspot.com",
  messagingSenderId: "587931465778",
  appId: "1:587931465778:web:853bd8ff67b0f04b4fe42b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initilize Cloud Firestore
export const db = getFirestore(app);
