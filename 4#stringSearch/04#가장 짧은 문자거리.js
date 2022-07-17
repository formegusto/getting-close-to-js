/*
한 개의 문자열 s와 문자 t가 주어지면,
문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력한다.
*/

// function answer(str, target) {
//   // e들과의 거리
//   const targetIndexes = [];
//   let targetCount = 1;
//   while (true) {
//     const parsed = str.indexOf("e", targetCount);

//     if (parsed === -1) break;
//     else targetIndexes.push(parsed);

//     targetCount = parsed + 1;
//   }

//   return str
//     .split("")
//     .map((v, idx) =>
//       Math.min.apply(
//         this,
//         targetIndexes.map((i) => Math.abs(i - idx))
//       )
//     )
//     .join(" ");
// }

function answer(str, target) {
  let p = 1000;
  const leftRight = str.split("").map((v, idx) => {
    if (v === target) return (p = 0);
    else return ++p;
  });

  p = 1000;
  const rightLeft = str
    .split("")
    .reverse()
    .map((v, idx) => {
      if (v === target) return (p = 0);
      else return ++p;
    })
    .reverse();

  return leftRight.map((lr, idx) => Math.min(lr, rightLeft[idx])).join(" ");
}

console.log(answer("teachermode", "e"));

console.log("teachermode".indexOf("e", 6));
