<?php
  class myclass{
     private  $name;
     public function getname(){
         return $this->name;
     }
  }
     $studentname = new myclass();
     $studentname->name = 'haridharshini';
     echo $studentname -> getname();
?>
  