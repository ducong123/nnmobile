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
    	var cl_textval=$(".cl_text").val();
    	var cl_passtval=$(".cl_pass").val();
    	if($(this).hasClass("cur_pass")){
    		$(this).removeClass("cur_pass");
    		$(".cl_pass").val(cl_textval).show();
    		$(".cl_text").hide();
    	}else{
    		$(this).addClass("cur_pass");
    		$(".cl_pass").hide();
    		$(".cl_text").val(cl_passtval);
    		$(".cl_text").show();
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
    var countdown=60; 
    $(".input_icon .yzm").click(function(){
    	time()
    })
    function time(obj){
    	if(countdown == 0){
    		$(".input_icon .yzm").removeAttr('disabled');
    		$(".input_icon .yzm").val("获取验证码");
    		countdown = 60; 
    	}else{  
            //btnObj.setAttribute("disabled", true);  
    		$(".input_icon .yzm").attr('disabled','disabled');  
    		$(".input_icon .yzm").val( countdown + "s后可重新获取");  
    		countdown--;  
            t=setTimeout(function(){  
                time();  
            },1000)  
        }  
    }
   
})