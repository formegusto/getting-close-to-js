/*
 첫 줄에 자연수 N이 주어진다.
 두 번째 줄부터 N개의 문자열이 주어진다.
*/
function answer(count, ...str) {
  const max = Math.max(...str.map((s) => s.length));

  return str.filter((s) => s.length === max)[0];
}

console.log(answer(5, "teacher", "time", "student", "beautiful", "good"));
