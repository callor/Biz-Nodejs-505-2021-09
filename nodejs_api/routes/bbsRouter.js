const express = require("express");
const router = express.Router();
const BBS = require("../models/tbl_bbs");

router.get("/push", (req, res) => {
  const bbsVO = new BBS({
    b_date: "2021-09-03",
    b_time: "11:28:00",
    b_writer: "홍길동",
    b_subject: "오늘은 금요일",
    b_text: "몽고 DB에 데이터 연동하기",
  });

  bbsVO.save((err) => {
    if (err) {
      console.log(err);
    }
    res.send("OK");
  });
});

router.get("/push_find", async (req, res) => {
  const bbsVO = {
    b_date: "2021-09-03",
    b_time: "11:42:00",
    b_writer: "성춘향",
    b_subject: "내일은 주말",
    b_text: "주말은 즐겁게",
  };
  // await BBS.insertMany(bbsVO);
  await BBS.create(bbsVO);
  const result = await BBS.find({});
  await res.json(result);
});

module.exports = router;
