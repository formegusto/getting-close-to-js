## 01 - 회문 문자열

- 우선은 대문자, 소문자가 섞여있는 문자열이 입력될 것 이기 때문에 toLowerCase 혹은 toUpperCase로 스케일을 맞춰주는 작업을 진행한다.
- 이 후 한 쪽은 원본, 한쪽은 Array로 변환하여 순서를 반전시켜 Join 시키는 작업을 진행한 후, 원본 문자열과 같은 문자열이 나타나는지 확인한다.

## 02 - 팰린드롬

- 우선적으로 정규표현식을 사용하여 알파벳만 걸러내는 작업을 진행한다. 이 때, i 속성은 ignore로 알파벳 정규표현식에서 대소문자를 구분하지 않는다는 의미를 가지고, ^는 반전식을 나타낸다.
- 그리고 이전 회문 문자열 검사와 같이 진행해준다.
- 추가적으로 예제의 답에서는 NO로 출력이 됐는데, 이는 i속성을 제거하면 대문자가 제거되기 때문에 NO가 정답이다. 하지만 이전 회문 문자열과 같은 거라면 YES가 나오는 것이 맞다.

## 03 - 숫자만 추출

- 문자열에서 숫자를 추출하는 방법은 정규표현식을 사용했다. 하지만 isNaN를 사용하여 문자열은 true가 나오고 숫자 문자열은 false가 출력되는 점을 이용하기도 하는 것 같다.
- 나는 reverse와 reduce를 사용하여 문제를 해결했는데, parseInt를 사용하면 더 간단히 해결이 가능하다.

## 04 - 가장 짧은 문자거리

- 나는 target들의 index를 파싱한 후, 모든 배열을 순회하면서 가장 가까운 index와의 거리를 출력하도록 구성했는데, for문을 왼쪽부터 오른쪽으로, 오른쪽부터 왼쪽으로 순회하면서 2개의 배열을 구성하고 각 방향별로 가장 가까웠던 인덱스를 파싱하는 방법으로도 해당 문제를 해결할 수 있다.

## 05 - 문자열 압축

- 나는 i를 동적으로 늘려나가는 방법을 사용했는데, 너무 어렵게 생각했던 거 같다. 그냥 일반적으로 for문 돌리면서 count를 변화시키는 방법으로도 가능하다.
