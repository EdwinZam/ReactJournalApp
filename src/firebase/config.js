// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG0mHzQ6twPnljg1yYIouSm3-1ZOmsEC4",
  authDomain: "fir-1-82d4c.firebaseapp.com",
  projectId: "fir-1-82d4c",
  storageBucket: "fir-1-82d4c.appspot.com",
  messagingSenderId: "406470068598",
  appId: "1:406470068598:web:e37a72eec9d74845535257"
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FireBaseApp );
export const FirebaseDB = getFirestore( FireBaseApp );
