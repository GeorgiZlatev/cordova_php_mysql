<?php
header("Access-Control-Allow-Origin:*");
$conn = mysqli_connect("192.168.0.100","root","kuku","notesapp")
    or
    die("Can not connect to database !");
?>