var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydb'); //连接上 mydb 数据库

var Schema = mongoose.Schema;
var userSchema = new Schema({
	name: String,
	pass: String,
	email: String,
	createTime: Date,
	lastLogin: Date
})