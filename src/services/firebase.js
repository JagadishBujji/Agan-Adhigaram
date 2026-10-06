import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getAuth, connectAuthEmulator } from "firebase/auth";

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

// local testing - set REACT_APP_USE_EMULATOR=true in .env.development.local and
// run the firebase emulators from the backend repo, so production data is not touched
const useEmulator = process.env.REACT_APP_USE_EMULATOR === "true";

if (useEmulator) {
  connectFirestoreEmulator(db, "127.0.0.1", 8080);
  connectAuthEmulator(auth, "http://127.0.0.1:9099");
}

const FUNCTIONS_BASE_URL = useEmulator
  ? "http://127.0.0.1:5001/agan-adhigaram/us-central1"
  : "https://us-central1-agan-adhigaram.cloudfunctions.net";

export { db, auth, FUNCTIONS_BASE_URL };
