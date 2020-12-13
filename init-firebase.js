
 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDBeEgCHBK-lso0KqgXIQJpySc9_ZgOG4U",
    authDomain: "blogtechzost.firebaseapp.com",
    projectId: "blogtechzost",
    storageBucket: "blogtechzost.appspot.com",
    messagingSenderId: "413333693804",
    appId: "1:413333693804:web:c8e487789067d6d7473f49",
    measurementId: "G-Y01V1N2N09"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const messaging=firebase.messaging();
