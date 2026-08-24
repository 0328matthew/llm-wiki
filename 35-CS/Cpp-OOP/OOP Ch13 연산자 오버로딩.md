---
title: "OOP Ch13 — 연산자 오버로딩"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 13
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch12 다형성과 그 밖의 이슈]] · [[CS-MOC]] · 다음 → [[OOP Ch14 예외 처리]]

## 한 줄 요약
**연산자 오버로딩**은 `+`, `<<`, `[]` 같은 기존 연산자에 사용자 정의 타입용 의미를 부여하는 것. `operator연산자` 이름의 함수로 구현하며, **멤버 함수**와 **비멤버(friend) 함수** 두 형태가 있다. 직관을 해치지 않게 쓰는 것이 핵심.

---

## 13.1 개념과 제한
- 문법: `반환형 operator@(매개변수)` 형태의 함수 정의.
- **할 수 없는 것**:
  - 새 연산자 만들기(`**` 같은 것 불가)
  - 우선순위·결합성·피연산자 개수 변경 불가
  - `::`, `.`, `.*`, `?:`, `sizeof`는 오버로딩 불가
  - 모든 피연산자가 기본 타입인 연산자는 재정의 불가(최소 1개는 사용자 타입)

## 13.2 멤버 vs 비멤버(friend)
- **멤버 함수**: 좌측 피연산자가 곧 `*this`. 매개변수가 하나 줄어든다.
- **비멤버(friend)**: 좌측 피연산자가 클래스 타입이 아니어도 됨(예: `2 * v`). private 접근이 필요하면 `friend`.

```cpp
class Complex {
    double re, im;
public:
    Complex(double r = 0, double i = 0) : re(r), im(i) {}
    // 멤버: 좌측 피연산자 = *this
    Complex operator+(const Complex& o) const {
        return Complex(re + o.re, im + o.im);
    }
    friend Complex operator*(double k, const Complex& c);   // 비멤버
    friend std::ostream& operator<<(std::ostream&, const Complex&);
};
Complex operator*(double k, const Complex& c) {
    return Complex(k * c.re, k * c.im);   // 2 * c 형태 지원
}
```

## 13.3 단항·이항 연산자
- **이항**: `+ - * / == <` 등 → 보통 새 객체 반환, `const` 멤버로.
- **단항**: `-x`(부호), `!x`, 전위 `++x`(`operator++()`), 후위 `x++`(`operator++(int)` — 더미 int로 구분).

```cpp
Complex operator-() const { return Complex(-re, -im); }   // 단항 마이너스
Complex& operator++()      { ++re; return *this; }        // 전위
Complex  operator++(int)   { Complex t = *this; ++re; return t; } // 후위
```

## 13.4 스트림 연산자 `<<` / `>>`
- 좌측 피연산자가 `std::ostream&`이므로 **반드시 비멤버**로 작성.
- 연쇄(`cout << a << b`)를 위해 스트림 참조를 반환한다.

```cpp
std::ostream& operator<<(std::ostream& os, const Complex& c) {
    os << c.re << " + " << c.im << "i";
    return os;            // 연쇄 가능하게 스트림 반환
}
```

## 13.5 대입·첨자·변환 연산자
- **대입 `operator=`**: 자기 대입 검사 후 깊은 복사, `*this` 반환(연쇄용). Rule of Three와 연관.
- **첨자 `operator[]`**: 보통 const/비const 두 버전. 비const는 참조를 반환해 대입 가능.
- **변환 연산자**: `operator double() const`처럼 다른 타입으로의 암시적 변환 정의.

```cpp
double& operator[](int i)       { return data[i]; }
double  operator[](int i) const { return data[i]; }
explicit operator double() const { return re; }   // explicit로 의도치 않은 변환 방지
```

---

## 자주 하는 실수
- `<<`/`>>`를 멤버로 만들어 `cout << obj`가 컴파일 안 됨 → 비멤버로.
- `operator=`에서 자기 대입 미검사 → 자기 자신 복사 시 자원 손상.
- 스트림/대입 연산자에서 참조 반환을 빼먹어 연쇄 불가.
- 후위 `++`를 더미 `int` 없이 정의해 전위와 구분 안 됨.
- 직관에 어긋나는 의미 부여(`+`가 빼기처럼 동작) → 가독성 파괴.

## 연습문제
1. `Complex`(실수부·허수부) 클래스에 `operator+`와 `operator<<`(출력)를 정의하라.
2. `operator==`를 멤버 함수와 friend 비멤버 함수 두 방식으로 구현하고 차이를 설명하라.
3. `operator[]`를 오버로딩해 범위를 검사하는 안전한 정수 배열 래퍼를 만들어라.
> 힌트: `<<`는 좌변이 `ostream`이므로 멤버가 아닌 friend 비멤버로 정의한다.

## 관련 개념
- [[OOP Ch12 다형성과 그 밖의 이슈]] — 컴파일 타임 다형성의 한 종류
- [[OOP Ch16 입출력 스트림]] — `<<`/`>>` 오버로딩의 실전 무대
- [[SA Ch13 클래스의 고급 기능]] — 구조적 접근 트랙의 연산자 오버로딩

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 13
