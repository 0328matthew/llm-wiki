---
title: "OOP Ch9 — 참조·포인터·메모리 관리"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 9
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch08 배열]] · [[CS-MOC]] · 다음 → [[OOP Ch10 문자열]]

## 한 줄 요약
**참조**는 기존 변수의 별칭, **포인터**는 주소를 담는 변수다. `new/delete`로 힙 메모리를 직접 관리하면 누수·dangling 위험이 따른다. 포인터 멤버를 가진 클래스는 **얕은 복사**가 위험하므로 **깊은 복사**가 필요하고, 이로부터 **Rule of Three**가 나온다.

---

## 9.1 참조(reference)와 별칭
```cpp
int x = 10;
int& r = x;     // r은 x의 별칭
r = 20;         // x도 20
```
- 참조는 **선언 시 반드시 초기화**되며, 이후 다른 대상을 가리킬 수 없다.
- 함수 매개변수 참조 → 복사 없이 원본 조작, `const T&`는 읽기 전용 효율 전달.

```cpp
void swap(int& a, int& b) { int t = a; a = b; b = t; }
```

## 9.2 포인터 — 선언·역참조·주소연산자
```cpp
int x = 5;
int* p = &x;    // &: 주소 연산자
std::cout << *p;  // *: 역참조 → 5
*p = 7;          // x == 7
```
- `&` 주소 얻기, `*` 가리키는 값 접근.
- **`nullptr`**: 아무 것도 가리키지 않음을 명시(과거 `NULL`/`0` 대체).

```cpp
int* q = nullptr;
if (q != nullptr) *q = 1;   // 널 역참조 방지
```

## 9.3 포인터와 배열
```cpp
int a[3] = {10, 20, 30};
int* p = a;          // a는 &a[0]
std::cout << *(p + 2);   // a[2] == 30
```
- `a[i]`는 `*(a + i)`와 같다. 포인터 산술은 **원소 크기 단위**로 이동.

## 9.4 동적 할당 — `new` / `delete`
```cpp
int* p = new int(42);      // 단일 객체
delete p;                  // 해제

int* arr = new int[5];     // 배열
delete[] arr;              // 배열은 delete[]
```
- 힙(heap)에 할당된 메모리는 **수명을 프로그래머가 책임**진다.
- 배열은 반드시 `delete[]`로 해제(`delete` 사용 시 UB).

## 9.5 메모리 누수와 dangling pointer
```cpp
int* p = new int(1);
p = new int(2);   // 첫 할당을 잃음 → 누수(leak)

int* q = new int(5);
delete q;
*q = 10;          // 해제된 메모리 접근 → dangling, UB
q = nullptr;      // 해제 후 무력화하면 안전
```
- **누수**: 해제 안 한 채 마지막 포인터를 잃음.
- **dangling**: 해제된 메모리를 가리키는 포인터.

## 9.6 얕은 복사 vs 깊은 복사
- 포인터 멤버를 **기본 복사**하면 두 객체가 **같은 메모리를 공유**(얕은 복사) → 한쪽 소멸 시 다른 쪽이 dangling, 이중 해제 위험.

```cpp
class Buffer {
    int* data;
    int size;
public:
    Buffer(int n) : size(n), data(new int[n]) {}
    // 깊은 복사 생성자
    Buffer(const Buffer& b) : size(b.size), data(new int[b.size]) {
        for (int i = 0; i < size; ++i) data[i] = b.data[i];
    }
    // 깊은 복사 대입 연산자
    Buffer& operator=(const Buffer& b) {
        if (this != &b) {                 // 자기 대입 방지
            delete[] data;
            size = b.size;
            data = new int[size];
            for (int i = 0; i < size; ++i) data[i] = b.data[i];
        }
        return *this;
    }
    ~Buffer() { delete[] data; }          // 소멸자
};
```

## 9.7 Rule of Three
- **소멸자, 복사 생성자, 복사 대입 연산자** 중 하나라도 직접 정의해야 한다면, 보통 **셋 다** 정의해야 한다. (자원을 직접 관리하는 클래스의 안전 규칙.)

> 모던 C++: 직접 `new/delete`하는 대신 `std::unique_ptr`/`std::shared_ptr`로 소유권을 표현하면 누수·dangling을 구조적으로 막는다. 이동 연산까지 고려하면 Rule of Three는 **Rule of Five**로 확장된다. → [[모던 C++ 보강 — C++11 이후]]

---

## 자주 하는 실수
- `new[]`를 `delete`(괄호 없이)로 해제.
- 해제 후 포인터를 `nullptr`로 안 만들어 dangling 재사용.
- 복사 대입에서 자기 대입(`a = a`) 검사 누락 → 데이터 손실.
- 포인터 멤버 클래스에 복사 생성자만 두고 대입 연산자를 빠뜨림.
- 참조를 초기화 없이 선언하려 함.

## 연습문제
1. 정수 `n`개를 동적 할당해 값을 채운 뒤 합을 반환하고 메모리를 해제하는 함수를 작성하라. `delete` vs `delete[]` 중 무엇을 써야 하는가?
2. 9.6의 `Buffer` 클래스에서 깊은 복사 대입 연산자를 일부러 얕은 복사로 바꿔 두 객체가 같은 메모리를 공유하게 만든 뒤, 소멸 시 어떤 문제(이중 해제)가 생기는지 설명하라.
3. 함수가 지역 변수의 주소를 반환하면 왜 dangling pointer가 되는지 코드로 보이고, 올바른 대안(참조 인자 또는 동적 할당)을 제시하라.
> 힌트: 2번은 `data` 멤버 포인터를 그대로 복사하는 줄을 떠올려 보라.

## 관련 개념
- [[OOP Ch08 배열]] — 배열-포인터 동치 관계, 동적 배열
- [[OOP Ch10 문자열]] — `std::string`은 깊은 복사를 내부에서 처리
- [[SA Ch09 포인터]] — 구조적 접근 트랙의 같은 주제

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 9
