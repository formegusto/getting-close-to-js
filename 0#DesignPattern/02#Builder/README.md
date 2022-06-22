# Builder

Builder Pattern은 **클라이언트가 유형과 내용만 지정하여 복잡한 개체를 구성하는 패턴**이다. 어떻게 객체가 만들어지는지는 사용자에게 보여지지 않는다.

## Overview

Builder Pattern을 사용하는 가장 일반적인 이유는 복잡한 객체를 생성하는 클라이언트 코드를 단순화하기 위함에 있다. 이 때의 클라이언트는 Builder Pattern으로 짜여진 코드를 사용하는 개발자를 말한다. 클라이언트는 실제 작업이 어떻게 완료되고 있는지 모른 채 Builder의 단계를 계속 이어갈 수 있다. 일반적으로 점(.) 연산자로 구분된 여러 메서드 호출이 함께 연결되는 메서닝 체이닝 후 마지막 단계에 완성된 객체를 반환하는 것이 Builder Pattern이 취하는 방법이다

## Process

> **Director, AbstractBuilder, ConcreteBuilder, Products**

- Director : Builder의 인터페이스를 사용하여 Product를 만들어 반환함
- AbstractBuilder : 복잡한 Product를 정의하기 위해 여러 단계의 인터페이스를 선언한다.
- ConcreteBuilder : 여러 단계의 Builder Interface를 구현하고 조립으로 생성된 제품을 반환함
- Product : 조립된 객체

## Javascript Example

이전 추상 팩토리와 마찬가지로 Javascript는 추상 클래스를 지원하지 않기 때문에 AbstractBuilder는 사용되지 않는다. 하지만 Director가 프로세스를 단계별로 수행할 수 있으려면 **서로 다른 Builder가 여러 단계의 인터페이스가 구현되어 있어야 한다.**

- **Interface Definition**

```jsx
function Car() {
  this.doors = 0;

  this.addParts = function () {
    this.doors = 4;
  };

  this.say = function () {
    console.log("I am a", this.doors, "-door car");
  };
}
```

- **ConcreteBuilder**

```jsx
function CarBuilder() {
  this.car = null;

  this.step1 = function () {
    this.car = new Car();
  };
  this.step2 = function () {
    this.car.addParts;
  };
  this.get = function () {
    return this.car;
  };
}
```

- **Director**

```jsx
function Shop() {
  this.construct = function (builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  };
}
```

- **Products**

```jsx
var shop = new Shop();
var carBuilder = new CarBuilder();
var truckBuilder = new TruckBuilder();
var car = shop.construct(carBuilder);
var truck = shop.construct(truckBuilder);
```
