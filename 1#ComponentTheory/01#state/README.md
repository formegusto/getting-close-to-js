# State

## Component and State

State에 종속적인 DOM, Component를 구현하려면 어떻게 설계를 진행해야 할까?

1. state가 변경되면 render() 함수가 호출된다.
2. state는 오직 setState로만 변경되어야 한다.

이와 같은 개념을 가지고 Component의 기본기능을 구현하면 아래와 같다.

- **State Definition**

```jsx
let state = {
  items: ["item1", "item2", "item3", "item4"],
};
```

- **Render Function Definition**

```jsx
const render = () => {
  const { items } = state;
  $app.innerHTML = `
    <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
    </ul>
    <button id="append">추가</button>
  `;
};
```

- **setState Function Definition**

```jsx
const setState = (newState) => {
  state = { ...state, ...newState };
  render();
};
```

현재 이정도의 코드를 가지고 있다면 상태 변수인 state를 변화시킬 수 있는 방법은 setState 함수에 의해서만 가능하다. setState를 구현하게 되면 처음에 설계했던 Component의 특징 두 가지를 모두 만족한다.

- **Button Function**

```jsx
document.querySelector("#append").addEventListener("click", () => {
  setState({ items: [...items, `item${items.length + 1}`] });
});
```

Button에 setState 함수를 이용하여 상태를 변화시키는 기능을 추가시켜본다. 다음과 같이 구성하면 setState에 의해 app 이라는 DOM 이 우리가 알고 있는 상태에 의해 변화하는 Component와 유사하게 동작하고 있음을 확인할 수 있다.

## Abstract

우리가 React 에서 Component들을 정의하다 보면 특히 Typescript를 한번쯤은 사용해봤다면 React.Component, React.FC 와 같은 React에서의 Component를 나타내는 Type들을 볼 수가 있다. 이들은 아마도 React Component 들이 공통적으로 가지고 있는 기능들을 가지고 있을 것 이다. 즉, 상속의 역할에서 부모에 속할 Component를 추상화해보도록 한다.

- **Component Class Definition**

```jsx
class Component {
  $target;
  $state;
  constructor($target) {
    this.$target = $target;
  }
  setup() {}
  template() {}
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
```

| method   | description                                            |
| -------- | ------------------------------------------------------ |
| setup    | 초기 state값 셋팅 (컴포넌트 별로 다름)                 |
| template | Component에 그려질 DOM 정의                            |
| render   | Component에 정의된 DOM을 그리는 역할                   |
| setEvent | Rendering 이후, Event가 필요한 DOM에 Event를 주입한다. |
| setState | 상태변화에 이은 render 호출 역할                       |

여기서 setState, render 메서드는 Component의 기본적인 기능을 띈다. state를 변화시키고, DOM을 그린다. 즉, 상속받는 SubClass에서는 setState와 render를 구현하면 안된다.

- **My Component Definition**

**[ setup ] 상태를 정의한다. React.useState와 같은 격이라고 생각하면 된다.**

```jsx
setup() {
  this.$state = { items: ["item1", "item2"] };
}
```

**[ template ] 그려질 DOM을 배치한다.**

```jsx
template() {
  const { items } = this.$state;
  return `
      <ul>
          ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button>추가</button>
  `;
}
```

**[ setEvent ] 해당 컴포넌트에서 그려지는 DOM에 Event를 주입한다.**

```jsx
setEvent() {
  this.$target.querySelector("button").addEventListener("click", () => {
    const { items } = this.$state;
    this.setState({ items: [...items, `item${items.length + 1}`] });
  });
}
```

## Modulization

```
├── 01#state
│   ├── index.html
│   └── script
│       ├── components
│       │   └── Items.js
│       ├── core
│       │   └── Component.js
│       └── index.js
```
