//加载express模块
const express = require('express')
const app = express()
const process = require('process')
require('./mongo/connection.js')

const user =require('./model/user.js')

app.get('/',(req,res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000'))

//console.log("文件的路径"+__dirname); //文件的路径E:\ZSMdemo\test

app.use('api/author',user)

app.get('/user',(req,res) => {
  res.send('hello world')
})

app.post('/Name',(req,res) => {
  res.send('11')
})