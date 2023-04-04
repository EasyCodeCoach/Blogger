const firebaseApp = firebase.initializeApp({
  /* Firebase config */
  apiKey: "AIzaSyB1KGhfGREHWxPiBmwLzhy9zcN4LhM1AME",
  authDomain: "fir-bb72f.firebaseapp.com",
  projectId: "fir-bb72f",
  storageBucket: "fir-bb72f.appspot.com",
  messagingSenderId: "84454472292",
  appId: "1:84454472292:web:ad6cf71ab4f8f96624fd71",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
