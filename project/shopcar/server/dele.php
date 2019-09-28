<?php
$delete = $_GET["delete"];
# 001-先连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "user");

# 002-查询数据库得到所有的产品
$sql = "delete from shopcar where delete='{$delete}'";
$result = mysqli_query($db, $sql);

# 003-把数据转换为JSON数据返回
// print_r($result);
// $totalCount = mysqli_num_rows($result); 
// $size = 36;
// $pageCount = ceil($totalCount/ $size);
// $response = array("status" => "success", "data" => $pageCount);
// echo json_encode($response, true);
?>