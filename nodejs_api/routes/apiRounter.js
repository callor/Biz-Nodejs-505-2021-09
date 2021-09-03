const express = require("express");
const router = express.Router();

// localhost:3000/api/ 로 요청을 하면 응답
router.get("/", (req, res) => {
  res.send("OK");
});

router.get("/text", (req, res) => {
  res.send("대한민국");
});

// router 함수 밖에 선언된 객체
// 어떤 router 요청에서든 공통으로 사용할 수 있는
// module public 객체가 된다
const mJSON = {
  j_name: "홍길동",
  j_addr: "서울시",
  j_tel: "010-111-111",
};
router.get("/json", (req, res) => {
  // 이미 선언된 mJSON 객체에 j_age 라는 속성을 추가하고
  // 값을 저장
  // 현재 mJSON 객체는 const로 선언되어 있다
  // 하지만 객체에 요소를 추가하는 것은 허용된다
  // 단 객체 자체를 변형하거나, 다른 것으로 재 선언할수 없다
  // mJSON = {name:'성춘향'} 과 같이 객체 자체를 변형할수 없다
  // 요소를 추가하거나, 요소의 값을 바꾸는 것은 가능
  mJSON.j_age = 33;
  mJSON.j_name = "이몽룡";
  console.log(mJSON);
  res.json(mJSON);
});

module.exports = router;
