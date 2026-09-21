---
title: "벡터와 행렬"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 1
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1c2TYFZFpS77gi8N9xuqQ5LleuEU7x-47/view"
---

⬅︎ [[Course00 과목 소개]] · [[Linear Algebra]] · [[Lecture02 가우스-조르당 소거법]]

## 한 줄 요약
벡터 연산과 행렬 연산을 연결하고 직선·평면의 벡터식을 다룬다.

---

## 벡터의 연산과 기하
- 벡터의 합과 스칼라배는 방향과 크기를 바꾼다. 내적 $\mathbf a\cdot\mathbf b$는 직교성과 사영을, 외적은 3차원에서 법선 방향을 찾는 데 쓰인다.
- 점 $\mathbf x_0$을 지나 방향벡터 $\mathbf a\ne0$에 평행한 직선:
$$\mathbf x=\mathbf x_0+t\mathbf a\quad(t\in\mathbb R).$$
- 같은 점을 지나 법선벡터 $\mathbf n\ne0$에 수직인 평면:
$$(\mathbf x-\mathbf x_0)\cdot\mathbf n=0.$$
직선에서는 **방향**, 평면에서는 **법선**을 주는 벡터라는 차이가 중요하다.

## 행렬 연산
- $A\in\mathbb R^{m\times n}$, $B\in\mathbb R^{n\times p}$이면 $AB\in\mathbb R^{m\times p}$이다. $AB$의 $ij$ 성분은 $A$의 $i$행과 $B$의 $j$열의 내적이다.
- 일반적으로 $AB\ne BA$. 전치의 순서는 $(AB)^T=B^TA^T$이다.

## 짧은 예제
$\mathbf x_0=(1,2,0)$, $\mathbf n=(2,-1,3)$이면 평면은 $2(x-1)-(y-2)+3z=0$, 즉 $2x-y+3z=0$이다.

## 자주 하는 실수
- 평면식에 방향벡터를 법선처럼 넣는 것.
- 행렬곱의 양쪽 크기를 확인하지 않고 곱하거나 순서를 바꾸는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1c2TYFZFpS77gi8N9xuqQ5LleuEU7x-47/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
