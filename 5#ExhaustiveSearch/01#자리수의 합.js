/*
N개의 자연수가 입력되면 각 자연수의 자릿수 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 한다.
ex ) 235와 1234가 동시에 답이 될 수 있다면, 1234를 답으로 출력해야 한다.
*/
function answer(arr) {
  arr = arr.sort((a, b) => b - a);
  // 총합
  const sums = arr.map((v) =>
    String(v)
      .split("")
      .reduce((acc, cur) => acc + parseInt(cur), 0)
  );

  return arr[sums.indexOf(Math.max(...sums))];

  //   // 찾기
  //   let idx = 0;
  //   const maxSumValue = Math.max(...sums);
  //   const maxEqualValues = [];
  //   while (true) {
  //     const max_idx = sums.indexOf(maxSumValue, idx);
  //     if (max_idx === -1) break;
  //     else {
  //       maxEqualValues.push(arr[max_idx]);
  //       idx = max_idx + 1;
  //     }
  //   }

  //   console.log(maxEqualValues);
  //   return Math.max(...maxEqualValues);
}

console.log(answer([128, 460, 603, 40, 521, 137, 123]));
