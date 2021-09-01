module.exports = (sequelize, DataTypes) => {
  // tbl_product가 table의 이름(변수, 객체)
  // tbl_product.findAll()... 처럼 사용한다
  // tbl_products.findAll() 처럼 사용금지!!!
  const product = sequelize.define(
    "tbl_product",
    {
      p_code: {
        type: DataTypes.STRING(5),
        primaryKey: true,
      },
      p_name: {
        type: DataTypes.STRING,
        allowNull: false, // NOT NULL
      },
      p_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      p_rem: { type: DataTypes.STRING },
    },
    { timestamps: false }
  );

  // tbl_table_orders와 tbl_product 를 JOIN 할수 있도록 설정
  // 상품1 : 주문서 : N
  // tbl_table_oders의 to_pcode 칼럼과 현재 tbl_product 와
  // 연계하겠다
  // 현재 table의 PK 와 to_pcode를 연계하여 JOIN을 수행할 준비하라
  product.associate = (models) => {
    product.hasMany(models.tbl_table_orders, { foreignKey: "to_pcode" });
  };

  return product;
};
