---
title: "옴의 법칙과 마르코프 연쇄"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 5
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1Iual0D1wjljVD9xgBXS-3wNd3WPl7Yaj/view"
---

⬅︎ [[Lecture04 LU 분해]] · [[Linear Algebra]] · [[Lecture06 벡터공간]]

## 한 줄 요약
선형대수학을 회로와 상태 전이 모델에 적용한다.

---

## 회로를 연립방정식으로
옴의 법칙 $V=IR$과 키르히호프 법칙을 이용해 미지 전류 또는 전압에 대한 선형계를 만든다. 행렬 $Ax=b$의 각 행은 하나의 독립된 회로 제약을, 각 열은 하나의 미지량을 나타낸다. 방향·극성을 먼저 정하면 음의 해도 일관되게 해석할 수 있다.

## 마르코프 연쇄
상태확률 벡터를 $p_{n+1}=Rp_n$으로 갱신한다. 강의 자료는 두 상태의 전이를 행렬로 표현해 반복곱 $R^np_0$과 정상분포를 비교한다.

$$p_* = Rp_*,\qquad \mathbf 1^Tp_*=1.$$
정상분포를 찾을 때 $(R-I)p_*=0$만 풀면 크기가 정해지지 않으므로 확률 합 조건을 더한다. 열벡터 규약에서는 **열의 합이 1**인 전이행렬을 쓴다. 행벡터 규약이라면 방향이 뒤집힌다.

## 자주 하는 실수
- 전류 방향을 중간에 바꾸거나 전이행렬의 행·열 규약을 섞는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1Iual0D1wjljVD9xgBXS-3wNd3WPl7Yaj/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
