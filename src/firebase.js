// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey: "AIzaSyByAmH_FgqD39r3FKdxW8OvmqJ1H40Vkq8",
  authDomain: "instagram-clon-efb25.firebaseapp.com",
  projectId: "instagram-clon-efb25",
  storageBucket: "instagram-clon-efb25.appspot.com",
  messagingSenderId: "303175297421",
  appId: "1:303175297421:web:e5a9a25598307027dff5c4"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app)