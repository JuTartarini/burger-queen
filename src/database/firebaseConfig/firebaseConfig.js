import  firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD17yIUJU2D8yyScRHGnQ8Hdm65UVkWxa0",
    authDomain: "login-request-9b1cc.firebaseapp.com",
    databaseURL: "https://login-request-9b1cc.firebaseio.com",
    projectId: "login-request-9b1cc",
    storageBucket: "login-request-9b1cc.appspot.com",
    messagingSenderId: "854426432945",
    appId: "1:854426432945:web:f4eb515005ae8df9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;


//   import app from 'firebase/app';

// const config = {
//   apiKey: "AIzaSyD17yIUJU2D8yyScRHGnQ8Hdm65UVkWxa0",
//   authDomain: "login-request-9b1cc.firebaseapp.com",
//   databaseURL: "https://login-request-9b1cc.firebaseio.com",
//   projectId: "login-request-9b1cc",
//   storageBucket: "login-request-9b1cc.appspot.com",
//   messagingSenderId: "854426432945",
//   appId: "1:854426432945:web:f4eb515005ae8df9"
// };

// class Firebase {
//   constructor() {
//     app.initializeApp(config);
//   }
// }

// export default Firebase;