# Interpreter

Interpreter Pattern은 사용자가 사용자 정의스럽게 사용할 수 있는 Script Language를 제공한다.

## Overview

몇 몇 응용프로그램들은 복잠함 때문에 고급 구성이라는 기능이 존재한다. Interpreter Pattern은 이러한 특정 복잡한 문제를 간단한 Script Language를 만들어 문제를 해결한다.

특정 유형의 문제는 언어로 특징지어지는데, 이 때의 언어란 잘 이해되고 잘 정의되어야 하는 문제 영역을 말한다. 이것을 구현하려면 언어를 문법에 매핑해야 한다. 문법은 일반적으로 여러 수준을 거쳐 터미널 노드 혹은 리터럴이라고도 하는 계층적 트리와 같은 구조를 띈다.

## Process

- Client : 문법을 나타내는 Syntax Tree를 구축 혹은 제공한다.
- Context : Interpreter에 대한 상태 정보를 포함한다.
- TerminalExpression : 문법에서 터미널 기호화 관련된 해석 작업을 구현한다.
- NonTerminalExpression : 문법에서 비단말 기호와 관련된 해석 작업을 구현한다.

## Example

다음은 로마숫자를 10진수로 변환하는 인터프리터를 구하는 예 이다. “XXXVI”와 같은 물자열에 의해서 36과 같은 정수형태의 데이터를 반환한다.

- **Context Definition**

```tsx
const Context = function (input) {
  this.input = input;
  this.output = 0;
};

Context.prototype = {
  startsWith: function (str) {
    return this.input.substr(0, str.length) === str;
  },
};
```

- **Expression Definition**

```jsx
const Expression = function (name, one, four, five, nine, multiplier) {
  this.name = name;
  this.one = one;
  this.four = four;
  this.five = five;
  this.nine = nine;
  this.multiplier = multiplier;
};

Expression.prototype = {
  interpret: function (context) {
    if (context.input.length === 0) return;
    else if (context.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substr(1);
    }
    while (context.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substr(1);
    }
  },
};
```

- **Usage**

```jsx
const roman = "MCMXXVIII";
const context = new Context(roman);
const tree = [];

tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

for (let i = 0, len = tree.length; i < len; i++) tree[i].interpret(context);
console.log(roman + " = " + context.output); // MCMXXVIII 1928
```

Interpreter Pattern의 핵심은 1) Context 객체에 의해 제어되는 input value와 output value, 2) Expression 객체에 의해 정의되는 사용자 명령어 이다. Expression prototype의 interpret에 정의된 내용을 통해 명령어 tree를 구성하고, 사용자가 정의한 대로 target을 위한 명령어가 실행되는 것을 확인할 수 있다.
