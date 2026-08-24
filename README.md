# llm-wiki

기계공학 학부생을 위한 **역학 · 응용수학 학습 위키** (Obsidian + Git).

> 시작은 `00-Index/Home.md` (Obsidian에서 열면 자동으로 `[[Home]]` 링크가 살아 있음).

## 구조

```
llm-wiki/
├── 00-Index/                MOC(Map of Content) — 시작점 허브
│   ├── Home.md
│   ├── ME-MOC.md
│   └── Math-MOC.md
├── 20-ME/                   기계공학
│   ├── Statics/             정역학
│   ├── Dynamics/            동역학
│   ├── Thermodynamics/      열역학
│   ├── Fluids/              유체역학
│   ├── MechanicsOfMaterials/ 재료역학
│   ├── Kinematics/          기구학
│   ├── MaterialsScience/    재료공학
│   └── NuclearEngineering/  원자력공학
├── 25-Math/                 응용수학
│   ├── NumericalAnalysis/   수치해석
│   └── DifferentialEquations/ 미분방정식
├── 50-Daily/                Daily Notes (자동 생성)
├── 90-Templates/            note · concept · project · paper · daily
├── 99-Attachments/          이미지·PDF 첨부
└── copilot/                 Copilot 플러그인 커스텀 프롬프트
```

## 다른 볼트로 옮겨간 주제

이 볼트는 **역학과 응용수학만** 다룹니다.

| 주제 | 어디로 |
|---|---|
| C++ · 프로그래밍 · CS | [Programming-Study](https://github.com/0328matthew/Programming-Study) 리포지터리 |
| 철학 · 정치사상 | 보관하지 않음 |
| LLM · 프로젝트 · 논문 | 보관하지 않음 |

지워진 노트는 사라진 게 아니라 **git 히스토리에 그대로 남아 있습니다.**
마지막으로 존재하던 커밋은 `1a120e8` 입니다.

```powershell
# 그 시점의 파일 목록 보기
git ls-tree -r --name-only 1a120e8

# 특정 노트 되살리기
git checkout 1a120e8 -- "60-Philosophy/Western/칸트.md"
```

## 사용법

### Obsidian
1. Obsidian에서 이 폴더를 vault로 열기
2. `Ctrl+P` → `Templates: Insert template` 로 템플릿 적용
3. `Ctrl+O` 로 빠른 노트 전환

### Git 동기화
**Obsidian 내에서** (obsidian-git 플러그인):
- `Ctrl+P` → `Git: Commit all changes` / `Git: Push`

**터미널에서**:
```powershell
git add .
git commit -m "feat: add note on X"
git push
```

> ⚠️ obsidian-git 의 자동 백업은 **삭제까지 그대로 커밋해서 푸시합니다.**
> 볼트 폴더를 옮기거나 정리할 때는 Obsidian 을 먼저 닫으세요.

## 노트 명명 규칙
- 한글 OK. Obsidian wikilink `[[노트 이름]]` 으로 연결
- MOC의 placeholder 링크(`[[새 노트]]`)는 클릭하면 노트가 자동 생성됨
- 태그는 frontmatter `tags: [concept, me]` 식으로

## 시드 노트
**ME**: Free Body Diagram · Newton 운동방정식 · 열역학 제1법칙 · Bernoulli 방정식 · 응력과 변형률 · 자유도와 Grübler 공식 · 결정구조
**Math**: 비선형 방정식 풀이 · 1계 ODE 풀이법

→ 각 폴더의 다음 노트는 MOC의 비어있는 `[[링크]]` 를 따라가며 채우면 됨.
