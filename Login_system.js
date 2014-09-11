<!DOCTYPE html>
<html>
<body>


<b> Username:</b>

<input id="username" type="text" />

<b> password:</b>
<input id="password" type="pwd" />

<button onclick="Auth()" type="button">Login</button>
<br />
<script>



function Auth(){
var p;
var u;
var text;

p = document.getElementById("password").value
u = document.getElementById("username").value

if(u=="JBteam"&&p=="JB"){
window.alert("Account Disabled")
} else if(u=="Jacob"&&p=="JAB"){
window.prompt("please enter password", "0000")
window.location ='http://jbcompanyrules.blogspot.com/p/login_10.html'
}
else if(u=="Colton"&&p=="MD"){
window.location ='http://jbcompanyrules.blogspot.com/p/login_10.html'
}
else if(u=="Death"&&p=="Excalibur"){
window.alert("Welcome Lord death")
window.location ='http://jbcompanyrules.blogspot.com/p/login_10.html'
}
else if(u=="the_devals_helper"&&p=="06232001"){
window.alert("Welcome devals helper")
window.location ='http://jbcompanyrules.blogspot.com/p/login_10.html'
}
else{
window.alert("error")
window.prompt("please leave your name:", "here")
}
}





</script>

