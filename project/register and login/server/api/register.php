<?php
# 注册：
# 核心业务逻辑
# 当接收到客户端提交数据的时候，应该先获取参数：用户名 && 手机号码 && 密码
# (1) 先连接数据库
# (2) 检查数据库中是否存在指定的用户名(该用户名是否已经被注册)，如果已经被注册返回注册失败
# (3) 如果没有被注册，那么就把用户名 手机号码 密码保存到数据库中，返回注册成功。
$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
$email = $_REQUEST["email"];

# 数据库操作：
# 数据库1-数据库表(N)-字段
# (1) 通过命令行操作
# (2) 通过phpMyAdmin
# (3) 通过UI界面工具(navicat)
$db = mysqli_connect("localhost","root","","user");
$sql = "SELECT * FROM user WHERE username='$username'";

// echo $sql;
$result = mysqli_query($db,$sql);

$data = array("status"=>"error","data"=>array("msg"=>"注册失败"));
// print_r($data);
if(mysqli_num_rows($result) == "1"){
  $data["data"]["msg"] = "注册失败，该用户名已经存在";
  echo json_encode($data,true);
}else{
  $sql = "INSERT INTO `user` (`ID`, `username`, `password`, `email`) VALUES (NULL, '$username', '$password', '$email');";
  mysqli_query($db, $sql);
  $data["data"]["msg"] = "恭喜你，注册成功";
   $data["status"] = "success";
  echo json_encode($data, true);
}

// print_r($result);

# 获取查询结果中数据有几行
// print_r(mysqli_num_rows($result));

/* 
mysqli_result Object
(
    [current_field] => 0
    [field_count] => 4
    [lengths] => 
    [num_rows] => 1
    [type] => 0
)
查询到一行数据
*/

?>