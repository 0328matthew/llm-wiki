---
title: "최소제곱과 QR 분해"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/1YV9ke49KC28rRVNM5yvjRxJ5vyUf3-X6/view"
---

# 최소제곱과 QR 분해

⬅︎ [[Linear Algebra]]

## 한 줄 요약
직교사영으로 최소제곱해를 구하고 QR 분해를 활용한다.

## 핵심 개념
- 최소제곱 정규방정식은 $A^TAx=A^Tb$이다.
- $A=QR$이면 $Rx=Q^Tb$로 풀 수 있다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Applications
Least-Squares Solutions for Inconsistent Systems
row(A ) ( )
row A T = col (A )
row(A ) ^ null (A )
A col (A ) col (A ) = row(A )
T
null (A ) null (A )T
col (A ) ^ null A T

### 2쪽

Applications
Least-Squares Solutions for Inconsistent Systems
Ax = projW b
W ^ = null A T
Ax = b b - Ax º y
S min
b : Inconsistent b f
Sf ( )
y Î W ^ = null A T
AT y = 0
A T (b - Ax ) = 0
b : Consistent Ax
Ax
W = col (A )
W = col (A ) projW b
A T Ax = A T b
normal equations of Ax = b

### 3쪽

Applications
Least-Squares Solutions for Inconsistent Systems
Unique Least Squares Solutions Non-unique Least Squares Solutions
é 2 1ù é3ù é1 3ù é3ù
A = êê 4 2 úú b = êê 2 úú A = êê 1 3 úú b = êê 2 úú
êë -2 1 úû êë 1 úû êë 3 9 úû êë 2 úû

### 4쪽

Applications
Least-Squares Solutions for Inconsistent Systems
A Î R m´n x
Non-unique Least Squares Solutions
xr xn
Unique Least Squares Solutions rank ( A ) < n
rank ( A ) = n
x = xr + xn x r Î row ( AT A ) ,
AT Ax = AT b x = A+ b
x n Î null ( AT A ) = null ( A )
A + = ( AT A ) AT : pseudoinverse of A
-1
Least Squares Solutions with Minimum Norm ?
é 2 1ù é3ù
A = êê 4 2 úú b = êê 2 úú é1 3ù é3ù
A = êê 1 3 úú b = êê 2 úú
êë -2 1 úû êë 1 úû
êë 3 9 úû êë 2 úû

### 5쪽

Applications
Least-Squares Solutions for Inconsistent Systems
(a3 ,b3 )
(a5 ,b5 )
(a2 ,b2 )
(a1 ,b1 )
(a3 ,b3 ) (a4 ,b4 )
f ( x ) = c4 x 4 + c3 x 3 + c2 x 2 + c1 x + c0
é1 a1 a12 L a1t ù é c0 ù é b1 ù é1 a1 a12 a13 a14 ù é c0 ù é b1 ù
ê úê ú ê ú ê úê ú ê ú
a22 L a2t ú ê c1 ú êb2 ú ê1 a2 a22 a23 a24 ú ê c1 ú êb2 ú
ê1 a2
ê1 a3 a32 L a3t ú êc2 ú = ê b3 ú ê1 a3 a32 a33 a34 ú êc2 ú = ê b3 ú
ê úê ú ê ú ê úê ú ê ú
M úê M ú ê M ú ê1 a4 a42 a43 a44 ú ê c3 ú êb4 ú
êM M M M
ê1 ê1 a54 úû êëc4 úû êëb5 úû
ë an an2 L ant úû êë ct úû êëbn úû ë a5 a52 a53
n > t +1 Inconsistent Consistent

### 6쪽

Applications
Least-Squares Solutions for Inconsistent Systems
é1 - 2ù é4ù
A = êê1 1 úú B = êê 1 úú
êë1 2 úû êë- 1úû
é3 1ù éc0 ù é 4 ù éc0 ù 1 é 45 ù
ê1 9ú ê c ú = ê- 9ú ê c ú = 26 ê- 31ú
ë ûë 1 û ë û ë 1û ë û

### 7쪽

Applications
QR Factorization
v1 = w 1 w1 = v1 u1 A = [w1 w2 L wk ]
v2 = w2 -
w 2 × v1
v1 w2 =
w 2 × u1
u1 + v 2 u 2 = [u1 u 2 L u k ]R
v1 × v1 u1 × u1
w 3 × v1 w ×v w 3 × u1 w ×u
v3 = w3 - v1 - 3 2 v 2 w3 = u1 + 3 2 u 2 + v 3 u 3
v1 × v1 v2 × v2 u1 × u1 u2 × u2
M M
w k × v1 w ×v w ×v w k × u1 w ×u w ×u
vk = wk - v1 - k 2 v 2 L - k k -1 v k -1 wk = u1 + k 2 u 2 L + k k -1 u k -1 + v k u k
v1 × v1 v2 × v2 v k -1 × v k -1 u1 × u1 u2 × u2 u k -1 × u k -1

### 8쪽

Applications
QR Factorization é1 0 0ù
ê0 1 1úú
A=ê
ê1 1 0ú
ê ú
ë0 0 1û
A = [w1 w2 L wk ]
Q = [u1 u 2 L u k ]
R = QT A
AX = Β
A T AX = A T Β
X = R -1QT Β

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/1YV9ke49KC28rRVNM5yvjRxJ5vyUf3-X6/view)
