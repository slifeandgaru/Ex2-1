var express = require("express");
const { createUser } = require("../services/userServices");
var router = express.Router(); 
var userServices = require("../services/userServices");

router.get("/", function(req, res){
    //show all data in database
    userServices.getAllUser().then(function(data){
        res.json(data)
    }).catch(function(err){
        res.json(err)
    })
})

router.get("/:id", function(req, res){
    var id = req.params.id
    userServices.getUserById(id)
    .then(function(data){
        res.json(data)
    }).catch(function(err){
        res.json(err)
    })
})

router.put("/:id/:age", function(req, res){
    var id = req.params.id
    var age = req.params.age
    userServices.updatebyID(id, age)
    .then(function(data){
        res.json(data)
    }).catch(function(err){
        res.json(err)
    })
})

router.post("/", function(req, res){
    var username = req.body.username
    var email = req.body.email
    var password = req.body.password
    var age = req.body.age
    userServices.createUser(username, email, password, age)
    .then(function(data){
        res.json("Create user Successfull");
    }).catch(function(err){
        res.json("Create user fail");
    })
})

module.exports = router