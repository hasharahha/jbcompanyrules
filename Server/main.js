var players =["Etho", "Docm77", "sethbling", "captainsparklez", "ZexyZek", "Herobrine", "OMGitsFireFox", "Joebuz", "daNoob1324", "HerobrineSlayer12", "SkythekidRS", "NoobsRule", "Blacksoul", "asdfsdsdsdsdsdfsdfsd", "SuperCreeper"];
var Selected_player =[];
var Online =[];
var split =", ";
Selected_player[0] = Math.floor(Math.random()*11);
Selected_player[1] = Math.floor(Math.random()*11);
Selected_player[2] = Math.floor(Math.random()*11);
Online[0] = players[Selected_player[0]];
Online[1] = players[Selected_player[1]];
Online[2] = players[Selected_player[2]];

confirm("Server: IP:************ Port: **** \n Online Players: \n"+" "+Online[0]+split+Online[1]+split+Online[2]);
