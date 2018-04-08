$(function(){
/*角色认证单选js*/
	$(".authen-list .authen-raido").click(function(){
		var check_i=$(this).find(".radio");
		var checkout_i=$(".authen-list .authen-raido .radio")
		checkout_i.removeClass("fa-dot-circle-o")
		checkout_i.addClass("fa-circle-o")
		check_i.addClass("fa-dot-circle-o");
	})
/*角色认证单选js end*/
/*根据认证角色跳转不同界面*/
$(".roleqrz").click(function(){
	var item = $("i.fa-dot-circle-o").siblings("span").attr("value");
	if(item == "grjys"){
		$(location).attr('href', 'preauthen.html')
	}else if(item == "qyjys"){
		$(location).attr('href', 'enauthen.html')
	}else if(item == "ckgly"){
		$(location).attr('href', 'whauthen.html')
	}
	  
})

/*资质照片结果切换*/
$(".top_nav_ul li a.rzxx").click(function(){
	$(".autheninfo").show();
	$(".authenPhoto").hide();
	$(".shresult").hide();
	$(".top_nav_ul li a").removeClass("cur");
	$(this).addClass("cur");
})
$(".top_nav_ul li a.zizhphoto,.down_auphoto").click(function(){
	$(".autheninfo").hide();
	$(".authenPhoto").show();
	$(".shresult").hide();
	$(".top_nav_ul li a").removeClass("cur");
	$(".top_nav_ul li a.zizhphoto").addClass("cur")
})
$(".top_nav_ul li a.sresult,.submit_a").click(function(){
	$(".autheninfo").hide();
	$(".authenPhoto").hide();
	$(".shresult").show();
	$(".top_nav_ul li a").removeClass("cur");
	$(".top_nav_ul li a.sresult").addClass("cur")
})
/*资质照片切换*/

/*点击弹窗遮罩层*/
/*弹出*/
$(".example_btn1").click(function(){
	$("#mask").show();
	$(".conshow1").show();
})
$(".example_btn2").click(function(){
	$("#mask").show();
	$(".conshow2").show();
})
$(".example_btn3").click(function(){
	$("#mask").show();
	$(".conshow3").show();
})
/*取消*/
$(".exdelete,#mask").click(function(){
	$("#mask").hide();
	$(".conshow1").hide();
	$(".conshow2").hide();
	$(".conshow3").hide();
})
/*取消 end*/

})