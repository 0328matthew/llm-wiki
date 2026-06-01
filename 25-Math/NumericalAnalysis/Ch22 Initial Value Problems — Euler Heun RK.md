---
title: Ch22 Initial Value Problems (Euler, Heun, Runge-Kutta)
chapter: 22
part: 6
tags:
  - numerical-analysis
  - ode
  - euler-method
  - heun-method
  - runge-kutta
  - ivp
---

# Ch22. Initial-Value Problems (IVP)

> **Part 6** 시작. ODE $\dfrac{dy}{dt} = f(t, y), \; y(t_0) = y_0$를 수치적으로 적분.

## 22.1 Overview

기본 아이디어:
$$\frac{y_{i+1} - y_i}{t_{i+1} - t_i} \approx f(t_i, y_i) \implies y_{i+1} \approx y_i + f(t_i, y_i)(t_{i+1} - t_i)$$

일반 형태:
$$\boxed{y_{i+1} = y_i + \phi\,h}$$
- $\phi$: **increment function** (구간 대표 기울기)
- $h = t_{i+1} - t_i$: step size
- "New value = old value + slope × step size"

## 22.2 Euler's Method

가장 단순: 구간 시작점의 기울기를 그대로 사용.
$$\boxed{y_{i+1} = y_i + f(t_i, y_i)\,h}$$

### Ex 22.1 — Euler
$\dfrac{dy}{dt} = 4 e^{0.8t} - 0.5y$, $y(0) = 2$, $t \in [0, 4]$, $h = 1$  
해석해: $y = \dfrac{4}{1.3}(e^{0.8t} - e^{-0.5t}) + 2 e^{-0.5t}$

| $t$ | $y_\text{true}$ | $y_\text{Euler}$ | $|\varepsilon_t|$ (%) |
| --- | --- | --- | --- |
| 0 | 2.00000 | 2.00000 | — |
| 1 | 6.19463 | 5.00000 | 19.28 |
| 2 | 14.84392 | 11.40216 | 23.19 |
| 3 | 33.67717 | 25.51321 | 24.24 |
| 4 | 75.33896 | 56.84931 | 24.54 |

→ 곡률이 큰 곡선에서 Euler는 항상 한쪽으로 치우침. 시간이 갈수록 오차 누적.

