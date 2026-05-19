---
title: Retrieval-Augmented Generation (RAG)
tags: [concept, llm, rag]
domain: LLM
subject: Architecture
created: 2026-05-19
---

## 정의
> 사용자 질문 → 외부 지식 베이스에서 관련 문서 검색 → 그걸 컨텍스트로 LLM에 전달해 답을 생성하는 패턴.

## 직관
- LLM은 학습 시점의 지식만 가짐 + 환각(hallucination) 위험
- "답하기 전에 책 펴서 찾아보고 답해" 방식
- 학습 없이 **최신 정보·도메인 지식**을 주입할 수 있음

## 파이프라인
1. **Indexing (오프라인)**: 문서 → 청크 → 임베딩 → Vector DB 저장
2. **Retrieval**: 질문 → 임베딩 → 유사도 검색 (top-k)
3. **Augmentation**: 검색된 청크를 프롬프트에 끼워 넣음
4. **Generation**: LLM이 컨텍스트 기반으로 답변

## 왜 단순 Fine-tuning이 아닌가
| | RAG | Fine-tuning |
|---|---|---|
| 지식 갱신 | 즉시 (DB만 갱신) | 재학습 필요 |
| 비용 | 낮음 | 높음 |
| 출처 추적 | ✅ 가능 | ❌ 어려움 |
| 스타일/포맷 학습 | ❌ 약함 | ✅ 강함 |

→ 보통 **RAG = 지식, Fine-tuning = 행동/스타일** 로 역할 분담. [[Fine-tuning vs RAG]]

## 기계공학에 응용
- ASME 코드, MIL-HDBK, 학교 강의자료를 RAG로 검색 가능한 도우미
- 실험 보고서·논문 collection 위에 RAG → "이 데이터셋 어디 있었지?" 즉답

## 한계
- 검색 품질이 답변 품질의 상한선 (garbage in → garbage out)
- 청크 분할이 잘못되면 핵심 정보가 잘림
- 수치·계산은 여전히 LLM 약점 → [[Tool Use]] 병행

## 관련 개념
- [[Embeddings]]
- [[Vector DB]]
- [[Tool Use]]
- [[Context Window]]

## 참고
- Lewis et al. 2020 — https://arxiv.org/abs/2005.11401
