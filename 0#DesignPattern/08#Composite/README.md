# Composite

Composite Pattern은 기본항목 또는 개체 모음 속성이 있는 개체를 만들 수 있다. Composite에 속하는 컬렉션의 각 항목은 다른 컬렉션 자체를 보유하면서 트리 구조의 중첩된 구조를 생성한다.

## Overview

Composite Pattern을 가장 잘 설명하는 예시는 Tree Control이다. 개별 개체인 Leaf Node, 개체 그룹인 Component로 구성이 된다. 또한 구성요소인 각 노드들은 개별적으로 개체 및 컬렉션을 지원하는 공통 속성 및 메서드 집합을 서로 공유한다. 이렇게 공통된 인터페이스는 Composite 컬렉션의 각 노드를 반복하는 재귀 알고리즘의 설계 및 구성을 크게 만들어준다.

## Process

- Component : Composition Interface Definition
- Leaf : Composition Leaf 개체를 나타내는 데, 자식 노드를 가지지 않는다는 특징이 있다.
- Composite : Composition의 Branch를 나타낸다. 자식 구성 요소 컬렉션을 유지 관리한다.

## Example

- **Component Definition**

```jsx
const Node = function (name) {
  this.children = [];
  this.name = name;
};
```

- **Component Tree Control**

```jsx
Node.prototype = {
  add: function (child) {
    this.children.push(child);
  },
  remove: function (child) {
    const length = this.children.length;
    for (let i = 0; i < length; i++) {
      if (this.children[i] === child) {
        this.children.splice(i, 1);
        return;
      }
    }
  },
  getChild: function (i) {
    return this.children[i];
  },
  hasChildren: function () {
    return this.children.length > 0;
  },
};
```

- **Composition Structure**

```jsx
const tree = new Node("root");
const left = new Node("left");
const right = new Node("right");

const leftleft = new Node("leftleft");
const leftright = new Node("leftright");

const rightleft = new Node("rightleft");
const rightright = new Node("rightright");

tree.add(left);
tree.add(right);
tree.remove(right);
tree.add(right);

left.add(leftleft);
left.add(leftright);

right.add(rightleft);
right.add(rightright);
```

- **Traversal**

```jsx
function traverse(indent, node) {
  console.log(Array(indent++).join("--") + node.name);

  for (let i = 0, length = node.children.length; i < length; i++)
    traverse(indent, node.getChild(i));
}
```

Composition Pattern은 children property를 가지며, root node로 부터 복합객체의 성질을 가질 수 있도록 트리구조로 확장시켜나갈 수 있는 특징을 가진다. 이는 개발자가 원하는대로 실행을 시켜도 될 것 이며, Tree의 순행 알고리즘을 이용하여 원하는 프로세스를 짤 수도 있을 것 이다.
