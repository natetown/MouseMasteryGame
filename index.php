<!DOCTYPE HTML>

<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0 encoding="UTF-8 standalone="yes" ?>';

echo '<response>';
$gamerAlias = $_GET['gamerAlias'];
$gamerAliasArray = array('Nathan', 'Bacon');

if(in_array($gamerAlias, $gamerAliasArray))
echo 'gamerAlias = Nathan or Bacon';
	
echo '</response>';

?>
<html>


<head>
    <title>Game of Clicks</title>
	<style>canvas { width: 100%; height: 100% }</style>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/prototype/1.7.2.0/prototype.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/threejs/r67/three.min.js"></script>
	<script src="myjs.js"> </script>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body onload="process()">



<button class="add" id="1" display: none></button>


<ul>
    <li>Increase mouse accuracy!</li>
    <li>Improve reaction speed!</li>
    <li>Increase awareness!</li> 
    </li>
</ul>
    <div  class="start" onclick="datGameDoe()">Play</div>

<p>
                Instructions: <br><br>
          
                1. Enter your Gamer Alias
					<input type ="text" id="userInput"></input>
                <br>
                2. Click the Play button.
                <br>
                3. Click on the newly generated squares as quickly as possible within 60 seconds.
				
</p>
</body>
</html>