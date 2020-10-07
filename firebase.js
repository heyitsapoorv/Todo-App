import firebase from 'firebase';

const firebaseApp=firebase.initializeApp(
    {
        apiKey: "AIzaSyDbgF3_OgGV0dmjJ3DFO3-IVI_SRtVbY4Y",
        authDomain: "todo-app-cp-b58b2.firebaseapp.com",
        databaseURL: "https://todo-app-cp-b58b2.firebaseio.com",
        projectId: "todo-app-cp-b58b2",
        storageBucket: "todo-app-cp-b58b2.appspot.com",
        messagingSenderId: "508501967555",
        appId: "1:508501967555:web:245f2e473f60e8ef679876",
        measurementId: "G-VBN3LXQ6B3"
      }
);

const db=firebaseApp.firestore();
export{db};






// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = 