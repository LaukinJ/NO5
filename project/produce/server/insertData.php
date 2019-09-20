<?php

# 001-先加载JSON数据
$json = file_get_contents("data.json");
# 002-把JSON数据转换为PHP数组
$arrData = json_decode($json,true);

# 003-先连接数据库
$db = mysqli_connect("127.0.0.1","root","","user");

# 004-遍历数组获取数组中每个元素
for($i = 0;$i<count($arrData);$i++)
{
  $src = $arrData[$i]["src"];
  $text = $arrData[$i]["text"];
  $price = $arrData[$i]["price"];
  $yh = $arrData[$i]["yh"];
  $sql = "INSERT INTO `productlist` (`id`, `src`, `text`, `price`, `yh`) 
VALUES (NULL, '$src', '$text', $price, '$yh');";
  mysqli_query($db, $sql);
}

// print_r(floatval(substr($arrData[2]["price"],2)));
// print_r(substr("1234", 1));

?>