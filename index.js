//加载express模块
const express = require('express')
const app = express()
const process = require('process')
const mongoose = require('./mongo/connection.js')

new Promise( (_,reject) => {

}).catch(() => {})

// const NewModel =import('./model/user.js')

app.get('/',(req,res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000'))

//console.log("文件的路径"+__dirname); //文件的路径E:\ZSMdemo\test

app.get('/user',(req,res) => {
  res.send('hello world')
})

app.post('/Name',(req,res) => {
  res.send('11')
})