

$(function () {
	
	//鼠标移上 出现放大镜
	
	(function () {
		
		//给图片添加 鼠标 进入 离开事件  显示和隐藏放大镜
		$("#gd_pic").hover(
			
			//显示放大镜
			function () {
				
				console.log($("#gd_pic .dim"));
				$("#gd_pic .dim").css({"display":"block"});
				$("#gd_pic .mask").css({"display":"block"});
				$("#gd_pic .wrap").css({"display":"block"});
				$("#gd_pic .wrap").stop().animate({"top":"-10px","left":"420px","width":"400px","height":"456px"},500);
				//$("#g_pic .wrap").show();
				
				
				
			},
			//隐藏放大镜
			function () {
				$("#gd_pic .dim").css({"display":"none"});
				$("#gd_pic .mask").css({"display":"none"});
				
				$("#gd_pic .wrap").css({"display":"none","top":"180px","left":"200px","width":"0px","height":"0px"});
				
			}
		);

	})();
	
	
	//放大镜效果 
	(function () {
		$("#gd_pic").mousemove(function (evt) {
				var e = evt ||event;
				var dimW = $("#gd_pic .dim").outerWidth();  //小窗的宽度
				var dimH = $("#gd_pic .dim").outerHeight();//小窗的高度
				
				
				let picT = $("#gd_pic").offset().top; 
				let picL = $("#gd_pic").offset().left;
				let picW = $("#gd_pic").outerWidth();
				let picH = $("#gd_pic").outerHeight();
				let wrapW = $(".wrap").outerWidth();
				let wrapH = $(".wrap").outerHeight();
				
				console.log(wrapW);
				console.log(wrapH);
//				console.log(picL+"-"+picT);
//				console.log(e.pageX+"-"+e.pageY);
				let dimT,dimL;
//				console.log(picL+"-"+picT);
				
				if(e.pageX - picL < dimW/2){ //判断左边界
					dimL = 0;
				}else if(e.pageX - picL > (picW - dimW/2) ){  //判断有边界
					dimL = picW - dimW;
				}else {
					dimL =  e.pageX - picL - dimW/2;
				}
				
				if (e.pageY - picT < dimH/2 ) { //判断上边界
					dimT = 0;
				}else if((e.pageY - picT) > (picH - dimH/2)) {  //判断上边界
					dimT = picH - dimH;
				}else {
				
					dimT = e.pageY - picT - dimH/2;
				}

				//修改放大镜图片的定位
				$("#wrap_img").css({"left":-1*dimL*wrapW/dimW+"px","top":-1*dimT*wrapH/dimH})
				//console.log(dimT);
				//修改该 放大镜小镜子的定位值
				$("#gd_pic .dim").css({"top":dimT+"px","left":dimL+"px"});
				//console.log(dimW);
		})
	})();
	
	//小图列表中的图点击切换到 大图
	(function () {
		$("#gd_img_list li").click(function () {
			$("#title_img").attr({"src":$(this).find("img").attr("src")});
			$("#gd_pic .wrap").find("img").attr({"src":$("#title_img").attr("src")});
		});
		
	})();
	
	//小图 左右切换
	(function () {
			//点击小图列表享有互动 
			$(".img_left").click(function () {
				//判断当小图列表在最左边的时候不能移动
				if(parseInt($("#gd_img_list").css("left"))>=30){
					$("#gd_img_list").css({"left":"30px"});
				}else{
					$("#gd_img_list").css({"left":(parseInt($("#gd_img_list").css("left"))+30)+"px"});
				}

			});
			
			//点击小图列表项做滑动
			$(".img_right").click(function () {
//				console.log(parseInt($("#gd_img_list").css("left"))+10);
				$("#gd_img_list").css({"left":(parseInt($("#gd_img_list").css("left"))-30)+"px"});
							
						
			});
		
	})();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
