import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBOunlGV3VESbmTeI7LldojND8-kvhTEK4",
  authDomain: "firechat-d96cd.firebaseapp.com",
  projectId: "firechat-d96cd",
  storageBucket: "firechat-d96cd.appspot.com",
  messagingSenderId: "369215342430",
  appId: "1:369215342430:web:400dd1fd75854c7d5b71cf",
  measurementId: "G-9B7GXEFWST"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };