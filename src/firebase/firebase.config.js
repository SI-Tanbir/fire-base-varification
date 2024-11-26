// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDau0AcE_TgnUr6PA-ygVRr-SsHdgNx7w8",
  authDomain: "fire-base-varification.firebaseapp.com",
  projectId: "fire-base-varification",
  storageBucket: "fire-base-varification.firebasestorage.app",
  messagingSenderId: "924545444054",
  appId: "1:924545444054:web:8616cc81d9866909e88177"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth=getAuth(app);

export default  auth;