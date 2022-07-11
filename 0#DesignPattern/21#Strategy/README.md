# Strategy

Strategy Pattern은 특정 작업에 대한 Algorithm 혹은 Strategy를 캡슐화한다. 그리고 이는 Client가 알게 모르게 교체될 수 있도록 한다. 기본적으로 Strategy는 교환 가능한 Algorithm 그룹을 이야기 한다.

## Overview

많은 Sorting Algorithm의 성능을 Number Array에 한정하여 테스트하고 싶다면, Strategy Pattern을 이용할 수 있다. Strategy는 Algorithm의 교체를 단순히 진행할 수 있도록 한다. Strategy가 잘 동작하려면 모든 메서드의 Signature가 동일해야 Client가 모르는 사이에 달라지게 할 수 있다.

Javascript에서 Strategy Pattern은 확장 가능한 Framework를 구축할 때, 플러그인 메커니즘으로 널리 사용된다.

## Process

- Context : 1) 현재 Strategy Object에 대한 참조를 유지한다. 2) Client가 Strategy 계산을 요청할 수 있는 인터페이스를 지원한다. 3) Client가 Strategy를 변경할 수 있다.
- Strategy : Signature가 동일한 Strategy Interface를 사용하여 알고리즘을 구현한다.

## Example

- **Context Definition**

```jsx
const Shipping = function () {
  this.company = "";
};
Shipping.prototype = {
  setStrategy: function (company) {
    this.company = company;
  },
  calculate: function (package) {
    return this.company.calculate(package);
  },
};
```

- **Strategy Definition**

```jsx
const UPS = function () {
  this.calculate = function (package) {
    return "$45.95";
  };
};
const USPS = function () {
  this.calculate = function (package) {
    return "$39.40";
  };
};
const Fedex = function () {
  this.calculate = function (package) {
    return "$43.20";
  };
};
```

- **Usage**

```jsx
const package = { from: "76712", to: "10012", weight: "1kg" };

const ups = new UPS();
const usps = new USPS();
const fedex = new Fedex();

const shipping = new Shipping();
shipping.setStrategy(ups);
console.log("UPS Strategy :", shipping.calculate(package));
shipping.setStrategy(usps);
console.log("USPS Strategy :", shipping.calculate(package));
shipping.setStrategy(fedex);
console.log("Fedex Strategry :", shipping.calculate(package));
```
