import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { signedUserContext } from '../../App';

const PrivetRoute = ({ children, ...rest }) => {
    const [signedUser, setSignedUser] = useContext(signedUserContext)

    return (
        <Route
            {...rest}
            render={({ location }) =>
                signedUser?.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivetRoute;