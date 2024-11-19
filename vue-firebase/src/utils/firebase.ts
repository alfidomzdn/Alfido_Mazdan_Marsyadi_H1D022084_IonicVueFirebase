// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDuuN6DxqZ3DdpcQdURgWvoAWpb8ZNzvXE",
  authDomain: "vue-firebase-c11e8.firebaseapp.com",
  projectId: "vue-firebase-c11e8",
  storageBucket: "vue-firebase-c11e8.firebasestorage.app",
  messagingSenderId: "901278359932",
  appId: "1:901278359932:web:530140788a528875f584f9"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };