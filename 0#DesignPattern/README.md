# JavaScript Design Pattern

# References

[JavaScript Design Patterns](https://www.dofactory.com/javascript/design-patterns)

# GoF(Gang of Four) Pattern

> **생성** - 클래스나 객체의 **생성과 참조 과정**을 정의하는 패턴

| Name             | Description                                                                          |
| ---------------- | ------------------------------------------------------------------------------------ |
| Abstract Factory | 인터페이스를 통해 서로 연관 및 의존하는 객체들을 그룹으로 생성하여 추상적으로 표현함 |
| Builder          | 작게 분리된 인스턴스를 건축 하듯이 조합하여 객체를 생성함                            |
| Factory Method   | 객체 생성을 서브 클래스에서 처리하도록 분리하여 캡슐화한 패턴                        |
| Prototype        | 원본 객체를 복제하는 방법으로 객체를 생성하는 패턴                                   |
| Singleton        | 하나의 인스턴스만 존재할 수 있는 클래스                                              |

> **구조** - 복잡한 시스템을 개발하기 쉽도록 **클래스나 객체들을 조합하여 더 큰 구조**로 만드는 패턴

| Name      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| Adapter   | 호환성이 없는 클래스들의 인터페이스를 다른 클래스가 이용할 수 있도록 변환해주는 패턴 |
| Bridge    | 구현부와 추상층을 분리하여, 서로가 독립적으로 확장할 수 있도록 구성한 패턴           |
| Composite | 객체들을 트리 구조로 구성하여 복잡 객체 안에 복합 객체가 포함되는 구조를 구현        |
| Decorator | 객체 간의 결합을 통해 능동적으로 기능들을 확장할 수 있는 패턴                        |
| Facade    | 서브 클래스들 사이의 통합 인터페이스를 제공하는 Wrapper 객체를 사용                  |
| Flyweight | 인스턴스를 가능한 공유해서 사용함                                                    |
| Proxy     | 접근이 어려운 객체와 여기에 연결하려는 객체 사이에서 인터페이스 역할을 수행하는 패턴 |

> **행동** - **클래스나 객체들이 서로 상호작용하는 방법이나 책임 분배방법을 정의**하는 패턴

| Name            | Description                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------- |
| Chain of Resp.  | 한 객체가 처리하지 못하면 다음 객체로 넘어가는 형태의 패턴                                  |
| Command         | 요청을 객체의 형태로 캡슐화하는 패턴                                                        |
| Interpreter     | 언어에 문법 표현을 정의하는 패턴                                                            |
| Iterator        | 내부 표현 방법의 노출 없이 순차적으로 접근하도록 하는 패턴                                  |
| Mediator        | 클래스들 간의 쉬운 의사소통을 정의하는 패턴                                                 |
| Memento         | 특정 시점에서의 객체 내부 상태를 객체화함으로써 특정 시점의 상태로 돌릴 수 있는 기능의 패턴 |
| Observer        | 한 객체의 상태가 변화하면 객체에 상속되어 있는 다른 객체들에게 변화된 상태를 전달하는 패턴  |
| State           | 객체 상태를 캡슐화하고 이를 참조하는 방식의 패턴                                            |
| Strategy        | 동일한 계열의 알고리즘들을 개별적으로 캡슐화하여 상호 교환할 수 있게 정의하는 패턴          |
| Template Method | 알고리즘들의 정확한 단계를 하위 클래스로 연기하는 패턴                                      |
| Visitor         | 클래스에 변경없이 새 작업을 정의하는 패턴                                                   |
