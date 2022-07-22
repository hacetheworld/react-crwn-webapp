import { initializeApp } from 'firebase/app';
import {getFirestore,collection,getDoc, getDocs, doc, Firestore, setDoc} from 'firebase/firestore';
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
const db=getFirestore(app)
// Initialize Cloud Firestore and get a reference to the service
export const createUserProfileDocument=async (userAuth,additionalData)=>{
  if (!userAuth)return
  const userRef = doc(db, "users", `${userAuth.uid}`);
  const userSnap = await getDoc(userRef);
if (!userSnap.exists()) {
  const {displayName,email}=userAuth
  const createdAt=new Date()
  try {
    await setDoc(userRef,{
      displayName,
      email,
      createdAt,
      ...additionalData
    })
  } catch (error) {
    console.log("error crated user");
  }

}

return userRef
}
export const auth = getAuth(app)
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"})
// export const firestore = fireb
export const signInWithGoogle=()=> signInWithPopup(auth,provider)
