 <?php
$file = fopen("text.php","w");
echo fwrite($file,"Hello World. Testing!");
fclose($file);
?> 
