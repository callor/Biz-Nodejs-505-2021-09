for (let i = 0; i < 100; i++) {
  console.log(i);
}

let 합계 = 0;
for (let i = 0; i < 100; i++) {
  합계 += i + 1;
}
console.log("합게", 합계);

합계 = 0;
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    합계 += i;
  }
}
console.log("짝수의 합", 합계);
