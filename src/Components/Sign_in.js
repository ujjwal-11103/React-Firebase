
import React, { useState } from 'react'
import { app } from '../Firebase'
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Sign_in() {

    const auth = getAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [signIntoggle, setSignInToggle] = useState(false)
    const [signOuttoggle, setSignOutToggle] = useState(false)


    const signIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                // alert("SiGNED IN")
                setSignInToggle(true)
                setSignOutToggle(false)
                console.log(signIntoggle);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });


    }

    const signOutt = () => {

        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            // alert("Signed out")
            setSignOutToggle(true)
            setSignInToggle(false)
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <div style={{ textAlign: 'center' }}> <br />
            <h1>Sign In</h1>

            <label htmlFor="">Email</label><br />
            <input type="email" name="" id="" value={email} onChange={(event) => { setEmail(event.target.value) }} /> <br /><br />

            <label htmlFor="">Password</label><br />
            <input type="password" name="" id="" value={password} onChange={(event) => { setPassword(event.target.value) }} /> <br /><br />

            <button onClick={signIn}>Sign in</button>

            {
                signIntoggle ? <h1>Sign in with email : {email}</h1> : null
            }



            <button onClick={signOutt}>Sign Out</button>

            {
                signOuttoggle ? <h1>Signed Out </h1> : null
            }
        </div>
    )
}


