const express = require("express");
const router = express.Router();

const { tbl_table_orders, sequelize } = require("../models/index");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const TABLE_COUNT = 12;
  const tables_layout = [];

  // 1. table_orders에 현재 주문이 있는지 확인하기 위하여 SELECT
  /**
   * SELECT to_table_id, count(to_table_id) AS count
   * FROM tbl_table_orders
   * WHERE to_pay IS NULL
   * GROUP BY to_table_id;
   */
  const table_order_count = await tbl_table_orders.findAll({
    attributes: [
      "to_table_id",
      [sequelize.fn("count", sequelize.col("to_table_id")), "count"],
    ],
    where: { to_pay: null },
    group: "to_table_id",
  });

  for (let index = 0; index < TABLE_COUNT; index++) {
    /**
     * table 1, table 2에 주문이 있다면
     * table_order_count의 리스트 중에서 해당하는 데이터가 있을 것이다
     * 그 데이터를 찾아 달라
     */
    const result = await table_order_count.find((order) => {
      return order.dataValues.to_table_id == index + 1;
    });

    const table_data = {
      id: index + 1,
      table_name: index + 1 + "번 테이블",
    };
    // table_id가 일치하는 데이터를 찾았다
    if (result) {
      table_data.order_count = result.dataValues.count;
    } else {
      table_data.order_count = 0;
    }
    console.log(table_data);
    tables_layout.push(table_data);
  }
  res.render("index", { TABLES: tables_layout });
});

module.exports = router;
