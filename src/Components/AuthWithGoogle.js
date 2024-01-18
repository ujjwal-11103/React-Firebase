import React, { useState } from 'react'
import { app } from '../Firebase';
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";


export default function AuthWithGoogle() {

    const [email, setEmail] = useState("")

    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {

        // signInWithRedirect(auth, provider)
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user.email);
                setEmail(user.email);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
    return (
        <div style={{ textAlign: 'center' }}> <br />
            <h1>{email}</h1>
            <button onClick={signInWithGoogle}>Sign In with Google</button>
        </div>
    )
}
