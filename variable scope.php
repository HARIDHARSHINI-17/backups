<?php
 $x = 100;
 $y = 12;
 function mysum(){
     global $x;
     global $y;
     global $z;

     $z = $x + $y;
 }
 mysum();
 echo $z;//output:112
 ?>
<?php
   function mysum1(){
       $a = 100;
       $b = 12;
       $c = $a + $b;
       echo $c; //output:112
   }
   mysum1();
   echo $c;//undefined variable 
?>