---
title: "가우스-조르당 소거법"
tags: [note, math, linear-algebra, lecture]
domain: Math
subject: LinearAlgebra
lecture: 2
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1X2pO_YY685bnGHFQVeLzy4L0gcK-7hn1/view"
---

⬅︎ [[Lecture01 벡터와 행렬]] · [[Linear Algebra]] · [[Lecture03 역행렬]]

## 한 줄 요약
기본 행 연산과 기약 행 사다리꼴로 선형연립방정식의 해를 구한다.

---

## 선형연립방정식의 행렬 표현
$Ax=b$에서 $[A\mid b]$는 확대행렬이다. 기본 행 연산(행 교환, 0이 아닌 상수배, 다른 행의 배수 더하기)은 해집합을 보존한다.

## 소거와 해의 판정
1. 위에서 아래로 피벗을 정해 행 사다리꼴을 만든다.
2. 피벗을 1로 만들고 그 위쪽 성분까지 제거하면 기약 행 사다리꼴(RREF)이 된다.
3. $[0\ \cdots\ 0\mid c]$, $c\ne0$인 행이 있으면 **해가 없다**.
4. 모순이 없으면 피벗 열은 선도변수, 피벗이 없는 열은 자유변수다. 자유변수가 있으면 해는 무한히 많다.

예를 들어 $x+y=2$, $2x+2y=4$는 $x=2-t,\ y=t$로 매개화된다. 강의의 최소 노름해 문제는 이 해들 가운데 $\|x\|$를 최소로 하는 점을 추가로 선택하는 문제다.

## 자주 하는 실수
- 계수행렬의 열과 확대행렬의 마지막 열을 같은 변수 열로 세는 것.
- 자유변수가 있다는 이유만으로 항상 무한히 많은 해라고 결론짓는 것: 먼저 모순 여부를 확인한다.

## 관련 개념
- [[1. 행렬]]
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1X2pO_YY685bnGHFQVeLzy4L0gcK-7hn1/view)
- 강의 자료의 도형·표·문제 그림은 원본 PDF에서 확인한다. 인쇄된 식도 원본과 대조해 학습한다.
