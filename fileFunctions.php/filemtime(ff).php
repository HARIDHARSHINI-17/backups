 <?php
echo filemtime("text.php");
echo "<br>";
echo "Content last changed: ".date("F d Y H:i:s.", filemtime("text.php"));
?> 
