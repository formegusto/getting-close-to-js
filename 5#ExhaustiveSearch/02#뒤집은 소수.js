/*
N개의 자연수가 입력되면 각 자연수를 뒤집은 후, 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램 작성
*/
function answer(arr) {
  const reversed = arr.map((v) =>
    parseInt(v.toString().split("").reverse().join(""))
  );

  return reversed.filter((v) => {
    if (v === 1) return false;
    for (let i = 2; i * i < v; i++) if (!(v % i)) return false;
    return true;
  });
}

console.log(answer([32, 55, 62, 20, 250, 370, 200, 30, 100]));
