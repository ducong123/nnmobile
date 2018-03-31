$(function(){
    //监控用户名是否为空的情况
    $("input[name=username],input[name=phone]").bind('input propertychange', function() {
    	var del_but=$(this).parent().find(".input_del");
    	if($(this).val()!=""){
    		del_but.show();
    	 }else{
    		del_but.hide();
    	 }
    });
    //清空用户名
    $(".input_del").click(function(){
    	 $(this).parent().find("input").val("");
    	 $(this).hide();
    })
    //密码的显示隐藏
    $(".input_pass").click(function(){
        var cl_text=$(this).parent("").find(".cl_text");//当前父标签下的文本框
        var cl_pass=$(this).parent("").find(".cl_pass");//当前父标签下的密码框
    	var cl_textval=cl_text.val();//文本框当前值
    	var cl_passtval=cl_pass.val();//密码框当前值
    	if($(this).hasClass("cur_pass")){
    		$(this).removeClass("cur_pass");
    		cl_text.hide();
            cl_pass.val(cl_textval)
            cl_pass.show();
    	}else{
    		$(this).addClass("cur_pass");
    		 cl_pass.hide();
    		 cl_text.val(cl_passtval);
    		 cl_text.show();
            
    	}
    })
    //点击登录验证用户名和密码
    $(".login_div .login_but").click(function(){
    	var username=$("input[name=username]").val();
        var password=$("input[name=password]").val();
        if(username==""||password==""){
        	$(".promt_div .prompt").html("用户名或密码不能为空！")
        }else{
        	$(".promt_div .prompt").html("");
        }
    })
    
    //发送验证码倒计时
    $(".yzm").click(function(){
        invokeSettime($(this))
    })
    function invokeSettime(obj){
        var countdown=60;
        settime(obj);
        function settime(obj) {
            if (countdown == 0) {
                $(obj).attr("disabled",false);
                $(obj).val("获取验证码");
                countdown = 60;
                return;
            } else {
                $(obj).attr("disabled",true);
                $(obj).val( countdown + "s 重新发送");
                countdown--;
            }
            setTimeout(function() {
                        settime(obj) }
                    ,1000)
        }
  }

   
})