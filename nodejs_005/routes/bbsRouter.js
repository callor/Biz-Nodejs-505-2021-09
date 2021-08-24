const express = require("express");
const router = express.Router();
// JS, nodejs 에서 날짜 시간을 취급하는
// 가장 많이 사용되는 middleware
const moment = require("moment");

const { tbl_bbs } = require("../models/index");

// 설정된 /write get는
// URL에서 localhost:3000/bbs/write 요청할때
// 응답할 함수
router.get("/write", (req, res) => {
  const BBS = {
    b_date: moment().format("YYYY[-]MM[-]DD"),
    b_time: moment().format("HH:mm:ss"),
  };
  res.render("write", { BBS });
});

router.post("/write", (req, res) => {
  // form 을 통해서 POST로 전송 되어온 데이터는
  // req.body에 담겨서 온다
  tbl_bbs.create(req.body).then((result) => res.redirect("/"));
});

module.exports = router;
