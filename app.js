firebase.initializeApp({
    apiKey: "AIzaSyBAySAEiHNMFgxTejOrRpRg483ri_qnOok",
    authDomain: "crudv3.firebaseapp.com",
    databaseURL: "https://crudv3.firebaseio.com",
    projectId: "crudv3",
    storageBucket: "crudv3.appspot.com",
    messagingSenderId: "843071385099"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


export {
    db
};
/*
db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });*/