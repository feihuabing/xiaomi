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
                    $("body").innerHTML = $("body").innerHTML + `<div class='w1300 mcenter p50_0 bdbddd bgwhite'><input type='checkbox' name='choose' class='ml30 check' id='p${a}_choose'> <span class='pname'><span id='p${a}_pname'>${res[a].product_name}</span>&nbsp;&nbsp;&nbsp;<span id='p${a}_spec'>${res[a].spec}</span>&nbsp;&nbsp;&nbsp;<span id='p${a}_color'>${res[a].color}</span></span> <span class='one_price' id='p${a}_price'>${res[a].price}</span> <span class='over'>${over(res[a].over)}</span> <div class='num'> <button class='float_left numsub hbgddd'>-</button> <div class='float_left allnum' id='num${a}'>${res[a].product_num}</div> <button class='float_left numplus hbgddd'>+</button> </div> <span class='allprice_one' id='p${a}_allprice'>${parseInt(res[a].price)*res[a].product_num}</span><span class="yuan">元</span><form action='/product/deleteOneProductFromShoppingCart' ><input type='hidden' value='${res[a].sid}'name='sid'/><input type='hidden' value='${uid}'name='uid'/><input type='submit' class='delete hbgred' value='×'></form> </div>`;
                }
            }
            $("body").innerHTML = $("body").innerHTML +`<div class='w1300 m20auto'><form action="/product/pay"><input type='hidden' value='${uid}'name='uid'/><input type="hidden" name="sid" id="sid"/><input type="hidden" id="allprice1" name="allprice" value="0"/><input type="submit"  id='pay' value="去结算"></form> <span class='ballprice'>合计<span class='fz40'><span id='allprice' class='allprice'>0</span>元</span></span> <div class='clear_both'></div> </div> <div class='w130h50'> </div>`;
        }
    }
    xhr.open('get','/product/getProduct?uid='+uid,true)
    xhr.send(null);
}
var ac=0;
var sidAll="";
function chooseAll(){
    if(ac%2==0){
        var str = document.getElementsByTagName("input");
        for(var i in str){
            str[i].checked=true;
        };
        $("sid").value="";
        $("sid").value=sidAll;
        console.log($("sid").value);
        var xhr=createXhr();
        xhr.onreadystatechange=function(){
            if(xhr.readyState==4&&xhr.status==200){
                var res = xhr.responseText;
                var res = JSON.parse(res);
                var allprice=0
                for(var i in res){
                    allprice+=parseInt(res[i].price)*res[i].product_num;
                }
                $("allprice").innerHTML=allprice;
                $("allprice1").value=allprice;
            }
        }
        xhr.open('get','/product/getProduct?uid='+uid,true);
        xhr.send(null);
    }else{
        var str = document.getElementsByTagName("input");
        for(var i in str){
            str[i].checked=false;
            $("allprice").innerHTML=0;
            $("allprice1").value=0;
        }
        $("sid").value="";
    }
    ac++
}
var timer = setTimeout(()=>{
    var btns=document.getElementsByTagName("button");
//2. 绑定事件
    for(var btn of btns){
        btn.onclick=function(){
            var btn=this; //this->当前btn
            //3. 查找要修改的元素
            var span=btn.parentNode.children[1];
            var id = btn.parentNode.parentNode.children[7].children[0];
            var sid = id.value;
            var price_one = btn.parentNode.parentNode.children[2];
            var Allprice_one = btn.parentNode.parentNode.children[5];
            var checkbox=btn.parentNode.parentNode.children[0];
            var num=span.innerHTML;
            if(checkbox.checked==false){
                if(btn.innerHTML=="-"&&num>1){
                    span.innerHTML=num-1;
                    Allprice_one.innerHTML=Allprice_one.innerHTML-parseInt(price_one.innerHTML);

                }else if(btn.innerHTML=="+"){
                    span.innerHTML=parseInt(num)+1
                    Allprice_one.innerHTML=parseInt(Allprice_one.innerHTML)+parseInt(price_one.innerHTML);
                }
            }else{
                if(btn.innerHTML=="-"&&num>1){
                    span.innerHTML=num-1;
                    Allprice_one.innerHTML=Allprice_one.innerHTML-parseInt(price_one.innerHTML);
                    $("allprice").innerHTML=parseInt($("allprice").innerHTML)-parseInt(price_one.innerHTML);
                    $("allprice1").value=parseInt($("allprice1").value)-parseInt(price_one.innerHTML);
                }else if(btn.innerHTML=="+"){
                    span.innerHTML=parseInt(num)+1
                    Allprice_one.innerHTML=parseInt(Allprice_one.innerHTML)+parseInt(price_one.innerHTML);
                    $("allprice").innerHTML=parseInt($("allprice").innerHTML)+parseInt(price_one.innerHTML);
                    $("allprice1").value=parseInt($("allprice1").value)+parseInt(price_one.innerHTML);
                }
            }
            var num = span.innerHTML;
            var xhr=createXhr();
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){
                    var res = xhr.responseText;
                    console.log(res);
                }
            }
            xhr.open('get','/product/subproduct?sid='+sid+'&num='+num,true);
            xhr.send(null);
        }//btn.onclick();
    }
    var checkbox = document.getElementsByTagName("input");
    for(var check of checkbox){
        if(check.onclick==null){
            if(check.parentNode.children[7]!=undefined){
                sidAll=sidAll+check.parentNode.children[7].children[0].value+",";
            };
            check.onclick=function(){
                var check=this; //this->当前btn
                var Allprice_one = check.parentNode.children[5];
                if(check.parentNode.children[7]!=undefined){
                    var id = check.parentNode.children[7].children[0];
                    var sid = id.value;
                }
                console.log(sid);
                var allsid=$("sid").value;
                if(check.checked==true){
                    $("allprice").innerHTML=parseInt($("allprice").innerHTML)+parseInt(Allprice_one.innerHTML);
                    $("allprice1").value=parseInt($("allprice1").value)+parseInt(Allprice_one.innerHTML);

                    if(allsid.search(sid)==-1){
                        $("sid").value=$("sid").value+sid+",";
                    }
                }else{
                    $("allprice").innerHTML=parseInt($("allprice").innerHTML)-parseInt(Allprice_one.innerHTML);
                    $("allprice1").value=parseInt($("allprice1").value)-parseInt(Allprice_one.innerHTML);
                    var reg=`${sid},`;
                    $("sid").value=$("sid").value.replace(reg,"");
                }
                //3. 查找要修改的元素

            }//btn.onclick();
        }

    }
},500)