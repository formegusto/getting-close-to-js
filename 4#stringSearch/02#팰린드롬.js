/*
앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다.
문자열이 입력되었을 때, 해당 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하는 프로그램 작성

회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않는다.
알파벳 이외의 문자들은 무시한다.
*/
function answer(str) {
  const parsed = str.replace(/[^a-z]/gi, "").toLowerCase();
  return parsed === parsed.split("").reverse().join("") ? "YES" : "NO";
}

console.log(answer("found7, time: study; Yduts; emit, 7Dnuof"));
