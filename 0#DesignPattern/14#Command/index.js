function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

const Command = function (execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

const AddCommand = (value) => new Command(add, sub, value);
const SubCommand = (value) => new Command(sub, add, value);
const MulCommand = (value) => new Command(mul, div, value);
const DivCommand = (value) => new Command(div, mul, value);

const Calculator = function () {
  let cur = 0;
  const commands = [];

  function action(command) {
    const name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return {
    execute: function (command) {
      cur = command.execute(cur, command.value);
      commands.push(command);
      console.log(action(command) + ": " + command.value, cur);
    },
    undo: function () {
      const command = commands.pop();
      cur = command.undo(cur, command.value);
      console.log("Undo " + action(command) + ": " + command.value, cur);
    },
    getCurrentValue: () => cur,
  };
};

function run() {
  const calculator = new Calculator();

  calculator.execute(AddCommand(100)); // 100
  calculator.execute(SubCommand(24)); // 76
  calculator.execute(MulCommand(6)); // 456
  calculator.execute(DivCommand(2)); // 228

  calculator.undo(); // 456
  calculator.undo(); // 76

  console.log("\nValue: " + calculator.getCurrentValue()); // 76
}
run();
