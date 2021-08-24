module.exports = (sequelize, DataTypes) => {
  return sequelize.define("tbl_bbs", {
    b_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    b_date: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    b_time: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    b_writer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b_subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    b_text: { type: DataTypes.BLOB },
    b_count: { type: DataTypes.INTEGER },
  });
};
