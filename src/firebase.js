import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBIG94qKrO_YZnMhgO_4gmEpFv8dgr-ZSs",
  authDomain: "todo-app-c4165.firebaseapp.com",
  projectId: "todo-app-c4165",
  storageBucket: "todo-app-c4165.appspot.com",
  messagingSenderId: "815165217832",
  appId: "1:815165217832:web:02da2598a79ee5d0fa691d",
  measurementId: "G-TMY4EHVZ2E" 
});

const db = firebaseApp.firestore();

export default db;