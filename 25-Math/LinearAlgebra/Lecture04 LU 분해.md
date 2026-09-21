---
title: "LU 분해"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 4
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1mnWYK4U3PFEt2bosC-ZUnydzaAp1gn2o/view"
---

⬅︎ [[Lecture03 역행렬]] · [[Linear Algebra]] · [[Lecture05 옴의 법칙과 마르코프 연쇄]]

## 한 줄 요약
행렬을 하삼각·상삼각행렬로 분해해 연립방정식을 푼다.

---

## 분해와 해법
행렬을 하삼각행렬 $L$과 상삼각행렬 $U$의 곱으로 쓰면 $A=LU$다. 피벗을 위해 행을 바꿨다면 보통 $PA=LU$이며, $P$는 그 행 교환을 기록한다.

$Ax=b$에서 행 교환이 없는 경우:
$$Ly=b,\qquad Ux=y.$$
첫 식은 전진 대입, 둘째는 후진 대입으로 푼다. $PA=LU$라면 첫 식의 오른쪽은 $Pb$이다.

## 왜 분해하는가
같은 $A$에 여러 개의 $b$가 주어질 때 $L,U$를 한 번 구해 반복 사용한다. 강의의 행 연산 행렬 $E_i$는 소거 과정 자체를 행렬곱으로 나타내며, 그 역연산을 묶으면 $L$이 된다.

## 자주 하는 실수
- 피벗 교환을 했는데도 $A=LU$라고 적어 $P$를 빠뜨리는 것.
- $Ux=b$부터 푸는 것. 먼저 $Ly=Pb$를 푼다.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1mnWYK4U3PFEt2bosC-ZUnydzaAp1gn2o/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
