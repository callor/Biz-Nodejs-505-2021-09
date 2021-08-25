// 게시판의 댓글을 저장할 table
module.exports = (sequelize, DataTypes) => {
  const reply = sequelize.define("tbl_reply", {
    r_postId: { type: DataTypes.INTEGER, allowNull: false },
    r_writer: { type: DataTypes.STRING, alloNull: false },
    r_content: { type: DataTypes.TEXT, allowNull: false },
  });

  // tbl_reply와 tbl_bbs를 FK 설정을 수행하기
  reply.associate = (models) => {
    reply.belongsTo(models.tbl_bbs);
  };

  return reply;
};
