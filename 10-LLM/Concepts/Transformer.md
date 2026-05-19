---
title: Transformer
tags: [concept, llm]
domain: LLM
subject: Architecture
created: 2026-05-19
---

## 정의
> Self-Attention을 핵심 연산으로 사용해 시퀀스를 처리하는 신경망 구조 (Vaswani et al. 2017, "Attention Is All You Need").

## 직관
- RNN처럼 한 토큰씩 순차 처리하지 않고 **모든 토큰을 동시에 본다** → 병렬화에 유리
- 각 토큰이 다른 모든 토큰을 "얼마나 참고할지" 가중치로 표현 → [[Attention]]
- 마치 회의에서 모든 사람이 동시에 다른 사람의 발언에 가중치를 두고 듣는 것

## 핵심 구성
1. **Token Embedding + Positional Encoding** — 단어 → 벡터, 순서 정보 주입
2. **Multi-Head Self-Attention** — 여러 관점에서 동시에 어텐션
3. **Feed-Forward Network** — 각 위치별 비선형 변환
4. **Residual + LayerNorm** — 학습 안정화
5. 이걸 N층 (GPT-3는 96층)

## 수식 (Scaled Dot-Product Attention)
$$
\text{Attention}(Q,K,V) = \text{softmax}\!\left(\frac{QK^\top}{\sqrt{d_k}}\right) V
$$

## Encoder vs Decoder
- Encoder-only: BERT 계열 (이해, 분류)
- Decoder-only: GPT/Claude 계열 (생성) ← 현재 LLM 주류
- Encoder-Decoder: T5, 번역 모델

## 기계공학 비유
- FEM에서 각 노드가 인접 노드의 영향을 weight matrix로 받는 것 ≈ self-attention의 토큰 간 가중치
- 단, attention은 **데이터로부터 학습된 가중치**

## 관련 개념
- [[Attention]]
- [[Tokenization]]
- [[Embeddings]]
- [[Context Window]]

## 참고
- "Attention Is All You Need" — https://arxiv.org/abs/1706.03762
- The Illustrated Transformer — https://jalammar.github.io/illustrated-transformer/
