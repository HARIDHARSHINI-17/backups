 <?php
$file = fopen("text.php","r");
//Change position of file pointer
fseek($file,"5");
//Set file pointer to 0
rewind($file);
fclose($file);
?> 
