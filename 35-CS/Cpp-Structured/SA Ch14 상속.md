---
title: "SA Ch14 — 상속"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 14
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch13 클래스의 고급 기능]] · [[CS-MOC]]

## 한 줄 요약
상속은 기존 클래스(기반)의 멤버를 새 클래스(파생)가 **물려받아 확장·재정의**하는 코드 재사용 메커니즘. **is-a 관계**를 표현하고, `virtual` 함수를 통해 다형성으로 이어지며, C++ 객체지향의 완성 단계.

---

## 13.1 상속 개념 — is-a 관계
- 상속은 "파생 클래스 **는** 기반 클래스의 일종이다"라는 **is-a** 관계일 때 적합.
  - 예: `Dog` is-a `Animal`, `Circle` is-a `Shape`.
- "가지고 있다(has-a)"는 상속이 아니라 멤버로 포함(합성)해야 한다.
- 공통 속성을 기반 클래스에 모으면 중복 코드가 줄어든다.

## 13.2 기반/파생 클래스 문법
```cpp
class Animal {           // 기반(base) 클래스
protected:
    string name;
public:
    void eat() { cout << name << " eats\n"; }
};

class Dog : public Animal {   // 파생(derived) 클래스
public:
    void bark() { cout << name << " barks\n"; }  // name 상속받음
};
```
- 문법: `class 파생 : 접근지정 기반 { ... };`

## 13.3 접근 지정에 따른 상속
| 상속 방식 | 기반의 public → | 기반의 protected → |
|---|---|---|
| `public` | public 유지 | protected 유지 |
| `protected` | protected | protected |
| `private` | private | private |

- 기반의 `private` 멤버는 **어떤 방식이든 파생에서 직접 접근 불가**(public 함수 통해서만).
- 가장 흔한 것은 is-a를 표현하는 **`public` 상속**.

## 13.4 멤버 상속과 재정의(overriding)
- 파생 클래스는 기반의 멤버 함수를 **같은 이름으로 다시 정의**해 동작을 바꿀 수 있다.
- 기반 버전을 부르려면 `기반::함수()`.
```cpp
class Shape {
public:
    void draw() { cout << "shape\n"; }
};
class Circle : public Shape {
public:
    void draw() {              // 재정의
        Shape::draw();         // 기반 버전 호출
        cout << "circle\n";
    }
};
```

## 13.5 생성자/소멸자 호출 순서
- 객체 생성 시: **기반 생성자 → 파생 생성자** 순.
- 소멸 시: **파생 소멸자 → 기반 소멸자** 순(역순).
```cpp
class Base {
public:
    Base(int x) { cout << "Base\n"; }
};
class Derived : public Base {
public:
    Derived() : Base(10) {     // 초기화 리스트로 기반 생성자 호출
        cout << "Derived\n";
    }
};
// Derived d; → "Base" 다음 "Derived" 출력
```

## 13.6 다형성과 virtual 함수 기초
- 기반 클래스 포인터로 파생 객체를 가리킬 때, **어느 함수가 불릴지**를 실행 시점에 결정 = 동적 바인딩.
- 기반 함수에 `virtual`을 붙여야 파생의 재정의가 호출된다.
```cpp
class Shape {
public:
    virtual void draw() { cout << "shape\n"; }   // virtual
    virtual ~Shape() {}        // 다형 기반 클래스는 가상 소멸자 필요
};
class Circle : public Shape {
public:
    void draw() override { cout << "circle\n"; }
};
Shape* p = new Circle;
p->draw();      // "circle" (virtual 덕분에 동적 바인딩)
delete p;
```
> `virtual`이 없으면 포인터의 정적 타입(`Shape`)대로 불려 "shape"가 출력된다.

## 13.7 단일 상속 vs 다중 상속
- **단일 상속**: 기반 클래스가 하나 — 대부분의 경우 권장.
- **다중 상속**: 둘 이상의 기반 클래스 상속.
```cpp
class C : public A, public B { ... };
```
  - 같은 멤버가 여러 경로로 상속되는 **다이아몬드 문제** 발생 가능 → `virtual` 상속으로 완화. 복잡성 때문에 신중히 사용.

---

## 자주 하는 실수
- 다형성을 기대하면서 기반 함수에 `virtual`을 안 붙임 → 정적 바인딩
- 다형 기반 클래스에 **가상 소멸자**를 안 두어 파생 소멸자 미호출(누수)
- 파생에서 기반 생성자를 초기화 리스트로 호출하지 않아 컴파일 오류(기본 생성자 없는 경우)
- is-a가 아닌 관계(has-a)에 상속을 남용
- 재정의 의도인데 시그니처가 달라 **함수 숨김**이 일어남(`override`로 검출)

## 연습문제
1. `Shape` 기반 클래스에 `virtual double area()`를 두고 `Circle`/`Rectangle`을 파생시켜, 기반 포인터 배열로 면적 합을 구하라.
2. 기반·파생에 생성자/소멸자 출력문을 넣어 호출 순서(생성: 기반→파생, 소멸: 역순)를 확인하라.
3. `protected` 멤버가 파생 클래스에서는 접근되고 외부에서는 막히는 것을 확인하라.
> 힌트: 1번에서 다형성이 동작하려면 기반의 `area()`에 `virtual`이 있어야 한다.

> 모던 C++: 재정의 함수에 `override`를 붙이면 시그니처 불일치로 인한 함수 숨김 버그를 컴파일러가 잡아 준다. → [[모던 C++ 보강 — C++11 이후]]

## 관련 개념
- [[SA Ch12 클래스]] — 상속의 기반이 되는 클래스 개념
- [[SA Ch13 클래스의 고급 기능]] — this/생성자 등 선행 지식
- [[OOP Ch11 클래스 간의 관계]] · [[OOP Ch12 다형성과 그 밖의 이슈]] — 객체지향 트랙의 상속·다형성 심화

## 참고
- Forouzan & Gilberg, *Structured Approach*, Ch. 13
