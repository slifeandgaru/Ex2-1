var express = require("express");
var app = express();
var path = require("path");
var port = 8000

// -------Ex1--------
app.use(express.static("./public"))
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./view/home.html"))
})
app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname,"/view/login.html"))
})
app.get("/download", function(req, res){
    res.download("./public/image/amazing.jpg","amazing.jpg")
})
// Bài 2
var router = require("./courseRouter")
var router1 = require("./router/router1")
var router2 = require("./router/router2")
app.use("/nodemy", router)
app.use("/nodemy", router1)
app.use("/nodemy", router2)

app.listen(port, function(){ 
    console.log("Open serve successful : localhost: 8000")
})