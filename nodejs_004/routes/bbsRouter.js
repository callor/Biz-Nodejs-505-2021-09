const express = require("express");
const router = express.Router();

const { tbl_bbs } = require("../models/index");

router.get("/write", (req, res) => {
  res.render("write");
});

router.post("/write", (req, res) => {
  tbl_bbs.create(req.body).then((result) => {
    res.json(result);
  });
});

router.get("/update", (req, res) => {
  const b_id = req.query.b_id;
  tbl_bbs.findByPk(b_id).then((result) => {
    res.render("write", { BBS: result });
  });
});

router.post("/update", (req, res) => {
  const b_id = req.query.b_id;
  req.body.b_id = b_id;
  tbl_bbs.update(req.body, { where: { b_id: b_id } }).then((result) => {
    res.json(result);
  });
});

module.exports = router;
