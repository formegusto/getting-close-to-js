# Factory Method

Factory Method는 Client의 지시에 따라 새로운 객체를 생성한다. 이 때, Factory Method의 큰 특징은 Client가 인스턴스화할 유형에 대한 제어를 유지하면서 객체 생성을 위임할 수 있다는 것 이다.

## Overview

Factory Method의 핵심 목표는 확장성에 있다. 다르지만 동시에 많은 property를 공유하는 객체를 관리, 유지 그리고 조작하는 어플리케이션에서 자주 사용된다.

## Process

> Creator, AbstractProduct, ConcreteProduct

- Creator : 새 Product를 생성하는 Factory Object
- AbstractProduct : Product Interface
- ConcreteProduct : Product

## Example

역시나 마찬가지로 AbstractProduct는 구현되지 않는다. Factory Method로 인해 생성되는 모든 객체들이 동일한 인터페이스를 가지도록 인터페이스를 정의해주어야 한다.

- **Interface Definition**

```tsx
var Employee = function () {
  this.say = function () {
    console.log(this.type + ": rate " + this.hourly + "/hour");
  };
};
const employee = new Employee();
var FullTime = function () {
  this.hourly = "$12";
};
var PartTime = function () {
  this.hourly = "$11";
};
var Temporary = function () {
  this.hourly = "$10";
};
var Contractor = function () {
  this.hourly = "$15";
};
```

- **Creator**

```tsx
var Factory = function () {
  this.createEmployee = function (type) {
    var _employee;

    switch (type) {
      case "fulltime":
        _employee = new FullTime();
        break;
      case "parttime":
        _employee = new PartTime();
        break;
      case "temporary":
        _employee = new Temporary();
        break;
      case "contractor":
        _employee = new Contractor();
        break;
    }
    _employee.type = type;
    Object.setPrototypeOf(_employee, employee);

    return _employee;
  };
};
```

- **Products**

```tsx
var employees = [];
var factory = new Factory();

employees.push(factory.createEmployee("fulltime"));
employees.push(factory.createEmployee("parttime"));
employees.push(factory.createEmployee("temporary"));
employees.push(factory.createEmployee("contractor"));
```
