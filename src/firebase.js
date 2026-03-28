import firebase from 'firebase'

var firebaseConfig = {
 
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//firebase methods  
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
