

 $(function () {
 	

 		//主导航鼠标事件
	 	(function () {
//	 		$("#nav .nav_main li").on("hover",function (){
//	 			
//	 		});
	 		$("#nav .nav_main li").hover(
	 			function () {
					//console.log(1);
		 			$(this).find("a").css({"color":"#ffffff"});
	 			},
	 			function () {
					//console.log(1);
		 			$(this).find("a").css({"color":"#a25a2b"});
	 			}
	 		)
	 	})();
	 	
	 	
	 		// 主导航 点击事件
	 		(function () {
	 			$(".nav_main li").click(
	 				
	 				function (){
//	 					$(this).off("hover");
	 					$(".nav_main li").each(function (i){
	 						$(".nav_main li").eq(i).css({"background":"black"});
	 					});
	 					$(this).css({"background":"red"});
	 					$(this).find("a").css({"color":"#ffffff"});
	 				}
	 				
	 			);
	 			
	 		})();
//	 		$("#nav .nav_main li").mouseenter();
//	 		$("#nav .nav_main li").mouseleave();
	 		
	 
 
 		//二级导航 隐藏 /显示
 		(function () {
 			$("#nav .list").on("mouseenter",function () {
 				$(this).find(".nav_sub").css({"display":"block"});
 			});
 			$("#nav .list").on("mouseleave",function (){
 				$(this).find(".nav_sub").css({"display":"none"});
 			});
		})();


		//触发二级导航鼠标事件   显示隐藏三级导航?????
		(function () {
			
			//二级导航绑定鼠标进入事件
			$("#nav .nav_sub li").on("mouseenter",function () {
				$(this).css({"background-color":"#ffffff","color":"#a25a2b"});
				
				//显示三级导航????
			});
			
			//二级导航绑定 鼠标离开事件
			$("#nav .nav_sub li").on("mouseleave",function () {
				$(this).css({"background-color":"rgba(255, 255, 255, .6)","color":"#000000"});
				//隐藏三级导航 ？？？？？
			});
		})();
 		
 		
 		
});

