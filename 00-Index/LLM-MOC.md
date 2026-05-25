---
title: LLM MOC
tags: [moc, llm]
---

# 🤖 LLM Map of Content

> LLM/에이전트 학습 노트의 허브.

⬅︎ 돌아가기: [[Home]]

## Concepts (기초 개념)
> 위치: `10-LLM/Concepts/`
- [[Transformer]] — 어텐션 기반 시퀀스 모델의 뼈대
- [[Attention]] — Self-/Cross- attention 메커니즘
- [[Tokenization]] — BPE, WordPiece, 한국어 토큰화 이슈
- [[Embeddings]] — 단어/문서/벡터 표현
- [[Retrieval-Augmented Generation (RAG)]] — 외부 지식과 LLM 결합
- [[Fine-tuning vs RAG]]
- [[Context Window]]
- [[Loss & Pretraining]]

## Prompting (프롬프트 엔지니어링)
> 위치: `10-LLM/Prompting/`
- [[Prompting Basics]] — Zero/Few-shot, 역할 지시
- [[Chain-of-Thought (CoT)]]
- [[Structured Output]] — JSON 강제, 스키마
- [[System Prompt 설계]]

## Agents (에이전트/하네스)
> 위치: `10-LLM/Agents/`
- [[Agent란 무엇인가]] — LLM + Tool Use + Loop
- [[Tool Use]] — Function calling, MCP
- [[Claude Code]] — Anthropic CLI 에이전트
- [[Multi-Agent Patterns]]
- [[Memory & Context Management]]

## Tools (API·라이브러리·인프라)
> 위치: `10-LLM/Tools/`
- [[Anthropic SDK]]
- [[OpenAI SDK]]
- [[LangChain vs LlamaIndex]]
- [[Vector DB]] — pgvector, Chroma, Qdrant 등
- [[Prompt Caching]]
- [[PPT 제작 워크플로우]] — 대본→LLM이 구성/디자인 설계하는 발표자료 워크플로우

## 외부 자료 (Inbox)
- Anthropic Docs — https://docs.anthropic.com
- OpenAI Cookbook — https://github.com/openai/openai-cookbook
- The Illustrated Transformer (Jay Alammar)
- Lil'Log (Lilian Weng)

## 기계공학 × LLM 아이디어 → [[ME-MOC#기계공학 × LLM 아이디어|ME-MOC]]
