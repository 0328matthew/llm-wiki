---
title: "선형연산자의 대각화"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1ufqI3rrXoaiX-nQTu8ckCgQFfyrlxnF0/view"
---

# 선형연산자의 대각화

⬅︎ [[Linear Algebra]]

## 한 줄 요약
고유벡터 기저에 대한 선형연산자의 대각 표현을 다룬다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Eigenvalues
Diagonalization of Linear Operators
L : P2 ® P2
L( p( x )) = xp' ( x ) + p( x + 1)
2 2 4
l1 = 3 ; p1 ( x ) = x + x +1
3 3
l2 = 2 ; p2 ( x ) = x + 1
l3 = 1; p3 ( x ) = 1
B = x 2 , x, 1 = ( b1 , b 2 , b 3 )
æ 3 0 0ö
ç ÷
A = ç 2 2 0÷
ç1 1 1÷
è ø

### 2쪽

Eigenvalues
Diagonalization of Linear Operators

### 3쪽

Eigenvalues
Diagonalization of Linear Operators

### 4쪽

V
Eigenvalues
V
L
v w
C B C B Diagonalization of Linear Operators
n n n n
L : P2 ® P2
R R R R
A D
[ w ]C = A [ v ]C L( p( x )) = xp' ( x ) + p( x + 1)
[ v ]C [ w ]C [ v ]B [ w ]B D = P -1AP
[ w ]B = D [ v ]B P = PB ®C C = ( x 2 , x, 1 ) = ( c1 , c 2 , c3 )
[ v ]C = PB®C [ v ]B [ w ]C = PB®C [ w ]B
[L(x )] = (3,2,1)
2
C æ 3 0 0ö
ç ÷
[L(x )]C = (0,2,1) A = ç 2 2 0÷
ç1 1 1÷
[L(1)]C = (0,0,1) è ø
æ 2 4 ö
B = ç x 2 + x + 1, x + 1, 1 ÷ = ( b1 , b 2 , b3 )
è 3 3 ø
æ 2 3 0 0ö
ç ÷
P = éë [b1 ]C , [b 2 ]C , [b3 ]C ùû = ç 4 3 1 0 ÷
ç 1 1 1÷
è ø
æ 3 0 0ö
ç ÷
D = ç0 2 0÷
ç0 0 1÷
è ø

### 5쪽

Eigenvalues
Diagonalization of Linear Operators

### 6쪽

z
Eigenvalues
Diagonalization of Linear Operators
[1,1,1] L : R3 ® R3 L(x) = 180o rotation of x about line l
L(x) = Ax A=?
y
L ([1,1,1]) = [1,1,1] For any vector v on plane p : x + y + z = 0, L ( v ) = - v
x l
ìïl1 = 1 ìl2 = l3 = -1
í ïï
ïî v1 = [1,1,1] í v 2 and v 3 are any linearly independent two vectors on plane p
ï
ïî( v 2 = [ -1,1, 0] , v 3 = [ -1, 0,1])
é1 -1 -1ù é1 0 0 ù é1 1 1ù é -1 2 2 ù
æ ö
1 1
A = PDP -1 = êê1 1 0 úú êê0 -1 0 úú ç ÷ êê -1 2 -1úú = êê 2 -1 2 úú
è3ø 3
êë1 0 1 úû êë0 0 -1úû êë -1 -1 2 úû êë 2 2 -1úû

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1ufqI3rrXoaiX-nQTu8ckCgQFfyrlxnF0/view)
