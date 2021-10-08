/**
 * express generator ES6+ template
 * @edit : callor@callor.com
 * @since : 2020-12-10
 * @see : nodejs + express 프로젝트에서 ES6+ 문법을 사용하기 위한 template
 *
 * require() 방식의 코드를 import 방식으로 변경
 * require() 방식의 코드를 CommonJS 코드라고 하며
 * import 방식으로 사용하는 코드를 ES+ 모듈방식 코드라고 한다.
 */
import createError from "http-errors";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

import session from "express-session";
import passport from "passport";
import passportConfig from "./modules/PassportConfig.js";

import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import cors from "cors";
import mongoose from "mongoose";

const dbConn = mongoose.connection;
dbConn.once("open", () => {
  console.log("MongoDB OK");
});
dbConn.on("error", () => {
  console.error();
});

mongoose.connect("mongodb://localhost:27017/users");

const app = express();

const whilteURL = ["http://localhost:3000"];
const corsOption = {
  origin: (origin, callback) => {
    const isWhiteURL = whilteURL.indexOf(origin) !== -1;
    callback(null, isWhiteURL);
  },
  credentials: true,
};

app.use(cors(corsOption));

// Disable the fingerprinting of this web technology. 경고
app.disable("x-powered-by");

// view engine setup
app.set("views", path.join("./views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join("./public")));

// 하루동안 유지 밀리초 * 60초 * 60분 * 24시간
const oneDay = 1000 * 60 * 60 * 24;
// 세션활성화
app.use(
  session({
    secret: "aa1234",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: oneDay,
    },
  })
);
app.use(passport.initialize()); // passport start
app.use(passport.session());
passportConfig();

// response를 할때 session 담긴값을 클라언트로 전송하기 위한
// 옵션설정하기
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  next();
});

app.use("/", indexRouter);
app.use("/users", usersRouter);

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

export default app;
