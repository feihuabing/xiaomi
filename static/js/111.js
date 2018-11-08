/**
 * Created by web on 2018/8/31.
 */
function start(){
    var urlParams=new URLSearchParams(location.search);
    uid=urlParams.get('uid');

    if(uid!=null){
        $("index").href="index.html?uid="+uid;
        $("index1").href="index.html?uid="+uid;
        $("user").href="user.html?uid="+uid;
        selectuname();
        getproductNum();
    }
}
function getproductNum(){
    var urlParams=new URLSearchParams(location.search);
    uid=urlParams.get('uid');
    var xhr = createXhr();
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            var res = JSON.parse(res);
            var num=0;
            for(var a in res){
                num = num+parseInt(res[a].product_num);
            }
            if (num!=0){
                myShoppingcart();
            }
        }
    };
    xhr.open('get','/product/getProduct?uid='+uid,true);
    xhr.send(null);
}
function selectuname(){
    var xhr = createXhr();
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4&&xhr.status==200){
            var res = xhr.responseText;
            $("user").innerHTML=res;
        }
    }
    xhr.open('get','/user/selectuname?uid='+uid,true)
    xhr.send(null);
    $("user").style.display="inline";
    $("reg").style.display="none";
    $("login").style.display="none";
    $("snone").style.display="none";
}
function over(i){
    if(i==0){
        return "无";
    }else if(i==1){
        return "意外保障服务";
    }else if(i==2){
        return "碎屏保障服务";
    }
}
function myShoppingcart() {
    var urlParams = new URLSearchParams(location.search);
    uid = urlParams.get('uid');
    var xhr = createXhr();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var res = xhr.responseText;
            var res = JSON.parse(res);
            if (res.length > 0) {
                $("body").innerHTML = `<table></table><div class=' w1300 bdbddd m50c h70 bgwhite'><input type='checkbox' onclick='chooseAll()' class='ml30'><span class='lh70'>全选</span> <span class='ml50'>商品名称</span> <span class='ml400'>单价</span> <span class='ml70'>额外</span> <span class='ml150'>数量</span> <span class='ml150'>小计</span> <span class='ml70'>操作</span> </div>`;
                for (var a in res) {
                    $("body").innerHTML = $("body").innerHTML + `<div class='w1300 mcenter p50_0 bdbddd bgwhite'><input type='checkbox' name='choose' onclick='choose${a}()' class='ml30' id='p${a}_choose'><input type='hidden' value='${res[a].sid}' id='p${a}_sid'/> <span class='pname'><span id='p${a}_pname'>${res[a].product_name}</span>&nbsp;&nbsp;&nbsp;<span id='p${a}_spec'>${res[a].spec}</span>&nbsp;&nbsp;&nbsp;<span id='p${a}_color'>${res[a].color}</span></span> <span class='one_price' id='p${a}_price'>${res[a].price}</span> <span class='over'>${over(res[a].over)}</span> <div class='num'> <button class='float_left numsub hbgddd' onclick='sub${a}()'>-</button> <div class='float_left allnum' id='num${a}'>${res[a].product_num}</div> <button class='float_left numplus hbgddd' onclick='plus${a}()'>+</button> </div> <span class='allprice_one' id='p${a}_allprice'>${parseInt(res[a].price)*res[a].product_num}</span><span class="yuan">元</span><button class='delete hbgred'>×</button> </div>`;
                }
            }
            $("body").innerHTML = $("body").innerHTML +`<div class='w1300 m20auto'> <a href='' id='pay'>去结算</a> <span class='ballprice'>合计<span class='fz40'><span id='allprice' class='allprice'>0</span>元</span></span> <div class='clear_both'></div> </div> <div class='w130h50'> </div>`;
        }
    }
    xhr.open('get','/product/getProduct?uid='+uid,true)
    xhr.send(null);
}
var ac=0;
function chooseAll(){
    if(ac%2==0){
        var str = document.getElementsByName('choose');
        for(var i in str){
            str[i].checked=true;
        }
    }else{
        var str = document.getElementsByName('choose');
        for(var i in str){
            str[i].checked=false;
        }
    }
    ac++
}
function sub0(){
    if($("p0_choose").checked==false){
        if($("num0").innerHTML>1){
            $("num0").innerHTML = parseInt($("num0").innerHTML)-1;
            $("p0_allprice").innerHTML=parseInt($("p0_allprice").innerHTML)-parseInt($("p0_price").innerHTML);
            var sid = $("p0_sid").value;
            var num = $("num0").innerHTML;
            var xhr = createXhr();
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){
                    var res = xhr.responseText;
                }
            }
            xhr.open('get','/product/subproduct?sid='+sid+'&num='+num,true);
            xhr.send(null);
        }
    }else{

    }

}
function plus0() {
    if($("num0").innerHTML<9) {
        $("num0").innerHTML = parseInt($("num0").innerHTML) + 1;
        $("p0_allprice").innerHTML = parseInt($("p0_allprice").innerHTML) + parseInt($("p0_price").innerHTML);
        var sid = $("p0_sid").value;
        var num = $("num0").innerHTML;
        var xhr = createXhr();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                var res = xhr.responseText;
            }
        }
        xhr.open('get', '/product/subproduct?sid=' + sid + '&num=' + num, true);
        xhr.send(null);
    }
}
function choose1(){
    console.log(1);
}