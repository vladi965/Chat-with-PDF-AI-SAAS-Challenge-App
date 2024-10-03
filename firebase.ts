import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB513PyNTvJdolfOCezJ6mmFCUOq3Vogz8",
  authDomain: "chat-with-pdf-challenge-b6dab.firebaseapp.com",
  projectId: "chat-with-pdf-challenge-b6dab",
  storageBucket: "chat-with-pdf-challenge-b6dab.appspot.com",
  messagingSenderId: "333613876768",
  appId: "1:333613876768:web:7c77168227ab3dc12c1e45",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
