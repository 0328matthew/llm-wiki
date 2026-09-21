---
title: "행렬식"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 12
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1WbPm9VAi8JLtUa-qa3eYCv3zrpTvdBPd/view"
---

⬅︎ [[Lecture11 차원 정리]] · [[Linear Algebra]] · [[Lecture13 고유값과 대각화]]

## 한 줄 요약
행렬식의 성질과 가역성 판정의 관계를 다룬다.

---

## 행렬식과 가역성
정사각행렬 $A$에서 $\det A\ne0$이면 $A$는 가역이다. 삼각행렬의 행렬식은 대각성분의 곱이다.

| 행 연산 | 행렬식의 변화 |
|---|---|
두 행 교환 | 부호 반전 |
한 행에 $c$배 | $c$배 |
한 행에 다른 행의 배수 더하기 | 불변 |

$$\det(AB)=\det A\det B,\qquad
A^{-1}=\frac{\operatorname{adj}A}{\det A}\quad(\det A\ne0).$$
강의의 여인수 전개와 Cramer 법칙은 이 성질의 응용이다. Cramer 법칙은 각 변수에 대해 한 열을 $b$로 바꾼 행렬식의 비를 쓰며 $\det A\ne0$일 때 적용한다.

## 자주 하는 실수
- 직사각행렬의 행렬식을 정의하려는 것.
- 소거하면서 행 교환·상수배가 행렬식에 준 영향을 누락하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1WbPm9VAi8JLtUa-qa3eYCv3zrpTvdBPd/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
