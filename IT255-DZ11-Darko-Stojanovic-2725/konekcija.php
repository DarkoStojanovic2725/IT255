<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = "it255dz10";
// Kreiraj konekciju
$conn = new mysqli($servername, $username, $password, $db) or die("Connection failed: " . $conn->connect_error);
if($conn){
    echo "konektovano";
}
?>