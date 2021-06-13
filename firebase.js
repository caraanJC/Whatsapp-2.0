import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDJRhgnI4Ne60_avTSShwBH8aS8cJ4DSLo',
  authDomain: 'whatsapp-v2-83422.firebaseapp.com',
  projectId: 'whatsapp-v2-83422',
  storageBucket: 'whatsapp-v2-83422.appspot.com',
  messagingSenderId: '499507954082',
  appId: '1:499507954082:web:4d3a51150bb200b9c3b2fb',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
