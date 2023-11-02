import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDqIaOupyookXUlQzuNGOja_m-vX02qdMc",
  authDomain: "agan-adhigaram.firebaseapp.com",
  projectId: "agan-adhigaram",
  storageBucket: "agan-adhigaram.appspot.com",
  messagingSenderId: "101879593712",
  appId: "1:101879593712:web:d2ba4c76f39375ecc12035",
  measurementId: "G-FTJECBXM60",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
