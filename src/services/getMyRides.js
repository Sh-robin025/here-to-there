import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";
import { setMyRides } from "../redux/actions/ride.action";
import store from "../redux/store";

const getMyRides = async () => {
  const { email } = store.getState().user_credentials;

  try {
    const q = query(collection(db, "rides"), where("client.email", "==", email));
    const snapshot = await getDocs(q);

    const res = snapshot.docs.map((i) => i.data());
    await store.dispatch(setMyRides(res));
    return res;
  } catch (error) {
    console.log(error);
  }
};

export default getMyRides;
