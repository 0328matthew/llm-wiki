---
title: "OOP Ch19 — 표준 템플릿 라이브러리 (STL)"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 19
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch18 자료구조 입문]] · [[CS-MOC]] · 다음 → [[OOP Ch20 디자인 패턴]]

## 한 줄 요약
**STL**은 검증된 자료구조와 알고리즘을 템플릿으로 제공한다. 세 기둥은 **컨테이너(저장) · 반복자(접근) · 알고리즘(처리)**이고, 반복자가 컨테이너와 알고리즘을 느슨하게 잇는 접착제다.

---

## 19.1 STL의 3대 구성
- **컨테이너(container)**: 데이터를 담는 자료구조 (`vector`, `map` …)
- **반복자(iterator)**: 컨테이너 원소를 가리키는 일반화된 포인터
- **알고리즘(algorithm)**: 컨테이너 종류와 무관하게 반복자 범위 `[begin, end)`에 동작 (`sort`, `find` …)
덕분에 하나의 `sort`가 `vector`든 `array`든 동일하게 적용된다(컨테이너 N개 × 알고리즘 M개를 N×M번 구현할 필요 없음).

## 19.2 시퀀스 컨테이너
원소를 **선형 순서**로 저장.
| 컨테이너 | 내부 | 임의 접근 | 강점 |
|---|---|---|---|
| `vector` | 동적 배열 | O(1) | 끝 삽입 O(1) 평균, 캐시 친화 |
| `deque` | 분할 배열 | O(1) | 양끝 삽입/삭제 O(1) |
| `list` | 이중 연결 | O(n) | 중간 삽입/삭제 O(1) |
```cpp
#include <vector>
std::vector<int> v = {3, 1, 2};
v.push_back(4);          // 끝에 추가
v[0] = 10;               // 임의 접근
```

## 19.3 연관 컨테이너
**키 기반** 저장. 자동 정렬 또는 해시.
| 컨테이너 | 구현 | 정렬 | 탐색 |
|---|---|---|---|
| `set` / `map` | 균형 BST | 키 순 정렬 | O(log n) |
| `unordered_set` / `unordered_map` | 해시 | 무순서 | 평균 O(1) |
```cpp
#include <map>
std::map<std::string, int> age;
age["Kim"] = 20;          // 키-값 삽입
if (age.count("Kim")) cout << age["Kim"];
```
`map`은 키가 정렬되어 순회, `unordered_map`은 평균 더 빠르지만 순서 없음.

## 19.4 반복자의 종류
범주별로 지원 연산이 다르다(약→강).
- **입력/출력**: 한 번 전진 읽기/쓰기
- **순방향(forward)**: `++` 반복 읽기
- **양방향(bidirectional)**: `++`, `--` (`list`, `map`)
- **임의 접근(random access)**: `it + n`, 비교 (`vector`, `deque`)
```cpp
for (auto it = v.begin(); it != v.end(); ++it)
    cout << *it << ' ';
for (int x : v) cout << x;   // 범위 기반 for (내부적으로 반복자)
```

## 19.5 대표 알고리즘 · 함수 객체 · 람다
`<algorithm>`, `<numeric>` 헤더가 핵심.
```cpp
#include <algorithm>
#include <numeric>
std::sort(v.begin(), v.end());                    // 정렬
auto it = std::find(v.begin(), v.end(), 10);      // 검색
int sum = std::accumulate(v.begin(), v.end(), 0); // 합
std::for_each(v.begin(), v.end(), [](int x){ cout << x; });
```
**함수 객체(functor)**나 **람다**로 동작을 주입한다.
```cpp
std::sort(v.begin(), v.end(),
          [](int a, int b){ return a > b; });  // 내림차순
```
람다 `[캡처](매개변수){ 본문 }`는 즉석 함수 객체로, 알고리즘 커스터마이즈에 핵심.

## 19.6 vector 실전 예제
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> scores = {72, 95, 88, 60, 88};
    sort(scores.begin(), scores.end());            // 60 72 88 88 95
    int total = accumulate(scores.begin(), scores.end(), 0);
    double avg = static_cast<double>(total) / scores.size();
    int passed = count_if(scores.begin(), scores.end(),
                          [](int s){ return s >= 70; });
    cout << "평균 " << avg << ", 합격 " << passed << "명\n";
}
```

---

## 자주 하는 실수
- `vector` 재할당(`push_back`으로 capacity 초과) 후 **무효화된 반복자/포인터** 사용
- 알고리즘에 `[begin, end)` 반쪽 열린 구간을 잘못 넘김(끝은 마지막 다음)
- `map[key]`로 조회 시 없는 키가 **자동 삽입**됨 — 존재 확인은 `count`/`find`
- `unordered_map`에 순서를 기대
- `sort`에 잘못된 비교자(strict weak ordering 위반) → 미정의 동작

## 연습문제
1. `vector<int>`에 값을 넣고 `sort` 후 `binary_search`로 특정 값을 찾아라.
2. `map<string,int>`로 텍스트의 단어 빈도수를 세어 출력하라.
3. `for_each`와 람다(또는 `accumulate`)로 원소들의 제곱합을 구하라.
> 힌트: `binary_search`는 정렬된 범위에서만 올바르게 동작한다.

## 관련 개념
- [[OOP Ch18 자료구조 입문]] — STL이 구현해 둔 ADT의 원리
- [[OOP Ch20 디자인 패턴]] — 반복자(iterator)는 그 자체로 패턴
- [[모던 C++ 보강 — C++11 이후]] — 람다·range-based for와 함께 쓰면 위력 배가

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 19
