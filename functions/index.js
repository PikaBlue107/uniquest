

// const functions = require("firebase-functions");

// // The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
// const firebase = require("firebase");
// require("firebase/firestore");


// // Initialize my Firebase app
// const myAppConfig = {
//     apiKey: "AIzaSyA8dVuMTrTIYhzXTFAW1WLPZHP_EQJ2LcY",
//     authDomain: "uniquest-341820.firebaseapp.com",
//     projectId: "uniquest-341820",
//     storageBucket: "uniquest-341820.appspot.com",
//     messagingSenderId: "546888587288",
//     appId: "1:546888587288:web:377fc3428e4b5cef2e0b6d",
//     measurementId: "G-XX8VKNTNP9"
//   };
// firebase.initializeApp(myAppConfig);

// // Load the database
// var db = firebase.firestore();

// // Use emulators for now
// firebase.functions().useEmulator("localhost", 5001);



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// The Firebase Admin SDK to access Firestore.
// const admin = require('firebase-admin');
// const { QuerySnapshot } = require("@google-cloud/firestore");
// admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// exports.listAllQuests = functions.https.onRequest((req, res) => {
//     // get the quests collection
//     quests = db.collection('quests');
//     // get all quests in the collection
//     quests.get().tuen((querySnapshot) => {
//         querySnapshot.forEach((doc) => {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         })
//     });
// });