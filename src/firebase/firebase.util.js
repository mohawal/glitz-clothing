import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    
        apiKey: "AIzaSyAr7kUIf4fL4kTRvUHkpKjh1iQPNrbiGX0",
        authDomain: "crowndb-befa1.firebaseapp.com",
        databaseURL: "https://crowndb-befa1.firebaseio.com",
        projectId: "crowndb-befa1",
        storageBucket: "crowndb-befa1.appspot.com",
        messagingSenderId: "507864732532",
        appId: "1:507864732532:web:adfc8007e053837ae25221",
        measurementId: "G-LM9WXF81Y7"
      
};


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

