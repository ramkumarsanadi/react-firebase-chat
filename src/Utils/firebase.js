import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyBSeQVjDPHkS3O_WOBaSYsMBYcaIcmJTtU",
  authDomain: "reactchat-b394d.firebaseapp.com",
  projectId: "reactchat-b394d",
  storageBucket: "reactchat-b394d.appspot.com",
  messagingSenderId: "1095340698353",
  appId: "1:1095340698353:web:98d972782b8211cb609750",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
