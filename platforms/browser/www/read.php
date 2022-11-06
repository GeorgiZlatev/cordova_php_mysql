<?php 

include 'db.php';

$data = array();
$q = mysqli_query($conn, "SELECT * From notes");

while($row = mysqli_fetch_object($q)){
    $data[] = $row;
}

echo json_encode($data);
?>