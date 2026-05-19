---
title: 1계 ODE 풀이법
tags: [concept, math, ode]
domain: Math
subject: Differential Equations
created: 2026-05-19
---

## 정의
> $\dfrac{dy}{dx} = f(x, y)$ 형태의 1계 상미분방정식을 해석적으로 푸는 표준 기법들.

## 직관
- 형식을 먼저 분류 → 분류에 맞는 풀이법 적용
- 해석적으로 안 풀리면 → [[ODE 수치해법]]

## 분류와 풀이법

### 1. 분리변수 (Separable)
형태: $\dfrac{dy}{dx} = g(x)\,h(y)$
$$
\int \frac{dy}{h(y)} = \int g(x)\,dx + C
$$
예: $\dfrac{dy}{dx} = xy \;\Rightarrow\; \ln|y| = \tfrac{x^2}{2} + C$

### 2. 선형 1계 (Linear)
표준형: $\dfrac{dy}{dx} + P(x)\,y = Q(x)$
- 적분인자: $\mu(x) = e^{\int P(x)\,dx}$
- 양변에 곱하면 $\dfrac{d}{dx}[\mu y] = \mu Q$
$$
y = \frac{1}{\mu(x)}\!\left(\int \mu(x)\,Q(x)\,dx + C\right)
$$

### 3. 완전 미분 (Exact)
형태: $M(x,y)\,dx + N(x,y)\,dy = 0$
- 완전조건: $\dfrac{\partial M}{\partial y} = \dfrac{\partial N}{\partial x}$
- 그러면 $\exists F$ s.t. $F_x = M, F_y = N$ → $F(x,y) = C$
- 완전하지 않으면 **적분인자**로 곱해서 완전형으로

### 4. Bernoulli
형태: $\dfrac{dy}{dx} + P(x)\,y = Q(x)\,y^n$
- $v = y^{1-n}$ 치환 → 선형으로 환원

### 5. 동차 (Homogeneous, 차수 같음)
형태: $\dfrac{dy}{dx} = F\!\left(\dfrac{y}{x}\right)$
- $v = y/x$ 치환 → 분리변수형

## 풀이 흐름차트
```
방정식 받음
 ├─ 분리되나? → Yes: 분리변수
 ├─ 선형형으로 정리되나? → Yes: 적분인자
 ├─ M dx + N dy = 0 형? → 완전? → Yes: 위 절차
 ├─ y^n 항? → Bernoulli
 └─ y/x 의 함수? → 동차 치환
```

## 기계공학에서 어디 쓰나
- **냉각/가열** (Newton 냉각법칙): $dT/dt = -k(T - T_\infty)$ → 분리변수
- **RC 회로 / 충전**: 선형 1계
- **자유낙하 with 공기저항**: $m\dot v = mg - cv$ — 선형
- **반응속도 (1차반응)**: 분리변수

## LLM × 이 주제
- 식 형태 자동 분류 + 적절한 풀이법 안내
- SymPy의 `dsolve()`로 풀이 검증 → [[Tool Use]]
- 해의 정성적 특성(평형점·안정성) 설명

## 관련 개념
- [[ODE 분류]]
- [[ODE 수치해법]]
- [[Laplace 변환]]

## 참고
- Boyce & DiPrima, *Elementary Differential Equations*, Ch. 2
