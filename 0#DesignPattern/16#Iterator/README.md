# Iterator

Iterator Pattern은 Client가 객체 컬렉션을 효과적으로 반복할 수 있도록 해준다.

## Overview

일반적인 프로그래밍 작업에서 배열, 트리 또는 그래프 구조와 같은 복잡한 것으로 저장되어 있는 객체 컬렉션을 탐색하고 조작하게 된다. 이러한 컬렉션들을 탐색하고 조작하는 방법으로는 앞에서 뒤로, 뒤에서 앞으로, 깊이 우선 탐색 등등 많은 액세스 방법이 있다.

Iterator Pattern은 특수한 반복자 method를 구현하여 객체의 순회에서 객체 컬렉션을 분리하여 이 문제를 해결한다. 오늘 날에 많은 언어에는 ‘for-each’ 유형의 구조와 IEnumerable, IEnumerator와 같은 인터페이스를 내장하여 Iterator가 구축되어 있다. Javascript는 for-in, while 및 do while문 형식의 기본 루핑을 지원한다.

## Process

- Client : Iterator를 참조하고 호출한다.
- Iterator : first(), next() 등의 메서드로 반복자 인터페이스를 구현한다. 컬렉션을 탐색할 때에는 현재 위치를 추적한다.
- Items : Iterator의 컬렉션 속 개별 객체

## Example

- **Iterator Definition**

```jsx
const Iterator = function (items) {
  this.index = 0;
  this.items = items;
};
```

- **Iterator Interface Definition**

```jsx
Iterator.prototype = {
  first: function () {
    this.reset();
    return this.next();
  },

  next: function () {
    return this.items[this.index++];
  },
  hasNext: function () {
    return this.index <= this.items.length;
  },
  reset: function () {
    this.index = 0;
  },
  each: function (callback) {
    for (let item = this.first(); this.hasNext(); item = this.next())
      callback(item);
  },
};
```

- **Usage**

```jsx
const items = ["one", 2, "circle", true, "Applepie"];
const iter = new Iterator(items);

for (let item = iter.first(); iter.hasNext(); item = iter.next())
  console.log(item);

iter.each(function (item) {
  console.log(item);
});
```
