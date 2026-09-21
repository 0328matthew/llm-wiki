---
title: "차원 정리"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 11
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1lkULNrHCXUKUH2KUUmMSCxoo6CYCN-gA/view"
---

⬅︎ [[Lecture10 선형변환]] · [[Linear Algebra]] · [[Lecture12 행렬식]]

## 한 줄 요약
차원, 계수와 영공간 차원의 관계를 다룬다.

---

## 네 가지 기본 부분공간
$A\in\mathbb R^{m\times n}$에는 열공간 $\operatorname{col}A\subseteq\mathbb R^m$, 영공간 $\ker A\subseteq\mathbb R^n$, 행공간 $\operatorname{row}A\subseteq\mathbb R^n$, 왼쪽 영공간 $\ker A^T\subseteq\mathbb R^m$이 있다.

## 차원 정리
$$\boxed{\dim V=\dim\ker T+\dim\operatorname{im}T}$$
행렬에서는 $n=\operatorname{nullity}(A)+\operatorname{rank}(A)$. 소거 뒤 피벗 수가 rank, 자유변수 수가 nullity다.

## 예제
$T:\mathbb R^3\to\mathbb R^2$, $T(x,y,z)=(x+z,y-z)$는 rank가 2이고 $\ker T=\operatorname{span}\{(-1,1,1)\}$이므로 $3=1+2$다.

## 자주 하는 실수
- $\operatorname{rank}A+\operatorname{nullity}A=m$이라고 쓰는 것. 합은 **열 수 $n$**이다.
- 행공간과 열공간의 차원은 같아도 서로 다른 주변 공간에 있다는 점을 놓치는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1lkULNrHCXUKUH2KUUmMSCxoo6CYCN-gA/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
