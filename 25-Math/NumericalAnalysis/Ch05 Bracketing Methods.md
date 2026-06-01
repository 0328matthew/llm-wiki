---
title: Ch05 Roots of Equations — Bracketing Methods
chapter: 5
part: 2
tags:
  - numerical-analysis
  - root-finding
  - bisection
  - false-position
---

# Ch5. Roots of Equations: Bracketing Methods

> **Part 2** — 비선형 방정식 $f(x)=0$의 근(root) 찾기

## 0. 초기 추정값 (Initial Guess)

방정식 $f(x)=0$의 근을 수치적으로 찾는 방법은 크게 두 부류:

### Bracketing Methods (구간법)
- **두 개의 초기 추정값**이 근을 감싸도록 한다 (bracket)
- 반드시 **부호가 바뀌는 구간** $[x_l, x_u]$에서 시작 → $f(x_l)f(x_u)<0$
- 항상 수렴 (slow but reliable)
- 예: **Bisection**, **False Position** (Regula Falsi)

### Open Methods (개방법)
- 하나 또는 여러 추정값, 구간 감쌀 필요 X
- 빠르지만 발산 가능
- 예: Fixed-point iteration, Newton-Raphson, Secant — [[Ch06 Open Methods]]

## Incremental Search (사전 탐색)

- $f(x_l)f(x_u)<0$이면 **적어도 1개**의 실근 존재
- 탐색 간격이 너무 짧으면 시간 소모, 너무 길면 근 누락
- **중복근**은 어떤 간격에서도 잡기 어려움 → 함수의 그래프를 우선 그려보기

## 5.4 Bisection (이등분법)

### 알고리즘
1. $f(x_l)f(x_u) < 0$ 확인 (Bracket 보장)
2. 중점 $x_r = \dfrac{x_l + x_u}{2}$
3. 부호 판정:
   - $f(x_l)f(x_r) < 0$ → 근은 왼쪽: $x_u \leftarrow x_r$
   - $f(x_l)f(x_r) > 0$ → 근은 오른쪽: $x_l \leftarrow x_r$
   - $= 0$ → 정확한 근 발견
4. 정지조건까지 반복

### 정지 조건 (Stopping Criterion)
참값을 모르므로 $\varepsilon_t$ 대신 **근사 상대오차**:
$$|\varepsilon_a| = \left|\frac{x_r^{\text{new}} - x_r^{\text{old}}}{x_r^{\text{new}}}\right| \times 100\% < \varepsilon_s$$

### 특성
- 항상 수렴 (선형 수렴, 매 반복마다 오차 절반)
- 느림 (특히 함수 곡률이 큰 경우)

### MATLAB M-file (`bisect`)
```matlab
function [root, ea, iter] = bisect(func, xl, xu, es, maxit, varargin)
% Bisection method to find a root
if nargin < 3, error('input arguments required >= 3'), end
test = func(xl, varargin{:}) * func(xu, varargin{:});
if test > 0, error('no sign change'), end
if nargin < 4 || isempty(es),    es = 0.001;  end
if nargin < 5 || isempty(maxit), maxit = 50;  end

iter = 0; xr = xl;
while (1)
    xrold = xr;
    xr = (xl + xu) / 2;
    iter = iter + 1;
    if xr ~= 0, ea = abs((xr - xrold) / xr) * 100; end
    test = func(xl, varargin{:}) * func(xr, varargin{:});
    if     test < 0, xu = xr;
    elseif test > 0, xl = xr;
    else             ea = 0;
    end
    if ea <= es || iter >= maxit, break, end
end
root = xr;
```

#### 사용 예 (Bungee jumper 질량 구하기)
```matlab
>> fm = @(m) sqrt(9.81*m/0.25) * tanh(sqrt(9.81*0.25/m)*4) - 36;
>> [mass, ea, iter] = bisect(fm, 40, 200)
mass = 142.7380
ea   = 8.5521e-04
iter = 17
```

## 5.5 False Position (가위치법, Linear Interpolation Method)

### 아이디어
$f(x_l)$, $f(x_u)$를 직선으로 연결, $x$절편을 새 근 추정값으로:

$$\boxed{\;x_r = x_u - \frac{f(x_u)(x_l - x_u)}{f(x_l) - f(x_u)}\;}$$

이후 부호 판정은 Bisection과 동일.

### 특성
- 보통 Bisection보다 **빠른 수렴**
- 함수의 **곡률이 크면 한쪽 끝이 고정**되어 오히려 느려질 수 있음
- $x^{10}-1=0$ 같은 예제에서 **false position이 bisection보다 더 느린** 경우도 있음

## 예제 비교

### Q1. $f(x) = e^x - 2 = 0$, $[0,1]$에서 폭 0.2 sub-interval
부호 변화: $f(0.6) = -0.17788$, $f(0.8) = 0.22554$  
→ 근은 $[0.6, 0.8]$ 안

### Q2. 위 구간에서 1% 정지조건으로 근 찾기
Bisection / False position 모두 수렴 확인 (참값 $\ln 2 \approx 0.6931$)

### Ex 5.6 — $f(x) = x^{10} - 1$ 의 함정
초기 $[0, 1.3]$에서:

#### Bisection
| Itr | $x_l$ | $x_r$ | $x_u$ | $\varepsilon_a$ (%) | $\varepsilon_t$ (%) |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0.65 | 1.3 | 100.0 | 35.0 |
| 2 | 0.65 | 0.975 | 1.3 | 33.3 | 2.5 |
| 5 | 0.975 | 1.015625 | 1.05625 | 4.0 | 1.6 |

#### False Position
| Itr | $x_l$ | $x_r$ | $x_u$ | $\varepsilon_a$ (%) | $\varepsilon_t$ (%) |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0.0943 | 1.3 | — | 90.6 |
| 5 | 0.338 | 0.408 | 1.3 | 17.1 | 59.2 |

**결론**: False position이 항상 우월하지는 않다. 곡률이 큰 함수에서는 한쪽 끝이 거의 움직이지 않아 수렴이 매우 느려진다.

## 핵심 정리
- Bracketing: 안전하지만 느림 (선형 수렴)
- Bisection: 매 반복마다 오차 절반
- False position: 보통 빠르지만 함수 곡률 큰 곳에선 함정
- 그래프 확인 → 초기 구간 설정이 중요

---

다음: [[Ch06 Open Methods]] (Newton-Raphson, Secant)

#numerical-analysis #ch05 #root-finding #bisection
