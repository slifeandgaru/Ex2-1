var router1 = require('express').Router();


router1.get("/javascript/bai1",(req,res) => {
    res.json("Welcome bạn đến javascript bài 1")
})
router1.get("/javascript/bai2",(req,res) => {
    res.json("Welcome bạn đến javascript bài 2")
})
module.exports = router1