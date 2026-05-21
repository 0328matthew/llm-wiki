---
title: "SA Ch7 — 텍스트 입출력"
tags: [note, cs, cpp, structured, chapter]
domain: CS
subject: Cpp-Structured
chapter: 7
source: "Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*"
created: 2026-05-21
---

⬅︎ [[SA Ch06 반복]] · [[CS-MOC]] · 다음 → [[SA Ch08 배열]]

## 한 줄 요약
입출력은 **스트림(stream)** — 프로그램과 장치/파일 사이를 흐르는 문자열의 순차적 흐름이다. **manipulator**로 출력 형식을 다듬고, 문자 단위 입출력(`get`/`put`), 파일 스트림(`ifstream`/`ofstream`), 스트림 상태로 파일을 안전하게 처리한다. EOF 제어 반복과 결합해 "파일 끝까지 읽기" 패턴을 완성한다.

---

## 7.1 스트림 개념
- **스트림**: 바이트/문자가 한 방향으로 흐르는 통로
  - 입력 스트림: 키보드/파일 → 프로그램 (`cin`, `ifstream`)
  - 출력 스트림: 프로그램 → 화면/파일 (`cout`, `ofstream`)
- `cin`/`cout`은 콘솔에 연결된 표준 스트림, 파일 스트림은 같은 추상을 파일에 적용
- 같은 `>>`/`<<` 인터페이스를 콘솔과 파일에 그대로 사용 → 일관된 절차적 처리

## 7.2 출력 포매팅 — manipulator
`#include <iomanip>` 필요(일부).
```cpp
#include <iostream>
#include <iomanip>
using namespace std;

double pi = 3.14159265;
cout << fixed << setprecision(2) << pi << endl;  // 3.14
cout << setw(8) << 42 << endl;                   // 폭 8, 우측 정렬
cout << left << setw(8) << "name" << "|" << endl;// 좌측 정렬
```
| manipulator | 효과 |
|---|---|
| `setw(n)` | 다음 출력의 최소 폭 (1회성) |
| `setprecision(n)` | 유효/소수 자릿수 |
| `fixed` | 소수점 고정 표기 |
| `left` / `right` | 정렬 방향 |
- `setw`는 **다음 한 항목**에만 적용, 나머지는 한 번 설정하면 유지된다

## 7.3 문자 단위 입출력 — get / put
공백·개행까지 포함해 한 글자씩 다룰 때.
```cpp
char ch;
cin.get(ch);     // 공백/개행도 읽음 (>> 는 공백 건너뜀)
cout.put(ch);    // 한 글자 출력
```
- `cin >> ch`는 앞쪽 공백을 건너뛰지만 `cin.get(ch)`는 건너뛰지 않음
- 한 줄 통째: `getline(cin, line)` (string)

## 7.4 파일 스트림 — ifstream / ofstream
`#include <fstream>`.
```cpp
#include <fstream>
using namespace std;

ofstream fout("out.txt");   // 출력용 파일 열기 (없으면 생성)
fout << "결과: " << 42 << endl;
fout.close();

ifstream fin("in.txt");     // 입력용 파일 열기
int x;
fin >> x;
fin.close();
```
- `ofstream`은 기본적으로 기존 내용을 덮어씀(추가는 `ios::app` 모드)
- 다 쓰면 `close()` (소멸 시 자동 닫히지만 명시 권장)

## 7.5 스트림 상태와 열기 검증
- 파일 열기는 실패할 수 있다 → 반드시 확인
```cpp
ifstream fin("in.txt");
if (!fin) {                       // 열기 실패 검사
    cout << "파일을 열 수 없음" << endl;
    return 1;
}
```
- 상태 플래그: `eof()`(끝), `fail()`(형식 불일치/열기 실패), `good()`(정상)
- 스트림을 `bool`처럼 검사 가능: `if (fin) { ... }`

## 7.6 텍스트 파일 처리 패턴 — EOF 제어 루프
[[SA Ch06 반복]]의 사건 제어 루프와 결합한 표준 패턴.
```cpp
ifstream fin("data.txt");
ofstream fout("sum.txt");
if (!fin || !fout) return 1;

int value, sum = 0;
while (fin >> value) {       // 추출 성공하는 동안 반복 (실패=EOF/오류면 종료)
    sum += value;
}
fout << "합계: " << sum << endl;

fin.close();
fout.close();
```
- `while (fin >> value)`: 추출이 실패하면 스트림이 거짓 → 자연스러운 종료 조건
- 입력 → 처리 → 출력의 세 단계가 분리된 절차적 구조

---

## 자주 하는 실수
- 파일 열기 성공 여부를 확인하지 않고 바로 읽기/쓰기
- `setprecision`만 쓰고 `fixed`를 빼서 소수 자릿수가 의도와 다름
- `setw`가 누적된다고 착각 (실제로는 다음 1회만)
- `>> `로 읽으면서 공백/줄 단위가 필요한데 `getline`을 안 씀
- 스트림 오류 후 상태를 `clear()`하지 않고 계속 읽으려 함
- `ofstream`이 기존 파일을 덮어쓰는 줄 모르고 데이터 분실

## 관련 개념
- [[SA Ch02 C++ 언어 입문]] — cin/cout 기본
- [[SA Ch06 반복]] — EOF 제어 반복
- [[SA Ch08 배열]] — 파일에서 읽은 데이터를 저장

## 참고
- Forouzan & Gilberg, *Computer Science: A Structured Approach Using C++*, Ch. 7
