---
title: "OOP Ch17 — 재귀"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 17
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch16 입출력 스트림]] · [[CS-MOC]] · 다음 → [[OOP Ch18 자료구조 입문]]

## 한 줄 요약
**재귀(recursion)**는 함수가 자기 자신을 호출해 문제를 더 작은 같은 모양의 부분문제로 줄여 푸는 기법. 핵심은 **기저 사례(base case) + 재귀 사례(recursive case)**이고, 동작은 **호출 스택**으로 이해한다.

---

## 17.1 재귀의 정의
재귀 함수는 반드시 두 부분을 가진다.
- **기저 사례(base case)**: 더 이상 자기 자신을 부르지 않고 직접 답을 주는 경우 — 재귀의 종료 조건
- **재귀 사례(recursive case)**: 더 작은 입력으로 자신을 호출하고 그 결과를 조합

```cpp
long factorial(int n) {
    if (n <= 1) return 1;       // 기저 사례
    return n * factorial(n - 1); // 재귀 사례
}
```
재귀 사례는 매 호출마다 입력이 **기저 사례 쪽으로 수렴**해야 한다. 그렇지 않으면 무한 재귀가 된다.

## 17.2 호출 스택과 활성화 레코드
함수를 호출할 때마다 시스템은 **활성화 레코드(activation record / stack frame)**를 호출 스택에 쌓는다.
- 매개변수, 지역변수, 복귀 주소를 담음
- 재귀가 깊어질수록 프레임이 계속 쌓이고, 기저 사례에 도달하면 역순으로 **펼쳐지며(unwinding)** 결과를 반환

```
factorial(3)
  → factorial(2)
      → factorial(1)  // 기저: 1 반환
      ← 2 * 1 = 2
  ← 3 * 2 = 6
```
스택 깊이는 유한하므로 재귀 깊이에는 한계가 있다.

## 17.3 재귀 vs 반복
| 항목 | 재귀 | 반복(loop) |
|---|---|---|
| 가독성 | 분할정복·트리 구조에 직관적 | 단순 누적에 명료 |
| 메모리 | 호출마다 스택 프레임 소비 | 상수 스택 |
| 속도 | 호출 오버헤드 존재 | 일반적으로 빠름 |
모든 재귀는 이론적으로 반복(+명시적 스택)으로 바꿀 수 있다. 자연스러움이 우선이면 재귀, 성능·깊이가 우선이면 반복.

## 17.4 대표 예제
**피보나치** — 단순 재귀는 같은 값을 중복 계산해 지수 시간:
```cpp
int fib(int n) {
    if (n < 2) return n;          // 기저: fib(0)=0, fib(1)=1
    return fib(n - 1) + fib(n - 2);
}
```
**하노이탑** — n개 원반을 from에서 to로, aux를 경유:
```cpp
void hanoi(int n, char from, char to, char aux) {
    if (n == 0) return;
    hanoi(n - 1, from, aux, to);
    cout << from << " -> " << to << '\n';
    hanoi(n - 1, aux, to, from);
}
```
**이진 검색** — 정렬된 배열을 절반씩 줄임:
```cpp
int bsearch(const int a[], int lo, int hi, int key) {
    if (lo > hi) return -1;            // 기저: 없음
    int mid = lo + (hi - lo) / 2;
    if (a[mid] == key) return mid;
    if (a[mid] < key) return bsearch(a, mid + 1, hi, key);
    return bsearch(a, lo, mid - 1, key);
}
```

## 17.5 꼬리 재귀 (Tail Recursion)
재귀 호출이 함수의 **마지막 동작**이고, 그 반환값에 추가 연산을 하지 않는 형태.
```cpp
long fact_tail(int n, long acc = 1) {
    if (n <= 1) return acc;
    return fact_tail(n - 1, acc * n); // 마지막에 곧장 반환
}
```
컴파일러가 **꼬리 호출 최적화(TCO)**를 적용하면 새 프레임 없이 반복으로 변환해 스택을 절약할 수 있다(C++ 표준 보장은 아님, 최적화 빌드에서 흔히 수행).

---

## 자주 하는 실수
- **기저 사례 누락/도달 불가** → 무한 재귀 → 스택 오버플로(`Segmentation fault`)
- 재귀 사례가 입력을 줄이지 않음(예: `f(n)` 안에서 `f(n)` 호출)
- 피보나치를 단순 재귀로 큰 n에 적용 → 지수 폭발(메모이제이션/반복으로 해결)
- 깊은 재귀로 스택 한계 초과 — 깊이가 크면 반복+명시적 스택 고려
- 꼬리 재귀라고 가정하고 TCO에 의존 — C++는 표준상 보장하지 않음

## 관련 개념
- [[OOP Ch18 자료구조 입문]] — 스택/트리, 재귀와 자연스럽게 맞물림
- [[Tool Use]] — 큰 입력의 정확한 수치는 실행으로 위임

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 17
