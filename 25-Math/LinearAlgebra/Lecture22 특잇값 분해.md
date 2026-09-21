---
title: "특잇값 분해"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/17DL-TI2m7tzbCtYJWCIuBeyH1CdphESA/view"
---

# 특잇값 분해

⬅︎ [[Linear Algebra]]

## 한 줄 요약
특잇값과 직교행렬을 이용한 행렬 분해를 다룬다.

## 핵심 개념
- 실수 행렬은 $A=U\Sigma V^T$로 분해된다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Applications
Singular Value Decomposition
Let A be an m ´ n matrix
A T A is a n ´ n matrix Let A be an n ´ n matrix
x ¹ 0, x T Ax > 0 Û A is positive definite Û "i, li > 0
x ( A A ) x = ( Ax ) Ax
T T T
x ¹ 0, x T Ax ³ 0 Û A is semi-positive definite Û "i, li ³ 0
= ( Ax ) × ( Ax ) = Ax
2
ìïif Ax = 0 only when x = 0 then AT A is positive definite
í T
ïîif Ax = 0 for some non-zero vector x then A A is semi-positive definite

### 2쪽

Applications A : m ´ n matrix
Singular Value Decomposition AT A : n ´ n
(semi-)positive definite
symmetric matrix
é1 0 0ù
ê0 1 1úú
A=ê
ê1 0 0ú
ê ú
ë0 1 1û
l1 = 4; s 1 = 2
l2 = 2; s 2 = 2
l3 = 0; s 3 = 0
2 [0,1,1]
T
v1 = 1
v 2 = [1,0,0]
T
2 [0,-1,1]
T
v3 = 1

### 3쪽

Applications
Singular Value Decomposition
l1 = 4; l2 = 2; l3 = 0
é1 0 0ù s 1 = 2; s 2 = 2 ; s 3 = 0 é0 ù é1ù
ê0 ê ú ê ú
1 1úú 1 ê1ú 1 ê0 ú
A=ê v1 = 1 2 [0,1,1]
T u1 = ; u2 = ; u3 = ? u 4 = ?
ê1 0 0ú 2 ê0 ú 2 ê1ú
ê ú v 2 = [1,0,0] ê ú ê ú
T
ë0 1 1û 1
ë û ë0 û
2 [0,-1,1]
T
v3 = 1

### 4쪽

Applications
Singular Value Decomposition
Rn Rm
x A y
x = V[x]B y = U[y ]C
B = {v1 , L , v n } C = {u1 , L , u m }
y = Ax
és 1 0 L 0 0 L 0ù [y ]C = UT AV[x]B
é (1 s 1 )v1T A T ù
ê ú
ê0 s
ê 2 L 0 0 L 0úú = Σ [x]B
ê M ú êM M O M M M Mú
ê(1 s k )v k A ú
T T
ê ú
U AV = ê ú[Av1 L Av n ] = ê 0 0 L sk 0ú = Σ
T
Av 2 0 L
ê u ú
k +1 ê0 0 L 0 0 L 0ú
ê M ú ê ú
ê T
ú êM M L M M O 0ú
êë um úû ê0 0
ë L 0 0 L 0úû

### 5쪽

Applications
Singular Value Decomposition
é 1 - 1ù
A = êê 1 1úú = U Σ V T
êë - 1 - 1úû
é 0 -1 0 ù
U = êê 1 2 0 1 2 úú
êë - 1 2 0 1 2 úû
é1 2 -1 2ù
V=ê ú
ë1 2 1 2û
é2 0 ù
Σ = êê0 2 úú
êë0 0 úû

### 6쪽

Applications
Singular Value Decomposition
Reduced SVD A = U Σ V T = U k Σ k VkT
m´m m´n n´n m´k k ´k k ´n
és 1 0 L 0ù
ê0 s L 0 úú
U k = [u1 u 2 L u k ] VkT = [v1 v2 L vk ]
T
Σk = ê 2
êM M O M ú
ê ú
ë0 0 L sk û
For an n ´ n matrix A with rank n, A -1 = V Σ -1 UT = Vn Σ n-1 UTn (Q ( V Σ U ) A = A ( V Σ U ) = I )
-1 T -1 T
n

### 7쪽

Applications Rn
L
A
m´n
Rm null ( AT )
Singular Value Decomposition {u k +1 ,L , u m }
{v k +1 ,L , v n }
0
{v1 ,L , v k }
x Ax
{u1 ,L , u k }
Range( L)
= col ( A )
LT
Rm Rn null ( A )
AT
{u k +1 ,L , u n } {v k +1 ,L , v m }
0
y AT y
{u1 ,L , u k }
{v1 ,L , v k }
Range( LT )
= col ( AT ) = row ( A )

### 8쪽

Applications
Singular Value Decomposition
+ é Σ -k 1 0 ù
k
-1
For an m ´ n matrix A with rank k (£ m, n), A = V Σ U = V Σ U
k
T
k
+ T
Σ =ê ú
n´k k ´k k ´m n´n n´m m´m
ë 0 0û
x = A +b ( AT A)x = ( AT A) A + b = AT (UΣV T )(VΣ + UT )b = AT b

### 9쪽

Applications
Singular Value Decomposition
Unique Least Squares Solutions Non-unique Least Squares Solutions
rank ( AT A) = n rank ( AT A) < n
x = A +b x = A + b + x 0 = VΣ + UT b + x 0 x 0 Î null ( AT A)
VΣ + UT b = Vy Î span ({ v1 , v 2 ,..., v k } ) = col ( AT ) = row ( A )
é 2 1ù é3ù
A = êê 4 2 úú b = êê 2 úú
êë -2 1 úû êë 1 úû
é1 3ù é3ù
A = êê 1 3 úú b = êê 2 úú
êë 3 9 úû êë 2 úû

### 10쪽

Applications
Singular Value Decomposition
k =1 k =3 k =5

### 11쪽

Applications
Singular Value Decomposition
k = 15 k = 30 363 ´ 305 ´ 3( RGB )

### 12쪽

Applications
QR Factorization, Singular Value Decomposition
k =1 k =3 k =7

### 13쪽

Applications
Singular Value Decomposition
k = 15 k = 30 284 ´ 273 ´ 3( RGB )

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/17DL-TI2m7tzbCtYJWCIuBeyH1CdphESA/view)
