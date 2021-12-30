/**
 * http://usejsdoc.org/
 * 사용자의 로그인 정보
 * level 값에 따라 보여지는 폴더 제한
 */

const admin = {
    userid: "callor",
    password: "12345",
    level: 0,
};

const user = {
    userid: "callor@daum.net",
    password: "",
    level: 3,
};

const guest = {
    userid: "callor88@naver.com",
    password: "",
    level: 5,
};

export const members = [admin, user, guest];
