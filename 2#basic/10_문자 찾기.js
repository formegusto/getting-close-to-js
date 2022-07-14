// 한 개의 문자열을 입력받고, 특정 문자를 찾아 몇 개 존재하는지
function answer(str, target) {
  return str.split(target).length - 1;
}

console.log(answer("COMPUTERPROGRAMMING", "R"));
