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
import { userActions } from "../redux/actions/user.action";
import store from "../redux/store";

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

    store.dispatch(userActions.login({ email, name: displayName, avatar: photoURL, id: uid }));
    toast.success("Login successful");
    return;
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

    const userData = await res.data();
    delete userData.password;

    store.dispatch(userActions.login(userData));
    toast.success("Login successful");
    return userData;
  } catch (error) {
    toast.error("Maybe your password is wrong.");
    console.log(error);
  }
};
