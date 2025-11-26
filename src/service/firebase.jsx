// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDtdlWLCJ76rUowPmdDihOfoq7sMbHnJ0",
  authDomain: "libreria-el-estante.firebaseapp.com",
  projectId: "libreria-el-estante",
  storageBucket: "libreria-el-estante.firebasestorage.app",
  messagingSenderId: "937423211987",
  appId: "1:937423211987:web:9f96702993a11758fa7326",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
