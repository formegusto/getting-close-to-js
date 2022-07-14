// 대문자로 이루어진 영단어 입력 시, 포함된 'A'를 모두 '#'으로 변환
function answer(param) {
  return param.replace(/A/g, "#");
}

console.log(answer("BANANA"));
