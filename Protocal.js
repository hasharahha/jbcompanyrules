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
window.location ='http://jbcompanyrules.blogspot.com/p/jab.html';
window.alert("logging in")
}
else if(u=="HASHARAHHA14"&&p==="017964"){
window.location ='http:///jbcompanyrules.blogspot.com/p/jab.html';
window.alert(" Admin sign-in Loading")
}
else if(u=="Joshua"&&p=="MD"){
  window.alert("welcome joshua")
  window.location ='http://jbcompanyrules.blogspot.com/p/jab.html'
}
else{
  window.alert("incorrect password")
}
}









