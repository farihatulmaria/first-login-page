// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  /* apiKey: process.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.REACT_APP_FIREBASE_APP_ID */
  apiKey: "AIzaSyAZ4iUQtZQQuagRLbrRM4SsKkYyPfulvo0",
  authDomain: "first-login-page-cbd17.firebaseapp.com",
  projectId: "first-login-page-cbd17",
  storageBucket:"first-login-page-cbd17.appspot.com",
  messagingSenderId: "276577512755",
  appId: "1:276577512755:web:075453946aef1b8aeba246"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export default auth