import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBe6xWBj5InBDu7zmN_QN_elYX7f2cO2pU",
    authDomain: "pictures-practice.firebaseapp.com",
    projectId: "pictures-practice",
    storageBucket: "pictures-practice.appspot.com",
    messagingSenderId: "675102530833",
    appId: "1:675102530833:web:575fd92abe622d235d80b0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };