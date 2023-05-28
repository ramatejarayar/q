var firebaseConfig = {
  apiKey: "AIzaSyAHFA5r5ZB0-hH43zr6pbLRY4bTK-ouVmo",
  authDomain: "kwitter-2ab91.firebaseapp.com",
  databaseURL: "https://kwitter-2ab91-default-rtdb.firebaseio.com",
  projectId: "kwitter-2ab91",
  storageBucket: "kwitter-2ab91.appspot.com",
  messagingSenderId: "40760777414",
  appId: "1:40760777414:web:1afd793d726940931d55c7"
};

firebase.initializeApp(firebaseConfig);




user_name = location.getItem("user_name")
document.getElementById("tuser").innerHTML = user_name;

function addrooms()
{
    room_name = document.getElementById("roomname").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "Adding room name"
    });

    localStorage.setItem("roomname", room_name)

    window.location = "chat_page.HTML"
}