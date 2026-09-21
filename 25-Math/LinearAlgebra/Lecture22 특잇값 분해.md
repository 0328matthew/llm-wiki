---
title: "특잇값 분해"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 22
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/17DL-TI2m7tzbCtYJWCIuBeyH1CdphESA/view"
---

⬅︎ [[Lecture21 최소제곱과 QR 분해]] · [[Linear Algebra]] · [[Lecture23 내적공간]]

## 한 줄 요약
특잇값과 직교행렬을 이용한 행렬 분해를 다룬다.

---

## 분해의 의미
모든 실수 $m\times n$ 행렬은
$$A=U\Sigma V^T$$
로 분해된다. $U,V$는 직교행렬, $\Sigma$는 특잇값 $\sigma_i\ge0$을 대각에 가진 직사각행렬이다. $A^TA$의 고유값은 $\sigma_i^2$이며 $v_i$는 오른쪽 특이벡터, $\sigma_i\ne0$일 때 $u_i=Av_i/\sigma_i$다.

## 영공간·계수와 연결
0이 아닌 특잇값의 개수가 $\operatorname{rank}A$다. 0인 특잇값에 대응하는 오른쪽 특이벡터는 $\ker A$에 속한다. 작은 특잇값을 버리면 낮은 계수 근사를 얻는다.

## 의사역행렬
$A^+=V\Sigma^+U^T$에서 0이 아닌 특잇값만 역수로 바꾼다. $\widehat x=A^+b$는 최소제곱 문제의 **최소 노름 해**를 준다.

## 자주 하는 실수
- 직사각행렬의 $\Sigma$도 반드시 정사각형이라고 쓰거나, 0인 특잇값의 역수를 취하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/17DL-TI2m7tzbCtYJWCIuBeyH1CdphESA/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
