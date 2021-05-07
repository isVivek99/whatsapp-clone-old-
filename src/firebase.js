import firebase from 'firebase/app';
import 'firebase/firestore'; //database
import 'firebase/auth';//authentication



const firebaseConfig = {
    apiKey: "AIzaSyAK1WoHUnXVQZtgtiv6xvDtQN-M6nDmLp8",
    authDomain: "whatsapp-clone-ff103.firebaseapp.com",
    projectId: "whatsapp-clone-ff103",
    storageBucket: "whatsapp-clone-ff103.appspot.com",
    messagingSenderId: "3764352328",
    appId: "1:3764352328:web:da498992c520c56f16af7d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export { auth, provider,};
  export default db;
  

