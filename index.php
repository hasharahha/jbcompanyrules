<!DOCTYPE html>
<html>
<head>
  <title>Jarvis[Unleashed]</title>
</head>
<body style="background-color: black;">
<div id="jarvis">
  <img src="https://dl.dropboxusercontent.com/s/r4cv4tdlnyd6ml4/giphy.gif" height="600" width="900">
  <img src="https://dl.dropboxusercontent.com/s/ooaa1ewfm3e2tim/TQ7759i.gif" style="position: fixed; top: 0; right: -10; z-index: -99" height="700" width="1100"></img>
</div>
<div id="Nope" style="display: none;">
  <h3 style="color: green;">Nothing to see here I left, Don't tell jacob</h3>
</div>
</body>
<br>
<br>
<h1>dsd</h1>
<br>
<script type="text/javascript">
setInterval(function(){
  Start();
}, 1000);
alert("Bye, Bye");
  var canvas = document.getElementById("jarvis");
  var ctx = canvas.getContext("2d");
  var ai ={
    height: 600,
    width: 900,
    loaded: false
  };
  function Start(){
  var jarvis = new Image()
  jarvis.src ="https://dl.dropboxusercontent.com/s/r4cv4tdlnyd6ml4/giphy.gif";
  jarvis.onload = function(){
  ai.loaded = true;
  };
  }
</script>
