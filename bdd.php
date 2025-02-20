<?php

$bdd = new PDO(
    "mysql:host=localhost;dbname=php-avance;charset=utf8",
    "root",
    "", 
    array(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION));

$sql =  "SELECT".
    " * ".
    " FROM ".
    "   `jeux_video` ";

$req = $bdd->prepare($sql);
$req->execute() or die(print_r($bdd->errorInfo()));
$resultat = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($resultat, true);

$req->closeCursor();
$bdd = null;