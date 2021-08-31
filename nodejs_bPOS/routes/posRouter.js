const express = require("express");
const router = express.Router();

// localhost:3000/pos/order/3 이라고 URL이 전송되어 오면
// 숫자 3이 변수 table_id에 담겨 온다
// 이 tbale_id 는 req.params.table_id 를 getter하여 값을 확인할수 있다
router.get("/order/:table_id", (req, res) => {
  const table_id = req.params.table_id;
  console.log("table id", table_id);

  // res.render("order_view", { table_id: table_id });
  res.render("order_view", { table_id });
});

module.exports = router;
