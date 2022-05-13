<?php
class note{
    //public $type;
    //public $cost;
    function __construct(public $type,public $cost){
        $this->type = $type;
        $this->cost = $cost;
    }
    public function gettype(){
       return $this->type;
    }
    public function getcost(){
        return $this->cost;
    }
}
$book = new note('ruled',55);
echo $book->gettype();
echo "<br>";
echo $book->getcost();
?>