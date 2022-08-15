import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB2hOu58dwR8OIxeoigKJDbhshIz0McMv8",
  authDomain: "here-to-there-9b75d.firebaseapp.com",
  databaseURL: "https://here-to-there-9b75d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "here-to-there-9b75d",
  storageBucket: "here-to-there-9b75d.appspot.com",
  messagingSenderId: "733388514594",
  appId: "1:733388514594:web:a88e08bf41e7fe2459f17b",
};

export const firebaseInit = () => firebase.initializeApp(firebaseConfig);

export const db = getFirestore(firebaseInit());
