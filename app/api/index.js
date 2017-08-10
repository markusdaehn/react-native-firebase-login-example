import firebase from 'firebase';

const config = {
   apiKey: "AIzaSyBTQ9ZxGK8Ia6bjbRwcRboYN2CpbiBRMh8",
   authDomain: "yuzsa-prod.firebaseapp.com",
   databaseURL: "https://yuzsa-prod.firebaseio.com",
   projectId: "yuzsa-prod",
   storageBucket: "yuzsa-prod.appspot.com",
   messagingSenderId: "512006653654"
 };

firebase.initializeApp(config);

export const auth = firebase.auth();
