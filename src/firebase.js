// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { useState, useEffect } from "react";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACllwixHK6k9utWQWBHXwDGovY11Bn4e8",
    authDomain: "loan-cea6d.firebaseapp.com",
    projectId: "loan-cea6d",
    storageBucket: "loan-cea6d.appspot.com",
    messagingSenderId: "671966082444",
    appId: "1:671966082444:web:cb6d38b547b1cb0b78d2a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth()

export function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
}


export function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
}


export function useAuth() {

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        return onAuthStateChanged(auth, user => setCurrentUser(user))
    }, [])

    return currentUser

}