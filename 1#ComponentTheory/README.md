# Component Theory

Flux Pattern에 대해 조사하던 중, Facebook에서 운영하고 있는 Flux Pattern에 대한 세미나 영상을 보게 되었다. 해당 세미나 영상의 제목은 [Hacker Way: Rethinking Web App Development at Facebook](https://www.youtube.com/watch?v=nYkdrAPrdcw&t=1673s) 이다. 웹 어플리케이션 개발 패러다임을 바꾸기 위해 어떤 고민들을 했는지에 대한 영상이었다. 그래서 문득 내가 평상시에 무심코 사용하던 React에서의 Component들은 내부적으로 어떻게 동작하길래 상태변화에 반응할 수 있을까? 하고 궁금해졌다. Component Theory Part의 목적은 상태변화에 따른 웹 컴포넌트 변화를 Vanilla Javascript로 직접 구현해보며 이해해보기 이다.

## References

[Vanilla Javascript로 웹 컴포넌트 만들기 | 개발자 황준일](https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/)

## Overview

**[ State Management ] Rendering With Data**

웹 개발의 역사에서 빼놓을 수 없는 요소는 jQuery 인 것 같다. jQuery는 Javascript 라이브러리 중 하나로, DOM, Event, Animation 및 Ajax와 같은 작업을 간단하게 만들어주는 역할을 한다. 이러한 jQuery의 가장 큰 장점은 DOM을 쉽게 조작할 수 있도록 해주는 DOM API에 있다.

브라우저와 Javascript의 발전하는 과정에서 Client단에서 렌더링을 하였고, Server는 단지 REST API 혹은 GraphQL과 같이 Client-Side에서 렌더링에 필요로 하는 데이터만 제공하는 형태로 패러다임이 변화하였다.

DOM을 직접적으로 다루는 행위가 급격하게 감소했다. Server로 부터 받는 데이터, 즉 상태(State)를 기준으로 DOM을 렌더링하는 형태로 발전했다. DOM 자체에 변화를 주는 것이 아닌 데이터가 변화해야, State가 변화해야 DOM이 변화하는 State에 종속적인 형태로 변화한 것 이다. 이러한 과정에서 Client-Side Rendering(CSR)이라는 개념과 State Management라는 개념이 생기게 되었다.

**[ Component ]** Component Based Development

Client-Side Rendering의 시작은 Angular로 부터였다. 그리고 React는 Component 기반 개발의 시작을 알렸다. 그 이후 Angular와 React의 장점을 모두 수용한 Vue가 나타났다.

현 시점에서의 웹 개발은 이들을 중심으로 돌아가고 있다. 즉, 웹 어플리케이션의 개발이 컴포넌트 단위로 설계되고 진행되고 있다는 것이다. 컴포넌트마다 컴포넌트를 렌더링할 때 필요한 상태를 관리하게 되었으며, Proxy 혹은 Observer Pattern 등을 이용하여 이를 구현한다.
