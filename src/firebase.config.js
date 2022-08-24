// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBduk9fBF1dINo3ZkOyij96WW3youKqjZI",
  authDomain: "event-management-e93ee.firebaseapp.com",
  projectId: "event-management-e93ee",
  storageBucket: "event-management-e93ee.appspot.com",
  messagingSenderId: "806005521610",
  appId: "1:806005521610:web:0d884f25f30fc6458d8833",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
