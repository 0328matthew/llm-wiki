---
title: "직교대각화"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 19
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1Mx8lc6MOcUjzq9Hm7bQ97-h5cYZEsr9B/view"
---

⬅︎ [[Lecture18 직교여공간]] · [[Linear Algebra]] · [[Lecture20 이차형식]]

## 한 줄 요약
대칭행렬의 직교 고유벡터 기저를 활용한다.

---

## 실대칭행렬의 특별한 성질
$A=A^T$이면 서로 다른 고유값에 속한 고유벡터는 직교한다. 같은 고유값의 고유공간 안에서도 정규직교기저를 선택할 수 있으므로
$$A=QDQ^T,\qquad Q^TQ=I$$
로 직교대각화된다. 이 분해를 스펙트럼 분해라고도 부른다.

## 계산 순서
고유값을 구하고 각 고유공간의 기저를 직교정규화한 뒤, 열벡터로 $Q$를 만들고 같은 순서로 $D$의 대각에 고유값을 넣는다.

## 예제
$A=\begin{bmatrix}2&1\\1&2\end{bmatrix}$의 고유값은 $3,1$이고, 단위 고유벡터는 각각 $q_1=(1,1)^T/\sqrt2$, $q_2=(1,-1)^T/\sqrt2$다. $Q=[q_1\ q_2]$와 $D=\operatorname{diag}(3,1)$을 놓으면 $Q^TQ=I$와 $A=QDQ^T$를 직접 검산할 수 있다.

## 자주 하는 실수
- 일반적인 비대칭 실수행렬에도 반드시 $QDQ^T$가 된다고 가정하는 것.
- 고유벡터를 직교하게 만든 뒤 길이를 1로 정규화하지 않는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1Mx8lc6MOcUjzq9Hm7bQ97-h5cYZEsr9B/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
