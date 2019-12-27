const mongoose = require("mongoose")

//设置mongodb连接地址
const mongURL = "mongodb://localhost:27017/ddd"

/* 连接mongodb设置
* DeprecationWarning：不建议使用当前的URL字符串解析器，并将在以后的版本中将其删除。
* 要使用新的解析器，请将选项{useNewUrlParser：true}传递给MongoClient.connect。 
*/
mongoose.connect(mongURL,{
  useNewUrlParser: true
})

mongoose.connection.on('open', function() {
  console.log('数据库连接成功!')
})

mongoose.connection.on('error', function() {
  console.log('数据库连接失败!')
})

mongoose.connection.on('disconnection', function() {
  console.log('数据库断开连接!')
})

// module.exports = mongoose