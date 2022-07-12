// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램 작성
function answer1(N) {
  let sum = 0;
  for (let n = 1; n <= N; n++) sum += n;
  return sum;
}

function answer2(N) {
  return Array.from(
    {
      length: N,
    },
    () => 0
  ).reduce((acc, cur, idx) => acc + (idx + 1), 0);
}

console.time("answer1 : for operation");
console.log(answer1(10000));
console.timeEnd("answer1 : for operation");

console.time("answer2 : reduce operation");
console.log(answer2(10000));
console.timeEnd("answer2 : reduce operation");

console.time("answer1 : for operation");
console.log(answer1(1000000));
console.timeEnd("answer1 : for operation");

console.time("answer2 : reduce operation");
console.log(answer2(1000000));
console.timeEnd("answer2 : reduce operation");
