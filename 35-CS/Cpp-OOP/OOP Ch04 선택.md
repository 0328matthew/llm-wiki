---
title: "OOP Ch4 — 선택"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 4
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch03 표현식과 문장]] · [[CS-MOC]] · 다음 → [[OOP Ch05 반복]]

## 한 줄 요약
조건(`bool` 표현식)에 따라 실행 흐름을 가르는 **선택문**: `if`/`if-else`/중첩/`else-if` 사슬, 다중 분기용 `switch`, 그리고 삼항 연산자까지. 핵심 함정은 `=` vs `==`.

---

## 4.1 논리값과 조건
- 조건은 `bool`로 평가됨. C++에서 **0은 거짓, 0이 아니면 참**
```cpp
if (n)       { /* n != 0 일 때 */ }
if (n != 0)  { /* 위와 동일, 의도가 명확 */ }
```
- 관계/논리 연산자가 조건을 만든다 (Ch3 참조)

## 4.2 if / if-else
```cpp
if (score >= 60)
    cout << "합격\n";
else
    cout << "불합격\n";
```
- 본문이 한 문장이면 중괄호 생략 가능하지만 **항상 `{}` 사용 권장**(버그 예방)
- 블록 `{}` 안에서 선언한 변수는 그 블록 안에서만 유효(**블록 범위**)

## 4.3 중첩 if 와 else-if 사슬
```cpp
if (score >= 90)      grade = 'A';
else if (score >= 80) grade = 'B';
else if (score >= 70) grade = 'C';
else                  grade = 'F';
```
- `else`는 **가장 가까운 짝 없는 `if`**에 결합(dangling else)
```cpp
if (a)
    if (b) x();
    else   y();   // 이 else는 안쪽 if(b)에 붙음! 들여쓰기에 속지 말 것
```

## 4.4 switch-case 와 fall-through
```cpp
switch (menu) {        // menu는 정수/문자/열거형
    case 1:
        cout << "신규\n";
        break;         // 없으면 다음 case로 흘러감(fall-through)
    case 2:
    case 3:            // 2와 3 동일 처리
        cout << "수정\n";
        break;
    default:
        cout << "알 수 없음\n";
}
```
- `case` 라벨은 **상수**여야 함(범위·실수 불가)
- `break`를 빠뜨리면 의도치 않은 fall-through — 가장 흔한 실수

## 4.5 조건(삼항) 연산자
```cpp
int max = (a > b) ? a : b;   // 조건 ? 참값 : 거짓값
cout << (n % 2 ? "홀수" : "짝수");
```
- 값을 만들어내는 **표현식**이라 대입·출력에 바로 쓸 수 있음
- 복잡한 로직은 `if`로 — 삼항 중첩은 가독성 저하

## 4.6 블록 범위와 초기화 in if
```cpp
if (int r = compute(); r > 0) {   // C++17: 조건문 안에서 선언
    use(r);
}                                  // r은 여기서 소멸
```
- 변수 수명을 필요한 범위로 좁히면 실수와 이름 오염이 준다

---

## 자주 하는 실수
- `if (x = 5)` — 대입 후 항상 참. 비교는 `==`
- `switch`에서 `break` 누락으로 인한 fall-through
- dangling else 결합을 들여쓰기로 착각
- 부동소수 비교 `if (x == 0.1)` — 오차로 거짓일 수 있음, 허용오차 사용
- `case` 라벨에 변수/실수 사용 시도

## 연습문제
1. 점수(0~100)를 입력받아 90/80/70/60 기준으로 A~F 학점을 출력하는 `else-if` 사슬을 작성하라.
2. 메뉴 번호(1~3)를 받아 `switch`로 처리하되, 2와 3은 같은 동작을 하도록 fall-through를 활용하라.
3. `if (x = 5)`가 항상 참이 되는 이유를 설명하고 올바른 비교문으로 고쳐라.
> 힌트: 1번은 큰 값부터 검사해야 사슬이 정확하게 갈린다.

## 관련 개념
- [[OOP Ch03 표현식과 문장]] — 조건을 만드는 관계·논리 연산
- [[OOP Ch05 반복]] — 조건을 반복 제어에 사용
- [[SA Ch05 선택 — 결정하기]] — 구조적 접근 트랙의 같은 주제

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 4
