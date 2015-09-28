$(function(){
	var downl=$("#downl");
	var lis=$("nav li");
	var as=$("nav li a");
	for ( var i=0;i<lis.length;i++){

		// lis[i].click(function(){
		// 	alert();
		// var dd=this.offsetLeft
		// downl.animate({left:dd},300);
		//  })

		lis[i].onclick=function(){
			$(this).find("a").addClass("currentl").parent().siblings().find("a").removeClass("currentl")
 		// 	var dd=this.offsetLeft
			// downl.animate({left:dd},300);
		};
	
	}
//首页tabs
$("#list li").hover(function(){
				 $(this).children("a").css({color:"white"});
				$(this).siblings().children("a").css("color","black");
			   $(this).addClass("current2").siblings().removeClass("current2");
			 //   $("#content>div").eq($(this).index()).show().siblings().hide();
			 //   $("#content4>div").eq($(this).index()).show().siblings().hide();
			   },function(){

			   })
		$("#list3 li").hover(function(){
				$(this).children("a").css({color:"white"});
				$(this).siblings().children("a").css("color","black");
			   $(this).addClass("current3").siblings().removeClass("current3");
			   $("#content3>div").eq($(this).index()).show().siblings().hide();
			   },function(){})
//首页点击
$("#list li").click(function(){
	$(this).children("a").css({color:"white"});
				$(this).siblings().children("a").css("color","black");
			   $(this).addClass("current2").siblings().removeClass("current2");
			   $("#content>div").eq($(this).index()).show().siblings().hide();
			   $("#content4>div").eq($(this).index()).show().siblings().hide();
})

// topbar 下拉
$(".shu").click(function(){
	$(this).next(".arrow-tools").toggle();
})
// papermore tabs
$("#pa_list li").click(function(){
	
	$(this).addClass("current2").siblings().removeClass("current2");
	$(".papermore .paper").eq($(this).index()).show().siblings(".paper").hide();
})

// logistics tabs
$("#list3 li").click(function(){
	
	$(this).addClass("current3").siblings().removeClass("current3");
	$(".papermore .paper").eq($(this).index()).show().siblings(".paper").hide();
})
// $(".return .menu1").click(function(){
// 	$(window).scrollTop(0);
// })

$(window).scroll(function(){
	if($(window).scrollTop()>500){
		$(".return .menu1").fadeIn()
	}else{
		$(".return .menu1").fadeOut()
	}
})
$(".return .menu1").click(function(){
	$("body,html").animate({scrollTop:0},1000);
	return false;
})

	// //商品详情打开关闭
	// $(document).on("click",".jsOpen",function(){
	// 	i=$(this).attr("index");
	// 	if(i%2==0){
	// 		$(this).parent().parent().next().removeClass("vistr");
	// 		$(this).html("关闭");
	// 		$(this).attr({"index":1});
	// 	}else{
	// 		$(this).parent().parent().next().addClass("vistr");
	// 		$(this).html("展开");
	// 		$(this).attr({"index":0});
	// 	}
	// }

// 展开
	$(".jsOpen").click(function(){
		var obj1 = $(this).parent().parent().next();
		var obj2 = $(this).parent().parent().next().next();
		var obj3 = $(this).parent().parent().next().next().next();
		var ary=[];
		ary.push(obj1);
		ary.push(obj2);
		ary.push(obj3);
		for(var i=0;i<ary.length;i++){

			if(ary[i].hasClass("vistr")){
				ary[i].removeClass("vistr");
					$(this).html("关闭")
				}else{
					ary[i].addClass("vistr");
					//obj.parent().html("展开")；
					$(this).html("展开")
				}
		}
	})














})
