var Log ="Console Log: ";
var system ={
log: function(msg){ Log +="<br>"+msg; document.getElementById("userlog").innerHTML=Log; },
save: function(id, color){ document.getElementById(id).style.color=color; }
}
