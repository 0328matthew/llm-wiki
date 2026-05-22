---
title: "SA Ch4 — 함수"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 4
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch03 C++ 프로그램의 구조]] · [[CS-MOC]] · 다음 → [[SA Ch05 선택 — 결정하기]]

## 한 줄 요약
함수는 **하향식 분해(top-down design)**의 도구다. 큰 문제를 작은 함수들로 쪼개고, **매개변수(값/참조)**로 데이터를 주고 **반환값**으로 결과를 받는다. 각 함수는 "하나의 일을 잘하는" 모듈이 되어야 한다.

---

## 4.1 구조적 분해 — 왜 함수인가
- `main`에 모든 코드를 몰아넣으면 읽기·검증·재사용이 어려움
- **하향식 설계**: 문제 → 부분 문제 → 함수로 매핑
- 각 함수는 **단일 책임**: 입력을 받아 한 가지 일을 하고 결과를 돌려줌
- 구조도(structure chart)로 함수 호출 관계를 위에서 아래로 표현

## 4.2 함수 정의와 호출
```cpp
// 정의
double square(double x)   // 반환형 이름(매개변수)
{
    return x * x;          // 반환값
}

int main()
{
    double r = square(3.0);  // 호출, r = 9.0
    return 0;
}
```
- **반환형**: 결과의 자료형. 결과가 없으면 `void`
- **매개변수(parameter)**: 정의 쪽 / **인자(argument)**: 호출 쪽

## 4.3 함수 프로토타입
```cpp
double square(double);   // 프로토타입 (선언) — main 위에
int main() { ... }
double square(double x) { return x*x; }  // 정의 — 아래
```
- 호출 전에 컴파일러가 함수 시그니처를 알아야 함
- 프로토타입 = 인터페이스, 정의 = 구현 → 분리하면 가독성 ↑

## 4.4 매개변수 전달 — 값 vs 참조
```cpp
void byValue(int n)   { n = 99; }       // 복사본 변경 → 원본 영향 없음
void byRef(int& n)    { n = 99; }       // 별칭 → 원본 직접 변경

int main() {
    int a = 1, b = 1;
    byValue(a);   // a == 1
    byRef(b);     // b == 99
}
```
| 방식 | 표기 | 효과 |
|---|---|---|
| 값 전달(pass by value) | `int n` | 복사본, 안전 |
| 참조 전달(pass by reference) | `int& n` | 원본 수정, 다중 출력 가능 |
| const 참조 | `const T& n` | 복사 없이 읽기 전용 |

- 함수에서 **여러 결과**를 돌려줘야 하면 참조 매개변수 사용

## 4.5 범위 규칙(scope)
- **지역 변수(local)**: 함수/블록 안에서만 유효, 호출마다 새로 생성
- **전역 변수(global)**: 파일 전체에서 접근 — 구조적 설계에서는 **지양**(부작용·결합도)
- **블록 범위**: `{ }` 안에서 선언된 변수는 그 블록까지
- 같은 이름의 지역이 전역을 가린다(shadowing)

## 4.6 표준 라이브러리 함수
```cpp
#include <cmath>
double h = sqrt(a*a + b*b);   // 제곱근
double p = pow(2.0, 10);      // 거듭제곱
double x = fabs(-3.5);        // 절댓값
```
- `<cmath>`: `sqrt`, `pow`, `sin`, `log`, `ceil`, `floor` …
- 바퀴를 다시 만들지 말 것 — 검증된 라이브러리 재사용도 구조적 설계의 일부

## 4.7 하향식 모듈화 예
```cpp
double readPositive();              // 입력 담당
double rectangleArea(double, double); // 계산 담당
void   report(double);              // 출력 담당

int main() {
    double w = readPositive(), h = readPositive();
    report(rectangleArea(w, h));
    return 0;
}
```
입력·계산·출력을 분리 → 각 함수를 독립적으로 테스트·교체 가능.

---

## 자주 하는 실수
- 참조(`&`)를 빠뜨려 원본이 안 바뀜 (값 전달이 됨)
- 함수에서 지역 변수의 주소/참조를 반환 (수명 끝난 메모리)
- 프로토타입 없이 아래쪽 정의 함수를 위에서 호출 → 컴파일 오류
- 전역 변수 남발로 함수 간 숨은 결합 발생
- `void` 함수에서 값을 `return`하거나, 반환값 있는 함수에서 `return` 누락

## 연습문제
1. 두 정수의 최대공약수를 구하는 함수 `int gcd(int a, int b)`를 작성하라(유클리드 호제법). `main`에서 호출해 검증하라.
2. 참조 매개변수를 사용해 두 변수의 값을 맞바꾸는 `void swap(int& a, int& b)`를 작성하라. 값 전달로는 왜 안 되는지 설명하라.
3. 입력·계산·출력을 각각의 함수로 분리해, 직사각형의 둘레와 넓이를 구하는 프로그램을 하향식으로 작성하라.
> 힌트: 1번은 `gcd(a, b) = gcd(b, a % b)`이며 `b == 0`일 때 `a`가 답이다.

## 관련 개념
- [[SA Ch01 컴퓨터 입문]] — 하향식 분해 철학
- [[SA Ch05 선택 — 결정하기]] — 함수 안에서의 제어 흐름
- [[OOP Ch06 함수]] — 객체지향 트랙의 같은 주제

## 참고
- Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*, Ch. 4
