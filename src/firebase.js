// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCITftY4yuRsduD0AUd2E161LNlm3b6TYs',
  authDomain: 'slack-clone-ceacb.firebaseapp.com',
  projectId: 'slack-clone-ceacb',
  storageBucket: 'slack-clone-ceacb.appspot.com',
  messagingSenderId: '998768266333',
  appId: '1:998768266333:web:7e06d5593b498a940611b4',
  measurementId: 'G-6T0S3Y4072',
};

const firebaseApp = firebase.initializeApp (firebaseConfig);
const db = firebaseApp.firestore ();
const auth = firebase.auth ();
const provider = new firebase.auth.GoogleAuthProvider ();

export {auth, provider};
export default db;
