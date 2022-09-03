// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDZzLgYZesoUwcBGL5CoDEOkaIfI-hhd-M",
    authDomain: "ithacker-2a53d.firebaseapp.com",
    databaseURL: "https://ithacker-2a53d-default-rtdb.firebaseio.com",
    projectId: "ithacker-2a53d",
    storageBucket: "ithacker-2a53d.appspot.com",
    messagingSenderId: "742817429130",
    appId: "1:742817429130:web:62c6c2418812a24885df73"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose: "adding user"
    });

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}