const firebaseConfig = {
  apiKey: process.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.REACT_APP_FIREBASE_DB_URL,
  projectId: process.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
