const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");

/**
 * multer를 사용하여 fileUpload 하기
 */
// 파일의 저장소 정보를 설정하기
const saveOption = multer.diskStorage({
  // 파일이 업로드 된후 저장소 위치를 지정하기
  destination: (req, file, cb) => {
    // 현재 폴더(__dirname, routes)에서
    // cd .. 을 실행하고
    // cd public 을 실행하고
    // cd images를 실행한 곳(폴더) 를
    // 저장소로 지정하겠다
    cb(null, path.join(__dirname, "..", "public", "images"));
  },
  // 파일을 저장할때
  // 해킹에 대비하여 임의의 일련번호를
  // 파일명 앞에 붙여 새로운 이름을 생성하라
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

// ajax를 통해서 전달된 upFile에 담긴 파일정보를
// saveOption에 설정된 저장소 정보를 기준으로
// 저장을 실행할 함수 선언
const uploadFile = multer({ storage: saveOption }).single("upFile");

router.post("/fileup", uploadFile, (req, res) => {
  // router.post() 가 실행되는 과정에서
  // uploadFile middleware가 중간에 실행되면
  // diskStrorage에 설정된 정보에 따라
  // 코드가 실행되면서
  // 여기에서 새로 생성된 파일 이름을
  // req.file.filename 에 추가 해 준다
  res.json({ fileName: req.file.filename });
});

module.exports = router;
