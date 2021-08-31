const express = require("express");
const router = express.Router();

const { tbl_product } = require("../models/index");

// localhost:3000/pos/order/3 이라고 URL이 전송되어 오면
// 숫자 3이 변수 table_id에 담겨 온다
// 이 tbale_id 는 req.params.table_id 를 getter하여 값을 확인할수 있다
router.get("/order/:table_id", (req, res) => {
  const table_id = req.params.table_id;
  console.log("table id", table_id);

  // p_name 칼럼을 기준으로 오름차순정렬하여 보여라
  tbl_product.findAll({ order: ["p_name", "ASC"] }).then((result) => {
    res.render("order_view", { table_id, MENU: result.rows });
  });

  // res.render("order_view", { table_id: table_id });
  // res.render("order_view", { table_id });
});

router.get("/order/:table_id/input/:menu_id", (req, res) => {
  const table_id = req.params.table_id;
  const menu_id = req.params.menu_id;

  const menu = {
    table_id,
    menu_id,
    menu_name: "1000원김밥",
    menu_price: 1000,
  };
  res.json(menu);
});

module.exports = router;
