// JS 에서는 변수, 상수, 함수는 사용하기 전에
// 먼저 선언하라
const 함수1 = function () {
  console.log("기본 함수 선언하기");
};

// ES6+ 에서 권장하는 화살표 함수 선언하기
const 함수2 = () => {
  console.log("Arrow, 화살표 함수 선언하기");
};

// 매개변수가 있는 함수 선언하기
const 함수3 = function (num1, num2) {
  console.log(num1, num2, num1 + num2);
};

// 매개변수가 있는 함수 호출(실행)하기
함수3(100, 200);
함수3();

// 매개변수가 있는 화살표 함수 선언하기
const 함수4 = (num1, num2) => {
  console.log(num1, num2, num1 + num2);
};

// 매개변수가 1개만 있는 화살표 함수 선언하기
// pretter가 적용이 안된다면 다음과 같이 선언 할 수 있다
// 매개변수가 1개만 있으면 () 묶지 않아도 된다
// const 함수5 = num1 => {};
