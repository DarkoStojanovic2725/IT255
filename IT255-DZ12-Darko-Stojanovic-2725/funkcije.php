<?php
include("config.php");

if($_SERVER['REQUEST_METHOD'] === 'OPTIONS'){
    die();
}


function login($username, $password){
    global $conn;
    $rarray = array();
    if(checkLogin($username,$password)){
    $id = sha1(uniqid());
    $result2 = $conn->prepare("UPDATE korisnici SET token=? WHERE username=?");
    $result2->bind_param("ss",$id,$username);
    $result2->execute();
    $rarray['token'] = $id; 
    } else{
    header('HTTP/1.1 401 Unauthorized');
    $rarray['error'] = "Invalid username/password";
    }
    return json_encode($rarray);
    }
function checkLogin($username, $password){
    global $conn;
    $result = $conn->prepare("SELECT * FROM korisnici WHERE username=? AND password=?");
    $result->bind_param("ss",$username,$password);
    $result->execute();
    $result->store_result();
    $num_rows = $result->num_rows;
    if($num_rows > 0)
    {
    return true;
    }
    else{
    return false;  
    }
}



?>