---
title: "Ch1 — Introduction to Differential Equations"
tags: [note, math, ode, chapter]
domain: Math
subject: DifferentialEquations
chapter: 1
source: "Zill, *Differential Equations*, 양민진 교수 강의 (PNU)"
created: 2026-05-19
---

⬅︎ [[Math-MOC]] · 다음 → [[Ch2 1계 미분방정식 풀이법]]

## 한 줄 요약
미분방정식(DE)은 미지함수와 그 도함수 사이의 관계식. **Type / Order / Linearity** 세 축으로 분류하고, 해의 개념과 초기값 문제를 정의한다.

## 1.1 정의와 용어

### DE 정의
> 하나 이상의 미지함수(종속변수)의 도함수와 그 독립변수에 대한 관계를 표현한 식.

### 분류 1 — Type
| 종류 | 변수 | 예 |
|---|---|---|
| **ODE** (상미분) | 독립변수 1개 | $y' + 5y = e^x$ |
| **PDE** (편미분) | 독립변수 2개 이상 | $\partial^2 u/\partial x^2 + \partial^2 u/\partial y^2 = 0$ |

### 분류 2 — Order
- 식에 나타나는 **최고차 도함수의 차수**
- 1계 ODE 미분형식: $M(x,y)\,dx + N(x,y)\,dy = 0$
- $n$계 일반형: $F(x, y, y', \ldots, y^{(n)}) = 0$
- $n$계 정상형(normal form): $\dfrac{d^n y}{dx^n} = f(x, y, y', \ldots, y^{(n-1)})$

### 분류 3 — Linearity
**선형** ODE 형태:
$$
a_n(x)y^{(n)} + a_{n-1}(x)y^{(n-1)} + \cdots + a_1(x)y' + a_0(x)y = g(x)
$$
조건:
1. $y, y', \ldots, y^{(n)}$의 거듭제곱이 모두 1
2. 계수는 $x$만의 함수

**비선형 예시**:
- $y \cdot y' + x = 0$ ($y \cdot y'$ 곱)
- $(y')^3 + y = 0$ (도함수 거듭제곱)
- $y'' + \sin y = 0$ ($y$의 비선형 함수)

## 해의 개념

### 해 (Solution)
구간 $I$에서 $n$계 ODE에 대입했을 때 항등식이 되는, $I$에서 $n$번 연속 미분 가능한 함수.

- **자명해(Trivial solution)**: $y \equiv 0$
- **명시해(Explicit)**: $y = \phi(x)$
- **음함수해(Implicit)**: $G(x,y) = 0$이 적어도 한 함수 $\phi$를 만족
  - 예: $\frac{dy}{dx} = -x/y$의 해 $x^2 + y^2 = 25$

### 해족 (Family of solutions)
- 1계: 1-parameter family $G(x,y,c) = 0$ — 상수 1개
- $n$계: $n$-parameter family $G(x,y,c_1,\ldots,c_n) = 0$
- **하나의 ODE가 무한히 많은 해**를 갖는다 → 상수를 정하는 추가 조건 필요

## 1.2 초기값 문제 (IVP)

$n$계 IVP:
$$
\text{Solve: } \frac{d^n y}{dx^n} = f(x, y, y', \ldots, y^{(n-1)})
$$
$$
\text{Subject to: } y(x_0) = y_0,\ y'(x_0) = y_1,\ \ldots,\ y^{(n-1)}(x_0) = y_{n-1}
$$

- 모든 조건이 **같은 점 $x_0$**에서 주어짐 → IVP
- 서로 다른 점에서 주어지면 [[Ch5 고계 ODE 모델링|BVP (경계값 문제)]]

### 1계 IVP 예
$$
y' = y,\quad y(0) = 3 \implies y = 3e^x
$$

### 2계 IVP 예
$$
y'' + 16y = 0,\quad y(\pi/2) = -2,\ y'(\pi/2) = 1
$$

## 1.3 수학적 모델링
모델 구성:
1. 변화의 원인 변수 식별
2. 합리적 가정/가설 수립

### 주요 1계 모델 (Ch.3로 이어짐)
- **인구동력학(Malthusian)**: $\dfrac{dP}{dt} = kP$
- **방사성 붕괴**: $\dfrac{dA}{dt} = kA$ ($k < 0$)
- **Newton의 냉각/가열 법칙**:
$$
\frac{dT}{dt} = k(T - T_m)
$$
- **낙체(Newton 2법칙)**: $m\dfrac{dv}{dt} = mg - F_\text{drag}$

## 자주 하는 실수
- "$xy' + y = 0$이 비선형"으로 잘못 분류 ($x$가 계수, $y$의 1차이므로 선형)
- $y' + (y')^2 = 0$를 선형으로 봄 ($(y')^2$ 때문에 비선형)
- $n$계 ODE에 조건이 $n$개 필요한데 누락
- IVP/BVP 차이 무시
- 음함수해 vs 명시해 표기 혼동

## 관련 개념
- [[Ch2 1계 미분방정식 풀이법]]
- [[Ch3 1계 미분방정식 응용]]

## 참고
- Zill, *A First Course in Differential Equations*, Ch. 1
- 양민진 교수 강의자료
