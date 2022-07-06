# Memento

Memento Pattern의 객체의 상태를 임시저장하며, 이를 통해 복원할 수 있는 기능을 제공한다.

## Overview

Database 객체의 지속과 복원을 Memento Pattern의 구현의 예로 볼 수 있다. 하지만 이 패턴을 사용하는 가장 일반적인 이유는 필요의 경우, 후속 변경을 쉽게 취소할 수 있도록 객체 상태의 Snapshot을 캡처하는 것 이다. Memento는 객체의 상태를 저장하는 작은 저장소이다. JavaScript에서 Memento는 JSON으로 객체를 직렬화 및 역직렬화하여 쉽게 구현된다.

## Process

- Originator : 객체의 역할을 한다. 이 때 자신의 상태가 변화하면 memento를 만들어 저장시킨다.
- Memento : Originator 객체의 내부상태를 JSON으로 가지고 있다.
- CareTaker : Memento 저장소의 역할을 한다.

## Example

- **Originator Definition**

```jsx
const Person = function (...args) {
  this.name = args[0];
  this.street = args[1];
  this.city = args[2];
  this.state = args[3];
};
```

- **Memento Function**

```jsx
Person.prototype = {
  hydrate: function () {
    return JSON.stringify(this);
  },
  dehydrate: function (memento) {
    const m = JSON.parse(memento);
    for (key in m) this[key] = m[key];
  },
};
```

예제에 등장하는 hydrate 메서드가 memento를 만들어내는 메서드이다. JSON으로 직렬화를 하여 반환한다. dehydrate 메서드는 memento를 다시 역질렬화하여 객체 적용시키는 메서드이다.

- **CareTaker Definition**

```jsx
const CareTaker = function () {
  this.mementos = {};
  this.add = (key, memento) => {
    this.mementos[key] = memento;
  };
  this.get = (key) => this.mementos[key];
};
```

memento 저장소의 역할을 한다. 단순히 memento를 저장하고 조회하는 역할만을 수행하며, 실질적인 memento pattern의 주요역할들은 Originator 객체의 hydrate, dehydrate 에서 수행한다.

- **Usage**

```jsx
const mike = new Person("Mike Foley", "1112 Main", "Dallas", "TX");
const john = new Person("John Wang", "48th Street", "San Jose", "CA");
const caretaker = new CareTaker();

caretaker.add(1, mike.hydrate());
caretaker.add(2, john.hydrate());

// 변경 로직
mike.name = "King Kong";
john.name = "Superman";

mike.dehydrate(caretaker.get(1));
john.dehydrate(caretaker.get(2));
```
