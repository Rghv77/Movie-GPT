// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfg02pQKFuscJEqMMS2ufrCLAV3RqM4Bo",
  authDomain: "moviegpt-a4f47.firebaseapp.com",
  projectId: "moviegpt-a4f47",
  storageBucket: "moviegpt-a4f47.appspot.com",
  messagingSenderId: "178177959956",
  appId: "1:178177959956:web:6c8688985dc63cf189df01",
  measurementId: "G-18Y69384YE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();