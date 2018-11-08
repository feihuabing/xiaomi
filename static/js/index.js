/**
 * Created by Administrator on 2018/8/15.
 */
function $(id){
    return document.getElementById(id);
}
var islogin=null;
var a=1;
function next(){
    a++;
    if(a==7){
        a=1;
    }

    if (a==1){
        $("lunbo").style.backgroundImage="url('./img/lb1.jpg')";
        $("lb1").style.backgroundColor="white";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==2){
        $("lunbo").style.backgroundImage="url('./img/lb2.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="white";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==3){
        $("lunbo").style.backgroundImage="url('./img/lb3.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="white";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==4){
        $("lunbo").style.backgroundImage="url('./img/lb4.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="white";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==5){
        $("lunbo").style.backgroundImage="url('./img/lb5.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="white";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==6){
        $("lunbo").style.backgroundImage="url('./img/lb6.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="white";
    }
}
function last(){
    a--;
    if(a==0){
        a=6;
    }

    if (a==1){
        $("lunbo").style.backgroundImage="url('./img/lb1.jpg')";
        $("lb1").style.backgroundColor="white";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==2){
        $("lunbo").style.backgroundImage="url('./img/lb2.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="white";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==3){
        $("lunbo").style.backgroundImage="url('./img/lb3.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="white";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==4){
        $("lunbo").style.backgroundImage="url('./img/lb4.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="white";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==5){
        $("lunbo").style.backgroundImage="url('./img/lb5.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="white";
        $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    }
    if(a==6){
        $("lunbo").style.backgroundImage="url('./img/lb6.jpg')";
        $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
        $("lb6").style.backgroundColor="white";
    }
}
function turn1(){
    $("lunbo").style.backgroundImage="url('./img/lb1.jpg')";
    $("lb1").style.backgroundColor="white";
    $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    a=1;
    clearInterval(timer);
}
function turn2(){
    $("lunbo").style.backgroundImage="url('./img/lb2.jpg')";
    $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb2").style.backgroundColor="white";
    $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    a=2;
    clearInterval(timer);
}
function turn3(){
    $("lunbo").style.backgroundImage="url('./img/lb3.jpg')";
    $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb3").style.backgroundColor="white";
    $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    a=3;
    clearInterval(timer);
}
function turn4(){
    $("lunbo").style.backgroundImage="url('./img/lb4.jpg')";
    $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb4").style.backgroundColor="white";
    $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    a=4;
    clearInterval(timer);
}
function turn5(){
    $("lunbo").style.backgroundImage="url('./img/lb5.jpg')";
    $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb5").style.backgroundColor="white";
    $("lb6").style.backgroundColor="rgba(0,0,0,0.4)";
    a=5;
    clearInterval(timer);
}
function turn6(){
    $("lunbo").style.backgroundImage="url('./img/lb6.jpg')";
    $("lb1").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb2").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb3").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb4").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb5").style.backgroundColor="rgba(0,0,0,0.4)";
    $("lb6").style.backgroundColor="white";
    a=6;
    clearInterval(timer);
}
var timer = null;
function xmsg(){
	var timer1 = null;
	var my=0;
	timer1 = setInterval(()=>{
		var time = new Date() ;
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds();
		var s = 36000-3600*hour-60*minute-second;
		if (s<0)
		{
			s+=86400;
		}
		hour = parseInt(s/3600);
		minute = parseInt((s-hour*3600)/60);
		second=s%60;
		$("hour").innerHTML=hour;
		$("minute").innerHTML=minute;
		$("second").innerHTML=second;
		my++;
		if(my<0){
			clearInterval(timer1);
		}
	})
}
function start(){
	xmsg();
    timer = setInterval(next,5000);
    var urlParams=new URLSearchParams(location.search);
    uid=urlParams.get('uid');
    $("index").href="index.html?uid="+uid;
    islogin = urlParams.get('islogin');
    if(uid!=null){
        $("shoppingcart").href="shoppingCart.html?uid="+uid;
        $("xiaomi8").href+="&uid="+uid;
        $("xiaomimix").href+="&uid="+uid;
        $("xiaomi6x").href+="&uid="+uid;
        var xhr = createXhr();
        xhr.onreadystatechange = function(){
            if(xhr.readyState==4&&xhr.status==200){
                var res = xhr.responseText;
                $("user").value=res;
                $("uid").value=uid;
            }
        }
        xhr.open('get','/user/selectuname?uid='+uid,true)
        xhr.send(null);
        $("user").style.display="block";
        $("tuichu").style.display="block";
        $("reg").style.display="none";
        $("login").style.display="none";

    }
    myTopShoppingcart();
    getProductNum();
}
function hright(){
    $("tRight").style.visibility="hidden";
    $("tLeft").style.visibility="visible";
}
function hleft(){
    $("tRight").style.visibility="visible";
    $("tLeft").style.visibility="hidden";
}
function hot(){
    $("d12--1").style.display="block";
    $("d13--1").style.display="none";
    $("d14--1").style.display="none";
    $("d15--1").style.display="none";
    $("d11-h").style.color="#ff6700";
    $("d11-h").style.borderBottom="2px solid #ff6700"
    $("d11-t").style.color="black";
    $("d11-t").style.borderBottom="none";
    $("d11-c").style.color="black";
    $("d11-c").style.borderBottom="none";
    $("d11-j").style.color="black";
    $("d11-j").style.borderBottom="none";

}
function tv(){
    $("d12--1").style.display="none";
    $("d13--1").style.display="block";
    $("d14--1").style.display="none";
    $("d15--1").style.display="none";
    $("d11-t").style.color="#ff6700";
    $("d11-t").style.borderBottom="2px solid #ff6700"
    $("d11-h").style.color="black";
    $("d11-h").style.borderBottom="none";
    $("d11-c").style.color="black";
    $("d11-c").style.borderBottom="none";
    $("d11-j").style.color="black";
    $("d11-j").style.borderBottom="none";
}
function computer(){
    $("d12--1").style.display="none";
    $("d13--1").style.display="none";
    $("d14--1").style.display="block";
    $("d15--1").style.display="none";
    $("d11-c").style.color="#ff6700";
    $("d11-c").style.borderBottom="2px solid #ff6700"
    $("d11-t").style.color="black";
    $("d11-t").style.borderBottom="none";
    $("d11-h").style.color="black";
    $("d11-h").style.borderBottom="none";
    $("d11-j").style.color="black";
    $("d11-j").style.borderBottom="none";
}
function jiaju(){
    $("d12--1").style.display="none";
    $("d13--1").style.display="none";
    $("d14--1").style.display="none";
    $("d15--1").style.display="block";
    $("d11-j").style.color="#ff6700";
    $("d11-j").style.borderBottom="2px solid #ff6700"
    $("d11-t").style.color="black";
    $("d11-t").style.borderBottom="none";
    $("d11-c").style.color="black";
    $("d11-c").style.borderBottom="none";
    $("d11-h").style.color="black";
    $("d11-h").style.borderBottom="none";
}
function fn(){
    $("transform-1").style.transition="transform 0.1s linear 0.2s";
    $("transform-1").style.transform="translateY(234px)";

}
function fn_1(){
    $("transform-1").style.transition="transform 0.1s linear 0.2s";
    $("transform-1").style.transform="translateY(0)"

}
function fn1(){
    $("transform-2").style.transition="transform 0.1s linear 0.2s";
    $("transform-2").style.transform="translateY(234px)";

}
function fn1_1(){
    $("transform-2").style.transition="transform 0.1s linear 0.2s";
    $("transform-2").style.transform="translateY(0)"

}
function fn2(){
    $("transform-3").style.transition="transform 0.1s linear 0.2s";
    $("transform-3").style.transform="translateY(234px)";

}
function fn2_1(){
    $("transform-3").style.transition="transform 0.1s linear 0.2s";
    $("transform-3").style.transform="translateY(0)";

}
function fn3(){
    $("transform-4").style.transition="transform 0.1s linear 0.2s";
    $("transform-4").style.transform="translateY(234px)"
}
function fn3_1(){
    $("transform-4").style.transition="transform 0.1s linear 0.2s";
    $("transform-4").style.transform="translateY(0)"
}
function fn4(){
    $("transform-5").style.transition="transform 0.1s linear 0.2s";
    $("transform-5").style.transform="translateY(234px)"
}
function fn4_1(){
    $("transform-5").style.transition="transform 0.1s linear 0.2s";
    $("transform-5").style.transform="translateY(0)"
}
function fn5(){
    $("transform-6").style.transition="transform 0.1s linear 0.2s";
    $("transform-6").style.transform="translateY(234px)"
}
function fn5_1(){
    $("transform-6").style.transition="transform 0.1s linear 0.2s";
    $("transform-6").style.transform="translateY(0)"
}
function fn6(){
    $("transform-7").style.transition="transform 0.1s linear 0.2s";
    $("transform-7").style.transform="translateY(234px)"
}
function fn6_1(){
    $("transform-7").style.transition="transform 0.1s linear 0.2s";
    $("transform-7").style.transform="translateY(0)"
}
function fn7(){
    $("transform-8").style.transition="transform 0.1s linear 0.2s";
    $("transform-8").style.transform="translateY(234px)"
}
function fn7_1(){
    $("transform-8").style.transition="transform 0.1s linear 0.2s";
    $("transform-8").style.transform="translateY(0)"
}
function fn8(){
    $("transform-1").style.transition="transform 0.1s linear 0.2s";
    $("transform-1").style.transform="translateY(234px)"
}
function fn8_1(){
    $("transform-1").style.transition="transform 0.1s linear 0.2s";
    $("transform-1").style.transform="translateY(0)"
}
function tuichu(){
    uid=null;
    $("user").style.display="none";
    $("tuichu").style.display="none";
    $("reg").style.display="block";
    $("login").style.display="block";
}
