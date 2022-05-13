<?php
function sum(&$a,&$b){
$a=5;
$b=15;
return $a+$b;
}
$num1=2;
$num2=5;
echo "num1: ".$num1;
echo "\n" ;
echo "num2: ".$num2;
echo "\n";
$sum=sum($num1,$num2);
echo $sum;
echo "\n\n After \n";
echo "num1: ".$num1;
echo "\n";
echo "num2: ".$num2;
?>