// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUr6V1TcgQfPgrjF7g9LOwKTsCWH0A6fM",
  authDomain: "kckr-347214.firebaseapp.com",
  projectId: "kckr-347214",
  storageBucket: "kckr-347214.appspot.com",
  messagingSenderId: "432533353891",
  appId: "1:432533353891:web:271d3728ec1bb9e99f5616"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)


