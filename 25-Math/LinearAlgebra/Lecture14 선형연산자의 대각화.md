---
title: "선형연산자의 대각화"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 14
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1ufqI3rrXoaiX-nQTu8ckCgQFfyrlxnF0/view"
---

⬅︎ [[Lecture13 고유값과 대각화]] · [[Linear Algebra]] · [[Lecture15 행렬함수]]

## 한 줄 요약
고유벡터 기저에 대한 선형연산자의 대각 표현을 다룬다.

---

## 행렬이 아닌 변환도 대각화한다
선형연산자 $T:V\to V$에서 고유벡터 $v_i$를 기저로 택하면 $T(v_i)=\lambda_i v_i$이므로 이 기저에 대한 표현행렬은 대각행렬이다. **정의역과 공역이 같은 공간**이어야 고유값을 논할 수 있다.

## 절차
1. 먼저 기존 기저 $B$에 대한 행렬 $[T]_B$를 구한다.
2. 특성다항식과 고유공간을 구해 독립인 고유벡터가 $\dim V$개인지 확인한다.
3. 고유벡터 기저 $C$를 만들고 $[T]_C=D$로 쓴다.

강의의 $P_2\to P_2$ 예에서는 $p(x)$에 대한 연산을 기저 다항식 각각에 적용해 계수벡터를 열로 배치한다.

## 자주 하는 실수
- $T:P_2\to P_3$ 같은 서로 다른 공간 사이의 변환에 정사각행렬의 대각화 공식을 바로 적용하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1ufqI3rrXoaiX-nQTu8ckCgQFfyrlxnF0/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
