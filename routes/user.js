const express=require("express");
const pool=require("../pool.js");
var router = express.Router();
router.get('/checkPhone',(req,res)=>{
    var phone = req.query.phone;
    var sql='select * from xm_user where phone=?';
    pool.query(sql,[phone],(err,result)=>{
        if (err)throw err;
        if(result.length>0){
            res.send("<script>alert('号码已被注册');location.href='http://47.94.218.246:4000/register.html'</script>");
        }else{
            res.send("<script>location.href='http://47.94.218.246:4000/register1.html?phone="+phone+"'</script>");
        }
    })
})
router.get('/checkyzm',(req,res)=>{
    var yzm = req.query.yzm;
	var phone = req.query.phone;
    if(yzm!=123456){
        res.send("<script>alert('验证码错误，请再次输入');location.href='http://47.94.218.246:4000/register1.html'</script>");
    }else{
        res.send("<script>alert('验证码正确');location.href='http://47.94.218.246:4000/register2.html?phone="+phone+"'</script>");
    }
})
router.post('/register',(req,res)=>{
	var phone = req.body.phone;
	var upwd = req.body.upwd;
	var sql = 'insert into xm_user(uname,upwd,phone)value(?,?,?)';
	pool.query(sql,[phone,upwd,phone],(err,result)=>{
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("<script>alert('注册成功');location.href='http://47.94.218.246:4000/login.html?phone="+phone+"'</script>")
		}else{
			res.send("<script>alert('注册失败');location.href='http://47.94.218.246:4000/register2.html'</script>")
		}
	})
})
router.get('/checkUname',(req,res)=>{
	var uname = req.query.uname;
	if (uname=="")
	{
		res.send("用户名不能为空");
		return;
	}
	var sql = 'select * from xm_user where uname=?';
	pool.query(sql,uname,(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send("用户名存在");
		}else{
			res.send("用户名不存在");
		}
	})
})
router.post('/login',(req,res)=>{
	var uname = req.body.uname;
	var upwd = req.body.upwd;
	var sql = 'select * from xm_user where uname=? and upwd =?';
	pool.query(sql,[uname,upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			var uid = result[0].uid;
			res.send("<script>alert('登录成功');location.href='http://47.94.218.246:4000/index.html?islogin=1&uid="+uid+"'</script>");
		}else{
			res.send("<script>alert('登录失败');location.href='http://47.94.218.246:4000/login.html'</script>");
		}
	})
})
router.get('/selectuname',(req,res)=>{
	var uid = req.query.uid;
	var sql = 'select * from xm_user where uid=?'
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			if(result[0].user_name==null){
				res.send(result[0].uname);
			}else{
				res.send(result[0].user_name);
			}

		}
	})
})
router.get('/xm_user',(req,res)=>{
	var uid = req.query.uid;
	res.send("<script>location.href='http://47.94.218.246:4000/user.html?uid="+uid+"'</script>")
})
router.get('/quit',(req,res)=>{
	res.send("<script>location.href='http://47.94.218.246:4000/index.html'</script>")
})
router.get('/selectuser',(req,res)=>{
	var uid = req.query.uid;
	var sql = 'select * from xm_user where uid=?'
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	})
})
router.get('/userinfo',(req,res)=>{
	var uid = req.query.uid;
	res.send("<script>location.href='http://47.94.218.246:4000/userinfo.html?uid="+uid+"'</script>")
})
router.get('/updateUser',(req,res)=>{
	var str = req.query;
	var uid = str.uid;
	var user_name = str.user_name;
	var year = str.year;
	var month = str.month;
	var day = str.day;
	if(year%4==0){
		if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
			day=day[0]
		}else if(month==4||month==6||month==9||month==11){
			day=day[1]
		}else{
			day=day[2]
		}
	}else{
		if(month==1||month==3||month==5||month==7||month==8||month==10||month==12){
			day=day[0]
		}else if(month==4||month==6||month==9||month==11){
			day=day[1]
		}else{
			day=day[3]
		}
	}
	var gender = str.gender;
	var email= str.email;
	var birthday = year+"-"+month+"-"+day;
	var sql="update xm_user set user_name=?,birthday=?,gender=?,email=? where uid=?";
	pool.query(sql,[user_name,birthday,gender,email,uid],(err,result)=>{
		if (err) throw err;
		if(result.affectedRows>0){
			res.send("<script>alert('修改成功');location.href='http://47.94.218.246:4000/userinfo.html?uid="+uid+"'</script>")
		}
	})
})

module.exports=router;