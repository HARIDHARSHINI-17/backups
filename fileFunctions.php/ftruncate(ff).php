
<?php
// Check filesize
echo filesize("text.php");
echo "<br>";

$file = fopen("text.php", "a+");
ftruncate($file,100);
fclose($file);

// Clear cache and check filesize again
clearstatcache();
echo filesize("text.php");
?> 
