---
title: "기저 변환 행렬"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 9
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1CnFulyJGccGnEtMgdyw-vImzwZeySk4O/view"
---

⬅︎ [[Lecture08 기저]] · [[Linear Algebra]] · [[Lecture10 선형변환]]

## 한 줄 요약
서로 다른 기저에서 같은 벡터의 좌표를 변환한다.

---

## 한 벡터, 두 좌표
$B=(b_1,\ldots,b_n)$, $C=(c_1,\ldots,c_n)$가 같은 공간의 기저이면 $v$ 자체는 같지만 $[v]_B$와 $[v]_C$는 다르다.
$$[v]_C=P_{C\leftarrow B}[v]_B,\qquad
P_{C\leftarrow B}=\big[[b_1]_C\ \cdots\ [b_n]_C\big].$$
변환행렬의 **각 열**은 출발 기저 $B$의 벡터를 도착 기저 $C$로 표현한 좌표다. 반대 방향은 그 역행렬이다.

## 예제
$B=((1,1),(1,-1))$, $C=((1,0),(0,1))$이면
$$P_{C\leftarrow B}=\begin{bmatrix}1&1\\1&-1\end{bmatrix}.$$
$[v]_B=(1,1)^T$를 곱하면 $[v]_C=(2,0)^T$이다.

## 자주 하는 실수
- 기저 변환의 화살표를 확인하지 않고 행렬을 거꾸로 적용하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1CnFulyJGccGnEtMgdyw-vImzwZeySk4O/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
