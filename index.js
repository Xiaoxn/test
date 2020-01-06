//加载express模块
const express = require('express')
const app = express()
require('./mongo/connection.js')

const getUser = require('./model/user.js')

app.get('/',(req,res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000'))

//console.log("文件的路径"+__dirname); //文件的路径E:\ZSMdemo\test;静态文件地址
//app.use('/assets', express.static(path.join(__dirname, 'assets')))

app.get('/user',(req,res) => {
  console.log(getUser)
  res.send({
    code:1000,
    data:getUser,
    msg:'success'
  })
})

app.post('/Name',(req,res) => {
  res.send('11')
})