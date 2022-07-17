/*
알파벳 대문자로 이루어진 문자열을 입력받아 문자가 연속으로 반복되는 경우,
반복되는 문자 바로 오른족에 반복횟수를 표기하는 방법으로 문자열을 압축하는 프로그램 작성
*/
function answer(str) {
  let ans = "";
  for (let i = 0; i < str.length; ) {
    ans += str[i];

    let count = 1;
    while (true) {
      if (str[i] === str[i + count]) count++;
      else break;
    }

    if (count !== 1) ans += count;
    i += count;
  }

  return ans;
}

function answer(str) {
  let ans = "";
  let cnt = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      ans += str[i];
      if (cnt !== 1) ans += cnt;
      cnt = 1;
    }
  }

  return ans;
}

console.log(answer("KKHSSSSSSSE"));
