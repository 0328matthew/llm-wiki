---
title: "SA Ch13 — 클래스의 고급 기능"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 13
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch12 클래스]] · [[CS-MOC]] · 다음 → [[SA Ch14 상속]]

## 한 줄 요약
기본 클래스를 실전에서 쓰게 해주는 도구들: 인스턴스 공통 데이터(`static`), 접근 권한 부여(`friend`), 자기 자신 참조(`this`), 연산자 오버로딩, 그리고 포인터 멤버를 안전하게 다루는 **깊은 복사**와 `const` 정확성.

---

## 12.1 static 멤버
- **static 멤버 변수**: 모든 객체가 **하나를 공유**(인스턴스가 아닌 클래스에 속함).
- **static 멤버 함수**: 특정 객체 없이 호출, static 멤버만 접근 가능(`this` 없음).
```cpp
class Counter {
    static int count;        // 선언
public:
    Counter() { count++; }
    static int getCount() { return count; }
};
int Counter::count = 0;      // 클래스 외부에서 정의/초기화(필수)
// 호출: Counter::getCount();
```

## 12.2 friend 함수와 friend 클래스
- `friend`로 지정하면 그 함수/클래스가 `private` 멤버에 접근 가능.
- 캡슐화에 구멍을 내므로 **꼭 필요할 때만**(예: 연산자 오버로딩).
```cpp
class Box {
    int w;
public:
    Box(int x) : w(x) {}
    friend int getW(const Box& b);   // 친구 함수 선언
};
int getW(const Box& b) { return b.w; }  // private 접근 OK
```

## 12.3 this 포인터
- 모든 비-static 멤버 함수에는 **자기 객체를 가리키는 `this`** 가 숨어 전달된다.
- 멤버 이름과 매개변수 이름이 겹칠 때, 메서드 체이닝 반환에 활용.
```cpp
class Point {
    int x;
public:
    Point& setX(int x) {     // 매개변수와 멤버 이름 충돌
        this->x = x;         // this->로 멤버 명시
        return *this;        // 자기 자신 반환 → 체이닝
    }
};
```

## 12.4 연산자 오버로딩 기초
- 사용자 정의 타입에 `+`, `==`, `<<` 등의 연산자 의미를 부여.
```cpp
class Vec {
    int x, y;
public:
    Vec(int a, int b) : x(a), y(b) {}
    Vec operator+(const Vec& r) const {     // 멤버 함수 형태
        return Vec(x + r.x, y + r.y);
    }
};
Vec a(1,2), b(3,4);
Vec c = a + b;     // a.operator+(b) 호출
```

## 12.5 복사 생성자와 깊은 복사
- **복사 생성자**: 같은 타입 객체로 새 객체를 초기화할 때 호출 `Cls(const Cls&)`.
- 포인터 멤버가 있으면 기본(얕은) 복사는 **같은 메모리를 둘이 가리켜** 이중 해제·dangling 발생 → **깊은 복사** 필요.
```cpp
class Buffer {
    int* data;
    int n;
public:
    Buffer(int size) : n(size), data(new int[size]) {}
    Buffer(const Buffer& o) : n(o.n), data(new int[o.n]) {  // 깊은 복사
        for (int i = 0; i < n; i++) data[i] = o.data[i];
    }
    ~Buffer() { delete[] data; }
};
```

## 12.6 const 멤버 함수
- 함수 뒤 `const` → 그 함수가 **멤버를 수정하지 않음**을 보장.
- `const` 객체로는 `const` 멤버 함수만 호출 가능.
```cpp
class Account {
    double balance;
public:
    double getBalance() const { return balance; }  // 읽기 전용
};
const Account a;
a.getBalance();   // OK
```

## 12.7 객체 배열과 객체 동적 할당
```cpp
Point arr[3];                 // 각 원소마다 기본 생성자 호출
Point* p = new Point;         // 동적 단일 객체
Point* pa = new Point[5];     // 동적 객체 배열
delete p;
delete[] pa;                  // 각 원소 소멸자 호출
```

---

## 자주 하는 실수
- static 멤버 변수를 클래스 외부에서 정의하지 않아 링커 오류(`undefined reference`)
- 포인터 멤버가 있는데 복사 생성자를 안 만들어 얕은 복사 → double free
- `const` 멤버 함수 안에서 멤버를 수정하려다 컴파일 오류
- `this`를 static 멤버 함수에서 사용 (static엔 this 없음)
- 연산자 오버로딩 반환형/`const`를 빠뜨려 임시 객체 수정 시도

## 연습문제
1. 생성된 객체 수를 세는 `static` 카운터를 클래스에 추가하라.
2. 포인터 멤버를 가진 클래스에 깊은 복사 생성자를 작성하고, 얕은 복사와의 차이(이중 해제)를 설명하라.
3. `const` 멤버 함수를 만들고 `const` 객체로 호출해 비-const 함수는 호출되지 않음을 확인하라.
> 힌트: 1번의 static 멤버 변수는 클래스 외부에서 한 번 정의·초기화해야 한다.

> 모던 C++: 포인터 멤버를 직접 다루는 대신 멤버를 스마트 포인터/컨테이너로 두면 복사·이동·소멸을 자동화(Rule of Zero)할 수 있다. → [[모던 C++ 보강 — C++11 이후]]

## 관련 개념
- [[SA Ch12 클래스]] — 기본 클래스 문법
- [[SA Ch09 포인터]] — 깊은 복사가 필요한 근본 이유
- [[SA Ch14 상속]] — 클래스 재사용의 다음 단계
- [[OOP Ch13 연산자 오버로딩]] — 객체지향 트랙의 연산자 오버로딩 심화

## 참고
- Forouzan & Gilberg, *Structured Approach*, Ch. 12
