---
title: "기저"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 8
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/13RwI1xl5XY08iOVzCsIavMfP3AEpnLNv/view"
---

⬅︎ [[Lecture07 선형독립]] · [[Linear Algebra]] · [[Lecture09 기저 변환 행렬]]

## 한 줄 요약
기저는 공간을 생성하면서 중복이 없는 벡터 집합이고, 이 집합이 좌표의 기준을 정한다.

---

## 기저와 차원
기저는 공간을 생성하면서 선형독립인 벡터 집합이다. 기저가 주어지면 모든 벡터가 **유일한** 선형결합으로 표현된다. 유한차원 공간의 기저 원소 수가 차원이다.

## 기저 찾기
생성 집합에서 종속인 벡터를 제거하거나, 독립 집합에 부족한 방향을 더한다. 주어진 행렬의 **피벗 열을 원래 행렬에서** 가져오면 열공간의 기저가 된다. 행 소거한 결과의 피벗 열 자체를 원래 열공간의 기저라고 쓰지 않는다.

## 좌표
$B=(b_1,\ldots,b_n)$일 때 $v=\sum c_ib_i$라면 $[v]_B=(c_1,\ldots,c_n)^T$이다. 같은 $v$라도 기저가 바뀌면 좌표는 달라진다.

## 예제
$B=((1,1),(1,-1))$에서 $(2,0)=(1,1)+(1,-1)$이므로 $[(2,0)]_B=(1,1)^T$다.

## 자주 하는 실수
- 기저의 순서를 무시하는 것: 같은 벡터 목록이라도 순서를 바꾸면 좌표 순서가 바뀐다.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/13RwI1xl5XY08iOVzCsIavMfP3AEpnLNv/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
