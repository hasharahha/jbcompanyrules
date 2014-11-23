//Made by HASHARAHHA14
//Auto torch 9.5 V:1.0
//inspiredd by kacperski
var active = false;
clientMessage(" made by Jacob Bondley")
function useItem(x, y, z, itemId, blockId, side){
if(itemId=="50"&&active==false){
clientMessage("§2 auto torch Enabled§2")
active = true;
}
}
function modTick(){
 
var TIMER = Math.floor((Math.random()*500)+1);
if(TIMER=="250"&&active==true){
setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),50)
}
if(TIMER=="500"&&active==true){
setTile(getPlayerX(),getPlayerY()-1,getPlayerZ(),50)
}
}
