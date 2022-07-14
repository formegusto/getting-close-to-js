// 대문자와 소문자가 같이 존재하는 문자열 받아 대문자로 모두 통일 시키기
function answer(str) {
  return str.toUpperCase();
}

function answer2(str) {
  return str
    .split("")
    .map((s) =>
      s.charCodeAt() >= 97 && s.charCodeAt() <= 122
        ? String.fromCharCode(s.charCodeAt() - 32)
        : s
    )
    .join("");
}

console.log(answer("ItisTimeToStudy"));
console.log(answer2("ItisTimeToStudy"));
