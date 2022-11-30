// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB6CQ6F6E8YkJstbu-vnZJDWTHh822c34Q",
	authDomain: "nology-react.firebaseapp.com",
	projectId: "nology-react",
	storageBucket: "nology-react.appspot.com",
	messagingSenderId: "289627186353",
	appId: "1:289627186353:web:3b741f50b5b16d7492ae90",
	measurementId: "G-D7PSJPQ33T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
