 <?php
$stat = stat("text.php");
echo "Access time: " .$stat["atime"];
echo "<br>Modification time: " .$stat["mtime"];
echo "<br>Device number: " .$stat["dev"];
?> 
