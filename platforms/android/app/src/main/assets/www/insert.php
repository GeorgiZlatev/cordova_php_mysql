<?php
include "db.php";
if(isset($_POST['note'])){
    $note = $_POST['note'];
    $sql ="INSERT INTO notes(note,time) VALUES('$note',NOW())";
    if($conn->query($sql)===TRUE){
        echo "success";
    }else{
        echo 'error';
        echo $sql;
        $conn->close();
    }
}
?>