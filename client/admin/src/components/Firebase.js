import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import {
  REACT_APP_apiKey,
  REACT_APP_authDomain,
  REACT_APP_databaseURL,
  REACT_APP_projectId,
  REACT_APP_storageBucket,
  REACT_APP_appId,
  REACT_APP_measurementId,
} from "../env";

const firebaseConfig = {
  apiKey: REACT_APP_apiKey,
  authDomain: REACT_APP_authDomain,
  databaseURL: REACT_APP_databaseURL,
  projectId: REACT_APP_projectId,
  storageBucket: REACT_APP_storageBucket,
  appId: REACT_APP_appId,
  measurementId: REACT_APP_measurementId,
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
export const db = myFirebase.firestore();
export const auth = myFirebase.auth();
