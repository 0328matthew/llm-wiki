---
title: Ch21 Numerical Differentiation
chapter: 21
part: 5
tags:
  - numerical-analysis
  - numerical-differentiation
  - finite-difference
  - richardson-extrapolation
---

# Ch21. Numerical Differentiation

## 21.1 개관

[[Ch04 오차 분석과 반올림#Taylor 급수와 유한 차분|Ch04]]에서 다룬 finite-difference의 확장: 더 높은 정확도 공식, 비등간격 데이터, 노이즈가 있는 데이터 처리.

기본 3 종류:
- **Forward** difference: $x_i, x_{i+1}, x_{i+2}, \ldots$
- **Backward** difference: $x_{i-2}, x_{i-1}, x_i$
- **Centered** difference: $x_{i-1}, x_i, x_{i+1}$ — 가장 정확

## 21.2 High-Accuracy Formulas

### Forward 공식 도출 (1차 도함수)
Taylor:
$$f(x_{i+1}) = f(x_i) + f'(x_i)h + \frac{f''(x_i)}{2!}h^2 + \cdots$$

기본 forward ($O(h)$):
$$f'(x_i) = \frac{f(x_{i+1}) - f(x_i)}{h} + O(h)$$

$f''(x_i)$를 forward FD 근사 $\dfrac{f(x_{i+2}) - 2f(x_{i+1}) + f(x_i)}{h^2}$로 대체하고 대입:
$$\boxed{f'(x_i) = \frac{-f(x_{i+2}) + 4f(x_{i+1}) - 3f(x_i)}{2h} + O(h^2)}$$

→ 정확도 $O(h) \to O(h^2)$로 한 차원 ↑.

### Forward Finite-Difference 공식표 ($O(h)$ vs $O(h^2)$)

| 도함수 | $O(h)$ | $O(h^2)$ |
| --- | --- | --- |
| $f'$ | $\dfrac{f_{i+1}-f_i}{h}$ | $\dfrac{-f_{i+2}+4f_{i+1}-3f_i}{2h}$ |
| $f''$ | $\dfrac{f_{i+2}-2f_{i+1}+f_i}{h^2}$ | $\dfrac{-f_{i+3}+4f_{i+2}-5f_{i+1}+2f_i}{h^2}$ |
| $f'''$ | $\dfrac{f_{i+3}-3f_{i+2}+3f_{i+1}-f_i}{h^3}$ | $\dfrac{-3f_{i+4}+14f_{i+3}-24f_{i+2}+18f_{i+1}-5f_i}{2h^3}$ |
| $f^{(4)}$ | $\dfrac{f_{i+4}-4f_{i+3}+6f_{i+2}-4f_{i+1}+f_i}{h^4}$ | $\dfrac{-2f_{i+5}+11f_{i+4}-24f_{i+3}+26f_{i+2}-14f_{i+1}+3f_i}{h^4}$ |

### Backward Finite-Difference

| 도함수 | $O(h)$ | $O(h^2)$ |
| --- | --- | --- |
| $f'$ | $\dfrac{f_i-f_{i-1}}{h}$ | $\dfrac{3f_i-4f_{i-1}+f_{i-2}}{2h}$ |
| $f''$ | $\dfrac{f_i-2f_{i-1}+f_{i-2}}{h^2}$ | $\dfrac{2f_i-5f_{i-1}+4f_{i-2}-f_{i-3}}{h^2}$ |

### Centered Finite-Difference ($O(h^2)$, $O(h^4)$ — 가장 정확)

| 도함수 | $O(h^2)$ | $O(h^4)$ |
| --- | --- | --- |
| $f'$ | $\dfrac{f_{i+1}-f_{i-1}}{2h}$ | $\dfrac{-f_{i+2}+8f_{i+1}-8f_{i-1}+f_{i-2}}{12h}$ |
| $f''$ | $\dfrac{f_{i+1}-2f_i+f_{i-1}}{h^2}$ | $\dfrac{-f_{i+2}+16f_{i+1}-30f_i+16f_{i-1}-f_{i-2}}{12h^2}$ |
| $f'''$ | $\dfrac{f_{i+2}-2f_{i+1}+2f_{i-1}-f_{i-2}}{2h^3}$ | $\dfrac{-f_{i+3}+8f_{i+2}-13f_{i+1}+13f_{i-1}-8f_{i-2}+f_{i-3}}{8h^3}$ |
| $f^{(4)}$ | $\dfrac{f_{i+2}-4f_{i+1}+6f_i-4f_{i-1}+f_{i-2}}{h^4}$ | $O(h^4)$ 공식 (가중치 계수 39, 56 등) |

### Ex 21.1 — 비교
$f(x) = -0.1x^4 - 0.15x^3 - 0.5x^2 - 0.25x + 1.2$, $h = 0.25$  
참값: $f'(0.5) = -0.9125$

| 종류 | $O(h)$/$O(h^2)$ 추정 | $\varepsilon_t$ |
| --- | --- | --- |
| Backward $O(h)$ | $-0.8593$ | 5.8% |
| Centered $O(h^2)$ | $-0.9344$ | 2.4% |
| Forward $O(h)$ | $-1.1546$ | 26.5% |
| Backward $O(h^2)$ | $-0.8781$ | 3.8% |
| **Centered $O(h^4)$** | **$-0.9125$** | **0%** |
| Forward $O(h^2)$ | $-0.8594$ | 5.8% |

→ **Centered + 고차** 공식이 압도적으로 정확.

## 21.3 Richardson Extrapolation (미분 ver.)

[[Ch20-1 Romberg Integration|Romberg]]와 유사한 아이디어로 미분 정확도 향상.

Centered FD의 오차 전개:
$$D = D(h) - \frac{f'''}{6}h^2 - \frac{f^{(5)}}{120}h^4 - \cdots$$

두 step $h$, $h/2$로:
$$D(h) = D + \frac{f'''}{6}h^2 + \frac{f^{(5)}}{120}h^4 + \cdots$$
$$D(h/2) = D + \frac{f'''}{24}h^2 + \frac{f^{(5)}}{1920}h^4 + \cdots$$

$4 D(h/2) - D(h)$에서 $h^2$ 항 소거:
$$\boxed{D = \frac{4D(h/2) - D(h)}{3} + O(h^4)}$$

→ 두 개의 $O(h^2)$ centered 추정치를 조합해 $O(h^4)$!

### Ex 21.2 — Richardson Extrapolation
같은 함수, $h_1 = 0.5$, $h_2 = 0.25$:

- $D(0.5) = \dfrac{0.2 - 1.2}{1} = -1.0$, $\varepsilon_t = -9.6\%$
- $D(0.25) = \dfrac{0.6363281 - 1.103516}{0.5} = -0.934375$, $\varepsilon_t = -2.4\%$

Richardson:
$$D = \frac{4}{3}(-0.934375) - \frac{1}{3}(-1.0) = -0.9125 \;(\varepsilon_t = 0\%)$$

→ **정확한 값**과 일치!

## 21.4 Derivatives of Unequally Spaced Data

비등간격 데이터에는 **Lagrange 보간 다항식**을 적합시키고 해석적으로 미분.

3점 $(x_0, f_0), (x_1, f_1), (x_2, f_2)$의 Lagrange:
$$f(x) = f_0 \frac{(x-x_1)(x-x_2)}{(x_0-x_1)(x_0-x_2)} + f_1 \frac{(x-x_0)(x-x_2)}{(x_1-x_0)(x_1-x_2)} + f_2 \frac{(x-x_0)(x-x_1)}{(x_2-x_0)(x_2-x_1)}$$

미분:
$$f'(x) = f_0 \frac{2x - x_1 - x_2}{(x_0-x_1)(x_0-x_2)} + f_1 \frac{2x - x_0 - x_2}{(x_1-x_0)(x_1-x_2)} + f_2 \frac{2x - x_0 - x_1}{(x_2-x_0)(x_2-x_1)}$$

- **임의의 $x$**에서 도함수 추정 가능
- 정확도 $O(h^2)$ (centered FD와 동일)

### Ex 21.3 — Heat Flux at Soil-Air Interface
Fourier 법칙: $q(z=0) = -k \dfrac{dT}{dz}\Big|_{z=0}$, $k = 0.5\,\text{W/m·K}$

데이터: $z = 0\,(T=13.5)$, $0.0125\,(T=12)$, $0.0375\,(T=10)$.

2차 Lagrange의 $f'(0)$:
$$f'(0) = 13.5\cdot\frac{2(0) - 0.0125 - 0.0375}{(0 - 0.0125)(0 - 0.0375)} + 12 \cdot\frac{2(0) - 0 - 0.0375}{(0.0125)(0.0125 - 0.0375)} + 10 \cdot \frac{2(0) - 0 - 0.0125}{(0.0375)(0.0375 - 0.0125)}$$
$$= -1440 + 1440 - 133.333 = -133.333\,\text{K/m}$$

따라서 $q(0) = -0.5(-133.333) = 66.667\,\text{W/m}^2$.

## 21.5 Derivatives & Integrals for Data with Errors

**수치 미분은 노이즈를 증폭시킨다** (적분은 노이즈를 평활화함).

- 미분: 작은 데이터 오차 → 결과 곡선에 큰 진동
- 적분: 양/음 오차가 평균되어 영향 작음

### 해결책
1. **Smoothing** 먼저 (least squares 회귀로 부드러운 함수 적합)
2. 그 적합된 함수를 해석적으로 미분

→ "regression then differentiate" 패턴

## 21.6 Partial Derivative

2차원 함수에 대한 centered FD:
$$\frac{\partial f}{\partial x} = \frac{f(x + \Delta x, y) - f(x - \Delta x, y)}{2\Delta x}$$
$$\frac{\partial f}{\partial y} = \frac{f(x, y + \Delta y) - f(x, y - \Delta y)}{2\Delta y}$$

혼합 편미분:
$$\frac{\partial^2 f}{\partial x \partial y} = \frac{f(x+\Delta x, y+\Delta y) - f(x+\Delta x, y-\Delta y) - f(x-\Delta x, y+\Delta y) + f(x-\Delta x, y-\Delta y)}{4\Delta x \Delta y}$$

→ PDE 수치 해석의 기본 도구.

## 21.7 MATLAB 함수

### `diff` — 인접 차분
```matlab
yi = diff(xi)
% xi: 길이 n 벡터, yi: 길이 n-1 벡터 (인접 차분)
```

#### Ex 21.4
```matlab
f = @(x) 0.2 + 25*x - 200*x.^2 + 675*x.^3 - 900*x.^4 + 400*x.^5;
x = 0:0.1:0.8;
y = f(x);
d = diff(y) ./ diff(x);   % forward FD 근사

% midpoint x 좌표 (forward FD는 구간 중점에 대응)
n = length(x);
xm = (x(1:n-1) + x(2:n)) / 2;

xa = 0:0.01:0.8;
ya = 25 - 400*xa + 3*675*xa.^2 - 4*900*xa.^3 + 5*400*xa.^4;  % 해석적 도함수
plot(xm, d, 'o', xa, ya)
```

`diff(y)./diff(x)`로 얻은 점은 구간의 **중점**에 정확히 대응 (centered FD가 됨).

### `gradient` — 양끝 처리 포함
```matlab
fx = gradient(f)         % 양끝은 forward/backward, 내부는 centered
fx = gradient(f, h)      % h: 간격
```

내부에서 사용하는 공식:
- $fx_1 = f_2 - f_1$ (forward, 양끝)
- $fx_i = \dfrac{f_{i+1} - f_{i-1}}{2}$ ($i = 2, \ldots, n-1$, centered)
- $fx_n = f_n - f_{n-1}$ (backward)

→ `gradient`는 `diff`와 달리 **출력 벡터 길이가 입력과 같음** (양끝 보정).

### Ex 21.5
```matlab
f = @(x) 0.2 + 25*x - 200*x.^2 + 675*x.^3 - 900*x.^4 + 400*x.^5;
x = 0:0.1:0.8;
y = f(x);
fx = gradient(y, 0.1);
plot(x, fx, 'o', xa, ya)
```

`diff`보다 결과 길이가 같아 시각화·후속 계산에 편리.

## 정리

| 상황 | 권장 방법 |
| --- | --- |
| 해석 함수 + 등간격 | Centered FD $O(h^4)$ 또는 Richardson |
| 표 데이터 + 비등간격 | Lagrange 미분 (2차 다항식 → $O(h^2)$) |
| 노이즈 데이터 | 회귀로 smoothing → 해석적 미분 |
| MATLAB 등간격 | `gradient(y, h)` |
| 단순 비교 | `diff(y)./diff(x)` |

---

← [[Ch20-2 Gauss Quadrature]] | ↑ [[Numerical Analysis]] | → [[Ch22 Initial Value Problems — Euler Heun RK]]

#numerical-analysis #ch21 #numerical-differentiation #finite-difference
