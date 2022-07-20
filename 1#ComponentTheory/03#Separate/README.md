# Separate

## 기능추가와 문제점

```jsx
template() {
  return `
          <header>
            <input type="text" class="appender" placeholder="아이템 내용 입력" />
          </header>
          <main>
          <ul>
              ${this.filteredItems
                .map(
                  (item, key) => `
                      <li data-seq="${item.seq}">
                        ${item.contents}
                        <button class="toggleBtn" style="color: ${
                          item.active ? "#09F" : "#F09"
                        }">
                          ${item.active ? "활성" : "비활성"}
                        </button>
                        <button class="deleteBtn" data-index="${key}">삭제</button>
                      </li>
              `
                )
                .join("")}
          </ul>
          </main>
          <footer>
            <button class='filterBtn' data-is-filter='0'>전체 보기</button>
            <button class='filterBtn' data-is-filter='1'>활성 보기</button>
            <button class='filterBtn' data-is-filter='2'>비활성 보기</button>
          </footer>
          <button class="appendBtn">추가</button>
      `;
}
```

새롭게 추가된 기능은 아이템 내용을 조회하는 기능, 필터 기능이다. 이와 같이 템플릿을 구성하고, 이벤트를 달아주게 되면 Items 컴포넌트 하나가 많은 일을 하게 된다. 이럴 경우 컴포넌트라는 이름이 무색하게 컴포넌트 단위로 활용할 수 없는 상태가 된다.

이를 해결하기 위해 Component 단위로 ItemAppender, ItemFilter, Items로 나누도록 하겠다.

( + ) 예제에 쓰이는 closest는 다시 정리하자면, 매개변수로 selector를 전달해주면 target으로부터 부모쪽으로 이동하면서 selector에 일치하는 노드를 찾는다.

## Component Core 수정

```jsx
export default class Component {
  $target;
  $props;
  $state;
  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.render();
    this.setEvent();
  }
  // ...
  mounted() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  addEvent(event, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);

    this.$target.addEventListener(event, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}
```

Component Core를 부모 컴포넌트로부터 상태 혹은 메소드를 전달받기 위한 props와 render 이후 추가적인 기능을 수행하기 위한 mounted 메서드를 추가해준다. 또한 addEvent 메서드를 모든 Component가 상속받을 수 있도록 추가해준다.

## App Component

**[ State ]**

```jsx
setup() {
  this.$state = {
    isFilter: 0,
    items: [
      {
        seq: 1,
        contents: "item1",
        active: false,
      },
      {
        seq: 2,
        contents: "item2",
        active: false,
      },
    ],
  };
}
```

React 에서도 자주봤듯이 최상위 컴포넌트는 항상 App Component로 부터 시작된다. State를 Component별로 관리해도 되겠지만, Component간에 통신을 위해 최상위 App Component에 items state를 정의한다.

**[ Template ]**

```jsx
template() {
  return `
      <header data-component='item-appender'></header>
      <main data-component='items'></main>
      <footer data-component='item-filter'></footer>
  `;
}
```

Component로 동작할 태그를 지정해준다. 이 태그들은 data-component라는 dataset 속성을 지니고 있다.

**[ mounted ]**

```jsx
mounted() {
  const { filteredItems, addItem, toggleItem, filterItem, deleteItem } = this;
  const $itemAppender = this.$target.querySelector(
    '[data-component="item-appender"]'
  );
  const $items = this.$target.querySelector('[data-component="items"]');
  const $itemFilter = this.$target.querySelector(
    '[data-component="item-filter"]'
  );

  new ItemAppender($itemAppender, {
    addItem: addItem.bind(this),
  });
  new Items($items, {
    filteredItems,
    toggleItem: toggleItem.bind(this),
    deleteItem: deleteItem.bind(this),
  });
  new ItemFilter($itemFilter, {
    filterItem: filterItem.bind(this),
  });
}
```

mounted 함수는 Component Core에서 template 메서드 다음으로 호출되는 메서드이다. 해당 메서드에서는 각 Component 태그로 지정된 곳에 우리가 분할한 Component들이 배치되도록 한다. 이 때, this로 부터 받아온 상태, 상태변화 함수들은 App Component Instance를 this로 동작해야 해당 이벤트 메서드 안에서 제 동작을 할 수 있으니, this binding의 대상을 꼭 현재 최상위 Component인 App으로 잡아준다.

**[ Event Method ]**

```jsx
addItem(contents) {
  const { items } = this.$state;
  const seq = Math.max(0, ...items.map((v) => v.seq)) + 1;
  const active = false;

  this.setState({
    ...this.$state,
    items: [...items, { seq, contents, active }],
  });
}
```

Event 메서드는 다음과 같이 지정해준다. 우리가 React에서 부모 상태값을 변화시킬 때, onChange와 같은 메서드를 만들어 자식들의 Props로 넘겨주는 것 처럼 데이터만 받고 상태 변화에 관련된 로직은 해당 메서드에 기입한다.

**[ Component Usage ]**

```jsx
export default class ItemAppender extends Component {
  template() {
    return `<input type="text" class="appender" placeholder="아이템 내용 입력" />`;
  }

  setEvent() {
    const { addItem } = this.$props;
    this.addEvent("keyup", ".appender", ({ key, target }) => {
      if (key !== "Enter") return;
      addItem(target.value);
    });
  }
}
```

App Component 아래로 생성될 자식 Component는 다음과 같이 정의한다. template에는 자식 Component의 모양을 정의해주며, setEvent에 상위 Component인 Component Core의 addEvent메서드를 이용하여, 부모가 보내준 상태변화 Event Method를 Props에서 가지고와 자신이 가지고 있는 View의 값을 넘겨주어 사용자 Interaction을 구성한다.
