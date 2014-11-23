//Made by HASHARAHHA14
//A.k.A Jacob Bondley
//Jac frost v1.0
var active=false;
clientMessage(" Mod Made by HASHARAHHA14")
function useItem(x, y, z, itemId, blockId, side){
if(itemId=="0"){
 
setTile(x ,y+1,z,78)
active =true;
}
}
function modTick(){
 
var X = Math.round(getPlayerX())
var Y = Math.round(getPlayerY())
var Z = Math.round(getPlayerZ())
if(active==true){
setTile(X,Y-3,Z,80)
setTile(X,Y-2,Z,79)
}
}
