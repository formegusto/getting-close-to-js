# Proxy

Proxy Pattern은 다른 객체에 대한 대리(?) 혹은 placeholder object를 제공한다.

## Overview

객체지향 프로그래밍에서 객체는 인터페이스(속성 및 메서드)를 통해 작업을 수행한다. 이러한 객체를 사용하는 개발자는 작업을 빠르고 효율적으로 수행하기를 기대한다. 그러나 객체가 심각하게 제한되어 있는 상황이 존재한다. 일반적으로 이는 원격 리소스에 대한 종속성 (eq. Network Pending Time) 이 있거나 객체를 로드하는 데에 오랜 시간이 걸릴 때 발생한다.

이와 같은 상황에서 Proxy Pattern을 적용하고 원본 객체를 ‘대체'하는 프록시 객체를 만든다. Proxy의 역할은 요청을 대상 객체로 전달한다. Proxy 객체의 인터페이스는 원래 객체와 동일하기 때문에 이를 사용하는 클라이언트는 실제 객체가 아닌 Proxy Object를 다루고 있다는 사실을 인식하지 못할 수 있다.

## Process

- Client : Proxy를 호출하는 주체
- Proxy : 실제 객체와 유사한 인터페이스를 제공, 요청을 처리하고 실제 객체에 전달한다.
- RealSubject : 서비스가 요청되는 실제 객체를 정의

## Example

- **RealSubject Definition**

```jsx
const GeoCoder = function () {
  this.getLatLng = function (address) {
    if (address === "Amsterdam") return "52.3700° N, 4.8900° E";
    else if (address === "London") return "51.5171° N, 0.1062° W";
    else if (address === "Paris") return "48.8742° N, 2.3470° E";
    else if (address === "Berlin") return "52.5233° N, 13.4127° E";
    else return "";
  };
};
```

- **Proxy Definition**

```jsx
const GeoProxy = function () {
  const geocoder = new GeoCoder();
  const geocache = {};
  let count = 0;

  return {
    getLatLng: function (address) {
      if (!geocache[address]) {
        geocache[address] = geocoder.getLatLng(address);
        count++;
      }
      console.log(address + ": " + geocache[address]);
      return geocache[address];
    },
    getCount: () => count,
  };
};
```

- **Usage**

```jsx
const geo = new GeoProxy();

geo.getLatLng("Paris");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("London");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("Amsterdam");
geo.getLatLng("London");
geo.getLatLng("London");

console.log("\nCache size: " + geo.getCount()); // 3
```

Proxy 객체는 사용하는 사용자가 모르도록 실제 객체의 역할을 하는 RealSubject와 같은 기능을 수행해야 한다. 해당 예제에서의 ProxyPattern을 사용한 이유는 RealSubject인 Geocoder에 자주 요청되는 것들은 caching 하여 사용자에게 빠른 결과를 제공함에 있다. 이 때 사용자는 Proxy Object의 외부 기능이 RealSubject와 유사함으로 Cache가 운영되고 있다는 사실을 알 수 없다.
