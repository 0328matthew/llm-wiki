---
title: "OOP Ch6 — 함수"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 6
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch05 반복]] · [[CS-MOC]] · 다음 → [[OOP Ch07 사용자 정의 자료형 — 클래스]]

## 한 줄 요약
코드를 이름 붙은 단위로 묶는 **함수**: 선언(프로토타입)·정의·호출의 분리, **값/참조/const 참조** 전달 방식의 차이, **오버로딩·디폴트 인자·inline**, 그리고 지역/전역 범위와 변수 생명주기를 다루는 장.

---

## 6.1 선언 · 정의 · 호출
```cpp
double area(double r);          // 프로토타입(선언): 본문 없음, 호출 전 가시화

int main() {
    cout << area(2.0);          // 호출
}

double area(double r) {         // 정의: 실제 본문
    return 3.14159 * r * r;
}
```
- **선언(프로토타입)**은 컴파일러에 시그니처(이름·반환형·매개변수형)를 알려 호출을 검사하게 함.
- 보통 선언은 헤더(`.h`), 정의는 소스(`.cpp`)에 둔다. 정의는 프로그램 전체에서 단 하나(ODR).

## 6.2 매개변수 전달 방식
| 방식 | 문법 | 특징 |
|---|---|---|
| 값 전달 | `void f(int x)` | 인자를 **복사** — 원본 안 변함 |
| 참조 전달 | `void f(int& x)` | 별칭 — 원본 변경 가능 |
| const 참조 | `void f(const T& x)` | 복사 없이 읽기 전용(큰 객체에 효율적) |

```cpp
void inc(int x)        { x++; }          // 호출자에 영향 없음
void inc(int& x)       { x++; }          // 원본 증가
void print(const string& s) { cout << s; } // 복사 회피 + 변경 금지

int n = 5;
inc(n);   // 어느 inc? — 오버로딩 규칙으로 결정(아래)
```
- 큰 객체(`string`, `vector`)는 **`const&`**로 받아 불필요한 복사를 피한다.
- 함수가 인자를 수정해야 하면 참조, 그렇지 않으면 `const&` 또는 값.

## 6.3 반환값
```cpp
int maxOf(int a, int b) { return (a > b) ? a : b; }
void greet() { cout << "hi\n"; return; }   // void는 값 없이 return
```
- 반환형이 `void`가 아니면 모든 경로에서 `return` 필요(아니면 미정의 동작).
- **지역 변수의 참조/주소를 반환하지 말 것** — 함수 종료 시 소멸(dangling).

## 6.4 함수 오버로딩
같은 이름, **다른 매개변수 목록**(개수/형)으로 여러 함수 정의.
```cpp
int    sum(int a, int b)            { return a + b; }
double sum(double a, double b)      { return a + b; }
int    sum(int a, int b, int c)     { return a + b + c; }
```
- 컴파일러가 **인자 타입/개수**로 적합한 버전을 선택(오버로드 해결).
- **반환형만** 다른 오버로딩은 불가 — 시그니처가 같아 모호.

## 6.5 디폴트 인자
```cpp
double power(double base, int exp = 2);   // 선언에서 디폴트 지정

power(3.0);      // exp=2 → 9.0
power(3.0, 3);   // exp=3 → 27.0
```
- 디폴트는 **선언(프로토타입)에 한 번만**, 오른쪽 매개변수부터 채운다.
- 오버로딩과 겹치면 호출이 모호해질 수 있으니 주의.

## 6.6 inline
```cpp
inline int square(int x) { return x * x; }
```
- `inline`은 호출부에 본문을 펼쳐 호출 비용을 줄이도록 컴파일러에 **요청**(강제는 아님).
- 헤더에 함수 정의를 두어도 ODR 위반을 피하게 해주는 용도로도 쓰임.

## 6.7 범위와 생명주기
```cpp
int g = 0;                 // 전역: 프로그램 전체 수명, 파일 범위
void f() {
    int local = 1;         // 지역: 블록 진입 시 생성, 탈출 시 소멸
    static int count = 0;  // 정적 지역: 한 번 초기화, 호출 간 값 유지
    ++count;
}
```
- **지역 변수**는 스택에 잡혀 블록을 벗어나면 사라진다(자동 수명).
- **`static` 지역**은 수명이 프로그램 전체지만 가시성은 블록 내부.
- 전역 변수 남용은 결합도를 높여 권장하지 않음.

## 6.8 재귀 (한 줄)
- 함수가 자기 자신을 호출하는 **재귀**도 가능하며, 반드시 종료(기저) 조건이 필요. 자세한 내용은 [[OOP Ch17 재귀]].

---

## 자주 하는 실수
- 프로토타입 없이 정의보다 위에서 호출 → `not declared` 오류.
- 값 전달인데 원본이 바뀌길 기대(참조 `&` 누락).
- 지역 변수의 참조/주소 반환 → dangling reference.
- 반환형만 다른 오버로딩 시도 → 모호성 오류.
- 디폴트 인자를 선언과 정의 양쪽에 중복 지정 → 재정의 오류.
- 큰 객체를 값으로 받아 불필요한 복사 비용 발생.

## 연습문제
1. 세 정수 중 최댓값을 반환하는 `int max3(int, int, int)`를 작성하라.
2. 값 전달 `swap`과 참조 전달 `swap`을 각각 만들고, 호출 후 원본이 바뀌는지 비교하라.
3. 디폴트 인자를 가진 `double power(double base, int exp = 2)`를 작성하고 오버로딩과의 모호성을 설명하라.
> 힌트: 2번에서 값 전달은 복사본만 바꾸므로 원본은 그대로다.

## 관련 개념
- [[OOP Ch05 반복]] — 반복 로직을 함수로 캡슐화
- [[OOP Ch07 사용자 정의 자료형 — 클래스]] — 데이터와 함수를 묶는 다음 단계
- [[SA Ch04 함수]] — 구조적 접근 트랙의 같은 주제(하향식 분해)

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 6
