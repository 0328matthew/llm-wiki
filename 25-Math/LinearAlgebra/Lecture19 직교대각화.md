---
title: "직교대각화"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1Mx8lc6MOcUjzq9Hm7bQ97-h5cYZEsr9B/view"
---

# 직교대각화

⬅︎ [[Linear Algebra]]

## 한 줄 요약
대칭행렬의 직교 고유벡터 기저를 활용한다.

## 핵심 개념
- 실대칭행렬은 직교행렬 $Q$에 대해 $A=QDQ^T$로 표현할 수 있다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Orthogonality
Orthogonal Complements, Orthogonal Diagonalization
Av1 × v 2
= ( Av1 ) v 2
T
= v1T AT v 2
= v1T Av 2
= v1 × Av 2

### 2쪽

Orthogonality
Orthogonal Complements, Orthogonal Diagonalization
A : Symmetric Û
Av1 × v 2 = v1 × Av 2
Av1 × v 2 = l1 v1 × v 2
v1 × Av 2 = l2 v1 × v 2
Av1 × v 2 - v1 × Av 2
= ( l1 - l2 ) v1 × v 2 = 0
l1 ¹ l2 Þ v1 × v 2 = 0
Spectral Decomposition or Eigenvalue Decomposition él1 0 L 0 ù éu1T ù
ê0 l ê ú
L 0 úú êuT2 ú
D = P T AP A = PDP T = [ u1 u 2 L u n ]ê 2
êM M O M úê M ú
P = [u1 , u 2 , L , u n ] ê úê ú
ë0 0 L ln û êëuTn úû
: orthogonal matrix = l1u1u1T + l2u 2uT2 + L + lnu nuTn

### 3쪽

Orthogonality
Orthogonal Complements, Orthogonal Diagonalization
æ 4 2 2ö
ç ÷
A = ç 2 4 2÷
ç 2 2 4÷
è ø
æ - 3 -1 2ö
1 ç ÷
P= ç 3 -1 2÷
6 çç ÷
è 0 2 2 ÷ø
æ 2 0 0ö
ç ÷
D = ç 0 2 0÷
ç0 0 8÷
è ø
※ The eigenspaces of a symmetric
matrix A are orthogonal.

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1Mx8lc6MOcUjzq9Hm7bQ97-h5cYZEsr9B/view)
