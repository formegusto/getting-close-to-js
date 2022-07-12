// Q. 100이하의 자연수 A,B,C 입력받아 세 수 중 가장 작은 값 출력 (정렬 사용 X)
function answer(...args) {
  if (args.length > 3) throw new Error("Many Parameter");
  return Math.min(...args);
}

const readline = require("readline");
const _ = require("lodash");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", function (line) {
  const numbers = _.map(line.split(" "), (l) => parseInt(l));

  min = answer(...numbers);
  console.log("min value is", min);

  process.exit();
});
