//basic command set-up
var Cache =[];
var OPS =["Jacob", "Devon"]
var command;
var answer;
var Cmd;
var errormsg =null;
var allow ="true"
var energy =0;
var log = function(msg){
  confirm("Console: \n"+msg);
};
var error ={
  "E":["Sure", "Whatt ever", "Ok ill pretend i know what your talking about"],
  "J":["Jacob"]
}
function ProcCmd(){
  energy -=1;
  command = document.getElementById("CommandPrompt").value;
  Cmd = command.toLowerCase();
  system.log("You: "+command);
  var RandKey = parseInt(Math.random()*Responces[Cmd].length);
  if(Responces[Cmd]){
    answer = Responces[Cmd][RandKey];
  system.log("Jarvis: "+answer);
  }
  else if(typeof Responces[Cmd] === "undefined"){
      var rnd = parseInt(Math.random()*4);
  system.log("Jarvis: "+Responces["undefined"][rnd]);
  }
  else{
    system.log("Jarvis:"+" Okay....")
  }
}

function Unlock(event){
  if(74 === event.keyCode){
    document.body.style.display='block';
  }
}

function save(){
  Cache[1] = document.getElementById("userdata").value;
  localStorage.setItem("save", Cache[1]);
}

function Edit(){
 var color = document.getElementById("color").value;
 document.body.style.backgroundColor=color;
 document.getElementById("devtools").style.display='none';
}
setInterval("UpdateEnergy()", "200");
function UpdateEnergy(){
  if(energy=="9"){
    document.getElementById("Energy").innerHTML='⚡⚡⚡⚡⚡⚡⚡⚡⚡';
    allow ="true";
    document.getElementById("storage").setAttribute("min", "1");
document.body.style.display='block';
  }
else if(energy=="8"){
document.getElementById("Energy").innerHTML='⚡⚡⚡⚡⚡⚡⚡⚡';
allow ="true"
document.body.style.display='block';
}
else if(energy=="7"){
document.getElementById("Energy").innerHTML='⚡⚡⚡⚡⚡⚡⚡';
allow ="true";
document.body.style.display='block';
}
else if(energy=="6"){
  document.getElementById("Energy").innerHTML='⚡⚡⚡⚡⚡⚡';
  allow ="true";
document.body.style.display='block';
}
else if(energy=="5"){
  documnt.getElementById("Energy").innerHTML='⚡⚡⚡⚡⚡';
  allow ="true";
document.body.style.display='block';
}
else if(energy=="4"){
  document.getElementById("Energy").innerHTML='⚡⚡⚡⚡';
  allow ="true"
document.body.style.display='block';
}
else if(energy=="3"){
  document.getElementById("Energy").innerHTML='⚡⚡⚡';
  allow ="true";
document.body.style.display='block';
}
else if(energy=="2"){
  document.getElementById("Energy").innerHTML='⚡⚡';
  allow ="true";
document.body.style.display='block';
}
else if(energy=="1"){
  document.getElementById("Energy").innerHTML='⚡';
document.body.style.display='block';

  allow ="true";
}
else if(energy=="0"){
  document.getElementById("Energy").innerHTML='';
  allow ="false";
}
else if(energy=="10"){
  document.getElementById("Energy").innerHTML='⚡⚡⚡⚡⚡⚡⚡⚡⚡⚡';
  allow ="true";
  document.getElementById("storage").setAttribute("min", "2");
document.body.style.display='block';
}
else if(energy=="-1"){
  energy =0;
}
else{
  energy =10;
}

}
setInterval("Charge()", "10000");
function Charge(){
  energy +=1;
}
function Uncharge(){
  energy -=1;
}
setInterval("Saved()", "1")
var Ucache = localStorage.getItem("Data");
var Number =0;
function Saved(){
Ucache = Ucache+"B";
Number +=1;
document.getElementById("S1").innerHTML=Number;
localStorage.setItem("Data", Ucache)
}

