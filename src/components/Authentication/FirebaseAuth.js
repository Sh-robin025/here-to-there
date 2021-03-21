import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "./config";

export const initialization = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}
export const handleCreateUser = (name, email, password) => {
    return firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(data => {
            const userInfo = data.user
            userInfoName(name)
            return userInfo;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
}
export const handleLogInUser = (email, password) => {
    return firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
            const user = data.user;
            return user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
}

export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth()
        .signInWithPopup(fbProvider)
        .then(data => {
            console.log(data);
            const userInfo = data.user;
            return userInfo;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            // return email ;
            const credential = error.credential;
            console.log(credential.accessToken);
            console.log(errorCode, errorMessage, email);
        });
}
export const handleGoogleSignIn = () => {
    const gProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(gProvider)
        .then(data => {
            const credential = data.credential;
            const token = credential.accessToken;
            const userInfo = data.user;
            return userInfo;
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
            console.log(errorCode, errorMessage, email, credential);
        });
}

const userInfoName = name => {
    const user = firebase.auth().currentUser;
    return user.updateProfile({
        displayName: name
    }).then(data => {
        console.log(data);
    }).catch(error => {
        console.log(error);
    });
}