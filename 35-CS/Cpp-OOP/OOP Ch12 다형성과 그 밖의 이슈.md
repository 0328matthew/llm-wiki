---
title: "OOP Ch12 — 다형성과 그 밖의 이슈"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 12
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch11 클래스 간의 관계]] · [[CS-MOC]] · 다음 → [[OOP Ch13 연산자 오버로딩]]

## 한 줄 요약
**다형성(polymorphism)** = "하나의 인터페이스, 여러 구현". 베이스 포인터/참조로 파생 객체를 가리킨 채 `virtual` 함수를 호출하면 **실행 시점**에 실제 객체의 함수가 선택된다(동적 바인딩). 추상 클래스·가상 소멸자·슬라이싱이 이 장의 핵심 이슈.

---

## 12.1 정적 바인딩 vs 동적 바인딩
- **정적 바인딩(static / early binding)**: 호출할 함수를 **컴파일 시점**에 결정. 일반 멤버 함수의 기본 동작.
- **동적 바인딩(dynamic / late binding)**: 호출 함수를 **실행 시점**에 객체의 실제 타입으로 결정. `virtual` 함수 + 포인터/참조 호출에서 발생.
- 컴파일러는 가상 함수 테이블(vtable)과 vptr를 두어 런타임에 올바른 함수를 찾는다.

```cpp
class Shape {
public:
    virtual double area() const { return 0.0; }   // virtual → 동적 바인딩 대상
    virtual ~Shape() {}                            // 가상 소멸자
};
class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() const override { return 3.14159 * r * r; }
};
```

## 12.2 베이스 포인터/참조로 파생 객체 다루기
```cpp
Shape* s = new Circle(2.0);
std::cout << s->area();   // 동적 바인딩 → Circle::area() 호출 (12.566)
delete s;
```
- 포인터/참조여야 다형성이 작동한다. **값(value)** 으로 받으면 정적 타입으로 고정된다.
- 서로 다른 파생 객체를 `Shape*` 배열·컨테이너에 담아 일관되게 처리할 수 있다.

## 12.3 추상 클래스와 순수 가상 함수
- **순수 가상 함수**: 본문 없이 `= 0`. 파생 클래스가 반드시 재정의해야 함.
- 순수 가상 함수를 하나라도 가지면 **추상 클래스** → 객체 생성 불가, 인터페이스 역할.

```cpp
class Shape {
public:
    virtual double area() const = 0;   // 순수 가상 → Shape는 추상 클래스
    virtual ~Shape() = default;
};
// Shape s;            // 오류: 추상 클래스는 인스턴스화 불가
Shape* p = new Circle(1.0);  // OK
```

## 12.4 가상 소멸자
- 베이스 포인터로 파생 객체를 `delete`할 때 소멸자가 **virtual이 아니면** 베이스 소멸자만 호출 → 파생 자원 누수.
- 다형적으로 쓰일 베이스 클래스의 소멸자는 **항상 virtual**로 선언한다.

## 12.5 오버라이딩 vs 오버로딩, override / final
| 구분 | 오버로딩(overloading) | 오버라이딩(overriding) |
|---|---|---|
| 위치 | 같은 스코프 | 베이스 ↔ 파생 |
| 시그니처 | 매개변수 **다름** | 시그니처 **동일** |
| 결합 | 정적(컴파일 시) | 동적(virtual일 때) |

- `override`: 베이스의 가상 함수를 진짜로 재정의하는지 컴파일러가 검사 → 오타로 인한 새 함수 생성 방지.
- `final`: 더 이상 재정의/상속 금지.

```cpp
double area() const override final;   // 재정의 확인 + 이후 재정의 금지
```

---

## 자주 하는 실수
- 소멸자를 `virtual`로 안 만들어 베이스 포인터 `delete` 시 자원 누수.
- **슬라이싱(slicing)**: 파생 객체를 베이스 객체에 **값으로** 대입/전달하면 파생 부분이 잘려나간다. 포인터/참조로 전달해 해결.
- `virtual`을 빼먹어 동적 바인딩이 안 되는데 다형성이 작동한다고 착각.
- 시그니처가 미세하게 달라(예: `const` 누락) 오버라이딩이 아닌 새 함수가 됨 → `override`로 방지.

```cpp
void draw(Shape s);    // 슬라이싱 발생: Circle을 넘기면 Shape로 잘림
void draw(Shape& s);   // 올바름: 참조로 받아 다형성 유지
```

## 연습문제
1. `Shape` 기반 클래스에 `virtual double area()`를 두고 `Circle`/`Rectangle`을 파생시켜, 기반 포인터 배열로 면적을 출력하라.
2. 위에서 `virtual`을 떼면 출력이 어떻게 달라지는지 직접 확인하고 이유를 설명하라.
3. 순수 가상 함수(`= 0`)로 추상 클래스를 만들고, 구현하지 않은 파생 클래스를 인스턴스화하려 할 때의 컴파일 오류를 관찰하라.
> 힌트: 2번은 정적 바인딩 → 포인터의 선언 타입대로 호출된다.

## 관련 개념
- [[OOP Ch11 클래스 간의 관계]] — 상속이 다형성의 토대
- [[OOP Ch13 연산자 오버로딩]] — 컴파일 타임 다형성의 한 형태
- [[SA Ch14 상속]] — 구조적 접근 트랙의 virtual·다형성 기초
- [[모던 C++ 보강 — C++11 이후]] — `override`/`final`로 재정의 실수를 컴파일러가 잡음

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 12
