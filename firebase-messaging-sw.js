importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

 // Your web app&#39;s Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: &quot;AIzaSyDBeEgCHBK-lso0KqgXIQJpySc9_ZgOG4U&quot;,
    authDomain: &quot;blogtechzost.firebaseapp.com&quot;,
    projectId: &quot;blogtechzost&quot;,
    storageBucket: &quot;blogtechzost.appspot.com&quot;,
    messagingSenderId: &quot;413333693804&quot;,
    appId: &quot;1:413333693804:web:c8e487789067d6d7473f49&quot;,
    measurementId: &quot;G-Y01V1N2N09&quot;
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
