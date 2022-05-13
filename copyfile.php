<?php
$file = "text.php";
copy($file,"copytextfile.php");
echo readfile("copytextfile.php");
?>
