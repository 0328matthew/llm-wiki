---
title: "선형변환"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 10
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1BcRlBE6USxmcT0_IPKulpNhB2lEJwUHs/view"
---

⬅︎ [[Lecture09 기저 변환 행렬]] · [[Linear Algebra]] · [[Lecture11 차원 정리]]

## 한 줄 요약
선형변환의 행렬 표현, 핵과 상을 다룬다.

---

## 정의와 행렬 표현
$T:V\to W$가 선형이라면 $T(u+v)=T(u)+T(v)$, $T(cu)=cT(u)$이다. 반드시 $T(0)=0$이므로 상수항이 있는 아핀 사상은 선형이 아니다.

$\mathbb R^n\to\mathbb R^m$의 표준행렬은 표준기저의 상을 열로 모아 만든다.
$$A=[T(e_1)\ \cdots\ T(e_n)],\qquad T(x)=Ax.$$
일반 기저를 쓰면 정의역·공역의 기저를 모두 표기해야 한다. 강의에는 반사·사영·회전·확대/축소 및 다항식공간의 변환 예가 나온다.

## 핵과 상
$\ker T=\{v:T(v)=0\}$, $\operatorname{im}T=\{T(v):v\in V\}$이다. 핵은 없어지는 방향, 상은 실제 도달 가능한 방향이다.

## 자주 하는 실수
- $T(x,y,z)=(x+z-1,y-z+1)$처럼 상수항이 있는데도 선형으로 판정하는 것.
- 정의역의 차원과 공역의 차원을 뒤집어 행렬 크기를 정하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1BcRlBE6USxmcT0_IPKulpNhB2lEJwUHs/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
