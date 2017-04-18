<?php
  $konekcija = mysqli_connect('localhost', 'root',''); 
if(!$konekcija){
    die("Nije povezano sa bazom". mysqli_error($konekcija));
}
  $baza = mysqli_select_db($konekcija, 'it255-dz08');
if(!$baza){
    die("Nije povezano sa bazom". mysqli_error($baza));
}

?>