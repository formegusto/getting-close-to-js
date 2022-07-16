/* 
점수 배열이 입력되는데, 각 인덱스별 등수로 환산하여 반환 
이 때, 동일 점수가 3개 존재하고 1등이면 다음 점수는 4등
*/
function answer(arr) {
  const sortArray = [...arr].sort((a, b) => b - a);
  return arr.map((a) => sortArray.indexOf(a) + 1);
}

function answer_teacher(arr) {
  const answer = Array.from({ length: arr.length }, () => 1);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) if (arr[j] > arr[i]) answer[i]++;
  }

  return answer;
}

console.log(answer([87, 89, 92, 100, 76]));
console.log(answer([87, 89, 92, 92, 76]));

console.log(answer_teacher([87, 89, 92, 100, 76]));
