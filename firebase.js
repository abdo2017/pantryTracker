// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbKXxjmT6h43fD7H1SDwErwBSgtWXN894",
    authDomain: "inventory-app-317cb.firebaseapp.com",
    projectId: "inventory-app-317cb",
    storageBucket: "inventory-app-317cb.appspot.com",
    messagingSenderId: "503099031575",
    appId: "1:503099031575:web:90414ebc1ffc158e045c52",
    measurementId: "G-XCKC8MZEMC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let firestore = getFirestore(app);
export {firestore};