const prefix = "P";
const precode = "00001";

let pcode = prefix + precode;

// prefix 제외한 나머지 자르기
let mcode = pcode.substring(1);
console.log(mcode);

// 잘라낸 나머지(숫자)를 정수로 변경 하고 + 1하고
mcode = parseInt(mcode) + 1;
console.log(mcode);

// 앞에 0을 임의 개수만큼 추가하고
mcode = "0000000" + mcode;
// 뒤에서 부터 5개를 잘라서 코드로 뽑기
mcode = mcode.substring(mcode.length - 5);
console.log(mcode);

// prefix와 함께 묶어서 새로운 코드로 생성
pcode = prefix + mcode;
console.log("생성된 상품코드 :", pcode);
