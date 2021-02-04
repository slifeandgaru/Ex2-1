// getting-started.js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection successfully");
    // we're connected!
});

// tạo bảng data
let Schema = mongoose.Schema;

// let post = new Schema({
//     content: String,
//     title: String,
//     comment: String,
// })

// let UserModel = mongoose.model("user", post);

// ----- 1.1 Tạo 2 bản ghi mới -----
// UserModel.create({
//     content: "COVID",
//     title: "Về quê là bị bế đi cách li",
//     comment: "Thằng này ý thức kém thế",
// },{
//     content: "COVID news",
//     title: "Sinh viên FPT tự nguyện đi cách li trong KTX",
//     comment: "Goodjob", 
// }).then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// })

// ----- 1.2 Tìm toàn bộ bài post -----
// UserModel.find().then(function(data){
//         console.log(data, "list post");
//     }).catch(function(err){
//         console.log(err);
//     })
// ----- 1.3 In ra 1 bài post theo điều kiện id -----
// UserModel.find({
//     _id: "601baa1bf9e69e2fb43d7324"
// }).then(function(data){
//         console.log(data, "list post");
//     }).catch(function(err){
//         console.log(err);
//     })
// 
// ----- 1.4 Cập nhật 1 giá trị của content theo 1 id -----
// UserModel.updateOne({
//     // điều kiện bản ghi
//     _id: "601baa1bf9e69e2fb43d7323"
// },{
//     // giá trị đc cập nhật
//     content: "COVID Update"
// }).then((data) =>{
//     console.log(data);
// }).catch((err) =>{
// })

// ----- Bonus -----
// UserModel.deleteMany().then((data) =>{
//     console.log(data);
// }).catch((data) =>{

// })


// ---------------------------Bài 2--------------------------

let user = new Schema({
    username: String,
    password: String,
    email: String,
    age: Number,
    school: String
})

let UserModel = mongoose.model("user", user);

// ----- 2.1 tạo 5 bản ghi với nội dung bất kì -----
// UserModel.create({
//     username: "Nguyễn Xuân Trường",
//     password: "1",
//     email: "NXT@fpt.edu.vn",
//     age: 20,
//     school: "FPT University"
// }, {
//     username: "Chu Quang Nhật",
//     password: "2",
//     email: "CQN@fpt.edu.vn",
//     age: 20,
//     school: "FPT University"
// }, {
//     username: "Đinh Thị Hồng Anh",
//     password: "3",
//     email: "DTHA@gmail.com",
//     age: 21,
//     school: "Academy Of Finance"
// }, {
//     username: "Vũ Hoàng Anh Long",
//     password: "4",
//     email: "VHAL@gmail.com",
//     age: 20,
//     school: "Vietnam National Oniversity of Agriculture"
// }, {
//     username: "Phạm Thị Hồng",
//     password: "5",
//     email: "NXT@fpt.edu.vn",
//     age: 21,
//     school: "DaiNam University"
// }).then(function (data) {
//     console.log(data);
// }).catch(function (err) {
//     console.log(err);
// })
// ----- 2.2 Tìm ra 1 bản ghi theo username, password -----
// ----- ( nếu không tim thấy thì in ra thông báo là không tìm thấy, còn tìm thấy thì in ra thông báo ) -----
UserModel.find({
    username: "Phạm Thị Hồng",
    password: "5"
}).then(function (data) {
    console.log(data, "list user");
}).catch(function (err) {
    console.log("Không tìm thấy thông tin");
})

// ----- 2.3 Xóa 1 bản ghi theo id -----
// UserModel.deleteOne({
//     _id: "601bb13634b13e15bc77ea23"
// }).then((data) =>{
//     console.log(data);
// }).catch((data) =>{

// })
// ----- 2.4 Thực hiện tìm và in ra giới hạn chỉ in ra 3 bản ghi -----
// UserModel.find().limit(3).then(function(data){
//     console.log(data, "list user");
// }).catch(function(err){
//     console.log("errer");
// })
// ----- Delete All -----
// UserModel.deleteMany().then((data) =>{
//     console.log(data);
// }).catch((data) =>{

// })