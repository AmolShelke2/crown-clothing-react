import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyCiII0OtgwwXzzAGeHdNHTtcquYSsZsjls',
  authDomain: 'crown-db-81294.firebaseapp.com',
  projectId: 'crown-db-81294',
  storageBucket: 'crown-db-81294.appspot.com',
  messagingSenderId: '986509199354',
  appId: '1:986509199354:web:c82795f2a4d38fa8c18643',
  measurementId: 'G-DHZJ08RZZD',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
