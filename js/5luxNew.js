

$(function () {

	//商品筛选点击事件   全部/人气/销量/价格
	$(".option li").hover(
		function () {			
			$(this).css({"color":"#c69c6d"});
		},
		function () {
			$(this).css({"color":"#000000"});
		}
	);
	$(".option li").click( function () {
		$(".option li").each(function (i) {
			$(".option  li").eq(i).css({"background":"#ffffff"});
		})
		$(this).css({"background":"#c69c6d","color":"#ffffff"});
//		$(this).off("mouseenter");
	});
	
	
	
	//商品分类 
	(function () {
		
		$(".title div:eq(1)").hover(
				
				function (){
					$(this).css({"background":"red"});
					$(this).find("ul").css({"display":"block"});
				},
				function (){
					$(this).css({"background":"#292a2c"});
					$(this).find("ul").css({"display":"none"});
				}
			);
		})();
		


//获取后台信息库的 商品信息
	$.get("json/shop.json",function (data) {
		//开始创建商品列表
		for (let i=0;i<data.length; i+=1) {
			console.log(data[i].img);
			let Li = $("<li></li>");
	//		Li.css({"background":"red"})
			let goods_box = $("<div>");
			goods_box.addClass("goods_box");
			//图片的创建
			let goods_img =$("<div>");
			goods_img.addClass("goods_img");//添加class名
			let img = $("<img>");//创建图片 
			img.attr({"src":data[i].img}); //将获取到的图片地址赋值给创建好的图片
			goods_img.append(img); //将图片添加到到 存放图片的容器
			
			
			goods_box.append(goods_img); //将图片容器添加到 列表中
//			//创建 库存量
			let coll = $("<div>");
			coll.addClass("goods_coll"); //添加class名
			let coll_a = $("<a>");
			coll_a.addClass("fa fa-heart fa-1x");//给a添加class名
			coll.append(coll_a);
			//库存数量 创建
			let coll_span = $("<span>");
			coll_span.html(data[i].count);
			coll.append(coll_span);
			
			
			goods_box.append(coll);
			
			//创建商品信息模块
			let message =$("<div>");
			message.addClass("goods_message");
			
			// 商品的品牌	
			let name =$("<p>");
			name.addClass("goods_name");
			let name_a = $("<a>");
			name_a.html(data[i].brand);
			name.append(name_a);
			message.append(name);
			//商品的信息
			let title = $("<p>");
			title.addClass("goods_title");
			title.html(data[i].info);
			message.append(title);
			//商品的 价格
			let price = $("<p>");
			price.addClass("goods_price");
			price.html("奢侈吧<span>"+data[i].price+"</span>");
			message.append(price);
			
			//将以上创建都放进 message
			goods_box.append(message);
	
			Li.append(goods_box);
			$("#goods_list").append(Li);
		}
		
		//商品列表添加完成
	});
	
	
	
	
	
	
//	文档加载结束标签
});
