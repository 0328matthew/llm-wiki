---
title: Ch19 Numerical Integration (Trapezoidal, Simpson)
chapter: 19
part: 5
tags:
  - numerical-analysis
  - numerical-integration
  - trapezoidal-rule
  - simpson-rule
  - newton-cotes
---

# Ch19. Numerical Integration Formulas

> **Part 5 — Numerical Integration & Differentiation** 시작.  
> 적분 $I = \int_a^b f(x)\,dx$를 다항식 근사로 추정.

## 19.2 Newton-Cotes Formulas

복잡한 함수나 표 데이터를 **다항식**으로 대체 후 적분:
$$I = \int_a^b f(x)\,dx \approx \int_a^b f_n(x)\,dx$$

### Closed vs Open
- **Closed**: 적분 양 끝점 포함 (Trapezoidal, Simpson 등)
- **Open**: 양 끝점 제외 (특이점·발산 회피용)

작은 구간으로 나눠 **piecewise**(composite) 적용 가능.

## 19.3 Trapezoidal Rule

### Single Application (1차 다항식 = 직선)
$$\boxed{I = (b - a)\,\frac{f(a) + f(b)}{2}}$$

### 오차
$$E_t = -\frac{1}{12}f''(\xi)(b - a)^3, \quad a \le \xi \le b$$

- 선형 함수: $f''=0$이므로 **정확**
- 곡률이 클수록 오차 ↑

### Ex 19.1
$f(x) = 0.2 + 25x - 200x^2 + 675x^3 - 900x^4 + 400x^5$, $[0, 0.8]$  
참값: 1.640533

$$I = 0.8 \times \frac{0.2 + 0.232}{2} = 0.1728, \quad \varepsilon_t = 89.5\% \;(매우\;큼!)$$

평균 $\bar f'' = -60$이므로 추정 오차 $E_a = -\dfrac{1}{12}(-60)(0.8)^3 = 2.56$.

### Composite Trapezoidal Rule
$[a, b]$를 $n$개 등간격($h = (b-a)/n$) 구간으로 분할:

$$\boxed{I = \frac{h}{2}\left[f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)\right]}$$

또는
$$I = (b-a)\,\frac{f(x_0) + 2\sum_{i=1}^{n-1} f(x_i) + f(x_n)}{2n}$$

### Composite Error
$$E_a = -\frac{(b-a)^3}{12 n^2}\bar f''$$

**$n$이 두 배가 되면 오차는 약 1/4**.

### Ex 19.2 — 2-segment
$f(0) = 0.2$, $f(0.4) = 2.456$, $f(0.8) = 0.232$
$$I = 0.8 \times \frac{0.2 + 2(2.456) + 0.232}{4} = 1.0688, \quad \varepsilon_t = 34.9\%$$

$n$ 증가에 따른 수렴:

| $n$ | $h$ | $I$ | $\varepsilon_t$ |
| --- | --- | --- | --- |
| 2 | 0.4 | 1.0688 | 34.9% |
| 4 | 0.2 | 1.4848 | 9.5% |
| 6 | 0.133 | 1.5703 | 4.3% |
| 10 | 0.08 | 1.6150 | 1.6% |

### MATLAB
```matlab
function I = trap(func, a, b, n, varargin)
% Composite trapezoidal rule
if nargin < 3, error('at least 3 input arguments required'), end
if nargin < 4 || isempty(n), n = 100; end
x = a; h = (b - a)/n;
s = func(a, varargin{:});
for i = 1:n-1
    x = x + h;
    s = s + 2*func(x, varargin{:});
end
s = s + func(b, varargin{:});
I = (b - a) * s / (2*n);
```

내장: `trapz(x, y)` 또는 `integral(fun, a, b)`.

## 19.4 Simpson's Rule

Trapezoidal보다 정확한 Newton-Cotes 공식.

### Simpson's 1/3 Rule (2차 다항식, 3점)
$$\boxed{I = \frac{h}{3}\left[f(x_0) + 4f(x_1) + f(x_2)\right], \quad h = \frac{b-a}{2}}$$

