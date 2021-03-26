import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB1_feUYOZ2290WpcPQ4KOsAMmlvf2Q794",
  authDomain: "react-firebase-starter-44276.firebaseapp.com",
  projectId: "react-firebase-starter-44276",
  storageBucket: "react-firebase-starter-44276.appspot.com",
  messagingSenderId: "394697231368",
  appId: "1:394697231368:web:3a96c76dbe2c4d576515bd"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//firebase methods  
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
