<?php

$bdd = new PDO(
    "mysql:host=localhost;dbname=php-avance;charset=utf8",
    "root",
    "", 
    array(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION));

if(count($_GET) === 0){
    $sql =  "SELECT".
        " * ".
        " FROM ".
        "   `jeux_video` ";
}else{
    $where = ' WHERE ';
    $cpt = 1;
    foreach($_GET as $key => $value){
        if(is_numeric($value)){
            $where = $where . ' ' .$key .' = '. $value;
        }else{
            $where = $where . ' ' .$key .' LIKE \'%'. $value . '%\'';
        }
        if(count($_GET)> $cpt){
            $where = $where . ' OR ';
        }
        $cpt = $cpt + 1;
    }
    $sql =  "SELECT".
        " * ".
        " FROM ".
        "   `jeux_video` ".$where;
}


$req = $bdd->prepare($sql);
$req->execute() or die(print_r($bdd->errorInfo()));
$resultat = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($resultat, true);

$req->closeCursor();

$bdd = null;