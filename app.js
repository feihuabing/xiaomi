const express = require("express");
const bodyParser = require("body-parser")
const product = require('./routes/product.js');
const user = require('./routes/user.js');

var app = express();
app.listen(4000,()=>{
	console.log("小米服务器创建成功！");
})
app.use(express.static('./static'))
app.use(bodyParser.urlencoded({
		extended:false}
));
app.use('/product',product);
app.use('/user',user);

