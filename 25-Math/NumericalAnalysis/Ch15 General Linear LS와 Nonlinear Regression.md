---
title: Ch15 General Linear LS & Nonlinear Regression
chapter: 15
part: 4
tags:
  - numerical-analysis
  - polynomial-regression
  - nonlinear-regression
  - least-squares
---

# Ch15. General Linear Least Squares & Nonlinear Regression

## 15.1 Polynomial Regression

직선으로 부족할 때 → **고차 다항식** 적합:
$$y = a_0 + a_1 x + a_2 x^2 + \cdots + a_m x^m + e$$

### 최소제곱 함수
$$S_r = \sum_{i=1}^{n} (y_i - a_0 - a_1 x_i - a_2 x_i^2 - \cdots - a_m x_i^m)^2$$

### Normal Equations (2차의 경우, $m=2$)
$$\begin{bmatrix} n & \sum x_i & \sum x_i^2 \\ \sum x_i & \sum x_i^2 & \sum x_i^3 \\ \sum x_i^2 & \sum x_i^3 & \sum x_i^4 \end{bmatrix}\begin{Bmatrix} a_0 \\ a_1 \\ a_2 \end{Bmatrix} = \begin{Bmatrix} \sum y_i \\ \sum x_i y_i \\ \sum x_i^2 y_i \end{Bmatrix}$$

### 적합도
- 표준오차: $s_{y/x} = \sqrt{\dfrac{S_r}{n - (m+1)}}$ ($m+1$ 자유도 손실)
- 결정계수: $r^2 = \dfrac{S_t - S_r}{S_t}$

### Ex 15.1
$(x, y)$: $(0, 2.1), (1, 7.7), (2, 13.6), (3, 27.2), (4, 40.9), (5, 61.1)$  
2차 다항식 $y = a_0 + a_1 x + a_2 x^2$ 적합 → 정상방정식 시스템 풀이.

## 15.2 Multiple Linear Regression

종속변수가 여러 독립변수의 선형결합인 모델:
$$y = a_0 + a_1 x_1 + a_2 x_2 + \cdots + a_m x_m + e$$

### Normal Equations ($x_1, x_2$ 의 경우)
$$\begin{bmatrix} n & \sum x_{1,i} & \sum x_{2,i} \\ \sum x_{1,i} & \sum x_{1,i}^2 & \sum x_{1,i}x_{2,i} \\ \sum x_{2,i} & \sum x_{1,i}x_{2,i} & \sum x_{2,i}^2 \end{bmatrix}\{a\} = \begin{Bmatrix} \sum y_i \\ \sum x_{1,i} y_i \\ \sum x_{2,i} y_i \end{Bmatrix}$$

### Ex 15.2
$(x_1, x_2, y)$ 6 데이터 → $y = 5 + 4 x_1 - 3 x_2$ 적합 (예시 정답).

## 15.3 General Linear Least Squares (Matrix Form)

다항/다중회귀를 통합한 일반 모델:
$$y = a_0 z_0(x) + a_1 z_1(x) + \cdots + a_m z_m(x)$$
($z_k(x)$는 기저함수: $1, x, x^2$, $\sin\,$, $\exp\,$ 등)

행렬 표기:
$$\{Y\} = [Z]\{A\} + \{E\}$$

**Normal Equations** (행렬형):
$$\boxed{[Z]^T [Z]\,\{A\} = [Z]^T \{Y\}}$$

→ MATLAB: `A = (Z'*Z)\(Z'*Y)` 또는 더 안정적인 `A = Z\Y`

## 15.5 Nonlinear Regression

모수에 비선형으로 의존하는 모델, 예:
$$y = a_0 (1 - e^{-a_1 x}) + e$$

여기서 $a_1$이 지수 안에 있어 변환으로 선형화 불가 → **직접 비선형 최적화**.

목적함수:
$$f(a_0, a_1) = \sum_{i=1}^{n} \left[y_i - a_0(1 - e^{-a_1 x_i})\right]^2 \to \min$$

MATLAB:
```matlab
[x, fval] = fminsearch(fun, x0, options, p1, p2, ...)
```
또는 `nlinfit` (Statistics Toolbox), `lsqcurvefit` (Optimization Toolbox).

### Gauss-Newton / Levenberg-Marquardt
실무에서 자주 쓰는 비선형 최소제곱 알고리즘:
- **Gauss-Newton**: 잔차의 Jacobian으로 Newton 변형
- **Levenberg-Marquardt**: G-N에 damping 항 추가 → 더 robust

## 정리
- 모수에 **선형**이면 Normal Equations로 닫힌 형태
- 모수에 **비선형**이면 반복 최적화 (Gauss-Newton, L-M)
- 모델 선택은 데이터 외에 **물리적 타당성**도 고려
- 너무 고차 다항식은 **overfitting** 위험

---

← [[Ch14 Curve Fitting — Linear Regression]] | → [[Ch17 Splines]]

#numerical-analysis #ch15 #polynomial-regression #nonlinear-regression
