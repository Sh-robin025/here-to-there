import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase.config";

const sendRideRequest = async (data) => {
  const id = "htt-" + Math.ceil(Math.random() * 10000000000);

  try {
    await setDoc(doc(db, "rides", id), { ...data, id });
    return "Your Request sent. You will get Response in short time.";
  } catch (error) {
    console.log(error);
  }
};

export default sendRideRequest;
