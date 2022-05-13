<?php
$file = "text.php";
if(is_file($file)) {
  echo ("$file is a regular file");
} else {
  echo ("$file is not a regular file");
}
?> 
