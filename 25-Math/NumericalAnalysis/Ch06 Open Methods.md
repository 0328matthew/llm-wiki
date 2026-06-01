---
title: Ch06 Roots of Equations — Open Methods
chapter: 6
part: 2
tags:
  - numerical-analysis
  - root-finding
  - newton-raphson
  - secant
  - fixed-point
---

# Ch6. Roots of Equations: Open Methods

> Open Methods는 [[Ch05 Bracketing Methods]]와 달리 **근을 감쌀 필요가 없음**. 한 개 또는 두 개의 초기 추정값에서 시작해 반복식을 통해 근에 접근.

## 개요

| 구분 | 특징 |
| --- | --- |
| (a) Bracketing | 구간 내 근 보장, 항상 수렴, 느림 |
| (b)(c) Open | 단일/이중 초기값, 빠름, 발산 가능 |

본 챕터의 방법들:
1. Simple Fixed-Point Iteration (one-point iteration)
2. Newton-Raphson Method
3. Secant Method
4. Müller's Method
5. Inverse Quadratic Method
6. Brent's Method (혼합)

## 6.1 Simple Fixed-Point Iteration

### 아이디어
$f(x) = 0$을 $x = g(x)$ 꼴로 정리한 후:
$$\boxed{x_{i+1} = g(x_i)}$$

오차:
$$\varepsilon_a = \left|\frac{x_{i+1} - x_i}{x_{i+1}}\right| \times 100\%$$

### 수렴성
$$E_{i+1} = g'(\xi)\,E_i$$

- **수렴 조건**: $|g'(\xi)| < 1$
- **발산**: $|g'(\xi)| > 1$
- $g'(\xi) > 0$ → monotone, $g'(\xi) < 0$ → oscillating (spiral)

### Ex 6.1 — $f(x) = e^{-x} - x$
$x_{i+1} = e^{-x_i}$로 변형. $x_0 = 0$ 시작. 참값 $\bar{x} = 0.56714329$.

→ **선형 수렴** ($|\varepsilon_{t,i+1}/\varepsilon_{t,i}|$가 일정한 비율로 감소)

## 6.2 Newton-Raphson Method

### 가장 널리 쓰이는 방법

기하학적 의미: $(x_i, f(x_i))$에서 접선을 그어 $x$축과 만나는 점을 새 근으로.

