/**
 * mongoose的一切都始于一个schema。每个schema会映射到mongodb中的一个collection，
 * 但不具备操作数据库的能力
 */
const mongoose = require('../mongo/connection.js');

const Schema = mongoose.Schema;
const author = new Schema({
  auther_name: {
    type: String
  },
  author_age: {
    type: Number
  }
})

//创建一个Model 第一个参数是MongoDB中的表名;第二个是刚创建的Schema
const NewModel = mongoose.Schema('author', author)

module.exports = NewModel