importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

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
 const messaging=firebase.messaging();

messaging.setBackgroundMessageHandler(function (payload) {
    console.log(payload);
    const notification=JSON.parse(payload);
    const notificationOption={
        body:notification.body,
        icon:notification.icon
    };
    return self.registration.showNotification(payload.notification.title,notificationOption);
});
