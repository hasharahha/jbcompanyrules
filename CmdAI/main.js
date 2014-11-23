//basic command set-up
alert("loading")
/*
This very basic system use if, else if statements to get the command and call it
Made By Jacob Bondley 
You have permision to use this, Give credit
Jacob Adrien Bondley

*/
var Cache =[];
var OPS =["Jacob", "Devon"]
var command;
var Cmd;
var log = function(msg){
  confirm("Console: \n"+msg);
};
function ProcCmd(){
  command = document.getElementById("CommandPrompt").value;
  Cmd = command.split(" ");
  //basic required Commands
  if(Cmd[0]=="/help"){
    log("Help list 1 of 1 \n /calculate \n /op \n /deop \n /write \n /load \n /edit <background | font> \n /round \n /ban ")
  }
  else if(Cmd[0]=="/calculate"){
    var answer = eval(Cmd[1]);
    log("Answer: \n"+answer);
  }
  else if(Cmd[0]=="/op"&&Cmd[0] != "undefined"){
    log(Cmd[1]+" Has Been switched to op")
    OPS[3] =Cmd[1];
    //No Php no save, no server
  }
  else if(Cmd[0]=="/deop"&&Cmd[0] != "undefined"){
    log(Cmd[1]+" Has Been Deoped")
  }
  else if(Cmd[0]=="/write"){
    document.getElementById("Data").style.display='block';
  }
  else if(Cmd[0]=="/load"){
    document.getElementById("Data").style.display='block';
    Cache[2] = localStorage.getItem("save");
    document.getElementById("userdata").value=Cache[2];
  }
  else if(Cmd[0]=="/edit"&&Cmd[1]=="background"){
    document.getElementById("devtools").style.display='block';
  }
  else if(Cmd[0]=="/ban"){
    log(Cmd[2]+" Has been baned!");
  }
  else if(Cmd[0]=="/round"){
    var roundedNumber = Math.round(Cmd[1]);
    log(Cmd[1]+" When rounded is "+roundedNumber);
  }
  else{
    log("Sorry this is unknown to ['console']");
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

