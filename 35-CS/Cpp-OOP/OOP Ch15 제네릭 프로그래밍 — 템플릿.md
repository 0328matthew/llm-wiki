---
title: "OOP Ch15 — 제네릭 프로그래밍 — 템플릿"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 15
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch14 예외 처리]] · [[CS-MOC]] · 다음 → [[OOP Ch16 입출력 스트림]]

## 한 줄 요약
**제네릭 프로그래밍**은 타입을 매개변수로 빼내 한 번 작성한 코드를 여러 타입에 재사용하는 기법. C++에서는 **템플릿**(함수 템플릿·클래스 템플릿)으로 구현하며, 컴파일러가 사용된 타입마다 코드를 **인스턴스화**한다. STL이 이 위에 세워져 있다.

---

## 15.1 동기 — 왜 제네릭인가
- `int`용, `double`용 `max` 함수를 따로 만드는 중복 → 타입만 다른 같은 로직.
- 매크로(`#define`)는 타입 검사가 없어 위험. 템플릿은 **타입 안전**하면서 코드 재사용.

## 15.2 함수 템플릿
```cpp
template <typename T>
T myMax(T a, T b) {
    return (a > b) ? a : b;
}

myMax(3, 7);          // T = int  (인자에서 추론)
myMax(2.5, 1.5);      // T = double
myMax<double>(3, 1);  // 명시적 지정
```
- `template <typename T>` (또는 `class T`)로 타입 매개변수 선언.
- 호출 인자로부터 `T`를 **추론(argument deduction)** 한다.

## 15.3 클래스 템플릿
```cpp
template <typename T>
class Stack {
    std::vector<T> data;
public:
    void push(const T& x) { data.push_back(x); }
    T pop() {
        T top = data.back();
        data.pop_back();
        return top;
    }
    bool empty() const { return data.empty(); }
};

Stack<int> s;        // 클래스 템플릿은 타입을 명시해야 함
Stack<std::string> names;
```
- 클래스 템플릿은 추론이 안 되므로 `Stack<int>`처럼 타입을 적는다(단, C++17 CTAD 예외).
- 멤버 함수를 클래스 밖에서 정의할 때도 `template <typename T>`를 반복한다.

## 15.4 다중 타입 매개변수 · 비타입 매개변수
```cpp
template <typename K, typename V>     // 여러 타입 매개변수
struct Pair { K key; V value; };

template <typename T, int N>          // 비타입(non-type) 매개변수
class Array {
    T data[N];
public:
    int size() const { return N; }
};
Array<double, 10> a;                  // N은 컴파일 타임 상수
```
- **비타입 매개변수**: 정수·열거형·포인터 등 컴파일 타임 상수를 받는다(예: 고정 크기 배열).

## 15.5 특수화(specialization)
```cpp
template <typename T>                 // 일반 버전
class Printer { /* ... */ };

template <>                           // 명시적(완전) 특수화: bool 전용
class Printer<bool> { /* 다른 구현 */ };

template <typename T>                 // 부분 특수화: 포인터 전용
class Printer<T*> { /* ... */ };
```
- **명시적 특수화**: 특정 타입에 대해 완전히 다른 구현 제공.
- **부분 특수화**(클래스 템플릿만): `T*`처럼 일부 패턴에 대해 특수 구현.

## 15.6 컴파일 모델과 STL 연결
- 템플릿은 **사용되는 시점**에 인스턴스화되므로 **정의가 보여야** 한다 → 보통 **헤더에 선언+정의**를 함께 둔다(별도 `.cpp` 분리 시 링크 오류).
- **STL**은 템플릿의 결정체: 컨테이너(`vector`, `map`), 반복자(iterator), 알고리즘(`sort`, `find`)이 모두 제네릭으로 작성되어 임의 타입에 동작.

```cpp
std::vector<int> v {3, 1, 2};
std::sort(v.begin(), v.end());   // 제네릭 알고리즘
```

---

## 자주 하는 실수
- 템플릿 정의를 `.cpp`에 두고 헤더엔 선언만 → `undefined reference` 링크 오류. 헤더에 정의를 둘 것.
- 클래스 템플릿에서 타입 인자 생략(`Stack s;`) → 함수 템플릿과 혼동.
- `T`가 `>` 같은 연산을 지원하지 않는데 사용 → 인스턴스화 시점에 난해한 오류.
- 명시적 특수화 `template <>` 표기 누락.
- 비타입 매개변수에 런타임 변수를 넣으려 함(컴파일 타임 상수만 가능).

## 관련 개념
- [[OOP Ch14 예외 처리]] — STL 컨테이너의 예외(`at()`의 `out_of_range`)
- [[OOP Ch16 입출력 스트림]] — 스트림 역시 `basic_istream<charT>` 템플릿 기반

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 15
