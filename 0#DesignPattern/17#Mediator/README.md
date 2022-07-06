# Mediator

Mediator Pattern은 객체가 상호 작용하는 방식을 캡슐화하여 객체 그룹에 대한 중앙 권한을 제공한다. Mediator Model은 모든 객체가 그룹에 있는 다른 객체의 상태 변경을 인식하는 복잡한 조건을 관리해야 하는 시나리오에 유용하다.

## Overview

Mediator Pattern은 복잡한 형태의 개발을 진행할 때 유용하다. 예로들어 항공편 예약 옵션을 입력하는 페이지를 들 수 있는데, Mediator Pattern은 규칙을 정해놓는다. 유효한 출발 날짜 / 귀국 날짜를 활성화해야 유효한 출발 공학 / 도착 공항 / 여행자 수 / 검색 버튼 을 활성화할 수 있다.

## Process

- Mediator : Colleague 객체에 대한 참조를 유지 관리하고, 이들의 중앙 제어를 담당한다.
- Colleague : Mediator에 의해 중재되는 객체이다. Mediator에 대한 참조를 유지한다.

## Example

- **Mediator Definition**

```jsx
const Chatroom = function () {
  const participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },
    send: function (msg, from, to) {
      if (to) to.receive(msg, from);
      else {
        for (key in participants)
          if (participants[key] !== from) participants[key].receive(msg, from);
      }
    },
  };
};
```

- **Colleague Definition**

```jsx
const Participant = function (name) {
  this.name = name;
  this.chatroom = null;
};
Participant.prototype = {
  send: function (msg, to) {
    this.chatroom.send(msg, this, to);
  },
  receive: function (msg, from) {
    console.log(from.name + " to " + this.name + ": " + msg);
  },
};
```

- **Usage**

```jsx
const yoko = new Participant("Yoko");
const john = new Participant("John");
const paul = new Participant("Paul");
const ringo = new Participant("Ringo");

const chatroom = new Chatroom();
chatroom.register(yoko);
chatroom.register(john);
chatroom.register(paul);
chatroom.register(ringo);

yoko.send("All u need is love.");
yoko.send("I love u John :)");
john.send("Hey, no need to broadcast", yoko);
paul.send("Ha, I heard that!");
ringo.send("Paul, what do u think?", paul);
```

예제에서의 Mediator Model의 역할을 하는 Chatroom은 Collegue Model의 역할을 하는 Participant의 메세지 전송의 BroadCasting, UniCasting을 중재하는 것을 위 코드로 확인할 수 있다.
