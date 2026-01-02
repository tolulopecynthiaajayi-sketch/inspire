// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBG2ITjfDqdfSRsuI9AgufzQY95HO5Y7ME",
    authDomain: "alora-e67c7.firebaseapp.com",
    projectId: "alora-e67c7",
    storageBucket: "alora-e67c7.firebasestorage.app",
    messagingSenderId: "812537083370",
    appId: "1:812537083370:web:7b01d09491bc23c739ee93",
    measurementId: "G-TM4Y2682JV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Export for use in other files
export { auth, db, analytics };

// Attach to window for non-module scripts (optional but helpful for existing code)
window.firebaseAuth = auth;
window.firebaseDb = db;