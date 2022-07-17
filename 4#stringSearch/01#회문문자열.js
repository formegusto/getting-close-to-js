/*
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라 한다.
입력값으로 주어지는 문자열이 회문 문자열일 경우 "YES", 아니면 "NO"를 출력하는 프로그램 작성
*/
function answer(str) {
  const scaled = str.toLowerCase();
  return scaled === scaled.split("").reverse().join("") ? "YES" : "NO";
}

console.log(answer("gooG"));
console.log(answer("goog"));
console.log(answer("good"));
