var players =["Etho", "Docm77", "sethbling", "captainsparklez", "ZexyZek", "Herobrine", "OMGitsFireFox", "Joebuz", "daNoob1324", "HerobrineSlayer12", "SkythekidRS", "NoobsRule", "Blacksoul", "asdfsdsdsdsdsdfsdfsd", "SuperCreeper", "SynHD", "Killer11"];
var Selected_player =[];
var Online =[];
var split =", ";
var Chat ="off";
Selected_player[0] = Math.floor(Math.random()*11);
Selected_player[1] = Math.floor(Math.random()*16);
Selected_player[2] = Math.floor(Math.random()*6);
Selected_player[3] = Math.floor(Math.random()*15);
Selected_player[4] = Math.floor(Math.random()*8*2);
Online[0] = players[Selected_player[0]];
Online[1] = players[Selected_player[1]];
Online[2] = players[Selected_player[2]];
Online[3] = players[Selected_player[3]];
Online[4] = players[Selected_player[4]];
/*
confirm("Server: IP:************ Port: ***** \n Online Players: \n"+" "+Online[0]+split+Online[1]+split+Online[2]+split+Online[3]+split+Online[4]);
*/

