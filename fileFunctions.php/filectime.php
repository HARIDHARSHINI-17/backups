
<?php
echo filectime("text.php");
echo "<br>";
echo "Last changed: ".date("F d Y H:i:s.", filectime("text.php"));
?> 
