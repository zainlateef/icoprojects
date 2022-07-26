import React, {Component} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from './Tabs';
import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCQsX8OUebNFnSDfQ63gli9shfOztWDn9s",
    authDomain: "icoapp-235aa.firebaseapp.com",
    projectId: "icoapp-235aa",
    storageBucket: "icoapp-235aa.appspot.com",
    messagingSenderId: "524588506421",
    appId: "1:524588506421:web:edffadcae691c8b899c07c",
    measurementId: "G-STBVX03L70"
};
initializeApp(firebaseConfig);
const firestore = getFirestore();

setDoc(doc(firestore, "characters", "mario"), {
    employment: "plumber",
    outfitColor: "red",
    specialAttack: "fireball"
});


const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  );
}
export default App;
