---
title: "그람-슈미트 직교화"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 17
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1tN_SvpvEUyd29fATDFpw2M3tDgC8Llle/view"
---

⬅︎ [[Lecture16 미분방정식 응용]] · [[Linear Algebra]] · [[Lecture18 직교여공간]]

## 한 줄 요약
독립인 벡터들을 직교기저로 변환한다.

---

## 직교사영
$u\ne0$에 대한 $v$의 사영은
$$\operatorname{proj}_{u}v=\frac{\langle v,u\rangle}{\langle u,u\rangle}u.$$
잔차 $v-\operatorname{proj}_{u}v$는 $u$에 직교한다.

## 그람-슈미트 과정
독립인 $v_1,\ldots,v_k$로부터
$$u_1=v_1,\qquad
u_j=v_j-\sum_{i=1}^{j-1}\frac{\langle v_j,u_i\rangle}{\langle u_i,u_i\rangle}u_i$$
를 만들면 $u_i$들은 직교하고 원래 집합과 같은 공간을 생성한다. $q_i=u_i/\|u_i\|$로 정규화하면 정규직교기저다.

## 자주 하는 실수
- 이미 만든 $u_i$가 아닌 원래 $v_i$를 사영 분모에 사용하거나, 분모 $\|u_i\|^2$를 빠뜨리는 것.
- 입력 벡터가 종속이라 중간에 $u_i=0$이 되는데 정규화를 시도하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1tN_SvpvEUyd29fATDFpw2M3tDgC8Llle/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
