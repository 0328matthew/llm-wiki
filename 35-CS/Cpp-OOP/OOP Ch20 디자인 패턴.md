---
title: "OOP Ch20 — 디자인 패턴"
tags: [note, cs, cpp, oop, chapter]
domain: CS
subject: Cpp-OOP
chapter: 20
source: "Forouzan & Gilberg, *C++ Programming: An Object-Oriented Approach* (포르잔 C++ 바이블)"
created: 2026-05-21
---

⬅︎ [[OOP Ch19 표준 템플릿 라이브러리 — STL]] · [[CS-MOC]]

## 한 줄 요약
**디자인 패턴**은 자주 나오는 설계 문제에 대한 **재사용 가능한 해법의 이름표**다. 생성·구조·행위 세 범주로 나뉘며, 코드가 아니라 **객체들의 협력 구조**를 약속한다. 도구이지 정답은 아니다.

---

## 20.1 디자인 패턴이란
- GoF(Gang of Four)가 정리한, 검증된 설계 어휘
- 장점: 공통 용어로 의사소통, 재사용, 유지보수성·확장성 향상
- 패턴은 **상황(context) + 문제 + 해법**의 묶음이지 복붙 코드가 아님

분류:
| 범주 | 관심사 | 예 |
|---|---|---|
| **생성(Creational)** | 객체 생성 방식 | 싱글턴, 팩토리 메서드 |
| **구조(Structural)** | 객체 결합·구성 | 어댑터, 데코레이터 |
| **행위(Behavioral)** | 객체 간 책임·통신 | 옵서버, 전략 |

## 20.2 생성 패턴 — 싱글턴 · 팩토리 메서드
**싱글턴(Singleton)**: 인스턴스를 단 하나만 보장.
```cpp
class Logger {
public:
    static Logger& instance() {     // 지연 초기화, C++11+ 스레드 안전
        static Logger inst;
        return inst;
    }
    void log(const std::string& m) { /* ... */ }
private:
    Logger() = default;
    Logger(const Logger&) = delete; // 복사 금지
    Logger& operator=(const Logger&) = delete;
};
```
**팩토리 메서드(Factory Method)**: 어떤 객체를 만들지 서브클래스/함수가 결정 → 생성 코드를 사용처에서 분리.
```cpp
std::unique_ptr<Shape> create(const std::string& kind) {
    if (kind == "circle") return std::make_unique<Circle>();
    return std::make_unique<Square>();
}
```

## 20.3 구조 패턴 — 어댑터
**어댑터(Adapter)**: 호환되지 않는 인터페이스를 클라이언트가 기대하는 형태로 감싼다.
```cpp
class NewLogger { public: void writeLine(const std::string&); };

class LoggerAdapter : public ILegacyLog {  // 기대 인터페이스
    NewLogger impl;
public:
    void log(const std::string& m) override { impl.writeLine(m); }
};
```
기존 코드를 고치지 않고 새 컴포넌트를 끼워 맞출 때 유용.

## 20.4 행위 패턴 — 옵서버 · 전략
**옵서버(Observer)**: 한 객체(subject) 상태가 바뀌면 구독자(observer)들에게 자동 통지.
```cpp
struct Observer { virtual void update(int v) = 0; };
class Subject {
    std::vector<Observer*> obs;
public:
    void attach(Observer* o) { obs.push_back(o); }
    void notify(int v) { for (auto* o : obs) o->update(v); }
};
```
이벤트/구독 시스템(GUI, MVC)의 기반.

**전략(Strategy)**: 알고리즘을 객체로 캡슐화해 런타임에 교체.
```cpp
struct SortStrategy { virtual void sort(std::vector<int>&) = 0; };
class Context {
    SortStrategy* strategy;
public:
    void set(SortStrategy* s) { strategy = s; }
    void run(std::vector<int>& v) { strategy->sort(v); }
};
```
C++에서는 `std::function`/람다로 더 가볍게 구현하기도 한다.

## 20.5 패턴의 효용과 남용 경고
- **효용**: 설계 의도가 이름으로 드러남, 변경에 강함, 협업 어휘
- **남용 경고**: 단순한 문제에 패턴을 억지로 끼우면 오히려 복잡도·간접 참조가 늘어남(over-engineering)
- 패턴은 **문제가 먼저 보일 때** 적용한다 — "패턴을 쓰려고" 설계하지 말 것
- C++에는 언어 기능(템플릿, RAII, `std::function`, 가상함수)으로 패턴을 더 간결히 대체할 수 있는 경우가 많음

---

## 자주 하는 실수
- 싱글턴 남용 → 전역 상태와 다름없어 테스트·동시성에서 골치
- 패턴 이름만 외우고 **해결하려는 문제 맥락**을 무시
- 옵서버에서 구독 해제(detach) 누락 → dangling 포인터 통지
- 전략을 가상함수로만 생각 — 람다/`std::function`이 더 적합할 때가 많음
- 모든 곳에 인터페이스/팩토리를 도입해 불필요한 추상화 증가

## 관련 개념
- [[OOP Ch19 표준 템플릿 라이브러리 — STL]] — 반복자는 Iterator 패턴의 실체
- [[OOP Ch01 컴퓨터와 프로그래밍 언어]] — OOP 패러다임의 출발점

## 참고
- Forouzan & Gilberg, *C++ Programming*, Ch. 20
- Gamma et al., *Design Patterns* (GoF)
