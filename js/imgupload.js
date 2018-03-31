//头像上传
function $(id){
    return document.getElementById(id);
}
function imgFile(input,saved){
    var input = $(input);
    if(typeof FileReader === 'undefined'){
        document.body.innerHTML = "抱歉，你的浏览器不支持 FileReader";
        input.setAttribute('disabled','disabled');
    }else{
        input.addEventListener('change',readFile,false);
    }
    function readFile(){
     /*   if(!$(saved)){
            var img = document.createElement('img');
                img.id = saved;
                img.className = 'saveimg';
                img.style.height = '100px';
                img.style.width = '100px';
                document.body.appendChild(img);
        }*/
        var file = this.files[0];
        if(!/image\/\w+/.test(file.type)){
            alert("请确保文件为图像类型");
            return false;
        }
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function(e){
            $(saved).src = this.result;
        }
    }
}       
window.onload = function(){
    imgFile('file_input','saved');
}
//头像上传end