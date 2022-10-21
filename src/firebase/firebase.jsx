import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyADeXuFYJkSom_fH_TL83kCsoesKSsVuyI",
  authDomain: "sneakers-ecomerce.firebaseapp.com",
  projectId: "sneakers-ecomerce",
  storageBucket: "sneakers-ecomerce.appspot.com",
  messagingSenderId: "915067928845",
  appId: "1:915067928845:web:0c01b8d8f31fde04907044",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
