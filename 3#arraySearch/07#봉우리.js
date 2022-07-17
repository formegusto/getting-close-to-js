/*
지도 정보가 N * N 격자판에 주어진다. 각 격자판의 숫자 중 
상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.

봉우리 지역이 몇 개 있는지 알아내는 프로그램 작성
*/
function answer(arr) {
  let count = 0;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      const parsed = dx.map((v, idx) => {
        let x = i + v;
        let y = j + dy[idx];

        try {
          let item = arr[x][y];
          if (item) return item;
          else return 0;
        } catch {
          return 0;
        }
      });
      if (Math.max.apply(null, parsed) < arr[i][j]) count++;
    }
  }

  return count;
}

console.log(
  answer([
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
