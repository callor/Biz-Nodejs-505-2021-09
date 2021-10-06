import passport from "passport";
import express from "express";
const router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

/**
 * react와 nodejs API를 연동하여 login 구현하기
 * login router는 반드시 POST 구현해야 한다.
 * oAuth2.0 passport 방식으로 login을 할때는 정책상 반드시 POST로
 * 요청을 해야한다.
 *
 * passport를 사용하여 Login을 수행할때 router의
 * path와 callback 함수사이에서 login 정책을 수행할 미들웨어
 * passport.authenticate("local")
 *
 */
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user);
  res.json({
    userid: req.user.userid,
    password: req.user.password,
  });
});

export default router;
