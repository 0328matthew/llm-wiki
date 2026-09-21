---
title: "고유값과 대각화"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 13
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1qOId7hb6uDLXL_TO4yq_bDdmlsYjUErk/view"
---

⬅︎ [[Lecture12 행렬식]] · [[Linear Algebra]] · [[Lecture14 선형연산자의 대각화]]

## 한 줄 요약
고유값·고유벡터를 구하고 행렬의 대각화 가능성을 살핀다.

---

## 고유값과 고유벡터
$Av=\lambda v$를 만족하는 $v\ne0$가 고유벡터다. 고유값은 $\det(A-\lambda I)=0$으로 구하고, 각 고유값에 대해 $(A-\lambda I)v=0$을 풀어 고유공간을 찾는다.

## 대각화
$n\times n$ 행렬에 독립인 고유벡터가 $n$개 있으면
$$A=PDP^{-1},\qquad D=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).$$
$P$의 열과 $D$의 대각 원소는 같은 순서로 대응한다. 그러면 $A^k=PD^kP^{-1}$로 계산한다.

## 중복도
대수적 중복도는 특성다항식에서 근이 반복되는 횟수, 기하적 중복도는 $\dim\ker(A-\lambda I)$이다. 어떤 고유값의 기하적 중복도가 대수적 중복도보다 작으면 독립인 고유벡터가 부족해 대각화할 수 없다.

## 자주 하는 실수
- $v=0$도 고유벡터에 포함하거나, 고유값만 모두 구하면 대각화 가능하다고 판단하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1qOId7hb6uDLXL_TO4yq_bDdmlsYjUErk/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
