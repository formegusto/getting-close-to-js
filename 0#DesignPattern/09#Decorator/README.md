# Decorator

Decorator Pattern은 객체의 동작을 동적으로 확장 하는 패턴이다. Decorator Pattern의 구성요소인 Decorator가 객체를 확장시키는 방법은 객체의 주위를 감싸면서 수행한다.

## Overview

Decorator의 예로는 사용자의 권한에 따라 Business Object에 권한이 있는 정보에 대해 추가 액세스 권한이 부여되도록 하는 보안작업이 있다. Javascript에서 Extend, Mixin Pattern은 Decorator Pattern을 포함한다.

## Process

- Client : Decorator로 Wrapping된 Component를 사용하는 주체
- Component : Decorator에 의해 추가기능이 생길 개체
- Decorator : Component를 감싸서, Component에 추가기능을 부여한다.

## Example

- **Component Definition**

```jsx
const User = function (name) {
  this.name = name;

  this.say = function () {
    console.log("User: " + this.name);
  };
};
```

- **Decorator Definition**

```jsx
const DecoratedUser = function (user, street, city) {
  Object.entries(user).forEach(([key, value]) => {
    this[key] = value;
  });
  this.street = street;
  this.city = city;

  this.say = function () {
    console.log(
      "Decorated User: " + [this.name, this.street, this.city].join(", ")
    );
  };
};
```

- **Usage**

```jsx
const user = new User("Kelly");
user.say();

const decorated = new DecoratedUser(user, "Boradway", "New York");
decorated.say();
```

User 객체는 DecoratedUser에 의해 Decorating 된다. 확장과 동시에 원래 인터페이스를 그대로 유지하기 위해서 user의 property들을 복사하는 과정을 거친다. 다음과 과정을 거치면 street와 city와 같은 주소정보가 추가된 User 객체로 확장된다. 여기서 say는 재정의 시킴으로써, User의 say메소드를 숨기는 역할을 한다.
