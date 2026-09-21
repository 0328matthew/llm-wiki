---
title: "선형변환"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1BcRlBE6USxmcT0_IPKulpNhB2lEJwUHs/view"
---

# 선형변환

⬅︎ [[Linear Algebra]]

## 한 줄 요약
선형변환의 행렬 표현, 핵과 상을 다룬다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation
V W
T : R 3 ® R 2 , T ([x, y, z ]) = [x + z - 1, y - z + 1]
W'
T
T : R ® R , T ([x, y, z ]) = [x + z , y - z ]
3 2
v w
æ é xù ö é xù
ç ÷ é x + z ù é1 0 1 ù ê ú
T : R 3 ® R 2 , T ç êê y úú ÷ = ê ú =ê ú ê yú
ç ê z ú ÷ ë y - z û ë0 1 - 1û ê z ú
èë ûø ë û
Domain, Codomain, Image,
T : P2 ® P3 , T (p ) = xp Pre-image, Range, Standard Matrix

### 2쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation
Reflection
Contractions Projections Rotations
Dilations

### 3쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation
How to Determine the Standard Matrix of a Linear Transformation
T:R n ® R m , T (x ) = Ax = [c1 c 2 L c n ]x
T:R 3 ® R 2 , T ( x, y, z ) = ( x + y, y - z )
T (e1 ) = [c1 c 2 L c n ]e1 = c1 Standard Matrix of A ?
T (e 2 ) = [c1 c 2 L c n ]e 2 = c 2
M T:R 3 ® R 2 , T (x ) = Ax
T (e n ) = [c1 c 2 L c n ]e n = c n
é0 ù é1ù é1ù
T (x1 ) = ê ú T (x 2 ) = ê ú T (x 3 ) = ê ú
ë1û ë0 û ë1û
e1 = x1 + x 2 e 2 = x 2 + x3 e3 = x1 + x 2 + x 3
A = [T (e1 ) T (e 2 ) L T (e n )]
A=?

### 4쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation

### 5쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation

### 6쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation

### 7쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation
V W
W'
A BC
[v]B [w ]C
v w
B C
é 1 1 - 1ù
A BC = êê - 1 0 1úú
êë 1 0 0úû
T : P2 ® P2 v = 1+ 2x + x2 B = {1, x, x 2 } [v ]B = [1,2,1]
T a + bx + cx 2 = b + cx + ax 2 w = 2 + x + x2 C = {1, x + 1, x 2 + x} [w ]C = [2,0,1]

### 8쪽

Linear Transformations
Linear Transformations, Matrix of a Linear Transformation
V W
W'
ABC
[v]B [w]C
B C
V W
W'
ADE
[v]D [w]E
D E

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1BcRlBE6USxmcT0_IPKulpNhB2lEJwUHs/view)
