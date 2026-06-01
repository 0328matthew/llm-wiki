---
title: Numerical Analysis - 강의 개요
course: 수치해석 (Numerical Analysis)
semester: 2026-1
instructor: 이현철 (hyunchul.lee@pusan.ac.kr)
textbook: Applied Numerical Methods with MATLAB for Engineers and Scientists (Chapra, 4th/5th Ed.)
tags:
  - numerical-analysis
  - syllabus
  - 25-math
---

# Numerical Analysis (수치해석) — 2026년 1학기

> 부산대학교 기계공학부 / 강의자: 이현철 교수
> 교재: Steven C. Chapra, *Applied Numerical Methods with MATLAB for Engineers and Scientists* (4th Ed. 2018 또는 5th Ed. 2022, McGraw-Hill)

## 평가 비율

| 항목 | 비중 |
| --- | --- |
| 중간고사 | 30% |
| 기말고사 | 40% |
| 과제 (Homework) | 20% |
| 출석 | 10% |

## 강의 계획

| 주차 | 주제 | 과제 |
| --- | --- | --- |
| 1 | Math. Modeling, Num. Methods, and Prob. Solving | — |
| 2 | Errors, Programming with MATLAB | Programming with MATLAB |
| 3 | Roots: Bracketing Methods, Open Methods | Solving an Equation |
| 4 | Optimization | — |
| 5 | Gaussian Elimination, LU Factorization | Solving SLE with Direct Methods |
| 6 | Matrix Inversion and Condition | — |
| 7 | Iterative Methods | Solving SLE with Iterative Methods |
| 8 | **중간고사** | — |
| 9 | Curve Fitting: Linear Regression | — |
| 10 | Curve Fitting: Polynomial Regression | Interpolation |
| 11 | Curve Fitting: Splines and Interpolation | — |
| 12 | Numerical Integration and Differentiation | Numerical Diff./Integ. |
| 13 | ODE: Initial-Value Problems | — |
| 14 | Adaptive Methods and Stiff Systems | Initial Value Problem |
| 15 | **기말고사** | — |

## 수치해석이란?

> *"Numerical analysis is the study of algorithms that use **numerical approximation** for the problems of mathematical analysis."* — Wikipedia

가장 오래된 사례: **바빌로니아 점토판** — $\sqrt{2} \approx 1.41421296$ (정밀치 $1.41421356\ldots$).

### 공학 문제 해결의 일반 흐름
1. **수학적 모델링** — 지배방정식 수립 (예: 낙하 운동 $\dfrac{dv}{dt} = g - \dfrac{c_d}{m}v^2$)
2. **수치 방법론의 이해** — 수렴성과 오차 한계
3. **수치 해석 수행** — MATLAB / C / Fortran 등으로 프로그래밍 후 계산
4. **결과 분석** — 물리 현상에 대한 통찰

## 본 강의의 6대 주제

1. **Part 1** — Modeling, Computers, and Error Analysis → [[Ch01 수학적 모델링]], [[Ch04 오차 분석과 반올림]]
2. **Part 2** — Roots of Equations → [[Ch05 Bracketing Methods]], [[Ch06 Open Methods]]
3. **Part 3** — Linear Algebraic Equations → [[Ch08 선형방정식과 행렬]], [[Ch09 Gauss Elimination]], [[Ch10 LU Factorization]], [[Ch11 Matrix Inverse and Condition]], [[Ch12 Iterative Methods]]
4. **Part 4** — Curve Fitting & Interpolation → [[Ch13 Linear Regression]], [[Ch14 General Linear Least Squares]], [[Ch15 Polynomial Interpolation]], [[Ch17 Splines]]
5. **Part 5** — Numerical Integration & Differentiation → [[Ch18 Newton-Cotes]], [[Ch19-1 Gauss Quadrature]], [[Ch20-1 Numerical Differentiation]]
6. **Part 6** — Ordinary Differential Equations → [[Ch21 Runge-Kutta Methods]], [[Ch22-1 Adaptive Methods]], [[Ch24-1 Boundary Value Problems]]

## 응용 예시
- 자동차 / 항공기 구조해석 (FEM)
- F1 머신 외부유동 (CFD)
- 핵연료 집합체 해석
- 반도체 / 광학 시뮬레이션

---

#numerical-analysis #syllabus #2026
