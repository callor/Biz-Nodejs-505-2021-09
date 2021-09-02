const express = require("express");
const router = express.Router();

const moment = require("moment");
const { tbl_product, tbl_table_orders } = require("../models/index");

// localhost:3000/pos/order/3 이라고 URL이 전송되어 오면
// 숫자 3이 변수 table_id에 담겨 온다
// 이 tbale_id 는 req.params.table_id 를 getter하여 값을 확인할수 있다
router.get("/order/:table_id", async (req, res) => {
  const table_id = req.params.table_id;
  // p_name 칼럼을 기준으로 오름차순정렬하여 보여라
  const MENU = await tbl_product.findAll().then({ order: ["p_name", "ASC"] });
  res.render("order_view", { table_id, MENU });
});

// table id와 menu id가 Web으로부터 전달되어 왔다
// 현재 table에 손님이 있고 메뉴를 주문하기 시작했다.
// let menu_list = [];
/**
 *
 * promise
 * 	지금까지 사용된 JS 코드는 대부분이 비동기방식이고
 *  코드(함수)들의 순서가 보장되지 않았다
 *  순서대로 작성된 코드가 지 맘대로 실행되기 때문에
 *  그 부분을 해결하기 위해서 call back 이라는 개념으로 코딩을 했다
 *
 *  call back 이 계속 겹치는 상황이 발생할 수 있고
 *  그러다 보면 가독성이 매우 떨어지는 코드가 된다
 *  a(call()=>{
 * 		b(call()->{
 * 		}}
 *  })
 * JS에서 이러한 상황을 Callbal Hell
 *
 * async await
 *
 *  */
router.get("/order/:table_id/input/:menu_id", async (req, res) => {
  const table_id = req.params.table_id;
  const menu_id = req.params.menu_id;

  // 선택된 메뉴를 menu_list에 추가
  // await 가 부착된 함수는
  // 함수의 실행이 완료되고 menu 변수에 결과값이 담기기 전에는
  // 다음 코드로 진행이 안된다.
  const menu = await tbl_product.findByPk(menu_id);

  // 선택된 상품이 order list에 있는지를 검사하기 위해서
  // table_orders 에서 데이터 select 하기
  const table_order = await tbl_table_orders.findOne({
    where: { to_table_id: table_id, to_pcode: menu_id, to_pay: null },
  });

  // findOne() 한 결과가 있으면( not null 이면)
  // 수량만 ++ 하여 Update를 수행하자
  if (table_order) {
    const order_qty = table_order.dataValues.to_qty;
    const order_seq = table_order.dataValues.to_seq;

    // select 한 결과에 Update 수행
    const result = await table_order.update(
      { to_qty: order_qty + 1 },
      { where: { to_seq: order_seq } }
    );
    res.json(result);
  } else {
    const table_order_menu = {
      to_table_id: table_id,
      to_pcode: menu_id,
      to_qty: 1,
      to_price: menu.p_price,
      to_date: moment().format("YYYY[-]MM[-]DD"),
      to_time: moment().format("HH:mm:ss"),
    };
    const result = tbl_table_orders.create(table_order_menu);
    res.json(result);
  }
});

// table Layout에서 주문서화면으로 진입할때
// 현재 table에 주문리스트가 있으면 화면에 출력하기 위한
// Request 처리
router.get("/order/:table_id/getlist", (req, res) => {
  const table_id = req.params.table_id;

  /**
   * 주문이 진행중인 상태에서는 orders 들의
   * to_pay 칼럼이 null 이고
   * 결제가 완료된 상태는 to_pay에 문자열 P가 담기게 되므로
   * table layout에셔 table을 선택하고 주문으로 들어오면
   * 해당 table id의 데이터들 중에서 to_pay가 null 값만
   * select하여 보여주기
   */

  tbl_table_orders
    .findAll({
      where: { to_table_id: table_id, to_pay: null },
      include: [{ model: tbl_product, require: false }],
    })
    .then((result) => res.json(result));
});

router.get("/order/:order_seq/delete", (req, res) => {
  const order_seq = req.params.order_seq;
  tbl_table_orders
    .destroy({
      where: { to_seq: order_seq },
    })
    .then(() => {
      res.send("OK");
    })
    .catch(() => {
      res.send("FAIL");
    });
});

router.get("/paycomplet/:table_id", (req, res) => {
  const table_id = req.params.table_id;
  // 주문서에 결제와 완료된 표식으로
  // to_pay 칼럼에 문자열 P 업데이트
  tbl_table_orders
    .update({ to_pay: "P" }, { where: { to_table_id: table_id } })
    .then((result) => {
      console.log(result);
      res.send("OK");
    })
    .catch(() => {
      res.send("FAIL");
    });
});
module.exports = router;
