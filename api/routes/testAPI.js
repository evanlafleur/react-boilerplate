var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("API/Backend is now functioning properly!")
});

module.exports = router;