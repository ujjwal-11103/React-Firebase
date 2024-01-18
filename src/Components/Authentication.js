

import React, { useState } from 'react'

import { app } from '../Firebase';

// import { getDatabase, ref, set } from 'firebase/database'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Authentication() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // reference
    const auth = getAuth();

    const register = () => {

        createUserWithEmailAndPassword(auth, email, password)

            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user.email);
                console.log(user.password);
                alert("Successfully Registered !")
                // ...
            })

            .catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);
                // ..
            });
    }
    return (
        <div style={{ textAlign: 'center' }}> <br />
            <h1>Sign Up Page</h1>
            <label htmlFor="">Email</label><br />
            <input type="email" name="" id="" value={email} onChange={(event) => { setEmail(event.target.value) }} /> <br /><br />

            <label htmlFor="">Password</label><br />
            <input type="password" name="" id="" value={password} onChange={(event) => { setPassword(event.target.value) }} /> <br /><br />

            <button onClick={register}>Register</button>


        </div>
    )
}
