/**
 * Created by web on 2018/8/25.
 */
function showxiala(){
    if($("num").innerHTML==0){
        $("headerxiala").style.animation="change 0.5s";
        var timer = setTimeout(()=>{
            $("headerxiala").style.height="100px";
        },480)
    }else{
        $("headerxiala").style.animation="change3 0.5s";
        var timer = setTimeout(()=>{
            $("headerxiala").style.height="300px";
        },480)
    }
}
function hiddenxiala(){
    if($("num").innerHTML==0){
        $("headerxiala").style.animation="change4 0.5s";
        var timer = setTimeout(()=>{
            $("headerxiala").style.height="0";
        },480)
    }else{
        $("headerxiala").style.animation="change5 0.5s";
        var timer = setTimeout(()=>{
            $("headerxiala").style.height="0";
        },480)
    }
}
function myTopShoppingcart(){
    var urlParams=new URLSearchParams(location.search);
    uid=urlParams.get('uid');
    var xhr = createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            var res = JSON.parse(res);
            if(res.length>0){
                $("headerxiala").innerHTML="";
                for(var a in res){
                    $("headerxiala").innerHTML=$("headerxiala").innerHTML+"<div class='w280h80 dflex'><div class='w150h50'>"+res[a].product_name+"&nbsp;&nbsp;&nbsp;&nbsp;"+res[a].color+"&nbsp;&nbsp;&nbsp;&nbsp;"+res[a].spec+"</div> <div class='w130h50'>"+res[a].price+"*"+res[a].product_num+"</div></div>";
                }
            }
        }
    }
    xhr.open('get','/product/getProduct?uid='+uid,true)
    xhr.send(null);
}
function getProductNum(){
    var urlParams=new URLSearchParams(location.search);
    uid=urlParams.get('uid');
    var xhr = createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            var res = JSON.parse(res);
            var num=0;
            for(a in res){
                num = num+parseInt(res[a].product_num);
            }
            $("num").innerHTML=num;
        }
    }
    xhr.open('get','/product/getProduct?uid='+uid,true)
    xhr.send(null);
}