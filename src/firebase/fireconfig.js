import { initializeApp } from "firebase/app";
import * as firebase from 'firebase';
import 'firebase/storage';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9EYjADbA2znRuCQNmPX-3R6Zi50JLxcs",
  authDomain: "react-photogallery-1865d.firebaseapp.com",
  projectId: "react-photogallery-1865d",
  storageBucket: "react-photogallery-1865d.appspot.com",
  messagingSenderId: "808524019319",
  appId: "1:808524019319:web:7795bd8937d7eac26e7872"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectFireStore,projectStorage };