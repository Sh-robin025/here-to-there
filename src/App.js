import { createContext, useState } from "react";
import Layout from "./layout";
import AppRouter from "./router";

export const vehicleContext = createContext();
export const signedUserContext = createContext();

function App() {
  const [vehicle, setVehicle] = useState(null);
  const [signedUser, setSignedUser] = useState(null);

  return (
    <Layout>
      <AppRouter />
    </Layout>
  );
}

export default App;
