/*
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력
*/
function answer(str) {
  //   const ans = [];

  //   for (let s of str) if (!ans.includes(s)) ans.push(s);

  // return str
  //   .split("")
  //   .reduce((acc, cur) => (acc.indexOf(cur) === -1 ? acc + cur : acc), "");

  return str
    .split("")
    .filter((s, idx) => str.indexOf(s, 0) === idx)
    .join("");
}

console.log(answer("ksekkset"));
