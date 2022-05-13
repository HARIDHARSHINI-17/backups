<?php
function dd($datas){
    echo '<pre>';
    var_dump($datas);
    echo '<pre>';
    die();//it allows to print only the first statement
}
$clg = "SECE";
dd($clg);
$sch = "VVM";
dd($sch);
echo "get exit";
?>