// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQQo3oGHfGW842XuYflu1l7lYVqgJjlRk",
  authDomain: "react-portfolio-1a80d.firebaseapp.com",
  databaseURL: "https://react-portfolio-1a80d-default-rtdb.firebaseio.com",
  projectId: "react-portfolio-1a80d",
  storageBucket: "react-portfolio-1a80d.firebasestorage.app",
  messagingSenderId: "169672303544",
  appId: "1:169672303544:web:e4d5f1c15c4cf6e843654d",
  measurementId: "G-0EQDLCS9N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;