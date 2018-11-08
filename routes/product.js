const express=require("express");
const pool=require("../pool.js");

var router = express.Router();
router.get('/selectproduct',(req,res)=>{
    var pid = req.query.pid;
    var sql = 'select *  from xm_product where pid = ?';
    pool.query(sql,[pid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
        }
    })
})
router.get('/shoppingcart',(req,res)=>{
    var str = req.query;
    var uid = str.uid;
    var pname = str.pname;
    var price = str.price;
    var over = str.over;
    var color = str.color;
    var spec = str.spec;
    var sql = "select * from xm_shopping_cart where user_id=? and product_name=? and over=? and color=? and spec=?";
    var sql1 = "insert into xm_shopping_cart(user_id,product_name,price,over,color,spec,product_num) value(?,?,?,?,?,?,?)";
    var sql2 = "update xm_shopping_cart set product_num=? where sid=?";
    var sid=null;
    var product_num=1;
    pool.query(sql,[uid,pname,over,color,spec],(err,result)=>{
        if (err) throw err;
        if(result.length>0){
            product_num=parseInt(result[0].product_num)+1;
            sid=result[0].sid;
            pool.query(sql2,[product_num,sid],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.send("加入购物车成功");
                }else{
                    res.send("加入购物车失败");
                }
            })
        }else{
            pool.query(sql1,[uid,pname,price,over,color,spec,product_num],(err,result)=>{
                if(err) throw err;
                if(result.affectedRows>0){
                    res.send("加入购物车成功");
                }else{
                    res.send("加入购物车失败");
                }
            })
        }
    })
})
router.get('/getProduct',(req,res)=>{
    var uid = req.query.uid;
    var sql = 'select * from xm_shopping_cart where user_id=?';
    pool.query(sql,uid,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }
    })
})
router.get('/subproduct',(req,res)=>{
    var sid = req.query.sid;
    var num = req.query.num;
    var sql = 'update xm_shopping_cart set product_num=? where sid=?';
    pool.query(sql,[num,sid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("修改成功");
        }
    })
})
router.get('/deleteOneProductFromShoppingCart',(req,res)=>{
    var sid = req.query.sid;
    var uid=req.query.uid;
    var sql = 'delete from xm_shopping_cart where sid=?';
    pool.query(sql,[sid],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send(`<script>alert("删除成功");location.href="http://47.94.218.246:4000/shoppingCart.html?uid=${uid}"</script>`);
        }
    })
})
router.get('/pay',(req,res)=>{
    var sid = req.query.sid;
    var uid = req.query.uid;
    var price = req.query.allprice;
    res.send(`<script>location.href='http://47.94.218.246:4000/buy.html?sid=${sid}&price=${price}&uid=${uid}'</script>`);
})
router.get('/getProductBysid',(req,res)=>{
    var sid = req.query.sid;
    var sql = 'select * from xm_shopping_cart where sid=?';
    pool.query(sql,sid,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }
    })
})
router.get('/havepay',(req,res)=>{
    var sid = req.query.sid;
    var sid = sid.split(",");
    var sql = "delete from xm_shopping_cart where sid=?";
    var del = 0
    var a=sid.length;
    for (var i=0;i<sid.length;i++)
    {
        pool.query(sql,sid[i],(err,result)=>{
            if(err) throw err;
        })
    }res.send("购买成功");
})
router.get('/joinHaveBuy',(req,res)=>{
    var uid=req.query.uid;
    var date=new Date();
    var str = date.toLocaleString();
    var allname = req.query.allname;
    var allcolor = req.query.allcolor;
    var allspec = req.query.allspec;
    var allprice = req.query.allprice;
    var allnum = req.query.allnum;
    var allover = req.query.allover;
    var allname=allname.split(",");
    allname.length--;
    var allcolor=allcolor.split(",");
    allcolor.length--;
    var allspec=allspec.split(",");
    allspec.length--;
    var allprice=allprice.split(",");
    allprice.length--;
    var allnum=allnum.split(",");
    allnum.length--;
    var allover=allover.split(",");
    allover.length--;
    var sql="insert into xm_have_buy(user_id,product_name,price,over,color,spec,product_num,shoppingdate) value(?,?,?,?,?,?,?,?)"
    for(var i=0;i<allname.length;i++){
        pool.query(sql,[uid,allname[i],allprice[i],allover[i],allcolor[i],allspec[i],allnum[i],str],(err,result)=>{
            if(err) throw err;
        })
    }
    res.send("成功");
})
router.get('/selecthavebuy',(req,res)=>{
    var uid= req.query.uid;
    var sql = "select * from xm_have_buy where user_id=?";
    pool.query(sql,[uid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }
    })
})
module.exports=router;