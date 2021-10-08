import passport from "passport";
import express from "express";
const router = express.Router();
import User from "../models/User.js";

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

// http://localhost/users 응답
router.post("/", (req, res) => {
  // 로그인이 수행되어서 session 유효한 경우에는
  // req.user 속성이 존재한다
  // 로그인이 안되거나 session이 유효하지 않으면
  // req.user 가 없다
  // session 정보가 존재를 하면 현재 res.user 정보를
  //		클라언트에서 전송하고
  // 없으면 빈 배열 [] 을 전송하여  session이 없음을 통보한다
  if (req.user) {
    console.log("session OK", req.user);
    res.json(req.user);
  } else {
    res.json([]);
  }
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

/**
 * 클라이언트에서 서버로 데이터를 전송하는 방법
 * queryString : 주소창에 ?변수1=값&변수2=값 과 같은 형식으로 전송
 * 		http://localhost:8080/user?id=root&password=1234
 * => 서버에서 받을때는 req.query.변수
 * PathVarriable : 주소창에 보내는데 URL과 섞어서 보내는
 * 		http://localhost:8080/user/callor/1234
 * => router.get("/user/:id/:password")
 * => 서버에서 받을때 req.params.변수
 *
 * POST 로 전송된 데이터는 전송되는 순간 노출을 최소화할수 있다
 * https 를 사용하면 데이터가 암호화 되어 전송된다
 * => 서버에서 받은때는 req.body.변수
 *
 */
router.post("/join", (req, res) => {
  console.log(req.body);
  const { userid, password, email } = req.body;
  console.log("userid", userid);
  console.log("password", password);
  console.log("email", email);

  const userVO = new User(req.body);

  userVO.save((err, data) => {
    res.json(data);
  });

  // res.json("잘 받았다");
});

/**
 * passport로 로그인된 경우 req.logout() 함수가 생성되며
 * 해당 함수를 호출하면 passport logout 수행된다
 */
router.post("/logout", async (req, res) => {
  await req.logout();
  // 저장된 session을 삭제해 준다
  await req.session.destroy();
  res.send({ message: "logout Ok!!" });
});

export default router;
