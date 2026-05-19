---
title: Prompting Basics
tags: [concept, llm, prompting]
domain: LLM
subject: Prompting
created: 2026-05-19
---

## 정의
> LLM에게 원하는 출력을 얻기 위해 입력(프롬프트)을 설계하는 기술.

## 직관
- LLM은 매우 똑똑하지만 **맥락이 없으면 평균적인 답**을 함
- 프롬프트는 코드 같지 않고 **명령서 + 예시 + 형식 지정**의 조합
- 모호한 질문 → 모호한 답 / 구체적이고 구조화된 질문 → 정확한 답

## 핵심 원칙 (4가지)
1. **역할(Role)** — "당신은 기계공학 조교다" 같은 페르소나
2. **태스크(Task)** — 무엇을 하는지 한 줄로 명확히
3. **컨텍스트(Context)** — 배경, 제약, 입력 데이터
4. **출력 형식(Output Format)** — JSON / 마크다운 / 표 / 단계 번호

## 패턴

### Zero-shot
예시 없이 바로 시키기. 단순 작업에 충분.
```
다음 문장을 영어로 번역해. "베르누이 방정식을 설명해줘."
```

### Few-shot
입출력 예시를 2~5개 보여줌. 형식/스타일 학습에 유효.
```
Q: 정역학에서 자유물체도는?
A: 한 줄 요약 - 물체에 작용하는 모든 외력을 그린 도식.

Q: 베르누이 방정식이란?
A: 한 줄 요약 -
```

### Chain-of-Thought (CoT)
"단계별로 생각하라"고 지시 → 추론 정확도 ↑ → [[Chain-of-Thought (CoT)]]

### Structured Output
JSON 스키마를 보여주고 그 형식으로 답하게 → [[Structured Output]]

## 안티패턴
- ❌ "잘 해줘", "최선을 다해" — 무의미
- ❌ 부정 명령만 ("X 하지 마") — 긍정 명령 추가 ("Y 해라")
- ❌ 너무 긴 프롬프트에 핵심 묻힘 → 중요한 건 **앞 or 맨 끝**에

## 기계공학에 응용
- 시험 문제 풀이 → CoT + "공식 먼저 쓰고 단위까지 명시"
- 보고서 생성 → 역할(공학 보고서 작성자) + 형식(서론/이론/실험/결론) 지정

## 관련 개념
- [[Chain-of-Thought (CoT)]]
- [[Structured Output]]
- [[System Prompt 설계]]

## 참고
- Anthropic Prompt Engineering — https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering
