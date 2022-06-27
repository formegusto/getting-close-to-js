# Bridge

Bridge Pattern은 클라이언트와 서버라는 두 가지 구성 요소가 각 자의 고유한 인터페이스를 가진채로 확장할 수 있도록 해주는 디자인 패턴이다. Bridge Pattern은 높은 수준의 Architecture Pattern이며, 주요 목표는 두 가지 수준의 추상화를 통해 더 좋은 코드가 작성되도록 하는 것 이다. 느슨한 결합을 만드는데에 유용하다.

## Overview

Bridge Pattern의 예로는 응용 프로그램(클라이언트)과 데이터베이스 드라이버(서비스)를 들 수 있다. 응용 프로그램은 ODBC 와 같은 데이터베이스 드라이버 API를 사용하여 Database를 조작하지만 이 API 뒤에는 드라이버마다 각 데이터베이스 공급업체마다 완전히 다르다는 것을 알 수 있다. 안타깝게도 Javascript 에서는 그 모습을 거의 확인할 수 없다.

## Process

- Client : API 사용자
- Abstraction : 클라이언트의 작업의 추상화 인터페이스
- RefinedAbstraction : Abstraction에 의해 정의된 인터페이스를 구현하고 확장한다. ( Javascript 에서는 Abstraction이 사용되지 않기 때문에 Abstraction의 역할을 한다 )
- Implementor
- ConcreteImplementor : Implementor 인터페이스를 구현하고 그 효과를 정의한다. ( Javascript 에서는 Implementor가 사용되지 않기 때문에 Implementor의 역할을 한다 )

## Example

- **Abstraction, RefinedAbstraction eq.Input Devices Definition**

```jsx
const Gesture = function (output) {
  this.output = output;

  this.tap = () => {
    this.output.click();
  };
  this.swipe = () => {
    this.output.move();
  };
  this.pan = () => {
    this.output.drag();
  };
  this.pinch = () => {
    this.output.zoom();
  };
};

const Mouse = function (output) {
  this.output = output;

  this.click = () => {
    this.output.click();
  };
  this.move = () => {
    this.output.move();
  };
  this.drag = () => {
    this.output.drag();
  };
  this.wheel = () => {
    this.output.zoom();
  };
};
```

- **Implementor, ConcreteImplementor eq.Output Devices Definition**

```jsx
const Screen = function () {
  this.click = () => {
    console.log("Screen Select");
  };
  this.move = () => {
    console.log("Screen Move");
  };
  this.drag = () => {
    console.log("Screen Drag");
  };
  this.zoom = () => {
    console.log("Screen zoom in");
  };
};

const Audio = function () {
  this.click = () => {
    console.log("Sound oink");
  };
  this.move = () => {
    console.log("Sound waves");
  };
  this.drag = () => {
    console.log("Sound screetch");
  };
  this.zoom = () => {
    console.log("Sound volumne up");
  };
};
```

- **Usage**

```jsx
const screen = new Screen();
const audio = new Audio();

const hand = new Gesture(screen);
const mouse = new Mouse(audio);

hand.tap();
hand.swipe();
hand.pinch();

mouse.click();
mouse.move();
mouse.wheel();
```

Gesture와 Mouse는 각 각 다른 프로퍼티 key 구조를 가진다. 하지만 내부에서 실행되는 내용에는 공통의 출력 명령을 가지고 있는 것을 알 수가 있다. 해당 공통 출력 명령셋에 맞추어 Implementor에서 작성을 해주면 Abstraction이 정의해놓은 명령 프로세스 안에서 Implementor에서 맞춤식으로 수행될 내용을 구현해낼 수 있다. (구현부와 추상부가 분리되어짐의 의미) Abstraction이 정해놓은 명령 프로세스만 잘 따라가면 어떤 형태의 Implementor든 작동하게 할 수 있다.
