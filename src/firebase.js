import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCRUf1tokvMSlQ-9tV0gZtMtu3vvdGqZW8",
    authDomain: "hack36-2888e.firebaseapp.com",
    databaseURL: "https://hack36-2888e-default-rtdb.firebaseio.com",
    projectId: "hack36-2888e",
    storageBucket: "hack36-2888e.appspot.com",
    messagingSenderId: "364344241345",
    appId: "1:364344241345:web:b10e53a01d23bf99633840",
    measurementId: "G-0J5BBRF8NK"
  };

  const fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();