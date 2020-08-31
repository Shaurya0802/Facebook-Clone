import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyADXhBoVRPMZJoeYBfLLDx2VOmv6jO8tTc",
    authDomain: "facebook-clone-cb1fe.firebaseapp.com",
    databaseURL: "https://facebook-clone-cb1fe.firebaseio.com",
    projectId: "facebook-clone-cb1fe",
    storageBucket: "facebook-clone-cb1fe.appspot.com",
    messagingSenderId: "788712501318",
    appId: "1:788712501318:web:82f57f9e5e232e375a9a47",
    measurementId: "G-YB6KEECXXB"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;