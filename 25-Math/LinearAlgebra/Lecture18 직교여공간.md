---
title: "직교여공간"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1T4YNDnsB1JeiahO9T4WwGtSeu6vvkCSk/view"
---

# 직교여공간

⬅︎ [[Linear Algebra]]

## 한 줄 요약
부분공간에 직교하는 벡터의 공간을 구한다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Orthogonality
Orthogonal Complements, Orthogonal Diagonalization
W^
W
W^
W = row(A ) W ^ = null (A )
W = col (A ) ( )
W ^ = null A T

### 2쪽

Orthogonality v
Orthogonal Complements, Orthogonal Diagonalization W
projW v
u2
O u1
Orthogonal projection of [3,2,4] on to
the x - y plane in R 3
Orthogonal projection of [3,2,4] on to
a subspace of R 3 :
W = Span{ [2 ,1,1], [1, - 2 ,0] }
Orthogonal projection of [3,2,4] on to the plane
W = {[ x, y, z ] | x + 2 y + z = 0}.

### 3쪽

Orthogonality
Orthogonal Complements, Orthogonal Diagonalization
A x=b ii) rank ( A ) < n
m´n
i) rank ( A ) = n infinitely many solutions
b Î col ( A ) Û unique solution x = xr + xn x r Î row ( A ) , x n Î null ( A )
b Ï col ( A ) Û no solution xr £ xr + xn = x
null ( AT ) null ( A )
é1 2 3 ù
col ( A ) é1 2 3 ù é6ù xn
A = êê 2 3 4 úú
b A = êê 2 3 4 úú b = êê 9 úú x
inconsistant êë 3 4 5 úû row ( A )
b êë 2 4 6 úû êë12 úû
consistant é6ù é6ù
b1 = êê 9 úú b 2 = êê 9 úú xr
xr = ?
êë12 úû êë13úû

### 4쪽

Orthogonality
Orthogonal Complements, Orthogonal Diagonalization
L(v1 ) = Av1 = 0
W
W L(v 2 ) = Av 2 = v 2
v1 v 2 L(v 3 ) = Av 3 = v 3
v3 æ0 0 0ö
ç ÷
D = ç0 1 0÷
ç0 0 1÷
è ø
A = PDP -1
P = ( v1 v2 v3 )
L : R3 ® R3
: orthogonal projection to the plane
W = {[ x, y, z ] | x + 2 y + z = 0}.
Find the standard matrix for the operator.

### 5쪽

Orthogonality
Orthogonal Complements, Orthogonal Diagonalization
L(v1 ) = Av1 = - v1
W
W L(v 2 ) = Av 2 = v 2
v1 v 2 L(v 3 ) = Av 3 = v 3
v3 æ -1 0 0ö
ç ÷
D = ç 0 1 0÷
ç 0 0 1÷
è ø
A = PDP -1
P = ( v1 v2 v3 )
L : R3 ® R3
: orthogonal reflection through the plane
W = {[ x, y, z ] | x + 2 y + z = 0}.
Find the standard matrix for the operator.

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1T4YNDnsB1JeiahO9T4WwGtSeu6vvkCSk/view)
