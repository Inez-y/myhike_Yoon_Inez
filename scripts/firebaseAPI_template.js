//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyAJVL0wtHbkgrchtdDcPZzMMoj1HUQHLDg",
    authDomain: "inez-yoon-1031.firebaseapp.com",
    projectId: "inez-yoon-1031",
    storageBucket: "inez-yoon-1031.appspot.com",
    messagingSenderId: "384007022941",
    appId: "1:384007022941:web:fdc72bff3b05df42cd60b4"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();