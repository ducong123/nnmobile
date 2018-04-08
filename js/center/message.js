$(function(){
	//点击全选
	$(".bottom-div .all_check").click(function(){
		var allcheck_i = $(this).find("i.fa")
		var check_i = $(".mes_c .checkbox i.check")
		if(allcheck_i.hasClass("fa-check")){
			allcheck_i.removeClass("fa-check");
			check_i.removeClass("fa-check")
		}else{
			allcheck_i.addClass("fa-check");
			check_i.addClass("fa-check")
		}
	})
	//单个多选，选择
	$(".mes_c .checkbox").click(function(){
		$(this).find("i.check").toggleClass("fa-check");
		var checki_num = $(".checkbox i.fa-check").length
		var mes_mum = $(".mes_c").length
		if(checki_num == mes_mum){
			$(".bottom-div .all_check i.fa").addClass("fa-check")
		}else{
			$(".bottom-div .all_check i.fa").removeClass("fa-check")
		}
	})
	//标记已读
	$(".bottom-div .tagread").click(function(){
		$(".checkbox i.fa-check").parents("")
		.find(".con .ba_img").removeClass("ba_img");
		$("i.fa-check").removeClass("fa-check");
	});
	//删除按钮
	$(".mesdelect").click(function(){
		$(".checkbox i.fa-check").parents(".message_con").remove()
		if($(".checkbox i.fa-check").length == 0){
			$("i.fa-check").removeClass("fa-check");
		}

	})
})