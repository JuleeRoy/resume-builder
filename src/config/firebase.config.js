import {getApp,getApps,initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE__APP_ID,
   
    

//  apiKey: "AIzaSyAHcBgcdGJNcU7o7RAwhXjbojBTz9otLnw",
//  authDomain: "resume-builder-22847.firebaseapp.com",
//  projectId: "resume-builder-22847",
//  storageBucket: "resume-builder-22847.appspot.com",
//  messagingSenderId: "981441012631",
//  appId: "1:981441012631:web:933cdd81f1f00709d45ad2"
  };

  const app=getApps.length > 0 ? getApp():initializeApp(firebaseConfig);
  const auth=getAuth(app);
  const db=getFirestore(app);

  export{auth,db}