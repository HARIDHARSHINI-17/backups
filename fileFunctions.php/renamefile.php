<?php
$file = "text.php";//given wrong file name
if(file_exists($file)){
rename("text.php","text1.php");
}
else{
echo "file not found";
}
?>
