---
title: Differential Equations (미분방정식) — 강의 노트
course: 미분방정식 (Differential Equations)
institution: 부산대학교 (Pusan National University)
professor: 양민진
textbook: Zill, D. G., *A First Course in Differential Equations with Modeling Applications*
tags:
  - differential-equations
  - ode
  - course-notes
  - mechanical-engineering
---

# 미분방정식 (Differential Equations)

⬅︎ [[Math-MOC]]

> **Zill, *A First Course in Differential Equations*** 기반 강의 노트.
> 부산대학교 기계공학부 · 양민진 교수.

## 목차

### Part 1 — 1계 미분방정식
- [[Ch1 미분방정식 입문]] — Type / Order / Linearity, IVP, 해의 정의
- [[Ch2 1계 미분방정식 풀이법]] — 변수분리, 선형, 완전미분, 적분인자
- [[Ch3 1계 미분방정식 응용]] — 모델링: 인구·붕괴·냉각·혼합·낙하

### Part 2 — 고계 미분방정식
- [[Ch4 고계 선형 미분방정식]] — 동차/비동차, 특성방정식, 매개변수 변환
- [[Ch5 고계 ODE 모델링]] — 스프링-질량-감쇠, 진동 (자유/강제), 공명

### Part 3 — Laplace 변환
- [[Ch7 Laplace 변환]] — 정의, 역변환, 미분방정식 풀이, 단위계단·디랙델타

## 핵심 개념 지도

### 1계 ODE 풀이 흐름
1. **분류** — separable? linear? exact?
2. **변환** — 적분인자, 치환, Bernoulli 등
3. **적분** — 일반해 → 초기값 대입 → 특수해
4. **검증** — 대입해서 원식 만족 확인

### 고계 선형 ODE
- 동차 일반해: 특성방정식 근의 유형(실수/중근/복소)에 따라 결정
- 비동차: 특수해 = 미정계수법 / 매개변수 변환법
- 일반해 = $y_h + y_p$

### Laplace 변환 빠른 참조
| 함수 | 변환 |
| --- | --- |
| $1$ | $1/s$ |
| $e^{at}$ | $1/(s-a)$ |
| $\sin(at)$ | $a/(s^2+a^2)$ |
| $\cos(at)$ | $s/(s^2+a^2)$ |
| $t^n$ | $n!/s^{n+1}$ |
| $u(t-a)$ | $e^{-as}/s$ |
| $\delta(t-a)$ | $e^{-as}$ |
| $f^{(n)}(t)$ | $s^n F(s) - s^{n-1}f(0) - \cdots - f^{(n-1)}(0)$ |

## 관련 노트
- 수치해석 ODE 파트: [[Ch22 Initial Value Problems — Euler Heun RK]], [[Ch24 Boundary Value Problems]]
- 인덱스 허브: [[Numerical Analysis]]

#differential-equations #ode #course-notes #mechanical-engineering
