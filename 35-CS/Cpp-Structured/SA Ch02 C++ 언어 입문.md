---
title: "SA Ch2 — C++ 언어 입문"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 2
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch01 컴퓨터 입문]] · [[CS-MOC]] · 다음 → [[SA Ch03 C++ 프로그램의 구조]]

## 한 줄 요약
C++ 프로그램의 **뼈대**(`#include` → `main` → 문장)를 익히고, **식별자·토큰·기본 자료형·변수·상수·입출력**으로 데이터를 담고 주고받는 법을 배운다. 알고리즘의 "데이터" 부분을 코드로 옮기는 첫 단계.

---

## 2.1 첫 C++ 프로그램의 기본 구조
```cpp
#include <iostream>      // 전처리: 입출력 라이브러리
using namespace std;

int main()
{
    cout << "Hello, World!" << endl;  // 출력 문장
    return 0;                          // 정상 종료
}
```
- 모든 실행은 `main`에서 시작
- 문장(statement)은 `;`로 끝남
- `{ }`는 블록(코드 묶음)

## 2.2 토큰 — 프로그램의 최소 단위
컴파일러가 인식하는 단위:
- **키워드(keyword)**: `int`, `return`, `if` … 언어가 예약 (식별자로 못 씀)
- **식별자(identifier)**: 이름. 규칙 = 글자/`_`로 시작, 숫자 가능, 공백·특수문자·키워드 불가, 대소문자 구분
- **리터럴/상수**: `42`, `3.14`, `'A'`, `"text"`
- **연산자·구두점**: `+`, `=`, `;`, `( )`

## 2.3 기본 자료형 (built-in types)
| 형 | 용도 | 예 |
|---|---|---|
| `int` | 정수 | `-3, 0, 100` |
| `double` | 실수(배정밀도) | `3.14` |
| `char` | 문자 1개 | `'A'` |
| `bool` | 참/거짓 | `true, false` |
- 자료형은 **메모리 크기 + 표현 범위 + 허용 연산**을 결정

## 2.4 변수와 상수
```cpp
int count = 0;            // 변수: 값이 바뀜
const double PI = 3.14159; // 상수: 한 번 정하면 불변
double radius;            // 선언만, 초기화 X → 쓰레기값 주의
radius = 2.5;             // 대입
```
- **변수**: 이름 붙은 메모리 공간. 선언 시 초기화 권장
- **상수**: `const`로 고정 → 의미 명확 + 실수 방지
- 좋은 변수명은 알고리즘 단계를 그대로 읽히게 한다

## 2.5 입출력 — cin / cout
```cpp
#include <iostream>
using namespace std;

int main()
{
    int age;
    cout << "나이를 입력: ";   // 출력: << (삽입)
    cin  >> age;                // 입력: >> (추출)
    cout << "내년엔 " << age + 1 << "살" << endl;
    return 0;
}
```
- `cout <<` 출력, `cin >>` 입력, `endl` 줄바꿈 + 버퍼 비움
- 여러 값 연쇄: `cin >> a >> b;`, `cout << x << " " << y;`

## 2.6 형변환 (type conversion)
- **암시적(승격)**: `int`가 `double` 자리에 오면 자동 변환
  ```cpp
  double avg = 7 / 2;    // 7/2는 정수 나눗셈 → 3.0 (주의!)
  double avg2 = 7.0 / 2; // 3.5
  ```
- **명시적(캐스트)**:
  ```cpp
  int a = 7, b = 2;
  double avg = static_cast<double>(a) / b;  // 3.5
  ```

---

## 자주 하는 실수
- 정수끼리 나눗셈 후 `double`에 담으면서 소수점이 사라짐을 놓침 (`7/2 == 3`)
- 변수 초기화 안 하고 사용 → 쓰레기값
- `cin >>`은 공백을 구분자로 처리 → 문자열 한 줄 입력엔 부적합
- 식별자에 키워드·공백 사용 시도

## 관련 개념
- [[SA Ch03 C++ 프로그램의 구조]] — 표현식·연산자로 데이터 가공
- [[SA Ch07 텍스트 입출력]] — 스트림·포매팅 심화

## 참고
- Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*, Ch. 2
