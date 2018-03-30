$(function(){
	/*搜索栏选择*/
	$(".header .select_q").click(function(){
		$(".select_ul").toggle();
	})
	$(".select_ul li").click(function(){
		var select_con=$(this).text();
		$("header .select_q").html(select_con);
		$(".select_ul").hide();
	})
	/*搜索栏选择end*/
	/*首页轮播广告图*/
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 5000,//可选选项，自动滑动
	pagination : '.swiper-pagination',
	observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true//修改swiper的父元素时，自动初始化swiper
	}) 
	/*首页轮播广告图 end*/
	/*最新咨询*/
    var swiper = new Swiper('.swiper-container2', {
    	 direction : 'vertical',
    	 height: 60,//你的slide高度
    	 loop:true,
    	 autoplay:2500

    });
  
	/*排行榜，有好货*/
	var mySwiper = new Swiper('.swiper-container3', {
		autoplay: 5000,//可选选项，自动滑动
		pagination : '.swiper-pagination',
		observer: true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents: true//修改swiper的父元素时，自动初始化swiper
		}) 
	var mySwiper = new Swiper('.swiper-container4', {
		autoplay: 5000,//可选选项，自动滑动
		pagination : '.swiper-pagination',
		slidesPerView : 2,//每页显示数量
		spaceBetween : 10,//每个内容间距
		observer: true,//修改swiper自己或子元素时，自动初始化swiper
	    observeParents: true//修改swiper的父元素时，自动初始化swiper
	}) 
	/*排行榜，有好货 end*/
	//返回顶部
	$(".backtop").click(function(){
		
		 $("html,body").animate({
			 scrollTop:0
		 }, 700);
	})
	//返回顶部

})