const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Bai2', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("kết nối db thành công");
});
let Schema = mongoose.Schema;
//định nghĩa các cột 
let userSchema = new Schema({
    username: String,
    address: String,
    password: String,
    age: Number
})
//định nghĩa tên bảng
//tên này khi mà chạy mongodb thì nó sẽ TỰ ĐỘNG THÊM 's' vào sau tên mà mình muốn
let UserModel = mongoose.model("user", userSchema);


// 1: Tìm tất cả các bản ghi có tuổi lớn hơn 25 tuổi (gợi ý $gt)
// UserModel.find({
//     age: { $gt: 25 }
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// 2: Tìm tất cả document có tuổi từ 20 đến 30 (gợi ý dùng $and)
// UserModel.find({
//     $and: [{ age: { $gte: 20 } }, { age: { $lte: 30 } }]
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 3: Chèn thêm 1 document mới
// UserModel.insertMany({
//     username: "Truong",
//     age: "21"
// })

// 4: Hiển thị toàn bộ document
// UserModel.find()
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 5: Tìm những người có address ở HP
// UserModel.find({
//     address: "HP"
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 6: Tìm tất cả bản ghi có tên là ta hoặc tuổi nhỏ hơn 30 ($or và $lt)
// UserModel.find({
//     $or: [{ username: "ta" }, { age: { $lt: 30 } }]
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 7: Sắp xếp các document theo tuổi và theo tứ tự tăng dần (hàm sort())
// UserModel.find().sort({
//     age: 1
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 8: Tìm tất cả bản ghi có tuổi lớn 20 và sắp xếp các document đó theo thứ tự giảm dần ($gt và hàm sort())
// UserModel.find({
//     age: { $gt: 20 }
// }).sort({
//     age: -1
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 9: In ra 5 phần tử đầu của document
// UserModel.find().limit(5)
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 10: In ra 3 document bắt đầu từ document thứ 5 (skip() và limit())
// UserModel.find().limit(3).skip(4)
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 11: In ra các document có tên là thanh hoặc có tuổi nhỏ hơn 30 ($or và $lt)
// UserModel.find({
//     $or: [{ username: "thanh" }, { age: { $lt: 30 } }]
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })

// 12: Tìm người có _id:”5e54dfe448afde5434ca75b9” và cập nhật người đó thành username là “Thai Ha”( tự tìm hiểu findbyIdAndUpdate)
// UserModel.findByIdAndUpdate("5e54dfe448afde5434ca75b9", {
//     $set: { username: "Thai Ha" }
// })
//     .then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     })
// 13: Tìm người có _id:”5e54dfd1ae8eac34d01da3bf” và cập nhật người đó thành username là “Bac Ho”( updateOne)
// UserModel.updateOne({
//     // điều kiện bản ghi
//     _id: "5e54dfd1ae8eac34d01da3bf"
// }, {
//     // giá trị đc cập nhật
//     username: "Bac Ho"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
// })

// 14: Xóa người có _id:”5e54e012d276b72fd4246734” 
// UserModel.deleteOne({
//     _id: "5e54e012d276b72fd4246734"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// 15: Tìm những người có cùng quê HP và cập nhật password của họ thành 1234
// UserModel.updateMany({
//     address: "HP"
// }, {
//     password: "1234"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// 16: Tìm những người có cùng quê HP và cập nhật tuổi của 1 người đầu tiên thành 1000
// UserModel.findOneAndUpdate({
//     address: "HP"
// },{
//     age: "1000"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })

// 17: Tìm người đầu tiên có mật khẩu là 1234
// UserModel.findOne({
//     password: "1234"
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// })
