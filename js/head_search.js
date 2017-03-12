

$(function () {
	//点击 home 回到首页
	(function () {
		//鼠标进入
		$("#head .head_left li:first").mouseenter(function () {
			
				$(this).find("a").css({"color":"#a25a2b"});
				
		});
		//鼠标离开 
		$("#head .head_left li:first").mouseleave(function () {
			
				$(this).find("a").css({"color":"#666666"});
				console.log(1);
		});
		//鼠标点击跳转 首页
		$("#head .head_left li:first").find("a").click(function () {
			location.href = "index.html"; //跳转的地址
		});
		
	})();
	
	
	
	//登录页面
	(function () {
		//鼠标进入 事件
		$("#head .head_right li:first").mouseenter(function () {
			$(this).find("a").css({"color":"red"});
		});
		$("#head .head_right li:first").mouseleave(function () {
			$(this).find("a").css({"color":"#666666"});
		});
		//点击登录跳转页面
		$("#head .head_right li:first").click(function () {
			location.href ="";//???????
		});
	})();
	
	
	//注册页面
	(function () {
		//鼠标进入 事件
		$("#head .head_right li:eq(1)").mouseenter(function () {
			$(this).find("a").css({"color":"#a25a2b"});
		});
		$("#head .head_right li:eq(1)").mouseleave(function () {
			$(this).find("a").css({"color":"#666666"});
		});
		//点击登录跳转页面
		$("#head .head_right li:eq(1)").click(function () {
			location.href ="";//???????
		});
	})();
	
	
	//我的大道 ??????????????
	(function () {
		//鼠标进入 事件
		$("#head .head_right li:eq(2)").on("mouseenter",function () {
			
			$(this).children("a").eq(0).css({"color":"#a25a2b"});
			$(this).find("i").attr({"class":"fa fa-caret-up"});
			$(this).find("div").css({"display":"block"});
		});
		$("#head .head_right li:eq(2)").on("mouseleave",function () {
			$(this).find("a").css({"color":"#666666"});
			$(this).find("i").attr({"class":"fa fa-caret-down"});
			$(this).find("div").css({"display":"none"});
		});
		//点击登录跳转页面
		$("#head .head_right li:eq(2)").click(function () {
			location.href ="";//???????
		});
		//下拉菜单 鼠标进入事件
//		$("head .head_right .myBag ").mouseenter(function () {
//			
//			$(this).find("a").css({"color":"red"});
//		});
		
	})();

	//头部 帮助中心
	(function () {
		
		$("#head .head_right").find("li[class='help']").on("mouseenter",function () {
			console.log($(this));
			$(this).find("a").eq(0).css({"color":"#a25a2b"});
		});
		$("#head .head_right").find("li[class='help']").on("mouseleave",function () {
			$(this).find("a").css({"color":"#666666"});
		});
		
		//点击跳转事件
		$("#head .head_right").find("li[class='help']").on("click",function () {
			location.href ="";//???????
		});
		
		
	})();
	
	//app下载
	(function () {
		
		$("#head .head_right").find("li[class='app']").on("mouseenter",function () {
			$(this).find("a").eq(0).css({"color":"#a25a2b"});
			$(this).find("i").find("i[id='app']").attr({"class":"fa fa-caret-down"});
			$(this).find("div").css({"display":"block"});
			
		});
		$("#head .head_right").find("li[class='app']").on("mouseleave",function () {
			$(this).find("a").css({"color":"#666666"});
			$(this).find("div").css({"display":"none"});
			$(this).find("i").find("i[id='app']").attr({"class":"fa fa-caret-up"});
		
		});
		
		//点击跳转事件
		$("#head .head_right").find("li[class='app']").on("click",function () {
			location.href ="";//???????
		});
		
	})();
});
