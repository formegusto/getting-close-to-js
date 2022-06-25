# Singletone

Singleton Pattern은 객체의 존재여부를 오로지 하나로만 정의하고 싶을 때 사용한다.

## Overview

Singleton은 System 전체의 작업에서 오로지 하나, 그리고 중심부에 위치에서 조정해야 하는 상황에서 유용하다. 가장 대표적인 예로 Database Connection Pool이 있는데, Pool이 하는 역할은 시스템 전체에서 데이터베이스 연결의 생성, 소멸 및 수명을 관리한다. 이렇듯 Singletone Namespace에 특정 변수를 위치시키게 되면 복잡한, 중복되는 변수 발생의 위험을 제외할 수 있기 때문에 Javascript에서 전역 변수의 필요성을 줄여준다.

Database Connection Pool 외에도 Factory Pattern, Prototype Pattern 및 Facade Pattern과 같은 패턴의 구현에 있어서 하나의 인스턴스만 필요로 할 때 종종 싱글톤으로 구현한다.

## Process

- Singletone : 고유한 인스턴스를 반환하는 getInstance()를 정의하고, 인스턴스 객체 생성 및 관리를 담당한다.

## Example

Singletone을 구현하는데에 주요사항은 메모리에 오로지 하나의 인스턴스만 존재하도록 하는 것 이다. 그렇기 때문에 주로 Anonymous Function으로 즉시실행하는 방식으로 인스턴스를 생성할 Singletone 객체를 생성한다.

단일 인스턴스 이전에 Singletone 객체 또한 오직 하나임이 보장되는 것 이다. 그렇기 때문에 getInstance() 메서드에서 instance 생성여부를 판단하고, 새 인스턴스를 생성할 것인지 말 것 인지 결정한다. 이렇듯 꼭 필요한 경우에만 객체를 생성하여 CPU와 메모리를 절약하는 방식을 Lazy Loading이라고 한다.

Singletone은 가장 대중적인 Module Pattern으로 널리 사용되는 jQuery, Backbone, Ember와 같은 Javascript Library and Framework의 기초이다.

- **Singletone Definition**

```jsx
const Singletone = (function () {
  let instance;

  function createInstance() {
    const object = new Object("i am object");
    return object;
  }

  return {
    getInstance: function () {
      if (!instance) instance = createInstance();

      return instance;
    },
  };
})();
```

- **getInstance()**

```jsx
const instance1 = Singletone.getInstance();
const instance2 = Singletone.getInstance();

console.log("Same Instance? " + (instance1 === instance2));
// Same Instance? true
```
