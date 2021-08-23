var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const bbsRouter = require("./routes/bbsRouter");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

/**
 * css, js, image 등의 static 구조의 파일을
 * 저장해 두고 요청에서 제공하는 것
 * router를 직접 거치지 않고 직접 파일이 전달되는
 * 구조로 만들어 진다
 */
app.use(express.static(path.join(__dirname, "public")));

const sequelize = require("./models/index").sequelize;
sequelize.sync();

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/bbs", bbsRouter);

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
