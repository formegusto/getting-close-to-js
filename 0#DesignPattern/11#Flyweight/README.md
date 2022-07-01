# Flyweight

Flyweight Pattern은 세분화된 객체를 효율적으로 공유하여 메모리를 절약하는데에 목적을 둔다. 이렇게 공유된 Flyweight Object는 변경시킬 수 없다. 모든 객체들과 공유되는 특성을 나타내고 있기 때문에 변경하지 않는다.

## Overview

Flyweight는 공통 속성이 Shared Flyweight Object로 정의되는 ‘객체 정규화 기술'이다. 해당 디자인패턴의 아이디어는 중복성을 최소화하기 위한 데이터 모델 정규화와 유사하다.

Flyweight Pattern의 예로는 애플리케이션 전체에서 공유되는 변경할 수 없는 문자열 목록을 유지 관리하는 Javascript Engine 자체가 있다. 다른 예로는 Word Processor의 문자 및 라인스타일 또는 공중 교환 전화 네트워크 응용 프로그램의 ‘숫자 수신기'가 있다. 주로 이 패턴은 워드 프로세서, 그래픽 프로그램 및 네트워크 앱과 같은 유틸리티 유형 응용 프로그램에서 찾을 수 있으며, 데이터 기반 비즈니스 유형 응용 프로그램에서는 덜 자주 사용된다.

## Process

- Client : Flyweight Object를 얻기 위해서 FlyweightFacotry를 호출하는 주체
- FlyweightFactory : Flyweight Object 생성 및 관리, 향후 요청을 위해 새로 생성된 Flyweight를 저장
- Flyweight : 응용 프로그램 전체에서 공유할 고유 데이터를 유지 관리한다.

## Example

- **Flyweight Definition**

```jsx
const Flyweight = function (make, model, processor) {
  this.make = make;
  this.model = model;
  this.processor = processor;
};
```

- **Flyweight Factory Definition**

```jsx
const FlyweightFactory = (function () {
  const flyweights = {};
  let count = 0;

  return {
    get: function (make, model, processor) {
      if (!flyweights[make + model]) {
        flyweights[make + model] = new Flyweight(make, model, processor);
        count++;
      }

      return flyweights[make + model];
    },

    getCount: () => count,
  };
})();
```

- **Usage : Computer**

```jsx
const Computer = function (make, model, processor, memory, tag) {
  this.flyweight = FlyweightFactory.get(make, model, processor);
  this.memory = memory;
  this.tag = tag;
  this.getMake = () => this.flyweight.make;
};
```

- **Usage : Computer Collection**

```jsx
const ComputerCollection = function () {
  const computers = {};
  let count = 0;

  return {
    add: function (make, model, processor, memory, tag) {
      computers[tag] = new Computer(make, model, processor, memory, tag);
      count++;
    },
    get: (tag) => computers[tag],
    getCount: () => count,
  };
};
```

- **Usage**

```jsx
var computers = new ComputerCollection();

computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

console.log("Computers: " + computers.getCount()); // 7
console.log("Flyweights: " + FlyWeightFactory.getCount()); // 2
```

FlyweightFactory가 새 Flyweight Object를 생성하는 경우는 새 제조업체의 새 모델명이 등장해야 새로운 Flyweight Object를 생성한다. 이 때, memory, tag 의 정보는 Computer 객체 개별적으로 저장되며, 상위에 제조업체, 모델명, processor 정보는 FlyweightFactory에 의해 생성된 Flyweight Object로 공유되는 정보이다.
