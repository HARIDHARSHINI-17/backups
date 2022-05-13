<?php
class note{
    public $type;
    public $cost;
    function __construct($type,$cost){
        $this->type = $type;
        $this->cost = $cost;
    }
    public function gettype(){
       return $this->type;
    }
    public function getcost(){
        return $this->cost;
    }
    function _destruct(){
        echo "{$this->type}{$this->cost}Object destructed successfully";
    }
}
$book = new note('ruled',55);
echo $book->gettype();
echo "<br>";
echo $book->getcost();
$book->_destruct();
?>