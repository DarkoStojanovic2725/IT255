<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header("Access-Control-Allow-Headers: X-XSRF-TOKEN");
include("konekcija.php");


$Name = $_POST['Name'];
$lastName = $_POST['lastName'];
$email = $_POST['email'];
$city = $_POST['city'];

$stmt = $conn->prepare("INSERT INTO users (Name, lastName, email,
city) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $Name, $lastName, $email, $city);
$stmt->execute();
echo "ok";
?>