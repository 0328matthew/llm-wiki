---
title: "SA Ch10 — 문자열"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 10
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch09 포인터]] · [[CS-MOC]] · 다음 → [[SA Ch11 유도 자료형 — 열거형·구조체·공용체]]

## 한 줄 요약
문자열은 **문자의 배열**이다. 구조적 접근에서는 먼저 **널 종료 C 문자열**(`char[]` + `'\0'`)로 메모리·포인터의 정체를 드러내고, 그 위에서 안전한 `std::string` 클래스의 가치를 이해한다. 앞 장의 **배열·포인터가 그대로 문자열의 토대**다.

---

## 10.1 문자와 C 문자열
- `char`는 한 글자(1바이트), 작은 정수처럼도 동작(아스키 코드).
- **C 문자열**: `char` 배열에 글자를 담고 끝에 **널 문자 `'\0'`**(값 0)로 종료.
```cpp
char s[6] = {'H','e','l','l','o','\0'};
char t[]  = "Hello";   // 컴파일러가 '\0' 자동 추가 → 크기 6
```
- 문자열 리터럴 `"Hello"`는 읽기 전용 메모리의 `const char[]`.

> 널 종료가 핵심: 함수들은 `'\0'`을 만날 때까지를 한 문자열로 본다. `'\0'`이 빠지면 **버퍼 너머까지 읽는** 버그가 난다.

## 10.2 문자열 입출력
```cpp
char name[20];
cin >> name;          // 공백 전까지 한 단어 (위험: 길이 검사 없음)
cin.getline(name, 20); // 한 줄 전체, 최대 19자 + '\0' (권장)
cout << name;
```
- `cin >> `는 공백에서 끊기고 **버퍼 크기를 검사하지 않아** 넘침 위험.
- 줄 단위 입력은 `getline`(C 문자열) 또는 `std::getline`(`std::string`).

## 10.3 C 문자열 라이브러리 `<cstring>`
| 함수 | 역할 |
|---|---|
| `strlen(s)` | `'\0'` 전까지 길이 |
| `strcpy(d, s)` | 복사 (대상 버퍼 충분해야) |
| `strcat(d, s)` | 이어 붙이기 |
| `strcmp(a, b)` | 사전식 비교(0이면 같음) |
```cpp
char a[20] = "Hi";
strcat(a, ", C++");      // a == "Hi, C++"
if (strcmp(a, "Hi") != 0) cout << "다름";
```
> 이 함수들은 **경계 검사를 하지 않는다** → 버퍼 오버플로의 단골 원인. 그래서 `std::string`이 등장했다.

## 10.4 std::string 클래스
- 길이를 스스로 관리하고 메모리를 **자동 할당/해제**하는 안전한 문자열 타입(`<string>`).
```cpp
#include <string>
std::string a = "Hello";
std::string b = "World";
std::string c = a + " " + b;   // 연결 (연산자 오버로딩)
cout << c.length();             // 11
cout << c.substr(0, 5);         // "Hello"
if (a == "Hello") cout << "같음"; // 값 비교를 ==로
```
- 자주 쓰는 멤버: `length()/size()`, `substr()`, `find()`, `at()`, `c_str()`, `empty()`, `push_back()`.
```cpp
size_t pos = c.find("World");   // 6, 없으면 string::npos
char ch = c.at(0);              // 범위 검사 포함 접근
const char* raw = c.c_str();    // C API에 넘길 때 C 문자열로
```

## 10.5 C 문자열 ↔ std::string ↔ 수치 변환
```cpp
std::string s = "123";
int n = std::stoi(s);            // 문자열 → 정수
double d = std::stod("3.14");    // 문자열 → 실수
std::string t = std::to_string(42);  // 수치 → 문자열
```

---

## 자주 하는 실수
- C 문자열 버퍼 크기를 작게 잡아 `strcpy`/`strcat`에서 오버플로
- 널 종료를 잊어 `strlen`/`cout`이 버퍼 너머까지 읽음
- `std::string`을 `==` 아닌 `strcmp`로 비교하려 함(반대로 C 문자열을 `==`로 비교 — 주소 비교가 됨)
- `c_str()`로 얻은 포인터를 원본 string 소멸/수정 후에도 사용(dangling)
- `cin >> ` 로 긴 입력을 받아 버퍼 넘침

## 연습문제
1. `strlen` 없이 C 문자열의 길이를 직접 세는 함수를 작성하라(`'\0'`까지 카운트).
2. `std::string`으로 입력 문장의 대소문자를 서로 뒤집어 출력하라.
3. 콤마로 구분된 문자열을 토큰으로 분리하라(`find`/`substr` 활용).
> 힌트: 3번은 구분자 위치를 `find`로 찾고 그 앞까지 `substr`로 잘라낸다.

## 관련 개념
- [[SA Ch08 배열]] — 문자열은 char 배열
- [[SA Ch09 포인터]] — 문자열 리터럴과 `char*`
- [[OOP Ch10 문자열]] — 객체지향 트랙의 같은 주제(`std::string` 중심으로 더 깊게)
- [[모던 C++ 보강 — C++11 이후]] — `std::string_view`로 복사 없이 문자열 다루기

## 참고
- Forouzan & Gilberg, *Structured Approach*, Ch. 10 (Strings)
