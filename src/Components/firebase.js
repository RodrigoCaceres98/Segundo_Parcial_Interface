// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgGMGqetJXjCrJ7-GZoZ5KWKM9X-Ckl_E",
    authDomain: "peliculas-1c9ce.firebaseapp.com",
    projectId: "peliculas-1c9ce",
    storageBucket: "peliculas-1c9ce.appspot.com",
    messagingSenderId: "686394583469",
    appId: "1:686394583469:web:fb0a8e3eb8c3fe863d9924"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)