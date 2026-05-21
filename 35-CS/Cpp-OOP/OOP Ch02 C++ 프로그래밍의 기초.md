---
title: "OOP Ch2 — C++ 프로그래밍의 기초"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 2
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch01 컴퓨터와 프로그래밍 언어]] · [[CS-MOC]] · 다음 → [[OOP Ch03 표현식과 문장]]

## 한 줄 요약
첫 프로그램의 뼈대(`#include`, `main`, `return`)부터 **토큰 → 자료형 → 변수/상수 → 입출력**까지, C++ 소스를 구성하는 가장 작은 부품들을 익히는 장.

---

## 2.1 첫 번째 프로그램
```cpp
#include <iostream>   // 입출력 라이브러리 선언
using namespace std;  // std:: 생략을 위함

int main()
{
    cout << "Hello, world!" << endl;
    return 0;         // 정상 종료를 OS에 알림
}
```
- `#include <iostream>`: 전처리기가 헤더 내용을 끌어옴 (`cin`, `cout` 정의)
- `int main()`: 프로그램 진입점. 운영체제가 가장 먼저 호출
- `return 0;`: 종료 상태 코드. 0은 성공, 비0은 오류 관례

## 2.2 토큰 — 식별자·키워드·리터럴
컴파일러가 인식하는 최소 단위가 **토큰(token)**.
- **키워드(keyword)**: `int`, `return`, `if`, `class` … 언어 예약어, 재정의 불가
- **식별자(identifier)**: 이름. 규칙 — 글자/`_`로 시작, 숫자 포함 가능, 대소문자 구분
  - `score`와 `Score`는 다른 이름
- **리터럴(literal)**: `42`, `3.14`, `'A'`, `"text"`, `true`
- **연산자/구두점**: `+`, `;`, `{}` 등

## 2.3 기본 자료형
| 자료형 | 의미 | 예 | 대략 크기 |
|---|---|---|---|
| `int` | 정수 | `int n = 10;` | 4바이트 |
| `double` | 실수(배정도) | `double x = 3.14;` | 8바이트 |
| `char` | 문자 1개 | `char c = 'A';` | 1바이트 |
| `bool` | 참/거짓 | `bool ok = true;` | 1바이트 |

- `char`는 내부적으로 정수(아스키 코드). `'A'`는 65
- 정수 오버플로 주의: `int`는 약 ±21억 범위

## 2.4 변수 선언과 초기화
```cpp
int a;          // 선언만 — 쓰레기값
int b = 5;      // 복사 초기화
int c(5);       // 직접 초기화
int d{5};       // 중괄호(균일) 초기화 — 좁힘 변환 차단
```
> 선언만 하고 값을 안 넣은 지역변수를 읽으면 **미정의 동작**. 항상 초기화 습관.

## 2.5 상수 — const
```cpp
const double PI = 3.14159;
PI = 3.0;   // 컴파일 오류: const는 변경 불가
```
- 변하면 안 되는 값에 `const`를 붙여 의도를 코드로 못박음
- 전처리기 `#define PI 3.14`보다 `const`가 타입 안전해서 권장

## 2.6 입출력 — cin / cout
```cpp
int age;
cout << "나이? ";       // << : 삽입(출력) 연산자
cin  >> age;            // >> : 추출(입력) 연산자
cout << "내년: " << age + 1 << endl;
```
- `<<`는 왼쪽으로 흘려 출력, `>>`는 오른쪽 변수로 추출
- 여러 값 연쇄 가능: `cout << a << " " << b;`
- `endl`은 줄바꿈 + 버퍼 플러시, `'\n'`은 줄바꿈만(더 빠름)

## 2.7 주석과 네임스페이스
```cpp
// 한 줄 주석
/* 여러 줄
   주석 */
std::cout << "ns 명시";   // using 없이 직접 한정
```
- `cout`, `cin`, `endl`은 모두 `std` 네임스페이스 소속
- `using namespace std;`는 편하지만 큰 프로젝트에서는 이름 충돌 위험 → `std::` 명시 선호

---

## 자주 하는 실수
- 초기화 안 한 변수를 읽고 "왜 이상한 값?" — 쓰레기값
- `cin >> x`에서 `<<`/`>>` 방향 혼동
- 정수 나눗셈 `5/2 == 2` — 실수가 필요하면 `5.0/2`
- `endl`을 루프마다 남발해 성능 저하 (잦은 플러시)
- 문자 `'A'`(작은따옴표)와 문자열 `"A"`(큰따옴표) 혼동

## 관련 개념
- [[OOP Ch01 컴퓨터와 프로그래밍 언어]] — 컴파일 파이프라인
- [[OOP Ch03 표현식과 문장]] — 변수·리터럴로 식을 만드는 단계

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 2
