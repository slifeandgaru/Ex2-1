var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
var port = 8000


var router = require("./router/user")

app.use("/user", router)


app.listen(port, function(){ 
    console.log("Open serve successful : localhost: 8000")
})