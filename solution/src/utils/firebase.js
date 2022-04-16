// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Yv8xunzapkRhsk-VapslzgbWjqjkStQ",
  authDomain: "fire-concat.firebaseapp.com",
  databaseURL: "https://fire-concat-default-rtdb.firebaseio.com",
  projectId: "fire-concat",
  storageBucket: "fire-concat.appspot.com",
  messagingSenderId: "1058394133074",
  appId: "1:1058394133074:web:b4bc06a79aa8d883e1058b"
};

// Initialize Firebase
 const firebase = initializeApp(firebaseConfig);

 export default firebase;