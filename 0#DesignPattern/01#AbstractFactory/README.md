# Abstract Factory

**Abstract Factory (eq. 추상팩토리)는 공통 테마와 관련된 객체를 생성**한다. 객체지향의 개념에서 Factory라는 말은 자신과 다른 객체를 생성하는 객체를 말한다. **Abstract Factory는 생성될 객체들이 공통적으로 가지고 있어야 할 테마를 추상화하여 정의**한다.

## Overview

Light Mode와 Dark Mode를 떠올려보자. 이럴 경우 페이지에 들어가는 버튼, 텍스트 상자, 라디오 버튼 및 목록상자들은 Mode에 따라 색이 다를 것이다. 이 때 추상팩토리 패턴을 사용한다면 **Light Factory, Dark Factory로 Mode 별 Factory를 두어 동일한 유형의 컨트롤을 생성하지만 공통 테마인 색상이 다르도록 구성**할 수 있다.

new 키워드로 자유롭게 원하는 형식의 생성자 함수를 호출하는 것 보다 **Factory에게 객체 생성의 책임을 맡기는 이유는 전체적인 생성 프로세스에 대한 제한을 두어 간결하게 정리해놓을 수 있기 때문**이다.

## Process

> **AbstractFactory, ConcreteFactory, Products, AbstractProduct**

- AbstractFactory : Product 생성을 위한 인터페이스
- ConcreteFactory : 새로운 Product을 ‘제조'하는 Factory Object
- Products : Factory에서 생성하는 Instances
- AbstractProduct : 생성 중인 Products에 대한 인터페이스를 선언

## Javascript Example

Javascript에서는 클래스 기반 상속을 지원하지 않으므로 AbstractFactory, AbstractProduct는 Javascript 예제에서는 이용되지 않는다. AbstractFactory, AbstractProduct는 파생클래스에서 일관된 인터페이스를 제공하도록 하는 역할을 가지고 있는데, Javascript에서는 각 객체가 다른 객체와 동일한 인터페이스 정의 (eq, attributes, method)를 갖도록 하여 일관성을 스스로 보장해야 한다.

- **Interface Definition**

```jsx
function Employee(name) {
  this.name = name;

  this.say = function () {
    console.log("I am employee", name);
  };
}
function Vendor(name) {
  this.name = name;

  this.say = function () {
    console.log("I am vender", name);
  };
}
```

- **ConcreteFactory**

```jsx
function EmployeeFactory() {
  this.create = function (name) {
    return new Employee(name);
  };
}
function VendorFactory() {
  this.create = function (name) {
    return new Vendor(name);
  };
}
```

- **Products**

```jsx
var persons = [];
var employeeFactory = new EmployeeFactory();
var vendorFactory = new VendorFactory();

persons.push(employeeFactory.create("forme"));
persons.push(vendorFactory.create("gusto"));
```
