<?php
require_once('konekcija.php');

if(isset($_POST) & !empty($_POST)){
    $username = mysqli_real_escape_string($konekcija, $_POST['username']);
    $email = mysqli_real_escape_string($konekcija, $_POST['email']);
    $password = $_POST['password'];
    
    $sql = "INSERT INTO login (korisnicko_ime, email, sifra) VALUES ('$username','$email','$password')";
    $result = mysqli_query($konekcija, $sql);
    if($result){
        echo "Korisnik je registrovan";
    } else {
        echo "Failed";
    }

}
?>
<html>
    <head>
        <title>IT255-DZ08</title>
        
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
     <link rel="stylesheet" type="text/css" href="stil.css">

   
    </head>
    
    <body>
    
        <div class="container">
          <form class="form-signin" method="POST">
            <h2 class="form-signin-heading">Please Register</h2>
            <div class="input-group">
          <span class="input-group-addon" id="basic-addon1">@</span>
          <input type="text" name="username" class="form-control" placeholder="Username" required>
        </div>
            <label for="inputEmail" class="sr-only">Email address</label>
            <input type="email" name="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" name="password" id="inputPassword" class="form-control" placeholder="Password" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            <a class="btn btn-lg btn-primary btn-block" href="logovanje.php">Login</a>
          </form>
        </div>
        
    </body>
    
</html>