// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
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

const firebaseConfig = {
  apiKey: "AIzaSyDjQnTbQx2MSh4pq-PT5w0orcCVvrkkJgA",
  authDomain: "mp-prueba-d1ce9.firebaseapp.com",
  databaseURL: "https://mp-prueba-d1ce9-default-rtdb.firebaseio.com",
  projectId: "mp-prueba-d1ce9",
  storageBucket: "mp-prueba-d1ce9.appspot.com",
  messagingSenderId: "315859443131",
  appId: "1:315859443131:web:7a8d39e608bdfb41dcf89e",
  measurementId: "G-5ZLGT09BM6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );