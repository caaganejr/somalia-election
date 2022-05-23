// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAfbkSarOYo564V-jEQWzYqGqjclGBh54",
  authDomain: "somalia-election-e7ab9.firebaseapp.com",
  projectId: "somalia-election-e7ab9",
  storageBucket: "somalia-election-e7ab9.appspot.com",
  messagingSenderId: "491059778495",
  appId: "1:491059778495:web:b6c9c584e073381aa3870a",
  measurementId: "G-DQRQWDVP03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();