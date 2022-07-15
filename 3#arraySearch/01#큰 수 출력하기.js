// N개 받고, 바로 앞 수보다 큰 수만 출력하는 프로그램 작성
function answer(arr) {
  return arr.filter((v, i) => i === 0 || v > arr[i - 1]);
}

console.log(answer([7, 3, 9, 5, 6, 12]));
