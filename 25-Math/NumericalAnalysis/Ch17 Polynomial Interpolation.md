---
title: Ch17 Polynomial Interpolation (Newton, Lagrange)
chapter: 17
part: 4
tags:
  - numerical-analysis
  - interpolation
  - newton-polynomial
  - lagrange-polynomial
---

# Ch17. Polynomial Interpolation

> **회귀(Regression)와 차이**: 회귀는 잡음 있는 데이터를 평균적으로 따라가는 곡선, **보간(Interpolation)은 모든 데이터 점을 정확히 통과하는 곡선**.

## 17.1 Introduction

$n$개의 데이터 점을 지나는 **유일한 $(n-1)$차 다항식**을 찾는 문제:
$$f(x) = a_1 + a_2 x + a_3 x^2 + \cdots + a_n x^{n-1}$$

- 2점 → 1차 (직선)
- 3점 → 2차 (포물선)
- 4점 → 3차 (cubic)

### 직접 풀이의 단점 (Vandermonde 시스템)
$f(x) = p_1 x^2 + p_2 x + p_3$의 계수를 풀려면:
$$\begin{bmatrix} x_1^2 & x_1 & 1 \\ x_2^2 & x_2 & 1 \\ x_3^2 & x_3 & 1 \end{bmatrix}\begin{Bmatrix} p_1 \\ p_2 \\ p_3 \end{Bmatrix} = \begin{Bmatrix} f(x_1) \\ f(x_2) \\ f(x_3) \end{Bmatrix}$$

→ Vandermonde 행렬은 **매우 ill-conditioned** (특히 $n$이 클 때). 사용 ❌.

→ **Newton**, **Lagrange** 다항식 사용.

### MATLAB
- `p = polyfit(x, y, m)` — $m$차 다항식 적합
- `yi = polyval(p, xi)` — 적합 다항식의 값 계산
- 데이터 수 > 계수 수: 회귀 / 데이터 수 = 계수 수: 보간

## 17.2 Newton's Interpolating Polynomial

### Linear (2점)
$$f_1(x) = f(x_1) + \frac{f(x_2) - f(x_1)}{x_2 - x_1}(x - x_1) = b_1 + b_2(x - x_1)$$

#### Ex 17.2 — $\ln 2$ 추정
- $x_1=1$, $x_2=6$: $f_1(2) = 0 + \dfrac{1.791759-0}{6-1}(2-1) = 0.3584$
- $x_1=1$, $x_2=4$: $f_1(2) = 0 + \dfrac{1.386294-0}{4-1}(2-1) = 0.4621$  
참값 $\ln 2 = 0.6931$ — 좁은 구간이 더 정확.

### Quadratic (3점)
$$f_2(x) = b_1 + b_2(x - x_1) + b_3(x - x_1)(x - x_2)$$

계수:
$$b_1 = f(x_1), \quad b_2 = \frac{f(x_2)-f(x_1)}{x_2 - x_1}, \quad b_3 = \frac{\dfrac{f(x_3)-f(x_2)}{x_3-x_2} - \dfrac{f(x_2)-f(x_1)}{x_2-x_1}}{x_3 - x_1}$$

$b_3$은 **2차 finite divided difference** = 2차 도함수 근사.

#### Ex 17.3 — $\ln 2$ 2차 추정
$x_1=1, x_2=4, x_3=6$ → $f_2(2) = 0.5658$ (참값 0.6931에 더 가까움).

### General Newton Polynomial
$$\boxed{f_{n-1}(x) = f(x_1) + \sum_{k=2}^{n} f[x_k, \ldots, x_1] \prod_{j=1}^{k-1}(x - x_j)}$$

#### Finite Divided Differences
- 1차: $f[x_i, x_j] = \dfrac{f(x_i) - f(x_j)}{x_i - x_j}$
- 2차: $f[x_i, x_j, x_k] = \dfrac{f[x_i, x_j] - f[x_j, x_k]}{x_i - x_k}$
- $(n-1)$차: 재귀적으로 정의

### 장점
- **불균등 간격(non-equally spaced)** 데이터에 사용 가능
- **재귀적** — 새 점을 추가해도 기존 계수 재사용 (낮은 차수 → 높은 차수 점진적 개선)

## 17.3 Lagrange Interpolating Polynomial

### Linear (2점)
$$f_1(x) = L_1(x)f(x_1) + L_2(x)f(x_2)$$
$$L_1(x) = \frac{x - x_2}{x_1 - x_2}, \quad L_2(x) = \frac{x - x_1}{x_2 - x_1}$$

성질: $L_i(x_j) = \delta_{ij}$ ($i=j$일 때 1, 아니면 0).

### Quadratic (3점)
$$f_2(x) = \sum_{i=1}^{3} L_i(x) f(x_i)$$
$$L_1(x) = \frac{(x-x_2)(x-x_3)}{(x_1-x_2)(x_1-x_3)}, \quad L_2(x) = \frac{(x-x_1)(x-x_3)}{(x_2-x_1)(x_2-x_3)}, \quad L_3(x) = \frac{(x-x_1)(x-x_2)}{(x_3-x_1)(x_3-x_2)}$$

### General (n점)
$$\boxed{f_{n-1}(x) = \sum_{i=1}^{n} L_i(x) f(x_i), \quad L_i(x) = \prod_{\substack{j=1 \\ j\ne i}}^{n} \frac{x - x_j}{x_i - x_j}}$$

### Ex 17.5 — Motor oil density at $T=15°C$
$(0, 3.85), (20, 0.800), (40, 0.212)$

#### 1차 ($x_1=0, x_2=20$)
$$f_1(15) = \frac{15-20}{0-20}(3.85) + \frac{15-0}{20-0}(0.800) = 1.5625$$

#### 2차
$$f_2(15) = \frac{(15-20)(15-40)}{(0-20)(0-40)}(3.85) + \frac{(15-0)(15-40)}{(20-0)(20-40)}(0.800) + \frac{(15-0)(15-20)}{(40-0)(40-20)}(0.212) = 1.3317$$

### MATLAB `Lagrange`
```matlab
function yint = Lagrange(x, y, xx)
n = length(x);
s = 0;
for i = 1:n
    product = y(i);
    for j = 1:n
        if i ~= j
            product = product * (xx - x(j)) / (x(i) - x(j));
        end
    end
    s = s + product;
end
yint = s;
```

## Newton vs Lagrange

| 항목 | Newton | Lagrange |
| --- | --- | --- |
| 새 점 추가 | 쉬움 (계수 추가) | 전체 다시 계산 |
| 계수 의미 | finite divided differences | 직관적 형태 |
| 계산 효율 | 좋음 | 약간 비효율 |
| 이론적 등가성 | 같은 다항식 | 같은 다항식 |

**둘 다 결과는 동일한 보간 다항식**. Newton은 계산 효율, Lagrange는 수학적 표현이 깔끔.

## Runge 현상 (주의)
고차 다항식 보간은 끝부분에서 **격렬한 진동**을 일으킬 수 있다 (Runge phenomenon).  
→ **해결책**: [[Ch18 Splines와 Piecewise Interpolation|구간별 저차 다항식 = Splines]]

---

← [[Ch15 General Linear LS와 Nonlinear Regression]] | → [[Ch18 Splines와 Piecewise Interpolation]]

#numerical-analysis #ch17 #interpolation #newton-polynomial #lagrange-polynomial
