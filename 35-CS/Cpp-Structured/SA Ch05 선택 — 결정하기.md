---
title: "SA Ch5 — 선택: 결정하기"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 5
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch04 함수]] · [[CS-MOC]] · 다음 → [[SA Ch06 반복]]

## 한 줄 요약
구조적 프로그래밍의 세 제어 구조 중 **선택(selection)** — 조건의 참/거짓에 따라 흐름을 가른다. **bool**과 **논리식**으로 결정을 표현하고, `if`/`if-else`(two-way), `else-if`/`switch`(multiway)로 분기한다. 순서도의 마름모(판단)를 코드로 옮기는 장.

---

## 5.1 논리 데이터와 bool
- 결정은 결국 **참/거짓**으로 환원된다.
- `bool` 형: `true`(내부적으로 1), `false`(0)
```cpp
bool isAdult = (age >= 18);   // 관계식의 결과를 그대로 저장
if (isAdult) cout << "성인";
```
- 0은 거짓, 0이 아닌 모든 값은 참으로 취급 → `if (n)`은 `if (n != 0)`과 같음

## 5.2 논리·관계 연산자
- **관계**: `< <= > >= == !=` → `bool` 결과
- **논리**: `&&`(AND), `||`(OR), `!`(NOT)
- **단축 평가(short-circuit)**: `&&`는 왼쪽이 거짓이면 멈춤, `||`는 왼쪽이 참이면 멈춤
```cpp
if (n != 0 && total / n > 1)   // n==0일 때 0으로 나눔을 회피
```
- 드모르간: `!(a && b)` == `(!a || !b)`, `!(a || b)` == `(!a && !b)`

## 5.3 two-way 선택 — if / if-else
순서도의 마름모 한 개 = 두 갈래.
```cpp
if (score >= 60)
    cout << "합격";
else
    cout << "불합격";
```
- 조건이 참이면 `if` 블록, 거짓이면 `else` 블록
- 문장이 둘 이상이면 반드시 **블록 `{ }`** 으로 묶기
```cpp
if (x > 0) {
    cout << "양수";
    count++;
}
```

## 5.4 multiway 선택 — else-if 사다리
세 갈래 이상을 위→아래로 순서대로 검사.
```cpp
if (score >= 90)      grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else                  grade = 'F';
```
- 위에서 처음 참이 되는 가지 하나만 실행 → 범위는 **넓은→좁은** 또는 일관된 순서로
- 구조적으로 "구간 분류"에 적합

## 5.5 multiway 선택 — switch
정수/문자 같은 **이산 값**을 분기할 때.
```cpp
switch (menu) {
    case 1:  cout << "신규"; break;
    case 2:  cout << "조회"; break;
    case 3:  cout << "삭제"; break;
    default: cout << "잘못된 선택";
}
```
- `break`가 없으면 다음 case로 **흘러내림(fall-through)**
- `default`는 어떤 case와도 안 맞을 때 — 빠뜨리지 말 것
- 조건이 "어떤 한 변수의 값이 무엇인가"이면 `switch`, 범위 비교이면 `else-if`

## 5.6 중첩 if와 조건 연산자
- **중첩 if**: `if` 안에 또 `if` → 깊어지면 가독성 ↓, 가능하면 `else-if`로 평탄화
- **dangling else**: `else`는 **가장 가까운 짝 없는 `if`**에 붙는다 → 블록으로 의도 명확히
```cpp
if (a > 0)
    if (b > 0) cout << "둘 다 양수";
    else       cout << "a>0, b<=0";   // 안쪽 if에 붙음
```
- **조건(삼항) 연산자**: 간단한 두 갈래를 식 하나로
```cpp
int big = (a > b) ? a : b;   // a>b면 a, 아니면 b
```

---

## 자주 하는 실수
- `==`(비교)를 `=`(대입)으로 — `if (x = 5)`는 항상 참
- `if`/`else` 뒤 여러 문장을 블록으로 안 묶어 첫 줄만 조건에 묶임
- `switch`에서 `break` 누락 → 의도치 않은 fall-through
- 실수(`double`)를 `==`로 직접 비교 → 오차로 어긋남 (차이의 절댓값 비교 사용)
- dangling else를 들여쓰기만 믿고 잘못 짝지음

## 연습문제
1. 세 정수를 입력받아 최댓값을 if-else 중첩으로 구하라.
2. 점수(0~100)를 학점(A~F)으로 변환하라(`switch(score/10)` 또는 else-if 사슬).
3. 입력 연도가 윤년인지 판정하라: 4의 배수이고 (100의 배수가 아니거나 400의 배수).
> 힌트: 2번은 점수를 10으로 나눈 몫으로 구간을 잡으면 switch가 깔끔하다.

## 관련 개념
- [[SA Ch03 C++ 프로그램의 구조]] — 관계·논리식의 평가
- [[SA Ch06 반복]] — 선택을 반복 안에서 사용
- [[OOP Ch04 선택]] — 객체지향 트랙의 같은 주제

## 참고
- Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*, Ch. 5
