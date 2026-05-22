---
title: "SA Ch11 — 유도 자료형: 열거형·구조체·공용체"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 11
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch10 문자열]] · [[CS-MOC]] · 다음 → [[SA Ch12 클래스]]

## 한 줄 요약
기본 자료형을 조합해 **사용자 정의 타입**을 만드는 절차적 도구들. enum으로 의미 있는 상수를, struct로 서로 다른 자료를 하나로 묶고, 이 묶음 사고가 다음 장 **클래스**의 직접적인 디딤돌이 된다.

---

## 10.1 열거형 (enum)
- 이름 붙은 정수 상수의 집합 → 코드 가독성 향상
```cpp
enum Color { RED, GREEN, BLUE };   // 0, 1, 2 자동
enum Day { MON = 1, TUE, WED };    // 1, 2, 3
Color c = GREEN;
```
- C++11의 `enum class`(범위 한정): 이름 충돌 방지, 암시적 정수 변환 차단
```cpp
enum class Light { RED, YELLOW, GREEN };
Light l = Light::RED;
```

## 10.2 구조체 (struct) 정의와 접근
- 서로 다른 자료형 멤버를 하나의 단위로 묶음
```cpp
struct Student {
    int id;
    char name[20];
    double gpa;
};

Student s;
s.id = 101;          // 멤버 접근: . 연산자
s.gpa = 4.2;
```
- 선언과 동시 초기화: `Student s = {101, "Kim", 4.2};`

## 10.3 중첩 구조체와 구조체 배열
```cpp
struct Date { int y, m, d; };
struct Student {
    int id;
    Date birth;       // 중첩
};
Student s;
s.birth.y = 2005;     // 점 연산자 체인

Student roster[100];  // 구조체 배열
roster[0].id = 1;
```

## 10.4 구조체와 함수
- 구조체는 **값으로 전달**(통째 복사) 가능 — 배열과 다른 점!
- 큰 구조체는 비용이 크므로 `const &`(참조) 전달 권장
```cpp
void print(const Student& s) {       // 복사 없이 전달
    cout << s.id << ' ' << s.gpa;
}
Student makeStudent(int id) {        // 구조체 반환도 가능
    Student s; s.id = id; return s;
}
```

## 10.5 구조체 포인터와 -> 연산자
- 포인터를 통한 멤버 접근은 `(*p).멤버` 대신 **`p->멤버`**
```cpp
Student s = {1, "Lee", 3.5};
Student* p = &s;
cout << (*p).id;   // 1
cout << p->id;     // 1 (같은 의미, 권장 표기)
```
동적 할당과 결합:
```cpp
Student* ps = new Student;
ps->id = 7;
delete ps;
```

## 10.6 공용체 (union)
- 모든 멤버가 **같은 메모리**를 공유 → 한 번에 하나만 유효
- 크기는 가장 큰 멤버 기준, 메모리 절약 용도
```cpp
union Value {
    int i;
    double d;
    char c;
};
Value v;
v.i = 65;     // 이 시점엔 i가 유효
v.d = 3.14;   // 이제 d가 유효, i 값은 깨짐
```

## 10.7 타입 별칭 — typedef / using
- 긴 타입 이름에 짧은 별명 부여
```cpp
typedef unsigned long ulong;        // 전통적 방식
using ulong = unsigned long;        // C++11, 권장
typedef struct Student Student;     // C 호환 패턴
```

---

## 자주 하는 실수
- struct 정의 끝의 **세미콜론 `;` 누락** (대표적 컴파일 오류)
- 구조체를 `==`로 통째 비교하려 함 → 멤버별 비교 필요
- 포인터 멤버 접근에 `.` 사용 (`p.id` → `p->id`)
- union의 한 멤버를 쓰고 다른 멤버를 읽음(미정의)
- 큰 구조체를 값 전달해 불필요한 복사 비용 발생

## 연습문제
1. 학생(이름·학번·평점) `struct` 배열을 만들어 평점 내림차순으로 정렬하라.
2. 요일을 `enum`으로 정의하고 다음 요일을 반환하는 함수를 작성하라.
3. `int`·`double`·`char`를 담는 `union`의 크기가 가장 큰 멤버 기준임을 `sizeof`로 확인하라.
> 힌트: 1번은 Ch08의 정렬 알고리즘을 struct 멤버 기준 비교로 바꾸면 된다.

## 관련 개념
- [[SA Ch12 클래스]] — struct에 함수와 접근 제어를 더하면 class
- [[SA Ch09 포인터]] — `->` 연산자의 토대
- [[OOP Ch07 사용자 정의 자료형 — 클래스]] — 객체지향 트랙의 같은 주제(클래스로 직행)

## 참고
- Forouzan & Gilberg, *Structured Approach*, Ch. 10
