import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore} from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyBBxmWGwOJ_kkOTKzWCxN6jE8Y4QEcFecE",
    authDomain: "react-native-estiam-exam.firebaseapp.com",
    projectId: "react-native-estiam-exam",
    storageBucket: "react-native-estiam-exam.firebasestorage.app",
    messagingSenderId: "54971815311",
    appId: "1:54971815311:web:1fe8eca6eab44571e1a7fa",
    measurementId: "G-TZV9E549P6",
    databaseURL: "" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authInstance = getAuth(app);
const db = getFirestore(app);
// Get the Auth instance

export { authInstance, db };