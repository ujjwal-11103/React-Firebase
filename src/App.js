// import React from 'react'
// import { app } from './Firebase'

// import { getDatabase, ref, set } from 'firebase/database'

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// // here through db we can access the database (acting as a reference)
// const db = getDatabase(app)

// const auth = getAuth();


// // checking connection to database by passing some data 

// export default function App() {
//   const putData = () => {
//     set(ref(db, "users/ujjwal"), {
//       user: "Ujjwal",
//       age: 21
//     })
//   }

//   // user sign up
//   const signup = () => {
//     createUserWithEmailAndPassword(auth, 'ujjwwal@gmail.com', '12ww3123')
//       .then((userCredential) => {
//         // Signed up 
//         const user = userCredential.user;
//         console.log(user);
//         // ...
//       })
//       .catch((error) => {
//         // Handle registration errors
//         console.error('Registration error:', error.message);
//       });
//   }


//   return (
//     <div style={{ textAlign: 'center' }}>
//       <button onClick={putData}>Store Data</button><br /> <br />
//       <h1>Hello Firebase</h1>
//       <button onClick={signup}>Add User</button>
//     </div>
//   )
// }


import React from 'react'
import Authentication from './Components/Authentication'
export default function App() {
  return (
    <div>
      <Authentication />
    </div>
  )
}
