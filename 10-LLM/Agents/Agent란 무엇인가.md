---
title: Agent란 무엇인가
tags: [concept, llm, agent]
domain: LLM
subject: Agents
created: 2026-05-19
---

## 정의
> **LLM + 도구 사용(Tool Use) + 반복 루프**가 결합되어, 주어진 목표를 스스로 단계 분해해 수행하는 시스템.

## 단순한 챗봇과의 차이
| | Chatbot | Agent |
|---|---|---|
| 입출력 | 한 턴 텍스트 | 멀티 턴 + 외부 액션 |
| 상태 | 없음 | 메모리·계획 |
| 도구 | 없음 | 파일/웹/API/코드 실행 |
| 종료 조건 | 답변 1개 | 목표 달성까지 반복 |

## 기본 루프 (ReAct 패턴)
```
1. 사용자 목표 받음
2. LLM이 다음 행동(tool call or 종료) 결정
3. 도구 실행 → 결과 받음
4. 결과를 컨텍스트에 추가
5. 목표 달성? → YES면 종료, NO면 2로
```

## 구성 요소
- **LLM (뇌)** — 추론·계획·도구 선택
- **Tools** — 파일 R/W, 웹 검색, 코드 실행, DB 쿼리 등 → [[Tool Use]]
- **Memory** — 단기(컨텍스트) + 장기(파일/벡터DB) → [[Memory & Context Management]]
- **Harness** — 루프·에러 처리·로깅을 담당하는 코드 ([[Claude Code]] 같은 것)

## 대표 사례
- **Claude Code** — 코딩 에이전트 (Anthropic) → [[Claude Code]]
- **Cursor / Cline / Aider** — IDE 통합 코딩 에이전트
- **Devin** — 자율 SWE 에이전트
- **Browser-use, OpenInterpreter** — 컴퓨터 조작 에이전트

## 기계공학에 응용
- CAD 모델 자동 수정 (도구: FreeCAD API)
- FEM 결과 자동 해석 + 보고서 작성
- 실험 데이터 → 그래프 → 통계 분석 자동화

## 함정
- **무한 루프** — 종료 조건 / 최대 step 필수
- **컨텍스트 폭발** — 도구 결과가 누적돼 토큰 ↑ → 요약·압축 전략
- **비용** — 한 작업에 LLM 호출 수십 번 가능

## 관련 개념
- [[Tool Use]]
- [[Claude Code]]
- [[Memory & Context Management]]
- [[Multi-Agent Patterns]]

## 참고
- Anthropic "Building Effective Agents" — https://www.anthropic.com/research/building-effective-agents
