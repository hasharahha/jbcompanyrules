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
    log("Help list 1 of 1 \n /calculate \n /op")
  }
  else if(Cmd[0]=="/calculate"){
    var answer = eval(Cmd[1]);
    log("Answer: \n"+answer);
  }
  else if(Cmd[0]=="/op"){
    log(Cmd[1]+" Has Been switched to op")
    OPS[3] =Cmd[1];
  }
}
