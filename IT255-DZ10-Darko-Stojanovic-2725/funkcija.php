<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
     die();
}
function getUsers(){
 $connection = mysqli_connect("localhost","root","","it255dz10") or die("Error " . mysqli_error($connection));

    $sql = "SELECT * FROM users";
    $result = mysqli_query($connection, $sql) or die
    ("Error".mysqli_error($connection));

    $niz = array();
    while($row = mysqli_fetch_assoc($result)){
           $niz[] = $row; 
    }


    return json_encode($niz);
}
?>