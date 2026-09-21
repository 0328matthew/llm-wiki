---
title: "미분방정식 응용"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 16
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/15vjCe40uDVy5u44AXypczeZLZYrWqeH0/view"
---

⬅︎ [[Lecture15 행렬함수]] · [[Linear Algebra]] · [[Lecture17 그람-슈미트 직교화]]

## 한 줄 요약
행렬을 이용해 선형 미분방정식계를 분석한다.

---

## 한 개의 방정식에서 연립계로
$f'(t)=\lambda f(t)$, $f(0)=a$이면 $f(t)=ae^{\lambda t}$이다. 연립계 $x'(t)=Ax(t)$도 행렬 지수를 이용해
$$x(t)=e^{At}x(0)$$
로 푼다.

## 대각화되는 경우
$A=PDP^{-1}$, $y=P^{-1}x$로 좌표를 바꾸면 $y'=Dy$다. 각 성분이 $y_i'=\lambda_i y_i$로 분리되므로
$$x(t)=Pe^{Dt}P^{-1}x(0).$$
강의 자료는 서로 다른 성장률을 갖는 미분방정식의 예로 이 분리를 보여 준다.

## 자주 하는 실수
- $e^{A+B}=e^Ae^B$를 항상 성립한다고 쓰는 것. 일반적으로 $A$와 $B$가 가환해야 한다.
- 초기조건을 변환된 좌표 $y(0)=P^{-1}x(0)$에 적용하지 않는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/15vjCe40uDVy5u44AXypczeZLZYrWqeH0/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
