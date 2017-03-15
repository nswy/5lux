<?php

 $userName = $_GET['uesrName'];
 $userPass = $_GET['userPass'];
// 创建连接
$conn = mysql_connect("localhost","root", "root");

//选择数据库
mysql_select_db("5lux",$conn);

//查询
$sql = "select * from user where userName='".$userName."'&& userPass= '".$userPass."'";

$result = mysql_query($sql,$conn);

//$rows = mysql_num_rows($result);
$rows = mysql_num_rows($result);

mysql_close($conn);
///3、根据查询结果返回（1或 0）
	echo($rows);
?> 