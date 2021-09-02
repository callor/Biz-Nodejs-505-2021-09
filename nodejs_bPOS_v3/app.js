var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// const sequelize = require("./models/index").sequelize;
// sequelize.sync();

const sequelize = require("./models/index");
sequelize.sequelize.sync().then((result) => {
  console.log("Host:", result.options.host);
  console.log("Database:", result.options.database);
  console.log("DB 연결 OK!!!");
});

var indexRouter = require("./routes/index");

// 생성한 router를 import하기
const posRouter = require("./routes/posRouter");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

// import 된 router를 RequestMapping 하기
app.use("/pos", posRouter);

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
