<?php

$servername = "localhost";
$username = "root";
$password = "";
$db = "it255dz10";

$conn = new mysqli($servername,$username, $password, $db);

if(!$conn->set_charset("utf8")){
    printf("Error");
    exit();
}
?>