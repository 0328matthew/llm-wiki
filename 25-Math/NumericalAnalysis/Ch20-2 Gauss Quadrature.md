---
title: Ch20-2 Gauss Quadrature
chapter: 20
part: 5
tags:
  - numerical-analysis
  - gauss-quadrature
  - gauss-legendre
---

# Ch20-2. Gauss Quadrature

## 20.3 핵심 아이디어

[[Ch19 Numerical Integration — Trapezoidal Simpson|Trapezoidal Rule]]는 **양 끝점**을 잇는 직선으로 적분 → 곡률이 크면 큰 오차.

대안: **곡선 위 임의의 두 점**을 잘 선택하면, 양의 오차와 음의 오차가 **상쇄**되어 훨씬 정확한 결과를 얻을 수 있다.

→ **점의 위치 자체를 미지수로** 두고 정확도를 극대화하는 방법이 **Gauss Quadrature**.

## 20.3.1 2-point Gauss–Legendre Formula

표준 구간 $[-1, 1]$에서:
$$I = \int_{-1}^{1} f(x)\,dx \approx c_0 f(x_0) + c_1 f(x_1)$$

미지수 4개 ($c_0, c_1, x_0, x_1$) → 4 조건 필요:  
$f(x) = 1, x, x^2, x^3$에 대해 **정확**하도록 요구.

$$\int_{-1}^1 1\,dx = 2 = c_0 + c_1$$
$$\int_{-1}^1 x\,dx = 0 = c_0 x_0 + c_1 x_1$$
$$\int_{-1}^1 x^2 dx = \frac{2}{3} = c_0 x_0^2 + c_1 x_1^2$$
$$\int_{-1}^1 x^3 dx = 0 = c_0 x_0^3 + c_1 x_1^3$$

풀이:
$$\boxed{c_0 = c_1 = 1, \quad x_0 = -\tfrac{1}{\sqrt 3} \approx -0.5773503, \quad x_1 = +\tfrac{1}{\sqrt 3} \approx 0.5773503}$$

### 2-point 공식
$$I \approx f\!\left(-\tfrac{1}{\sqrt 3}\right) + f\!\left(+\tfrac{1}{\sqrt 3}\right)$$

→ **단 2점만 평가**하고도 **3차 다항식까지 정확**! (Simpson 1/3과 같은 정확도지만, 2점만 사용)

## 변수 변환 ($[a, b] \to [-1, 1]$)

$$x = \frac{(b+a) + (b-a)t}{2}, \quad dx = \frac{b-a}{2}dt$$

따라서
$$\int_a^b f(x)\,dx = \int_{-1}^1 \tilde f(t)\,dt, \quad \tilde f(t) = \frac{b-a}{2}\,f\!\left(\frac{(b+a)+(b-a)t}{2}\right)$$

2-point Gauss-Legendre:
$$I \approx \tilde f\!\left(-\tfrac{1}{\sqrt 3}\right) + \tilde f\!\left(+\tfrac{1}{\sqrt 3}\right)$$

## Ex 20.2 — 2-point Gauss-Legendre
$f(x) = 0.2 + 25x - 200x^2 + 675x^3 - 900x^4 + 400x^5$, $[0, 0.8]$, 참값 1.640533.

$x = 0.4 + 0.4t$이므로:
- $t = -1/\sqrt{3}$: $x = 0.16906$, $\tilde f = 0.4 f(0.16906) = 0.516741$
- $t = +1/\sqrt{3}$: $x = 0.63093$, $\tilde f = 0.4 f(0.63093) = 1.305837$

$I = 0.516741 + 1.305837 = 1.822578, \quad \varepsilon_t = -11.1\%$

→ 2점만으로 비교적 좋은 추정 (Trapezoidal 89.5%, Simpson 1/3 16.6%보다 나쁘지만, 가중치 분포 차이로 함수 적분 정확도가 함수에 따라 다름).

## Higher-Point Formula

$n$-point Gauss-Legendre:
$$I = \int_{-1}^1 f(x)\,dx \approx \sum_{i=0}^{n-1} c_i f(x_i)$$

- 미지수 $2n$ → $2n$ 조건
- $f(x) = 1, x, \ldots, x^{2n-1}$에 대해 정확
- 결과: **$(2n-1)$차 다항식까지 정확**

### 가중치 & 인자 표

| $n$ | 가중치 $c_i$ | 점 $x_i$ | 오차 |
| --- | --- | --- | --- |
| 2 | 1.0000000, 1.0000000 | ±0.577350269 | $\propto f^{(4)}$ |
| 3 | 0.5555556, 0.8888889, 0.5555556 | ±0.774596669, 0 | $\propto f^{(6)}$ |
| 4 | 0.3478548, 0.6521452, 0.6521452, 0.3478548 | ±0.861136312, ±0.339981044 | $\propto f^{(8)}$ |
| 5 | 0.2369269, 0.4786287, **0.5688889**, 0.4786287, 0.2369269 | ±0.906179846, ±0.538469310, 0 | $\propto f^{(10)}$ |
| 6 | 0.1713245, 0.3607616, 0.4679139, ... | ±0.932469514, ±0.661209386, ±0.238619186 | $\propto f^{(12)}$ |

→ $n$점은 $(2n-1)$차 다항식까지 정확.

## Ex 20.3 — 3-point Gauss-Legendre
같은 $f(x)$, $[0, 0.8]$.

$c_0 = c_2 = 0.5555556$, $c_1 = 0.8888889$  
$t_0 = -\sqrt{3/5} \approx -0.7745967$, $t_1 = 0$, $t_2 = +\sqrt{3/5}$

$x = 0.4 + 0.4t$:
- $x_0 = 0.0901613$, $x_1 = 0.4$, $x_2 = 0.7098387$

$$I = 0.4[0.5555556\,f(0.0901613) + 0.8888889\,f(0.4) + 0.5555556\,f(0.7098387)]$$
$$= 0.2813013 + 0.8732444 + 0.4859876 = 1.640533$$

→ **5차 다항식**에 대해 3점으로 **정확한 값**!

## 일반화 — 가중함수 적분
$$\int_a^b w(x)\,f(x)\,dx \approx \sum c_i f(x_i)$$

- **Gauss-Legendre**: $w(x) = 1$, $[-1, 1]$
- **Gauss-Chebyshev**: $w(x) = 1/\sqrt{1-x^2}$, $[-1, 1]$
- **Gauss-Hermite**: $w(x) = e^{-x^2}$, $(-\infty, \infty)$
- **Gauss-Laguerre**: $w(x) = e^{-x}$, $[0, \infty)$

## 정리

| 방법 | 점 수 $n$ | 정확도 | 강점 |
| --- | --- | --- | --- |
| Trapezoidal | 2 | 1차 | 끝점 사용 |
| Simpson 1/3 | 3 | 3차 | 등간격 |
| Gauss-Legendre 2pt | 2 | **3차** | 점 위치 최적화 |
| Gauss-Legendre 3pt | 3 | **5차** | 매우 효율적 |
| Gauss-Legendre $n$pt | $n$ | $(2n-1)$차 | 함수 적분 표준 |

⚠ 단점: 함수값을 임의 점에서 평가 가능해야 함 (표 데이터에는 직접 적용 불가, 보간 필요).

---

← [[Ch20-1 Romberg Integration]] | → [[Ch21 Numerical Differentiation]]

#numerical-analysis #ch20 #gauss-quadrature #gauss-legendre
