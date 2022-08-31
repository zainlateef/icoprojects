import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCQsX8OUebNFnSDfQ63gli9shfOztWDn9s",
    authDomain: "icoapp-235aa.firebaseapp.com",
    projectId: "icoapp-235aa",
    storageBucket: "icoapp-235aa.appspot.com",
    messagingSenderId: "524588506421",
    appId: "1:524588506421:web:edffadcae691c8b899c07c",
    measurementId: "G-STBVX03L70"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { db };