// src/firebaseConfig.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvFeS0XWYBoml0upEQSWJEXTR5qzOAnrc",
    authDomain: "bike-service-application-7e710.firebaseapp.com",
    projectId: "bike-service-application-7e710",
    storageBucket: "bike-service-application-7e710.appspot.com",
    messagingSenderId: "543588656238",
    appId: "1:543588656238:web:b6f381f928e1af6e78727f",
    measurementId: "G-NRT71G3JSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