### 오차 분석
Taylor:
$$y_{i+1} = y_i + f(t_i,y_i)h + \frac{f'(t_i,y_i)}{2!}h^2 + \cdots$$

- **Local truncation error** (한 스텝): $E_a = \dfrac{f'(t_i,y_i)}{2}h^2 = O(h^2)$
- **Global truncation error** (전체): $O(h)$ — step size에 **비례**

따라서:
- $h$ 절반 → 전체 오차 절반
- 해가 1차 다항식이면 Euler는 **정확** ($f' = 0$)

### Stability of Euler
테스트 ODE: $\dfrac{dy}{dt} = -ay$, $y = y_0 e^{-at}$ (감쇠)

Euler 적용: $y_{i+1} = y_i(1 - ah)$  
**증폭계수** $g = 1 - ah$:
- $|g| > 1$ ($h > 2/a$) → 발산
- $|g| < 1$ ($h < 2/a$) → 안정

→ Euler는 **조건부 안정** (conditionally stable).

⚠ **부정확성과 불안정성은 다른 문제**. 부정확하지만 안정한 방법도 존재.

### MATLAB `eulode`
```matlab
function [t, y] = eulode(dydt, tspan, y0, h, varargin)
% Euler ODE solver
if nargin < 4, error('at least 4 input arguments required'), end
ti = tspan(1); tf = tspan(2);
if ~(tf > ti), error('upper limit must be greater than lower'), end
t = (ti:h:tf)'; n = length(t);
if t(n) < tf, t(n+1) = tf; n = n+1; end
y = y0 * ones(n, 1);
for i = 1:n-1
    y(i+1) = y(i) + dydt(t(i), y(i), varargin{:}) * (t(i+1) - t(i));
end
end
```

호출:
```matlab
>> dydt = @(t, y) 4*exp(0.8*t) - 0.5*y;
>> [t, y] = eulode(dydt, [0 4], 2, 1);
```

## 22.3 Improvements — Heun's Method

Euler의 본질적 문제: 구간 **시작점**의 기울기를 구간 전체에 적용.

**Heun's Method**: 구간 시작과 끝의 기울기를 **평균**.

### Predictor-Corrector
**Predictor** (Euler):
$$y_{i+1}^0 = y_i + f(t_i, y_i)\,h$$

끝점 기울기 추정:
$$y'_{i+1} = f(t_{i+1}, y_{i+1}^0)$$

**Corrector** (평균 기울기):
$$\boxed{y_{i+1} = y_i + \frac{f(t_i, y_i) + f(t_{i+1}, y_{i+1}^0)}{2}\,h}$$

### Heun의 반복 (Iteration)
Corrector를 한 번만 적용하지 않고, 수렴할 때까지 반복:
$$y_{i+1}^j = y_i + \frac{f(t_i, y_i) + f(t_{i+1}, y_{i+1}^{j-1})}{2}\,h, \quad j = 1, 2, \ldots$$

정지 조건: $\varepsilon_a = \left|\dfrac{y_{i+1}^j - y_{i+1}^{j-1}}{y_{i+1}^j}\right| \cdot 100\%$ < tol

오차 차수: $O(h^2)$ local, $O(h^2)$ global → Euler보다 **한 차원** 정확.

## 22.4 Runge-Kutta Methods

> Taylor 급수의 정확도를 **고차 도함수 없이** 달성.

일반 형태:
$$y_{i+1} = y_i + \phi(t_i, y_i, h)\,h$$
$$\phi = a_1 k_1 + a_2 k_2 + \cdots + a_n k_n$$
$$k_1 = f(t_i, y_i), \;\; k_2 = f(t_i + p_1 h, y_i + q_{11}k_1 h), \;\; \ldots$$

- $n = 1$ → Euler (1차 RK)
- $n = 2$ → 2차 RK (Heun, Midpoint, Ralston)
- $n = 4$ → **Classical RK4** (실무 표준)

### 2nd-Order RK
$$y_{i+1} = y_i + (a_1 k_1 + a_2 k_2)h$$
$$k_1 = f(t_i, y_i), \quad k_2 = f(t_i + p_1 h, y_i + q_{11} k_1 h)$$

2차 Taylor와 비교하면 3개 식, 4개 미지수:
$$a_1 + a_2 = 1, \quad a_2 p_1 = \tfrac{1}{2}, \quad a_2 q_{11} = \tfrac{1}{2}$$

→ **$a_2$를 자유로 선택**하면 무한히 많은 2차 RK 변형.

#### 대표적 3가지

| 방법 | $a_2$ | $a_1$ | $p_1 = q_{11}$ | 공식 |
| --- | --- | --- | --- | --- |
| **Heun (no iteration)** | 1/2 | 1/2 | 1 | $y_{i+1} = y_i + \tfrac{1}{2}(k_1 + k_2)h$ |
| **Midpoint** | 1 | 0 | 1/2 | $y_{i+1} = y_i + k_2 h$ |
| **Ralston** | 3/4 | 1/4 | 2/3 | $y_{i+1} = y_i + \tfrac{1}{4}(k_1 + 3 k_2)h$ |

- **Midpoint**: $k_2 = f(t_i + h/2, y_i + k_1 h/2)$ — 구간 중점의 기울기 사용
- **Ralston**: 2차 RK 중 **truncation error 최소**

### Classical 4th-Order RK (RK4) — 표준

가장 널리 쓰임:
$$\boxed{y_{i+1} = y_i + \tfrac{1}{6}(k_1 + 2 k_2 + 2 k_3 + k_4)h}$$

$$k_1 = f(t_i, y_i)$$
$$k_2 = f(t_i + \tfrac{h}{2}, y_i + \tfrac{1}{2}k_1 h)$$
$$k_3 = f(t_i + \tfrac{h}{2}, y_i + \tfrac{1}{2}k_2 h)$$
$$k_4 = f(t_i + h, y_i + k_3 h)$$

- 가중 평균 $(k_1 + 2k_2 + 2k_3 + k_4)/6$ → [[Ch19 Numerical Integration — Trapezoidal Simpson|Simpson 1/3 rule]]과 유사한 구조
- Local error $O(h^5)$, **global error $O(h^4)$**
- **4번 함수 평가**로 4차 정확도 달성 → 매우 효율적

### Ex 22.3 — RK4
$y' = 4e^{0.8t} - 0.5y$, $y(0) = 2$, $h = 1$.

$k_1 = f(0, 2) = 4 - 1 = 3$  
$y(0.5) = 2 + 3(0.5) = 3.5$, $k_2 = f(0.5, 3.5) = 4.217299$  
$y(0.5) = 2 + 4.217299(0.5) = 4.108649$, $k_3 = f(0.5, 4.108649) = 3.912974$  
$y(1) = 2 + 3.912974(1) = 5.912974$, $k_4 = f(1, 5.912974) = 5.945677$

$\phi = \tfrac{1}{6}[3 + 2(4.217299) + 2(3.912974) + 5.945677] = 4.201037$

$y(1) = 2 + 4.201037 = 6.201037$ vs 참값 6.194631, $\varepsilon_t = 0.103\%$.

→ 단 1 스텝에 0.1% 오차! (Euler는 19.28%였음)

### Butcher's 5th-Order RK
$$y_{i+1} = y_i + \tfrac{1}{90}(7 k_1 + 32 k_3 + 12 k_4 + 32 k_5 + 7 k_6)\,h$$

- 6번 함수 평가
- Global error $O(h^5)$
- Boole's rule(Newton-Cotes) 가중치 패턴과 유사
- 정확도 vs 계산 비용 trade-off — 보통 RK4가 sweet spot

## MATLAB 구현

### 2차 (Midpoint variant)
```matlab
function [x, u] = RK2_M(f, a, b, u0, n)
h = (b-a)/n; hh = h/2;
x = (a+h:h:b);
k1 = feval(f, a, u0);
k2 = feval(f, a+hh, u0+hh*k1);
u(1) = u0 + k2*h;
for i = 1:n-1
    k1 = feval(f, x(i), u(i));
    k2 = feval(f, x(i)+hh, u(i)+hh*k1);
    u(i+1) = u(i) + k2*h;
end
x = [a x]; u = [u0 u];
plot(x, u);
```

### 4차 Classical RK
```matlab
function [x, u] = RK4_C(f, a, b, u0, n)
h = (b-a)/n; hh = h/2;
x = (a+h:h:b);
k1 = feval(f, a, u0);
k2 = feval(f, a+hh, u0 + k1*hh);
k3 = feval(f, a+hh, u0 + k2*hh);
k4 = feval(f, a+h,  u0 + k3*h);
u(1) = u0 + (k1 + 2*k2 + 2*k3 + k4)*h/6;
for i = 1:n-1
    k1 = feval(f, x(i),    u(i));
    k2 = feval(f, x(i)+hh, u(i) + k1*hh);
    k3 = feval(f, x(i)+hh, u(i) + k2*hh);
    k4 = feval(f, x(i)+h,  u(i) + k3*h);
    u(i+1) = u(i) + (k1 + 2*k2 + 2*k3 + k4)*h/6;
end
x = [a x]; u = [u0 u];
plot(x, u);
```

### 사용 예시
```matlab
function yp = f1(t, y)
    yp = 4*exp(0.8*t) - 0.5*y;
end

>> [t, u] = RK2_M('f1', 0, 4, 2, 4)
   u = 2.0000  6.2173  14.9407  33.9412  75.9686

>> [t, u] = RK4_C('f1', 0, 4, 2, 4)
   u = 2.0000  6.2010  14.8625  33.7213  75.4392    % 참값과 매우 근접
```

## 정리: 방법별 비교

| 방법 | 함수 평가/스텝 | Local err | Global err | 비고 |
| --- | --- | --- | --- | --- |
| Euler | 1 | $O(h^2)$ | $O(h)$ | 가장 단순, 부정확 |
| Heun | 2 | $O(h^3)$ | $O(h^2)$ | Predictor-corrector |
| Midpoint | 2 | $O(h^3)$ | $O(h^2)$ | 중점 기울기 |
| Ralston | 2 | $O(h^3)$ | $O(h^2)$ | 2차 RK 중 최적 |
| **RK4** | **4** | **$O(h^5)$** | **$O(h^4)$** | **표준 선택** |
| RK5 (Butcher) | 6 | $O(h^6)$ | $O(h^5)$ | 더 정확하지만 비용↑ |

같은 정확도를 위해서:
- Euler가 1000 스텝 필요한 문제 → RK4는 보통 10 스텝으로 OK (함수 평가 40번 vs 1000번)

다음: [[Ch24 Boundary Value Problems|Boundary Value Problems (Shooting & FD)]]

---

← [[Ch21 Numerical Differentiation]] | → [[Ch24 Boundary Value Problems]]

#numerical-analysis #ch22 #ode #euler-method #heun-method #runge-kutta
