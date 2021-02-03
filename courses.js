var router = require('express').Router();


router.get("/:tenCourse/:tenbai", function(req, res) {
    res.json(req.params.tenCourse + " " + req.params.tenbai)
})
module.exports = router