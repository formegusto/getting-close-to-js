# Command

Command Pattern은 Action을 객체로 캡슐화한다. 이는 요청을 처리하는 객체에서 요청을 발행하는 객체를 분리하여 결합도를 낮추는데에 목적을 둔다. 여기서 분리된 요청 객체를 Event 라고 하고, 요청을 처리하는 객체를 Event Handler 라고 한다.

## Overview

Clipboard의 잘라내기, 복사 및 붙여넣기 작업을 예로 들 수 있다. 이러한 작업들은 메뉴 시스템, 컨텍스트 메뉴 혹은 키보드 단축키와 같이 앱 전체에서 Event에 의해 Trigger하게 동작한다. Command Object를 사용하면 이러한 작업의 처리를 중앙 집중화할 수 있다. 사용자에게 보여지는 Request View는 여러개가 존재할 수 있지만, Command 객체가 중앙에서 하나의 명령만을 사용하도록 허용한다.

## Process

- Client : Receiver 객체를 참조하는 주체
- Receiver : Command 객체에서 실행하는 명령을 수행하는 방법을 알고 있다. 추가적으로 실행된 명령의 기록을 유지한다.
- Command : 취해야 할 명령에 대한 정보를 유지한다.
- Invoker : 명령하는 주체

## Example

- **Function Definition**

```jsx
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
```

- **Command Definition**

```jsx
const Command = function (execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};
```

- **Inject in Command**

```jsx
const AddCommand = (value) => new Command(add, sub, value);
const SubCommand = (value) => new Command(sub, add, value);
const MulCommand = (value) => new Command(mul, div, value);
const DivCommand = (value) => new Command(div, mul, value);
```

Command 객체는 실행되어야 할 명령어, 사용자가 취소할 경우에 수행할 명령어를 가진다. 더하기 (add) 기능과 같은 경우에는 취소해야 할 경우에는 빼기 (sub) 작업이 수행되어야 할 것 이다. 기능을 명령에 주입하는 것은 이와 같은 이론에서 만들어진다.

- **Receiver Definition**

```jsx
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
      console.log(action(command) + ": " + command.value);
    },
    undo: function () {
      const command = commands.pop();
      cur = command.undo(cur, command.value);
      console.log("Undo " + action(command) + ": " + command.value);
    },
    getCurrentValue: () => cur,
  };
};
```

action 함수는 단순히 현재 실행된 명령어의 정보를 출력하기 위함이기 때문에 신경안써도 된다. function(length:8) 띄어쓰기(length:1) 그리고 3개의 문자열 길이로 Generalization 되어 있는 함수명을 파싱하기 위함이다. 이 때 기능에 화살표함수를 사용하지 않은 이유이다. 화살표함수는 함수 이름을 파싱할 수 없다.

주목해야 할 것은 execute와 undo 이다. execute method는 사용자의 명령어를 수행하고, commands 배열에 수행된 명령을 저장한다. undo method는 commands의 배열에 마지막에 위치한, 마지막에 수행된 명령을 pop 한다. stack, LIFO 하게 동작하는 Command Pattern의 특징을 살펴볼 수 있다. 그리고 명령어의 취소 작업을 수행한다.

- **Usage**

```jsx
const calculator = new Calculator();

calculator.execute(AddCommand(100)); // 100
calculator.execute(SubCommand(24)); // 76
calculator.execute(MulCommand(6)); // 456
calculator.execute(DivCommand(2)); // 228

calculator.undo(); // 456
calculator.undo(); // 76

console.log("\nValue: " + calculator.getCurrentValue()); // 76
```
