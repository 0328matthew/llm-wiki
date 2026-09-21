---
title: "최소제곱과 QR 분해"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 21
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1YV9ke49KC28rRVNM5yvjRxJ5vyUf3-X6/view"
---

⬅︎ [[Lecture20 이차형식]] · [[Linear Algebra]] · [[Lecture22 특잇값 분해]]

## 한 줄 요약
직교사영으로 최소제곱해를 구하고 QR 분해를 활용한다.

---

## 일치하지 않는 연립계
$Ax=b$에 정확한 해가 없으면 $\|Ax-b\|_2$를 최소화하는 $x$를 구한다. $\widehat b=A\widehat x$는 $b$를 $\operatorname{col}A$에 직교사영한 점이며 잔차 $r=b-A\widehat x$는 열공간에 직교한다.
$$A^T(b-A\widehat x)=0
\quad\Longrightarrow\quad A^TA\widehat x=A^Tb.$$

## QR 분해로 풀기
열들이 독립인 $A=QR$에서 $Q^TQ=I$이면 $R\widehat x=Q^Tb$를 푼다. 열 종속이면 해의 유일성 조건을 다시 확인하고 [[Lecture22 특잇값 분해|SVD]] 등을 사용할 수 있다.

## 짧은 예제
$A=(1,1)^T$, $b=(1,3)^T$라면 $Ax=(x,x)^T$. 사영으로 $\widehat x=2$이고 잔차 $(-1,1)^T$는 $(1,1)^T$와 직교한다.

## 자주 하는 실수
- $Ax=b$가 불일치하는데도 역행렬로 정확한 해를 찾으려는 것.
- 잔차가 $A$의 **열**에 직교한다는 조건을 행과 혼동하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1YV9ke49KC28rRVNM5yvjRxJ5vyUf3-X6/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