또는 $I = (b-a)\dfrac{f(x_0) + 4f(x_1) + f(x_2)}{6}$.

#### 오차
$$E_t = -\frac{1}{90}h^5 f^{(4)}(\xi) = -\frac{(b-a)^5}{2880}f^{(4)}(\xi)$$

- 2차 보간이지만 **4차 도함수 의존** → **3차 다항식까지 정확** (운 좋은 정확도)
- 같은 점 수로 trapezoidal보다 훨씬 정확

#### Ex 19.3
$n=2$ ($h=0.4$):
$$I = 0.8 \times \frac{0.2 + 4(2.456) + 0.232}{6} = 1.367467, \quad \varepsilon_t = 16.6\%$$

→ 같은 함수에 대해 Trapezoidal(89.5%)보다 5배 더 정확.

### Composite Simpson's 1/3 (짝수 segments)
$$I = (b-a)\,\frac{f(x_0) + 4\sum_{i=1,3,5,\ldots}^{n-1} f(x_i) + 2\sum_{j=2,4,6,\ldots}^{n-2} f(x_j) + f(x_n)}{3n}$$

**제약**: $n$이 **짝수**여야 함 (홀수 점).

#### 오차
$$E_a = -\frac{(b-a)^5}{180 n^4}\bar f^{(4)}$$

$n$이 두 배면 오차는 약 **1/16**!

#### Ex 19.4 — $n=4$ ($h=0.2$)
$$I = 0.8 \times \frac{0.2 + 4(1.288+3.464) + 2(2.456) + 0.232}{12} = 1.623467, \quad \varepsilon_t = 1.04\%$$

### Simpson's 3/8 Rule (3차 다항식, 4점)
$$\boxed{I = \frac{3h}{8}\left[f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)\right], \quad h = \frac{b-a}{3}}$$

또는 $I = (b-a)\dfrac{f(x_0) + 3f(x_1) + 3f(x_2) + f(x_3)}{8}$.

#### 오차
$$E_t = -\frac{3}{80}h^5 f^{(4)}(\xi) = -\frac{(b-a)^5}{6480}f^{(4)}(\xi)$$

### 1/3 vs 3/8 비교
- 둘 다 **3차 정확도**
- 1/3은 3점, 3/8은 4점 필요 → **1/3이 보통 더 효율적**
- 단, **segments가 홀수**일 때는 3/8을 활용

### Ex 19.5 — 5 segments 처리법
1. 앞 2 segments: Simpson 1/3
2. 뒤 3 segments: Simpson 3/8
3. 합산

$f(x)$ 적분 ($a=0, b=0.8$, 5 segments, $h=0.16$):
- 1/3 부분: $I_1 = 0.32 \times \dfrac{0.2 + 4(1.297) + 1.743}{6} = 0.3803$
- 3/8 부분: $I_2 = 0.48 \times \dfrac{1.743 + 3(3.186+3.182) + 0.232}{8} = 1.2648$
- 총합: $I = 1.6451$ (참값 1.6405와 매우 근접)

## 정리

| 방법 | 점 수 | 정확도 | 오차 | 제약 |
| --- | --- | --- | --- | --- |
| Trapezoidal | 2 | 1차 | $O(h^2)$ composite | — |
| Simpson 1/3 | 3 | 3차 | $O(h^4)$ composite | $n$ 짝수 |
| Simpson 3/8 | 4 | 3차 | $O(h^4)$ composite | $n$이 3의 배수 |

다음: [[Ch19 Numerical Integration — Advanced|고차 NC / Multiple Integrals]] → [[Ch20-1 Romberg Integration|Romberg]] → [[Ch20-2 Gauss Quadrature|Gauss Quadrature]]

---

← [[Ch18 Splines와 Piecewise Interpolation]] | ↑ [[Numerical Analysis]] | → [[Ch19 Numerical Integration — Advanced]]

#numerical-analysis #ch19 #numerical-integration #simpson-rule
