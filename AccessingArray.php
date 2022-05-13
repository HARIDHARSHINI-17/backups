<?php
//indexed/numeric array

$array1 = array("Sam","Jack","William","Jones","James");

echo "Accessing Array Elements Using Array Elements Index:<br>";
echo $array1[4] ,"<br>";
echo $array1[3],"<br>";
echo $array1[2],"<br>";
echo $array1[1],"<br>";
echo $array1[0],"<br>";

//Second Way to create Indexed Array

$array2[0] = "Sam";
$array2[1] = "Jack";
$array2[2] = "William";
$array2[3] = "Jones";
$array2[4] = "James";

echo "Accessing Array Elements Directly:";
echo $array2[3];
echo $array2[4];
echo $array2[0];
?>
