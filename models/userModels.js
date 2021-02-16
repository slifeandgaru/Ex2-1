const { Mongoose } = require("../config/dbConnect");

var mongoose = require("../config/dbConnect")
let Schema = mongoose.Schema;
// dinh nghia cac cot
let userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    age: Number
})

let UserModel = mongoose.model("user", userSchema);
module.exports = UserModel
// UserModel.create({
//     username: "Name",
//     password: "thing"
// }).then(function(data){
//     console.log(data);
// }).catch(function(err) {
//     console.log(err);
// })