<?php
include('db.php');
$email = $_POST['email'];
$password = $_POST['password'];
$query = "INSERT INTO Usuario(Email, contraseña) values ('$email','$password')";
header("location:../index.php");

?>