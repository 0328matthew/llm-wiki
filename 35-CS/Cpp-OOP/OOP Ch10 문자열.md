---
title: "OOP Ch10 — 문자열"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 10
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch09 참조·포인터·메모리 관리]] · [[CS-MOC]] · 다음 → [[OOP Ch11 클래스 간의 관계]]

## 한 줄 요약
C++ 문자열은 두 갈래다. **C 스타일 문자열**(널 종료 `char` 배열, `<cstring>` 함수)과 **`std::string`** 클래스. 직접 관리 부담과 버퍼 위험이 있는 전자보다, 길이를 알고 자동으로 메모리를 관리하는 `std::string`이 표준 권장 방식이다.

---

## 10.1 C 스타일 문자열 — `char` 배열과 널 종료
```cpp
char s[6] = "Hello";   // 'H','e','l','l','o','\0' → 길이+1 필요
```
- 문자열 끝은 **널 문자 `'\0'`**로 표시. 배열 크기는 글자 수 +1.
- 종료 문자가 없으면 함수가 메모리 끝을 넘어 읽어 버린다.

## 10.2 `<cstring>` 함수
```cpp
#include <cstring>
char a[20] = "Hi";
char b[]   = " there";
strlen(a);         // 2 (널 제외)
strcpy(a, "New");  // 복사 (대상 버퍼 충분해야)
strcat(a, b);      // 연결
strcmp(a, b);      // 사전순 비교: <0, 0, >0
```
> `strcpy`/`strcat`은 경계 검사가 없어 오버플로 위험. 대상 버퍼 크기를 항상 확인.

## 10.3 `std::string` 클래스 — 생성
```cpp
#include <string>
std::string s1;             // 빈 문자열
std::string s2 = "Hello";   // 리터럴로 초기화
std::string s3(5, '*');     // "*****"
std::string s4 = s2;        // 깊은 복사 (안전)
```
- 길이를 스스로 관리하므로 버퍼 크기를 신경 쓸 필요 없음.

## 10.4 연결·비교·부분문자열·검색
```cpp
std::string a = "Hello", b = "World";
std::string c = a + " " + b;        // 연결: "Hello World"
a += "!";                            // 덧붙이기

a == b;                              // 비교 (연산자 그대로)
a < b;                               // 사전순

c.length();          // 또는 size()
c.substr(6, 5);      // "World" (위치 6부터 5글자)
c.find("World");     // 인덱스 6, 없으면 std::string::npos
c[0];                // 'H' (인덱싱)
```

## 10.5 입력 — `getline` vs `>>`
```cpp
std::string word, line;
std::cin >> word;            // 공백 전까지 한 단어
std::getline(std::cin, line); // 줄 끝(개행)까지, 공백 포함
```
- `>>`는 공백에서 멈추고 앞쪽 공백을 건너뜀. **공백 포함 한 줄**은 `getline`.
- `>>` 다음 `getline`을 쓰면 버퍼에 남은 개행 때문에 빈 줄을 읽는 함정 → `std::cin.ignore()`로 비움.

## 10.6 문자열 ↔ 수치 변환
```cpp
#include <string>
int    n = std::stoi("123");      // 문자열 → int
double d = std::stod("3.14");     // 문자열 → double
std::string s = std::to_string(42);   // 수치 → 문자열
```
- 변환 불가하면 `std::stoi` 등은 예외(`std::invalid_argument`)를 던진다.

---

## 자주 하는 실수
- `char` 배열 크기를 글자 수와 같게 잡아 `'\0'` 자리 누락.
- `strcpy`/`strcat`로 작은 버퍼에 큰 문자열 복사 → 오버플로.
- C 문자열을 `==`로 비교(주소 비교가 됨) — `strcmp` 필요.
- `std::cin >> x` 후 바로 `getline` → 빈 줄을 읽음(`ignore` 누락).
- `find` 결과를 정수 0과 비교하지 않고 성공 판정 — `npos`와 비교해야 함.

## 연습문제
1. `std::string`을 받아 회문(palindrome)인지 판별하는 함수를 작성하라.
2. 한 문장을 입력받아 공백 기준 단어 개수를 세라.
3. `"123"` 같은 문자열을 정수로(`stoi`), 정수를 문자열로(`to_string`) 변환하는 예제를 작성하라.
> 힌트: 1번은 양 끝에서 좁혀오는 두 인덱스로 비교하면 추가 메모리가 필요 없다.

## 관련 개념
- [[OOP Ch09 참조·포인터·메모리 관리]] — C 문자열은 결국 `char` 포인터/배열
- [[OOP Ch11 클래스 간의 관계]] — `std::string`을 멤버로 갖는 구성 관계
- [[SA Ch10 문자열]] — 구조적 접근 트랙의 같은 주제(C 문자열부터)
- [[모던 C++ 보강 — C++11 이후]] — 읽기 전용 문자열 인자는 `std::string_view`로 복사 없이

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 10
