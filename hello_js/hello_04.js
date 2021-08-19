let 배열1 = new Array();
let 배열2 = [];

// 10개의 난수를 만들어
// blank 배열 배열2에 저장하고 console에 출력하기
// Math.randon() 함수
// 0 부터 1미만의 임의(난수)의 실수를 만들어 return 하는 함수
// Math.floor() 함수
// 실수의 소수점 이하를 잘라서 정수로 만드는 함수
for (let i = 0; i < 10; i++) {
  // 1 ~ 100까지 범위의 임의 난수를 생성하기
  let rnd = Math.floor(Math.random() * 100) + 1;
  배열2.push(rnd);
}
console.log(배열2);

// 배열2에 담긴 숫자 중에서 짝수만 출력하기
for (let i = 0; i < 배열2.length; i++) {
  if (배열2[i] % 2 == 0) {
    console.log(배열2[i]);
  }
}

// 배열2에 담긴 숫자 중에서 짝수만 골라서 배열3에 옮겨 담기
// 전통적인 for를 이용한 배열의 filterring
let 배열3 = [];
for (let i = 0; i < 배열2.length; i++) {
  if (배열2[i] % 2 == 0) {
    배열3.push(배열2[i]);
  }
}
console.log(배열3);

// ES6+ 에서 등장한 배열 관련 함수들 중의 한가지
// for( int 요소 : 배열) {   }

let 배열짝수 = 배열2.filter((요소) => 요소 % 2 == 0);
console.log(배열짝수);
