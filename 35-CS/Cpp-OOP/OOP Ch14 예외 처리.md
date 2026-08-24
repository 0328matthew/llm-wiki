---
title: "OOP Ch14 — 예외 처리"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 14
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch13 연산자 오버로딩]] · [[CS-MOC]] · 다음 → [[OOP Ch15 제네릭 프로그래밍 — 템플릿]]

## 한 줄 요약
**예외 처리**는 오류 검출 코드와 처리 코드를 분리하는 메커니즘. `throw`로 예외를 던지고, `try` 블록을 감싼 `catch`가 받는다. 예외가 던져지면 **스택 되감기**가 일어나며 지역 객체 소멸자가 호출되므로, **RAII**가 예외 안전성의 핵심이다.

---

## 14.1 오류 처리 전략
- 반환 코드 방식: 호출자가 매번 검사해야 하고 흐름이 지저분해짐.
- 예외 방식: 정상 흐름과 오류 처리를 **분리**, 오류를 무시하면 프로그램이 강제 종료(`terminate`)되어 누락을 막는다.
- 예외는 "예외적인" 상황에 쓰고, 정상적 분기 제어로 남용하지 않는다.

## 14.2 try / throw / catch
```cpp
double divide(double a, double b) {
    if (b == 0)
        throw std::runtime_error("0으로 나눔");   // 예외 던지기
    return a / b;
}

try {
    double r = divide(10, 0);
}
catch (const std::runtime_error& e) {            // 참조로 받음
    std::cerr << "오류: " << e.what() << '\n';
}
```
- `throw 식;` 으로 임의 타입의 객체를 던질 수 있다.
- `catch`는 **타입 일치**로 선택되며, 위에서부터 차례로 검사한다(파생 → 베이스 순서 권장).
- 예외 객체는 **참조(`const&`)** 로 받아 슬라이싱·복사를 피한다.

## 14.3 예외 전파와 스택 되감기(stack unwinding)
- `try` 안에서 던진 예외가 일치하는 `catch`가 없으면 함수를 빠져나가 호출자로 **전파**된다.
- 전파 과정에서 빠져나가는 모든 함수의 **지역 객체 소멸자가 호출**된다 = 스택 되감기.
- 끝까지 잡히지 않으면 `std::terminate()` → 프로그램 종료.

## 14.4 표준 예외 계층
- 모든 표준 예외의 베이스는 `std::exception` (`what()` 제공).
- 주요 파생:
  - `std::logic_error` → `invalid_argument`, `out_of_range`, `length_error`
  - `std::runtime_error` → `overflow_error`, `range_error`
  - `std::bad_alloc`(new 실패), `std::bad_cast`
- 베이스로 받으면 모든 표준 예외를 한 번에 처리 가능.

```cpp
catch (const std::exception& e) {   // 모든 std 예외 포괄
    std::cerr << e.what() << '\n';
}
```

## 14.5 사용자 정의 예외와 catch(...)
```cpp
class FileError : public std::runtime_error {
public:
    explicit FileError(const std::string& m) : std::runtime_error(m) {}
};
throw FileError("파일 열기 실패");
```
- `catch(...)`: **모든 예외**를 잡는 포괄 핸들러. 보통 마지막에 두어 정리 후 재던지기(`throw;`).

## 14.6 RAII와 예외 안전성, noexcept
- **RAII**: 자원을 객체 생성자에서 획득, 소멸자에서 해제 → 예외로 빠져나가도 소멸자가 호출되어 누수 없음. `std::unique_ptr`, `std::lock_guard` 등.
- **noexcept**: 함수가 예외를 던지지 않음을 명시. 소멸자·이동 연산은 가급적 `noexcept`. noexcept 함수가 예외를 던지면 즉시 `terminate`.

```cpp
void f() noexcept;   // 예외 안 던짐을 보장
```

---

## 자주 하는 실수
- 예외를 **값**으로 잡아(`catch (std::exception e)`) 슬라이싱 발생 → `const&`로.
- `catch` 순서를 베이스 먼저 두어 파생 핸들러가 도달 못 함.
- 소멸자에서 예외를 던져 스택 되감기 중 `terminate` 유발.
- 수동 `new/delete`에 의존해 예외 발생 시 누수 → RAII/스마트 포인터로.
- 잡히지 않은 예외로 프로그램이 갑자기 죽는 것을 "버그 없음"으로 오해.

## 연습문제
1. 0으로 나누기를 시도하면 예외를 `throw`하고 `catch`에서 메시지를 출력하는 나눗셈 함수를 작성하라.
2. `std::exception`을 상속한 사용자 정의 예외 클래스를 만들고 `what()`을 재정의하라.
3. 동적 자원을 가진 객체에서 예외가 던져져도 RAII로 해제가 보장되는지 소멸자 출력으로 확인하라.
> 힌트: 3번은 `try` 블록 안에서 지역 객체가 스택 되감기로 소멸됨을 보여준다.

## 관련 개념
- [[OOP Ch12 다형성과 그 밖의 이슈]] — 예외 계층도 상속·다형성으로 동작
- [[OOP Ch15 제네릭 프로그래밍 — 템플릿]] — STL 컨테이너가 던지는 예외(out_of_range 등)
- [[모던 C++ 보강 — C++11 이후]] — RAII·스마트 포인터로 예외 안전성 확보

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 14
