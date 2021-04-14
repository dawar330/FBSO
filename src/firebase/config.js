import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import "firebase/functions";
var firebaseConfig = {
  apiKey: "AIzaSyC6TtsBg-C_Uz1Uuqt_27zDjnRK9-LIspA",
  authDomain: "fbso-3bf30.firebaseapp.com",
  projectId: "fbso-3bf30",
  storageBucket: "fbso-3bf30.appspot.com",
  messagingSenderId: "1095370110036",
  appId: "1:1095370110036:web:d84c1c4f6c5f322ca969c1",
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore();
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export default firebase;
