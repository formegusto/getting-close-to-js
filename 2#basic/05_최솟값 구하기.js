// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램

function answer(...args) {
  console.log(Math.min.apply(null, args));
  return Math.min(...args);
}

console.log(answer(5, 3, 7, 11, 2, 15, 17));
