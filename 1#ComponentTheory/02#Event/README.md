# Event

## Preview

```jsx
class Component {
  // ...
  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  // ...
}
```

현재 SetState에 의해 상태가 변화할 때 마다 View를 Rerendering 시키는 render 함수에는 setEvent라는 함수가 있다. 이는 rendering이 일어날 때마다 실행되며, 이벤트를 매번 새로등록시키고 있음을 나타낸다.

**[ Problem ]**

```jsx
this.$target.querySelector("button").addEventListener("click", () => {
  const { items } = this.$state;
  this.setState({ items: [...items, `item${items.length + 1}`] });
});
```

현재 SetEvent를 구현한 Sub Class Items Component에는 오로지 추가 버튼에만 이벤트를 달아놨기 때문에 불편함을 못 느낄 수 있겠지만 각 각의 아이템에 삭제기능을 추가한다고 치면 다음과 같은 코드가 완성된다.

```jsx
this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", ({ target }) => {
    const items = [...this.$state.items];
    items.splice(target.dataset.index, 1);
    this.setState({ items });
  });
});
```

## Event Bubbling

이와 같은 문제의 해결을 Event의 전파, Event Bubbling을 이용하여 해결할 수 있다.

```jsx
this.$target.addEventListener("click", ({ target }) => {
  const items = [...this.$state.items];

  if (target.classList.contains("appendBtn"))
    items.push(`item${items.length + 1}`);

  if (target.classList.contains("deleteBtn"))
    items.splice(target.dataset.index, 1);

  this.setState({ items: [...items] });
});
```

다음과 같이 이벤트가 발생하는 모든 요소들을 감싸고 있는 컴포넌트에 이벤트 등록을 진행할 경우에는 초기에 컴포넌트가 생성되는 타이밍에만 SetEvent 함수가 실행되도록 해야 한다.

```jsx
constructor($target) {
  this.$target = $target;
  this.setup();
  this.render();
  this.setEvent();
}
```

## Abstract

그리고 이러한 과정을 메소드로 만들어 사용하면 코드를 더욱 깔끔하게 만들 수 있다.

```jsx
addEvent(event, selector, callback) {
  const children = [...this.$target.querySelectorAll(selector)];
  const isTarget = (target) =>
    children.includes(target) || target.closest(selector);

  this.$target.addEventListener(event, (event) => {
    if (!isTarget(event.target)) return false;
    callback(event);
  });
}
```

```jsx
setEvent() {
    this.addEvent("click", ".appendBtn", () => {
      const items = [...this.$state.items];
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      const items = [...this.$state.items];
      items.splice(target.dataset.index, 1);
      this.setState({ items });
    });
}
```
