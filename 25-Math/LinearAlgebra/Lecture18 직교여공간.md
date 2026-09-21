---
title: "직교여공간"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 18
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1T4YNDnsB1JeiahO9T4WwGtSeu6vvkCSk/view"
---

⬅︎ [[Lecture17 그람-슈미트 직교화]] · [[Linear Algebra]] · [[Lecture19 직교대각화]]

## 한 줄 요약
부분공간에 직교하는 벡터의 공간을 구한다.

---

## 직교여공간
내적공간 $V$의 부분공간 $W$에 대해
$$W^\perp=\{v\in V:\langle v,w\rangle=0\ \text{for every }w\in W\}.$$
실수행렬에 대해 $(\operatorname{row}A)^\perp=\ker A$, $(\operatorname{col}A)^\perp=\ker A^T$이다. 어느 주변 공간의 직교여공간인지 확인한다.

## 사영과 분해
유한차원에서 $v=\operatorname{proj}_Wv+(v-\operatorname{proj}_Wv)$이고 두 항은 각각 $W,W^\perp$에 있다. 정규직교기저 $q_i$가 있으면 $\operatorname{proj}_Wv=\sum_i\langle v,q_i\rangle q_i$.

예를 들어 $xy$평면으로의 사영은 $(x,y,z)\mapsto(x,y,0)$, 직교 성분은 $(0,0,z)$다.

## 자주 하는 실수
- 사영벡터와 사영 후 남은 잔차를 뒤바꾸는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1T4YNDnsB1JeiahO9T4WwGtSeu6vvkCSk/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
