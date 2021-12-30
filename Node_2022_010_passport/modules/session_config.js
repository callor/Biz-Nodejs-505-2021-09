import session from "express-session";

export default (app) => {
    console.log("Session Config");
    app.use(
        session({
            key: "callor@callor.com", // 세션키
            secret: "!aa1234", // 비밀키,  쿠키를 임의로 변조하는것을 방지하기 위한 값
            resave: false, // 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값, false를 권장
            saveUninitialized: true, // 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장
            cookie: {
                secure: false,
                httpOnly: false,
                maxAge: 1000 * 60 * 60 * 120, // 120분,  쿠키 유효기간
                // expire // 쿠키 만료 시간을 표준 시간으로 설정
                // path	// 쿠기의 경로
                // domain : loaded // 쿠기의 도메인 이름
                // signed // 쿠키의 서명 여부
            },
        })
    );
};
