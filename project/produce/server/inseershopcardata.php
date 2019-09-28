<?php

# 001-先加载JSON数据
// $json = file_get_contents("data.json");
# 002-把JSON数据转换为PHP数组
// $arrData = json_decode($json,true);

# 003-先连接数据库
$db = mysqli_connect("127.0.0.1","root","","user");

# 004-遍历数组获取数组中每个元素

  $shopData = json_decode($_REQUEST['shopData'],true);
  $src = $shopData["src"];
  $text = $shopData["text"];
  $price = $shopData["price"];
  $sql = "INSERT INTO `shopcar` (`id`, `src`, `text`, `price`) 
VALUES (NULL, '$src', '$text', $price);";
  mysqli_query($db, $sql);


?>