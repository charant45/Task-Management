import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAsEmlC1e3LC58LXywtZOKAgYfNIodk8Mw",
    authDomain: "boardinfinity-todo.firebaseapp.com",
    projectId: "boardinfinity-todo",
    storageBucket: "boardinfinity-todo.appspot.com",
    messagingSenderId: "509950601583",
    appId: "1:509950601583:web:54ae42faee63a29884a09a",
    measurementId: "G-97P2PZYW2G"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export { app, db };