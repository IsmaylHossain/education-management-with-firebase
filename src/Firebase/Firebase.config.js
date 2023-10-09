// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACQ7Mcuzsl9SBfaYeS8pQ7jXPDorekTj0",
  authDomain: "education-management-project.firebaseapp.com",
  projectId: "education-management-project",
  storageBucket: "education-management-project.appspot.com",
  messagingSenderId: "744291900939",
  appId: "1:744291900939:web:48dec810be5908e30eb10e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;