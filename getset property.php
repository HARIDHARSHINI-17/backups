<?php
class myclass{
    public $name;
    public function setName($name){
        $this->name = $name;
    }
    public function getName(){
        return $this->$name;
    }
}
$studentname = new myclass();
$studentname->$name = 'hari';
echo $studentname->getName();
?>