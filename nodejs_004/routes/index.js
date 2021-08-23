var express = require("express");
var router = express.Router();

const { tbl_bbs } = require("../models/index");

/* GET home page. */
router.get("/", function (req, res, next) {
  tbl_bbs.findAndCountAll().then((result) => {
    res.render("index", { BBS: result.rows });
  });
});

module.exports = router;
