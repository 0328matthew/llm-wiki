---
title: ME MOC
tags: [moc, me, mechanical-engineering]
---

# ⚙️ Mechanical Engineering Map of Content

> 학부 핵심 과목 + 인접 분야 노트의 허브.

⬅︎ 돌아가기: [[Home]]

## 4역학 (Four Mechanics)

### Statics — 정역학
> 위치: `20-ME/Statics/` · 평형, 자유물체도, 트러스, 마찰
- [[Free Body Diagram]] — 모든 정역학의 시작점
- [[힘과 모멘트]]
- [[트러스 해석]]

### Dynamics — 동역학
> 위치: `20-ME/Dynamics/` · 운동, 일·에너지, 충돌, 진동
- [[Newton 운동방정식]]
- [[일-에너지 정리]]
- [[강체의 회전 운동]]

### Thermodynamics — 열역학
> 위치: `20-ME/Thermodynamics/` · 1·2법칙, 사이클, 엔트로피
- 핵심 개념: [[열역학 제1법칙]] · [[열역학 제2법칙과 엔트로피]] · [[이상기체 사이클]]
- 강의 챕터 노트 (Cengel & Boles 10e, Prof. 전충환 / PNU):
  - [[Chap01 서론과 기본 개념]] — 단위·계·상태·온도·압력
  - [[Chap02 에너지와 에너지 전달]] — 에너지 형태·열·일·1법칙
  - [[Chap03 순물질의 상태량]] — 상변화·증기표·이상기체·압축인자
  - [[Chap04 닫힌계의 에너지 해석]] — 경계일·비열·Cv/Cp
  - [[Chap05 검사체적의 질량·에너지 해석]] — 정상/비정상 유동·노즐·터빈
  - [[Chap06 열역학 제2법칙]] — 열기관·Carnot·Kelvin-Planck/Clausius
  - [[Chap07 엔트로피]] — Clausius 부등식·Tds·이상기체 등엔트로피
  - [[Chap08 엔트로피 해석]] — 가역 정상유동 일·등엔트로피 효율·엔트로피 평형

### Fluid Mechanics — 유체역학
> 위치: `20-ME/Fluids/` · 정수역학, 베르누이, NS, 경계층
- [[Bernoulli 방정식]]
- [[Reynolds 수와 유동 영역]]
- [[Navier–Stokes 방정식]] (개념)

### Mechanics of Materials — 재료역학
> 위치: `20-ME/MechanicsOfMaterials/` · 응력·변형률, 보의 휨, 비틀림
- [[응력과 변형률]]
- [[Mohr's Circle]]
- [[보의 휨 (Bending)]]

## 인접 과목

### Kinematics — 기구학
> 위치: `20-ME/Kinematics/` · 4-bar, 캠, 기어, 자유도
- [[자유도와 Grübler 공식]]
- [[4-bar 메커니즘]]

### Materials Science — 재료공학
> 위치: `20-ME/MaterialsScience/` · 결정구조, 상태도, 파괴, 열처리
- [[결정구조 (FCC/BCC/HCP)]]
- [[Stress-Strain Curve]]
- [[Fe-C 상태도]]

## 응용수학 → [[Math-MOC]]

## 기계공학 × LLM 아이디어
> 이런 걸 [[30-Projects|프로젝트]]로 만들어볼 수 있음
- 📐 자유물체도(FBD) 설명 봇 — 문제 사진 → 풀이 단계 설명
- 🔥 열역학 사이클 시뮬레이터 + LLM 해설
- 🧪 재료물성 챗봇 (Fe-C 상태도, MIL-HDBK 데이터)
- 📊 시뮬레이션 결과(CFD/FEM) 자연어 요약
- 📝 실험 보고서 초안 생성 보조
- 🎓 학부 시험 문제 자동 해설/풀이 검증
