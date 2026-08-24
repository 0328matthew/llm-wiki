---
title: "OOP Ch16 — 입출력 스트림"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 16
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch15 제네릭 프로그래밍 — 템플릿]] · [[CS-MOC]] · 다음 → [[OOP Ch17 재귀]]

## 한 줄 요약
**스트림**은 프로그램과 장치(콘솔·파일) 사이를 흐르는 바이트의 추상화. `iostream` 계층이 입력(`istream`)·출력(`ostream`)을 통합하고, 표준 객체 `cin`/`cout`/`cerr`, **포매팅 조작자(manipulator)**, **파일 스트림**(`ifstream`/`ofstream`)으로 실제 입출력을 처리한다. 상태 플래그로 성공·실패를 점검한다.

---

## 16.1 스트림 클래스 계층
- `ios_base` → `ios` : 상태·포맷의 공통 토대(버퍼·플래그)
- `istream` : 입력(`>>`, `get`, `getline`, `read`)
- `ostream` : 출력(`<<`, `put`, `write`)
- `iostream` : `istream` + `ostream` 다중 상속 → 입출력 겸용
- 파일 버전: `ifstream`(입력), `ofstream`(출력), `fstream`(겸용)
- 실제로는 `basic_istream<char>` 등 문자 타입 템플릿의 별칭이다(→ [[OOP Ch15 제네릭 프로그래밍 — 템플릿]]).

## 16.2 표준 스트림 객체
| 객체 | 의미 | 연결 대상 |
|---|---|---|
| `cin` | 표준 입력 | 키보드 |
| `cout` | 표준 출력(버퍼링) | 화면 |
| `cerr` | 표준 오류(즉시) | 화면 |
| `clog` | 로그(버퍼링) | 화면 |

```cpp
int age;
std::cout << "나이? ";
std::cin >> age;                  // 공백·개행에서 끊김
std::cin.ignore();                // 남은 개행 제거
std::string line;
std::getline(std::cin, line);     // 한 줄(공백 포함) 읽기
```
- `>>`는 공백을 구분자로 토큰을 읽고, 줄 전체는 `getline`을 쓴다.

## 16.3 출력 포매팅
조작자(manipulator)는 `<iomanip>`/`<iostream>`에 정의된다.

```cpp
#include <iomanip>
std::cout << std::setw(8) << std::right << 42 << '\n';   // 너비 8, 우측 정렬
std::cout << std::fixed << std::setprecision(2) << 3.14159 << '\n'; // 3.14
std::cout << std::hex << 255 << '\n';                    // ff
std::cout << std::setfill('*') << std::setw(5) << 7 << '\n'; // ****7
```
- `setw(n)`: **다음 한 항목**에만 적용되는 최소 너비
- `setprecision(n)` + `fixed`: 소수점 이하 자릿수 고정
- `setfill`, `left`/`right`, `boolalpha`, `showpoint` 등은 한 번 설정하면 유지(상태성)

## 16.4 파일 스트림
```cpp
#include <fstream>
std::ofstream out("data.txt");          // 쓰기용 열기(없으면 생성)
if (!out) { /* 열기 실패 처리 */ }
out << "score: " << 95 << '\n';
out.close();

std::ifstream in("data.txt");
std::string word; int n;
while (in >> word >> n) {                // EOF/실패 시 루프 종료
    std::cout << word << '=' << n << '\n';
}
```
- 객체가 스코프를 벗어나면 소멸자가 자동으로 `close` (RAII).
- 모드 플래그: `std::ios::app`(이어쓰기), `std::ios::binary`, `std::ios::in|out` 등을 `|`로 조합.

## 16.5 텍스트 vs 이진 파일
- **텍스트 모드**: 사람이 읽는 문자열, 플랫폼에 따라 개행 변환 가능. `<<`/`>>`로 서식화 입출력.
- **이진 모드**(`std::ios::binary`): 메모리 표현을 그대로 저장. `read`/`write`로 바이트 단위 처리.

```cpp
std::ofstream f("rec.bin", std::ios::binary);
double v = 3.14;
f.write(reinterpret_cast<const char*>(&v), sizeof v);  // 이진 기록
```
- 이진은 크기·정밀도 손실이 없지만 이식성(엔디안)에 주의.

## 16.6 스트림 상태 플래그
- `good()`: 정상, `eof()`: 파일 끝 도달, `fail()`: 형식 오류·논리적 실패, `bad()`: 심각한 오류
- 스트림을 조건식에 쓰면 `!fail()`로 평가 → `while (in >> x)` 관용구가 성립
- 실패 후에는 `clear()`로 플래그를 리셋해야 이후 입력이 동작

```cpp
int x;
if (!(std::cin >> x)) {        // 숫자가 아니면 fail
    std::cin.clear();          // 오류 플래그 해제
    std::cin.ignore(1000, '\n');// 잘못된 입력 버림
}
```

## 16.7 스트림 객체 전달 — 참조로
스트림은 복사 불가(스트림 상태·버퍼 공유 문제) → 함수에는 **참조(`std::ostream&`)** 로 넘긴다. 덕분에 같은 함수가 `cout`과 파일 스트림 양쪽에 동작한다.

```cpp
void report(std::ostream& os, const std::string& msg) {
    os << "[LOG] " << msg << '\n';
}
report(std::cout, "시작");
std::ofstream log("app.log");
report(log, "기록");          // 동일 함수, 대상만 다름
```

---

## 자주 하는 실수
- `>>`로 단어만 읽힌다고 잊고 `getline`을 안 써서 공백 포함 문자열이 잘림
- `>>` 뒤 바로 `getline` 시 남은 개행 때문에 빈 줄을 읽음 → `cin.ignore()`로 해소
- `setw`가 영구적이라 착각(다음 항목 1회만 적용)
- 입력 실패 후 `clear()`/`ignore()` 없이 재시도해 무한 루프
- 스트림을 값으로 전달/복사하려다 컴파일 오류 → 참조로 전달
- 이진 파일을 텍스트 모드로 열어 개행 변환으로 데이터 손상

## 연습문제
1. 정수 10개를 파일에 쓰고 다시 읽어 합을 구하는 프로그램을 작성하라(`ofstream`/`ifstream`).
2. `setw`/`setprecision`/`fixed`로 실수 표를 정렬해 출력하라.
3. 숫자가 와야 할 자리에 문자가 들어왔을 때 스트림 상태(`fail()`)를 검사해 재입력을 요청하라.
> 힌트: 3번은 `cin.clear()` 후 `cin.ignore()`로 잘못된 입력을 버려야 무한루프를 피한다.

## 관련 개념
- [[OOP Ch13 연산자 오버로딩]] — 사용자 타입에 `<<`/`>>` 정의
- [[OOP Ch15 제네릭 프로그래밍 — 템플릿]] — 스트림은 `basic_*<charT>` 템플릿
- [[OOP Ch14 예외 처리]] — 파일 열기 실패 등 오류 처리와 RAII
- [[SA Ch07 텍스트 입출력]] — 구조적 접근 트랙의 같은 주제

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 16
