---
title: "역행렬"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 3
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1PXhGuD7THpG0gCmEAKIcqI87Khv9wa_7/view"
---

⬅︎ [[Lecture02 가우스-조르당 소거법]] · [[Linear Algebra]] · [[Lecture04 LU 분해]]

## 한 줄 요약
가역행렬의 조건과 행 소거를 이용한 역행렬 계산을 다룬다.

---

## 가역성과 동치 조건
정사각행렬 $A$의 역행렬은 $AA^{-1}=A^{-1}A=I$를 만족한다. $Ax=b$가 모든 $b$에 대해 유일한 해를 가지는 것, $A$가 모든 열에 피벗을 가지는 것, $\operatorname{rank}A=n$은 서로 연결된다.

## 역행렬 계산
확대행렬 $[A\mid I]$에 **양쪽에 똑같이** 기본 행 연산을 하여 왼쪽을 $I$로 만들면 오른쪽이 $A^{-1}$다. 왼쪽에 피벗이 부족하면 역행렬이 없다.

## 계산과 검산
$$A=\begin{bmatrix}1&2\\0&1\end{bmatrix}
\quad\Longrightarrow\quad
A^{-1}=\begin{bmatrix}1&-2\\0&1\end{bmatrix}.$$
곱 $AA^{-1}=I$로 확인한다. 실제 선형계를 풀 때는 역행렬을 명시적으로 구하는 것보다 소거 또는 [[Lecture04 LU 분해|LU 분해]]가 유리할 때가 많다.

## 자주 하는 실수
- $(AB)^{-1}=A^{-1}B^{-1}$로 순서를 유지하는 것. 올바른 순서는 $B^{-1}A^{-1}$다.
- 정사각형이 아닌 행렬에 일반적인 양측 역행렬을 적용하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1PXhGuD7THpG0gCmEAKIcqI87Khv9wa_7/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
