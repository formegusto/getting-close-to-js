# Template Method

Template Method Pattern은 알고리즘에 대한 일련의 단계에 대한 개요를 제공한다. 이렇게 단계를 구현하도록 하는 패턴들은 원래의 구조를 유지시키지만, 특정 단계를 재정의하거나 조정할 수 있는 옵션이 추가되어 있다. Template Method Pattern은 Client 개발자에게 확장성을 제공하도록 설계되어 있다.

## Overview

Template Method는 다른 개발자가 사용할 범용 프레임워크나 라이브러리에서 자주 사용이 된다. Template Method를 쉽게 이해하는 방법은 구멍이 존재하는 알고리즘을 사용하는 것 이다. 개발자가 기능을 확장해나갈 수 있도록 구멍을 채우도록 유도한다.

## Process

- AbstractClass : 1) 클라이언트가 Template Method를 호출할 수 있는 인터페이스를 제공한다. 2) 알고리즘에 대한 기본 단계를 정의하는 Template Method를 구현한다. 3) Client 개발자가 메서드 재정의를 통해 단계를 구현할 수 있도록 Hook를 제공한다.
- ConcreteClass : AbstractClass에 정의된 기본 단계를 구현한다.

## Example

- **AbstractClass Definition**

```jsx
const datastore = {
  process: function () {
    this.connect();
    this.select();
    this.disconnect();

    return true;
  },
};
```

- **Create Object as AbstractClass Interface**

```jsx
function inherit(proto) {
  const F = function () {};
  F.prototype = proto;
  return new F();
}
```

- **Usage - ConcreteClass Definition**

```jsx
const mySQL = inherit(datastore);

mySQL.connect = function () {
  console.log("MySQL: connect step.");
};
mySQL.select = function () {
  console.log("MySQL: select step.");
};
mySQL.disconnect = function () {
  console.log("MySQL: disconnect step.");
};

mySQL.process();
```
