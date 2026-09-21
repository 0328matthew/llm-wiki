---
title: "기저 변환 행렬"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1CnFulyJGccGnEtMgdyw-vImzwZeySk4O/view"
---

# 기저 변환 행렬

⬅︎ [[Linear Algebra]]

## 한 줄 요약
서로 다른 기저에서 같은 벡터의 좌표를 변환한다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

General Vector Spaces
Coordinate, Transition Matrix
é15 ù æ é1 ù é2ù é - 1ù ö v = x2 + 2x + 2
ç ê ú ê ú ê ú÷ V = P2
v = êê 7 úú B = ç ê 2ú , ê 3ú , ê 2 ú ÷
V = R3
êë22úû ç ê1 ú ê1 ú ê- 3ú ÷ (
B = 1, x + 1, x 2 + x )
è ë û ë û ë ûø
[v ]B = ? [v ]B = ?

### 2쪽

General Vector Spaces
Coordinate, Transition Matrix
w = [ 2, 3, 4 ] V = span(C ) Ì R 3 [w ]C = ?
x = [ 2, 2, 3 ] C = ( [ 1, 2, 3 ], [ 1, 1, 1 ] ) [x]C = ?

### 3쪽

General Vector Spaces
Coordinate, Transition Matrix
V = R2 V = span(B ) Ì P2
B = ( [ 2, 1 ], [ 1, 2 ] ) (
B = x + 1, x 2 + x )
w1 = [ 3, 3 ] w1 = x 2 + 2 x + 1
w 2 = [ 1,-1 ] w 2 = x2 -1

### 4쪽

General Vector Spaces
Coordinate, Transition Matrix
[b1 ]C = éê ùú [b 2 ]C = éê ùú
a c
B = ( b1 , b 2 ) C = ( c1 , c 2 ) b1 = ac1 + bc 2 b 2 = cc1 + dc 2
ëb û ëd û
ax + cx2 ù éa c ù é x1 ù
x = x1b1 + x2b 2 [x]C = éê 1 ú = êb d ú ê x ú
bx + dx
[x]B = éê 1 ùú ë 1 2û ë ûë 2 û
x
= x1 (ac1 + bc 2 ) + x2 (cc1 + dc 2 )
ë x2 û éa c ù
= (ax1 + cx2 )c1 + (bx1 + dx2 )c 2 =ê
b d ú[x]B = PC ¬ B [x]B = PB ®C [x]B = P[x]B
ë û

### 5쪽

General Vector Spaces
Coordinate, Transition Matrix
B = ( b1 , b 2 , L , b k )
C = ( c1 , c 2 , L , c k )
b1 = [ c1 c 2 L c k ][b1 ]C
b 2 = [ c1 c 2 L c k ][b 2 ]C
M
b k = [ c1 c 2 L c k ][b k ]C
V = span(C ) Ì R 3 x = [ b1 b 2 L b k ][x]B
x = [- 3, - 1, 1 ]
= C[ [b1 ]C [b 2 ]C L [b k ]C ][x]B
B = ( [- 1, 0, 1 ], [- 2,-1, 0 ] )
PC ¬B = ? [x]B = ? = C[x]C
C = ( [ 1, 2, 3 ], [ 1, 1, 1 ] )
[x]C = ? PC ¬ B = [ [b1 ]C [b 2 ]C L [b k ]C ]

### 6쪽

General Vector Spaces
Coordinate, Transition Matrix

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1CnFulyJGccGnEtMgdyw-vImzwZeySk4O/view)