$$\boxed{x_{i+1} = x_i - \frac{f(x_i)}{f'(x_i)}}$$

### 수렴 특성
- **이차 수렴** (quadratic convergence): $E_{t,i+1} \propto E_{t,i}^2$ — 매 반복마다 유효숫자가 **2배**
- 단, $f'(x_i) \approx 0$이거나 변곡점 부근, 또는 잘못된 초기값에서 발산할 수 있음

### Poor Convergence 사례
- (a) 변곡점 근처: 발산
- (b) Local extremum: 진동
- (c) 다중 근: 느림
- (d) Local min/max에서 $f'=0$ → 0 division

### Ex 6.2 — $f(x) = e^{-x} - x$
$f'(x) = -e^{-x} - 1$
$$x_{i+1} = x_i - \frac{e^{-x_i} - x_i}{-e^{-x_i} - 1}$$
$x_0 = 0$ → 4번만에 0.567143으로 수렴.

### Ex 6.3 — $f(x) = x^{10} - 1$ (느린 수렴)
$x_0 = 0.5$ 시작:

| $i$ | $x_i$ | $\varepsilon_a$ (%) |
| --- | --- | --- |
| 0 | 0.5 | — |
| 1 | 51.65 | 99.032 |
| 2 | 46.485 | 11.111 |
| ... | ... | ... |
| 40 | 1.002316 | 2.130 |
| 41 | 1.000024 | 0.229 |
| 42 | 1 | 0.002 |

→ 잘못된 시작점이면 **수십 반복** 후에야 수렴. 그래프 확인 필수.

### MATLAB 구현 (`newtraph`)
```matlab
function [root, ea, iter] = newtraph(func, dfunc, xr, es, maxit, varargin)
% Newton-Raphson method
if nargin < 3, error('at least 3 input arguments required'), end
if nargin < 4 || isempty(es),    es = 0.0001; end
if nargin < 5 || isempty(maxit), maxit = 50;  end

iter = 0;
while (1)
    xrold = xr;
    xr = xr - func(xr) / dfunc(xr);
    iter = iter + 1;
    if xr ~= 0, ea = abs((xr - xrold) / xr) * 100; end
    if ea <= es || iter >= maxit, break, end
end
root = xr;
```

#### Ex 6.4 (Bungee jumper 질량)
```matlab
>> y  = @(m) sqrt(9.81*m/0.25)*tanh(sqrt(9.81*0.25/m)*4) - 36;
>> dy = @(m) (1/2)*sqrt(9.81*(m/0.25))*tanh((9.81*0.25/m)^(1/2)*4) ...
       - 9.81/(2*m) * sech(sqrt(9.81*0.25/m)*4)^2;
>> newtraph(y, dy, 140, 0.00001)
ans = 140.1543
```

## 6.3 Secant Method

### 아이디어
Newton-Raphson에서 $f'(x_i)$를 **backward finite difference**로 근사:
$$f'(x_i) \approx \frac{f(x_{i-1}) - f(x_i)}{x_{i-1} - x_i}$$

대입하면:
$$\boxed{x_{i+1} = x_i - \frac{f(x_i)(x_{i-1} - x_i)}{f(x_{i-1}) - f(x_i)}}$$

- **두 개의 초기값** 필요 (단, bracket 불필요)
- 도함수 필요 없음 → Newton-Raphson 대비 장점
- 수렴률 ≈ $\varphi \approx 1.618$ (Newton 2보다 약간 느림)

### Modified Secant Method
점 두 개 대신 **작은 섭동값** $\delta$ 사용:
$$f'(x_i) \approx \frac{f(x_i + \delta x_i) - f(x_i)}{\delta x_i}$$
$$\boxed{x_{i+1} = x_i - \frac{\delta x_i\,f(x_i)}{f(x_i + \delta x_i) - f(x_i)}}$$

- 한 점만 필요, $\delta$는 보통 $10^{-3}$ 정도
- $\delta$가 너무 작으면 roundoff 손실, 너무 크면 절단오차 증가

## 6.4 Müller's Method & Inverse Quadratic Method

### Müller's Method
- Secant가 **2점을 지나는 직선**을 사용한 것과 달리, **3점을 지나는 포물선**으로 근 추정
- 포물선과 $x$축 교점이 새 근 추정값
- **복소근**도 잡을 수 있음 (제곱근 안에 음수가 나오면)

### Inverse Quadratic Method
- 포물선이 $x$축과 만나지 않을 때 → $x = f(y)$로 뒤집어서 표현
- $y = 0$일 때 $x$ 값을 근으로 사용

## Brent's Method

> **신뢰성(bracketing) + 속도(open methods)**의 결합

- 기본: Bisection (수렴 보장)
- 가속: Secant 또는 Inverse Quadratic
- 매 반복마다 적절히 선택해 **결코 발산하지 않으면서도** 빠르게 수렴
- MATLAB `fzero`의 기본 알고리즘

### Brent 예제 — $f(x) = e^{-x} - x$
초기 추정값 (0.0, 0.2, 0.4)에서 Müller / Brent로 다음 추정값 계산.

## 정리: 각 방법 비교

| 방법 | 초기 추정 | 수렴 차수 | 도함수 | 안정성 |
| --- | --- | --- | --- | --- |
| Bisection | 2개 (bracket) | 선형 | 불필요 | 항상 수렴 |
| False Position | 2개 (bracket) | 선형~초선형 | 불필요 | 항상 수렴 |
| Fixed-point | 1개 | 선형 | 불필요 | $\|g'\|<1$일 때 |
| Newton-Raphson | 1개 | **2차** | 필요 | 발산 가능 |
| Secant | 2개 | 1.618 | 불필요 | 발산 가능 |
| Müller | 3개 | $\sim 1.84$ | 불필요 | 복소근 가능 |
| Brent | 2개 (bracket) | 초선형 | 불필요 | 항상 수렴 |

---

← [[Ch05 Bracketing Methods]] | 예제: [[Ch06 예제 — Open Methods]]

#numerical-analysis #ch06 #root-finding #newton-raphson #secant
