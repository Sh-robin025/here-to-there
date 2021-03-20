import React, { createContext, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import ExistingUser from './ExistingUser';
import SignUp from './SignUp';
import '../../App.css'
import { handleFbSignIn, handleGoogleSignIn, initialization } from './FirebaseAuth';
import { signedUserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const userContext = createContext()

const SignIn = () => {
    const [newUser, setNewUser] = useState(false)
    const [signedUser, setSignedUser] = useContext(signedUserContext)
    initialization()
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const fbSignIn = () => {
        handleFbSignIn()
            .then(data => {
                setSignedUser(data);
                history.replace(from);
            })
    }
    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(data => {
                setSignedUser(data);
                history.replace(from);
            })
    }

    return (
        <userContext.Provider value={[newUser, setNewUser]}>
            <div className="bg-light">
                {
                    !newUser ? <ExistingUser /> : <SignUp />
                }

                <h6 className="text-center m-3" id="or">or</h6>
                <div className="row justify-content-center">
                    <Button variant="primary" block className="col-md-3 rounded-pill"
                        onClick={fbSignIn}> Continue with facebook</Button>
                </div>
                <div className="row justify-content-center mt-2">
                    <Button variant="primary" block className="col-md-3 rounded-pill"
                        onClick={googleSignIn}> Continue with Google</Button>
                </div>
            </div>

        </userContext.Provider>
    );
};

export default SignIn;