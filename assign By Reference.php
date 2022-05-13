<?php
$a =10;
$b=&$a;
echo "Assign by Reference:";
echo "A : ".$a."B: ".$b;
$a=20;
echo "A value changed :";
echo "A: ".$a." B: ".$b;
$b=30;
echo "B value Changed :";
echo "A: ".$a."B: ".$b;
?>