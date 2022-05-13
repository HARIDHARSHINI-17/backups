 <?php
$file = "text.php";
if(is_writable($file)) {
  echo ("$file is writable");
} else {
  echo ("$file is not writable");
}
?> 
