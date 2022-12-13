import firebase from 'fibase/app';


import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDEhSG3Dh8gnY25PzdR2OLPtrRPsNsM070",
    authDomain: "meu-projeto-5f58d.firebaseapp.com",
    projectId: "meu-projeto-5f58d",
    storageBucket: "meu-projeto-5f58d.appspot.com",
    messagingSenderId: "844896192377",
    appId: "1:844896192377:web:b3e2753c6f2d9920a851a8"
  };
  
  // Initialize Firebase



  if (firebase.app.lenght === 0) {
    Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
