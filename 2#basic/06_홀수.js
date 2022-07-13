// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성
function answer(...args) {
  const odds = args.filter((value) => value % 2);

  return [odds.reduce((acc, cur) => acc + cur, 0), Math.min.apply(null, odds)];
}

const [sum, min] = answer(12, 77, 38, 41, 53, 92, 85);
console.log(sum);
console.log(min);
