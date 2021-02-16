var UserModel = require("../models/userModels");

//thêm, sửa, xóa. tìm kiếm
// b1: xacs định số lượng giá trị cần từ ng dùng
// b2: sử dụng các hàm tương tác
function createUser(username, email, password, age){
    return UserModel.create({
        username: username,
        email: email,
        password: password,
        age: age,
    })
}

function getAllUser(){
    // sử dụng hàm find()
    return UserModel.find().then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })
}

function getUserById(id){
    return UserModel.find({
        _id: id
    })
    .then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })
}

function updatebyID(id, age){
    return UserModel.updateOne({
        _id: id
    },{
        age: age
    })
    .then(function(data){
        console.log(data);
    }).catch(function(err){
        console.log(err);
    })
}

module.exports = {
    createUser: createUser,
    getAllUser: getAllUser,
    getUserById: getUserById,
    updatebyID: updatebyID
}