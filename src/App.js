
import './App.css';
import Home from './components/Home';
import errImg from './images/404.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Destination from './components/Destination';
import { createContext, useState } from 'react';
import SignIn from './components/Authentication/SignIn';
import PrivetRoute from './components/Authentication/PrivetRoute';
import SignUp from './components/Authentication/SignUp';

export const vehicleContext = createContext()
export const signedUserContext = createContext()

function App() {
  const [vehicle, setVehicle] = useState()
  const [signedUser, setSignedUser] = useState(null)
  console.log(signedUser);

  return (
    <signedUserContext.Provider value={[signedUser, setSignedUser]}>
      <vehicleContext.Provider value={[vehicle, setVehicle]}>
        <div className="App">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <PrivetRoute path="/destination">
                <Destination />
              </PrivetRoute>
              <Route path="/login">
                <SignIn />
              </Route>
              <Route path="*">
                <img src={errImg} style={{ width: '100%' }} alt="" />
              </Route>
            </Switch>
          </Router>
        </div>
      </vehicleContext.Provider>
    </signedUserContext.Provider>
  );
}

export default App;
