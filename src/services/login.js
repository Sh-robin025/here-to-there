import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase.config";

export const loginWithApp = async (platform) => {
  let provider;
  const auth = getAuth();

  if (platform === "facebook") {
    provider = new FacebookAuthProvider();
  }
  if (platform === "google") {
    provider = new GoogleAuthProvider();
  }

  try {
    const { user } = await signInWithPopup(auth, provider);
    const { email, displayName, photoURL, uid } = user.providerData[0];

    await setDoc(doc(db, "users", email), { name: displayName, avatar: photoURL, id: uid, email });

    // keep user in state
  } catch (error) {
    toast.error("something went wrong");
    console.log(error);
  }
};

export const loginWithEmail = async ({ email, password }) => {
  const auth = getAuth();

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const res = await getDoc(doc(db, "users", user.email));
    toast.success("Login successful");

    // keep user in state
    return res.data();
  } catch (error) {
    toast.error("Maybe your password is wrong.");
    console.log(error);
  }
};
