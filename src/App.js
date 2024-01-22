import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase";
import React, { useEffect, useState } from 'react'
import Authentication from './Components/Authentication'
import Sign_in from './Components/Sign_in'
import AuthWithGoogle from './Components/AuthWithGoogle'
import "../src/App.css"

export default function App() {

  const [userr, setUserr] = useState(null)

  const auth = getAuth();


  // User is signed in, see docs for a list of available properties
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("Signed in");
        console.log(user);
        console.log(uid);
        setUserr(user)
        // ...
      } else {
        // User is signed out
        // ...
        console.log("Signed outttt");
        setUserr(null)
      }
    });
  }, [auth])

  if (userr === null) {
    return (
      <div className="main">
        < Authentication />
        <Sign_in />
      </div>
    )

  }
  // <AuthWithGoogle />

  return (
    <div>
      <h1>Hello : {userr.email}</h1>
      <button onClick={() => { signOut(auth) }}>Log out </button>

    </div>
  )
}
