<?php
$file = "text1.php";//given wrong file name
if(file_exists($file)){
echo readfile("text.php");
}
else{
echo "file not found";
}
?>
