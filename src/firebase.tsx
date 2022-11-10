import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBf685vL345CAiRTIm7xUo4PSUBZuRMTXY",
  authDomain: "storedashboard-e8dca.firebaseapp.com",
  projectId: "storedashboard-e8dca",
  storageBucket: "storedashboard-e8dca.appspot.com",
  messagingSenderId: "541782457281",
  appId: "1:541782457281:web:d2dabe71cd4929d3c08d40",
  measurementId: "G-EN91XQ9ECD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
// const analytics = getAnalytics(app);

export default auth;