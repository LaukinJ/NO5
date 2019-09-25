<?php
# 001-先连接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "user");

# 002-查询数据库得到所有的产品

$sql = "SELECT * FROM newsleft";
$result = mysqli_query($db,$sql);

# 003-把数据转换为JSON数据返回
// print_r($result);
// MYSQLI_ASSOC  MYSQLI_NUM
$data = mysqli_fetch_all($result, MYSQLI_ASSOC);
$response = array("status"=>"success","data" => $data);
echo json_encode($response,true);
?>