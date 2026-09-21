---
title: "벡터공간"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 6
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1qs3ZRyrInxDoaCu8lIjV8gClkqqypppG/view"
---

⬅︎ [[Lecture05 옴의 법칙과 마르코프 연쇄]] · [[Linear Algebra]] · [[Lecture07 선형독립]]

## 한 줄 요약
추상적인 덧셈과 스칼라배를 갖는 벡터공간의 성질을 다룬다.

---

## 정의와 예
벡터공간은 두 연산(덧셈과 스칼라배)이 정의되고 닫힘성·결합법칙·분배법칙·영벡터·역벡터 등의 공리를 만족하는 집합이다. $\mathbb R^n$뿐 아니라 다항식공간 $P_n$과 행렬의 집합도 예가 된다.

## 부분공간과 생성
$W\subseteq V$가 부분공간인지 확인할 때는 $0\in W$와 임의의 $u,v\in W$, 스칼라 $a,b$에 대해 $au+bv\in W$를 살핀다.
$$\operatorname{span}\{v_1,\ldots,v_k\}
=\left\{\sum_{i=1}^{k}a_iv_i:a_i\in\mathbb F\right\}.$$
생성(span)은 주어진 벡터들의 모든 선형결합이며 가장 작은 부분공간을 만든다.

## 예제
$W=\{(x,y)\in\mathbb R^2:x+y=0\}$는 $(t,-t)=t(1,-1)$이므로 $\operatorname{span}\{(1,-1)\}$이다. 반면 $x+y=1$인 집합은 원점을 포함하지 않아 부분공간이 아니다.

## 자주 하는 실수
- $\mathbb R^+$처럼 익숙한 집합에 새로운 연산이 정의되었는데도 일반적인 0과 음수를 영벡터·역벡터로 쓰는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1qs3ZRyrInxDoaCu8lIjV8gClkqqypppG/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
