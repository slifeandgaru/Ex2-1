// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connection successfully");
  // we're connected!
});

// tạo bảng data
let Schema = mongoose.Schema;

let userSchema = new Schema({
    userName: String,
    email: String,
    password: String,
    age: Number
})

// định nghĩa tên bảng
// tên này khi mà chạy Monggo thì nó sẽ tự động thêm 's' vào sau tên mà mình muốn
let UserModel = mongoose.model("user", userSchema);
// tạo 1 bảng ghi
// các hàm trong mongo 85% luôn trả về  dưới dạng PROMISE 
// UserModel.create({
//     userName: "ta",
//     email: "ta@gmail.com",
//     password: "1",
//     age: 20
// }).then(function(data){
//     console.log(data);
// }).catch(function(err){
//     console.log(err);
// })

// tìm kiếm bản ghi: 2TH
// TH1: tìm kiếm ko điều kiện là tìm kiếm toàn bộ bản ghi

// UserModel.find().then(function(data){
//     console.log(data, "list user");
// }).catch(function(err){
//     console.log(err);
// })

//TH2: tìm kiếm có điều kiện
// UserModel.find({
//     _id: "601a6c3e99d32c16e0cea311"
// }).then(function(data){
//     console.log(data, "list user");
// }).catch(function(err){
//     console.log(err);
// })

// cập nhật dữ liệu cho 1 bản ghi
// UserModel.updateOne({
//     // điều kiện bản ghi
//     _id: "601a6c3e99d32c16e0cea311"
// },{
//     // giá trị đc cập nhật
//     password: "something"
// }).then((data) =>{
//     console.log(data);
// }).catch((err) =>{

// })
// UpdateMany
// update tất cả nhưng bản ghi có điều kiện giống nhau
// UserModel.updateMany({
//     // điều kiện bản ghi
//     _id: "601a6c3e99d32c16e0cea311"
// },{
//     // giá trị đc cập nhật
//     password: "something"
// }).then((data) =>{
//     console.log(data);
// }).catch((err) =>{

// })

UserModel.deleteOne({
    _id: "601a6c3e99d32c16e0cea311"
}).then((data) =>{
    console.log(data);
}).catch((data) =>{

})