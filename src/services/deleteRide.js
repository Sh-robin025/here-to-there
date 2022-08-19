import { deleteDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase.config";
import getMyRides from "./getMyRides";

const deleteRide = async (id) => {
  try {
    await deleteDoc(doc(db, "rides", id));
    toast.success("Your Ride Deleted Successfully.");
    await getMyRides();
  } catch (error) {
    console.log(error);
  }
};

export default deleteRide;
