---
title: "행렬함수"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 15
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1KEkDGXs5Mj5Gz4haU0yEyhFTeZfFYRHG/view"
---

⬅︎ [[Lecture14 선형연산자의 대각화]] · [[Linear Algebra]] · [[Lecture16 미분방정식 응용]]

## 한 줄 요약
행렬의 거듭제곱과 함수 계산에 대각화를 적용한다.

---

## 다항식과 행렬함수
다항식 $f(x)=\sum_{k=0}^{N}a_kx^k$에 대해 $f(A)=\sum_{k=0}^{N}a_kA^k$이다. 상수항은 $a_0I$라는 점을 잊지 않는다.

$A=PDP^{-1}$이면
$$f(A)=Pf(D)P^{-1},\qquad
f(D)=\operatorname{diag}(f(\lambda_1),\ldots,f(\lambda_n)).$$
따라서 $A^{100}$이나 $e^{At}$ 같은 계산이 고유값별 계산으로 나뉜다.

## 행렬 지수
$$e^{At}=I+At+\frac{(At)^2}{2!}+\cdots.$$
대각화가 불가능해도 급수 정의는 유효하다. [[Lecture16 미분방정식 응용|연립 미분방정식]]의 해에서 사용한다.

## 자주 하는 실수
- $f(A)$를 $A$의 모든 성분에 $f$를 적용한 행렬과 혼동하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1KEkDGXs5Mj5Gz4haU0yEyhFTeZfFYRHG/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
