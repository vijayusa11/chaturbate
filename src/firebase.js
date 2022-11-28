import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAkjRqxiIsJGyznMo5ew-ym2euSQB9UTUA",
    authDomain: "sarita-b4663.firebaseapp.com",
    projectId: "sarita-b4663",
    storageBucket: "sarita-b4663.appspot.com",
    messagingSenderId: "644015818534",
    appId: "1:644015818534:web:a7ba471d14a5deb47a63e7",
    measurementId: "G-QS24QZWN62"
  });

  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  const provider1 = new firebase.auth.FacebookAuthProvider();

  export { db, auth, provider, provider1 };