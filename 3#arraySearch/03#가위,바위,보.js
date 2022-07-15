/*
1-가위, 2-바위, 3-보
참여자 : A, B
A가 이기면 A를 B가 이기면 B를 비기면 D를 출력
*/
function answer(count, A, B) {
  const ans = [];
  for (let i = 0; i < count; i++) {
    if (A[i] === B[i]) ans.push("D");
    else if (A[i] === 3 && B[i] === 1) ans.push("B");
    else if (B[i] === 3 && A[i] === 1) ans.push("A");
    else ans.push(A[i] > B[i] ? "A" : "B");
  }

  return ans;
}

console.log(answer(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
