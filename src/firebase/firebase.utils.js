import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDbP_XV2IjkSp1GecpG0oUxJwPQ4HiDYiE",
  authDomain: "crwn-db-6bdd6.firebaseapp.com",
  databaseURL: "https://crwn-db-6bdd6.firebaseio.com",
  projectId: "crwn-db-6bdd6",
  storageBucket: "",
  messagingSenderId: "522130903327",
  appId: "1:522130903327:web:d46bfcdfae666313"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
