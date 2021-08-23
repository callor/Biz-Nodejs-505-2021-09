module.exports = (sequelize, DataTypes) => {
  // sequelize를 사용하여 tbl_bbs table을 생성하겠다
  const bbs = sequelize.define("tbl_bbs", {
    // b_id 칼럼을 정수형으로 선언
    b_id: {
      type: DataTypes.INTEGER,
    },
    // b_date 칼럼을 문자열형 10자리로 선언
    b_date: {
      type: DataTypes.STRING(10),
    },
    b_time: {
      type: DataTypes.STRING(10),
    },

    // b_writer 칼럼을 문자열형 기본으로 설정
    b_writer: {
      type: DataTypes.STRING,
    },
    b_subject: {
      type: DataTypes.STRING,
    },
    // BLOB : Text보다 겁나게 큰 칼럼
    b_text: {
      type: DataTypes.BLOB,
    },
    b_count: {
      type: DataTypes.INTEGER,
    },
  });

  return bbs;
};
