SET NAMES UTF8;
DROP DATABASE IF EXISTS xm;
CREATE DATABASE xm CHARSET=UTF8;
USE xm;

CREATE	TABLE xm_user(
  uid int primary key auto_increment,
  uname VARCHAR(32),
  upwd VARCHAR(32),
  phone VARCHAR(16),
  email VARCHAR(32),
  birthday VARCHAR(32),
  user_name VARCHAR(32),      #用户名，如王小明
  gender INT,			#性别  0-女  1-男
  buy_before VARCHAR(32)      #历史购买
);

CREATE TABLE xm_product(
 pid INT PRIMARY KEY AUTO_INCREMENT,
 pname VARCHAR(32),
 p_photo VARCHAR(32),
 spec1 VARCHAR(32),
 spec2 VARCHAR(32),
 spec3 VARCHAR(32),
 spec4 VARCHAR(32),
 price1 VARCHAR(32),
 price2 varchar(32),
 price3 varchar(32),
 price4 varchar(32),
 pintro varchar(255)
);

CREATE TABLE xm_shopping_cart(
 sid INT PRIMARY KEY AUTO_INCREMENT,
 user_id VARCHAR(32),
 product_name VARCHAR(32),
 product_num VARCHAR(32),
 over VARCHAR(32),
 color varchar(32),
 price varchar(32),
 spec varchar(32)
);

CREATE TABLE xm_have_buy(
 bid INT PRIMARY KEY AUTO_INCREMENT,
 user_id VARCHAR(32),
 product_name VARCHAR(32),
 product_num VARCHAR(32),
 over VARCHAR(32),
 color varchar(32),
 price varchar(32),
 spec varchar(32),
 shoppingdate varchar(32)
);

INSERT INTO xm_user VALUES
(NULL,"13196592770",'123456','13196592770','1109475083@qq.com',NULL,'费华兵',1,NULL);


INSERT INTO xm_product VALUES
(NULL,'小米8',NULL,'6+64G 全网通','8+128G 全网通','6+128G 全网通','6+256G 全网通','2699元','3299元','2999元','3299元','全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏'),
(NULL,'小米MIX 2',NULL,'6+64G 全网通','6+128G 全网通','6+256G 全网通','8+256G 全网通','2899元','3199元','3599元','3999元','陶瓷机身 手机中的艺术品 / 搭载高通骁龙845 年度旗舰处理器 / AI超感光双摄，DxO百分相机 / 高效 Qi 无线充电'),
(NULL,'小米6X',NULL,'4+64G 全网通','4+32G 全网通','6+64G 全网通','6+128 全网通','1399元','1299元','1599元','1799元','轻薄美观的拍照手机 / 前置2000万“治愈系”自拍 / 后置2000万 AI双摄 / 标配骁龙660 AIE处理器');