import React, { createContext, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import ExistingUser from './ExistingUser';
import SignUp from './SignUp';
import '../../App.css'
import { handleFbSignIn, handleGoogleSignIn, initialization } from './FirebaseAuth';
import { signedUserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons"

export const userContext = createContext()

const SignIn = () => {
    const [newUser, setNewUser] = useState(false)
    const [signedUser, setSignedUser] = useContext(signedUserContext)
    console.log(signedUser);
    initialization()
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const fbSignIn = () => {
        handleFbSignIn()
            .then(data => {
                // console.log(data);
                setSignedUser(data);
                history.replace(from);
            })
            .catch(err => console.log(err))
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
                <h6 className="text-center m-3" id="or"> or</h6>
                <div className="row justify-content-center">
                    <Button variant="primary" block className="col-md-3 rounded-pill justify-content-between"
                        onClick={fbSignIn}>
                        <FontAwesomeIcon icon={faFacebook}
                            style={{ fontSize: '23px', marginRight: '60px' }} />
                        <span>  Continue with facebook</span>
                    </Button>
                </div>
                <div className="row justify-content-center mt-2">
                    <Button variant="primary" block className="col-md-3 rounded-pill"
                        onClick={googleSignIn}>
                        <FontAwesomeIcon icon={faGoogle}
                            style={{ fontSize: '20px', marginRight: '70px' }} />
                        <span> Continue with Google</span>
                    </Button>
                </div>
            </div>

        </userContext.Provider>
    );
};

export default SignIn;