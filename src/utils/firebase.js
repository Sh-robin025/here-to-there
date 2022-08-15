import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB2hOu58dwR8OIxeoigKJDbhshIz0McMv8",
  authDomain: "here-to-there-9b75d.firebaseapp.com",
  projectId: "here-to-there-9b75d",
  storageBucket: "here-to-there-9b75d.appspot.com",
  messagingSenderId: "733388514594",
  appId: "1:733388514594:web:a88e08bf41e7fe2459f17b",
};

const firebaseInit = initializeApp(firebaseConfig);

export default firebaseInit;
