<?php
session_start();
session_destroy();
header('location: logovanje.php');
?>