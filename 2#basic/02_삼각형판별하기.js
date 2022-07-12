// Q. 길이가  서로 다른 A,B,C 3길이가 주어졌을 때, 이 세 막대로 삼각형을 만들 수 있는가에 대한 예제
function answer(A, B, C) {
  const max = Math.max(A, B, C);
  const sum = A + B + C;

  return sum - max > max ? "YES" : "NO";
}

console.log(answer(6, 7, 11));
console.log(answer(13, 33, 17));
