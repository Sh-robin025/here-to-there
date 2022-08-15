import { FacebookAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const faceBookLogin = async () => {
  const provider = new FacebookAuthProvider();
  const auth = getAuth();

  try {
    const res = await signInWithPopup(auth, provider);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export default faceBookLogin;
