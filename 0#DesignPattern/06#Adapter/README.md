# Adapter

Adapter Pattern은 하나의 Interface를 다른 Interface로 변환한다. 이러한 Adapter Pattern은 Wrapper Pattern 이라고도 한다.

## Overview

Adapter Pattern이 적용되는 시나리오는 기존 구성 요소에 새 구성요소를 통합하는 시나리오이다. 이 때, 새 구성요소들은 기존 구성 요소들과 함께 작동해야 한다. 이는 Refactoring 과정에서 사용되기도 하는데 원래 인터페이스는 유지한 채 일부 인터페이스를 다시 작성되는 시나리오이다.

## Process

- Client : Adapter를 호출하는 주체
- Adapter : Client가 알고 있는 인터페이스가 구현되어 있다.
- Adaptee : Client가 알고 있는 것과 다른 인터페이스가 구현되어 있다.

## Example

- **Old-Interface Definition**

```jsx
function Shipping() {
  this.request = function (zipStart, zipEnd, weight) {
    return "$49.75";
  };
}
```

- **New-Interface Definition**

```jsx
function AdvancedShipping() {
  this.login = function (credentials) {
    console.log("[login]", credentials);
  };
  this.setStart = function (start) {
    console.log("[set start]", start);
  };
  this.setDestination = function (destination) {
    console.log("[destination]", destination);
  };
  this.calculate = function (weight) {
    return "$39.50";
  };
}
```

- **Adapter Interface**

```jsx
function ShippingAdapter(credentials) {
  const shipping = new AdvancedShipping();

  shipping.login(credentials);

  return {
    request: function (zipStart, zipEnd, weight) {
      shipping.setStart(zipStart);
      shipping.setDestination(zipEnd);
      return shipping.calculate(weight);
    },
  };
}
```

- **Adaptee Example**

```jsx
const shipping = new Shipping();
const credentials = { token: "30a8-6ee1" };
const adapter = new ShippingAdapter(credentials);

// Old Cost
let cost = shipping.request("78701", "10010", "2 lbs");

// New Cost
cost = adapter.request("78701", "10010", "2 lbs");
```

이 때, Adapter Interface의 request code를 주목해보도록 하자. Shipping 이라는 Old Interface의 request의 기능이 legacy한 기능을 가지고 있었다고 본다면, Adapter Interface는 Shipping Interface의 request와 같은 반환형식을 가지지만 Shipping Interface와 다른 또 다른 Interface Adavanced Shipping의 기능을 수행한 결과를 반환한다.

Adapter Pattern은 이렇듯 기존의 Shipping Interface API의 변경없이 (매개변수도 똑같은) 새 API Process를 적용시킬 수 있도록 해준다.
