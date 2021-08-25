module.exports = (sequelize, DataTypes) => {
  const bbs = sequelize.define("tbl_bbs", {
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

  // bbs(tbl_bbs table)과 tbl_replay 를 1:N 관계로 설정하기
  // 이때 tbl_bbs.b_id 칼럼과 tbl_replay.r_postId 칼럼을
  // 연관지어 FK 설정하라
  bbs.associate = (models) => {
    bbs.hasMany(models.tbl_reply, { foreignKey: "r_postId" });
  };
  return bbs;
};
