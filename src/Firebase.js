// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2Kj1GT9_7tu9wIAKuY4o_aFIGI9vpTW0",
    authDomain: "testing-app-681a0.firebaseapp.com",
    projectId: "testing-app-681a0",
    storageBucket: "testing-app-681a0.appspot.com",
    messagingSenderId: "337665636516",
    appId: "1:337665636516:web:c174cc68e2df95fee9ce31",
    databaseURL: "https://testing-app-681a0-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);