# Visitor

Visitor Pattern은 객체 자체를 변경시키지 않고, 객체 Collection에 대한 새 작업을 정의한다.

## Overview

Visitor Pattern은 라이브러리나 프레임워크에서 확장성을 구축할 때에 유용하다. Visitor Pattern은 기본적으로 개발자가 미래에 기능적 조정할 것을 예측하여 구축이 된다.

## Process

- ObjectStructure : 반복될 수 있는 요소 Collection을 유지 관리한다.
- Elements : 1) Visitor Object를 허용하는 accept 메소드를 정의한다. 2) accept 메소드에서 Visitor의 Visit 메서드는 this를 매개변수로 사용하여 호출된다.
- Visitor : 방문 방법을 구현한다. 여기에서 Element의 변경 사항이 적용된다.

## Example

- **ObjectStructure Definition**

```jsx
const Employee = function (name, salary, vacation) {
  const self = this;

  this.accept = function (visitor) {
    visitor.visit(self);
  };

  this.getName = function () {
    return name;
  };
  this.getSalary = function () {
    return salary;
  };
  this.setSalary = function (sal) {
    salary = sal;
  };
  this.getVacation = function () {
    return vacation;
  };
  this.setVacation = function (vac) {
    vacation = vac;
  };
};
```

- **Visitor Definition**

```jsx
const ExtraSalary = function () {
  this.visit = function (emp) {
    emp.setSalary(emp.getSalary() * 1.1);
  };
};
const ExtraVacation = function () {
  this.visit = function (emp) {
    emp.setVacation(emp.getVacation() + 2);
  };
};
```

ObjectStructure 클래스는 visit라는 개발자가 인터페이스를 정의해놓은 객체를 받았을 때, 객체의 상태를 변경시킬 수 있도록 정의를 해놓았다. ExtraSalary가 accept에 보내졌을 때, ExtraVacation이 accept에 보내졌을 때 모두 다른 기능을 보여줄 것 이다. (개발자의 필요에 따라 확장할 수 있는 메서드를 정의해놓은 것 이다.)

- **Usage - Elements Definition**

```jsx
const employees = [
  new Employee("John", 10000, 10),
  new Employee("Mary", 20000, 21),
  new Employee("Boss", 250000, 51),
];
```

- **Usage - Visitor Object**

```jsx
const visitorSalaray = new ExtraSalary();
const visitorVacation = new ExtraVacation();

for (let emp of employees) {
  emp.accept(visitorSalaray);
  emp.accept(visitorVacation);
  // ...
}
```
