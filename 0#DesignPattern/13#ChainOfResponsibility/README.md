# Chain of Responsibility

Chain of Responsibility Pattern은 객체간의 연결을 느슨하게 하여 요청이 이루어지도록 하는 Pattern 기법이다. 해당 패턴은 본질적으로 특정 요청을 처리할 수 있는 객체들에 대한 Linear Search 이다.

## Overview

Chain of Responsibility 예는 이벤트가 전파되는 Event Bubbling 에서 찾아볼 수 있다. 해당 패턴은 JavaScript에서 자주 사용되는 Chaining Pattern과 관련이 있다.

## Process

- Client : Handler 객체 체인에 대한 요청을 시작한다.
- Handler : 요청을 처리하기 위한 인터페이스를 정의하고, 후속 링크를 구현하는데 이 때 this를 반환하는 방식으로 구현한다. ( 그림에서 Handler는 연결되어 있는 형태로 그려져 있다. )

## Example

- **Handler Definition**

```jsx
const Request = function (amout) {
  this.amount = amout;
  console.log("Requested: $" + amout + "\n");
};
```

- **Handler Chain Modeling**

```jsx
Request.prototype = {
  get: function (bill) {
    const count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  },
};
```

- **Usage**

```jsx
const request = new Request(378);
request.get(100).get(50).get(20);
```

Chain of Responsibiility 는 Method Chaining 기법이 적용되는 Pattern인 것 같다. 나같은 경우에는 여러개의 API 요청을 시도할 때, 함수를 여러개 적는 방식을 사용하면서 이렇게 써도 되나 하면서 고민했는데 다음에 개발하는 작업은 이런식으로 해봐야겠다. 괜찮은 방법인 것 같다.
