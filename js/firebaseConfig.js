// Firebase Compat SDK Configuration
console.log("DEBUG: firebaseConfig.js is executing..."); // CONFIRM LOAD
// This version uses the global 'firebase' namespace so it works directly on the file:// protocol
// without needing a local server.

const firebaseConfig = {
    apiKey: "AIzaSyDJdrBgSlxb-DnsnAzI62n2xWVexjSAWNI",
    authDomain: "alora-web-be4e4.firebaseapp.com",
    projectId: "alora-web-be4e4",
    storageBucket: "alora-web-be4e4.firebasestorage.app",
    messagingSenderId: "367051813766",
    appId: "1:367051813766:web:12c289881b74d074b73207",
    measurementId: "G-G662KWR4CN"
};

// Initialize Firebase (Global Namespace)
if (typeof firebase !== 'undefined') {
    // Check if already initialized to avoid "default app already defined" errors
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    // Initialize Services (Safely)
    if (firebase.auth) window.auth = firebase.auth();
    if (firebase.firestore) window.db = firebase.firestore();
    if (firebase.storage) window.storage = firebase.storage();
    if (firebase.analytics) window.analytics = firebase.analytics();

    console.log("Firebase Initialized (Compat Mode) - Project: alora-web-be4e4");

    // Notify app that we are ready
    window.isFirebaseReady = true;
    window.dispatchEvent(new Event('firebase-ready'));
} else {
    console.error("Firebase SDK not loaded. Make sure generic script tags are in the HTML.");
    alert("CRITICAL ERROR: Firebase SDK not loaded. Please check your internet connection.");
}