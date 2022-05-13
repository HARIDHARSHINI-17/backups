 <?php
$file = "text.php";
if(is_dir($file)) {
  echo ("$file is a directory");
} else {
  echo ("$file is not a directory");
}
?> 
