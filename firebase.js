import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBlpafBGzuWS-O2sHrcrWOVvv3leNOlbDY",
  authDomain: "sal-college-lost-found-88d22.firebaseapp.com",
  projectId: "sal-college-lost-found-88d22",
  storageBucket: "sal-college-lost-found-88d22.firebasestorage.app",
  messagingSenderId: "583343886379",
  appId: "1:583343886379:web:2ad8431709f8379986da6e"
};

const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);