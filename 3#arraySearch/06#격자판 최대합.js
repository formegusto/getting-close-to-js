/* 
N * N 의 격자판이 주어지면 각 행의 합, 각 열의 합, 
두 대각선의 합 중 가장 큰 합을 출력한다.
대각 방향
*/
function answer(arr) {
  const sums = [];

  sums.push(arr.reduce((acc, cur, idx) => acc + cur[idx], 0));
  // 왼쪽 대각 방향
  sums.push(arr.reduce((acc, cur, idx) => acc + cur[arr.length - 1 - idx], 0));
  // 오른쪽 대각 방향

  for (let i = 0; i < arr.length; i++) {
    sums.push(
      arr[i].reduce((acc, cur) => acc + cur, 0), // 열 방향
      arr.reduce((acc, cur) => acc + cur[i], 0) // 행 방향
    );
  }

  return Math.max.apply(null, sums);
}

console.log(
  answer([
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
