// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
import { getEnvironments } from "../helpers";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDb0Cp3MHnT6SWTHj-lYuBvZjf-302drNk",
//   authDomain: "react-curso-journal-64717.firebaseapp.com",
//   projectId: "react-curso-journal-64717",
//   storageBucket: "react-curso-journal-64717.appspot.com",
//   messagingSenderId: "592794792557",
//   appId: "1:592794792557:web:1874fc05d5fa83d7ed4564"
// };

// console.log(import.meta.env);
const {
  VITE_apiKey,
  VITE_authDomain,
  VITE_databaseURL,
  VITE_projectId,
  VITE_storageBucket,
  VITE_messagingSenderId,
  VITE_appId,
  VITE_measurementId
} = getEnvironments();

//Test
const firebaseConfig = {
  apiKey: VITE_apiKey, 
  authDomain: VITE_authDomain, 
  databaseURL: VITE_databaseURL, 
  projectId: VITE_projectId, 
  storageBucket: VITE_storageBucket, 
  messagingSenderId: VITE_messagingSenderId,
  appId: VITE_appId, 
  measurementId: VITE_measurementId, 
};


// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );