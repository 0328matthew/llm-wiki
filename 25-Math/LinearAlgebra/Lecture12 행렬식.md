---
title: "행렬식"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1WbPm9VAi8JLtUa-qa3eYCv3zrpTvdBPd/view"
---

# 행렬식

⬅︎ [[Linear Algebra]]

## 한 줄 요약
행렬식의 성질과 가역성 판정의 관계를 다룬다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix

### 2쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix

### 3쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix

### 4쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix

### 5쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix

### 6쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix
é1 1 1ù é x ù é3ù
ê1 1 0ú ê y ú = ê2ú
ê úê ú ê ú
êë0 1 1úû êë z úû êë2úû

### 7쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix
n ìA (i = j ) n ì A (i = j )
å aki Ckj = í , å aik C jk = í
(i ¹ j ) k =1
k =1 î0 î0 (i ¹ j )
é a11 a12 a13 ù é a11 a12 a13 ù
A = êêa21 a22 a23 úú A' = êê a11 a12 a13 úú
êë a31 a32 a33 úû êëa31 a32 a33 úû
é a11 a12 a13 ù
a11C11 + a12C12 + a13C13 = A
A" = êêa21 a22 a23 úú
a11C21 + a12C22 + a13C23 = A' = 0 êë a11 a12 a13 úû
a11C31 + a12C32 + a13C33 = A" = 0
A' = A" = 0

### 8쪽

Determinants
Determinants, Cramer’s Rule, Inverse of a Matrix
Ax = B
éC11 C12 L C1n ù
êC C22 K C2 n úú : matrix of cofactors from A x = A -1B
C= ê 21
ê M M O M ú éC11 C21 L Cn1 ù é b1 ù
ú Cij = (i, j ) cofactor of A
ê C22 K Cn 2 úú êêb2 úú
ê =
1 êC12
ëCn1 Cn 2 L Cnn û Aê M M O M úê M ú
ê úê ú
ëC1n C2 n L Cnn û ëbn û
adj (A ) = CT 1
éC11 C21 L Cn1 ù xi = (b1C1i + b2C2i + L + bnCni )
êC C22 K Cn 2 úú
A
1 1 1
-1
A = adj (A ) = C =
T ê 12 a11 a12 L b1 L a1n
A A Aê M M O M ú 1 a21 a22 L b2 L a2 n
ê ú =
A M M O M O M
ëC1n C2 n L Cnn û
an1 an 2 L bn L ann

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1WbPm9VAi8JLtUa-qa3eYCv3zrpTvdBPd/view)
