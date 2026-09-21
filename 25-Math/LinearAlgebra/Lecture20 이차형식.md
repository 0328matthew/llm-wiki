---
title: "이차형식"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 20
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1TDvxZQh5fxxH1dUv3FQNYE6BEoCLXIHh/view"
---

⬅︎ [[Lecture19 직교대각화]] · [[Linear Algebra]] · [[Lecture21 최소제곱과 QR 분해]]

## 한 줄 요약
이차형식의 행렬 표현과 표준형을 다룬다.

---

## 원뿔곡선과 이차형식
강의는 $ax^2+by^2+cxy+dx+ey+f=0$의 **교차항**을 좌표 회전으로 없애는 문제를 다룬다. 이차항은
$$\begin{bmatrix}x&y\end{bmatrix}
\begin{bmatrix}a&c/2\\c/2&b\end{bmatrix}
\begin{bmatrix}x\\y\end{bmatrix}$$
로 쓴다. $xy$의 계수 $c$를 양쪽 비대각 성분에 **절반씩** 나누어 넣는다.

## 주축 변환
대칭행렬을 $A=QDQ^T$로 직교대각화하고 $x=Qu$를 대입하면 $x^TAx=u^TDu$가 된다. 새 좌표에서 교차항이 사라지고 고유값이 각 축의 계수가 된다. 선형항까지 있다면 평행이동을 추가해 표준형을 얻는다.

## 자주 하는 실수
- 좌표 회전으로 이차항만 바꾼 뒤 1차항을 변환하지 않는 것.
- 부호에 따른 타원·쌍곡선 분류를 상수항과 평행이동을 확인하기 전에 단정하는 것.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1TDvxZQh5fxxH1dUv3FQNYE6BEoCLXIHh/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
