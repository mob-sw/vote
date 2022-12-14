// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
//import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAozWMaCFDj-1_H3aA_oyiBqytiB4E-2g",
  authDomain: "vote-proj.firebaseapp.com",
  projectId: "vote-proj",
  storageBucket: "vote-proj.appspot.com",
  messagingSenderId: "148731959759",
  appId: "1:148731959759:web:c206375ca8559d837c9aba",
  measurementId: "G-NTS5VJZ5PG",
  //   apiKey: process.env.REACT_APP_APIKEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  //   appId: process.env.REACT_APP_APP_ID,
  //   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const fapp = initializeApp(firebaseConfig);

const analytics = getAnalytics(fapp);
const firestore = getFirestore();

//const firestore = fapp.firestore;
export { firestore, fapp };
