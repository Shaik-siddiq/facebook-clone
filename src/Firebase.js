// v9 compat packages are API compatible with v8 code

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCR4cxUmDImGptXvRDilt-A_W6C7_opvQ0",
    authDomain: "facebook-clone-fb5fc.firebaseapp.com",
    projectId: "facebook-clone-fb5fc",
    storageBucket: "facebook-clone-fb5fc.appspot.com",
    messagingSenderId: "1052860671173",
    appId: "1:1052860671173:web:256e0096c458d29619fcac",
    measurementId: "G-C54EVEQ0ZQ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
