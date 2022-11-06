<?php
// header('Access-Control-Allow-Origin: *');
include "db.php";
if(isset($_GET['id'])){
    $id = $_GET['id'];
    $sql ="DELETE FROM notes WHERE id ='$id'";
    if($conn->query($sql)===TRUE){
        echo "success";
    }else{
        echo 'error';
        $conn->close();
    }
}
?> 