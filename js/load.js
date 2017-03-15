

//登录页面  账户和密码验证

$(function () {
	
		
		//点击登录按钮
//		$("#btn").click(function () {
//			console.log($("#userName").val()==="");
//			
//			//判断账户和密码 有一个为空时  提示 
//			if($("#userName").val()=="" || $("#userPass").val()==""){
//				alert(1);
//				$(".name").css({"display":"block","border":"solid 1px red","background":"#f8b4a4"});
//				$(".name").html("请输入用户名或密码");
////				$(".pwd").html("请输入密码");
//			}else { 
//				// 账户和密码不为空时  进行账户密码验证
//				$.get("php/5lux.php",{"userName":$("#userName").val(),"userPass":$("#userPass").val()},function (data) {
//					console.log(data);
////				console.log($("#userName").val()+"-"+$("#userPass").val());
//					//对用户名和密码进行查询判断
//					let flag = 0
//					for(var key in data){
////						console.log(data[key].userName+"-"+data[key].userPass);
//
//						//当密码和账户 同时符合时  跳转到主页  并将户名显示在主页
//						if($("#userName").val()===data[key].userName &&$("#userPass").val()===data[key].userPass){
//							$(".name").css({"display":"block"});
//							
//						  location.href = "index.html"; //调转主页
//						  flag = 1;
//						}
//						
//					}
//					//密码和用户名不正确  进行提示
//					if(flag){
//							$(".name").css({"display":"block","border":"solid 1px red","background":"#f8b4a4"});
//							$(".name").html("用户名或密码不正确");
//						}
//				});
//				
//			}
//			});
//			
//				$("#userName").focus(function () {
//					$(".name").css({"display":"none"});
//					
//				});
//				$("#userPass").focus(function () {
//					$(".name").css({"display":"none"});
//					
//				});
//			
			
			
		$("#btn").click(function () {
			if($("#userName").val()=="" || $("#userPass").val()==""){
				$(".name").css({"display":"block","border":"solid 1px red","background":"#f8b4a4"});
				$(".name").html("请输入用户名或密码");

			}else{
				$.get("php/5lux.php",{"uesrName":$("#userName").val(),"userPass":$("#userPass").val()},function (data){
					console.log($("#userPass").val());
					console.log(data);
					if(data.indexOf("1")>-1){
						  location.href = "index.html"; //调转主页
														
						}else{
							$(".name").css({"display":"block","border":"solid 1px red","background":"#f8b4a4"});
							$(".name").html("用户名或密码不正确");
						}
				});
			}
			
		});
		
				$("#userName").focus(function () {
					$(".name").css({"display":"none"});
					
				});
				$("#userPass").focus(function () {
					$(".name").css({"display":"none"});
					
				});
		
	
	
});
