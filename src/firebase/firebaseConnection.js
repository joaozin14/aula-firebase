// Import the functions you need from the SDKs you need
import firebase from "firebase/app";

import 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAk35866dK0YOBizCzeTeoAcBHGYdegIOY",
  authDomain: "aula-1-fa806.firebaseapp.com",
  databaseURL: "https://aula-1-fa806-default-rtdb.firebaseio.com",
  projectId: "aula-1-fa806",
  storageBucket: "aula-1-fa806.appspot.com",
  messagingSenderId: "45968647202",
  appId: "1:45968647202:web:88e63e38ef9868e8b0967b",
  measurementId: "G-W5PJTNWKQB"
};
// Initialize Firebase
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}
export default firebase;