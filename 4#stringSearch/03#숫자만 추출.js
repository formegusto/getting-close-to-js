/*
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 
그 순서대로 자연수를 만든다.
*/
function answer(str) {
  let numbers = str.replace(/[^0-9]/gi, "");

  // return numbers
  //   .split("")
  //   .reverse()
  //   .reduce((acc, cur, idx) => acc + cur * 10 ** idx, 0);

  return parseInt(numbers);
}

console.log(answer("tge0a1h205er"));
console.log(answer("g0en2T0s8eSoft"));

for (let x of "g0en2T0s8eSoft") {
  console.log(x, isNaN(x));
}
