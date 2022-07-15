/*
제목 - 보이는 학생, Boy is Student
학생을 일렬로 세웠을 때, 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수
(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않음)
*/
function answer(count, ...args) {
  let max = 0;
  let cnt = 0;

  for (let a of args) {
    if (a > max) {
      max = a;
      cnt++;
    }
  }

  return cnt;
}

console.log(answer(8, 130, 135, 148, 140, 145, 150, 150, 153));
