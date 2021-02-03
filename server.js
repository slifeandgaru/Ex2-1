var express = require('express');
var app = express();
var port = 8000;
var router = require('./courseRouter')
app.use("/nodemy",router)
app.listen(port,function(){ 
    console.log("Running.js")
})