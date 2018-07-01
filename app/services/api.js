import firebase from 'firebase';

const config = {
   apiKey: "<apikey>",
   authDomain: "<projectid>.firebaseapp.com",
   databaseURL: "https://<projectid>.firebaseio.com",
   projectId: "<projectid>",
   storageBucket: "<projectid>.appspot.com",
   messagingSenderId: "<messagesenderid>"
 };

firebase.initializeApp(config);

'auth/invalid-email'
'auth/user-disabled'
'auth/user-not-found'
'auth/wrong-password'

export const auth = firebase.auth();
