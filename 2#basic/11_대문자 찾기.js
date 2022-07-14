// 한 개의 문자열 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아냄
function answer(str) {
  console.log("z".charCodeAt(0));
  return str
    .split("")
    .filter((s) => s.charCodeAt() >= 65 && s.charCodeAt() <= 90).length;
}

console.log(answer("KoreaTimeGood"));
