---
title: "복소벡터공간"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 24
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/15aBQh2Or3UqKN1O2Qw0uftdzZXWDZ6-_/view"
---

⬅︎ [[Lecture23 내적공간]] · [[Linear Algebra]]

## 한 줄 요약
복소수 공간의 길이와 직교성에는 전치 대신 켤레전치가 필요하다.

---

## 복소 내적
복소벡터공간에서는 켤레전치 $A^*=\overline A^{\,T}$를 사용한다. 한 가지 일관된 관례를 택하면 $\langle u,v\rangle=u^*v$이고
$$\langle v,v\rangle=v^*v=\sum_i|v_i|^2\ge0.$$
실수 공간의 $u^Tv$를 켤레 없이 그대로 쓰면 양의 정부호가 깨질 수 있다. 교재에 따라 어느 인수에서 선형인지 관례가 반대일 수 있다.

## 직교성과 행렬
$u^*v=0$이면 직교한다. $Q^*Q=I$인 행렬은 유니터리 행렬, $A^*=A$인 행렬은 에르미트 행렬이다. 복소수 고유벡터의 직교정규화에는 복소 내적의 켤레를 포함한 [[Lecture17 그람-슈미트 직교화|그람-슈미트 과정]]을 쓴다.

## 자주 하는 실수
- 전치 $A^T$와 켤레전치 $A^*$를 혼동하는 것.
- 복소수의 제곱 $z^2$를 길이 제곱 $|z|^2=z\overline z$로 쓰는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/15aBQh2Or3UqKN1O2Qw0uftdzZXWDZ6-_/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
