import { createContext, useState } from "react";
import Layout from "./layout";
import HomePage from "./pages/home";

export const vehicleContext = createContext();
export const signedUserContext = createContext();

function App() {
  const [vehicle, setVehicle] = useState(null);
  const [signedUser, setSignedUser] = useState(null);

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;
