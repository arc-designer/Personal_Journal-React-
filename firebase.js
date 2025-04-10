// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth }        from 'firebase/auth';
import { getFirestore }   from 'firebase/firestore';
import { getAnalytics }   from 'firebase/analytics';


const firebaseConfig = {
  apiKey: "AIzaSyAJLwKSRA2G37mgEgTpRCAVAUu1g8jYSCk",
  authDomain: "rnjournal-69b0b.firebaseapp.com",
  projectId: "rnjournal-69b0b",
  storageBucket: "rnjournal-69b0b.firebasestorage.app",
  messagingSenderId: "316389137814",
  appId: "1:316389137814:web:9e53504cf21a3ec5ec51b7",
  measurementId: "G-KBYMEMRXZF"
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);


export const firestore = getFirestore(app);


export const analytics = getAnalytics(app);