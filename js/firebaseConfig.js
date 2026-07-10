// Firebase Compat SDK Configuration
// This version uses the global 'firebase' namespace so it works directly on the file://
// protocol without needing a local server. Loaded via CDN <script> tags in each HTML page.

const firebaseConfig = {
    apiKey: "AIzaSyBkO0QDhFrETbalbLDzVEvfb_XLBqFnuQ8",
    authDomain: "alora-20915.firebaseapp.com",
    projectId: "alora-20915",
    storageBucket: "alora-20915.firebasestorage.app",
    messagingSenderId: "559321839947",
    appId: "1:559321839947:web:6039702a5964e3b01090ce",
    measurementId: "G-7GCS4MXSM4"
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

    console.log("Firebase Initialized (Compat Mode) - Project:", firebaseConfig.projectId);

    // Notify app that we are ready
    window.isFirebaseReady = true;
    window.dispatchEvent(new Event('firebase-ready'));
} else {
    console.error("Firebase SDK not loaded. Make sure Firebase <script> tags are included in the HTML before this file.");
}