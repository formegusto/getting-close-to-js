// 연필 1 다스는 12자루이다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때, N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산
function answer(student) {
  return Math.ceil(student / 12);
}

console.log(answer(178));
