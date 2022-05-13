
<?php
$file = fopen("text.php","r");
// Read first line
fgets($file);

// Read from the current position in file - until EOF, and then write the result to the output buffer
echo fpassthru($file);
fclose($file);
?>

