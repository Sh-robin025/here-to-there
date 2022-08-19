import { doc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import getMyRides from "./getMyRides";

const updateStatus = async (id, status) => {
  try {
    await updateDoc(doc(db, "rides", id), { status });
    status === "Canceled" && toast.success("Your Ride Canceled Successfully.");
    await getMyRides();
  } catch (error) {
    console.log(error);
  }
};

export default updateStatus;
