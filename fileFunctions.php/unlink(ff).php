 <?php
$file = fopen("checking.txt","w");
echo fwrite($file,"Hello World. Testing!");
fclose($file);
unlink("checking.txt")
}
?> 
