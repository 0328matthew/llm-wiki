---
title: "미분방정식 응용"
tags: [note, math, lecture]
domain: Math
subject: LinearAlgebra
created: 2026-09-21
source_pdf: "https://drive.google.com/file/d/15vjCe40uDVy5u44AXypczeZLZYrWqeH0/view"
---

# 미분방정식 응용

⬅︎ [[Linear Algebra]]

## 한 줄 요약
행렬을 이용해 선형 미분방정식계를 분석한다.

## 강의자료 본문

원본 PDF의 텍스트 계층을 페이지별로 옮겼다. 그림, 사진, 손글씨 및 일부 수식은 텍스트로 완전히 옮겨지지 않으므로 원본을 함께 확인한다.

### 1쪽

Applications
Differential Equations df (t )
= lf (t ) ; f (0 ) = a
dt
f (t ) = ae lt
F' (t ) = DF(t )
é f1 (t )ù él1 0 0 ù é f1 (t )ù
d ê ú = ê 0 O 0 úê M ú
M
dt ê ú ê úê ú
êë f n (t )úû êë 0 0 ln úû êë f n (t )úû
é f1 (t )ù ée 1 0 ù é f1 (0 )ù
lt
0
ê M ú=ê 0 O
ú
0 ú êê M úú
ê ú ê
êë f n (t )úû êë 0 0 e lnt úû êë f n (0 )úû
F(t ) = e Dt F(0 )
x' (t ) = 1x(t ) x(0 ) = 3; y ' (t ) = 2 y (t ) y (0 ) = 4; z ' (t ) = 3 z (t ) z (0 ) = 2

### 2쪽

Applications
Differential Equations
dF(t ) dF(t ) dP -1F(t ) dG (t )
= AF(t ) = PDP -1F(t ) = DP -1F(t ) = DG (t )
dt dt dt dt
ì n
G (t ) = e G (0 ) ïF(t ) = PG (t ) = å bk e v k
Dt lk t
í k =1
ïF(t ) = Pe Dt G (0 ) = Pe Dt P -1F(0 ) = e At F(0 )
G ( 0 ) = P -1F ( 0 ) î

### 3쪽

Applications
Differential Equations
y '''+ a2 y ''+ a1 y '+ a0 y = 0
é 0 1 0 ù
A = êê 0 0 1 úú
êë -a0 -a1 -a2 úû
y ' ' '-6 y ' '+3 y '+10 y = 0

### 4쪽

Applications
Differential Equations
é y (0) ù é l10 ù é l02 ù é l0n ù
ê ú l1t ê ú l2 t ê ú l2 t ê ú n
ê M = b
ú 1 ê e M + b
ú 2 ê e M ú + L + b2 e ê M ú y=y (0)
= å bk e lk t
êy ( n -1) ú êl1 ú
n -1 ê l2 ú
n -1 ê ln ú
n -1 k =1
ë û ë û ë û ë û
y ' ' '-6 y ' '+3 y '+10 y = 0 ; y (0 ) = 3, y ' (0 ) = 6, y ' ' (0 ) = 30

### 5쪽

Applications
Differential Equations
d é x(t )ù é 0 1 ù é x(t )ù é x(0 )ù é0ù é x ' ù é0 0 - 2 ù é x ù é x(0) ù é 2 ù
ê ú = ê ú ê ú ; ê ú =ê ú ê y 'ú = ê1 2 1 ú ê y ú ; ê y (0)ú = ê- 1ú
dt ë y (t )û ë- 2 - 3û ë y (t )û ë y (0 )û ë1û
ê ú ê úê ú ê ú ê ú
êë z ' úû êë1 0 3 úû êë z úû êë z (0) úû êë 0 úû
d é x(t )ù é1 - 1ù é x(t )ù é x(0 )ù é1ù é 2ù é0 ù é1 1ù
= ; = x' = Ax + a a = ê ú x 0 = ê ú A = ê
dt êë y (t )úû êë1 3 úû êë y (t )úû êë y (0 )úû êë1úû
ú
ë 2û ë5 û ë 4 -2 û
d é x1 ( t ) ù é 1 2 ù é x1 ( t ) ù é x1 ( 0 ) ù é -2 ù
ê ú= ê ú; ê ú=
dt ë x2 ( t ) û êë -1 -1úû ë x2 ( t ) û ë x2 ( 0 ) û êë 2 úû

## 관련 개념
- [[Math-MOC]]

## 참고
- [원본 강의 PDF](https://drive.google.com/file/d/15vjCe40uDVy5u44AXypczeZLZYrWqeH0/view)
