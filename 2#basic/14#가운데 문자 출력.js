/*
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램 작성
단 단어의 길이가 짝수일 경우 가운데 2개의 문자 출력
*/
function answer(str) {
  return str.substr(
    str.length / 2 - (1 - (str.length % 2)),
    2 - (str.length % 2)
  );
}

console.log(answer("study"));
console.log(answer("good"));
