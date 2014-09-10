//Made by Jacob Bondley

function Home(){
window.location ='http://jbcompanyrules.blogspot.com/index.html'
}

function Auth(){
var p;
var u;
var text;

p = document.getElementById("password").value
u = document.getElementById("username").value

if(u=="JBteam"&&p=="JAB"){

window.alert("Sorry please see system administrater")
}
else if(u=="HASHARAHHA14"&&p==="017964"){
window.location ='http:///jbcompanyrules.blogspot.com/p/jab.html';
window.alert(" Admin sign-in Loading")
setTimeout(function(){window.alert("welcome boss")}, 8000)
}
else if(u=="Joshua"&&p=="MD"){
  window.alert("welcome joshua")
  window.location ='http://jbcompanyrules.blogspot.com/p/jab.html';
}
else if(u=="Devon"&&p=="SD"){
  window.location ='http://jbcompanyrules.blogspot.com/p/jab.html';
}
else if(u=="Colton"&&p=="MD"){
  window.alert("welcome colton")
  window.location ='http://jbcompanyrules.blogspot.com/p/jab.html';
}
else{
  window.alert("incorrect password")
  var guest = prompt("Please enter your name:", "here")
  window.alert("sorry you must be a member")
}

}

function Signup(){
window.prompt("Please Enter group code", "Group code")
window.alert("incorrect group code please see Jacob Bondley")
}






