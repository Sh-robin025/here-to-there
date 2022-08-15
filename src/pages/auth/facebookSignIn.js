import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../utils/firebase";
import isUserExist from "../../utils/isUserExist";

const faceBookLogin = async () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  try {
    const { user } = await signInWithPopup(auth, provider);
    const res = await isUserExist(user.email);

    !res &&
      (await addDoc(collection(db, "users"), {
        user: user.providerData[0],
        timestamp: serverTimestamp(),
      }));
  } catch (error) {
    console.log(error);
  }
};

export default faceBookLogin;
