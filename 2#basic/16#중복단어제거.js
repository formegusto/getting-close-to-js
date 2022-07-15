/*
첫 줄 자연수 N,
두 번째 줄 N개의 문자열

중복 제거 후 차례대로 출력
*/
function answer(count, ...str) {
  //   return str.reduce(
  //     (acc, cur) => (acc.includes(cur) ? acc : acc.concat(cur)),
  //     []
  //   );
  return str.filter((s, idx) => str.indexOf(s) === idx);
}

const ans = answer(5, "good", "time", "good", "time", "student");
ans.forEach((a) => console.log(a));
