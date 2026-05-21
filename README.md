# llm-wiki

기계공학 학부생을 위한 **LLM × 공학 학습 위키** (Obsidian + Git).

> 시작은 `00-Index/Home.md` (Obsidian에서 열면 자동으로 `[[Home]]` 링크가 살아 있음).

## 구조

```
llm-wiki/
├── 00-Index/                MOC(Map of Content) — 시작점 허브
│   ├── Home.md
│   ├── LLM-MOC.md
│   ├── ME-MOC.md
│   ├── Math-MOC.md
│   └── CS-MOC.md
├── 10-LLM/                  LLM 학습 노트
│   ├── Concepts/            트랜스포머·어텐션·RAG·임베딩 …
│   ├── Prompting/           프롬프트 패턴, CoT, Structured Output
│   ├── Agents/              Claude Code, Tool Use, 멀티에이전트
│   └── Tools/               API·SDK·Vector DB
├── 20-ME/                   기계공학
│   ├── Statics/             정역학
│   ├── Dynamics/            동역학
│   ├── Thermodynamics/      열역학
│   ├── Fluids/              유체역학
│   ├── MechanicsOfMaterials/ 재료역학
│   ├── Kinematics/          기구학
│   └── MaterialsScience/    재료공학
├── 25-Math/                 응용수학
│   ├── NumericalAnalysis/   수치해석
│   └── DifferentialEquations/ 미분방정식
├── 35-CS/                   C++ 프로그래밍 (포르잔 기준)
│   ├── Cpp-OOP/             객체지향 접근 (C++ 바이블) — 전 20장
│   └── Cpp-Structured/      구조적 접근 — 핵심 13장
├── 30-Projects/             ME × LLM 프로젝트
├── 40-Papers/               논문/자료 정리
├── 50-Daily/                Daily Notes (자동 생성)
├── 60-Philosophy/           철학 — 동·서양 사상가 (사상·논증·논리·한계)
│   ├── Western/             고대~현대 (소크라테스 … 비트겐슈타인)
│   ├── Eastern/             중국·인도·한국 (공자 … 이황)
│   └── Themes/              주제별 충돌 노트 (윤리·인식·형이상학 …)
├── 90-Templates/            note · concept · project · paper · daily · philosopher
└── 99-Attachments/          이미지·PDF 첨부
```

## 🧠 철학 리퍼지터리 — "나만의 철학자"
`60-Philosophy/`는 단순 백과사전이 아니라 **LLM을 철학적 대화 상대로 쓰기 위한** 섹션이다.
- 시작점: [[Philosophy-MOC]] · 사용법: `60-Philosophy/_사용법 — 나만의 철학자.md`
- 각 사상가 노트는 `한 줄 요약 → 핵심 사상 → 주요 논증(전제→결론) → 논리/방법론 → 한계·비판 → 활용 프롬프트` 구조.
- 5가지 대화 모드: 소크라테스식 문답 · 다관점 패널 토론 · 스틸맨+해체 · 개인 딜레마에 프레임워크 적용 · 텍스트 독해 동행.

## 사용법

### Obsidian
1. Obsidian에서 이 폴더를 vault로 열기 (이미 등록돼 있음)
2. `Ctrl+P` → `Templates: Insert template` 로 템플릿 적용
3. `Ctrl+O` 로 빠른 노트 전환

### Git 동기화
**Obsidian 내에서** (obsidian-git 플러그인 설치돼 있음):
- `Ctrl+P` → `Git: Commit all changes` / `Git: Push`

**터미널에서**:
```powershell
git add .
git commit -m "feat: add note on X"
git push
```

## 노트 명명 규칙
- 한글 OK. Obsidian wikilink `[[노트 이름]]` 으로 연결
- MOC의 placeholder 링크(`[[새 노트]]`)는 클릭하면 노트가 자동 생성됨
- 태그는 frontmatter `tags: [concept, llm]` 식으로

## 시드 노트 (이미 작성됨)
**LLM**: Transformer · RAG · Prompting Basics · Agent란 무엇인가
**ME**: Free Body Diagram · Newton 운동방정식 · 열역학 제1법칙 · Bernoulli 방정식 · 응력과 변형률 · 자유도와 Grübler 공식 · 결정구조
**Math**: 비선형 방정식 풀이 · 1계 ODE 풀이법

→ 각 폴더의 다음 노트는 MOC의 비어있는 `[[링크]]` 를 따라가며 채우면 됨.
