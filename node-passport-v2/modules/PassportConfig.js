import passport from "passport";
import passportLocal from "passport-local";
import User from "../models/User.js";
import { members } from "../models/Member.js";

// local login 정책을 수행하는 모듈
const LocalStratege = passportLocal.Strategy;

const exportPassport = () => {
  // 로그인이 성공했을때 (내부에서) 호출되는 함수
  passport.serializeUser((user, done) => {
    console.log("로그인 성공");
    done(null, user);
  });

  // 로그인이 정상적으로 수행된 후 client에서 세션이 유효한지
  // 문의가 들어왔을때 실행되는 함수
  //	   deserializeUser
  passport.deserializeUser((user, done) => {
    console.log("DESC", user);
    done(null, user);
  });

  // 로그인을 실제 수행하는 함수
  passport.use(
    new LocalStratege(
      {
        // login을 수행할때 전달될 변수명 설정
        usernameField: "userid",
        passwordField: "password",
        session: true, // 세션 저장하기
      },
      (userid, password, done) => {
        // Member.js 에 선언된 사용자 리스트를 사용하여 인증하기
        // const findMember = members.filter((member) => {
        //   return member.userid === userid && member.password === password;
        // });
        // if (findMember && findMember.length > 0) {
        //   return done(null, findMember[0]);
        // } else {
        //   return done(null, false, { message: "login Fial" });
        // }
        members.map((member) => {
          if (member.userid === userid && member.password === password) {
            return done(null, member);
          }
        });
        members.forEach((member) => {
          if (member.userid === userid && member.password === passport) {
            return done(null, member);
          }
        });
        return done(null, false, { message: "login fail" });
      }
    )
  );
};

export default exportPassport;
