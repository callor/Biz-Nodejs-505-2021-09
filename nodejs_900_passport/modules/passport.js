import passport from "passport";
import passportLocal from "passport-local";
const LocalStrategy = passportLocal.Strategy;

import { member_read } from "./member.js";
const members = member_read();

/**
 *
 * 실행순서를 정리하면 다음과 같다.
 * login 을 담당하는 라우터의 콜백함수에 의해
 * passport.authenticate() 함수가 실행된다.
 * authenticate 함수에서 LocalStrategy 생성자에 전달된 callback 함수가 실행되고,
 * 그 후에 passport.serializeUser() 가 실행된다.
 *
 * serializeUser 실행시 session 객체 내부passport 프로퍼티에 cookie 와 식별자를 매칭시켜 보관하고,
 * 추후 매 요청시 마다 passport.deserializeUser() 가 실행되어
 * session 객체에 저장된 식별자를 통해 user에 대한 데이터를 찾아 req.user에 넣어준다.
 *
 */

export default () => {
    console.log("Passport Config");
    passport.serializeUser((user, done) => {
        /**
         * login Strategy 성공 시 호출됨
         * 매개변수 user는 serializeUser의 done의 인자 user를 받은 것
         * passport에 의해 user 객체가 session에 담기게 되고
         * router에서 req.user값으로 추출할 수 있다.
         */
        console.log("Strategy Serialize 성공");
        done(null, user); // 여기의 user가 deserializeUser의 첫 번째 매개변수로 주입
    });

    passport.deserializeUser((user, done) => {
        console.log("deserializeUser", user);
        /**
         * 서버에 POST 요청이 오면 호출되는 함수
         * req.user 정보를 유지한다.
         */

        done(null, user);
    });

    const strategyPolicy = {
        // local 전략을 세움
        usernameField: "username",
        passwordField: "password",
        session: true, // 세션에 저장 여부
        passReqToCallback: false,
    };
    const strategyCallback = (id, password, done) => {
        console.log("members", members);
        const login_user = members.filter((member, index) => {
            console.log(index, member);

            // 일치하는 사용자가 있으면 true, 없으면 false
            return member.userid === id && member.password === password;
        });
        if (login_user) {
            console.log("사용자 일치 : ", login_user);
            // filter 를 통해 도출된 사용자 이므로 주의
            return done(null, login_user[0]);
        } else {
            // console.log("Map 이 끝나고 호출!!");
            return done(null, false, { message: "login fail" });
        }
    };
    passport.use(new LocalStrategy(strategyPolicy, strategyCallback));
};
