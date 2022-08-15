import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";

const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();

  const auth = getAuth();

  try {
    const { user } = await signInWithPopup(auth, provider);
    const res = await addDoc(collection(db, "users"), {
      user: user.providerData[0],
      timestamp: serverTimestamp(),
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default googleSignIn;
