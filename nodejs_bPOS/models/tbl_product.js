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
  return product;
};
