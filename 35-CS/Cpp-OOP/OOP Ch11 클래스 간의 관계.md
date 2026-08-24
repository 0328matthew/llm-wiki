---
title: "OOP Ch11 — 클래스 간의 관계"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 11
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch10 문자열]] · [[CS-MOC]] · 다음 → [[OOP Ch12 다형성과 그 밖의 이슈]]

## 한 줄 요약
클래스끼리 맺는 관계는 **연관·집합·구성**(has-a 계열)과 **상속**(is-a)으로 나뉜다. 상속은 `class B : public A` 문법으로 기반 클래스의 멤버를 물려받는다. 객체 생성 시 **기반 → 파생** 순으로 생성자가 호출되고, 소멸은 그 역순이다.

---

## 11.1 관계의 종류
| 관계 | 의미 | 관계명 | 수명 종속 |
|---|---|---|---|
| 연관(association) | 서로 안다/사용한다 | uses-a | 독립 |
| 집합(aggregation) | 전체-부분, 부분은 독립 | has-a | 약함 |
| 구성(composition) | 전체-부분, 부분이 전체에 종속 | has-a | 강함 |
| 상속(inheritance) | 일종이다 | is-a | — |

- **집합 vs 구성**: 대학(Department)이 사라져도 교수(Professor)는 남으면 집합, 자동차(Car)가 사라지면 엔진(Engine)도 사라지면 구성.

## 11.2 has-a — 구성(composition)
다른 클래스의 객체를 멤버로 가진다.
```cpp
class Engine {
public:
    Engine() { /* 초기화 */ }
};
class Car {
    Engine engine;   // Car는 Engine을 "가진다"(has-a)
public:
    Car() {}         // engine이 먼저 자동 생성됨
};
```
- 멤버 객체는 둘러싼 객체보다 **먼저** 생성되고 **나중에** 소멸된다.

## 11.3 상속 문법 — is-a
파생 클래스가 기반 클래스를 물려받는다.
```cpp
class Animal {                 // 기반(base) 클래스
protected:
    std::string name;
public:
    void eat() { /* ... */ }
};
class Dog : public Animal {    // 파생(derived) 클래스
public:
    void bark() { /* name 사용 가능 */ }
};
```
- `Dog`는 `Animal`의 `eat()`과 `name`을 그대로 물려받는다 → "Dog **is-a** Animal".

## 11.4 멤버 상속과 접근
상속 방식에 따라 기반 멤버의 접근 등급이 바뀐다.
| 기반 멤버 | public 상속 | protected 상속 | private 상속 |
|---|---|---|---|
| public | public | protected | private |
| protected | protected | protected | private |
| private | 접근 불가 | 접근 불가 | 접근 불가 |

- 기반의 `private` 멤버는 **상속은 되지만** 파생 클래스에서 직접 접근할 수 없다 → `protected`나 public 함수로 접근.
- 대개 **public 상속**을 써서 is-a 관계를 표현한다.

## 11.5 생성자 호출 순서
파생 객체를 만들면 다음 순서로 진행된다.
1. **기반 클래스 생성자**
2. **멤버 객체 생성자**(선언 순서)
3. **파생 클래스 생성자 본문**

소멸은 정확히 **역순**이다.
```cpp
class Base {
public:
    Base(int x) { /* ... */ }
};
class Derived : public Base {
public:
    Derived(int x, int y) : Base(x) {   // 기반 생성자 명시 호출
        // 파생 본문
    }
};
```
- 기반에 기본 생성자가 없으면 파생 생성자의 **초기화 리스트에서 기반 생성자를 반드시 호출**해야 한다.

## 11.6 is-a vs has-a 선택
- "B가 A의 일종인가?" → 그렇다면 **상속**(`Dog : public Animal`).
- "B가 A를 부품으로 가지는가?" → 그렇다면 **구성/집합**(멤버로 보유).
- 의심스러우면 상속보다 **구성을 선호**한다(결합도 낮음).

---

## 자주 하는 실수
- has-a 관계를 상속으로 잘못 모델링(예: `Car : public Engine`) — 구성으로 해야 함.
- 파생 클래스에서 기반의 `private` 멤버를 직접 쓰려다 컴파일 오류.
- 기반 생성자에 인자가 필요한데 파생 초기화 리스트에서 호출하지 않음.
- 생성자 호출 순서를 거꾸로 기대(파생 본문이 기반보다 먼저 실행된다고 착각).
- `protected`를 남발해 캡슐화를 약화시킴.

## 연습문제
1. `Engine`을 멤버로 가진 `Car`(has-a, 구성)와, `Vehicle`을 상속한 `Car`(is-a)를 각각 설계하고 차이를 설명하라.
2. 구성 관계에서 바깥 객체 생성 시 내부 멤버 객체의 생성자가 먼저 호출됨을 출력으로 확인하라.
3. 어떤 관계를 상속으로, 어떤 관계를 멤버 포함으로 모델링해야 하는지 예 2개씩 들어라.
> 힌트: "A는 B다"가 자연스러우면 상속, "A는 B를 가진다"면 구성.

## 관련 개념
- [[OOP Ch10 문자열]] — std::string을 멤버로 갖는 구성 관계 예
- [[OOP Ch12 다형성과 그 밖의 이슈]] — 상속을 기반으로 한 가상 함수·다형성
- [[SA Ch14 상속]] — 구조적 접근 트랙의 상속 설명

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 11
