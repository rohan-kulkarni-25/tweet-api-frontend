import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {

  apiKey: "AIzaSyCcr9mn7i1mW6GdquJgGbLR2uQH8D-3zeA",

  authDomain: "signinwithapp-94181.firebaseapp.com",

  projectId: "signinwithapp-94181",

  storageBucket: "signinwithapp-94181.appspot.com",

  messagingSenderId: "805376636722",

  appId: "1:805376636722:web:61b9cb277d49fa56b2c92b",

  measurementId: "G-SSX9YLQPSV"

};



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
