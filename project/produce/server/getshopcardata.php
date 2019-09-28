<?php
$db = mysqli_connect("127.0.0.1", "root", "", "user");
$tittlenum = $_REQUEST["tittlenum"];
$sql = "SELECT * FROM productlist WHERE tittlenum='$tittlenum'";
$res = mysqli_query($db, $sql);
$data = mysqli_fetch_all($res, MYSQLI_ASSOC);
$response = array("status" => "success", "data" => $data);
echo json_encode($response, true);
?>