import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCsypf0AVcpRT_pEopEySxp2I40zzZ_jy8",
    authDomain: "crwn-db-2770b.firebaseapp.com",
    projectId: "crwn-db-2770b",
    storageBucket: "crwn-db-2770b.appspot.com",
    messagingSenderId: "9016041699",
    appId: "1:9016041699:web:368dd6d55895e828aa25d6",
    measurementId: "G-K4Q7H2KTHF"
  }


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
// export const firestore = fireb
export const signInWithGoogle=()=> signInWithPopup(auth,provider)

