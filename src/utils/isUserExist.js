import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

const isUserExist = async (email) => {
  let res;
  const querySnapshot = await getDocs(collection(db, "users"));

  querySnapshot.forEach((doc) => {
    const { user } = doc.data();
    if (user.email === email) {
      res = doc.data();
    }
    return;
  });
  return res;
};

export default isUserExist;
