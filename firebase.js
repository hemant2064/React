// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAE7oXeFTS4m3m3c91jx8JDkJpi8vhJ22M",
  authDomain: "foodrush-58f10.firebaseapp.com",
  projectId: "foodrush-58f10",
  storageBucket: "foodrush-58f10.firebasestorage.app",
  messagingSenderId: "125365586498",
  appId: "1:125365586498:web:d92ba97a6985b767127bdb",
  measurementId: "G-NYYN4ZE3CK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
