---
title: Ch14 Linear Regression
chapter: 14
part: 4
tags:
  - numerical-analysis
  - regression
  - least-squares
  - curve-fitting
---

# Ch14. Linear Regression

> **Part 4 — Curve Fitting & Interpolation**의 시작.  
> 측정 데이터에 가장 잘 맞는 직선(또는 곡선)을 찾는 문제.

## 14.3 Linear Least-Square Regression

### 직선 적합 $y = a + bx$
데이터 $(x_i, y_i),\, i=1,\ldots,n$에 대해 잔차(residual)
$$e_i = y_i - a - b x_i$$

**최소제곱 기준**: 잔차 제곱합 $S$를 최소화
$$S = \sum_{i=1}^{n} e_i^2 = \sum_{i=1}^{n} (y_i - a - b x_i)^2$$

### Normal Equations
$\partial S/\partial a = 0$, $\partial S/\partial b = 0$ 에서:
$$\sum (y_i - a - b x_i) = 0, \quad \sum x_i (y_i - a - b x_i) = 0$$

정리:
$$\boxed{
\begin{bmatrix} n & \sum x_i \\ \sum x_i & \sum x_i^2 \end{bmatrix}\begin{Bmatrix} a \\ b \end{Bmatrix} = \begin{Bmatrix} \sum y_i \\ \sum x_i y_i \end{Bmatrix}
}$$

이 2×2 시스템을 풀면 $a, b$ 결정.

### 닫힌 형태
$$b = \frac{n\sum x_i y_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2}, \quad a = \bar y - b\bar x$$

### 적합도 척도
- 잔차 제곱합 $S_r = \sum e_i^2$
- 총 제곱합 $S_t = \sum (y_i - \bar y)^2$
- 결정계수 $r^2 = \dfrac{S_t - S_r}{S_t}$ ($1$에 가까울수록 좋음)
- 표준오차 $s_{y/x} = \sqrt{\dfrac{S_r}{n - 2}}$

### Ex 14.4
$$\sum x = 360,\;\sum y = 5135,\;\sum x^2 = 20400,\;\sum xy = 312850,\;n=8$$
$$\begin{bmatrix} 8 & 360 \\ 360 & 20400 \end{bmatrix}\begin{Bmatrix} a \\ b \end{Bmatrix} = \begin{Bmatrix} 5135 \\ 312850 \end{Bmatrix}$$

## 14.4 Linearization of Nonlinear Relationships

비선형 모델도 **변수 변환**으로 선형 회귀로 변환 가능:

| 원 모델 | 변환 | 선형 형태 |
| --- | --- | --- |
| **Exponential** $y = \alpha_1 e^{\beta_1 x}$ | $\ln$ | $\ln y = \ln\alpha_1 + \beta_1 x$ |
| **Power** $y = \alpha_2 x^{\beta_2}$ | $\log$ | $\log y = \log\alpha_2 + \beta_2 \log x$ |
| **Saturation** $y = \alpha_3 \dfrac{x}{\beta_3 + x}$ | 역수 | $\dfrac{1}{y} = \dfrac{1}{\alpha_3} + \dfrac{\beta_3}{\alpha_3}\dfrac{1}{x}$ |

### 응용
- Exponential: 인구 성장, 방사성 붕괴
- Power: 응력-변형률, 유체역학 (Re, Cd 관계)
- Saturation: 효소 반응, Monod 모델

### Ex 14.6 — Exponential fit
$(x, y) = (0, 1.93), (1, 5.55), (2, 14.56), (3, 41.09), (4, 105.12)$  
$\log y$를 종속으로 두고 선형 회귀.

## 정리
- 적합(Fit) ≠ 보간(Interpolation): 잡음 있는 데이터엔 적합, 정확한 데이터엔 [[Ch15 General Linear LS와 Nonlinear Regression|보간]]
- $r^2$ 외에 잔차 그래프(residual plot)로 모델 적합성 진단
- 변환 후의 회귀는 원 변수의 오차 가정과 다를 수 있음 → 주의

---

← [[Ch13 Eigenvalues]] | → [[Ch15 General Linear LS와 Nonlinear Regression]]

#numerical-analysis #ch14 #regression #least-squares
