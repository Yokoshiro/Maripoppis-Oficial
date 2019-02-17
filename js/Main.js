// Initialize Firebase
var config = {
    apiKey: "AIzaSyDFXhPpJhnbu6trCfxBt56wygrrrUeFFZM",
    authDomain: "maripoppis-oficial.firebaseapp.com",
    databaseURL: "https://maripoppis-oficial.firebaseio.com",
    projectId: "maripoppis-oficial",
    storageBucket: "",
    messagingSenderId: "517382701921"
  };
  firebase.initializeApp(config);

  var emailRef = firebase.database().ref('emails');

//Colocando um escutador para saber quando houve o click no botão
document.getElementById('emailforms').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var email = document.getElementById('useremail').value;

    saveEmail(email)
}

function saveEmail(email){
    var newemailRef = emailRef.push();

    newemailRef.set({
       email: email   
    });
}