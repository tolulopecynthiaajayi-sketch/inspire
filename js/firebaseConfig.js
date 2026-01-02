// Firebase Compat SDK Configuration
// This version uses the global 'firebase' namespace so it works directly on the file:// protocol
// without needing a local server.

const firebaseConfig = {
    apiKey: "AIzaSyBG2ITjfDqdfSRsuI9AgufzQY95HO5Y7ME",
    authDomain: "alora-e67c7.firebaseapp.com",
    projectId: "alora-e67c7",
    storageBucket: "alora-e67c7.firebasestorage.app",
    messagingSenderId: "812537083370",
    appId: "1:812537083370:web:7b01d09491bc23c739ee93",
    measurementId: "G-TM4Y2682JV"
};

// Initialize Firebase (Global Namespace)
if (typeof firebase !== 'undefined') {
    const app = firebase.initializeApp(firebaseConfig);

    // Initialize Services
    window.auth = firebase.auth();
    window.db = firebase.firestore();
    window.analytics = firebase.analytics();

    console.log("Firebase Initialized (Compat Mode)");

    // Notify app that we are ready
    window.isFirebaseReady = true;
    window.dispatchEvent(new Event('firebase-ready'));
} else {
    console.error("Firebase SDK not loaded. Make sure generic script tags are in the HTML.");
}