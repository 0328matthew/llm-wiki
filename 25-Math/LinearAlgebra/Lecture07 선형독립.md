---
title: "선형독립"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 7
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1EgaFPxW_bBKe6Omm00pICnbZfuwKynYD/view"
---

⬅︎ [[Lecture06 벡터공간]] · [[Linear Algebra]] · [[Lecture08 기저]]

## 한 줄 요약
영벡터를 만드는 선형결합을 통해 독립성과 종속성을 판정한다.

---

## 정의
$v_1,\ldots,v_k$가 선형독립이라는 것은
$$a_1v_1+\cdots+a_kv_k=0\quad\Longrightarrow\quad a_1=\cdots=a_k=0$$
이라는 뜻이다. 0이 아닌 계수로 영벡터가 만들어지면 선형종속이다.

## 판정 절차
벡터들을 행렬의 **열**로 나열하고 $Ax=0$을 소거한다. 모든 열에 피벗이 있으면 독립, 자유변수가 있으면 종속이다. $\mathbb R^n$에서 $n$개를 초과하는 벡터는 반드시 종속이다.

## 생성과의 관계
독립은 '중복이 없는가'이고 생성은 '공간 전체를 덮는가'이다. 한쪽만 만족할 수 있다. 두 조건을 함께 만족하는 집합이 [[Lecture08 기저|기저]]다.

## 자주 하는 실수
- 벡터를 행으로 놓고 열의 독립 여부를 판정했다고 주장하는 것.
- 동차계에 항상 0해가 있다는 사실을 '종속'의 증거로 보는 것. 비자명한 해가 필요하다.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1EgaFPxW_bBKe6Omm00pICnbZfuwKynYD/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
