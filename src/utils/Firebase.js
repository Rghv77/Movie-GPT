// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhbKOUbyyHAX6JXzk9nAY6Gd57cqVRXKk",
  authDomain: "watchify-114d9.firebaseapp.com",
  projectId: "watchify-114d9",
  storageBucket: "watchify-114d9.appspot.com",
  messagingSenderId: "275740611020",
  appId: "1:275740611020:web:f896c54d502455d22e8d69",
  measurementId: "G-C5XKHFVT66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();