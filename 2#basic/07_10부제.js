/*
자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 해당 자동차의 운행을 금지하는 것
첫 줄에는 날짜의 일의 자리 숫자가 주어지고,
두 번째 줄에는 7대의 자동차 번호의 끝 두자리 숫자가 주어진다.
출력은 10부제를 위반 중인 차량의 대수
*/
function answer(arg) {
  const split = arg.split("\n");
  const day = parseInt(split[0]);
  const cars = split[1].split(" ").map((v) => parseInt(v));

  return cars.filter((v) => v % 10 === day).length;
}

console.log(
  answer(`3
25 23 11 47 53 17 33`)
);

console.log(
  answer(`0
12 20 54 30 87 91 30`)
);
