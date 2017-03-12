


$(function () {
	
	 //添加到购物车
	for(let i=0;i<2;i+=1){
		
	
	 		//创建购物车列表
	 		let tr = $("<tr>");
	 		
	 		//购物车 商品选择按钮
	 		let car_choose = $("<th>");
	 		car_choose.addClass("car_choose");
			let Label = $("<label>");
			Label.html("<input type='checkbox' /> ");
			car_choose.append(Label);
	 		tr.append(car_choose);
	 		
	 		
	 		//购物车商品 图片
	 		let car_img = $("<th>");
	 		car_img.addClass("car_img");
			let img_a = $("<a>");
			img_a.html("<img src='img/new_img/xz.jpg' />");
			car_img.append(img_a);
	 		tr.append(car_img);
	 		
	 		//购物车 商品名称
	 		let car_name = $("<th>");
	 		car_name.addClass("car_name");
			let name_a = $("<a>");
			name_a.html("【包邮 免关税】COMVERSR ALL STAR 裤装 男")
			car_name.append(name_a);
	 		tr.append(car_name);
	 		
	 		//购物车商品描述
	 		let car_attr = $("<th>");
	 		car_attr.addClass("car_attr");
	 		car_attr.html("黑色，255");
	 		tr.append(car_attr);
	 		
	 		//购物车 商品价格
	 		let car_price= $("<th>");
	 		car_price.addClass("car_price");
	 		car_price.html("￥45620");
	 		tr.append(car_price);
	 		
	 		//购物车 商品数量
	 		let car_count = $("<th>");
	 		car_count.addClass("car_count");
			let count_p = $("<p>");
			count_p.html("<a href='###'>-</a><input type='text' value='1' /><a href='###'>+</a>");
			
			
			car_count.append(count_p);
			
			console.log((parseInt(car_count.find("input").val())+1));
			//添加点击时间  增加选择商品的数量
			car_count.find("a").eq(1).click(function () {
				car_count.find("input").val(parseInt(car_count.find("input").val())+1);
			});
			//添加点击时间  减少选择商品的数量
			car_count.find("a").eq(0).click(function () {
				if( parseInt(car_count.find("input").val()) > 0 ) {
					
					car_count.find("input").val(parseInt(car_count.find("input").val())-1);
					console.log(car_count.find("input").val());
				}
			});
			
			
	 		tr.append(car_count);
	 		
	 		//购物车商品相关活动
	 		let car_mes = $("<th>");
	 		car_mes.addClass("car_mes");
	 		car_mes.html("活动信息");
	 		tr.append(car_mes);
	 		
	 		//购物车 商品总数
	 		let car_total = $("<th>");
	 		car_total.addClass("car_total");
	 		car_total.html("7676.00");
	 		tr.append(car_total);
	 		
	 		//购物车商品的删除 收藏
	 		let car_work = $("<th>");
	 		car_work.addClass("car_work");
	 		car_work.html("<a href='###' id='car_remove'>删除</a><a href='###' id='mover_favorite'>移入收藏夹</a><a href='###'>定制包装</a>")
	 		tr.append(car_work);
	 		//点击事件  删除购物车 此商品
	 		car_work.click(function () {
	 			tr.remove();
	 		})
	 		
	 		$("#shopping table tbody").append(tr);
	 		

	 	
	}; 	
	
	
	//点击清空购车 
	$("#clear_car").click(function () {
		console.log($("#shopping .list_title").nextAll());
		$("#shopping .list_title").nextAll().each(function (){
			$(this).remove();
		});
		$("#shopping .payment").css({"display":"none"}); //清空购物车之后  让去结算隐藏
	});
	
	
	
});
