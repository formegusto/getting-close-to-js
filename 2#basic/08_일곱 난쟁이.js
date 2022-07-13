/*
백설공주의 난쟁이는 사실 일곱이 아니고 아홉이었던 것;;
다들 자신들이 진짜 난쟁이라고 우기는 혼란 그 자체;;

일곱 난쟁이의 키 합은 100이 된다.
정답이 여러개인 경우에는 아무거나 출력
*/
function answer(...args) {
  const sum = args.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);

  for (let i = 0; i < args.length; i++) {
    for (let j = i + 1; j < args.length; j++) {
      if (sum - (args[i] + args[j]) === 100)
        return args.filter((v, idx) => !(idx === i || idx === j));
    }
  }
}

console.log(answer(20, 7, 23, 19, 10, 15, 25, 8, 13));
// 20 7 23 19 10 8 13
