import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_Firebase_apiKey,
  authDomain: process.env.REACT_APP_Firebase_authDomain,
  databaseURL: process.env.REACT_APP_Firebase_databaseURL,
  projectId: process.env.REACT_APP_Firebase_projectId,
  storageBucket: process.env.REACT_APP_Firebase_storageBucket,
  messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId,
  appId: process.env.REACT_APP_Firebase_appId,
};

export const firebaseInit = () => firebase.initializeApp(firebaseConfig);

export const db = getFirestore(firebaseInit());
