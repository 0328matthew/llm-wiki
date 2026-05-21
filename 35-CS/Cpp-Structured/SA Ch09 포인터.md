---
title: "SA Ch9 — 포인터"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 9
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch08 배열]] · [[CS-MOC]] · 다음 → [[SA Ch10 유도 자료형 — 열거형·구조체·공용체]]

## 한 줄 요약
포인터는 **값이 아니라 메모리 주소를 담는 변수**. 배열의 정체, 함수의 출력 인자, 동적 메모리(new/delete)가 모두 포인터 위에 서 있다. C++의 힘과 위험이 동시에 시작되는 장.

---

## 9.1 포인터 개념과 주소
- 모든 변수는 메모리의 어딘가에 있고 **주소**를 가진다
- `&x` : x의 주소를 얻는 **주소 연산자**
- 포인터 변수: 그 주소를 저장하는 변수
```cpp
int x = 10;
int* p = &x;       // p는 x의 주소를 가리킴
cout << &x;        // x의 주소
cout << p;         // 같은 주소
```

## 9.2 선언과 역참조
- 선언: `자료형* 이름;` — 가리키는 대상의 타입이 중요
- `*p` : 역참조(dereference), 포인터가 가리키는 **곳의 값**
```cpp
int x = 10;
int* p = &x;
cout << *p;        // 10 (x의 값)
*p = 20;           // x가 20이 됨 — 간접 수정
```
> `int* p, q;`는 함정 — `q`는 포인터가 아니라 그냥 `int`. 안전하게 한 줄에 하나씩.

## 9.3 포인터 산술
- 포인터에 정수를 더하면 **자료형 크기만큼** 이동
- `p + 1`은 1바이트가 아니라 `sizeof(타입)`바이트 뒤
```cpp
int a[3] = {10, 20, 30};
int* p = a;        // 배열 이름 = 첫 원소 주소
cout << *(p + 1);  // 20
```

## 9.4 포인터와 배열의 관계
- 배열 이름은 **첫 원소를 가리키는 상수 포인터**처럼 동작
- `a[i]`는 `*(a + i)`와 동치
```cpp
int a[3] = {1, 2, 3};
cout << a[2] << ' ' << *(a + 2);   // 둘 다 3
```
차이: 배열 이름은 재대입 불가(`a = ...` 불가), 포인터 변수는 가능.

## 9.5 함수 인자로서 포인터
- 값 전달은 복사 → 원본을 못 바꿈. 포인터를 넘기면 **원본 주소**를 통해 수정
```cpp
void swap(int* a, int* b) {
    int tmp = *a; *a = *b; *b = tmp;
}
// 호출: swap(&x, &y);
```

## 9.6 동적 메모리 (new / delete)
- 실행 중 크기 결정: **힙(heap)** 에서 메모리 할당
```cpp
int* p = new int(5);        // 단일 정수
int* arr = new int[n];      // 배열, n은 런타임 값
// ... 사용 ...
delete p;                   // 단일
delete[] arr;               // 배열은 반드시 delete[]
```

## 9.7 메모리 누수와 dangling 포인터
- **메모리 누수**: `delete`를 안 해 힙 메모리를 영영 못 돌려받음
- **dangling(허상) 포인터**: 이미 해제된 메모리를 가리키는 포인터
```cpp
int* p = new int(5);
delete p;
// *p;        // 위험! dangling
p = nullptr;  // 해제 후엔 nullptr로 — 안전 습관
```

## 9.8 포인터 배열
- 포인터들을 원소로 갖는 배열 — 문자열 목록 등에 유용
```cpp
const char* days[] = {"Mon", "Tue", "Wed"};
cout << days[1];   // Tue
```

---

## 자주 하는 실수
- 초기화 안 한 포인터(wild pointer) 역참조
- `delete` 누락(누수) 또는 `new[]`를 `delete`로 해제(짝 불일치)
- 같은 포인터를 두 번 `delete`(double free)
- `int* p, q;`에서 q가 포인터인 줄 착각
- nullptr 검사 없이 역참조

## 관련 개념
- [[SA Ch08 배열]] — 배열 이름이 곧 주소
- [[SA Ch10 유도 자료형 — 열거형·구조체·공용체]] — 구조체 포인터와 `->`
- [[SA Ch12 클래스의 고급 기능]] — 깊은 복사가 필요한 이유

## 참고
- Forouzan & Gilberg, *Structured Approach*, Ch. 9
