# Observer

Observer Pattern은 각 각의 객체들이 특정 이벤트가 발생할 때에 알림을 받을 수 있는 Subscription Model을 제공한다. 이 패턴은 Javascript의 Event-Driven Programming의 초석이다. Observer Pattern은 객체 지향 설계가 목표로 하는 느슨한 결합(Coupling)을 촉진시켜준다.

## Overview

Web Application을 빌드할 때, 우리는 사용자 인터랙션을 위한 많은 Event Handler를 작성하게 된다. Event Handler는 특정 이벤트가 발생할 때 알림을 받는 함수이다. 이러한 알림은 이벤트에 대한 세부 정보가 포함된 이벤트 인수를 수신한다.

Javascript의 이벤트 및 이벤트 핸들러 패러다임은 Observer 디자인 패턴을 기반으로 한다. Observer 패턴은 등록과 한정적인 알림의 특징을 가지기 때문에 Publication/Subscription, Pub/Sub 라고도 부른다.

## Process

- Subject : 1) Event를 나타낸다. 2) Observer 객체의 목록을 유지하며, 3) Observer 객체는 Subject를 Subscribe 하게 되면 이를 관찰할 수 있다. 4) Observer 객체를 구독하거나 구독 취소할 수 있는 인터페이스를 구현한다. 5) 상태가 변경되면 Observer들에게 알림을 보낸다.
- Observers : Subject가 변경될 때, 호출될 수 있는 Signature Function이 있다.

## Example

- **Subject Definition (1) : Observer 객체의 목록 유지 관리**

```jsx
const Click = function () {
  this.handlers = []; // observers
};
```

- **Subject Definition (2) : Pub/Sub Structure Modeling**

```jsx
Click.prototype = {
  subscribe: function (fn) {
    this.handlers.push(fn);
  },
  unsubscribe: function (fn) {
    this.handlers = this.handlers.filter(function (item) {
      if (item !== fn) return item;
    });
  },
  fire: function (o, thisObj) {
    const scope = thisObj || globalThis;
    this.handlers.forEach(function (item) {
      item.call(scope, o);
    });
  },
};
```

여기서 fire 메서드는 이벤트가 발생함을 가정하는 메서드이다. 이벤트가 발생할 경우 Subject 객체인 Click은 자신에게 등록된 Handler들을 순회하며 사용자 Scope에 따른 Handler 호출을 진행한다.

- **Observer Definition**

```jsx
const clickHandler = function (item) {
  console.log("fired: " + item);
};
```

- **Usage**

```jsx
const click = new Click();

click.subscribe(clickHandler);
click.fire("event #1");
click.unsubscribe(clickHandler);
click.fire("event #2");
click.subscribe(clickHandler);
click.fire("event #3");
```
