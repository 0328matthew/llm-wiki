---
title: "내적공간"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 23
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1BeZUKkD-uFeCUKb53n4o1U4X3sVLBALx/view"
---

⬅︎ [[Lecture22 특잇값 분해]] · [[Linear Algebra]] · [[Lecture24 복소벡터공간]]

## 한 줄 요약
내적에서 길이·직교성·사영을 정의한다.

---

## 내적과 길이
내적 $\langle u,v\rangle$은 양의 정부호이며(0 아닌 $v$에 대해 $\langle v,v\rangle>0$), 선형성과 대칭성을 만족한다. 길이 $\|v\|=\sqrt{\langle v,v\rangle}$, 직교성 $\langle u,v\rangle=0$을 정의한다.

강의는 다항식 계수벡터의 내적과 함수공간의 적분 내적을 비교한다. 예를 들어 실수 함수에 대해
$$\langle f,g\rangle=\int_a^b f(x)g(x)\,dx.$$
어떤 내적을 택하느냐에 따라 같은 두 함수의 직교 여부가 달라질 수 있다.

## 정규직교기저
$B=(q_1,\ldots,q_n)$가 정규직교기저라면 $v=\sum_i\langle v,q_i\rangle q_i$이고 좌표는 $[v]_B=(\langle v,q_1\rangle,\ldots)^T$이다.

## 자주 하는 실수
- 함수의 적분 내적과 다항식의 **계수** 내적을 같은 것으로 취급하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1BeZUKkD-uFeCUKb53n4o1U4X3sVLBALx/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
