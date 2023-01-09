import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyAVuj0JM1YoezYEq2vgOJZOLQ6VthhqZ_o",
    authDomain: "project-58-cd746.firebaseapp.com",
    databaseURL: "https://project-58-cd746-default-rtdb.firebaseio.com",
    projectId: "project-58-cd746",
    storageBucket: "project-58-cd746.appspot.com",
    messagingSenderId: "99618198376",
    appId: "1:99618198376:web:fc8e4bcbb9209616453cdd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
