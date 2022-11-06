<?php
header("Access-Control-Allow-Origin:*");
$conn = mysqli_connect("localhost","username","password","notesapp")
    or
    die("Can not connect to database !");
?>