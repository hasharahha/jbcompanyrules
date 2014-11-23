//basic command set-up
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
    log("Help list 1 of 1 \n /calculate \n /op \n /deop \n /write")
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
}


