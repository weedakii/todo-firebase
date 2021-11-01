import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0NjtvsTHplgUIBm9swVZ0H3tfYNKihe0",
    authDomain: "shantof-9919c.firebaseapp.com",
    projectId: "shantof-9919c",
    storageBucket: "shantof-9919c.appspot.com",
    messagingSenderId: "550247532417",
    appId: "1:550247532417:web:806839c726575e793a4a80",
    measurementId: "G-B92J8T7DRP"
})

const db = firebaseApp.firestore()

export default db;