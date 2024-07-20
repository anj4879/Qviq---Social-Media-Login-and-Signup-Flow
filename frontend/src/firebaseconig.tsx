// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkXwEyayynts5iPMOvQQFpER73iFVQ6DQ",
  authDomain: "auth-58036.firebaseapp.com",
  projectId: "auth-58036",
  storageBucket: "auth-58036.appspot.com",
  messagingSenderId: "171598688070",
  appId: "1:171598688070:web:d3637202891e3334c2ff47",
  measurementId: "G-G2502Y6ZQN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app , auth}