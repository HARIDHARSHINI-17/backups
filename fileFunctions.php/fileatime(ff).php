 <?php
echo fileatime("text.php");
echo "<br>";
echo "Last access: ".date("F d Y H:i:s.", fileatime("text.php"));
?> 
