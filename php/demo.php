<?php

	$con = mysql_connect("localhost","root","root");
	
	mysql_select_db("5lux",$con);
	
	$str = "insert into user(userId,userName,userPass) values('2','xb','123')";
	mysql_query($str,$con);
	mysql_close($con);
	echo "保存成功";
?>