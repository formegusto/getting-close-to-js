# Prototype

Prototype Pattern은 예제 객체를 둔 상태에서 복사한 값을 새 객체를 초기화하여 반환한다.

## Overview

Prototype Pattern의 예로는 Database에서 Default 값을 지정해줌에 있다. Prototype객체는 새로 만들어질 Business Object로 복사되는 Default 값을 보유한다. 그리고 Javascript가 Prototype 기반의 언어라는 점! 이 패턴을 사용한다.

## Process

- Client : Prototype 객체를 생성하고, Prototype을 활용한 객체 생성을 요청하는 주체
- Prototype : 복제 코드가 작성되는 곳 Prototype Interface
- Clones : 복제된 객체

## Example

해당 예제는 Prototype Pattern의 고전적인 방식이다. 실제 Javascript에 내장되어 있는 Prototype은 많은 기능 제공해준다.

- **Interface Definition**

```jsx
function Customer(...args) {
  this.first = args[0];
  this.last = args[1];
  this.status = args[2];

  this.say = () => {
    console.log(
      "name: " + this.first + " " + this.last + ", status: " + this.status
    );
  };
}
```

- **Prototype Interface Definition**

```jsx
function CustomerPrototype(proto) {
  this.proto = proto;

  this.clone = () => {
    var { first, last, status } = this.proto;
    var customer = new Customer(first, last, status);

    return customer;
  };
}
```

- **Clones**

```jsx
function run() {
  var proto = new Customer("n/a", "n/a", "pending");
  var prototype = new CustomerPrototype(proto);

  var customer = prototype.clone();
  customer.say();
}
```
