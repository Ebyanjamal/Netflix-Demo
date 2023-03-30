
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "PROJECT_API_KEY",
    
    authDomain: "netflix-clone-phase5.firebaseapp.com",
    projectId: "netflix-clone-phase5",
    storageBucket: "netflix-clone-phase5.appspot.com",
    messagingSenderId: "477561634872",
    appId: "1:477561634872:web:8fb00453b7079dcd3aa6cd",
    measurementId: "G-1M534EN64M"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore(); 

  const auth = firebase.auth();  


export {auth} 
export default db;
