---
title: "SA Ch11 — 클래스"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 11
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch10 유도 자료형 — 열거형·구조체·공용체]] · [[CS-MOC]] · 다음 → [[SA Ch12 클래스의 고급 기능]]

## 한 줄 요약
구조체가 **데이터만** 묶었다면, 클래스는 거기에 **함수(동작)와 접근 제어**를 더해 추상 자료형(ADT)을 구현한다. 데이터와 그것을 다루는 연산을 한 단위로 캡슐화하면서, 절차적 사고에서 객체지향으로 넘어가는 전환점.

---

## 11.1 추상 자료형(ADT)에서 클래스로
- **ADT**: "무엇을 하는가(인터페이스)"만 노출하고 "어떻게 하는가(구현)"는 감춘 자료형.
- 절차적 코드에서는 데이터(struct)와 함수가 따로 흩어진다 → 누가 어떤 데이터를 만지는지 추적이 어렵다.
- 클래스는 **데이터 + 연산을 한 캡슐**에 넣어 책임을 명확히 한다.

## 11.2 클래스 선언과 멤버
멤버는 **멤버 변수(데이터)** 와 **멤버 함수(메서드)** 로 나뉜다.
```cpp
class Circle {
private:
    double radius;          // 멤버 변수
public:
    void setRadius(double r);   // 멤버 함수(선언)
    double area();
};
```
- `class` 키워드 + 본문 + 끝의 세미콜론 `;`.
- 객체 생성: `Circle c;` → `c`는 클래스의 인스턴스.

## 11.3 접근 지정자
| 지정자 | 의미 |
|---|---|
| `private` | 클래스 내부에서만 접근 (기본값) |
| `public` | 외부에서 접근 가능 — 인터페이스 |
| `protected` | 자신 + 파생 클래스에서 접근(상속에서 사용) |

```cpp
Circle c;
c.setRadius(2.0);   // public → OK
// c.radius = 5;    // private → 컴파일 오류
```

## 11.4 캡슐화와 정보 은닉
- **캡슐화**: 데이터와 연산을 묶는 것.
- **정보 은닉**: 데이터를 `private`로 두고 `public` 함수로만 접근 → 내부 표현이 바뀌어도 사용자 코드가 안 깨진다.
- 흔한 패턴: getter/setter로 값 검증을 거치게 한다.
```cpp
void Circle::setRadius(double r) {
    if (r > 0) radius = r;   // 유효성 검사 후 대입
}
```

## 11.5 생성자와 소멸자
- **생성자(constructor)**: 객체 생성 시 자동 호출, 클래스 이름과 동일, 반환형 없음.
- **소멸자(destructor)**: 객체 소멸 시 자동 호출, `~클래스명`, 자원 해제 담당.
```cpp
class Circle {
    double radius;
public:
    Circle() : radius(1.0) {}           // 기본 생성자(초기화 리스트)
    Circle(double r) : radius(r) {}     // 매개변수 생성자(오버로드)
    ~Circle() {}                        // 소멸자
};
Circle a;        // 기본 생성자
Circle b(3.0);   // 매개변수 생성자
```

## 11.6 멤버 함수 정의 — 클래스 내부 vs 외부
- **내부 정의**: 짧은 함수, 자동 inline 처리.
- **외부 정의**: `반환형 클래스명::함수명(...)` — 범위 해석 연산자 `::` 사용.
```cpp
// 클래스 외부에서 정의
double Circle::area() {
    return 3.14159 * radius * radius;
}
```

## 11.7 인터페이스와 구현 분리 · struct vs class
- 보통 **선언은 헤더(.h)**, **구현은 소스(.cpp)** 로 나눈다 → 정보 은닉의 물리적 실현.
- `struct`와 `class`의 유일한 문법 차이: **기본 접근 지정자**.
  - `struct` 멤버 기본 `public`, `class` 멤버 기본 `private`.
  - 관례: 단순 데이터 묶음은 struct, 동작과 불변식이 있는 ADT는 class.

---

## 자주 하는 실수
- 클래스 정의 끝의 세미콜론 `;` 누락
- 외부 정의에서 `클래스명::`를 빠뜨려 전역 함수로 정의됨
- 생성자에 반환형(`void` 등)을 붙임 → 일반 함수가 되어버림
- 모든 멤버를 `public`으로 두어 정보 은닉이 무너짐
- 멤버 변수를 생성자에서 초기화하지 않아 쓰레기 값 사용

## 관련 개념
- [[SA Ch10 유도 자료형 — 열거형·구조체·공용체]] — struct가 class의 전신
- [[SA Ch12 클래스의 고급 기능]] — static, friend, 연산자 오버로딩
- [[SA Ch13 상속]] — 클래스 간 is-a 관계

## 참고
- Forouzan & Gilberg, *Structured Approach*, Ch. 11
