/**
 * nodejs 프로젝트에서는 많은 외부 모듈을 import하여
 * 사용하게 된다.
 * import 된 모듈을 직접 호출하여 기능을 구현하거나
 * 또는 다른 모듈과 협력하여 background에서 작동되기도 한다
 *
 * 이처럼 모율을 import 하면
 * 프로젝트에서는 이들을 middle ware가 설정(치)되었다 라고
 * 한다.
 */

var createError = require("http-errors");
// web application에서 사용자의 request URL을 처리하고
// resonse하는 역할을 수행하는
// middle ware 이며, framework 이다
var express = require("express");

// 파일의 경로, 폴더의 경로 등을 지정할때
// 문자열을 + 연산하는 대신 사용하는 용도
var path = require("path");

// req에 따라오는 queruString 등을 처리하기 위한 용도
var cookieParser = require("cookie-parser");

// log를 사용하기 위한 용도
var logger = require("morgan");

// localhost:3000/ 요청이 오면
// ./routes 폴더에 있는 index.js 파일을 실행하여
// 요청을 처리하라

// Spring에서
// 클래스에 설정된 @RequestMapping 에 해당하는 부분
var indexRouter = require("./routes/index");

// localhost:3000/users 요청이 오면
// ./routes 폴더에 있는 users.js 파일을 실행하여
// 요청을 처리하라
var usersRouter = require("./routes/users");

// routes/home.js 모듈을 사용하기 위하여 import
const homeRouter = require("./routes/home");

var app = express();

// view engine setup
// nodejs_001/views 폴더 문자열을 생성하기
// __dirname + "/views" 와 같은 문자열 연결 연산을
// 수행해야 하는데, path.join() 함수를 사용하여
// 쉽게 지정을 할수 있다.
// 지금현재는 운영체제에 무관하게 path(폴더 경로)를
// 슬래시(/)를 사용하지만
// 과거에는 윈도우에서는 역슬래시(\)를 사용하고
//    Unix(linux, mac) 등에서는 슬래시(/) 사용하여야 만
//    했던 시절이 있다
//    이때 부터 path와 같은 도구를 사용하여
//    코드가 실행되는 환경에 적합하도록 만들어서 사용했다
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/homes", homeRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
