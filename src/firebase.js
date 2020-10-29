import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA3F0Njz2Ls46FFM1cD-7joHP4Uu9Y7_qg",
    authDomain: "clone-56752.firebaseapp.com",
    databaseURL: "https://clone-56752.firebaseio.com",
    projectId: "clone-56752",
    storageBucket: "clone-56752.appspot.com",
    messagingSenderId: "394344640384",
    appId: "1:394344640384:web:e07b947efe246ae5795b65",
    measurementId: "G-XVEL7F18GS"
  });

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }