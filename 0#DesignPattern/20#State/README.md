# State

State Pattern은 객체가 특정 상태를 나타내는 제한된 State 집합을 가진 상태에서 State별로 기능을 수행하도록 한다.

## Overview

State Pattern의 예로는 온라인 주문 시나리오를 들 수 있다. 주문은 많은 승인, 포장, 배송 중, 취소 등과 같은 많은 상태를 가진다. 이 중 어떤 상태가 될 지에 대해서는 우리는 예측할 수 없기 때문에 상태별로 주문을 적절하게 처리하는 기능을 구현해야 한다.

주문 시나리오에 State Pattern을 적용시키면 각각의 고유한 State및 Method 집합이 있는 상태 별 객체들이 제공되는데, 이들을 전환시키는 주체를 State Machine 이라고 부르며, State Machine은 State Pattern을 활용하여 구현된다. State Machine은 상태 전환이 발생할 때, State 객체를 다른 State 객체로 교체하기만 하면 된다.

그 밖에 예로는 자동 판매기, 엘리베이터를 들 수 있다.

## Process

- Context : 1) Service Client에게 인터페이스를 보여준다, 2) 현재 상태를 정의하는 State 객체에 대한 참조를 유지한다, 3) State 객체가 현재 상태를 다른 상태로 변경할 수 있도록 한다.
- State : State값과 State관련 동작을 캡슐화한다.

## Example

- **Context Definition**

```jsx
function TrafficLight() {
  let count = 0;
  let currentState = new Red(this);

  this.change = function (state) {
    if (count++ >= 10) return;
    currentState = state;
    currentState.go();
  };

  this.start = function () {
    currentState.go();
  };
}
```

- **State Definition**

```jsx
function Red(light) {
  this.light = light;

  this.go = function () {
    console.log("Red --> for 1 minute");
    light.change(new Green(light));
  };
}

function Yellow(light) {
  this.light = light;

  this.go = function () {
    console.log("Yellow --> for 10 seconds");
    light.change(new Red(light));
  };
}

function Green(light) {
  this.light = light;

  this.go = function () {
    console.log("Green -> for 1 minute");
    light.change(new Yellow(light));
  };
}
```

- **Usage**

```jsx
const light = new TrafficLight();
light.start();
```

모든 상태값들은 context를 공유하고 있다. 그리고 위 예제에서는 change를 통하여 Context에서 동작해야 하는 상태값을 변경시키고 있다. 실제로는 위와같이 짜여진 틀이 아닌, 사용자 이벤트에 따라 이것이 동작할 것 이다.
