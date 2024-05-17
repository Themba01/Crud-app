import * as firebase from "firebase";
import "firebase/database"; 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhvJjNI85MNSf0BebA23tScZOq0lC0fRw",
  authDomain: "soch-firebase.firebaseapp.com",
  projectId: "soch-firebase",
  storageBucket: "soch-firebase.appspot.com",
  messagingSenderId: "826821639120",
  appId: "1:826821639120:web:218e1ecfe086de8dba97d5"
};

// Initialize Firebase
firebase.initializeApp(config);

export default firebase.database();