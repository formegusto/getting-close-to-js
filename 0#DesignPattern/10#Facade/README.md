# Facade

Facade Pattern은 하나 이상의 Sub System의 복잡한 기능으로부터 클라이언트를 보호하는 인터페이스를 제공한다. 다층 아키텍처를 중심으로 구축된 시스템에 주로 사용된다.

## Overview

Facade Pattern의 주 목적은 Sub System을 Client가 쉽게 사용할 수 있도록 하는 High-Level Interface를 제공하는데에 있다. 가장 흔히 볼 수 있는 예로는 Web Application에서의 Service Layer와 Presentation Layer를 말한다. Service Layer는 복잡한 로직을 수행할 수도 있지만 Presentation Layer에서는 잘 정의된 Service Layer의 API를 이용한다. API Business Logic의 복잡성을 숨기는 것 이다.

또 다르게 사용되는 예는 Refactoring 이다. 특정 모듈을 사용하는 Client가 몰라도 되는 모듈의 지저분한 레거시 개체 집합을 Facade에 숨길 수 있다. Facade는 필요한 것들만 노출하고 사용성이 높은 인터페이스를 제공한다. 종종 SingleTone과 결합하여 사용되기도 한다.

## Process

- Facade : Sub System을 알고 있는 주체이다. Client의 요청을 적절한 Sub System에게 위임한다.
- Sub System : 위임된 요청을 수행한다. Facade에 대해 알지 못한다. ( Waterfall Format )

## Example

- **Sub System Definition**

```jsx
const Bank = function () {
  this.verify = function (name, amount) {
    // complex logic ...
    return true;
  };
};
const Credit = function () {
  this.get = function (name) {
    // complex logic ...
    return true;
  };
};
const Background = function () {
  this.check = function (name) {
    // complex logic ...
    return true;
  };
};
```

- **Facade Definition**

```jsx
const Mortgage = function (name) {
  this.name = name;
};
Mortgage.prototype = {
  applyFor: function (amount) {
    let result = "approved";
    if (!new Bank().verify(this.name, amount)) result = "denied";
    else if (!new Credit().get(this.name)) result = "denied";
    else if (!new Background().check(this.name)) result = "denied";

    return this.name + " has been " + result + " for a " + amount + " mortgage";
  },
};
```

- **Usage**

```jsx
const mortgage = new Mortgage("Joan Templeton");
const result = mortgage.applyFor("$100,000");

console.log(result);
```

복잡하고 처리하는 데 시간이 걸릴 수 있는 3개의 Sub System(Bank, Credit, Background)들을 Client에게 applyFor 메서드 하나로 처리할 수 있도록 도와준다.
