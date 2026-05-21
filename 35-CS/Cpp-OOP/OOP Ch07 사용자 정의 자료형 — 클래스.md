---
title: "OOP Ch7 — 사용자 정의 자료형: 클래스"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 7
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch06 함수]] · [[CS-MOC]] · 다음 → [[OOP Ch08 배열]]

## 한 줄 요약
**클래스**는 데이터(멤버 변수)와 그 데이터를 다루는 동작(멤버 함수)을 하나로 묶은 사용자 정의 자료형. **접근지정자**로 정보를 은닉하고, **생성자/소멸자**로 객체의 생애주기를 관리하며, 인터페이스(헤더)와 구현(.cpp)을 분리하는 것이 OOP의 출발점.

---

## 7.1 클래스 정의 — `class` 와 `struct`
- `class`와 `struct`는 거의 동일하나 **기본 접근지정자**가 다름: `class`는 `private`, `struct`는 `public`.
- 멤버 변수(상태) + 멤버 함수(행위)를 함께 선언.

```cpp
class Circle {
private:
    double radius;          // 멤버 변수 (상태)
public:
    void setRadius(double r);   // 멤버 함수 (행위)
    double area() const;        // 상태를 안 바꾸면 const
};
```
- `const` 멤버 함수는 객체의 상태를 변경하지 않음을 컴파일러에 약속.

## 7.2 접근지정자와 캡슐화
| 지정자 | 외부 접근 | 파생 클래스 |
|---|---|---|
| `public` | O | O |
| `protected` | X | O |
| `private` | X | X |

- **캡슐화(encapsulation)**: 데이터와 동작을 묶음.
- **정보 은닉(information hiding)**: 내부 표현(`private`)을 감추고 공개 인터페이스(`public`)로만 접근 → 내부 변경이 사용자 코드에 파급되지 않음.

```cpp
void Circle::setRadius(double r) {
    if (r >= 0) radius = r;     // 유효성 검사를 한 곳에서 보장
}
```

## 7.3 생성자와 소멸자
- **생성자(constructor)**: 객체 생성 시 자동 호출, 이름은 클래스명과 동일, 반환형 없음.
  - **기본 생성자**: 인자 없음
  - **매개변수 생성자**: 초기값 받음 (멤버 초기화 리스트 권장)
  - **복사 생성자**: 같은 타입 객체로부터 초기화 `Circle(const Circle&)`
- **소멸자(destructor)** `~Circle()`: 객체 소멸 시 자동 호출, 자원 해제 담당.

```cpp
class Circle {
    double radius;
public:
    Circle() : radius(0) {}                 // 기본
    Circle(double r) : radius(r) {}         // 매개변수
    Circle(const Circle& c) : radius(c.radius) {} // 복사
    ~Circle() {}                            // 소멸자
};
```
> 멤버 초기화 리스트(`: radius(r)`)는 본문 대입보다 효율적이고, `const`/참조 멤버는 이 방식만 가능.

## 7.4 `this` 포인터와 객체 생성
- 모든 비정적 멤버 함수에는 자신을 가리키는 `this` 포인터가 암묵적으로 전달됨.

```cpp
void Circle::setRadius(double radius) {
    this->radius = radius;   // 매개변수와 멤버 이름이 같을 때 구분
}

Circle c1;            // 기본 생성자
Circle c2(5.0);       // 매개변수 생성자
Circle c3 = c2;       // 복사 생성자
c1.setRadius(3.0);    // 멤버 함수 호출
```

## 7.5 헤더/구현 분리 — 인터페이스 vs 구현
- **헤더(.h)**: 클래스 선언 = 인터페이스(무엇을 하는가).
- **구현(.cpp)**: 멤버 함수 정의 = 구현(어떻게 하는가). 범위 연산자 `::` 사용.

```cpp
// circle.h
#ifndef CIRCLE_H
#define CIRCLE_H
class Circle {
    double radius;
public:
    Circle(double r);
    double area() const;
};
#endif
```
```cpp
// circle.cpp
#include "circle.h"
Circle::Circle(double r) : radius(r) {}
double Circle::area() const { return 3.14159 * radius * radius; }
```
- **인클루드 가드**(`#ifndef`)로 중복 포함 방지.

---

## 자주 하는 실수
- 생성자에 반환형(`void` 등)을 붙임 → 컴파일 오류.
- `private` 멤버를 외부에서 직접 접근하려다 오류 — 공개 접근자(getter/setter) 필요.
- 멤버 함수 정의 시 `::` 빼먹어 자유 함수로 정의됨.
- `const` 멤버 함수 안에서 멤버를 수정하려 함.
- 헤더에서 인클루드 가드 누락 → 다중 정의 링커 오류.

## 관련 개념
- [[OOP Ch06 함수]] — 멤버 함수도 함수, 매개변수 전달 규칙 동일
- [[OOP Ch08 배열]] — 객체를 배열로 모아 관리

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 7
