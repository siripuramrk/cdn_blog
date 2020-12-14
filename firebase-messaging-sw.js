
 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');
 // Initialize the Firebase app in the service worker by passing in
 // your app's Firebase config object.
 // https://firebase.google.com/docs/web/setup#config-object
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBeEgCHBK-lso0KqgXIQJpySc9_ZgOG4U",
  authDomain: "blogtechzost.firebaseapp.com",
  projectId: "blogtechzost",
  storageBucket: "blogtechzost.appspot.com",
  messagingSenderId: "413333693804",
  appId: "1:413333693804:web:c8e487789067d6d7473f49",
  measurementId: "G-Y01V1N2N09"
};
 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
// [END on_background_message]



