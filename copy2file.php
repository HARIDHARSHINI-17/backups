<?php
echo readfile("copytextfile.php");
?>
<?php
$file = "text1.php";//given wrong file name
if(file_exists($file)){
echo readfile("text.php");
copy($file,"newfile.php");
}
else{
echo "file not found";
}
?>
