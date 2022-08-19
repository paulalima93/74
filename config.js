import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


var firebaseConfig = {
  apiKey: "AIzaSyB42jAG9WpL7RSmvOAVKpc0-7JyuISiSe8",
  authDomain: "biblioteca-18058.firebaseapp.com",
  projectId: "biblioteca-18058",
  storageBucket: "biblioteca-18058.appspot.com",
  messagingSenderId: "990763402147",
  appId: "1:990763402147:web:320458a2190379d38e5016"
  
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();