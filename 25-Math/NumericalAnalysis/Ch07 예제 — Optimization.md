---
title: Ch07 예제 - Golden Section / Parabolic / Multidimensional
chapter: 7
type: exercise
tags:
  - numerical-analysis
  - exercise
  - golden-section
  - parabolic-interpolation
---

# Ch7 예제 — Optimization 실습

## Ex 7.2 — Golden-Section Search

> $f(x) = \dfrac{x^2}{10} - 2\sin x$, $[0,4]$에서 최솟값 찾기

### 1차 반복
$$d = 0.61803 \cdot (4 - 0) = 2.4721$$
$$x_1 = 0 + 2.4721 = 2.4721, \quad x_2 = 4 - 2.4721 = 1.5279$$

$$f(x_2) = \frac{1.5279^2}{10} - 2\sin(1.5279) = -1.7647$$
$$f(x_1) = \frac{2.4721^2}{10} - 2\sin(2.4721) = -0.6300$$

$f(x_2) < f(x_1)$이므로 $x_l \sim x_1$이 새 구간, $x_u \leftarrow x_1$, $x_1 \leftarrow x_2$.

### 8회 반복 결과 (요약)
| $i$ | $x_l$ | $x_2$ | $x_1$ | $x_u$ | $d$ |
| --- | --- | --- | --- | --- | --- |
| 0 | 0 | 1.5279 | 2.4721 | 4.0000 | 2.4721 |
| 1 | 0 | 0.9443 | 1.5279 | 2.4721 | 1.5279 |
| 2 | 0.9443 | 1.5279 | 1.8885 | 2.4721 | 0.9443 |
| 3 | 0.9443 | 1.3050 | 1.5279 | 1.8885 | 0.5836 |
| 4 | 1.3050 | 1.5279 | 1.6656 | 1.8885 | 0.3607 |
| 5 | 1.3050 | 1.4427 | 1.5279 | 1.6656 | 0.2229 |
| 6 | 1.3050 | 1.3901 | 1.4427 | 1.5279 | 0.1378 |
| 7 | 1.3901 | 1.4427 | 1.4752 | 1.5279 | 0.0851 |

→ 최솟값 $\approx 1.4276$, $f \approx -1.7757$.

### 오차 분석
최적값이 $(x_2, x_1)$ 안에 있을 때:
$$\Delta x_a = (2\phi - 3)(x_u - x_l) = 0.2361(x_u - x_l)$$

$(x_1, x_u)$ 안에 있을 때 (최대 오차):
$$\Delta x_b = (2 - \phi)(x_u - x_l) = 0.3820(x_u - x_l)$$

정규화 최대 오차:
$$\varepsilon_a = (2-\phi)\left|\frac{x_u - x_l}{x_{opt}}\right| \times 100\%$$

정지 조건 $\varepsilon_a < \varepsilon_s$.

### MATLAB `goldmin`
```matlab
function [x, fx, ea, iter] = goldmin(f, xl, xu, es, maxit, varargin)
if nargin < 3, error('at least 3 input arguments required'), end
if nargin < 4 || isempty(es),    es = 0.0001; end
if nargin < 5 || isempty(maxit), maxit = 50;  end

phi = (1 + sqrt(5)) / 2;
iter = 0;
while (1)
    d  = (phi - 1) * (xu - xl);
    x1 = xl + d;
    x2 = xu - d;
    if f(x1, varargin{:}) < f(x2, varargin{:})
        xopt = x1; xl = x2;
    else
        xopt = x2; xu = x1;
    end
    iter = iter + 1;
    if xopt ~= 0, ea = (2 - phi) * abs((xu - xl)/xopt) * 100; end
    if ea <= es || iter >= maxit, break, end
end
x = xopt;
fx = f(xopt, varargin{:});
```

#### 예: 번지점프 도달 최대 깊이
```matlab
>> g=9.81; v0=55; m=80; c=15; z0=100;
>> z = @(t) -(z0 + m/c*(v0+m*g/c)*(1-exp(-c/m*t)) - m*g/c*t);
>> [xmin, fmin, ea, iter] = goldmin(z, 0, 8)
xmin = 3.8317
fmin = -192.8609
ea   = 6.9356e-005
```

## Ex 7.3 — Parabolic Interpolation

> 같은 함수 $f(x) = \dfrac{x^2}{10} - 2\sin x$, 초기 $(x_1, x_2, x_3) = (0, 1, 4)$

| $i$ | $x_1$ | $f(x_1)$ | $x_2$ | $f(x_2)$ | $x_3$ | $f(x_3)$ | $x_4$ | $f(x_4)$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 1 | -1.5829 | 4 | 3.1136 | 1.5055 | -1.7691 |
| 2 | 1 | -1.5829 | 1.5055 | -1.7691 | 4 | 3.1136 | 1.4903 | -1.7714 |
| 3 | 1 | -1.5829 | 1.4903 | -1.7714 | 1.5055 | -1.7691 | 1.4256 | -1.7757 |
| 4 | 1 | -1.5829 | 1.4256 | -1.7757 | 1.4903 | -1.7714 | 1.4266 | -1.7757 |
| 5 | 1.4256 | -1.7757 | 1.4266 | -1.7757 | 1.4903 | -1.7714 | 1.4275 | -1.7757 |

→ Golden보다 훨씬 빠르게 $x \approx 1.4275$로 수렴.

## MATLAB 통합 — `fminbnd`
Golden + Parabolic 혼합 (slow but reliable + fast but unreliable):

```matlab
[xmin, fval] = fminbnd(function, x1, x2)
```

`optimset`으로 옵션 조정:
```matlab
options = optimset('display', 'iter');
fminbnd(z, 0, 8, options)
% 출력: golden → parabolic 단계가 표기됨
```

## Ex 7.4 — Two-dimensional Visualization

> $f(x_1, x_2) = 2 + x_1 - x_2 + 2x_1^2 + 2x_1 x_2 + x_2^2$  
> 범위 $-2 \le x_1 \le 0$, $0 \le x_2 \le 3$

```matlab
x = linspace(-2, 0, 40); y = linspace(0, 3, 40);
[X, Y] = meshgrid(x, y);
Z = 2 + X - Y + 2*X.^2 + 2*X.*Y + Y.^2;
subplot(1,2,1); cs = contour(X,Y,Z); clabel(cs); grid;
xlabel('x_1'); ylabel('x_2'); title('(a) Contour plot');
subplot(1,2,2); surfc(X,Y,Z);
xlabel('x_1'); ylabel('x_2'); zlabel('f(x_1,x_2)'); title('(b) Mesh plot');
```

### `fminsearch` (다차원 최소화, Nelder-Mead simplex)
```matlab
>> f = @(x) 2 + x(1) - x(2) + 2*x(1)^2 + 2*x(1)*x(2) + x(2)^2;
>> [x, fval] = fminsearch(f, [-0.5, 0.5])
x    = -1.0000  1.5000
fval =  0.7500
```

→ 최적해 $x^* = (-1, 1.5)$, $f^* = 0.75$.

---

← 본 챕터 [[Ch07 Optimization]]

#numerical-analysis #ch07 #exercise
