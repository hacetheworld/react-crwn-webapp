import {getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCsypf0AVcpRT_pEopEySxp2I40zzZ_jy8",
    authDomain: "crwn-db-2770b.firebaseapp.com",
    projectId: "crwn-db-2770b",
    storageBucket: "crwn-db-2770b.appspot.com",
    messagingSenderId: "9016041699",
    appId: "1:9016041699:web:368dd6d55895e828aa25d6",
    measurementId: "G-K4Q7H2KTHF"
  }

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const users = collection(db, "users");
const docSnap = await getDoc(users);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}