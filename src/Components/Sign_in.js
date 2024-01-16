
import React, { useState } from 'react'
import { app } from '../Firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Sign_in() {

    const auth = getAuth();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = () => {

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                alert("SiGNED IN")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
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
        </div>
    )
}


