---
title: Numerical Analysis (수치해석) — 강의 노트
course: 수치해석 (NUM-ANAL)
semester: 2026 Spring
institution: 부산대학교 (Pusan National University)
professor: 이현철 (Prof. Lee Hyun-Chul)
textbook: Chapra, S. C., Applied Numerical Methods with MATLAB for Engineers and Scientists, 4th/5th Ed.
tags:
  - numerical-analysis
  - matlab
  - course-notes
  - mechanical-engineering
---

# 수치해석 (Numerical Analysis) — 2026

> **Chapra의 *Applied Numerical Methods with MATLAB*** 기반 강의 노트.
> 부산대학교 기계공학부 2학년 1학기 수치해석 과목 (2026 봄).

## 목차

### Part 1 — Modeling, Computers, Error Analysis
- [[00 Syllabus]] — 강의계획서, 평가, 일정
- [[Ch01 수학적 모델링과 수치해석]] — 번지점프 ODE, Euler 입문, 보존법칙
- [[Ch04 오차 분석과 반올림]] — Roundoff vs Truncation, Taylor 급수, 유한차분
- [[Ch04 예제 — 오차 분석]] — Ex 4.3 ($\cos \pi/3$), Ex 4.4 (FD 비교)

### Part 2 — Roots & Optimization
- [[Ch05 Bracketing Methods]] — Bisection, False Position
- [[Ch06 Open Methods]] — Fixed-point, Newton-Raphson, Secant, Müller, Brent
- [[Ch06 예제 — Open Methods]] — 모든 Ex 6.x
- [[Ch07 Optimization]] — Golden Section, Parabolic Interpolation, Newton
- [[Ch07 예제 — Optimization]] — Ex 7.2/7.3/7.4 + MATLAB `fminbnd`, `fminsearch`

### Part 3 — Linear Systems
- [[Ch08 선형방정식과 행렬]] — 행렬 대수, 3-jumper 시스템
- [[Ch09 Gauss Elimination]] — Naive Gauss, Pivoting, Thomas (삼중대각)
- [[Ch10 LU Factorization]] — LU, Cholesky, MATLAB `lu`/`chol`
- [[Ch11 Matrix Inverse and Condition]] — Norms, Condition number, Hilbert
- [[Ch12 Iterative Methods]] — Jacobi, Gauss-Seidel, SOR, 다변량 Newton-Raphson
- [[Ch13 Eigenvalues]] — Power method, MATLAB `eig`

### Part 4 — Curve Fitting
- [[Ch14 Curve Fitting — Linear Regression]] — Least squares, 비선형 모델 선형화
- [[Ch15 General Linear LS와 Nonlinear Regression]] — Polynomial/Multiple/Nonlinear
- [[Ch17 Polynomial Interpolation]] — Newton/Lagrange, Runge 현상
- [[Ch18 Splines와 Piecewise Interpolation]] — Linear/Quadratic/Cubic Spline

### Part 5 — Numerical Integration & Differentiation
- [[Ch19 Numerical Integration — Trapezoidal Simpson]] — Newton-Cotes, Simpson 1/3·3/8
- [[Ch19 Numerical Integration — Advanced]] — 고차 NC (Boole), Unequal, Open, Multiple
- [[Ch20-1 Romberg Integration]] — Richardson Extrapolation, Romberg table
- [[Ch20-2 Gauss Quadrature]] — Gauss-Legendre $n$-point, $(2n-1)$차 정확도
- [[Ch21 Numerical Differentiation]] — Forward/Backward/Centered FD, Richardson, 비등간격, 노이즈, Partial

### Part 6 — Ordinary Differential Equations
- [[Ch22 Initial Value Problems — Euler Heun RK]] — Euler, Heun, RK2 (Heun/Midpoint/Ralston), **RK4**
- [[Ch24 Boundary Value Problems]] — Shooting Method + Finite Difference (Dirichlet/Neumann/Nonlinear)

## 핵심 개념 지도

### 정확도 차수 (Order)

| Method | Global Order |
| --- | --- |
| Trapezoidal | $O(h^2)$ |
| Simpson 1/3 | $O(h^4)$ |
| Gauss-Legendre $n$pt | $(2n-1)$차 정확 |
| Euler | $O(h)$ |
| Heun | $O(h^2)$ |
| **RK4** | $O(h^4)$ |
| Centered FD ($f'$) | $O(h^2)$ ~ $O(h^4)$ |

### MATLAB 표준 함수 빠른 참조

| 작업 | 함수 |
| --- | --- |
| 근 찾기 | `fzero`, `roots` |
| 최적화 | `fminbnd` (1D), `fminsearch` (다변량) |
| 선형 시스템 | `A\b` (LU 자동), `lu`, `chol` |
| 고유값 | `eig` |
| 회귀 | `polyfit`, `polyval`, `lsqcurvefit` |
| 보간 | `interp1`, `spline`, `pchip` |
| 적분 | `trapz`, `integral`, `quad` |
| 미분 | `diff`, `gradient` |
| ODE | `ode45`, `ode23s` (stiff), `bvp4c` |

## 평가 비중 (시험 대비)

- 중간고사 30% (Ch01~Ch15)
- 기말고사 40% (Ch17~Ch24)
- 과제 20% — MATLAB 구현 위주
- 출석 10%

## 참고
- 사용자 프로필: [[user_profile]]
- 관련 수학: [[../DifferentialEquations]] (있다면)
- 외부 자료:
  - Chapra textbook companion site (MATLAB M-files)
  - [MIT 18.085 Computational Science and Engineering](https://ocw.mit.edu/courses/18-085-computational-science-and-engineering-i-fall-2008/)

#numerical-analysis #course-notes #mechanical-engineering #matlab
