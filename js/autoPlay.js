



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
        






		//banner   轮播图
		(function () {
			var timer;
			var ord = 0;
			
			$("#banner .autoPlay")[0].innerHTML += $("#banner ul li:first").html();
			tiemr = setInterval( function () {
				ord += 1;
				if ( ord> $("#banner .dot li").length){
					$("#banner .autoPlay").css({"left":"0px"});
					ord = 1;
				}
				$("#banner .dot li").each(function (i) {
//					console.log(i);
					$("#banner .dot li").eq(i).css({"background-color":"black"});
				});
				$("#banner .autoPlay").animate({"left":-1*ord*1210 + "px"});
				console.log(ord);
				$("#banner .dot li").eq(ord%$("#banner .dot li").length).css({"background-color":"#ffffff"});
				
				
			},1000);
			
		})();
















		//items 菜单 
		(function () {

//			console.log($("#items .items_list li"));
			$("#items .items_list li").each(function (i) {
				
				$(this).mouseenter(function () {
					$("#items .items_list li").each(function (k) {
						$("#items .items_list li").eq(k).removeClass("enter");
					});
					$("#items .items_list li").eq(i).addClass("enter");;
					$("#items .page").animate({"left":-1*i*1210 + "px"},100);
//					console.log($("#items .page").css("left"));
				});
			});
		})();
		
		
		
 		//内容 动画 
 		(function () {
 			let m,Img,txt;
   			$("#items .items_right").children().each(function (i){
   				
   				
   			
   				$(this).hover(
   					function () {
   						Img = $("#items .items_right").children().eq(i).find("img").css("left");
						txt = $("#items .items_right").children().eq(i).find("div").css("left");
   						console.log(i);
   						console.log(Img);
   						$("#items .items_right").children().eq(i).find("div").animate({"left":(parseInt(txt) - 20) + "px"});
   						$("#items .items_right").children().eq(i).find("img").animate({"left":(parseInt(Img) + 20) + "px"});
   					},
   					function () {
   						Img = $("#items .items_right").children().eq(i).find("img").css("left");
						txt = $("#items .items_right").children().eq(i).find("div").css("left");
   						$("#items .items_right").children().eq(i).find("div").animate({"left":(parseInt(txt) + 20) + "px"});
   						$("#items .items_right").children().eq(i).find("img").animate({"left":(parseInt(Img) - 20) + "px"});
   					}
   				)

   			});
			
 			
 		})();
 
 
 		//shop 列表 添加事件
 		(function () {
// 			console.log($(document).scrollTop());
 			$("#shop .shop_list li").each(function (i) {
 				$(this).hover(
 					function () {
	 					$(this).find("div").animate({"top":"-50px"});	
	 				
 					},
 					function () {
	 					$(this).find("div").animate({"top":"0"});	
	 	
 					}
 					);
 				$(this).click(function () {

 						$(window).scrollTop(i*450+2200);
 				});
 				
 				
 			});
 			
 		})();
 
  
 		
 
 
});