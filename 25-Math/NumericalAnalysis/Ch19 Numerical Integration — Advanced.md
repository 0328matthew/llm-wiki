---
title: Ch19 Numerical Integration - Advanced Topics
chapter: 19
part: 5
tags:
  - numerical-analysis
  - numerical-integration
  - newton-cotes
  - boole-rule
  - multiple-integrals
---

# Ch19. Numerical Integration — Higher-order Newton-Cotes, Unequal, Open, Multiple

## 19.5 Higher-order Newton-Cotes (Closed)

표 (등간격 $h = (b-a)/n$, 가중치 정규화):

| Seg $n$ | Pts | 이름 | 가중치 / $(b-a)$ | 오차 |
| --- | --- | --- | --- | --- |
| 1 | 2 | Trapezoidal | $(f_0 + f_1)/2$ | $-h^3 f''/12$ |
| 2 | 3 | **Simpson 1/3** | $(f_0 + 4f_1 + f_2)/6$ | $-h^5 f^{(4)}/90$ |
| 3 | 4 | Simpson 3/8 | $(f_0 + 3f_1 + 3f_2 + f_3)/8$ | $-3h^5 f^{(4)}/80$ |
| 4 | 5 | **Boole** | $(7f_0 + 32f_1 + 12f_2 + 32f_3 + 7f_4)/90$ | $-8h^7 f^{(6)}/945$ |
| 5 | 6 | — | $(19f_0 + 75f_1 + 50f_2 + 50f_3 + 75f_4 + 19f_5)/288$ | $-275h^7 f^{(6)}/12096$ |

- **짝수-segment + 홀수-point** 공식이 보통 선호 (정확도 한 차원 ↑)
- 실무에서는 보통 **Simpson rules** + composite로 충분
- 4 points 이상은 거의 사용 X

## 19.6 Integration with Unequal Segments

데이터 점이 **등간격이 아닐 때**, 각 segment에 trapezoidal rule 따로 적용:
$$I = \sum_{i=1}^{n} h_i \,\frac{f(x_{i-1}) + f(x_i)}{2}$$
($h_i = x_i - x_{i-1}$)

### Ex 19.6
$x = 0, 0.12, 0.22, 0.32, 0.36, 0.40, 0.44, 0.54, 0.64, 0.70, 0.80$에서  
$I \approx 1.594801$, $\varepsilon_t = 2.8\%$.

### MATLAB
```matlab
function I = trapuneq(x, y)
% Unequal-spacing trapezoidal rule
n = length(x);
s = 0;
for k = 1:n-1
    s = s + (x(k+1) - x(k)) * (y(k) + y(k+1))/2;
end
I = s;
```

내장: `trapz(x, y)` — 비등간격 자동 처리.

## 19.7 Open Methods (Newton-Cotes Open Formulas)

양 끝점을 사용하지 않는 공식 — 적분 한계가 무한대거나 발산 특이점이 있을 때.

| Seg $n$ | Pts | 가중치 | 오차 |
| --- | --- | --- | --- |
| 2 | 1 | **Midpoint**: $(b-a)f(x_1)$ | $h^3 f''/3$ |
| 3 | 2 | $(b-a)(f_1+f_2)/2$ | $3h^3 f''/4$ |
| 4 | 3 | $(b-a)(2f_1 - f_2 + 2f_3)/3$ | $14h^5 f^{(4)}/45$ |
| ... | ... | ... | ... |

- 짝수-segment 공식이 보통 선호
- ODE의 predictor-corrector에서 활용 (예: Adams-Bashforth)
- 일반적인 적분에는 잘 안 씀

## 19.8 Multiple Integrals

### 이중 적분 = 적분의 적분
$$\int_c^d \int_a^b f(x, y)\,dx\,dy = \int_a^b \int_c^d f(x, y)\,dy\,dx$$

### 사각형 영역에서의 평균 (2-D 함수)
$$\bar f = \frac{\int_c^d \int_a^b f(x,y)\,dx\,dy}{(d-c)(b-a)}$$

### Ex 19.8 — Heated plate
$$T(x, y) = 2xy + 2x - x^2 - 2y^2 + 72$$
$0 \le x \le 8, \; 0 \le y \le 6$, 평균 온도를 2-segment trapezoidal 합성.

#### 각 $y$에서 $x$ 방향 적분 먼저
$y=0$: $\int_0^8 T(x, 0)\,dx \approx 8 \times \frac{72 + 2(64) + 24}{4} = 448$  
$y=3$: $\approx 8 \times \frac{54 + 2(70) + 54}{4} = 496$  
$y=6$: $\approx 8 \times \frac{0 + 2(40) + 48}{4} = 256$

#### $y$ 방향 적분
$\int_0^6 \approx 6 \times \frac{256 + 2(496) + 448}{4} = 2688$

평균: $\bar T = 2688 / (8 \times 6) = 56$.

### 일반화
3차원 이상은 **Monte Carlo integration** 또는 sparse grid가 더 효율적.

---

← [[Ch19 Numerical Integration — Trapezoidal Simpson]] | → [[Ch19-2 Gauss Quadrature와 Romberg]]

#numerical-analysis #ch19 #numerical-integration #multiple-integrals
