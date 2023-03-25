// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPVVLU0SqRbBWpYW6dmZFoUQJCYhodvds",
  authDomain: "otp-project-c6d32.firebaseapp.com",
  projectId: "otp-project-c6d32",
  storageBucket: "otp-project-c6d32.appspot.com",
  messagingSenderId: "931166460485",
  appId: "1:931166460485:web:47f257b482cb87206aa12c",
  measurementId: "G-DHB4PCLZ4S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
