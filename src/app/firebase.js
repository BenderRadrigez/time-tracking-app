<<<<<<< HEAD
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFireRestore } from  '@firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
=======
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

>>>>>>> add-db-firebase
const firebaseConfig = {
  apiKey: "AIzaSyDUecFy57MgUGst27p-EzJkl082ARJINhg",
  authDomain: "time-tracker-app-3b85f.firebaseapp.com",
  databaseURL: "https://time-tracker-app-3b85f-default-rtdb.firebaseio.com",
  projectId: "time-tracker-app-3b85f",
  storageBucket: "time-tracker-app-3b85f.appspot.com",
  messagingSenderId: "587931465778",
<<<<<<< HEAD
  appId: "1:587931465778:web:853bd8ff67b0f04b4fe42b"
=======
  appId: "1:587931465778:web:853bd8ff67b0f04b4fe42b",
>>>>>>> add-db-firebase
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
<<<<<<< HEAD
const dbFirestore = getFireRestore(app);
=======
// Initilize Cloud Firestore
export const db = getFirestore(app);
// Initialize Cloud Storage
export const  storage = getStorage(app);
>>>>>>> add-db-firebase
