/*
OX 문제의 형식 속에서 문제에 대한 답을 적은 배열과 답안지 배열이 주어졌을 때,
첫 번째로 문제를 맞히면 1점으로 계산한다. 이 후 계속해서 맞히면 2점 3점 올라가지만
한번 틀렸다가 다시 맞히면 다시 1점부터 계산한다. 이들의 합을 출력인데
채점에서 1이 정답을 맞힌 경우, 0인 경우에는 정답 틀린 경우이다.
*/
function answer(arr) {
  return arr
    .join("")
    .split("0")
    .reduce(
      (acc, cur) =>
        acc + cur.split("").reduce((acc, cur, idx) => acc + idx + 1, 0),
      0
    );
}

console.log(answer([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
