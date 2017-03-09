

$(function() {
	
        // brand  shop 鼠标移上 改变高度
        (function changeTop() {
            $("#brand .brand_pic div").mouseenter(function() {
                $(this).find("div").animate({"height": "150px"},300);
            });

            $("#brand .brand_pic div").mouseleave(function() {
                $(this).find("div").animate({"height": "40px"},300);
            });
        })();

        // 热门旗舰店 鼠标事件 改变边框
        (function (){
            $("#brand .store_con div").mouseenter(function () {
               //console.log($(this).find("div[class='top']"));
                $(this).find("div[class='top']").animate({"width":"168"});
                $(this).find("div[class='left']").animate({"height":"86"});
                $(this).find("div[class='right']").animate({"height":"86"});
                $(this).find("div[class='bottom']").animate({"width":"168"});
            });
		//鼠标移开  边框消失
            $("#brand .store_con div").mouseleave(function () {
                //console.log($(this).find("div[class='top']"));
                $(this).find("div[class='top']").animate({"width":"0"});
                $(this).find("div[class='left']").animate({"height":"0"});
                $(this).find("div[class='right']").animate({"height":"0"});
                $(this).find("div[class='bottom']").animate({"width":"0"});
            });
        })();
    
 			//主导航鼠标事件
	 	(function () {
	 		$("#nav .nav_main li").mouseenter(function () {
//	 			console.log(1);
	 			$(this).find("a").css({"color":"#ffffff"});
	 		});
	 		$("#nav .nav_main li").mouseleave(function () {
//	 			console.log(1);
	 			$(this).find("a").css({"color":"#a25a2b"});
	 		});
	 		
	 	})();
 
 		//二级导航 隐藏 /显示
 		(function () {
 			$("#nav .list").on("mouseenter",function () {
 				$(this).find(".nav_sub").css({"display":"block"});
 			});
 			$("#nav .list").on("mouseleave",function (){
 				$(this).find(".nav_sub").css({"display":"none"});
 			});
//          //二级导航鼠标事件
// 			$("#nav .list").mouseenter(function () {
// 				$(this).find(".nav_sub").css({"display":"block"});
// 			});


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
 		
 		})();


		//items 菜单 
		(function () {
			console.log($("#items .items_list li"));
			$("#items .items_list li").each(function (i) {
				$(this).mouseenter(function () {
					$("#items .page").css({""})
				});
			});
		})();
 
 
});