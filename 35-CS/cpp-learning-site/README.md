# C++ 학습 사이트

입문부터 모던 C++까지 — **코드 예제 + 확인 퀴즈**로 배우는 인터랙티브 정적 웹사이트.
외부 라이브러리/CDN 없이 순수 HTML·CSS·JS로 동작한다 (오프라인 OK).

## 실행

브라우저로 `index.html` 을 열면 끝.

```bash
# 로컬 서버로 열고 싶다면 (선택)
cd 35-CS/cpp-learning-site
python3 -m http.server 8000   # → http://localhost:8000
```

## 기능

- **8단계 커리큘럼** — 입문 · 기초 문법 · 제어 흐름 · 함수 · 자료구조 · OOP · 템플릿/STL · 모던 C++
- **코드 예제** — 자체 구문 강조 + 한 번 클릭 복사
- **확인 퀴즈** — 강의마다 정답/해설 즉시 확인
- **종합 퀴즈 코너** (사이드바 📝) — 개념 문제 / 코딩 문제 탭으로 분리, 탭별 점수 집계
  - 개념 문제: 객관식
  - 코딩 문제: **출력 예측**(코드 읽고 결과 맞히기) + **빈칸 채우기**(코드 직접 입력 → 자동 채점, 대소문자·공백·괄호 무시)
- **진행도 저장** — `localStorage` 에 완료한 강의 기록 (상단 진행도 바)
- **검색** — 강의 제목/요약으로 빠른 이동 (↑↓ Enter)
- **다크/라이트 테마** — OS 선호 자동 감지 + 토글
- **반응형** — 모바일에서 사이드바 햄버거 메뉴

## 구조

```
cpp-learning-site/
├── index.html        뼈대
├── css/style.css     테마·레이아웃 (CSS 변수 기반)
└── js/
    ├── lessons.js    강의 콘텐츠 데이터 (여기만 고치면 강의 추가/수정)
    ├── quizzes.js    종합 퀴즈 은행 (concept[] · coding[])
    └── app.js        렌더링·라우팅·퀴즈·구문강조·진행도 로직
```

## 종합 퀴즈 추가하는 법

`js/quizzes.js` 의 `QUIZ_BANK` 만 편집한다.

```js
// 개념 문제 (객관식)
concept: [
  { q: "질문", options: ["a","b","c","d"], answer: 1, explain: "해설" }
],
// 코딩 문제
coding: [
  // 출력 예측 (객관식)
  { type: "output", q: "출력은?", code: `C++ 코드`, options: [...], answer: 0, explain: "..." },
  // 빈칸 채우기 (직접 입력)
  { type: "fill", q: "빈칸은?", code: `v.______(5);`, accept: ["push_back"], explain: "..." }
]
```

## 강의 추가/수정하는 법

`js/lessons.js` 의 `CURRICULUM` 배열만 편집하면 된다. 강의 한 개 형식:

```js
{
  id: "고유id",          // URL 해시(#id)로도 쓰임
  title: "강의 제목",
  summary: "한 줄 요약",
  body: `<p>HTML 본문…</p>`,
  code: `// C++ 코드 예제`,
  codeNote: "코드 아래 표시될 팁",
  quiz: [
    { q: "질문", options: ["a","b","c","d"], answer: 1, explain: "해설" }
  ]
}
```

> 이 위키의 `35-CS/Cpp-OOP`, `35-CS/Cpp-Structured`, `모던 C++ 보강` 노트와 짝을 이루는
> 가벼운 복습/실습용 사이트다.
